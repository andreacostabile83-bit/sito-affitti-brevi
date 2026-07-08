import TrackedCtaLink from "../components/TrackedCtaLink";

export const metadata = {
  title: "Valutazione gratuita affitti brevi Roma | AC Domus Affitti",
  description:
    "Analisi gratuita e senza impegno: scopri quanto può rendere il tuo immobile a Roma con gli affitti brevi rispetto alla locazione tradizionale, con dati reali della tua zona.",
};

const WHATSAPP_NUMBER = "393286824515";

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ValutazioneGratuitaPage() {
  const domande = [
    "Conviene di più affittare in modo tradizionale o con affitti brevi?",
    "Cosa succede se capito su un inquilino moroso?",
    "Ho sentito parlare di affitti brevi ma non ho tempo di gestire ospiti, pulizie, messaggi",
    "Ho già un annuncio su Airbnb ma non rende quanto pensavo",
    "Non so se con la sublocazione rischio di perdere la cedolare secca",
  ];

  const confronto = [
    {
      n: "1",
      title: "Locazione tradizionale",
      desc: "Canone netto, rischio morosità, vincoli contrattuali.",
    },
    {
      n: "2",
      title: "Affitto breve in gestione",
      desc: "Ricavo netto stimato, occupazione media di zona, commissione trasparente.",
    },
    {
      n: "3",
      title: "Impatto fiscale",
      desc: "Come cambia la cedolare secca a seconda del modello di gestione scelto.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Scrivimi",
      desc: "Mi scrivi su WhatsApp — 2 minuti.",
    },
    {
      n: "02",
      title: "Rispondi a poche domande",
      desc: "Ti faccio 3-4 domande sull'immobile: zona, mq, stato attuale.",
    },
    {
      n: "03",
      title: "Preparo l'analisi",
      desc: "Con dati reali della tua microzona, non stime generiche.",
    },
    {
      n: "04",
      title: "Parliamone",
      desc: "Ti richiamo o ci vediamo per spiegarti i numeri — nessun impegno.",
    },
  ];

  const faqs = [
    {
      q: "Non ho tempo di gestire ospiti, messaggi, pulizie",
      a: "Con la gestione completa non tocchi nulla: check-in, pulizie, manutenzione, messaggi ospiti sono a mio carico.",
    },
    {
      q: "Ho paura di perdere soldi se non affitto abbastanza",
      a: "Nell'analisi ti mostro anche lo scenario conservativo, non solo quello ottimistico. Se i numeri non convincono, te lo dico chiaramente.",
    },
    {
      q: "Il mio immobile non è in centro, converrà comunque?",
      a: "Dipende dalla zona. È esattamente quello che verifichiamo nell'analisi — non tutte le zone di Roma rendono allo stesso modo con gli affitti brevi.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-5 lg:px-8">
          <img
            src="/logo.png"
            alt="AC Domus Affitti"
            className="h-16 w-auto sm:h-20"
          />
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
              AC Domus Affitti
            </p>
            <p className="text-sm text-neutral-500">Valutazione gratuita</p>
          </div>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Il tuo immobile a Roma può rendere di più. Te lo dimostro con
                i numeri, non con le promesse.
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Analisi gratuita e senza impegno: ti dico quanto puoi
                guadagnare con gli affitti brevi rispetto alla locazione
                tradizionale, con dati reali della tua zona — non stime
                generiche.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedCtaLink
                  href={waLink(
                    "Ciao Andrea, ho un immobile a Roma e vorrei richiedere l'analisi gratuita per capire quanto potrebbe rendere."
                  )}
                  event="click_richiedi_analisi"
                  ctaLocation="valutazione_hero_primary"
                  className="rounded-2xl bg-neutral-900 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Richiedi la tua analisi gratuita
                </TrackedCtaLink>

                <TrackedCtaLink
                  href={waLink(
                    "Ciao Andrea, vorrei scriverti per parlare del mio immobile a Roma."
                  )}
                  event="click_whatsapp"
                  ctaLocation="valutazione_hero_secondary"
                  className="rounded-2xl border border-neutral-300 px-6 py-3 text-center text-sm font-medium transition hover:bg-neutral-100"
                >
                  Scrivimi su WhatsApp
                </TrackedCtaLink>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-sm">
              <img
                src="/foto-andrea.jpg"
                alt="Andrea Costabile, AC Domus Affitti"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. IL PROBLEMA */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
            Se hai una casa libera a Roma, probabilmente ti sei già fatto
            queste domande
          </h2>

          <div className="mt-10 grid gap-3">
            {domande.map((domanda) => (
              <div
                key={domanda}
                className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-neutral-700"
              >
                {domanda}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LA PROMESSA CONCRETA */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Cosa ottieni con l'analisi gratuita
            </h2>
            <p className="mt-4 text-neutral-600">
              Non una stima generica scaricata da un tool automatico. Un
              confronto reale tra:
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {confronto.map((item) => (
              <div
                key={item.n}
                className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <div className="text-sm font-semibold text-neutral-500">
                  {item.n}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 font-medium text-neutral-700">
            Output concreto: un documento con numeri, non una chiacchierata
            di 10 minuti.
          </p>

          <div className="mt-10 rounded-3xl border border-neutral-200 bg-neutral-900 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Caso reale — Zona Valle Aurelia, Roma
            </p>
            <p className="mt-4 leading-7 text-white/85">
              Un proprietario affittava il suo appartamento (6 posti letto)
              con contratto tradizionale 3+2 a{" "}
              <strong className="text-white">€1.000/mese</strong>, in
              cedolare secca.
            </p>
            <p className="mt-4 leading-7 text-white/85">
              Da aprile 2026, con gestione conto terzi in affitti brevi, il
              netto medio mensile si è mantenuto stabilmente sopra i{" "}
              <strong className="text-white">€2.000/mese</strong> nei primi
              quattro mesi{" "}
              <em>
                (dato al netto di commissione di gestione, cedolare secca e
                fee Airbnb — esclusi i costi variabili di pulizie e
                utenze)
              </em>
              .
            </p>
            <p className="mt-4 leading-7 text-white/70">
              Il proprietario non aveva problemi di morosità con l'inquilino
              precedente. La scelta è nata da un ragionamento diverso: con
              gli affitti brevi mantiene sempre accesso e controllo
              sull'immobile, oltre a una redditività superiore.
            </p>
          </div>
        </div>
      </section>

      {/* 4. IL DIFFERENZIATORE */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Un dettaglio che pochi property manager ti spiegano
            </h2>
            <p className="mt-4 leading-7 text-neutral-700">
              Con la sublocazione, un intermediario con partita IVA può far
              perdere al proprietario il diritto alla cedolare secca. Con la
              gestione conto terzi (mandato con rappresentanza), i veri
              conduttori restano gli ospiti turisti:{" "}
              <strong>la cedolare secca resta tua</strong>.
            </p>
            <p className="mt-4 leading-7 text-neutral-700">
              È un dettaglio tecnico, ma sposta concretamente quanto ti
              resta in tasca a fine anno. Te lo spiego nell'analisi, con
              riferimento alla normativa vigente (Cass. Sez. Unite, ord.
              30016/2025).
            </p>
          </div>
        </div>
      </section>

      {/* 5. CHI SONO */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Perché fidarti della mia analisi
            </h2>
            <p className="mt-4 leading-7 text-neutral-600">
              Gestisco direttamente immobili a Roma con affitti brevi. Non
              ti sto vendendo un metodo teorico — è lo stesso metodo che uso
              sulle case che gestisco ogni giorno.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { value: "4.94 ⭐", label: "Valutazione media ospiti" },
              { value: "83.5%", label: "Tasso di occupazione medio" },
              { value: "93.5%", label: "Recensioni a 5 stelle" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-8"
              >
                <p className="text-3xl font-semibold text-neutral-900">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://open.spotify.com/show/033qPntD2HWyUz06qmOWbC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
            >
              Ascolta il podcast su Spotify
            </a>
            <a
              href="https://www.youtube.com/channel/UCKi0mVBnGquEeOOM1gRkyYw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
            >
              Guarda il canale YouTube
            </a>
          </div>
        </div>
      </section>

      {/* 6. COME FUNZIONA */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Il processo, passo dopo passo
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-neutral-500">
                  {step.n}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Le domande che mi fanno più spesso
            </h2>
          </div>

          <div className="mt-10 grid gap-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA FINALE */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Prima di decidere, guarda i numeri veri del tuo immobile
            </h2>
            <p className="mt-4 text-white/75">
              Nessun impegno. Nessuna pressione. Solo un'analisi seria che
              ti aiuta a scegliere con dati alla mano.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedCtaLink
              href={waLink(
                "Ciao Andrea, ho letto la pagina di valutazione gratuita e vorrei richiedere l'analisi per il mio immobile a Roma."
              )}
              event="click_richiedi_analisi"
              ctaLocation="valutazione_final_primary"
              className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-medium text-neutral-900 shadow-sm transition hover:opacity-90"
            >
              Richiedi la tua analisi gratuita
            </TrackedCtaLink>

            <TrackedCtaLink
              href={waLink(
                "Ciao Andrea, vorrei scriverti direttamente per parlare del mio immobile a Roma."
              )}
              event="click_whatsapp"
              ctaLocation="valutazione_final_secondary"
              className="rounded-2xl border border-white/30 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
            >
              Oppure scrivimi direttamente su WhatsApp
            </TrackedCtaLink>
          </div>
        </div>
      </section>
    </div>
  );
}
