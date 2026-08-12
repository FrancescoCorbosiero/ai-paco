# Paco — piattaforma di lancio

Sito commerciale di **Paco**, l'assistente AI di [Alpacode](https://alpacode.it)
che crea e gestisce il sito web di una piccola attività interamente da
WhatsApp. Pre-lancio, early access Q4 2026.

> **Scope**: questo repository contiene la piattaforma di lancio
> (marketing), **non** il prodotto. Le conversazioni mostrate sul sito
> sono demo scriptate e dichiarate come simulazioni.

## Struttura

| Percorso | Contenuto |
|---|---|
| [`docs/product/`](docs/product/README.md) | **Fase 0** — product brief, MVP e roadmap, user journey, pricing, sceneggiature demo. Ogni claim del sito ha fonte qui. |
| [`docs/brand/`](docs/brand/README.md) | **Fase 1** — posizionamento, tone of voice, messaging (tagline «Dillo a Paco.»), identità visiva, manifesto |
| [`src/`](src/) | **Fase 2** — il sito: Astro 5 + TypeScript strict + CSS vanilla (custom properties) |
| [`docs/seo/`](docs/seo/README.md) | **Fase 3** — keyword strategy, SEO tecnica, piano editoriale |

Regola editoriale: se una frase in pagina non è coperta dai documenti di
`docs/`, si aggiorna il documento o si toglie la frase. Le funzioni non
ancora disponibili si comunicano sempre al futuro.

## Sviluppo

Requisiti: Node ≥ 20.3 (consigliato 22, vedi `.nvmrc`).

```bash
npm install
npm run dev        # sviluppo su http://localhost:4321
npm run build      # build di produzione (statico + endpoint waitlist)
npm run preview    # anteprima della build (adapter Node in locale)
npm run check      # astro check (TypeScript strict, zero errori)
```

Variabili d'ambiente (vedi `.env.example`):

| Variabile | Uso |
|---|---|
| `SITE` | URL pubblico (canonical, sitemap, OG). Default: `https://paco.alpacode.it` — da aggiornare col dominio definitivo |
| `PUBLIC_WHATSAPP_NUMBER` | Numero WhatsApp (solo cifre con prefisso, es. `393401234567`). Vuoto = le CTA WhatsApp mostrano il link di riserva, mai un numero finto |
| `RESEND_API_KEY` | Se presente, le iscrizioni alla lista d'attesa arrivano via email ([Resend](https://resend.com)); senza, finiscono nei log |
| `WAITLIST_TO` / `WAITLIST_FROM` | Destinatario e mittente delle notifiche |

## Architettura in breve

- **Tutto statico tranne `/api/waitlist`** (`prerender = false`): form
  lista d'attesa con honeypot, time-trap, validazione e rate limiting per
  IP (in memoria: per produzione seria sostituire con uno store
  condiviso, il punto di aggancio è `isRateLimited`). Funziona anche
  senza JavaScript (redirect 303 su `/grazie`).
- **Demo WhatsApp** (`src/components/ChatDemo.astro`): testi nel DOM dal
  server (accessibili e indicizzabili), animazione solo visiva che parte
  nel viewport, pulsanti «salta»/«riguarda», tutto statico con
  `prefers-reduced-motion` o senza JS. Le sceneggiature canoniche sono in
  `docs/product/05-demo-scripts.md` → `src/data/demos.ts`.
- **Card OG generate a build** (`src/pages/og/[...route].ts`,
  astro-og-canvas) in stile brand, blog compreso; font OFL vendorizzati
  in `src/assets/og/`.
- **SEO tecnica**: canonical, Open Graph, sitemap (`@astrojs/sitemap`),
  robots.txt da endpoint, RSS, JSON-LD (Organization, WebSite, Product
  con offerte in pre-order, FAQPage, BlogPosting).
- **Tema**: scuro di brand, chiaro via `prefers-color-scheme`, angoli
  vivi ovunque, token in `src/styles/tokens.css` (fonte:
  `docs/brand/03-identita-visiva.md`).
- **i18n**: italiano senza prefisso, predisposizione EN già in
  `astro.config.mjs` (`/en/` quando servirà) + stringhe cornice in
  `src/i18n/ui.ts`.
