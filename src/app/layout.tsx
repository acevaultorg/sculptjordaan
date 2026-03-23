import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { LocalBusinessJsonLd, OrganizationJsonLd } from "@/components/seo/json-ld";
import { Analytics } from "@/components/layout/analytics";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

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
    default: `${siteConfig.name} — ${siteConfig.subtitle.en}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description.en,
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
        <Analytics />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LocalBusinessJsonLd />
        <OrganizationJsonLd />
        {children}
        <CookieConsent />
        <WhatsAppButton />
      </body>
    </html>
  );
}
