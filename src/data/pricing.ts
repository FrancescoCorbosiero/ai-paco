/**
 * Fasce di prezzo — fonte: docs/product/04-pricing.md (ipotesi da
 * validare). In pagina si presentano SEMPRE come prezzi di lancio
 * dell'early access, mai come listino consolidato.
 */

export interface Tier {
  id: string;
  name: string;
  price: number;
  tagline: string;
  features: string[];
  recommended?: boolean;
  founders?: { price: number; note: string };
}

export const tiers: Tier[] = [
  {
    id: 'presenza',
    name: 'Presenza',
    price: 29,
    tagline: 'Un sito vivo, senza pensieri.',
    features: [
      'Sito creato da Paco in chat',
      'Aggiornamenti via WhatsApp, illimitati',
      'Offerte con scadenza automatica',
      'Sottodominio incluso, HTTPS, mobile',
      'Riepilogo settimanale in chat',
      'Supporto in chat',
    ],
  },
  {
    id: 'assistente',
    name: 'Assistente',
    price: 59,
    tagline: 'Il sito, più Paco che risponde ai tuoi clienti.',
    recommended: true,
    founders: {
      price: 39,
      note: 'Tariffa fondatori: bloccata finché resti, per i primi 50 attivati.',
    },
    features: [
      'Tutto di Presenza',
      'Paco risponde ai clienti a qualsiasi ora',
      'Risposte solo con le informazioni del tuo sito',
      'Passaggio a te quando serve un umano',
      'Prenotazioni e richieste raccolte e ordinate',
      'Dominio proprio (.it / .com) incluso',
      'Supporto prioritario',
    ],
  },
  {
    id: 'bottega-piena',
    name: 'Bottega piena',
    price: 99,
    tagline: 'Tutto, e prima degli altri.',
    features: [
      'Tutto di Assistente',
      'Accesso in anteprima alle nuove funzioni',
      'Priorità su prenotazioni con calendario e pagamenti (in arrivo)',
      'Configurazione assistita con il team Alpacode',
    ],
  },
];

export const pricingDisclaimers: string[] = [
  'Prezzi di lancio dell’early access, IVA esclusa: potranno cambiare al lancio pubblico, mai per chi ha già attivato.',
  'Disdici quando vuoi: il mese dopo non paghi. Nessun vincolo annuale.',
  'Nessun costo di realizzazione, nessun costo a modifica: è tutto nel canone.',
  'I contenuti sono tuoi: li esporti quando vuoi.',
];
