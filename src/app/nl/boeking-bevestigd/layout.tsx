import type { Metadata } from "next";

/**
 * Server-component layout pair for the client-rendered booking-confirmed
 * page. Carries metadata (canonical + noindex + alternates) since
 * "use client" pages can't `export const metadata`.
 *
 * Created 2026-05-27 after page-content audit found no-canonical on
 * /nl/boeking-bevestigd and /en/booking-confirmed.
 *
 * The page is post-conversion → robots noindex (no SEO value in indexing;
 * also prevents leaking ?type=… ?value=… URL params into Google index).
 * Canonical still declared so any accidental share goes to the clean URL.
 */
export const metadata: Metadata = {
  title: { absolute: "Boeking bevestigd — SculptClub" },
  description:
    "Je boeking is bevestigd. Je ontvangt binnen 5 minuten een bevestigingsmail met alle details voor je bezoek aan SculptClub Amsterdam Jordaan.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/nl/boeking-bevestigd",
    languages: {
      nl: "/nl/boeking-bevestigd",
      en: "/en/booking-confirmed",
    },
  },
  openGraph: {
    title: "Boeking bevestigd — SculptClub",
    description:
      "Je boeking is bevestigd. Bevestigingsmail volgt binnen 5 minuten.",
    url: "/nl/boeking-bevestigd",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "SculptClub privé personal training studio in Amsterdam Jordaan",
      },
    ],
  },
};

export default function BookingConfirmedNLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
