"use client";

import { useEffect } from "react";
import { BookingConfirmedBody } from "@/components/marketing/booking-confirmed-body";
import { siteConfig } from "@/config/site";

/**
 * Booking-confirmed landing page (NL).
 *
 * Fires guaranteed conversion events for visitors who actually completed a
 * booking. Operator configures Acuity Scheduling -> Customizers -> Confirmation
 * redirect to send users here after Acuity records the appointment. This is
 * the cleanest signal Google Ads / Meta / TikTok can attribute against, since
 * the page only loads when a real booking was placed.
 *
 * URL params (set by Acuity Custom URL redirect):
 *   ?type=studio_rental|open_gym|trainer|generic
 *   ?value=12  (EUR amount; 0 for free-trial types — passed through, not defaulted)
 *   ?id=84032351 (Acuity appointmentType — optional)
 *
 * See companion EN page at /en/booking-confirmed.
 */
/**
 * ⚠️ THIS useEffect IS NOT THE LIVE CONVERSION PATH.
 * The conversion that actually fires is the server-rendered inline script
 * `booking-confirmed-conversion` in src/components/layout/analytics.tsx — it runs
 * during hydration, BEFORE this effect, and sets the shared window.__scBookingFired
 * flag, so this block returns early on every real booking. A value/attribution fix
 * applied here alone changes NOTHING in production: measured 2026-09-12, the 09-05
 * `value=0` fix landed here and in the served chunk, yet GA4 kept reporting EUR 12
 * for 59 value=0 bookings because analytics.tsx still had `|| 12`.
 * Fix BOTH, and verify in GA4 (eventValue on `purchase` by URL), not in the bundle.
 */
export default function BookingConfirmedNL() {
  // Visible page: src/components/marketing/booking-confirmed-body.tsx (presentation only).
  useEffect(() => {
    if (typeof window === "undefined") return;

    type GtagFn = (...args: unknown[]) => void;
    type FbqFn = (...args: unknown[]) => void;
    type TtqObj = { track?: (...args: unknown[]) => void };
    type PlausibleFn = (event: string, options?: { props?: Record<string, unknown> }) => void;

    const w = window as Window & {
      gtag?: GtagFn;
      fbq?: FbqFn;
      ttq?: TtqObj;
      plausible?: PlausibleFn;
      __scBookingFired?: boolean;
    };

    if (w.__scBookingFired) return; // guard against StrictMode double-mount
    w.__scBookingFired = true;

    const params = new URLSearchParams(window.location.search);
    const type = params.get("type") ?? "generic";
    // %price% arrives as a string ("0", "12", "17.00", possibly "12,00"). 0 is a REAL value
    // (free-trial types) and must never fall back to the €12 default — `|| 12` did exactly
    // that, reporting a phantom €12 on every free booking. Only absent/garbage → default.
    const rawValue = params.get("value");
    const parsedValue =
      rawValue === null ? NaN : Number(rawValue.trim().replace(",", ".").replace(/[^0-9.-]/g, ""));
    const value = Number.isFinite(parsedValue) ? parsedValue : 12;

    // Retry until tag libs are loaded (gtag.js loads afterInteractive — useEffect
    // can run before that completes, causing the original implementation to silently
    // skip every event when typeof w.gtag was still 'undefined' on first render).
    const fire = (attempt = 0) => {
      const ready =
        typeof w.gtag === "function" &&
        typeof w.fbq === "function" &&
        w.ttq &&
        typeof w.ttq.track === "function" &&
        typeof w.plausible === "function";

      if (!ready && attempt < 30) {
        setTimeout(() => fire(attempt + 1), 200);
        return;
      }

      // Google Ads — high-confidence conversion (booking actually completed)
      if (typeof w.gtag === "function") {
        w.gtag("event", "conversion", {
          send_to: `${siteConfig.analytics.googleAds}/${siteConfig.analytics.googleAdsConversionPurchase}`,
          value,
          currency: "EUR",
          transaction_id: params.get("id") ?? `bk-${Date.now()}`,
        });
        w.gtag("event", "Book_appointment_1", {
          value,
          currency: "EUR",
          booking_type: type,
          completion: true,
        });
        w.gtag("event", "purchase", {
          transaction_id: params.get("id") ?? `bk-${Date.now()}`,
          value,
          currency: "EUR",
          items: [{ item_name: type, price: value, quantity: 1 }],
        });
      }
      if (typeof w.fbq === "function") {
        w.fbq("track", "Purchase", { value, currency: "EUR", content_name: type });
      }
      if (w.ttq && typeof w.ttq.track === "function") {
        w.ttq.track("CompletePayment", { value, currency: "EUR", content_type: type });
      }
      if (typeof w.plausible === "function") {
        w.plausible("Booking Confirmed", {
          props: {
            booking_type: type,
            value,
            source: document.referrer || "direct",
          },
        });
      }
    };

    fire();
  }, []);

  return <BookingConfirmedBody locale="nl" />;
}
