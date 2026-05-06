"use client";

import Script from "next/script";

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
 * Tracking integration: Acuity's iframe fires postMessage events when a
 * booking is confirmed; the analytics.tsx outbound-link handler does NOT
 * catch these because they're not link clicks. Future enhancement: listen
 * for Acuity's postMessage('appointment-scheduled', ...) and fire Plausible
 * 'Lead Generated' + gtag conversion events from there.
 */
export function AcuityEmbed({
  url,
  title = "Schedule your appointment",
  height = 800,
  className,
}: AcuityEmbedProps) {
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
