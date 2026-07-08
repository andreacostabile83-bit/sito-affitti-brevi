"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function TrackedWhatsAppLink({
  href,
  ctaLocation,
  className,
  children,
}: {
  href: string;
  ctaLocation: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        window.gtag?.("event", "whatsapp_click", {
          cta_location: ctaLocation,
        });
      }}
    >
      {children}
    </a>
  );
}
