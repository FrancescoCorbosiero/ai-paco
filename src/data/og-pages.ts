/**
 * Mappa route → titolo/descrizione per le card Open Graph generate a
 * build (vedi src/pages/og/[...route].ts). Le chiavi includono
 * l'estensione .png così le URL finali sono /og/<chiave>.
 */

export interface OgPage {
  title: string;
  description: string;
}

export const ogPages: Record<string, OgPage> = {
  'index.png': {
    title: 'Il sito della tua attività, creato e gestito su WhatsApp.',
    description: 'Dillo a Paco. — early access Q4 2026',
  },
  'come-funziona.png': {
    title: 'Racconti la tua attività. Il sito lo fa Paco.',
    description: 'Come funziona, dal primo messaggio al sito online',
  },
  'prezzi.png': {
    title: 'Un canone chiaro. Nessun preventivo.',
    description: 'Tariffa fondatori 39 €/mese — primi 50 attivati',
  },
  'per-chi.png': {
    title: 'Fatto per chi ha le mani occupate.',
    description: 'Ristoranti, saloni, artigiani, professionisti',
  },
  'per-chi/ristoranti.png': {
    title: 'Il sito del tuo ristorante si aggiorna da WhatsApp.',
    description: 'Menù, orari, offerte: un messaggio e sono online',
  },
  'per-chi/parrucchieri.png': {
    title: 'Il sito del tuo salone lo fa Paco.',
    description: 'Listino da una foto, aggiornamenti in chat',
  },
  'per-chi/artigiani.png': {
    title: 'Un sito che risponde mentre tu lavori.',
    description: 'Urgenze qualificate, richieste già ordinate',
  },
  'per-chi/professionisti.png': {
    title: 'Il tuo studio presentato bene.',
    description: 'Richieste qualificate, mai consulenza automatica',
  },
  'manifesto.png': {
    title: 'I siti non muoiono di brutto design. Muoiono di abbandono.',
    description: 'Il manifesto di Paco',
  },
  'faq.png': {
    title: 'Domande frequenti su Paco',
    description: 'Risposte dirette, zero gergo tecnico',
  },
  'blog.png': {
    title: 'Il blog di Paco',
    description: 'Siti vivi, piccole attività, WhatsApp',
  },
  'early-access.png': {
    title: 'Entra in early access.',
    description: '50 posti fondatori · Q4 2026 · dillo a Paco',
  },
};

/** Ritorna il percorso della card OG per un pathname, con fallback alla home. */
export function ogImageFor(pathname: string): string {
  const key = pathname.replace(/^\/+|\/+$/g, '') || 'index';
  return `${ogPages[`${key}.png`] ? `/og/${key}.png` : '/og/index.png'}`;
}
