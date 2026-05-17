import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AC Domus Affitti - Gestione affitti brevi Roma",
  description:
    "Gestione professionale affitti brevi a Roma. Aumenta il rendimento del tuo immobile con strategie concrete e senza improvvisazione.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        {/* Verifica Google */}
        <meta
          name="google-site-verification"
          content="JkOV-tYW9AwJe71ayd3rqVmyrpcY3SAb2YCv1uAJKwM"
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YFKGHC9V3R"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YFKGHC9V3R');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}