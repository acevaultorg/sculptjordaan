import type { Metadata } from "next";

/**
 * Booking-confirmed pages are transactional success surfaces. They fire
 * conversion events (Google Ads / Meta / TikTok / GA4 / Plausible) on every
 * pageview, so we MUST keep search engines out — otherwise:
 *  - Googlebot crawls fire spurious conversions
 *  - Random search visitors land on a "Your booking is confirmed" page they
 *    never actually completed, fire conversion, then confuse the dashboards
 *  - Acuity URL params (?type=, ?value=, ?id=) leak into search results
 */
export const metadata: Metadata = {
  title: "Bevestigd — SculptClub",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: undefined },
};

export default function BoekingBevestigdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
