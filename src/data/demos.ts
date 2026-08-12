/**
 * Conversazioni simulate mostrate sul sito.
 * Fonte canonica dei testi: docs/product/05-demo-scripts.md — le
 * modifiche si fanno lì e si riportano qui, mai al contrario.
 */

export type Sender = 'paco' | 'owner' | 'client';

export interface DemoMessage {
  from: Sender;
  text: string;
  time: string;
  /** allegato fotografico (reso come segnaposto onesto, non foto finta) */
  photo?: boolean;
  /** divisore di scena mostrato PRIMA del messaggio (es. cambio chat) */
  divider?: string;
}

export interface Demo {
  id: string;
  /** intestazione della finestra chat */
  contactName: string;
  contactStatus: string;
  /** riga di contesto sopra il telefono */
  context: string;
  messages: DemoMessage[];
}

const demoIds = ['hero', 'ristoranti', 'parrucchieri', 'artigiani', 'professionisti'] as const;
export type DemoId = (typeof demoIds)[number];

export const demos: Record<DemoId, Demo> = {
  hero: {
    id: 'hero',
    contactName: 'Paco',
    contactStatus: 'assistente della pizzeria Da Salvo',
    context: 'Salvatore, pizzeria a Quarto (NA) · venerdì, 17:40',
    messages: [
      { from: 'owner', text: 'stasera niente fritti, s’è rotta la friggitrice', time: '17:41' },
      {
        from: 'paco',
        text: 'Ricevuto. Tolgo i fritti dal menù online per stasera e metto un avviso: «Stasera i fritti non sono disponibili». Se un cliente me li chiede qui su WhatsApp, lo avviso io. Va bene?',
        time: '17:41',
      },
      {
        from: 'owner',
        text: 'ok. e metti che venerdì prossimo c’è la serata pizza e sfizi a 15 euro',
        time: '17:41',
      },
      {
        from: 'paco',
        text: 'Fatto 👍 In home ora c’è: «Venerdì 21 — Serata pizza e sfizi, menù fisso 15 €». La tolgo da sola sabato mattina. La propongo anche a chi scrive per prenotare?',
        time: '17:42',
      },
      { from: 'owner', text: 'si', time: '17:42' },
      { from: 'paco', text: 'Perfetto, è tutto online. Buon servizio stasera 🍕', time: '17:42' },
    ],
  },
  ristoranti: {
    id: 'ristoranti',
    contactName: 'Pizzeria Da Salvo',
    contactStatus: 'risponde Paco, l’assistente',
    context: 'Un cliente scrive al numero della pizzeria · sabato, 11:05',
    messages: [
      {
        from: 'client',
        text: 'Buongiorno, avete posto stasera per 8 verso le 20:30? Siamo con due bambini',
        time: '11:05',
      },
      {
        from: 'paco',
        text: 'Buongiorno! Sono Paco, l’assistente della pizzeria Da Salvo. Stasera siamo aperti dalle 19:00. Per un tavolo da 8 chiedo conferma a Salvatore e ti dico subito. Due seggioloni, giusto?',
        time: '11:05',
      },
      { from: 'client', text: 'Sì grazie, uno basta', time: '11:06' },
      { from: 'paco', text: 'Perfetto, ti scrivo tra pochissimo.', time: '11:06' },
      {
        from: 'paco',
        text: 'Confermato ✅ Tavolo da 8 stasera alle 20:30, un seggiolone. A che nome lo segno?',
        time: '11:12',
      },
      { from: 'client', text: 'Esposito. Grazie mille!', time: '11:13' },
      { from: 'paco', text: 'Segnato: Esposito, 8 persone, 20:30. A stasera! 🍕', time: '11:13' },
    ],
  },
  parrucchieri: {
    id: 'parrucchieri',
    contactName: 'Paco',
    contactStatus: 'assistente di Lucia Hair Style',
    context: 'Lucia attiva Paco per il suo salone · Busto Arsizio',
    messages: [
      {
        from: 'paco',
        text: 'Ciao Lucia! Per il listino non serve scriverlo: se ce l’hai appeso in salone, mandami una foto e lo sistemo io.',
        time: '15:20',
      },
      { from: 'owner', text: 'Ecco qua', time: '15:24', photo: true },
      {
        from: 'paco',
        text: 'Fatto: ho letto 14 servizi. Taglio donna 25 €, piega 18 €, colore da 45 €, taglio uomo 16 €… Li ho divisi in Donna, Uomo e Trattamenti. Se un prezzo non torna, dimmelo e lo cambio.',
        time: '15:25',
      },
      { from: 'owner', text: 'la piega è 20 adesso', time: '15:27' },
      { from: 'paco', text: 'Corretto: piega 20 € ✔️ Vuoi vedere come sta venendo il sito?', time: '15:27' },
      { from: 'owner', text: 'si dai', time: '15:28' },
      {
        from: 'paco',
        text: 'Eccolo: 👉 luciahairstyle.paco.it — guardalo dal telefono e dimmi cosa cambiare. Me lo dici a parole, ci penso io.',
        time: '15:28',
      },
    ],
  },
  artigiani: {
    id: 'artigiani',
    contactName: 'Idraulica Ferri',
    contactStatus: 'risponde Paco, l’assistente',
    context: 'Una cliente trova «Idraulica Ferri» e scrive dal sito · 21:50',
    messages: [
      {
        from: 'client',
        text: 'Buonasera, perde il tubo sotto il lavello, c’è acqua ovunque. Fate urgenze?',
        time: '21:50',
      },
      {
        from: 'paco',
        text: 'Buonasera! Sono Paco, l’assistente di Idraulica Ferri. Prima cosa: chiudi il rubinetto generale, così l’acqua si ferma. Poi ti faccio richiamare da Paolo: mi dici la zona e, se riesci, una foto del tubo?',
        time: '21:51',
      },
      { from: 'client', text: 'Modena centro, via Farini.', time: '21:52', photo: true },
      {
        from: 'paco',
        text: 'Passo tutto a Paolo con la foto. Se non ti risponde entro mezz’ora ti chiedo un numero per farti richiamare appena libero.',
        time: '21:52',
      },
      {
        from: 'paco',
        text: '🔴 Urgenza ore 21:52 — perdita sotto il lavello, via Farini (Modena), foto allegata. Le ho detto di chiudere il generale. Rispondi qui e la ricontatto io.',
        time: '21:53',
        divider: 'Nella chat di Paolo, il titolare',
      },
      {
        from: 'owner',
        text: 'dille che domattina alle 7.30 sono da lei, stanotte col generale chiuso regge',
        time: '22:04',
      },
      {
        from: 'paco',
        text: 'Paolo mi ha risposto: col rubinetto generale chiuso stanotte sei tranquilla, domattina alle 7:30 è da te. Ti mando un promemoria alle 7:00 🔧',
        time: '22:05',
        divider: 'Di nuovo nella chat della cliente',
      },
    ],
  },
  professionisti: {
    id: 'professionisti',
    contactName: 'Studio Costa — geometra',
    contactStatus: 'risponde Paco, l’assistente',
    context: 'Una cliente scrive allo studio del geometra Costa · Bari',
    messages: [
      {
        from: 'client',
        text: 'Buongiorno, vorrei chiudere il balcone con una veranda. Serve il permesso del comune?',
        time: '11:14',
      },
      {
        from: 'paco',
        text: 'Buongiorno! Sono Paco, l’assistente dello studio Costa. Ti rispondo con onestà: dipende dal comune, dal condominio e dal balcone — e questa valutazione spetta ad Andrea, è il suo mestiere. Io posso preparargli il quadro: in che comune è l’immobile?',
        time: '11:15',
      },
      { from: 'client', text: 'Bari, zona Poggiofranco. Condominio', time: '11:16' },
      {
        from: 'paco',
        text: 'Grazie. Mandami una foto del balcone e una misura anche a occhio, e dimmi per quando vorresti il lavoro.',
        time: '11:16',
      },
      { from: 'client', text: 'Circa 3 metri per 1,5, entro l’inverno', time: '11:19', photo: true },
      {
        from: 'paco',
        text: 'Ho tutto: veranda ~3×1,5 m, condominio a Poggiofranco, entro l’autunno. Giro il quadro ad Andrea: in che orari preferisci essere richiamata?',
        time: '11:19',
      },
      { from: 'client', text: 'Dopo le 17 su questo numero', time: '11:20' },
      { from: 'paco', text: 'Segnato. Andrea ti chiama oggi dopo le 17 📐', time: '11:20' },
    ],
  },
};
