"use client";

import { useRef, useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const PROPERTY_TYPES = ["Monolocale", "Bilocale", "Trilocale", "Quadrilocale", "Altro"];

const PROPERTY_STATUSES = [
  "Immobile libero",
  "Attualmente affittato",
  "Già presente su Airbnb o altri portali",
  "Utilizzato personalmente",
  "In fase di acquisto",
  "Altro",
];

const MAIN_GOALS = [
  "Aumentare la rendita",
  "Confrontare affitto tradizionale e affitti brevi",
  "Affidare completamente la gestione",
  "Migliorare un annuncio già esistente",
  "Sto soltanto valutando",
  "Altro",
];

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  propertyArea: string;
  propertyType: string;
  propertySize: string;
  propertyStatus: string;
  mainGoal: string;
  additionalInformation: string;
  privacyAccepted: boolean;
  website: string; // honeypot
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  propertyArea: "",
  propertyType: "",
  propertySize: "",
  propertyStatus: "",
  mainGoal: "",
  additionalInformation: "",
  privacyAccepted: false,
  website: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\s()-]{6,20}$/;

function getUtmParams() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
    utmContent: params.get("utm_content") || undefined,
    utmTerm: params.get("utm_term") || undefined,
  };
}

function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, {
    page_path: window.location.pathname,
    source: "landing-valutazione-gratuita",
    ...getUtmParams(),
    ...params,
  });
}

