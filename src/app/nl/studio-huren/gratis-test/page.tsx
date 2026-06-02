import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { AcuityEmbed } from "@/components/marketing/acuity-embed";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, whatsappLinks } from "@/config/acuity";
import { ArrowRight, MessageCircle, Building2, Ban, CreditCard, Clock } from "lucide-react";

/**
 * Dedicated free-tryout landing page for studio rental.
 *
 * Operator directive 2026-05-27: "user for studio huren try-out should
 * not go to booking page, best special page for trainers that are new,
 * so they can book try out (for free) easily with acuity."
 *
 * Pre-this-page: Try-Out header sheet → Studio Huren card → routed to
 * /nl/studio-huren#book (the full booking page with paid hourly/
 * packages tabs). A new trainer who clicked "Try-Out" expecting a
 * FREE first taste instead landed on a full pricing page. Funnel break.
 *
 * Now: dedicated `/nl/studio-huren/gratis-test` page focused on ONE
 * thing — book the free Acuity slot. Compact hero, embedded scheduler,
 * WhatsApp fallback, escape-link to the full studio-huren page if the
 * visitor wants more info. The full /nl/studio-huren page stays
 * unchanged for paid-tier shoppers.
 *
 * EN parity: src/app/en/studio-rental/free-trial/page.tsx.
 */

export const metadata: Metadata = {
  title: { absolute: "Gratis proefsessie — Studio Huren | SculptClub Jordaan" },
  description:
    "Boek je gratis 60-minuten proefsessie in onze privé studio in Amsterdam Jordaan. Geen creditcard, geen contract, gratis annuleren. Voor nieuwe trainers.",
  alternates: {
    canonical: "/nl/studio-huren/gratis-test",
    languages: {
      nl: "/nl/studio-huren/gratis-test",
      en: "/en/studio-rental/free-trial",
    },
  },
  // Conversion landing — indexable but lean (the /nl/studio-huren parent
  // is the SEO anchor for the head-query "studio huren amsterdam"; this
  // page just needs to be findable via the Try-Out funnel and direct links).
  robots: { index: true, follow: true },
  openGraph: {
    title: "Gratis proefsessie — Studio Huren bij SculptClub",
    description: "60 minuten in de privé studio. Geen creditcard, geen contract.",
    url: "/nl/studio-huren/gratis-test",
    type: "website",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "SculptClub Studio Huren — Amsterdam Jordaan" }],
  },
};

const benefits = [
  { icon: Building2, text: "Privé studio aan de gracht" },
  { icon: Ban, text: "Geen creditcard nodig" },
  { icon: Clock, text: "60 minuten · jouw tempo" },
  { icon: CreditCard, text: "Daarna pas betalen vanaf €12/uur" },
];

export default function GratisTestStudioHurenNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Studio Huren", url: "/nl/studio-huren" },
          { name: "Gratis proefsessie", url: "/nl/studio-huren/gratis-test" },
        ]}
      />

      {/* Compact hero — single conversion focus, no dual CTAs */}
      <Section>
        <div className="mb-6 text-center max-w-2xl mx-auto">
          <p className="overline text-primary">Voor nieuwe trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Gratis proefsessie — Studio Huren
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            60 minuten in onze privé studio in de Jordaan. Geen creditcard, geen contract, altijd gratis annuleren. Daarna kies je zelf of je verder wilt.
          </p>
        </div>

        {/* Compact trust strip — 4 plain bullets, no badges/colors competing
            with the orange Boek button below */}
        <FadeIn>
          <ul className="mx-auto max-w-2xl grid gap-3 sm:grid-cols-2 mb-8 text-sm">
            {benefits.map((b) => (
              <li key={b.text} className="flex items-center gap-2.5 text-muted-foreground">
                <b.icon className="h-4 w-4 text-brand shrink-0" aria-hidden />
                <span>{b.text}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Embedded Acuity scheduler — the canonical conversion surface.
            The page lives in service of this widget; visitor lands → fills
            out date+time → done. id="book" matches MobileBottomCTABar
            routing for /studio-huren* paths so the sticky CTA scrolls
            back here after deep-scroll. */}
        <div id="book">
          <AcuityEmbed
            url={acuityFreeTrials.studioRentalTryout}
            title="Boek je gratis Studio Rental proefsessie bij SculptClub"
            height={900}
            className="rounded-2xl overflow-hidden bg-white max-w-3xl mx-auto"
          />
        </div>
      </Section>

      {/* Uncertain? WhatsApp fallback */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-base font-semibold">Vragen vooraf?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                WhatsApp ons — we reageren meestal binnen 1 uur.
              </p>
            </div>
            <ButtonLink
              href={whatsappLinks.studioNl}
              external
              size="lg"
              variant="outline"
              className="mt-4 sm:mt-0 plausible-event-name=gratis_test_studio_whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp ons
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      {/* Escape-hatch: visitor who wants the full picture (rates, packages,
          studio gallery, value-prop, FAQ) can hop to the main page. */}
      <Section>
        <FadeIn>
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-3">Of bekijk alles over studio huren</p>
            <ButtonLink
              href="/nl/studio-huren"
              variant="outline"
              size="default"
              className="plausible-event-name=gratis_test_studio_to_main"
            >
              Tarieven, pakketten & meer
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
