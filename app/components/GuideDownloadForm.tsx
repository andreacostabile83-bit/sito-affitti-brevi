"use client";

import { useState } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function trackEvent(name: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, {
    page_path: window.location.pathname,
    source: "homepage-ebook",
  });
}

export default function GuideDownloadForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (website.trim()) {
      // Honeypot compilato: comportamento silenzioso, nessun invio reale.
      setStatus("success");
      return;
    }

    if (!EMAIL_RE.test(email.trim())) {
      setError("Inserisci un indirizzo email valido.");
      return;
    }
    setError(null);
    setStatus("submitting");

    try {
      const res = await fetch("/api/guide-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), website }),
      });

      if (!res.ok) {
        throw new Error("request_failed");
      }

      setStatus("success");
      trackEvent("download_guida_gratuita");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col justify-center rounded-2xl border border-neutral-200 bg-white p-6">
        <h3 className="text-xl font-semibold text-neutral-900">Guida inviata</h3>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          Controlla la tua email: ti abbiamo inviato la guida gratuita in allegato.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex h-full flex-col justify-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6"
      noValidate
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-semibold text-neutral-900">Scarica gratis l&apos;ebook</h3>
      <p className="text-sm leading-6 text-neutral-600">
        &quot;Come Guadagnare di Più con gli Affitti Brevi&quot; — il metodo pratico per
        trasformare il tuo immobile in una rendita superiore. Gratis, subito.
      </p>

      {/* Honeypot: campo nascosto, ignorato dagli utenti reali */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="guide-website">Non compilare questo campo</label>
        <input
          id="guide-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="guide-email" className="block text-sm font-medium text-neutral-700">
          Email
        </label>
        <input
          id="guide-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          placeholder="La tua email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "guide-email-error" : undefined}
          className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
        />
        {error && (
          <p id="guide-email-error" className="mt-1.5 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Non è stato possibile inviare la guida. Riprova tra qualche minuto.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-2xl bg-neutral-900 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Invio in corso..." : "Scarica la guida gratis"}
      </button>
    </form>
  );
}
