"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
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
 *   ?value=12  (EUR amount)
 *   ?id=84032351 (Acuity appointmentType — optional)
 *
 * See companion EN page at /en/booking-confirmed.
 */
export default function BookingConfirmedNL() {
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
    const value = Number(params.get("value") ?? "12") || 12;

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
          send_to: `${siteConfig.analytics.googleAds}/${siteConfig.analytics.googleAdsConversion}`,
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

  return (
    <PageLayout>
      <Section className="pt-32">
        <SectionHeader
          as="h1"
          overline="Bevestigd"
          title="Je boeking is bevestigd"
          description="Bedankt — we kijken ernaar uit je te zien in de studio."
        />

        <FadeIn className="mt-8 max-w-2xl">
          <Card className="border-emerald-500/30 bg-emerald-500/5">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-10 w-10 flex-shrink-0 text-emerald-400" />
                <div>
                  <h2 className="text-xl font-bold text-white">Wat nu?</h2>
                  <ul className="mt-3 space-y-2 text-sm text-white/85">
                    <li>• Je krijgt een bevestigingsmail van Acuity met de details.</li>
                    <li>• De deurcode sturen we de avond ervoor via WhatsApp.</li>
                    <li>• Vragen? App naar +31 6 83 17 89 34 — meestal reageren we binnen 1 uur.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/nl"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand/85"
            >
              Terug naar home →
            </Link>
            <Link
              href="/nl/studio-huren"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/15"
            >
              Nog een sessie boeken
            </Link>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
