# Sceneggiature demo per il sito — Paco

> **Stato**: canonico. Le conversazioni simulate mostrate sulla
> piattaforma di lancio implementano **esattamente** questi testi: il
> codice (`src/data/demos.ts`) non riscrive i dialoghi, li importa da qui.
> Ogni demo deriva da un journey di [`03-user-journeys.md`](03-user-journeys.md),
> compressa per la pagina. Nomi e attività sono di fantasia.

## Regole di messa in scena (valgono per tutte le demo)

- **Etichetta obbligatoria** visibile accanto a ogni demo: `Demo simulata`
  (label in JetBrains Mono). Mai lasciar credere che sia una chat reale.
- **Ritmo**: indicatore di digitazione prima di ogni messaggio di Paco
  (600–1400 ms proporzionale alla lunghezza, max 1400); pausa di 500 ms
  prima dei messaggi del titolare/cliente; nessun suono.
- **Avvio**: la demo parte quando entra nel viewport (~40%), una sola
  volta; pulsante «Riguarda» alla fine e pulsante «Mostra tutta la
  conversazione» sempre disponibile (accessibile da tastiera).
- **`prefers-reduced-motion` o JS assente**: nessuna animazione, la
  conversazione appare intera. Il testo è nel DOM dal server (leggibile
  da screen reader e indicizzabile) e l'animazione è solo visiva.
- **Orari mostrati**: usare orari fissi coerenti con la scena (nessun
  orario dinamico).

Formato: `P` = Paco, `T` = titolare, `C` = cliente finale. Le note tra
parentesi quadre non compaiono in chat.

---

## DEMO-HERO — «La friggitrice» (home, da Journey 2)

Contesto mostrato sopra la chat: *Salvatore, pizzeria a Quarto (NA),
venerdì ore 17:40.* Chat di gestione titolare ↔ Paco.

| # | Chi | Messaggio |
|---|-----|-----------|
| 1 | T | stasera niente fritti, s'è rotta la friggitrice |
| 2 | P | Ricevuto. Tolgo i fritti dal menù online per stasera e metto un avviso: «Stasera i fritti non sono disponibili». Se un cliente me li chiede qui su WhatsApp, lo avviso io. Va bene? |
| 3 | T | ok. e metti che venerdì prossimo c'è la serata pizza e sfizi a 15 euro |
| 4 | P | Fatto 👍 In home ora c'è: «Venerdì 21 — Serata pizza e sfizi, menù fisso 15 €». La tolgo da sola sabato mattina. La propongo anche a chi scrive per prenotare? |
| 5 | T | si |
| 6 | P | Perfetto, è tutto online. Buon servizio stasera 🍕 |

Timestamp mostrati: 17:41 → 17:42. Spunte doppie sui messaggi del
titolare.

---

## DEMO-RISTORANTI — «Il tavolo da otto» (landing ristoranti, da Journey 2/3)

Contesto: *sabato ore 11:05, un cliente scrive al numero della pizzeria.*
Chat cliente ↔ Paco, con handoff lampo.

| # | Chi | Messaggio |
|---|-----|-----------|
| 1 | C | Buongiorno, avete posto stasera per 8 verso le 20:30? Siamo con due bambini |
| 2 | P | Buongiorno! Sono Paco, l'assistente della pizzeria Da Salvo. Stasera siamo aperti dalle 19:00. Per un tavolo da 8 chiedo conferma a Salvatore e ti dico subito. Due seggioloni, giusto? |
| 3 | C | Sì grazie, uno basta |
| 4 | P | Perfetto, ti scrivo tra pochissimo. |
| 5 | P | Confermato ✅ Tavolo da 8 stasera alle 20:30, un seggiolone. A che nome lo segno? |
| 6 | C | Esposito. Grazie mille! |
| 7 | P | Segnato: Esposito, 8 persone, 20:30. A stasera! 🍕 |

Nota in pagina sotto la demo: nell'MVP Paco raccoglie e conferma le
prenotazioni col titolare (come qui); il calendario gestito da Paco è in
arrivo dopo l'early access. *(Fonte: 02-mvp-roadmap.md — mai promettere il
calendario come già disponibile.)*

---

## DEMO-PARRUCCHIERI — «Il listino fotografato» (landing parrucchieri, da Journey 1)

