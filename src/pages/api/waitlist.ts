import type { APIRoute } from 'astro';

export const prerender = false;

/**
 * Endpoint lista d'attesa.
 * Difese: honeypot ("website"), time-trap (campo "t", solo con JS),
 * validazione campi e rate limiting per IP.
 *
 * Il rate limiting è in memoria: su serverless vale per istanza, che per
 * un form di waitlist è una prima difesa accettabile. Per una protezione
 * seria in produzione, sostituire con uno store condiviso (es. Upstash
 * Redis) mantenendo la stessa interfaccia `isRateLimited`.
 *
 * Notifica: se RESEND_API_KEY è configurata, ogni iscrizione arriva via
 * email (Resend) a WAITLIST_TO. Senza chiave, l'iscrizione viene solo
 * loggata: il form resta funzionante in ogni ambiente.
 */

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((ts) => now - ts < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

interface Submission {
  nome: string;
  attivita: string;
  whatsapp: string;
}

function validate(form: FormData): { ok: true; data: Submission } | { ok: false; error: string } {
  const nome = String(form.get('nome') ?? '').trim();
  const attivita = String(form.get('attivita') ?? '').trim();
  const whatsapp = String(form.get('whatsapp') ?? '').trim();
  const consenso = form.get('consenso');

  if (nome.length < 2 || nome.length > 120) {
    return { ok: false, error: 'Il nome sembra incompleto: ricontrollalo.' };
  }
  if (attivita.length < 2 || attivita.length > 160) {
    return { ok: false, error: 'Raccontaci in due parole la tua attività.' };
  }
  const digits = whatsapp.replace(/\D/g, '');
  if (digits.length < 8 || digits.length > 15) {
    return { ok: false, error: 'Il numero WhatsApp sembra incompleto: controlla le cifre.' };
  }
  if (!consenso) {
    return { ok: false, error: 'Serve il consenso alla privacy per metterti in lista.' };
  }
  return { ok: true, data: { nome, attivita, whatsapp } };
}

async function notify(data: Submission): Promise<void> {
  // process.env, non import.meta.env: i segreti devono essere leggibili a
  // RUNTIME (container Docker, VPS), senza dover rifare la build.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log('[waitlist] nuova iscrizione (Resend non configurato):', data);
    return;
  }
  const to = process.env.WAITLIST_TO ?? 'founders@alpacode.it';
  const from = process.env.WAITLIST_FROM ?? 'Paco <onboarding@resend.dev>';
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Lista d'attesa Paco: ${data.nome} — ${data.attivita}`,
      text: [
        'Nuova iscrizione alla lista d’attesa di Paco.',
        '',
        `Nome: ${data.nome}`,
        `Attività: ${data.attivita}`,
        `WhatsApp: ${data.whatsapp}`,
        '',
        `Ricevuta il: ${new Date().toISOString()}`,
      ].join('\n'),
    }),
  });
  if (!response.ok) {
    console.error('[waitlist] invio Resend fallito:', response.status, await response.text());
  }
}

export const POST: APIRoute = async ({ request, clientAddress, redirect }) => {
  const wantsJson = request.headers.get('accept')?.includes('application/json') ?? false;

  const fail = (error: string, status = 400): Response =>
    wantsJson
      ? Response.json({ ok: false, error }, { status })
      : redirect(`/early-access?errore=${encodeURIComponent(error)}#form`, 303);

  const succeed = (): Response =>
    wantsJson ? Response.json({ ok: true }) : redirect('/grazie', 303);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail('Invio non riuscito: riprova.');
  }

  // honeypot: i bot lo compilano, gli umani no. Ai bot rispondiamo
  // "tutto ok" senza registrare nulla.
  if (String(form.get('website') ?? '') !== '') {
    return succeed();
  }

  // time-trap: se il timestamp c'è (JS attivo) e l'invio è avvenuto in
  // meno di 2,5 secondi, è quasi certamente uno script.
  const t = Number(form.get('t'));
  if (Number.isFinite(t) && t > 0 && Date.now() - t < 2500) {
    return succeed();
  }

  let ip = 'unknown';
  try {
    ip = clientAddress;
  } catch {
    // clientAddress può non essere disponibile in alcuni ambienti locali
  }
  if (isRateLimited(ip)) {
    return fail('Troppi tentativi ravvicinati: riprova tra un’ora.', 429);
  }

  const result = validate(form);
  if (!result.ok) {
    return fail(result.error);
  }

  try {
    await notify(result.data);
  } catch (error) {
    // l'iscrizione non deve fallire per un problema di notifica
    console.error('[waitlist] errore di notifica:', error);
  }

  return succeed();
};
