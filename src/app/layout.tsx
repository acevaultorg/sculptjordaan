import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { LocalBusinessJsonLd, OrganizationJsonLd } from "@/components/seo/json-ld";
import { Analytics } from "@/components/layout/analytics";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { UtmCapture } from "@/components/layout/utm-capture";

const syne = localFont({
  src: [
    {
      path: "../../public/fonts/Syne-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

const instrumentSans = localFont({
  src: [
    {
      path: "../../public/fonts/InstrumentSans-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.subtitle.nl}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description.nl,
  openGraph: {
    type: "website",
    locale: "nl_NL",
    alternateLocale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "SculptClub — Boutique Personal Training Amsterdam Jordaan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#134DE1",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${syne.variable} ${instrumentSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang=location.pathname.startsWith("/en")?"en":"nl"`,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.google.com" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <LocalBusinessJsonLd />
        <OrganizationJsonLd />
        {children}
        <CookieConsent />
        <WhatsAppButton />
        <MobileStickyCta />
        <UtmCapture />
        <Analytics />
        <Script
          src="https://funnelpilot.app/fp.js"
          data-site="sculptclub"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
