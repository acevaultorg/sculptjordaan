import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { HreflangLinks } from "@/components/seo/hreflang";
import { Analytics } from "@/components/layout/analytics";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { MobileBottomCTABar } from "@/components/layout/mobile-bottom-cta-bar";
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
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  generator: "Next.js",
  publisher: siteConfig.name,
  category: "fitness",
  alternates: {
    canonical: "/",
    languages: {
      "nl-NL": "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    alternateLocale: "en_US",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.subtitle.nl}`,
    description: siteConfig.description.nl,
    // Images provided by src/app/opengraph-image.tsx (Next.js file convention)
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.subtitle.nl}`,
    description: siteConfig.description.nl,
    // Images provided by src/app/twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "theme-color": "#FF6B00",
    "msapplication-TileColor": "#FF6B00",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": siteConfig.name,
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
      className={`dark ${syne.variable} ${instrumentSans.variable} h-full antialiased`}
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
        <link rel="preconnect" href="https://plausible.io" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <HreflangLinks />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/*
          Skip-to-main-content link. Tailwind v4's `focus:not-sr-only` did not
          override the `sr-only` clip-path on focus (verified 2026-05-07: even
          with the link focused, clip-path stayed `inset(50%)` and width=1px,
          so keyboard users couldn't see it). Switched to the canonical
          absolute-positioning pattern: link is positioned off-screen above
          the viewport by default and slides into view on focus via `focus:top-4`.
          Standard recipe from web.dev / a11yproject.com — no sr-only utility
          dependency.
        */}
        <a
          href="#main-content"
          className="absolute left-4 -top-[9999px] z-[100] px-4 py-2 bg-brand text-white rounded-lg text-sm font-semibold outline-none focus:top-4 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition-all"
        >
          Skip to main content
        </a>
        <LocalBusinessJsonLd />
        {children}
        <CookieConsent />
        <WhatsAppButton />
        <MobileBottomCTABar />
        <UtmCapture />
        <Analytics />
        <Script
          src="https://funnelpilot.app/fp.js"
          data-site="sculptclub"
          strategy="lazyOnload"
        />
        {/* Cloudflare Web Analytics — cookieless, privacy-first */}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "ad5693a31b8c409e9e653a64937e94e8"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