- **Indicizzazione**: le pagine early-access sono volutamente
  indicizzabili (qui il dominio È il lancio); `noindex` solo su
  `/grazie` e 404.

## Qualità verificata

- `astro check`: 0 errori, 0 warning (TypeScript strict).
- Lighthouse (build di produzione, pagine chiave): performance ≥ 97,
  accessibilità/best practice/SEO 100 — home, prezzi, FAQ e blog post a
  100/100/100/100.
- Endpoint waitlist testato: honeypot, validazione, rate limit (5/ora per
  IP), protezione cross-site (403), redirect no-JS.

## Docker

Due configurazioni, nessuna pipeline CI/CD (per ora si builda dove serve).

**Locale (hot reload, senza installare Node sul host):**

```bash
docker compose -f compose.dev.yaml up
# → http://localhost:4321 — il sorgente è montato, astro dev ricarica da solo
```

**Produzione su VPS:**

```bash
cp .env.example .env    # compila SITE, PUBLIC_WHATSAPP_NUMBER, chiavi Resend
docker compose up -d --build
# → il sito ascolta su 127.0.0.1:4321 (WEB_PORT), dietro il tuo reverse proxy
```

Distinzione importante, cablata nel `Dockerfile`:

| Tipo | Variabili | Quando si applicano |
|---|---|---|
| **Build arg** | `SITE`, `PUBLIC_WHATSAPP_NUMBER` | finiscono nell'HTML statico (canonical, sitemap, link wa.me): cambiarle richiede `docker compose up -d --build` |
| **Runtime env** | `RESEND_API_KEY`, `WAITLIST_TO`, `WAITLIST_FROM` | lette da `process.env` a ogni richiesta: si cambiano in `.env` + `docker compose up -d`, senza rebuild |

Il container è multi-stage (build → runtime con sole dipendenze di
produzione), gira da utente non privilegiato, ha un `HEALTHCHECK` su `/`
e log con rotazione. Se sul VPS non c'è già un reverse proxy con TLS,
in `compose.yaml` è pronto (commentato) un servizio **Caddy** con
certificati Let's Encrypt automatici: decommentalo, imposta `SITE_HOST`
in `.env`, commenta la riga `ports` di `web` e apri 80/443. La config è
in `deploy/Caddyfile`.

Verifica rapida dopo il deploy:

```bash
curl -I https://<dominio>/            # 200
curl -s https://<dominio>/robots.txt  # sitemap col dominio giusto
docker compose logs -f web            # [waitlist] … quando arriva un'iscrizione
```

## Deploy su Vercel

1. Importa il repo su Vercel: il framework viene riconosciuto (Astro);
   l'adapter `@astrojs/vercel` si attiva da solo (`process.env.VERCEL`).
   In locale la build usa l'adapter Node così `npm run preview` funziona.
2. Imposta le env: `SITE` (dominio definitivo), `PUBLIC_WHATSAPP_NUMBER`,
   `RESEND_API_KEY`, `WAITLIST_TO`, `WAITLIST_FROM`.
3. Collega il dominio del lancio e verifica `https://<dominio>/robots.txt`
   e `/sitemap-index.xml`.
4. Dopo il deploy: Search Console (proprietà + sitemap), test dei
   risultati ricchi (FAQ/Product), condivisione di prova per le card OG.

Nota `security.allowedDomains` (in `astro.config.mjs`): l'hardening SSRF
di Astro non si fida dell'header Host se il dominio non è dichiarato —
il dominio di produzione è derivato da `SITE`, localhost è incluso per
dev/preview. Cambiando dominio basta aggiornare `SITE`.

## Prima del lancio (checklist)

- [ ] Dominio definitivo → env `SITE` (+ `security.allowedDomains` si adegua da solo)
- [ ] Numero WhatsApp reale → `PUBLIC_WHATSAPP_NUMBER`
- [ ] Resend configurato e testato (`RESEND_API_KEY`, dominio mittente verificato)
- [ ] Pagine legali: completare i segnaposto `[da completare]` e far revisionare a un legale
- [ ] P. IVA nel footer (`src/components/Footer.astro`)
- [ ] Verificare i numeri di mercato prima di usarli in copy (regola in `docs/product/01-product-brief.md`)
