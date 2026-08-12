# Piattaforma web (area clienti + console ops) — progettazione

> **Stato**: progettazione per il futuro, NON in sviluppo in questo
> repository. Questo repo resta la piattaforma di lancio (marketing);
> la piattaforma applicativa nascerà come **repository separato**
> (ipotesi: `paco-app`, servita su `app.<dominio>`), perché mescolare le
> due cose cambierebbe natura, ritmo di deploy e superficie di rischio
> di entrambe. Basata anche sull'analisi architetturale del repo di
> riferimento `FrancescoCorbosiero/scs-b2b`.

---

## Il principio che risolve la contraddizione

Paco dice «niente pannelli» — e una dashboard sembra smentirlo. La
contraddizione si scioglie con una regola sola:

> **La chat comanda, il web mostra.**

L'area clienti non è il posto dove *si fa*: è il posto dove *si vede*
(e dove vivono le cose che una chat fa male: fatture, export, log
lunghi). Ogni azione che modifica il sito o il comportamento di Paco
resta in chat — anche quando il pulsante nell'area clienti esiste, il
pulsante apre WhatsApp con il messaggio già pronto. Così il pannello non
diventa mai un secondo posto da imparare.

Fa eccezione la **console ops interna** (per il team Alpacode), che è a
tutti gli effetti una dashboard operativa completa: lì i pannelli sono
il mestiere.

## Area clienti (`app.<dominio>`) — elementi

| Sezione | Cosa mostra | Azioni (→ = apre chat WhatsApp precompilata) |
|---|---|---|
| **Panoramica** | KPI essenziali della settimana: visite, conversazioni gestite da Paco, richieste passate al titolare | → «Paco, raccontami la settimana» |
| **Il mio sito** | anteprima live + **registro modifiche** (chi/cosa/quando, dal log della chat) | → «annulla l'ultima modifica» |
| **Conversazioni** | archivio conversazioni clienti↔Paco, filtro per esito (chiusa da Paco / handoff), ricerca | → «riprendi tu questa conversazione» |
| **Richieste** | prenotazioni e preventivi raccolti, stato (nuova / confermata / persa) | → conferma in chat |
| **Abbonamento** | piano, tariffa (badge fondatore), fatture, metodo di pagamento | Stripe Customer Portal (unica area transazionale web) |
| **Dati** | export completo dei contenuti (i dati sono del titolare) | download diretto |
| **Impostazioni** | numeri autorizzati, orari di reperibilità per gli handoff, dati fatturazione | → modifiche via chat, tranne fatturazione |
| **Aiuto** | niente ticket: un pulsante | → «aiuto» |

**Autenticazione senza password**, coerente col prodotto: si entra con
il numero WhatsApp → Paco manda il codice monouso in chat. Il login È
una conversazione. (Fallback email OTP per chi perde il numero.)

## Console ops (interna Alpacode)

- **Pipeline attivazioni**: lista d'attesa → contatto → onboarding →
  attivo (i 50 fondatori sono una colonna kanban, non un foglio).
- **Supervisione**: handoff in attesa oltre soglia, conversazioni
  segnalate, audit a campione delle risposte di Paco (qualità/regole).
- **Fonte di verità**: vista e diff dei contenuti di ogni sito;
  intervento manuale d'emergenza (tracciato, notificato al titolare).
- **Template di settore**: versioni, rollout, anteprime.
- **Economics**: costi per conversazione WhatsApp e inferenza per
  cliente (le soglie eque di 04-pricing si monitorano qui).
- **Amministrazione**: ruoli/permessi (non binario admin/cliente: vedi
  lezioni sotto), feature flag, log di sistema.

## Lezioni da scs-b2b (cosa riusiamo, cosa no)

Dall'analisi del repo di riferimento (monolite PHP 8.3 / Slim 4 / Twig /
MySQL, layered Controller → Service → Repository):

**Pattern da riusare (indipendenti dallo stack):**
- **Controller sottili → Service di dominio → Repository**: la logica di
  business in servizi puri e testabili (lì: pricing, VAT, ordini).
- **Routing centralizzato a gruppi con middleware per area** (`catalog`
  / `admin`): tutta la superficie leggibile in un file. Da replicare
  come route group `cliente` / `ops`.
- **Scope di sessione separati** per area cliente e ops: mai un solo
  flag "admin" su una sessione condivisa.
- **Flusso inviti/reset con token monouso salvato solo come hash** +
  rate-limit sui login per (IP, scope): da adottare pari pari per l'OTP.
- **Invarianti di dominio blindate da test** (lì: "il prezzo di costo
  non raggiunge mai il client"; da noi: **"Paco non risponde mai fuori
  dalla fonte di verità"** e **"nessuna modifica senza numero
  autorizzato"** meritano lo stesso trattamento).
- Migrazioni SQL numerate e idempotenti; `docs/` numerati come contratto
  prima del codice; i18n centralizzata; KPI card cliccabili e paginazione
  via query string (URL condivisibili) nella UI.

**Cosa non riportiamo:**
- Lo stack (PHP/Twig/Alpine): la piattaforma nasce TypeScript per
  condividere tipi e convenzioni con il resto di Paco.
- Il layout unico multi-area pieno di condizionali → layout separati per
  marketing / area clienti / ops.
- Tailwind senza design token → i token di
  [`docs/brand/03`](../brand/03-identita-visiva.md) diventano il design
  system anche dell'app (CSS custom properties condivise).
- Il modello ruoli binario → tabella ruoli/permessi dal giorno uno.
- L'assenza di API layer → API first (serve al prodotto stesso: il
  runtime di Paco e l'area clienti leggono le stesse API).

## Ipotesi di stack (da confermare a ridosso dello sviluppo)

- **Monorepo TypeScript** (`paco-app`): `apps/web` (area clienti + ops),
  `apps/api` (o route colocate), `packages/ui` (token e componenti dal
  design system del brand), `packages/domain` (servizi puri + test delle
  invarianti).
- Framework applicativo full-stack a scelta tra **SvelteKit** e
  **Next.js** (decidere su competenze del team al momento); Postgres +
  Drizzle; Stripe per il billing; sessioni server-side con scope
  separati; deploy Docker sullo stesso VPS/riverse proxy della
  piattaforma di lancio.
- Il **runtime conversazionale** di Paco (webhook WhatsApp, AI,
  generatore siti) è un servizio a parte: la piattaforma web ne è un
  client, mai il contrario.

## Cosa NON entra (coerenza col manifesto)

- Nessun editor visuale del sito nell'area clienti: sarebbe il pannello
  che abbiamo giurato di non costruire.
- Nessuna notifica email operativa: le notifiche vivono su WhatsApp.
- Nessuna funzione che esista solo nel pannello: se un'azione non si può
  dire in chat, non è un'azione di Paco.