export default function LeadForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const hasStartedRef = useRef(false);

  function handleFirstInteraction() {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    trackEvent("form_analisi_started");
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(v: FormState): Errors {
    const next: Errors = {};

    if (!v.fullName.trim()) {
      next.fullName = "Inserisci il tuo nome e cognome.";
    }
    if (!PHONE_RE.test(v.phone.trim()) || v.phone.replace(/\D/g, "").length < 6) {
      next.phone = "Inserisci un numero di telefono valido.";
    }
    if (!EMAIL_RE.test(v.email.trim())) {
      next.email = "Inserisci un indirizzo email valido.";
    }
    if (!v.propertyArea.trim()) {
      next.propertyArea = "Indica la zona o l'indirizzo dell'immobile.";
    }
    if (!PROPERTY_TYPES.includes(v.propertyType)) {
      next.propertyType = "Seleziona la tipologia dell'immobile.";
    }
    const size = Number(v.propertySize);
    if (!v.propertySize.trim() || !Number.isFinite(size) || size < 8 || size > 2000) {
      next.propertySize = "Inserisci una metratura plausibile (tra 8 e 2000 mq).";
    }
    if (!PROPERTY_STATUSES.includes(v.propertyStatus)) {
      next.propertyStatus = "Seleziona la situazione attuale dell'immobile.";
    }
    if (!v.privacyAccepted) {
      next.privacyAccepted =
        "Per inviare la richiesta devi leggere e accettare l'informativa privacy.";
    }

    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (values.website.trim()) {
      // Honeypot compilato: comportamento silenzioso, nessun invio reale.
      setStatus("success");
      return;
    }

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    try {
      const utm = getUtmParams();
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          phone: values.phone.trim(),
          email: values.email.trim(),
          propertyArea: values.propertyArea.trim(),
          propertyType: values.propertyType,
          propertySize: values.propertySize.trim(),
          propertyStatus: values.propertyStatus,
          mainGoal: values.mainGoal,
          additionalInformation: values.additionalInformation.trim(),
          privacyAccepted: values.privacyAccepted,
          website: values.website,
          source: "landing-valutazione-gratuita",
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString(),
          ...utm,
        }),
      });

      if (!res.ok) {
        throw new Error("request_failed");
      }

      setStatus("success");
      trackEvent("form_analisi_submitted");
      window.fbq?.("track", "Lead");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div>
        <h3 className="text-2xl font-semibold text-neutral-900">
          Richiesta ricevuta
        </h3>
        <p className="mt-3 leading-7 text-neutral-600">
          Grazie. Andrea analizzerà personalmente le informazioni
          sull&apos;immobile e ti ricontatterà appena possibile.
        </p>
        <a
          href="https://wa.me/393286824515?text=Buongiorno%20Andrea%2C%20ho%20appena%20inviato%20la%20richiesta%20di%20analisi%20gratuita%20dal%20sito."
          className="mt-6 inline-block rounded-2xl border border-neutral-300 px-6 py-3 text-center text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
        >
          Scrivi anche su WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div>
      <form
        className="space-y-4"
        noValidate
        onSubmit={handleSubmit}
        onFocusCapture={handleFirstInteraction}
      >
        {/* Honeypot: campo nascosto, ignorato dagli utenti reali */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Non compilare questo campo</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700">
            Nome e cognome
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            maxLength={120}
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-sm text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
              Numero di telefono
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={30}
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-sm text-red-600">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="propertyArea" className="block text-sm font-medium text-neutral-700">
            Zona o indirizzo dell&apos;immobile
          </label>
          <input
            id="propertyArea"
            name="propertyArea"
            type="text"
            autoComplete="address-level2"
            maxLength={200}
            value={values.propertyArea}
            onChange={(e) => update("propertyArea", e.target.value)}
            aria-invalid={Boolean(errors.propertyArea)}
            aria-describedby={errors.propertyArea ? "propertyArea-error" : undefined}
            className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
          />
          {errors.propertyArea && (
            <p id="propertyArea-error" className="mt-1.5 text-sm text-red-600">
              {errors.propertyArea}
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-neutral-700">
              Tipologia dell&apos;immobile
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={values.propertyType}
              onChange={(e) => update("propertyType", e.target.value)}
              aria-invalid={Boolean(errors.propertyType)}
              aria-describedby={errors.propertyType ? "propertyType-error" : undefined}
              className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            >
              <option value="">Seleziona...</option>
              {PROPERTY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.propertyType && (
              <p id="propertyType-error" className="mt-1.5 text-sm text-red-600">
                {errors.propertyType}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="propertySize" className="block text-sm font-medium text-neutral-700">
              Metratura approssimativa (mq)
            </label>
            <input
              id="propertySize"
              name="propertySize"
              type="number"
              inputMode="numeric"
              min={8}
              max={2000}
              value={values.propertySize}
              onChange={(e) => update("propertySize", e.target.value)}
              aria-invalid={Boolean(errors.propertySize)}
              aria-describedby={errors.propertySize ? "propertySize-error" : undefined}
              className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            />
            {errors.propertySize && (
              <p id="propertySize-error" className="mt-1.5 text-sm text-red-600">
                {errors.propertySize}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="propertyStatus" className="block text-sm font-medium text-neutral-700">
            Situazione attuale dell&apos;immobile
          </label>
          <select
            id="propertyStatus"
            name="propertyStatus"
            value={values.propertyStatus}
            onChange={(e) => update("propertyStatus", e.target.value)}
            aria-invalid={Boolean(errors.propertyStatus)}
            aria-describedby={errors.propertyStatus ? "propertyStatus-error" : undefined}
            className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
          >
            <option value="">Seleziona...</option>
            {PROPERTY_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.propertyStatus && (
            <p id="propertyStatus-error" className="mt-1.5 text-sm text-red-600">
              {errors.propertyStatus}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="mainGoal" className="block text-sm font-medium text-neutral-700">
            Obiettivo principale{" "}
            <span className="font-normal text-neutral-400">(facoltativo)</span>
          </label>
          <select
            id="mainGoal"
            name="mainGoal"
            value={values.mainGoal}
            onChange={(e) => update("mainGoal", e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
          >
            <option value="">Seleziona...</option>
            {MAIN_GOALS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="additionalInformation"
            className="block text-sm font-medium text-neutral-700"
          >
            Ulteriori informazioni{" "}
            <span className="font-normal text-neutral-400">(facoltativo)</span>
          </label>
          <textarea
            id="additionalInformation"
            name="additionalInformation"
            rows={3}
            maxLength={1000}
            placeholder="Descrivi brevemente l'immobile o ciò che vorresti valutare"
            value={values.additionalInformation}
            onChange={(e) => update("additionalInformation", e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
          />
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm text-neutral-700">
            <input
              type="checkbox"
              name="privacyAccepted"
              checked={values.privacyAccepted}
              onChange={(e) => update("privacyAccepted", e.target.checked)}
              aria-invalid={Boolean(errors.privacyAccepted)}
              aria-describedby={errors.privacyAccepted ? "privacy-error" : undefined}
              className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-neutral-900/20"
            />
            <span>
              Ho letto l&apos;{" "}
              <a href="/privacy" className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                informativa privacy
              </a>{" "}
              e autorizzo il trattamento dei dati esclusivamente per essere
              ricontattato in merito alla richiesta di analisi.
            </span>
          </label>
          {errors.privacyAccepted && (
            <p id="privacy-error" className="mt-1.5 text-sm text-red-600">
              {errors.privacyAccepted}
            </p>
          )}
        </div>

        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            Non è stato possibile inviare la richiesta. Riprova tra qualche
            minuto oppure contatta Andrea su WhatsApp.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-2xl bg-neutral-900 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "submitting" ? "Invio in corso..." : "Richiedi l'analisi gratuita"}
        </button>
      </form>
    </div>
  );
}
