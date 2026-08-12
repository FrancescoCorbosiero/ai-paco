# SEO tecnica — stato e piano

> **Stato**: fotografia di cosa è già implementato nel sito (Fase 2) e
> di cosa resta da fare al lancio. Aggiornare questo file quando si
> spunta una voce.

## Implementato (verificato in build)

| Elemento | Dove | Note |
|---|---|---|
| Title e meta description per pagina | `src/layouts/Base.astro` + ogni pagina | title ≤ 60 caratteri circa, description con intento |
| Canonical assoluto | `Base.astro` | da `SITE` (env) + pathname |
| Open Graph + Twitter card | `Base.astro` | `summary_large_image`, locale `it_IT` |
| **Card OG generate a build** in stile brand | `src/pages/og/[...route].ts` (astro-og-canvas) | 1200×630, Archivo Black + JetBrains Mono, anche per i post del blog |
| Sitemap | `@astrojs/sitemap` → `/sitemap-index.xml` | `/grazie` esclusa |
| robots.txt | `src/pages/robots.txt.ts` | Allow all + link sitemap; **early access indicizzabile by design** |
| noindex chirurgico | `/grazie`, `/404` | tutto il resto indicizzabile |
| Schema.org JSON-LD | `Base.astro` + pagine | Organization, WebSite, **Product con Offer `PreOrder`** (prezzi), FAQPage (faq, prezzi, 4 landing), BlogPosting (post) |
| RSS | `/rss.xml` | con `<language>it-IT</language>` |
| Lingua e localizzazione | `<html lang="it">`, i18n config | EN predisposto: locales `['it','en']`, IT senza prefisso |
| Performance | build verificata con Lighthouse | 100/100/100/100 su home, prezzi, FAQ, blog post; ≥97 sulle altre. Font subset preloaded (CLS ~0), pagine 28–40 KB |
| Accessibilità | AA | contrasti verificati sui token, heading order corretto, skip-link, focus visibile, `prefers-reduced-motion` |
| Contenuto demo indicizzabile | `ChatDemo` | i dialoghi sono HTML server-rendered, non canvas/immagini |

## Da fare al lancio (checklist operativa)

- [ ] **Dominio definitivo** in env `SITE` → rigenerare build (canonical,
      sitemap, OG assoluti si aggiornano da soli).
- [ ] **Search Console**: verifica proprietà, invio sitemap, monitoraggio
      copertura + risultati ricchi FAQ/Product.
- [ ] **Bing Webmaster Tools** (gratis, importa da GSC).
- [ ] Test condivisione OG (WhatsApp, LinkedIn, Facebook debugger) — le
      card sono già generate, verificare la cache dei crawler.
- [ ] **Redirect www ↔ apex** coerente a livello Vercel (una sola forma
      canonica).
- [ ] Favicon PNG/touch-icon di cortesia accanto all'SVG (Safari legacy).
- [ ] Verificare che il numero WhatsApp pubblico sia in `PUBLIC_WHATSAPP_NUMBER`
      (i link wa.me contano come conversione: annotare l'evento se si
      aggiungerà misurazione).

## Quando arriva l'inglese

- [ ] Pagine sotto `/en/` (config i18n già pronta).
- [ ] **hreflang**: alternates `it`/`en` + `x-default` in `Base.astro`
      (aggiungere quando esistono le controparti; non prima, hreflang
      verso pagine inesistenti è dannoso).
- [ ] `og:locale:alternate`, sitemap con alternates (`@astrojs/sitemap`
      supporta i18n), traduzione delle card OG.

## Misurazione (decisione presa, da eseguire)

Nessun cookie di profilazione (coerente con la cookie policy): quando
servirà la misurazione, prima scelta **analytics cookieless**
(es. Plausible/Fathom) con eventi su: submit lista d'attesa, click
wa.me, click «Entra in early access». Aggiornare la cookie policy solo
se lo strumento scelto lo richiede.

## Guardrail

- Mai statistiche di mercato in pagina senza fonte verificata (regola
  del product brief).
- Le funzioni roadmap si scrivono al futuro anche nei meta title/description.
- Niente pagine doorway per città: l'espansione locale passa dal blog
  con contenuto vero, non da template «sito web a [città]» vuoti.
