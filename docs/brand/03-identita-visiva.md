# Identità visiva — Paco

> **Stato**: canonico. Deriva dallo showcase Alpacode (dark con tinta
> verde, angoli vivi, mono per le label) e lo evolve in un'identità
> autonoma ma riconoscibilmente imparentata. I token qui definiti sono
> implementati 1:1 in `src/styles/tokens.css`.

---

## Principi

1. **Bottega, non startup.** Scuro caldo, materiali onesti, niente
   gradienti cosmici né glassmorphism. La pagina deve sembrare un posto
   dove si lavora.
2. **Angoli vivi, sempre.** `border-radius: 0` è legge, ereditata da
   Alpacode: nessuna eccezione, nemmeno sugli avatar (quadrati) o sui
   bottoni. Ciò che è squadrato è nostro.
3. **Il fumetto squadrato è il mattone dell'identità.** Il prodotto è una
   chat: la chat è il motivo grafico primario — nelle demo, nelle
   illustrazioni, nel logo, nelle card OG.
4. **Il mono dice la verità.** JetBrains Mono marca i dati: prezzi,
   orari, date, label come `DEMO SIMULATA` o `EARLY ACCESS Q4 2026`.
   Se è in mono, è un fatto; se è in Archivo, è una dichiarazione.
5. **Il verde WhatsApp è di Paco.** In Alpacode è un accento; qui
   #25D366 è il colore del protagonista: i messaggi di Paco, le azioni
   primarie, la spunta di ciò che è fatto.

## Parentela con Alpacode

| Si eredita | Diventa di Paco |
|---|---|
| base scura a tinta verde #0A0F0C | #25D366 promosso a colore primario |
| angoli vivi ovunque | pattern a fumetti di chat squadrati |
| JetBrains Mono per le label | la voce: microcopy in prima persona |
| Archivo Black per i titoli | tagline «Dillo a Paco.» come firma |
| ombre dure (offset pieno, niente blur) | wallpaper chat a quadretti sottili |

## Palette

### Tema scuro (default di brand)

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#0A0F0C` | fondo pagina (condiviso con Alpacode) |
| `--surface` | `#111A14` | card, superfici rialzate, telefono demo |
| `--surface-2` | `#16221A` | hover, righe alternate, wallpaper chat |
| `--line` | `#233129` | bordi 1px, divisori |
| `--ink` | `#E9F2EB` | testo primario |
| `--ink-dim` | `#A4B8AA` | testo secondario |
| `--ink-mute` | `#7E9584` | didascalie, timestamp |
| `--accent` | `#25D366` | azioni primarie, messaggi di Paco, evidenze |
| `--accent-press` | `#1DB457` | stato attivo/hover dell'accento |
| `--on-accent` | `#06130B` | testo su fondo accento |
| `--bubble-in` | `#152019` | fumetto in entrata (cliente/titolare visto da Paco) |
| `--bubble-out` | `#0E3B22` | fumetto in uscita (chi scrive nella scena) |

Contrasti verificati (AA): `--ink` su `--bg` ≈ 15:1; `--accent` su
`--bg` ≈ 9,7:1; `--on-accent` su `--accent` ≈ 9:1; `--ink-dim` su
`--surface` ≥ 7:1. Testo minimo sui fumetti: `--ink` su `--bubble-out`
≥ 8:1.

### Tema chiaro (segue `prefers-color-scheme`, identità conservata)

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#F2F7F3` | fondo carta verdina |
| `--surface` | `#FFFFFF` | card |
| `--surface-2` | `#E7F0E9` | hover, wallpaper chat |
| `--line` | `#CBDCCF` | bordi |
| `--ink` | `#10231A` | testo primario |
| `--ink-dim` | `#41584A` | testo secondario |
| `--ink-mute` | `#53695B` | didascalie |
| `--accent` | `#25D366` | **solo grafica** (bolle, icone, bordi) |
| `--accent-text` | `#0B7A3C` | link e testo accentato (AA su chiaro) |
| `--accent-press` | `#0A6832` | stati attivi |
| `--on-accent` | `#06130B` | testo su accento |
| `--bubble-in` | `#FFFFFF` (bordo `--line`) | fumetto in entrata |
| `--bubble-out` | `#D3F2DE` | fumetto in uscita |

Regola dura: **#25D366 non si usa mai come colore di testo su fondo
chiaro** (contrasto insufficiente): per il testo c'è `--accent-text`.
Il tema scuro resta il volto del brand (hero, OG, social); il chiaro
esiste per rispetto di chi lo preferisce di sistema.

