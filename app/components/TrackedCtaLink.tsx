"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const WHATSAPP_EVENTS = new Set(["click_whatsapp", "click_whatsapp_analisi"]);

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
  };
}

export default function TrackedCtaLink({
  href,
  event,
  ctaLocation,
  source,
  className,
  target,
  rel,
  "aria-label": ariaLabel,
  children,
}: {
  href: string;
  event:
    | "click_whatsapp"
    | "click_richiedi_analisi"
    | "click_cta_analisi"
    | "click_whatsapp_analisi";
  ctaLocation: string;
  source?: string;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      onClick={() => {
        window.gtag?.("event", event, {
          cta_location: ctaLocation,
          link_url: href,
          page_location: window.location.href,
          page_path: window.location.pathname,
          source,
          ...getUtmParams(),
        });
        if (WHATSAPP_EVENTS.has(event)) {
          window.fbq?.("track", "Contact");
        }
      }}
    >
      {children}
    </a>
  );
}
