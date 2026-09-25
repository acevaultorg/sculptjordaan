import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { StudioRentalCalculator } from "@/components/marketing/studio-rental-calculator";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Studio Huren Kosten Berekenen: Personal Trainer Amsterdam" },
  description:
    "Bereken wat je overhoudt als je de studio huurt vanaf €12/uur en je eigen tarief houdt — vs een gym die 30-50% commissie pakt.",
  alternates: {
    canonical: "/nl/studio-huren/rekentool",
    languages: {
      nl: "/nl/studio-huren/rekentool",
      en: "/en/studio-rental/calculator",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/studio-huren/rekentool",
    title: "Studio Huren Kosten Berekenen: Personal Trainer Amsterdam",
    description:
      "Bereken wat je overhoudt als je de studio huurt vanaf €12/uur en je eigen tarief houdt — vs een gym die 30-50% commissie pakt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Huren Kosten Berekenen: Personal Trainer Amsterdam",
    description:
      "Bereken wat je overhoudt als je de studio huurt vanaf €12/uur en je eigen tarief houdt — vs een gym die 30-50% commissie pakt.",
  },
};

const faqs = [
  {
    q: "Wat kost het om een studio te huren als personal trainer in Amsterdam?",
    a: "Bij SculptClub in de Jordaan huur je de privé studio vanaf €12 per 60 minuten (halve studio, 1-op-1) of €17 per uur (hele studio, small group). Je betaalt alleen voor de uren die je gebruikt en houdt 100% van je eigen tarief — wij rekenen alleen huur, geen commissie. Met een strippenkaart bespaar je tot 23%.",
  },
  {
    q: "Hoeveel meer houd ik over dan bij een commissie-gym?",
    a: "Een sportschool in Amsterdam pakt doorgaans 30-50% van je sessietarief. Bij 8 sessies per week à €60 en €12/uur huur houd je ongeveer €420 per maand méér over dan bij een gym met 40% commissie — ruim €5.000 per jaar. Bereken jouw eigen situatie met de rekentool hierboven.",
  },
  {
    q: "Zijn er vaste kosten of een contract?",
    a: "Nee. Geen abonnement, geen vaste huur, geen contract. Je boekt per uur wanneer je een klant hebt en zegt altijd gratis op. Je houdt volledige vrijheid over je tarief, je klanten en je rooster.",
  },
];

export default function StudioRentalCalculatorNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Studio Huren", url: "/nl/studio-huren" },
          { name: "Rekentool", url: "/nl/studio-huren/rekentool" },
        ]}
      />
      <FaqJsonLd faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      <Section>
        <SectionHeader
          as="h1"
          overline="Voor personal trainers"
          title="Wat houd jij over als je de studio huurt?"
          description="Schuif jouw aantal sessies en tarief in. Je ziet meteen wat je overhoudt bij SculptClub — waar je alleen huur betaalt — vergeleken met een gym die commissie pakt van elke sessie."
        />
        <FadeIn>
          <StudioRentalCalculator locale="nl" />
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
              <ButtonLink href="/nl/studio-huren" size="lg" className="w-full sm:w-auto">
                Bekijk tarieven & boek de studio
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/nl/word-trainer" variant="outline" size="lg" className="w-full sm:w-auto">
                Word trainer bij SculptClub
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
