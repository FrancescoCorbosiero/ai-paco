/**
 * Configurazione centrale della piattaforma di lancio.
 * I testi lunghi vivono nelle pagine; qui solo costanti riusate ovunque.
 */

export const SITE_NAME = 'Paco';
export const SITE_TITLE = 'Paco — il sito della tua attività, creato e gestito su WhatsApp';
export const SITE_DESCRIPTION =
  'Paco crea il sito web della tua attività e te lo tiene aggiornato da WhatsApp: tu scrivi in chat, lui pubblica. E ai tuoi clienti risponde lui, con le informazioni sempre giuste. Un prodotto Alpacode, in early access da fine 2026.';
export const TAGLINE = 'Dillo a Paco.';
export const EARLY_ACCESS_LABEL = 'Early access · Q4 2026';
export const ALPACODE_URL = 'https://alpacode.it';
export const FOUNDERS_SEATS = 50;

/**
 * Numero WhatsApp pubblico (solo cifre, con prefisso internazionale,
 * es. "393401234567"). Va impostato via env PUBLIC_WHATSAPP_NUMBER prima
 * del lancio: finché è vuoto, i componenti CTA usano il link di riserva.
 */
export const WHATSAPP_NUMBER = (import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '').replace(/\D/g, '');

export const WHATSAPP_PREFILL = 'Ciao Paco! Ho visto il sito e vorrei saperne di più.';

export function waHref(message: string = WHATSAPP_PREFILL): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
