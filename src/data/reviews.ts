/**
 * Recensioni REALI dei fondatori — vuoto fino all'early access.
 *
 * Regola di prodotto (docs/product/01-product-brief.md e vincoli di
 * progetto): mai testimonial inventati. Finché questo array è vuoto, il
 * blocco «voci» del sito mostra la composizione onesta (scene simulate
 * dichiarate + posti fondatori). Appena arrivano recensioni vere, si
 * aggiungono qui — con consenso scritto della persona citata — e il
 * componente le mostra al posto dei segnaposto.
 */

export interface Review {
  autore: string;
  attivita: string;
  citta: string;
  testo: string;
  /** numero fondatore (1–50), mostrato come badge */
  fondatore?: number;
}

export const reviews: Review[] = [];
