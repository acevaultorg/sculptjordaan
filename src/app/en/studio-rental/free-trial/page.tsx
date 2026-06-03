import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { AcuityEmbed } from "@/components/marketing/acuity-embed";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, whatsappLinks } from "@/config/acuity";
import { ArrowRight, MessageCircle, Building2, Ban, Clock, Percent, CalendarCheck, Eye } from "lucide-react";

/**
 * Dedicated free-trial landing page for studio rental — also the paid
 * Google Ads landing page for the "Trainers" ad group.
 *
 * Two co-primary paths (operator directive 2026-06-03): book the free
 * try-out OR chat first via WhatsApp. A "see the room first" 15-min tour
 * path is added for ZZP trainers who want to inspect the space before
 * committing.
 *
 * NL parity at src/app/nl/studio-huren/gratis-test/page.tsx (keep in sync).
 */

export const metadata: Metadata = {
  title: { absolute: "Free Trial Session — Studio Rental | SculptClub Jordaan" },
  description:
    "Book your free 60-minute trial session in our private studio in Amsterdam Jordaan — or just ask your question on WhatsApp first. No credit card, no contract, 0% commission. For personal trainers.",
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
  { icon: Percent, text: "0% commission · your clients, your rates" },
  { icon: Clock, text: "From €12/hr · no contract" },
  { icon: Ban, text: "Free trial · no credit card" },
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
            Free Trial Session — Studio Rental
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            60 minutes in our private studio in the Jordaan. No credit card, no contract, free cancellation anytime — and 0% commission on your own clients.
          </p>

          {/* Two co-primary CTAs = the two operator goals, side by side */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink
              href="#book"
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
          <p className="mt-3 text-xs text-muted-foreground">
            Not ready to book? Send your question — we usually reply within 1 hour.
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

        {/* Booking surface — the canonical conversion. */}
        <div id="book" className="scroll-mt-24">
          <h2 className="mb-4 text-center text-xl font-semibold">Book your free trial</h2>
          <AcuityEmbed
            url={acuityFreeTrials.studioRentalTryout}
            title="Book your free Studio Rental trial at SculptClub"
            intent="studio_rental"
            pricing="free"
            height={900}
            className="rounded-2xl overflow-hidden bg-white max-w-3xl mx-auto"
          />
        </div>
      </Section>

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
                  className="w-full plausible-event-name=free_trial_studio_whatsapp"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp us
                </ButtonLink>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center flex flex-col">
                <Eye className="mx-auto h-5 w-5 text-brand" aria-hidden />
                <p className="mt-2 text-base font-semibold">See the space first</p>
                <p className="mt-1 mb-4 text-sm text-muted-foreground grow">
                  Book a short, no-obligation tour (15 min). See the studio and the equipment.
                </p>
                <ButtonLink
                  href={whatsappLinks.tourEn}
                  external
                  variant="outline"
                  className="w-full plausible-event-name=free_trial_studio_tour"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Book a tour
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
            <p className="mb-3">Or see everything about studio rental — rates, packages &amp; the studio</p>
            <ButtonLink
              href="/en/studio-rental"
              variant="outline"
              size="default"
              className="plausible-event-name=free_trial_studio_to_main"
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
