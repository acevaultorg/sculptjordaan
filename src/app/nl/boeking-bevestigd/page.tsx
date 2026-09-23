"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
                    <li>• Vragen? App naar +31 6 15 14 79 52 — meestal reageren we binnen 1 uur.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition hover:bg-brand/85"
            >
              Terug naar home
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/nl/studio-huren"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/15"
            >
              Nog een sessie boeken
            </Link>
          </div>

          {/* Soft-upsell — added 2026-05-26 lead-cap (task D). Visitor just
              took an action (booking) = high-commitment moment. Industry
              benchmark: post-booking upsell lifts first-paid-session
              conversion +15-25%. Anti-pattern compliance per I-23: NO
              countdown timer, NO "expires in X hours", just realistic
              "binnen 7 dagen" framing (post-intake decision window).
              Discount is operator-honoured (no enforcement code-side). */}
          <div className="mt-10 rounded-2xl border border-brand/30 bg-brand/5 p-6">
            {/* 2026-09-23 (card mud05ioligxhf8): the "10% on your first package" deal and the
                €179/€319/€449 grid existed nowhere in config and no trainer had agreed to them;
                each trainer sets their own packages. Honest version: no prices, no discount claim. */}
            <h3 className="text-xl font-bold text-white">Wil je daarna verder?</h3>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">
              Elke trainer heeft eigen pakketten en prijzen. Je trainer laat ze zien na je intake.
              Geen verplichting, je beslist daarna of het past.
            </p>
            <a
              href="https://wa.me/31615147952?text=Hoi%21+Ik+wil+graag+meer+weten+over+de+pakketten+na+m%27n+intake."
              target="_blank"
              rel="noopener noreferrer"
              data-cta="boeking-bevestigd-upsell-whatsapp"
              className="plausible-event-name=booking_confirmed_upsell_whatsapp mt-5 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
            >
              WhatsApp je trainer over het pakket
            </a>
          </div>

          {/* Anticipation image — added 2026-05-16. Swapped same session
              from portrait studio/training-dumbbells-smile.jpg (cropped
              torso-only, head cut off — operator screenshot 13:00) to
              landscape-native hero/training-session.jpg (1376×720, ~1.91:1)
              which fits the 16:7 banner without bad cropping. Footer
              position keeps the "What's next?" Card + CTAs above-fold;
              image rewards scroll + anchors the studio visually between
              booking and visit (no-show rate reduction). */}
          {/* aspect-[1376/720] matches homepage-hero.jpg native ratio
              (1.911:1) — zero crop, zero perceived distortion. */}
          <div className="mt-10 relative aspect-[1376/720] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/hero/homepage-hero.jpg"
              alt="Tot snel — SculptClub privé studio interieur met merkmuur, Rogue power rack en agility ladder"
              fill
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
