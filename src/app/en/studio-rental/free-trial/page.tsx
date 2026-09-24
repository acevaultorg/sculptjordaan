import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { LandingVideo } from "@/components/marketing/landing-video";
import { PhotoGalleryLightbox } from "@/components/marketing/photo-gallery-lightbox";
import { GoogleMap } from "@/components/marketing/google-map";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, whatsappLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { ArrowRight, MessageCircle, Building2, Ban, Clock, Percent, CalendarCheck, Eye, Star } from "lucide-react";

/**
 * Dedicated free-trial landing page for studio rental — also the paid
 * Google Ads landing page for the "Trainers" ad group.
 *
 * Two co-primary paths (operator directive 2026-06-03): book the free
 * try-out OR chat first via WhatsApp. A "see the room first" card opens
 * the same free studio try-out in a NEW TAB (acuityFreeTrials.studioRentalTryout)
 * so ZZP trainers can inspect the space before committing. (Operator
 * 2026-06-08: reuse the free try-out rather than a separate WhatsApp tour.)
 *
 * 2026-06-21 (operator): NO iframe. The embedded Acuity calendar was replaced
 * by buttons (hero + a dedicated booking card) that open the free try-out in a
 * NEW TAB — Acuity's own page is mobile-native + Apple Pay friendly and avoids
 * the iframe's mobile scroll-in-scroll. A "see it in action" studio-promo video
 * band (lazy LandingVideo, zero LCP) sits between the trust strip and the booking
 * card. ButtonLink auto-fires trackBeginBooking on the Acuity URL; the global
 * Acuity confirm script fires the booking conversion on completion.
 *
 * NL parity at src/app/nl/studio-huren/gratis-test/page.tsx (keep in sync).
 */

export const metadata: Metadata = {
  title: { absolute: "Free Trial Session — Studio Rental | SculptClub Jordaan" },
  description:
    "Book your free 60-minute trial session in our private studio in Amsterdam Jordaan — or just ask your question on WhatsApp first. No credit card, no contract, your own rates. For personal trainers.",
  alternates: {
    canonical: "/en/studio-rental/free-trial",
    languages: {
      nl: "/nl/studio-huren/gratis-test",
      en: "/en/studio-rental/free-trial",
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Free Trial Session — Studio Rental at SculptClub",
    description: "60 minutes in our private studio. Book free or message your question — no credit card, no contract.",
    url: "/en/studio-rental/free-trial",
    type: "website",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "SculptClub Studio Rental — Amsterdam Jordaan" }],
  },
};

const benefits = [
  { icon: Building2, text: "Private canal-side studio in the Jordaan" },
  { icon: Percent, text: "Your clients, your rates: you keep 100%" },
  { icon: Clock, text: "From €12/hr · no contract" },
  { icon: Ban, text: "Free trial · no credit card" },
];

// Studio gallery — lets trainers SEE the room before booking (the "see the
// space first" desire this page already speaks to). Mirrors the NL page +
// reuses the same PhotoGalleryLightbox + studio shots as /en/studio-rental —
// tap a thumb for a fullscreen slider. Space + equipment + canal-side atmosphere.
const galleryImages = [
  { src: "/images/studio/studio-overview.jpeg", alt: "Overview of the private studio in the Jordaan: SCULPT wall, sprint lane and equipment" },
  { src: "/images/studio/studio-interior-1.jpeg", alt: "Strength room with Rogue rack, sled and bumper plates under the skylight" },
  { src: "/images/studio/power-rack.jpeg", alt: "Rogue power rack, sled and bumper plates at SculptClub" },
  { src: "/images/studio/boutique-corner.jpg", alt: "Dumbbell rack with plants and record player, the studio's boutique corner" },
  { src: "/images/studio/echo-bike-corner.jpg", alt: "Echo Bike and conditioning corner at SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Open doors overlooking the Egelantiersgracht canal in the Jordaan" },
];

export default function FreeTrialStudioRentalEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Studio Rental", url: "/en/studio-rental" },
          { name: "Free trial", url: "/en/studio-rental/free-trial" },
        ]}
      />

      {/* Hero — two co-primary paths: book the free trial OR chat first. */}
      <Section>
        <div className="mb-7 text-center max-w-2xl mx-auto">
          <p className="overline">For personal trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Free Trial Session: Studio Rental
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            60 minutes in our private studio in the Jordaan. No credit card, no contract, free cancellation anytime, and you keep 100% of your rate.
          </p>

          {/* Two co-primary CTAs = the two operator goals, side by side */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink
              href={acuityFreeTrials.studioRentalTryout}
              external
              size="lg"
              className="w-full sm:w-auto plausible-event-name=free_trial_book_cta"
            >
              <CalendarCheck className="mr-2 h-4 w-4" />
              Book free trial
            </ButtonLink>
            <ButtonLink
              href={whatsappLinks.studioEn}
              external
              size="lg"
              variant="outline"
              className="w-full sm:w-auto plausible-event-name=free_trial_studio_whatsapp_hero"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Prefer to chat first?
            </ButtonLink>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <span className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-semibold">{siteConfig.rating.value}</span>
            <span className="text-muted-foreground">on Google · {siteConfig.rating.count} reviews</span>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Not ready to book? Send your question. We usually reply within 1 hour.
          </p>
        </div>

        {/* Trust strip — 4 trainer-relevant bullets */}
        <FadeIn>
          <ul className="mx-auto max-w-2xl grid gap-3 sm:grid-cols-2 mb-10 text-sm">
            {benefits.map((b) => (
              <li key={b.text} className="flex items-center gap-2.5 text-muted-foreground">
                <b.icon className="h-4 w-4 text-brand shrink-0" aria-hidden />
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

      </Section>

      {/* See-it-in-action — the studio promo (studio-promo.mp4 = the
          trainer-recruitment clip). Lazy LandingVideo: zero LCP impact, loads
          only on scroll. Between the trust strip and the booking card so a
          trainer sees the room in motion, then books (see it → act). */}
      <Section bg="muted">
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <p className="overline">See it in action</p>
              <h2 className="mt-2 text-xl font-semibold">Train in our private studio in the Jordaan</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                The studio, equipment and canal-side atmosphere, in motion.
              </p>
            </div>
            <LandingVideo
              src="/videos/studio-promo.mp4"
              poster="/videos/_rs/studio-promo-poster-full.webp"
              label="SculptClub: the private studio in Amsterdam Jordaan, in motion"
            />
          </div>
        </FadeIn>
      </Section>

      {/* How-it-works — 3 concrete steps. Clarity showed visitors scroll this
          page without booking; the biggest silent objection on a "free trial"
          is uncertainty about what booking actually commits you to. Spell it
          out: 30-second booking, door code via WhatsApp, walk away freely. */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <p className="overline">How it works</p>
              <h2 className="mt-2 text-xl font-semibold">Your free trial, step by step</h2>
            </div>
            <ol className="grid gap-6 sm:grid-cols-3">
              {[
                { n: "1", title: "Book a time", text: "Pick any slot that suits you. Takes 30 seconds. No credit card, nothing to fill in." },
                { n: "2", title: "Walk in & train", text: "You get the door code via WhatsApp. 60 minutes in the studio, alone or with a client." },
                { n: "3", title: "Decide freely", text: "Like it? Rent from €12/hr, pay per booking. Not for you? Just walk away. There's nothing to cancel." },
              ].map((s) => (
                <li key={s.n} className="text-center sm:text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-brand-foreground">
                    {s.n}
                  </span>
                  <p className="mt-3 text-base font-semibold">{s.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      </Section>

      {/* Booking surface — the canonical conversion. NO iframe (operator
          2026-06-21): the embedded Acuity calendar is replaced by a button that
          opens our calendar in a NEW TAB. Acuity's own page is mobile-native +
          Apple Pay friendly, avoiding the iframe's mobile scroll-in-scroll.
          ButtonLink auto-fires trackBeginBooking on the Acuity URL; the global
          Acuity confirm script fires the booking conversion. scroll-mt keeps the
          heading clear of the sticky header for any #book deep links. */}
      <Section>
        <FadeIn>
          <div id="book" className="scroll-mt-24">
            <div className="mx-auto max-w-xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
              <CalendarCheck className="mx-auto h-6 w-6 text-brand" aria-hidden />
              <h2 className="mt-3 text-xl font-semibold">Book your free trial</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                60 minutes in the private studio. No credit card, no contract. Pick a time that suits you.
              </p>
              <ButtonLink
                href={acuityFreeTrials.studioRentalTryout}
                external
                size="lg"
                className="mt-5 w-full sm:w-auto plausible-event-name=free_trial_book_cta_section"
              >
                <CalendarCheck className="mr-2 h-4 w-4" />
                Book free trial
              </ButtonLink>
              <p className="mt-3 text-xs text-muted-foreground">
                Opens our calendar in a new tab · free cancellation anytime
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Studio gallery — let trainers SEE the room before booking. Sits right
          before the "See the space first" tour card so the photos + the tour
          CTA reinforce each other. Reuses PhotoGalleryLightbox (tap = fullscreen
          slider) from /en/studio-rental. */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <p className="overline">The studio</p>
              <h2 className="mt-2 text-xl font-semibold">See the space</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Private canal-side studio in the Jordaan. Tap a photo to enlarge.
              </p>
            </div>
            <PhotoGalleryLightbox images={galleryImages} locale="en" />
          </div>
        </FadeIn>
      </Section>

      {/* Social proof — real Google reviews (5.0). A trainer deciding whether
          this studio is credible wants other people's words, not ours. */}
      <ReviewsPreview locale="en" audience="trainer" />

      {/* Location — where IS this? Practical objection killer: address, map,
          route planner, hours. Canal-side Jordaan is also a selling point. */}
      <GoogleMap locale="en" />

      {/* Chat-first block — two low-commitment paths for trainers who aren't
          ready to book: ask a question, or come see the room first. */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <p className="text-center text-sm font-semibold mb-4">Not ready to book yet?</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center flex flex-col">
                <MessageCircle className="mx-auto h-5 w-5 text-brand" aria-hidden />
                <p className="mt-2 text-base font-semibold">Ask a question</p>
                <p className="mt-1 mb-4 text-sm text-muted-foreground grow">
                  Message us about rates, availability or equipment. We usually reply within 1 hour.
                </p>
                <ButtonLink
                  href={whatsappLinks.studioEn}
                  external
                  variant="outline"
                  className="w-full plausible-event-name=free_trial_studio_whatsapp max-sm:min-h-11"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp us
                </ButtonLink>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center flex flex-col">
                <Eye className="mx-auto h-5 w-5 text-brand" aria-hidden />
                <p className="mt-2 text-base font-semibold">See the space first</p>
                <p className="mt-1 mb-4 text-sm text-muted-foreground grow">
                  See the studio and equipment for yourself during a free, no-obligation trial session. No credit card.
                </p>
                <ButtonLink
                  href={acuityFreeTrials.studioRentalTryout}
                  external
                  variant="outline"
                  className="w-full plausible-event-name=free_trial_studio_tour max-sm:min-h-11"
                >
                  <CalendarCheck className="mr-2 h-4 w-4" />
                  Book your free visit
                </ButtonLink>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Escape-hatch to the full studio-rental page. */}
      <Section>
        <FadeIn>
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-3">Or see everything about studio rental: rates, packages &amp; the studio</p>
            <ButtonLink
              href="/en/studio-rental"
              variant="outline"
              size="default"
              className="max-sm:min-h-11 plausible-event-name=free_trial_studio_to_main"
            >
              Rates, packages &amp; more
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
