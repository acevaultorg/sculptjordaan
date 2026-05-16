"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
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
                    <li>• Questions? WhatsApp +31 6 83 17 89 34 — we usually reply within 1 hour.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/en"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand/85"
            >
              Back to home →
            </Link>
            <Link
              href="/en/studio-rental"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/15"
            >
              Book another session
            </Link>
          </div>

          {/* Anticipation image — see NL parallel comment. Swapped same
              session from portrait studio image (cropped torso-only) to
              landscape-native hero/training-session.jpg (1.91:1) which
              fits the 16:7 banner cleanly. */}
          <div className="mt-10 relative aspect-[16/9] sm:aspect-[16/7] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/hero/training-session.jpg"
              alt="See you soon — training session at the SculptClub private studio in the Jordaan"
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
