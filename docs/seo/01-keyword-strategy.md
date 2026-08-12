# Keyword strategy (Italia) — Paco

> **Stato**: canonico per la SEO on-page e il piano editoriale.
> I volumi di ricerca NON sono riportati: vanno stimati con uno strumento
> (Keyword Planner, Semrush o simili) prima di investire su una keyword —
> qui si mappano **intenti**, che restano validi anche quando i numeri
> cambiano. Nessuna keyword giustifica copy fuori dal tone of voice.

## Principi

1. **Una pagina, un intento.** Ogni pagina del sito risponde a una
   famiglia di ricerche; se un intento non ha pagina, si crea contenuto
   (blog/lead magnet), non si annacqua una pagina esistente.
2. **La categoria non esiste ancora.** «Sito web da WhatsApp» ha volume
   quasi nullo: si intercetta la domanda esistente (fare/gestire un sito,
   per settore) e le si mostra la risposta nuova. Le keyword di categoria
   si coltivano col brand, non si inseguono.
3. **Il vantaggio è nei long tail di problema** («sito abbandonato»,
   «gestire il sito senza saperlo fare», «rispondere ai clienti su
   WhatsApp»): concorrenza bassa, intento perfetto per noi.
4. **Prima l'Italia.** hreflang e keyword EN arrivano con le pagine EN
   (predisposizione già nel sito).

## Mappa intent → pagina

### Home `/`
| Query rappresentative | Intento |
|---|---|
| creare sito web con intelligenza artificiale | capire se l'AI può fare il sito al posto mio |
| sito web da whatsapp · sito gestito da whatsapp | categoria nuova (bassa ricerca, alta conversione) |
| sito web per piccole attività | soluzione semplice, non enterprise |
| paco sito web / paco alpacode | brand (crescerà col lancio) |

### Come funziona `/come-funziona`
| Query | Intento |
|---|---|
| come creare un sito senza saperlo fare | informazionale-operativo |
| sito web senza pannello di controllo | frustrazione da strumento |
| creare sito web in chat / con l'AI passo passo | curiosità sul processo |

### Prezzi `/prezzi`
| Query | Intento |
|---|---|
| quanto costa un sito web per un ristorante/negozio | confronto prezzi (transazionale) |
| costo sito web mensile / sito web in abbonamento | modello di prezzo |
| quanto costa mantenere un sito web | costo di gestione, non solo di creazione |

### Landing di settore `/per-chi/*` (le pagine SEO principali)

**Ristoranti** `/per-chi/ristoranti`
- sito web per ristorante / pizzeria
- menu online per ristorante · menù digitale aggiornabile
- come mettere il menù su internet
- prenotazioni whatsapp ristorante
- long tail: «come aggiornare il menù del ristorante online», «sito ristorante con orari sempre aggiornati»

**Parrucchieri** `/per-chi/parrucchieri`
- sito web per parrucchieri / salone / estetiste
- listino prezzi parrucchiere online
- come farsi trovare parrucchiere zona
- long tail: «rispondere ai clienti whatsapp parrucchiere», «sito per centro estetico senza saperlo fare»

**Artigiani** `/per-chi/artigiani`
- sito web per artigiani / idraulico / elettricista
- come trovare clienti idraulico
- preventivi online artigiano
- long tail: «sito per impresa individuale», «come gestire le richieste dei clienti su whatsapp»

**Professionisti** `/per-chi/professionisti`
- sito web per professionisti / studio tecnico / geometra
- sito per consulente del lavoro / commercialista (long tail per articoli)
- come presentare uno studio professionale online

### Manifesto `/manifesto` + Blog
| Query | Intento |
|---|---|
| sito web abbandonato / sito non aggiornato cosa fare | il problema-tesi: nostro terreno esclusivo |
| ho un sito ma non lo aggiorno mai | consapevolezza del problema |
| il sito web serve ancora a una piccola attività | dibattito → manifesto e articoli |

### Early access `/early-access`
Query di brand + navigazionali («paco lista d'attesa», «paco early
access»). Nessuna keyword da inseguire: la pagina converte il traffico
delle altre.

## Query da intercettare col blog (non con le pagine)

- «meglio sito web o pagina facebook» (informazionale, alto volume)
- «come usare whatsapp business per un negozio»
- «google business profile come funziona» (adiacente utile)
- «quanto costa un sito da un'agenzia» (comparativa onesta)
- «sito wix abbandonato / cambiare da wix» (switch intent, delicata: mai
  denigrare per nome nel tono, confronto fattuale)

Dettaglio operativo in [`03-piano-editoriale.md`](03-piano-editoriale.md).

## SERP feature su cui puntare

- **Risultati ricchi FAQ** (FAQPage già implementato su /faq, /prezzi e
  landing): monitorare in Search Console.
- **AI Overviews / risposte generative**: le pagine con dialoghi reali e
  risposte dirette (FAQ, journey) sono il formato che viene citato:
  mantenere risposte autosufficienti di 2–4 frasi.
- **Local pack**: non è nostro (siamo un SaaS, non un'attività locale),
  ma gli articoli per settore devono intercettare chi cerca in ottica
  locale («come farsi trovare a [città]» → pattern replicabile).

## Misura

- Search Console dal giorno del deploy (le pagine early-access sono
  indicizzabili apposta).
- KPI trimestre 1: impression e click sulle 4 landing di settore + CTR
  della home su query «sito web + [settore]»; iscrizioni lista d'attesa
  con sorgente organica.
- Le keyword senza pagina che generano impression → candidate per il
  piano editoriale del trimestre successivo.
