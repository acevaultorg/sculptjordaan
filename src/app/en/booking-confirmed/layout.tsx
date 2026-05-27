import type { Metadata } from "next";

/**
 * Server-component layout pair for the client-rendered booking-confirmed
 * page. Carries metadata (canonical + noindex + alternates) since
 * "use client" pages can't `export const metadata`.
 *
 * See sibling NL layout.tsx for full rationale.
 */
export const metadata: Metadata = {
  title: { absolute: "Booking confirmed — SculptClub" },
  description:
    "Your booking is confirmed. You'll receive a confirmation email with all details within 5 minutes for your visit to SculptClub Amsterdam Jordaan.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/en/booking-confirmed",
    languages: {
      nl: "/nl/boeking-bevestigd",
      en: "/en/booking-confirmed",
    },
  },
  openGraph: {
    title: "Booking confirmed — SculptClub",
    description:
      "Your booking is confirmed. Confirmation email follows within 5 minutes.",
    url: "/en/booking-confirmed",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "SculptClub private personal training studio in Amsterdam Jordaan",
      },
    ],
  },
};

export default function BookingConfirmedENLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
