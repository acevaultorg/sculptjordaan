import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { StudioRentalCalculator } from "@/components/marketing/studio-rental-calculator";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Studio Rental Cost Calculator: Personal Trainer Amsterdam" },
  description:
    "Calculate what you keep renting the studio from €12/hr and keeping 100% of your rate — vs a gym taking 30-50% commission.",
  alternates: {
    canonical: "/en/studio-rental/calculator",
    languages: {
      nl: "/nl/studio-huren/rekentool",
      en: "/en/studio-rental/calculator",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/studio-rental/calculator",
    title: "Studio Rental Cost Calculator: Personal Trainer Amsterdam",
    description:
      "Calculate what you keep renting the studio from €12/hr and keeping 100% of your rate — vs a gym taking 30-50% commission.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Rental Cost Calculator: Personal Trainer Amsterdam",
    description:
      "Calculate what you keep renting the studio from €12/hr and keeping 100% of your rate — vs a gym taking 30-50% commission.",
  },
};

const faqs = [
  {
    q: "How much does it cost to rent a studio as a personal trainer in Amsterdam?",
    a: "At SculptClub in the Jordaan you rent the private studio from €12 per 60 minutes (half studio, 1-on-1) or €17 per hour (full studio, small group). You only pay for the hours you use and keep 100% of your own rate — we charge rent only, no commission. A discount pack saves up to 23%.",
  },
  {
    q: "How much more do I keep than at a commission gym?",
    a: "An Amsterdam chain gym typically takes 30-50% of your session rate. At 8 sessions a week at €60 and €12/hr rent, you keep roughly €420 a month more than at a gym with 40% commission — over €5,000 a year. Calculate your own situation with the tool above.",
  },
  {
    q: "Are there fixed costs or a contract?",
    a: "No. No membership, no fixed rent, no contract. You book by the hour when you have a client and cancel free anytime. You keep full freedom over your rate, your clients and your schedule.",
  },
];

export default function StudioRentalCalculatorEN() {
  return (
    <PageLayout audience="rental">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Studio Rental", url: "/en/studio-rental" },
          { name: "Calculator", url: "/en/studio-rental/calculator" },
        ]}
      />
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      <Section>
        <SectionHeader
          as="h1"
          overline="For personal trainers"
          title="What do you keep when you rent the studio?"
          description="Slide in your number of sessions and your rate. You'll see instantly what you keep at SculptClub — where you pay rent only — compared to a gym that takes commission on every session."
        />
        <FadeIn>
          <StudioRentalCalculator locale="en" />
        </FadeIn>
      </Section>

      {/* AEO answer block — direct, quote-ready */}
      <Section bg="muted">
        <FadeIn>
          <div className="mx-auto max-w-2xl space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h2 className="text-lg font-bold">{f.q}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <ButtonLink href="/en/studio-rental" size="lg" className="w-full sm:w-auto">
                See rates & book the studio
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/en/become-trainer" variant="outline" size="lg" className="w-full sm:w-auto">
                Become a trainer at SculptClub
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
