/**
 * GA4 event tracking utilities for SculptClub.
 *
 * Fires events via window.gtag when available (Google Analytics 4).
 * Gracefully does nothing if gtag is not loaded.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire a GA4 event if gtag is available */
function sendEvent(eventName: string, params: Record<string, string | undefined>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

/**
 * Track a booking link click (Acuity Scheduling).
 *
 * @param bookingType - e.g. "open_gym", "intake", "studio", "generic"
 * @param planName   - optional plan name like "populair", "starter"
 */
export function trackBeginBooking(
  bookingType: string,
  planName?: string,
) {
  sendEvent("begin_booking", {
    booking_type: bookingType,
    plan_name: planName,
    ...getUtmParams(),
  });
}

/** Track hero CTA clicks to measure conversion by position */
export function trackHeroClick(label: string, position: number, locale: string) {
  sendEvent("hero_cta_click", {
    cta_label: label,
    cta_position: String(position),
    locale,
  });
}

/**
 * Capture UTM parameters from the URL on first visit and persist in sessionStorage.
 * Call this once on app mount (e.g., in layout or analytics component).
 */
export function captureUtmParams() {
  if (typeof window === "undefined") return;
  // Only capture once per session — don't overwrite if already set
  if (sessionStorage.getItem("utm_source")) return;

  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;
  for (const key of utmKeys) {
    const val = params.get(key);
    if (val) sessionStorage.setItem(key, val);
  }
}

/** Read persisted UTM params from sessionStorage */
function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const result: Record<string, string> = {};
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
  for (const key of keys) {
    const val = sessionStorage.getItem(key);
    if (val) result[key] = val;
  }
  return result;
}

/** Returns true if a URL points to Acuity Scheduling */
export function isAcuityUrl(url: string): boolean {
  return url.includes("acuityscheduling.com");
}

/**
 * Detect booking type from an Acuity URL based on known appointment/catalog IDs.
 * Falls back to "generic" if unknown.
 */
export function detectBookingType(url: string): { bookingType: string; planName?: string } {
  // Open Gym plans (catalog)
  if (url.includes("id=2155887")) return { bookingType: "open_gym", planName: "instapplan" };
  if (url.includes("id=2155888")) return { bookingType: "open_gym", planName: "populair" };
  if (url.includes("id=2155889")) return { bookingType: "open_gym", planName: "intensief" };
  if (url.includes("id=2155890")) return { bookingType: "open_gym", planName: "onbeperkt" };

  // Open Gym duo plans
  if (url.includes("id=2160074")) return { bookingType: "open_gym_duo", planName: "once" };
  if (url.includes("id=2160077")) return { bookingType: "open_gym_duo", planName: "twice" };

  // Studio rental packages
  if (url.includes("id=2149357")) return { bookingType: "studio_pack", planName: "starter" };
  if (url.includes("id=2149358")) return { bookingType: "studio_pack", planName: "routine" };
  if (url.includes("id=2149360")) return { bookingType: "studio_pack", planName: "volume" };

  // Studio rental single sessions
  if (url.includes("appointmentType=84032351")) return { bookingType: "studio", planName: "half_60" };
  if (url.includes("appointmentType=86677323")) return { bookingType: "studio", planName: "half_90" };
  if (url.includes("appointmentType=82553655")) return { bookingType: "studio", planName: "full_60" };
  if (url.includes("appointmentType=85410115")) return { bookingType: "studio", planName: "full_90" };

  // Open Gym booking
  if (url.includes("appointmentType=83513953")) return { bookingType: "open_gym", planName: "session" };

  // Trials
  if (url.includes("appointmentType=87017445")) return { bookingType: "open_gym", planName: "trial" };
  if (url.includes("appointmentType=86758291")) return { bookingType: "studio", planName: "trial" };

  // Generic / intake
  if (url.includes("schedule.php") && !url.includes("appointmentType")) {
    return { bookingType: "intake" };
  }

  return { bookingType: "generic" };
}