## Tipografia

| Ruolo | Font | Pesi | Note |
|---|---|---|---|
| Display (H1–H2, cifre grandi) | **Archivo Black** | 400 (unico) | sentence case, mai tutto maiuscolo; tracking leggermente negativo (-0.01em); righe strette (1.05–1.15) |
| Testo e UI | **Manrope** (variabile) | 400 / 600 / 800 | corpo 400, UI e H3+ 600–800; interlinea 1.6 nel corpo |
| Label e dati | **JetBrains Mono** (variabile) | 400 / 700 | SEMPRE per: eyebrow di sezione (maiuscolo, tracking +0.08em), prezzi, orari, timestamp delle demo, badge |

Scala tipografica (clamp fluidi, implementati nei token):
`--text-hero` 2.4–4.4rem · `--text-h2` 1.7–2.6rem · `--text-h3`
1.15–1.35rem · `--text-body` 1rem/1.0625rem · `--text-small` 0.875rem ·
`--text-label` 0.75rem mono.

## Il fumetto squadrato (componente d'identità)

- Rettangolo ad angoli vivi, padding 10×14px, max-width 85% della
  colonna chat.
- **Coda quadrata**: quadrato di 10px ruotato 0°, agganciato allo
  spigolo inferiore (sinistro per i messaggi in entrata, destro per
  quelli in uscita). Niente triangolini tondi da app: la coda è un
  pixel, non una goccia.
- Meta-riga in JetBrains Mono 0.6875rem: ora + doppia spunta `✓✓`
  (accento) per i messaggi consegnati della scena.
- Indicatore di digitazione: tre quadrati 6px che pulsano in sequenza
  (spenti con `prefers-reduced-motion`).
- Wallpaper chat: griglia di quadretti 1px `--surface-2` al 40% di
  opacità, passo 24px — il richiamo al pattern "a fumetti squadrati"
  dello showcase.

## Logo

- **Wordmark**: `paco` minuscolo in Archivo Black, colore `--ink` (o
  `--on-accent` su fondo verde).
- **Simbolo**: quadrato pieno `--accent` con coda quadrata in basso a
  sinistra (il fumetto ridotto all'osso) e la lettera `p` in `--on-accent`.
  Funziona da favicon, avatar WhatsApp e timbro.
- Lockup: simbolo + wordmark, distanza pari alla larghezza della coda.
  Il file sorgente SVG vive in `public/favicon.svg` e
  `src/assets/logo.svg`.
- Non si fa: ombre morbide, gradienti, arrotondamenti, versioni oblique.

## Ombre, bordi, profondità

- Ombra dura in stile Alpacode: `box-shadow: 6px 6px 0 rgba(0,0,0,.35)`
  (scuro) / `6px 6px 0 rgba(16,35,26,.12)` (chiaro) — mai blur.
- I bordi lavorano più delle ombre: 1px `--line`, 2px per gli elementi
  interattivi in focus/hover.
- Focus visibile ovunque: outline 2px `--accent` con offset 2px (AA).

## Movimento

- Durate 160–240ms, easing `cubic-bezier(0.2, 0.8, 0.2, 1)`, solo
  `opacity` e `transform` (translate ≤ 12px). Niente parallax, niente
  elementi che inseguono il cursore.
- Le demo chat sono l'unica animazione narrativa del sito (specifiche in
  [`05-demo-scripts.md`](../product/05-demo-scripts.md)).
- `prefers-reduced-motion: reduce` → tutto statico, demo interamente
  visibili, nessuna transizione oltre i 10ms. Non negoziabile.

## Iconografia e illustrazione

- Icone: tratto 2px, terminali squadrati, griglia 24px, un solo colore
  per icona (`--ink` o `--accent`). Niente icon pack tondeggianti.
- Le illustrazioni sono **composizioni di fumetti e schermate**: il
  prodotto si mostra con le sue chat, non con metafore (niente razzi,
  lampadine, strette di mano).
- Foto: solo se vere (i fondatori, i mestieri). Fino ad allora, nessuna
  foto stock di gente sorridente col tablet.

## Card OG (social)

Template generato a build (Fase 2/3): fondo `--bg`, bordo sinistro 20px
`--accent`, titolo in Archivo Black `--ink`, sottotitolo in JetBrains
Mono `--ink-dim`, simbolo-fumetto in basso a destra. Formato 1200×630.
