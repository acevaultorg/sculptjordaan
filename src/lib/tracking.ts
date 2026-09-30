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

/**
 * Track a pricing/plan tab switch (GA4). Added 2026-07-30: the tab toggles
 * (HomePricingExplorer, RentalTabs, OpenGymPlanTabs) carried only
 * `plausible-event-name=` classes — but Plausible was retired on this site
 * 2026-07-20, so tab clicks were tracked by NOTHING. GA4 is the live channel.
 */
export function trackTabSwitch(surface: string, tab: string) {
  sendEvent("tab_switch", { surface, tab });
}

/**
 * Track header-navigation clicks (GA4). Added 2026-08-28: the four category
 * tiles (Small Group · Open Gym · Personal Training · Huur Studio) and the
 * "Mijn boekingen" icon/panel carried NO events at all — the operator's
 * "how often is each tile clicked?" question could only be answered by
 * hand-reading Clarity heatmaps (measured that day: 30/11/11/6 clicks per
 * tile per 30d, homepage only). This makes the answer a GA4 report instead.
 * surface: "header_tiles" | "bookings_icon" | "bookings_panel"
 */
export function trackNavClick(surface: string, label: string, locale: string) {
  sendEvent("nav_click", { surface, label, locale });
}

/**
 * Track a feedback form submission (GA4). Added 2026-09-21 with /feedback.
 * Plain GA4 event on purpose: it is NOT a lead and must never be wired to the
 * Google Ads "conversion" / generate_lead events (EUR 45 each).
 * audience: "client" | "renter"
 */
export function trackFeedbackSubmit(audience: string, locale: string) {
  sendEvent("feedback_submit", { audience, locale });
}

/**
 * Track a click on the /landing split page (GA4). Added 2026-09-30. One event
 * per half so the audience split is a plain event count in GA4:
 *   landing_trainer_click — the studio-rental half (personal trainers)
 *   landing_client_click  — the find-a-trainer / class / open gym half
 * Params are the link target and locale only, never anything about the visitor.
 * Deliberately NOT a lead or conversion event: every link on the page is
 * internal, so the global Acuity/WhatsApp conversion listener never fires here.
 */
export function trackLandingClick(
  side: "trainer" | "client",
  target: string,
  locale: string,
) {
  sendEvent(side === "trainer" ? "landing_trainer_click" : "landing_client_click", {
    link_target: target,
    locale,
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

  // Open Gym Onbeperkt Zomerdeal (€49, product created 2026-07-16). Without
  // this mapping every "Word lid" click on the PRIMARY Open Gym conversion
  // button logged as bookingType "generic" — found 2026-07-30.
  if (url.includes("id=2247082")) return { bookingType: "open_gym", planName: "onbeperkt_zomerdeal" };

  // Studio rental packages — new ids from the 2026-07-18 repricing FIRST,
  // old ids kept below for cached pages that still link them.
  if (url.includes("id=2247124")) return { bookingType: "studio_pack", planName: "routine" };
  if (url.includes("id=2248025")) return { bookingType: "studio_pack", planName: "pro" };
  if (url.includes("id=2248026")) return { bookingType: "studio_pack", planName: "volume" };
  if (url.includes("id=2149357")) return { bookingType: "studio_pack", planName: "starter" };
  if (url.includes("id=2149358")) return { bookingType: "studio_pack", planName: "routine" };
  if (url.includes("id=2149359")) return { bookingType: "studio_pack", planName: "pro" };
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
