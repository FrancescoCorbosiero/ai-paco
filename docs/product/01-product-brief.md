# Product brief — Paco

> **Stato**: bozza di lavoro, pre-lancio. Early access previsto per Q4 2026.
> **Prodotto di**: Alpacode ([alpacode.it](https://alpacode.it))
> **Scopo del documento**: definire cosa è Paco, per chi, e perché esiste.
> Ogni claim usato nella piattaforma di lancio deve avere una fonte in questo
> documento o negli altri documenti di `docs/product/`.

---

## Il problema

La maggior parte delle piccole attività italiane ha un rapporto rotto con il
proprio sito web, quando ce l'ha. I sintomi si vedono ovunque:

1. **Il sito non esiste.** Il titolare sa che "dovrebbe farlo", ma tra
   preventivi da migliaia di euro delle agenzie e site builder che richiedono
   ore di apprendimento, rimanda da anni. La presenza online si riduce a una
   pagina Facebook aggiornata a singhiozzo e a una scheda Google mai
   reclamata.
2. **Il sito esiste ma è abbandonato.** Fatto una volta da un'agenzia, da un
   nipote o da un freelance, poi mai più toccato: orari sbagliati, menù di
   due anni fa, "chiuso per ferie" di un agosto passato. Aggiornarlo
   richiede password dimenticate, pannelli mai capiti, o una mail all'agenzia
   che risponde quando può e fattura ogni intervento.
3. **Il sito non risponde.** Anche quando è aggiornato, un sito è un volantino:
   il cliente che alle 21:30 vuole sapere "siete aperti domani?" o "fate la
   piega senza appuntamento?" non trova risposta e scrive su WhatsApp — dove
   risponde il titolare, quando può, spesso il giorno dopo, spesso mai.

Il punto comune: **lo strumento chiede al titolare di adattarsi (imparare un
pannello, ricordare una password, trovare il tempo), e il titolare non ha né
tempo né voglia di farlo**. Non è pigrizia: chi gestisce un ristorante o un
salone lavora dieci ore al giorno con le mani occupate. Qualsiasi soluzione
che richieda di "sedersi al computer" è destinata all'abbandono.

C'è però uno strumento che ogni titolare italiano usa già decine di volte al
giorno, senza formazione e senza password: **WhatsApp**.

## La soluzione

**Paco è un assistente AI che crea e gestisce il sito web di una piccola
attività interamente da WhatsApp.**

- **Il sito lo crea Paco.** Il titolare risponde a qualche domanda in chat
  (che attività è, dove si trova, orari, servizi, qualche foto) e Paco
  genera un sito completo, professionale, già online.
- **Il sito si aggiorna scrivendo in chat.** "Cambia gli orari del sabato",
  "pubblica l'offerta di settembre", "togli la carbonara dal menù": il
  titolare scrive a Paco come scriverebbe a un collaboratore, e il sito è
  aggiornato in pochi istanti. Niente pannelli, niente password.
- **Ai clienti risponde Paco.** I clienti finali possono scrivere al numero
  WhatsApp dell'attività (o dal sito): Paco risponde subito, con le
  informazioni del sito sempre aggiornate — orari, servizi, prezzi, offerte.
  Quando serve un umano (una richiesta particolare, una lamentela, una
  trattativa), Paco passa la conversazione al titolare.

Una sola interfaccia, la chat. Una sola fonte di verità, il sito. Un solo
gesto richiesto al titolare: scrivere un messaggio, cosa che fa già tutto il
giorno.

## Per chi

**Target primario**: piccole attività italiane il cui titolare non ha tempo
né competenze tecniche, e per cui il sito è un mezzo, non un fine.

Verticali di lancio (che diventano anche le landing di settore del sito):

| Verticale | Esempi | Bisogni tipici sul sito |
|---|---|---|
| **Ristorazione** | ristoranti, pizzerie, trattorie, bar | menù aggiornato, orari, ferie, prenotazioni via WhatsApp, offerte del giorno |
| **Cura della persona** | parrucchieri, barbieri, estetiste | listino servizi, orari, appuntamenti via WhatsApp, foto dei lavori |
| **Artigiani** | idraulici, elettricisti, falegnami, fabbri | zone servite, servizi, richieste di preventivo, reperibilità |
| **Professionisti e servizi locali** | geometri, consulenti, tuttofare, piccoli studi | presentazione, servizi, primo contatto qualificato |

Tratti comuni del cliente tipo:
- Lavora con le mani o con i clienti tutto il giorno; il telefono è il suo
  unico "computer".
- Usa WhatsApp quotidianamente per lavoro (clienti, fornitori) — nessuna
  curva di apprendimento da superare.
- Ha già provato (o considerato) un sito e ha desistito per costi, tempo o
  complessità.
- Valuta gli strumenti in termini concreti: "quanto mi costa, quanto tempo
  mi ruba, quanti clienti mi porta".

**Non è il target** (per ora): e-commerce con catalogo ampio, aziende
strutturate con reparto marketing, chi vuole controllo pixel-per-pixel del
design.

### Personas di riferimento

Quattro personas, una per verticale. Sono le stesse persone che vivono nei
journey ([`03-user-journeys.md`](03-user-journeys.md)), nelle demo simulate
del sito e nelle landing di settore: nomi e attività di fantasia, coerenti
ovunque.

- **Lucia, 52 anni — "Lucia Hair Style", salone a Busto Arsizio (VA).**
  Lo smartphone è il suo unico computer. Pagina Facebook ferma da mesi,
  niente sito. Vuole farsi trovare da clienti nuove e smettere di
  rispondere al telefono con le mani in un colore. La sua frase: *"non
  sono capace con queste cose"* — che è esattamente il requisito: con
  Paco non c'è niente da essere capaci di fare.
- **Salvatore, 44 anni — pizzeria "Da Salvo", Quarto (NA).** Il sito ce
  l'ha: fatto nel 2019 da un conoscente, mai più aggiornato. Il menù
  online non corrisponde a quello vero da due anni. Vuole che offerte e
  menù siano sempre giusti senza dover rincorrere nessuno. La sua
  obiezione: *"il sito l'ho già pagato una volta"*.
- **Paolo, 51 anni — "Idraulica Ferri", Modena.** Niente sito:
  passaparola e scheda Google. Perde lavori perché non può rispondere
  quando è sotto un lavello. Vuole che le urgenze diventino richieste
  ordinate invece di chiamate perse. La sua paura: *"un robot che parla
  coi miei clienti"* — da disinnescare con l'handoff e l'onestà di Paco.
- **Andrea, 38 anni — geometra, Bari.** Sito vetrina datato, richieste
  che arrivano già sfiduciate ("quanto costa?", senza contesto). Vuole
  richieste qualificate, non curiosi. La sua obiezione: *"il mio lavoro è
  troppo specifico per farlo spiegare a un'AI"* — infatti Paco nei
  settori professionali non consiglia: qualifica e fissa il contatto.

### I lavori per cui Paco viene assunto (jobs to be done)

1. **"Fatti trovare al posto mio."** Presenza online decorosa e sempre
   vera, senza che il titolare debba occuparsene.
2. **"Tieni tutto aggiornato senza rubarmi tempo."** Il costo di una
   modifica deve tendere a zero: dieci secondi in chat.
3. **"Rispondi tu quando io non posso."** Le domande ripetitive trovano
   risposta subito; al titolare arriva solo ciò che richiede lui.

Il sito è il mezzo con cui questi lavori vengono svolti, non il fine. Per
questo Paco non si vende come "site builder": si vende come collaboratore.

### Numeri di contesto (da verificare prima di qualunque uso pubblico)

| Affermazione | Ordine di grandezza | Fonte da verificare |
|---|---|---|
| Le micro-imprese (0–9 addetti) sono la quasi totalità delle imprese italiane | > 4 milioni, oltre il 90% del totale | Istat / Registro imprese, dato più recente |
| Una quota ampia di micro-imprese non ha un sito, o ne ha uno non aggiornato | maggioranza, con forti differenze per settore | DESI / Eurostat, indagini di categoria |
| WhatsApp è l'app di messaggistica più usata in Italia | penetrazione altissima su tutte le fasce d'età | report annuali (es. We Are Social / Audicom) |

**Regola vincolante per la copy del sito**: nessuno di questi numeri va in
pagina finché non è verificato con una fonte citabile e recente. Al lancio
la copy non usa statistiche di mercato: usa i problemi concreti, che il
target riconosce da solo senza bisogno di percentuali.

## Value proposition

> **Il tuo sito web, gestito scrivendo su WhatsApp.**
> Paco lo crea, tu lo aggiorni con un messaggio, e ai tuoi clienti risponde
> lui — con le informazioni sempre giuste.

Declinata sui tre momenti di valore:

1. **Partire è una conversazione.** Dal primo messaggio al sito online: non
   servono computer, password, né sapere cosa sia un dominio.
2. **Aggiornare è un messaggio.** Il costo di ogni modifica crolla da "mail
   all'agenzia + attesa + fattura" (o "un'ora sul pannello") a dieci secondi
   in chat. È questo che tiene il sito vivo.
3. **Rispondere non è più un lavoro.** Le domande ripetitive dei clienti
   (orari, prezzi, disponibilità) trovano risposta immediata a qualsiasi ora,
   e il titolare interviene solo quando conta davvero.

## Differenziatori

### Vs. site builder tradizionali (Wix, Squarespace, WordPress.com, one.com…)

| | Site builder | Paco |
|---|---|---|
| Interfaccia | pannello da imparare, editor drag & drop | una chat che il titolare usa già |
| Creazione | ore di lavoro del titolare (o si paga qualcuno) | conversazione guidata, il sito lo fa Paco |
| Aggiornamenti | login, pannello, editor → nei fatti, abbandono | un messaggio WhatsApp |
| Rapporto col cliente finale | nessuno: il sito è statico | Paco risponde ai clienti con i dati del sito |
| Destino tipico | sito abbandonato dopo i primi mesi | il sito resta vivo perché aggiornarlo non costa nulla |

Il vero concorrente non è il singolo builder: è **l'abbandono**. I builder
vendono lo strumento e lasciano al titolare il lavoro; Paco vende il
risultato mantenuto nel tempo.

### Vs. agenzie e freelance

| | Agenzia / freelance | Paco |
|---|---|---|
| Costo iniziale | da centinaia a migliaia di euro | incluso nel canone (vedi ipotesi pricing) |
| Costo di ogni modifica | intervento fatturato o favore da chiedere | incluso, illimitato, immediato |
| Tempi | giorni o settimane | secondi o minuti |
| Disponibilità | orari d'ufficio | sempre |
| Relazione | fornitore esterno | collaboratore in chat |

Le agenzie restano la scelta giusta per progetti su misura e brand
strutturati. Paco copre la fascia enorme di attività per cui quel modello è
sovradimensionato in costi e sottodimensionato in reattività.

### Vs. chatbot / assistenti AI generici

Un chatbot appiccicato a un sito risponde su una base dati che nessuno
aggiorna, e invecchia come il sito. In Paco **il sito e l'assistente sono la
stessa cosa**: ogni aggiornamento del titolare in chat aggiorna sia la pagina
che le risposte ai clienti. Non esiste il problema del "bot che dice cose
vecchie", perché la fonte di verità è una sola.

## Perché ora

- **WhatsApp è infrastruttura**, non un'app: in Italia è il canale di fatto
  tra piccole attività e clienti. La WhatsApp Business Platform rende
  possibile costruirci sopra in modo ufficiale.
- **L'AI generativa rende economicamente sostenibile** ciò che prima
  richiedeva un umano: generare un sito decoroso da una conversazione,
  interpretare "metti che ad agosto siamo chiusi" e tradurlo in una modifica
  corretta, rispondere a domande in linguaggio naturale con tono adeguato.
- **La fascia bassa del mercato è mal servita**: i builder chiedono tempo che
  il target non ha, le agenzie soldi che il target non spende. Il modello
  "risultato in abbonamento, gestito via chat" è uno spazio aperto.

## Rischi e questioni aperte (da validare)

- **Dipendenza dalla piattaforma WhatsApp**: policy, costi per conversazione
  e limiti della WhatsApp Business Platform vanno monitorati; serve un piano
  B di canale (es. chat web) fin dall'architettura.
- **Fiducia nell'AI che parla coi clienti**: il titolare deve potersi fidare
  di ciò che Paco dice a nome suo. Mitigazioni: risposte ancorate ai soli
  dati del sito, handoff facile, storico visibile, possibilità di correggere
  Paco in chat.
- **Willingness to pay del target**: le fasce di prezzo in
  [`04-pricing.md`](04-pricing.md) sono ipotesi esplicite da validare con
  l'early access.
- **Qualità percepita del sito generato**: deve reggere il confronto con un
  sito "fatto fare"; il design system è curato da Alpacode, non delegato
  interamente alla generazione.
- **Trasparenza e norme sull'AI**: Paco parla con consumatori finali, quindi
  obblighi di trasparenza (sapere che si sta parlando con un'AI) e tutela
  dei dati vanno progettati dentro il prodotto, non aggiunti dopo. Il
  principio "Paco si presenta sempre come assistente" nasce anche da qui
  (AI Act, GDPR).

## Glossario minimo

- **Titolare**: il cliente di Paco, proprietario o gestore dell'attività.
- **Cliente finale**: il cliente dell'attività, che visita il sito o scrive
  su WhatsApp.
- **Handoff**: passaggio di una conversazione da Paco al titolare.
- **Fonte di verità**: l'insieme dei contenuti del sito, da cui Paco attinge
  per rispondere ai clienti finali.
