import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { ReviewsJsonLd , BreadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  ArrowRight,
  TrendingUp,
  Quote,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resultaten — SculptClub Amsterdam Jordaan",
  description:
    "Bekijk de transformaties en resultaten van onze klanten. Personal training die werkt. Boek je gratis proefles bij SculptClub.",
  alternates: {
    canonical: "/nl/resultaten",
    languages: {
      nl: "/nl/resultaten",
      en: "/en/results",
    },
  },
};

const results = [
  {
    name: "Thomas K.",
    duration: "3 maanden",
    quote:
      "Na 3 maanden training bij SculptClub voel ik me sterker dan ooit. De persoonlijke aandacht maakt het verschil.",
    highlights: ["12 kg afgevallen", "+40% krachttoename", "Betere houding"],
  },
  {
    name: "Lisa M.",
    duration: "6 maanden",
    quote:
      "Eva heeft me geholpen met zowel training als voeding. Het resultaat spreekt voor zich. Ik kan het iedereen aanraden.",
    highlights: [
      "Lichaam getransformeerd",
      "Meer energie",
      "Gezondere leefstijl",
    ],
  },
  {
    name: "Mark R.",
    duration: "4 maanden",
    quote:
      "Na mijn blessure heeft Hamish me weer opgebouwd. Van revalidatie naar persoonlijke records. Fantastische begeleiding.",
    highlights: [
      "Volledig hersteld",
      "Nieuwe PR's gezet",
      "Blessurevrij trainen",
    ],
  },
];

const reviewsJsonLdData = results.map((r) => ({
  name: r.name,
  text: r.quote,
  rating: 5,
  date: "2026-01-01",
}));

export default function ResultsPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/"},{"name":"Resultaten","url":"/nl/resultaten"}]} />
      <ReviewsJsonLd reviews={reviewsJsonLdData} />
      <Section>
        <SectionHeader
          as="h1"
          overline="Resultaten"
          title="Echte mensen, echte resultaten"
          description="Onze klanten behalen meetbare resultaten met persoonlijke begeleiding. Bekijk hun verhalen en transformaties."
        />
      </Section>

      <Section bg="muted">
        <div className="space-y-8">
          {results.map((result, i) => (
            <FadeIn key={result.name} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-card ring-1 ring-foreground/10">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-bold text-lg">{result.name}</p>
                    <span className="text-xs bg-brand/10 text-brand px-2 py-0.5 rounded-full font-medium">
                      {result.duration}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 mb-4">
                    <Quote className="w-4 h-4 text-brand flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground italic">
                      {result.quote}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {result.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1 text-xs font-medium bg-brand/10 text-brand px-2.5 py-1 rounded-full"
                      >
                        <TrendingUp className="w-3 h-3" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Jouw transformatie begint hier
            </h2>
            <p className="text-muted-foreground mb-8">
              Boek een gratis proefles en ontdek wat personal training bij
              SculptClub voor jou kan betekenen. Onze trainers helpen je om
              jouw doelen te bereiken.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonLink
                href={acuityLinks.generic}
                external
                size="lg"
                className="bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Boek gratis proefles
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="outline"
                size="lg"
                className="rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                Stel een vraag
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
