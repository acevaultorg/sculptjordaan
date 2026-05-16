import type { Metadata } from "next";

/**
 * Booking-confirmed pages are transactional success surfaces. See companion
 * NL layout for full rationale — kept out of search index because conversion
 * events fire on every pageview, and search visitors who land here without
 * actually booking would fire spurious conversions + corrupt dashboards.
 */
export const metadata: Metadata = {
  title: "Confirmed — SculptClub",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: undefined },
};

export default function BookingConfirmedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
