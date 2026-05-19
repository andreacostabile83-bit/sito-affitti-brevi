export const metadata = {
  title: "Gestione affitti brevi Roma | AC Domus Affitti",
  description:
    "Gestione professionale affitti brevi a Roma. Massimizziamo il rendimento del tuo immobile con strategie avanzate e pricing dinamico.",
};
export default function LandingPage() {
  const services = [
    {
      title: "Gestione completa affitti brevi a Roma",
      desc: "Seguo l’intero processo operativo: strategia, pubblicazione annunci, pricing, comunicazione ospiti, check-in, coordinamento pulizie e ottimizzazione della redditività.",
    },
    {
      title: "Consulenza per affitti brevi in tutta Italia",
      desc: "Analizzo il tuo immobile e ti aiuto a capire se ha davvero più potenziale in affitto breve rispetto a una locazione tradizionale.",
    },
    {
      title: "Ottimizzazione annuncio e posizionamento",
      desc: "Titoli, descrizioni, foto, regole tariffarie e impostazioni vengono rivisti con criterio per migliorare visibilità, percezione e conversione.",
    },
    {
      title: "Pricing e rendimento",
      desc: "Non basta pubblicare una casa online. Il punto è farla lavorare bene, con una logica di prezzi, occupazione e margine netto.",
    },
  ];

  const benefits = [
    "Aumento della visibilità e delle richieste",
    "Migliore percezione dell’immobile",
    "Più controllo su prezzi e occupazione",
    "Ottimizzazione del rendimento nel tempo",
  ];

  const freeAnalysis = [
    "Valutazione preliminare del potenziale del tuo immobile",
    "Confronto tra affitto tradizionale e affitto breve",
    "Indicazione realistica su margini e strategia",
  ];

  const trustPoints = [
    "Approccio orientato al rendimento netto",
    "Analisi concreta, non promessa generica",
    "Gestione ordinata e professionale",
    "Focus su immagine, pricing e conversione",
  ];

  const steps = [
    {
      n: "01",
      title: "Analisi",
      desc: "Studio immobile, zona, costi, target e potenziale reale di rendimento.",
      subtitle: "Zona, costi, target e potenziale reale",
    },
    {
      n: "02",
      title: "Strategia",
      desc: "Definisco cosa migliorare davvero: presentazione, pricing, impostazioni e posizionamento.",
      subtitle: "Presentazione, pricing e posizionamento",
    },
    {
      n: "03",
      title: "Azione",
      desc: "Possiamo lavorare in consulenza oppure in gestione diretta, in base al caso.",
      subtitle: "Consulenza o gestione diretta, in base al tuo caso",
    },
  ];

  const reviews = [
    {
      name: "Andrea B.",
      city: "Roma",
      initials: "AB",
      avatarClass: "bg-amber-400 text-white",
text: "Avevo un appartamento affittato a €1.000 al mese. Andrea si è occupato di tutto: strategia, annuncio, pricing e gestione. Nel primo mese ho guadagnato €2.200 netti. Non avrei mai pensato fosse possibile.",    },
    {
      name: "Sonia B.",
      city: "Roma",
      initials: "SB",
      avatarClass: "bg-emerald-800 text-white",
      text: "Prima affittavo il mio appartamento a €700 al mese e pensavo fosse la soluzione migliore. Andrea mi ha aiutato a capire il potenziale degli affitti brevi, mi ha seguito passo passo — dalla burocrazia alla pubblicazione dell'annuncio — e i risultati mi hanno dato ragione. Consiglio a chiunque abbia un immobile di confrontarsi con lui prima di prendere decisioni.",
    },
    {
      name: "Nadia T.",
      city: "Roma",
      initials: "NT",
      avatarClass: "bg-blue-900 text-white",
      text: "Andrea mi ha insegnato tutto sulla gestione degli affitti brevi: come impostare l'annuncio, le foto, i prezzi, come rispondere agli ospiti. Oggi gestisco il mio appartamento in autonomia completa e i risultati parlano da soli. Un percorso che mi ha cambiato il modo di vedere il mio immobile.",
    },
  ];

  const faqs = [
    {
      q: "Come faccio a capire se il mio immobile conviene in affitto breve?",
      a: "Si parte da una valutazione concreta: zona, tipologia, costi, attrattività dell’immobile e confronto con il potenziale di una locazione tradizionale.",
    },
    {
      q: "L’affitto breve rende sempre di più?",
      a: "No. Rende di più solo quando c’è una base giusta e una gestione professionale. Per questo la prima cosa utile è capire se il tuo immobile ha davvero i presupposti.",
    },
    {
      q: "Offri solo gestione completa o anche consulenza?",
      a: "Entrambe. In alcuni casi ha senso una gestione completa, in altri una consulenza strategica per capire numeri, impostazione e margini.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="AC Domus Affitti"
              className="h-20 w-auto sm:h-24"
            />
            <div className="leading-tight">
              <p className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                AC Domus Affitti
              </p>
              <p className="text-sm text-neutral-500 sm:text-base">
                Gestione affitti brevi:aumenta il rendimento del tuo immobile.

              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#portfolio"
              className="hidden rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium transition hover:bg-neutral-100 sm:inline-block"
            >
              Portfolio
            </a>
            <a
              href="#contatti"
              className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Contatti
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-neutral-300 px-4 py-1 text-sm font-medium">
                Roma · Gestione professionale · Consulenza strategica
              </p>

              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Gestione affitti brevi a Roma: aumenta il rendimento del tuo immobile
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Offro gestione affitti brevi a Roma per proprietari che vogliono aumentare il rendimento del proprio immobile con strategie professionali, pricing dinamico e ottimizzazione completa degli annunci.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
                Non prometto numeri a caso. Analizzo il potenziale reale,
                verifico la convenienza e costruisco una strategia concreta per
                far rendere meglio l’immobile.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/393286824515?text=Ciao%20Andrea,%20ho%20un%20immobile%20a%20Roma%20e%20vorrei%20capire%20quanto%20potrebbe%20rendere%20con%20una%20gestione%20professionale."
                  className="rounded-2xl bg-neutral-900 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  Richiedi analisi gratuita
                </a>

                <a
                  href="#guadagno"
                  className="rounded-2xl border border-neutral-300 px-6 py-3 text-center text-sm font-medium transition hover:bg-neutral-100"
                >
                  Confronta i rendimenti
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trustPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-neutral-200 bg-neutral-100 p-6 shadow-sm">
                <p className="text-sm font-medium text-neutral-500">
                  Per chi è questo servizio
                </p>
                <p className="mt-3 text-2xl font-semibold">
                  Proprietari che vogliono capire se stanno lasciando soldi sul
                  tavolo.
                </p>
                <p className="mt-3 text-neutral-600">
                  Se hai un immobile a Roma e vuoi capire se conviene davvero
                  l’affitto breve rispetto a una soluzione tradizionale, qui
                  trovi un approccio concreto, non improvvisato.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="text-sm text-neutral-500">Approccio</p>
                  <p className="mt-2 text-xl font-semibold">Professionale</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Focus su immagine, pricing, gestione e margine.
                  </p>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="text-sm text-neutral-500">Obiettivo</p>
                  <p className="mt-2 text-xl font-semibold">Più utile netto</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Il punto non è fatturare di più. Il punto è trattenere di più.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servizi" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Servizi
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Servizi di gestione affitti brevi a Roma
          </h2>
          <p className="mt-4 text-neutral-600">
            Non mi limito a pubblicare un annuncio. Lavoro per costruire
            un’impostazione efficace, più ordinata e più redditizia.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
<div className="mt-6 p-8 rounded-3xl bg-neutral-900 text-white">
  <h2 className="text-2xl font-semibold">
    Vuoi capire quanto può rendere davvero il tuo immobile?
  </h2>

  <p className="mt-3 text-white/70">
    Analizzo gratuitamente il tuo immobile e ti mostro il potenziale reale in affitto breve, con numeri concreti.
  </p>

  <a
  href="https://wa.me/393286824515?text=Ciao%2C%20vorrei%20ricevere%20una%20consulenza%20per%20affitti%20brevi"
  target="_blank"
  className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-xl font-medium"
>
  Richiedi analisi gratuita
</a>
</div>


      <section id="portfolio" className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="max-w-2xl">
<h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl mt-4">
  Gestione affitti brevi professionale: perché conviene davvero
</h2>

<p className="mt-4 text-neutral-600 max-w-2xl">
  Affidarsi a un professionista nella gestione degli affitti brevi significa aumentare il rendimento del proprio immobile, ridurre lo stress operativo e ottimizzare ogni fase: dalla pubblicazione dell’annuncio al pricing dinamico, fino alla gestione degli ospiti.
</p>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Alcuni immobili valorizzati
            </h2>
            <p className="mt-4 text-neutral-600">
              Esempi reali di appartamenti presentati in modo professionale, con
              attenzione a immagine, ordine, percezione e conversione.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <img
                src="/appartamento1.png"
                alt="Appartamento valorizzato 1"
                className="h-72 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-base font-semibold">
                  Immagine curata, impatto più forte
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  Una casa presentata bene parte già con un vantaggio reale.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <img
                src="/appartamento2.png"
                alt="Appartamento valorizzato 2"
                className="h-72 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-base font-semibold">
                  Dettagli che incidono sulla conversione
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  Foto, impostazione e ordine influenzano click, richieste e
                  valore percepito.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <img
                src="/appartamento3.png"
                alt="Appartamento valorizzato 3"
                className="h-72 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-base font-semibold">
                  Ogni immobile va letto nel modo giusto
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  Non tutte le case si lavorano allo stesso modo. Conta capire
                  come tirare fuori il meglio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Perché ha senso approfondire
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Il rischio non è solo guadagnare poco. È non accorgersene.
              </h2>
              <p className="mt-4 max-w-2xl text-neutral-600">
                Molti immobili rendono meno di quanto potrebbero perché vengono
                gestiti senza metodo: prezzi messi a caso, annuncio debole,
                impostazioni sbagliate, immagine poco curata, costi sottovalutati.
              </p>
              <p className="mt-4 max-w-2xl text-neutral-600">
                Il punto non è essere online. Il punto è capire se l’immobile è
                sfruttato bene oppure no.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">
                Cosa ottieni con un’impostazione professionale
              </h3>
              <div className="mt-5 grid gap-3">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Risultati
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Esempi di occupazione e continuità
            </h2>
            <p className="mt-4 text-neutral-600">
              Alcuni screen utili per far percepire come una gestione attiva e
              professionale possa incidere sulla continuità delle prenotazioni.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <img
                src="/calendario1.png"
                alt="Esempio calendario prenotazioni 1"
                className="w-full object-cover"
              />
              <div className="p-5">
                <p className="text-base font-semibold">Monitoraggio costante</p>
                <p className="mt-2 text-sm text-neutral-600">
                  Il calendario non si riempie da solo: contano pricing,
                  posizionamento e gestione rapida.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
              <img
                src="/calendario2.png"
                alt="Esempio calendario prenotazioni 2"
                className="w-full object-cover"
              />
              <div className="p-5">
                <p className="text-base font-semibold">Strategia e continuità</p>
                <p className="mt-2 text-sm text-neutral-600">
                  L’obiettivo non è esserci. È ottenere più occupazione e miglior
                  rendimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guadagno" className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Confronto rendimento
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Affitto tradizionale o affitto breve?
            </h2>
            <p className="mt-4 text-neutral-600">
              Non esiste una risposta uguale per tutti. Ma esiste un modo serio
              per capire quale strada ha davvero più senso per il tuo immobile.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
              <p className="text-sm text-neutral-500">Affitto tradizionale</p>
              <p className="mt-2 text-2xl font-semibold">€800 - €1.200 / mese</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Guadagno fisso</li>
                <li>• Più prevedibile</li>
                <li>• Minore flessibilità</li>
                <li>• Potenziale spesso sottovalutato</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-neutral-900 bg-neutral-900 p-8 text-white">
              <p className="text-sm text-white/60">
                Affitto breve con gestione professionale
              </p>
              <p className="mt-2 text-2xl font-semibold">€1.800 - €3.000+ / mese</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Prezzi dinamici</li>
                <li>• Più ottimizzazione</li>
                <li>• Maggiore controllo operativo</li>
                <li>• Potenziale di rendimento superiore</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-neutral-700">
            Ogni casa è diversa. Per questo la cosa sensata non è promettere:
            è analizzare e capire se il tuo immobile ha davvero i presupposti
            per lavorare meglio in affitto breve.
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <img
                  src="/Andrea.jpg"
                  alt="Andrea Costabile"
                  className="h-48 w-48 flex-shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Chi sono
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                    Dietro il sito c’è un lavoro concreto.
                  </h2>
                  <p className="mt-4 leading-7 text-neutral-600">
                    Ho iniziato dal basso. Davvero. Due anni fa ho acquistato il mio primo appartamento in una zona periferica di Roma. Ho fatto le pulizie con le mie mani, i check-in di persona, imparato ogni dettaglio dall’interno. Piano piano ho automatizzato tutto: self check-in, messaggi automatici, pulizie esternalizzate.
                  </p>
                  <p className="mt-4 leading-7 text-neutral-600">
                    Oggi gestisco tre immobili a Roma. Per un proprietario ho trasformato un contratto da €1.000/mese in €2.200 netti — solo nel primo mese.
                  </p>
                  <p className="mt-4 leading-7 text-neutral-600">
                    Non offro consulenze teoriche. Conosco questo lavoro perché l’ho fatto, l’ho insegnato e continuo a farlo ogni giorno.
                  </p>

                  <div className="mt-8 grid gap-3">
                    {freeAnalysis.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid items-stretch gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="h-full rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm"
                >
                  <div className="text-sm font-semibold text-neutral-500">
                    {step.n}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">
                    {step.desc}
                  </p>
                  <p className="mt-4 text-sm font-medium text-neutral-500">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              I numeri parlano
            </h2>
            <p className="mt-3 text-neutral-400">
              Dati reali degli annunci gestiti da AC Domus Affitti — aprile/maggio 2026
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "4.94 ⭐", label: "Valutazione media ospiti" },
              { value: "83.5%", label: "Tasso di occupazione" },
              { value: "+30.6%", label: "Rispetto agli annunci simili" },
              { value: "93.5%", label: "Recensioni a 5 stelle" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8"
              >
                <p className="text-4xl font-semibold text-amber-400">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { src: "/dashboard-qualita.png", caption: "Qualità" },
              { src: "/dashboard-occupazione.png", caption: "Occupazione" },
              { src: "/dashboard-visibilita.png", caption: "Visibilità" },
            ].map((img) => (
              <div key={img.caption} className="overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={`Dashboard ${img.caption}`}
                  className="w-full object-cover"
                />
                <p className="mt-2 text-center text-sm text-neutral-400">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-neutral-500">
            Screenshot verificabili direttamente dalla piattaforma Airbnb
          </p>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Recensioni
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Cosa dicono i proprietari
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm"
              >
                <div className="text-lg text-amber-400">★★★★★</div>
                <p className="mt-4 flex-1 leading-7 text-neutral-600">
                  "{review.text}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-4">
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${review.avatarClass}`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">{review.name}</p>
                    <p className="text-sm text-neutral-500">{review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Domande frequenti
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Le tre domande che contano davvero
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

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex justify-center">
              <img
                src="/ebook-copertina.jpg"
                alt="Ebook gratuito affitti brevi"
                className="w-full max-w-sm rounded-2xl shadow-md"
              />
            </div>

            <iframe
              src="https://ae25f9b0.sibforms.com/serve/MUIFAIemlKvXEy5QAX1JY-cqOBzGlSbxTqdQSTErPcyA3JZsxZywvD5NWxnuvElAJWh_qjbqeuSFDqe4gezIfFNu-JnBNvav--t2QfKu0WLbwyjXrMNnYobSgaatdsFyZrWeyX9fF2yatai_3tATi9Hw5x0k17qeVG1Y_qzpctP0VYndeIVfIGFp6yZUqKTAhwC-bQJgUdMagdPAMQ=="
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                Analisi e contatto
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Vuoi capire se il tuo immobile può produrre di più?
              </h2>
              <p className="mt-4 max-w-xl text-white/75">
                Posso fare una prima valutazione del caso e dirti se ci sono i
                presupposti per ottenere un rendimento migliore con una gestione
                professionale.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold">Analisi gratuita</p>
                  <p className="mt-2 text-sm text-white/70">
                    Prima lettura del potenziale dell’immobile.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold">Confronto utile</p>
                  <p className="mt-2 text-sm text-white/70">
                    Tradizionale vs breve, senza giri di parole.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold">WhatsApp diretto</p>
                  <p className="mt-2 text-sm text-white/70">
                    Contatto rapido, semplice e immediato.
                  </p>
                </div>
              </div>
            </div>

            <div
              id="contatti"
              className="rounded-3xl bg-white p-8 text-neutral-900 shadow-sm"
            >
              <h3 className="text-2xl font-semibold">Parliamone</h3>
              <p className="mt-3 text-neutral-600">
                Se vuoi capire se il tuo immobile ha più potenziale di quello
                che sta esprimendo oggi, scrivimi.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div className="rounded-2xl border border-neutral-200 px-4 py-3">
                  Email: info@acdomusaffitti.it
                </div>
                <div className="rounded-2xl border border-neutral-200 px-4 py-3">
                  Telefono / WhatsApp: +39 3286824515
                </div>
                <div className="rounded-2xl border border-neutral-200 px-4 py-3">
                  Zona operativa: Roma e consulenze da remoto
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/393286824515?text=Ciao%20Andrea,%20ho%20un%20immobile%20a%20Roma%20e%20vorrei%20capire%20se%20pu%C3%B2%20rendere%20di%20pi%C3%B9%20con%20una%20gestione%20professionale."
                  className="inline-block rounded-2xl bg-neutral-900 px-6 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
                >
                  Richiedi analisi gratuita
                </a>
                <a
                  href="mailto:info@domusaffitti.it"
                  className="inline-block rounded-2xl border border-neutral-300 px-6 py-3 text-center text-sm font-medium transition hover:bg-neutral-100"
                >
                  Scrivimi via email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