Contesto: *Lucia sta attivando Paco per il suo salone di Busto Arsizio.*
Chat di onboarding titolare ↔ Paco.

| # | Chi | Messaggio |
|---|-----|-----------|
| 1 | P | Ciao Lucia! Per il listino non serve scriverlo: se ce l'hai appeso in salone, mandami una foto e lo sistemo io. |
| 2 | T | *[foto del listino]* |
| 3 | P | Fatto: ho letto 14 servizi. Taglio donna 25 €, piega 18 €, colore da 45 €, taglio uomo 16 €… Li ho divisi in Donna, Uomo e Trattamenti. Se un prezzo non torna, dimmelo e lo cambio. |
| 4 | T | la piega è 20 adesso |
| 5 | P | Corretto: piega 20 € ✔️ Vuoi vedere come sta venendo il sito? |
| 6 | T | si dai |
| 7 | P | Eccolo: 👉 luciahairstyle.paco.it — guardalo dal telefono e dimmi cosa cambiare. Me lo dici a parole, ci penso io. |

---

## DEMO-ARTIGIANI — «La perdita delle 21:50» (landing artigiani, da Journey 3)

Contesto: *ore 21:50, una cliente trova «Idraulica Ferri» e scrive dal
sito.* Chat cliente ↔ Paco, poi riepilogo al titolare.

| # | Chi | Messaggio |
|---|-----|-----------|
| 1 | C | Buonasera, perde il tubo sotto il lavello, c'è acqua ovunque. Fate urgenze? |
| 2 | P | Buonasera! Sono Paco, l'assistente di Idraulica Ferri. Prima cosa: chiudi il rubinetto generale, così l'acqua si ferma. Poi ti faccio richiamare da Paolo: mi dici la zona e, se riesci, una foto del tubo? |
| 3 | C | Modena centro, via Farini. *[foto]* |
| 4 | P | Passo tutto a Paolo con la foto. Se non ti risponde entro mezz'ora ti chiedo un numero per farti richiamare appena libero. |
| 5 | — | *(divisore grafico: «Nella chat di Paolo»)* |
| 6 | P | 🔴 Urgenza ore 21:52 — perdita sotto il lavello, via Farini (Modena), foto allegata. Le ho detto di chiudere il generale. Rispondi qui e la ricontatto io. |
| 7 | T | dille che domattina alle 7.30 sono da lei, stanotte col generale chiuso regge |
| 8 | P | *(al cliente)* Paolo mi ha risposto: col rubinetto generale chiuso stanotte sei tranquilla, domattina alle 7:30 è da te. Ti mando un promemoria alle 7:00 🔧 |

---

## DEMO-PROFESSIONISTI — «La veranda» (landing professionisti, da Journey 4)

Contesto: *una cliente scrive allo studio del geometra Costa, Bari.*
Chat cliente ↔ Paco.

| # | Chi | Messaggio |
|---|-----|-----------|
| 1 | C | Buongiorno, vorrei chiudere il balcone con una veranda. Serve il permesso del comune? |
| 2 | P | Buongiorno! Sono Paco, l'assistente dello studio Costa. Ti rispondo con onestà: dipende dal comune, dal condominio e dal balcone — e questa valutazione spetta ad Andrea, è il suo mestiere. Io posso preparargli il quadro: in che comune è l'immobile? |
| 3 | C | Bari, zona Poggiofranco. Condominio |
| 4 | P | Grazie. Mandami una foto del balcone e una misura anche a occhio, e dimmi per quando vorresti il lavoro. |
| 5 | C | *[foto]* Circa 3 metri per 1,5, entro l'inverno |
| 6 | P | Ho tutto: veranda ~3×1,5 m, condominio a Poggiofranco, entro l'autunno. Giro il quadro ad Andrea: in che orari preferisci essere richiamata? |
| 7 | C | Dopo le 17 su questo numero |
| 8 | P | Segnato. Andrea ti chiama oggi dopo le 17 📐 |

---

## Manutenzione

- Ogni modifica a questi testi va riportata in `src/data/demos.ts` (e
  viceversa: nessuna modifica ai testi direttamente nel codice).
- I claim impliciti nelle scene (tempi, funzioni) devono restare coerenti
  con [`02-mvp-roadmap.md`](02-mvp-roadmap.md): se una funzione esce
  dall'MVP, la scena che la mostra va rivista.
