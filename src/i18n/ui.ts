/**
 * Stringhe dell'interfaccia (header, footer, CTA ricorrenti).
 * Predisposizione EN: aggiungere `en` a `ui` e le pagine sotto
 * src/pages/en/ — le route italiane restano senza prefisso
 * (vedi i18n in astro.config.mjs). Le stringhe di pagina vivono nelle
 * pagine stesse: questo modulo copre solo la cornice comune.
 */

export const languages = { it: 'Italiano' } as const;
export const defaultLang = 'it' as const;

export const ui = {
  it: {
    'nav.comeFunziona': 'Come funziona',
    'nav.perChi': 'Per chi',
    'nav.prezzi': 'Prezzi',
    'nav.manifesto': 'Manifesto',
    'nav.blog': 'Blog',
    'nav.faq': 'Domande frequenti',
    'nav.earlyAccess': 'Entra in early access',
    'nav.menu': 'Menu',
    'cta.earlyAccess': 'Entra in early access',
    'cta.whatsapp': 'Scrivi a Paco su WhatsApp',
    'cta.comeFunziona': 'Guarda come funziona',
    'footer.prodotto': 'Prodotto',
    'footer.settori': 'Per settore',
    'footer.risorse': 'Risorse',
    'footer.legale': 'Legale',
    'footer.byline': 'Un prodotto',
    'demo.label': 'Demo simulata',
    'demo.replay': 'Riguarda',
    'demo.skip': 'Mostra tutta la conversazione',
    'skip.content': 'Salta al contenuto',
  },
} as const;

type Lang = keyof typeof ui;
type UiKey = keyof (typeof ui)[typeof defaultLang];

export function t(key: UiKey, lang: Lang = defaultLang): string {
  return ui[lang][key];
}
