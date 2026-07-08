"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function TrackedCtaLink({
  href,
  event,
  ctaLocation,
  className,
  target,
  rel,
  "aria-label": ariaLabel,
  children,
}: {
  href: string;
  event: "click_whatsapp" | "click_richiedi_analisi";
  ctaLocation: string;
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
        });
      }}
    >
      {children}
    </a>
  );
}
