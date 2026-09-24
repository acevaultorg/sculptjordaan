"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

/**
 * Booking-confirmed landing page (EN). See NL companion for spec.
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
export default function BookingConfirmedEN() {
  // What was booked decides the next-step block (2026-09-24). Separate effect on purpose:
  // the conversion effect below returns early on every real booking (analytics.tsx sets
  // __scBookingFired first), so detection inside it would never run.
  // 60d GA4: 125 of 193 confirmations are studio credit bookings, 26 paid studio hours,
  // 26 Open Gym, ~7 free trials. The trainer block fits none of the first three.
  const [kind, setKind] = useState<"studio" | "opengym" | "other">("other");
  useEffect(() => {
    const t = (new URLSearchParams(window.location.search).get("type") ?? "").toLowerCase();
    setKind(t.includes("studio") ? "studio" : t.includes("gym") ? "opengym" : "other");
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type") ?? "generic";
    // %price% arrives as a string ("0", "12", "17.00", possibly "12,00"). 0 is a REAL value
    // (free-trial types) and must never fall back to the €12 default — `|| 12` did exactly
    // that, reporting a phantom €12 on every free booking. Only absent/garbage → default.
    const rawValue = params.get("value");
    const parsedValue =
      rawValue === null ? NaN : Number(rawValue.trim().replace(",", ".").replace(/[^0-9.-]/g, ""));
    const value = Number.isFinite(parsedValue) ? parsedValue : 12;

    type GtagFn = (...args: unknown[]) => void;
    type FbqFn = (...args: unknown[]) => void;
    type TtqObj = { track?: (...args: unknown[]) => void };
    type PlausibleFn = (event: string, options?: { props?: Record<string, unknown> }) => void;

    const w = window as Window & {
      gtag?: GtagFn;
      fbq?: FbqFn;
      ttq?: TtqObj;
      plausible?: PlausibleFn;
    };

    const wExt = w as typeof w & { __scBookingFired?: boolean };
    if (wExt.__scBookingFired) return;
    wExt.__scBookingFired = true;

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
          overline="Confirmed"
          title="Your booking is confirmed"
          description="Thanks — we're looking forward to seeing you at the studio."
        />

        <FadeIn className="mt-8 max-w-2xl">
          <Card className="border-emerald-500/30 bg-emerald-500/5">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-10 w-10 flex-shrink-0 text-emerald-400" />
                <div>
                  <h2 className="text-xl font-bold text-white">What's next?</h2>
                  <ul className="mt-3 space-y-2 text-sm text-white/85">
                    <li>• You'll receive a confirmation email from Acuity with the details.</li>
                    <li>• Door code is sent via WhatsApp the night before your session.</li>
                    <li>• Questions? WhatsApp +31 6 15 14 79 52 — we usually reply within 1 hour.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/en"
              className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition hover:bg-brand/85"
            >
              Back to home
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/en/studio-rental"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/15"
            >
              Book another session
            </Link>
          </div>

          {/* Soft-upsell — added 2026-05-26 lead-cap (task D). See NL
              parallel for rationale + I-23 anti-pattern compliance. */}
          {kind === "other" && (
            <div className="mt-10 rounded-2xl border border-brand/30 bg-brand/5 p-6">
              {/* 2026-09-23 (card mud05ioligxhf8): see the NL twin. The deal and price grid were
                  unbacked; each trainer sets their own packages. */}
              <h3 className="text-xl font-bold text-white">Want to continue afterwards?</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                Every trainer has their own packages and prices. Your trainer shows them after your intro.
                No commitment, you decide afterwards if it fits.
              </p>
              <a
                href="https://wa.me/31615147952?text=Hi%21+I%27d+like+to+know+more+about+the+packages+after+my+intro."
                target="_blank"
                rel="noopener noreferrer"
                data-cta="booking-confirmed-upsell-whatsapp"
                className="plausible-event-name=booking_confirmed_upsell_whatsapp mt-5 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
              >
                WhatsApp your trainer about the package
              </a>
            </div>
          )}
          {kind === "studio" && (
            <div className="mt-10 rounded-2xl border border-brand/30 bg-brand/5 p-6">
              <h3 className="text-xl font-bold text-white">Renting more often? A credit package costs less.</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">A credit package buys studio credit at 10% to 23% off. Your credit is valid for 1 year, handy if you train clients every week.</p>
              <Link
                href="/en/pricing"
                data-cta="booking-confirmed-next-studio"
                className="mt-5 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-brand hover:bg-brand-dark text-brand-foreground font-bold text-sm transition-colors"
              >
                See the credit packages <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}
          {kind === "opengym" && (
            <div className="mt-10 rounded-2xl border border-brand/30 bg-brand/5 p-6">
              <h3 className="text-xl font-bold text-white">Training more often?</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">The Starter plan gives you 4 sessions per 4 weeks for €29. Unlimited is also possible. No contract, cancel anytime.</p>
              <Link
                href="/en/open-gym"
                data-cta="booking-confirmed-next-opengym"
                className="mt-5 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-brand hover:bg-brand-dark text-brand-foreground font-bold text-sm transition-colors"
              >
                See the Open Gym plans <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}

          {/* Anticipation image — see NL parallel comment. Swapped same
              session from portrait studio image (cropped torso-only) to
              landscape-native hero/training-session.jpg (1.91:1) which
              fits the 16:7 banner cleanly. */}
          {/* aspect-[1376/720] = native ratio of homepage-hero.jpg (zero crop). */}
          <div className="mt-10 relative aspect-[1376/720] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/hero/homepage-hero.jpg"
              alt="See you soon — SculptClub private studio interior with brand wall, Rogue power rack, and agility ladder"
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
