"use client";

import { useEffect } from "react";
import Script from "next/script";
import { siteConfig } from "@/config/site";

interface AcuityEmbedProps {
  /**
   * Acuity scheduling URL — the same URL that would otherwise be opened
   * in a new tab. Acuity supports the same URLs in iframe mode.
   *
   * Use ONLY for FREE bookings (gratis intake / free intro / proefsessie).
   * For PAID bookings (open-gym packs, studio rental sessions, paid PT),
   * keep `target="_blank"` to a full Acuity URL — Apple Pay's PaymentRequest
   * API does not work inside iframes.
   */
  url: string;
  title?: string;
  /** Initial height in px. Acuity's embed.js auto-adjusts as user navigates. */
  height?: number;
  className?: string;
  /**
   * intent prop sent with the postMessage-driven `Lead Generated` event.
   * Must match the event-taxonomy values from `docs/ANALYTICS.md`:
   *   'trainer' · 'studio_rental' · 'open_gym' · 'generic'
   * The component DOES auto-detect intent from pathname when this is not
   * provided (studio-huren/rental → 'studio_rental', open-gym → 'open_gym',
   * gratis-intake/free-intro → 'trainer', else 'generic'), but explicit beats
   * implicit on conversion-tracked surfaces.
   */
  intent?: "trainer" | "studio_rental" | "open_gym" | "generic";
  /**
   * pricing prop sent with conversion event. AcuityEmbed should only be used
   * for FREE bookings (per the warning above) so default is 'free'. Override
   * only if you knowingly embed a paid Acuity URL despite the Apple Pay
   * caveat (don't).
   */
  pricing?: "free" | "paid" | "unknown";
}

// Auto-detect intent from the current pathname when caller didn't pass one.
// Matches the WA pickMessage() heuristic in whatsapp-button.tsx so analytics
// taxonomy stays consistent across the funnel.
function detectIntentFromPath(path: string): "trainer" | "studio_rental" | "open_gym" | "generic" {
  if (/\/(studio-huren|studio-rental)(\/|$)/.test(path)) return "studio_rental";
  if (/\/(open-gym|book-gym|boek-gym)(\/|$)/.test(path)) return "open_gym";
  if (/\/(gratis-intake|free-intro|vind-jouw-personal-trainer|find-personal-trainer|eerste-bezoek|first-visit)(\/|$)/.test(path)) return "trainer";
  return "generic";
}

/**
 * Embed an Acuity scheduling widget directly on the page so visitors don't
 * leave sculptclub.nl during the booking flow. Loads Acuity's official
 * embed.js to auto-resize the iframe as content changes (e.g., service
 * picker → time slot picker → confirmation).
 *
 * Live verified 2026-05-06: replaces the previous pattern where free-intake
 * CTAs opened https://app.acuityscheduling.com/schedule.php?owner=...
 * in a new tab — that pattern caused 65% bounce on /nl/gratis-intake
 * (Plausible counted outbound-link clicks as bounces + visitors had to
 * navigate Acuity's master schedule to find the free option).
 *
 * Tracking integration (2026-05-19 closed the gap that was a TODO since
 * 2026-05-06): a window-level `message` listener watches for Acuity's
 * iframe `postMessage` payload. Acuity sends multiple message shapes —
 * the listener accepts any of:
 *   - data === 'appointment-scheduled'                  (string form)
 *   - data.type === 'appointment-scheduled'             (typed-object form)
 *   - data.event matching /confirmed|complete|booked/i  (legacy forms)
 *   - data.action matching same                          (alt key)
 *   - origin verified to acuityscheduling.com OR squareup.com (Acuity's
 *     parent Squarespace/Square uses both depending on which embed CDN
 *     served the iframe)
 * On any match it fires:
 *   - Plausible 'Lead Generated' with method='acuity_embed_complete' so
 *     this conversion path is finally distinguishable from clicks-only
 *     in the Goals + Properties breakdown
 *   - gtag 'conversion' with the lead-form label so Google Ads sees the
 *     booking completion (was previously lost — Ads optimised on partial
 *     funnel data)
 *   - Meta Pixel 'Lead' so Meta retargeting audiences include completed
 *     intakes
 *
 * Why we cast event-data shapes loosely (try-catch around the whole
 * handler) rather than parsing strictly: Acuity has changed message
 * payload formats at least twice in 2024–2026 per their changelog +
 * Stack Overflow reports. A permissive matcher beats a brittle parser
 * that silently breaks the day Acuity ships a new schema.
 */
export function AcuityEmbed({
  url,
  title = "Schedule your appointment",
  height = 800,
  className,
  intent,
  pricing = "free",
}: AcuityEmbedProps) {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      try {
        // Verify origin — Acuity iframes serve from a few well-known hosts
        if (
          !e.origin.includes("acuityscheduling.com") &&
          !e.origin.includes("squareup.com") &&
          !e.origin.includes("squarespace.com")
        ) return;

        // Acuity's payload shapes seen in the wild:
        //   "appointment-scheduled"  (raw string)
        //   { type: "appointment-scheduled", ... }
        //   { event: "booking_complete", ... }
        //   { action: "appointmentConfirmed", ... }
        const d: unknown = e.data;
        const dStr = typeof d === "string" ? d : "";
        const dObj = (typeof d === "object" && d !== null) ? (d as Record<string, unknown>) : {};
        const candidates = [
          dStr,
          typeof dObj.type === "string" ? dObj.type : "",
          typeof dObj.event === "string" ? dObj.event : "",
          typeof dObj.action === "string" ? dObj.action : "",
        ].join(" ");

        if (!/appointment[\-_]?(scheduled|confirmed|booked|complete)|booking[\-_]?complete/i.test(candidates)) return;

        // Fire conversion events on the parent page
        const path = typeof window !== "undefined" ? window.location.pathname : "";
        const resolvedIntent = intent || detectIntentFromPath(path);
        const value = 45; // matches the analytics.tsx WhatsApp + Acuity-click pattern (€45 lead value)

        // 1) Plausible — distinguishable method tag so Properties breakdown can split this funnel out
        const plausible = (window as unknown as { plausible?: (e: string, o?: { props: Record<string, unknown> }) => void }).plausible;
        if (typeof plausible === "function") {
          plausible("Lead Generated", {
            props: {
              method: "acuity_embed_complete",
              intent: resolvedIntent,
              pricing,
              value,
              source_page: path,
            },
          });
        }

        // 2) Google Ads conversion — use the lead-form label (matches the prior pattern
        //    for WhatsApp + free-intake clicks; €45 lead value, EUR currency)
        const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
        if (typeof gtag === "function" && siteConfig.analytics.googleAds && siteConfig.analytics.googleAdsConversion) {
          gtag("event", "conversion", {
            send_to: `${siteConfig.analytics.googleAds}/${siteConfig.analytics.googleAdsConversion}`,
            value,
            currency: "EUR",
          });
        }

        // 3) Meta Pixel — Lead event for retargeting + audiences
        const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
        if (typeof fbq === "function") {
          fbq("track", "Lead", { value, currency: "EUR", content_name: "acuity_embed_complete" });
        }
      } catch {
        // never let analytics block UX — silent fail is the right discipline
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [intent, pricing]);

  return (
    <div className={className}>
      <iframe
        src={url}
        title={title}
        width="100%"
        height={height}
        frameBorder="0"
        loading="lazy"
        style={{ minHeight: 600, border: 0 }}
      />
      <Script
        src="https://embed.acuityscheduling.com/js/embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
