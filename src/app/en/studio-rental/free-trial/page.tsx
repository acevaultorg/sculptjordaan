import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { AcuityEmbed } from "@/components/marketing/acuity-embed";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, whatsappLinks } from "@/config/acuity";
import { ArrowRight, MessageCircle, Building2, Ban, CreditCard, Clock } from "lucide-react";

/**
 * Dedicated free-trial landing page for studio rental.
 * NL parity at src/app/nl/studio-huren/gratis-test/page.tsx.
 */

export const metadata: Metadata = {
  title: { absolute: "Free Trial Session — Studio Rental | SculptClub Jordaan" },
  description:
    "Book your free 60-minute trial session in our private studio in Amsterdam Jordaan. No credit card, no contract, free cancellation. For new trainers.",
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
    description: "60 minutes in our private studio. No credit card, no contract.",
    url: "/en/studio-rental/free-trial",
    type: "website",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "SculptClub Studio Rental — Amsterdam Jordaan" }],
  },
};

const benefits = [
  { icon: Building2, text: "Private canal-side studio" },
  { icon: Ban, text: "No credit card required" },
  { icon: Clock, text: "60 minutes · your pace" },
  { icon: CreditCard, text: "Pay later — only from €12/hr" },
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

      <Section>
        <div className="mb-6 text-center max-w-2xl mx-auto">
          <p className="overline text-primary">For new trainers</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Free Trial Session — Studio Rental
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            60 minutes in our private studio in the Jordaan. No credit card, no contract, free cancellation anytime. Decide after if you want to continue.
          </p>
        </div>

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

        <div id="book">
          <AcuityEmbed
            url={acuityFreeTrials.studioRentalTryout}
            title="Book your free Studio Rental trial at SculptClub"
            height={900}
            className="rounded-2xl overflow-hidden bg-white max-w-3xl mx-auto"
          />
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-base font-semibold">Questions first?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                WhatsApp us — we usually reply within 1 hour.
              </p>
            </div>
            <ButtonLink
              href={whatsappLinks.studioEn}
              external
              size="lg"
              variant="outline"
              className="mt-4 sm:mt-0 plausible-event-name=free_trial_studio_whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp us
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-3">Or see everything about studio rental</p>
            <ButtonLink
              href="/en/studio-rental"
              variant="outline"
              size="default"
              className="plausible-event-name=free_trial_studio_to_main"
            >
              Rates, packages & more
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
