# Funzionalità MVP e roadmap — Paco

> **Stato**: bozza di lavoro, pre-lancio. Le funzionalità marcate MVP
> definiscono cosa promette la piattaforma di lancio per l'early access
> (Q4 2026). Tutto ciò che è in roadmap va comunicato al futuro, mai come
> già disponibile.

---

## Principi di prodotto

1. **Una sola interfaccia: la chat.** Se una funzione richiede un pannello,
   non è una funzione di Paco. (Unica eccezione: il sito stesso, che è
   l'output.)
2. **Una sola fonte di verità: il sito.** Paco risponde ai clienti finali
   solo con informazioni presenti sul sito o fornite dal titolare in chat.
   Se non sa, lo dice e passa al titolare — non inventa.
3. **Il titolare ha sempre l'ultima parola.** Ogni modifica al sito è
   confermabile e reversibile; ogni conversazione coi clienti è visibile e
   interrompibile.
4. **Zero configurazione percepita.** Dominio, hosting, certificati, SEO di
   base: esistono, funzionano, non si nominano se non serve.

## MVP (early access, Q4 2026)

### 1. Generazione del sito via conversazione

- Onboarding guidato in chat WhatsApp: tipo di attività, nome, indirizzo,
  orari, servizi/menu/listino, foto, contatti, canali social.
- Paco genera un sito completo su template curati per verticale
  (ristorazione, cura della persona, artigiani, professionisti): home,
  servizi/menù, contatti con mappa e orari, pagina offerte.
- Anteprima via link in chat; il titolare chiede modifiche a parole
  ("il verde è troppo acceso", "metti prima le foto") finché non approva.
- Pubblicazione su sottodominio incluso; dominio proprio collegabile
  (fascia superiore, vedi pricing).
- Fondamenta tecniche non negoziabili: HTTPS, mobile-first, SEO di base
  (metadata, schema.org LocalBusiness), scheda "come raggiungerci".

### 2. Aggiornamenti in chat

- Modifiche ai contenuti in linguaggio naturale: orari, ferie e chiusure
  straordinarie, prezzi, voci di menù/listino, testi, foto (inviate
  direttamente in chat), offerte a scadenza ("valida fino a fine mese" →
  rimossa in automatico).
- Conferma prima di pubblicare per le modifiche importanti; le minime
  (refuso, orario) si applicano subito con messaggio di riepilogo.
- "Annulla l'ultima modifica" sempre disponibile.
- Paco è proattivo quanto basta: se agosto si avvicina e l'anno scorso
  c'era una chiusura, lo chiede. Mai più di un promemoria; zero spam.

### 3. Risposte automatiche ai clienti finali

- I clienti scrivono al numero WhatsApp dell'attività (pulsante sul sito,
  link ovunque); risponde Paco, a qualsiasi ora, in italiano naturale e
  nel tono dell'attività.
- Risposte ancorate alla fonte di verità: orari, servizi, prezzi, offerte,
  posizione, domande frequenti definite dal titolare.
- Raccolta strutturata delle richieste che Paco non può chiudere da solo:
  prenotazioni, preventivi, richieste particolari → riepilogo ordinato al
  titolare (nome, richiesta, quando, contatto).
- Onestà dichiarata: Paco si presenta come assistente ("Sono Paco,
  l'assistente di …"), non finge di essere il titolare.

### 4. Handoff a umano

- Trigger automatici: richiesta esplicita di parlare col titolare,
  lamentela, domanda fuori dalla fonte di verità, trattativa.
- Il titolare riceve la conversazione con un riepilogo e risponde
  direttamente in WhatsApp; Paco si mette da parte finché il titolare non
  gli ridà la mano ("pensaci tu").
- Se il titolare non risponde entro un tempo definito, Paco avvisa il
  cliente con garbo e prende un recapito.

### 5. Il minimo indispensabile intorno

- Riepilogo settimanale in chat: visite al sito, conversazioni gestite,
  richieste passate al titolare. Numeri semplici, niente dashboard.
- Export dei propri contenuti su richiesta (i dati sono del titolare).
- Conformità: privacy policy e cookie banner sul sito generato, gestione
  del consenso nelle conversazioni.

### Fuori dall'MVP, esplicitamente

Prenotazioni con calendario reale, pagamenti, e-commerce, multilingua del
sito generato, integrazioni con gestionali, app dedicata (non servirà mai:
l'app è WhatsApp).

## Roadmap (post early access)

Orizzonti indicativi, da riordinare col feedback degli early adopter. Sul
sito di lancio si comunicano come direzione, senza date vincolanti.

### Orizzonte 1 — chiudere il cerchio delle richieste

- **Prenotazioni e appuntamenti**: da "riepilogo al titolare" a calendario
  gestito da Paco (conferme, promemoria, disdette), per ristoranti e
  saloni.
- **Preventivi guidati** per artigiani: Paco raccoglie foto, misure e
  dettagli e consegna al titolare una richiesta completa.
- **Recensioni**: dopo il servizio, Paco invita il cliente a lasciare una
  recensione Google.

### Orizzonte 2 — incassare e integrarsi

- **Pagamenti in chat**: acconti, caparre per prenotazioni, link di
  pagamento.
- **Integrazioni**: gestionali di settore (cassa, magazzino, gestionali
  per saloni), Google Business Profile sincronizzato col sito.
- **Ordini semplici** per la ristorazione (asporto via WhatsApp).

### Orizzonte 3 — allargare

- Sito multilingua generato (inglese first, per zone turistiche).
- Canali aggiuntivi oltre WhatsApp (chat web nativa, Instagram DM) sulla
  stessa fonte di verità.
- Espansione fuori dall'Italia.

## Criteri di successo dell'early access (ipotesi da validare)

- Tempo mediano dal primo messaggio al sito pubblicato: **< 48 ore** (con
  intervento attivo del titolare < 30 minuti totali).
- Almeno **1 aggiornamento in chat a settimana** per titolare attivo (la
  metrica anti-abbandono: un sito Paco si distingue perché cambia).
- **> 70% delle conversazioni** dei clienti finali chiuse da Paco senza
  handoff, con soddisfazione verificata a campione.
- Churn mensile early adopter sotto una soglia da definire dopo i primi
  90 giorni.
