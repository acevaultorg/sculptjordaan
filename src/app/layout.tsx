import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { HreflangLinks } from "@/components/seo/hreflang";
import { Analytics } from "@/components/layout/analytics";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { LanguageHint } from "@/components/layout/language-hint";
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
  // Brand icons — refreshed 2026-05-17 (rev 2 — Google-favicon-compliant).
  // SVG primary = scalable single bold "S" on orange #EF5012 (renders crisp
  // at any size; modern browsers prefer this).
  // 48px PNG = Google Search's preferred favicon spec (renders at ~20px
  // circle-clipped in search results; bold S stays legible).
  // Multi-resolution chain: 48 → 96 → 192 → 512 for browser/device variants.
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.png", type: "image/png", sizes: "256x256" },
      { url: "/images/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/images/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
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
    "theme-color": "#EF5012",
    "msapplication-TileColor": "#EF5012",
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
      className={`${syne.variable} ${instrumentSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Both palettes live in globals.css (:root = light, .dark = dark) and
            share token names, so token-based components adapt automatically.
            This blocking script runs before first paint: it sets the theme from
            the visitor's OS preference (automatic light/dark) with zero flash,
            and keeps it in sync if they change the system theme live. Falls back
            to dark (brand default) if matchMedia is unavailable. */}
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=matchMedia("(prefers-color-scheme: dark)");var a=function(d){document.documentElement.classList.toggle("dark",d)};a(m.matches);m.addEventListener("change",function(e){a(e.matches)})}catch(e){document.documentElement.classList.add("dark")}})();document.documentElement.lang=location.pathname.startsWith("/en")?"en":"nl"`,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* plausible.io preconnect REMOVED 2026-07-20 — Plausible was retired
            2026-07-04 and its script loader is gone from analytics.tsx, but this
            preconnect survived and was still opening a full TCP+TLS handshake to
            plausible.io on every single page load, for a service that never
            loads. Pure waste on every visit. (Verified: no plausible.io/js in
            the built output.) */}
        {/* dns-prefetch (DNS only — no connection, no request, no data to Meta)
            is kept: the pixel is consent-gated in analytics.tsx, so this just
            shaves the lookup for visitors who DO accept. */}
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <HreflangLinks />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Google Tag Manager (noscript) — must be immediately after <body>.
            JS GTM loader lives in <Analytics />. Container: GTM-PG592B5Q. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.analytics.gtm}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
          className="absolute left-4 -top-[9999px] z-[100] px-4 py-2 bg-brand text-brand-foreground rounded-lg text-sm font-semibold outline-none focus:top-4 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition-all"
        >
          Skip to main content
        </a>
        <LocalBusinessJsonLd />
        {children}
        <LanguageHint />
        <CookieConsent />
        <WhatsAppButton />
        <MobileBottomCTABar />
        <UtmCapture />
        <Analytics />
        {/* FunnelPilot — DISABLED 2026-07-20. funnelpilot.app has our Cloudflare
            nameservers but no A record, so this script failed with
            ERR_NAME_NOT_RESOLVED on every page load and tracked nothing. The
            FunnelPilot product (VAULT-Fleet/cro/funnelpilot) is archived +
            undeployed. Kept (not deleted) as a placeholder — re-enable the day
            FunnelPilot ships by uncommenting + confirming funnelpilot.app
            resolves.
        <Script
          src="https://funnelpilot.app/fp.js"
          data-site="sculptclub"
          strategy="lazyOnload"
        />
        */}
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
