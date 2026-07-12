export const metadata = {
  title: "Informativa privacy | AC Domus Affitti",
  description:
    "Informativa sul trattamento dei dati personali raccolti tramite il sito AC Domus Affitti.",
};

export default function PrivacyPage() {
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
            <p className="text-sm text-neutral-500">Informativa privacy</p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
        <div className="mb-8 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
          <strong>Bozza in attesa di revisione legale.</strong> Questo testo è
          un modello generico, non ancora verificato da un legale o
          consulente privacy. Prima di considerare il sito pienamente
          conforme al GDPR, fallo rivedere e completare da un professionista
          (dati del titolare, base giuridica puntuale, eventuale nomina dei
          responsabili del trattamento, tempi di conservazione definitivi).
        </div>

        <h1 className="text-3xl font-semibold sm:text-4xl">
          Informativa sul trattamento dei dati personali
        </h1>
        <p className="mt-3 text-sm text-neutral-500">
          Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR)
        </p>

        <div className="mt-10 space-y-8 leading-7 text-neutral-700">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900">
              1. Titolare del trattamento
            </h2>
            <p className="mt-3">
              Andrea Costabile — AC Domus Affitti, contattabile
              all&apos;indirizzo email{" "}
              <a
                href="mailto:info@acdomusaffitti.it"
                className="underline underline-offset-2"
              >
                info@acdomusaffitti.it
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-neutral-900">
              2. Dati raccolti
            </h2>
            <p className="mt-3">
              Attraverso il modulo &quot;Richiedi la tua analisi
              gratuita&quot; raccogliamo: nome e cognome, numero di
              telefono, indirizzo email, zona o indirizzo
              dell&apos;immobile, tipologia e metratura dell&apos;immobile,
              situazione attuale dell&apos;immobile, obiettivo della
              richiesta ed eventuali informazioni aggiuntive fornite
              volontariamente.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-neutral-900">
              3. Finalità del trattamento
            </h2>
            <p className="mt-3">
              I dati sono trattati esclusivamente per rispondere alla
              richiesta di analisi gratuita dell&apos;immobile e per essere
              ricontattati in merito, non per finalità di marketing o invio
              di comunicazioni commerciali non richieste.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-neutral-900">
              4. Base giuridica
            </h2>
            <p className="mt-3">
              Il trattamento si basa sul consenso esplicito fornito
              compilando il modulo (art. 6.1.a GDPR) e sull&apos;esecuzione
              di misure precontrattuali richieste dall&apos;interessato
              (art. 6.1.b GDPR).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-neutral-900">
              5. Modalità di trattamento e destinatari
            </h2>
            <p className="mt-3">
              I dati inviati tramite il modulo vengono recapitati via email a
              info@acdomusaffitti.it attraverso il servizio di invio email
              Brevo (Sendinblue), che agisce in qualità di responsabile del
              trattamento per la parte tecnica di consegna del messaggio. I
              dati non vengono ceduti a terzi per finalità commerciali.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-neutral-900">
              6. Conservazione dei dati
            </h2>
            <p className="mt-3">
              I dati sono conservati per il tempo necessario a gestire la
              richiesta e l&apos;eventuale rapporto successivo, e comunque
              non oltre i termini di legge applicabili.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-neutral-900">
              7. Diritti dell&apos;interessato
            </h2>
            <p className="mt-3">
              In qualsiasi momento è possibile richiedere l&apos;accesso, la
              rettifica, la cancellazione dei dati o la revoca del consenso,
              scrivendo a{" "}
              <a
                href="mailto:info@acdomusaffitti.it"
                className="underline underline-offset-2"
              >
                info@acdomusaffitti.it
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
