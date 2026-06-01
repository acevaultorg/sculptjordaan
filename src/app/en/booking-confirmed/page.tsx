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
 * Booking-confirmed landing page (EN). See NL companion for spec.
 */
export default function BookingConfirmedEN() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type") ?? "generic";
    const value = Number(params.get("value") ?? "12") || 12;

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
          <div className="mt-10 rounded-2xl border border-brand/30 bg-brand/5 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-2 py-0.5 rounded-full bg-brand text-brand-foreground text-[10px] font-bold uppercase tracking-wider">
                First-package deal
              </span>
              <span className="text-xs text-white/60">within 7 days of your intro</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Save 10% on your first package
            </h3>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">
              If you book a package with your trainer within 7 days of your intro,
              you get 10% off your first package. No pressure — just a thank-you
              if you decide to continue.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { name: "Starter", sessions: 4, price: 179, original: 199, perSession: 44.75 },
                { name: "Routine", sessions: 8, price: 319, original: 359, perSession: 39.88 },
                { name: "Pro", sessions: 12, price: 449, original: 499, perSession: 37.42 },
              ].map((pkg, i) => (
                <div
                  key={pkg.name}
                  className={`rounded-xl border ${i === 1 ? "border-brand bg-brand/10" : "border-white/10 bg-white/5"} p-4 text-left`}
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">{pkg.name}</p>
                  <p className="mt-1 text-2xl font-bold text-white">€{pkg.price}</p>
                  <p className="text-xs text-white/60 line-through">was €{pkg.original}</p>
                  <p className="mt-2 text-xs text-white/75">
                    {pkg.sessions} sessions · €{pkg.perSession.toFixed(2)}/session
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-white/60 leading-relaxed">
              No commitment at your intro — you decide afterwards if it fits.
              The deal is a thank-you, not a contract.
            </p>

            <a
              href="https://wa.me/31615147952?text=Hi%21+I%27d+like+to+know+more+about+the+10%25+package+deal+after+my+intro."
              target="_blank"
              rel="noopener noreferrer"
              data-cta="booking-confirmed-upsell-whatsapp"
              className="plausible-event-name=booking_confirmed_upsell_whatsapp mt-5 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
            >
              WhatsApp your trainer about the package
            </a>
          </div>

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
