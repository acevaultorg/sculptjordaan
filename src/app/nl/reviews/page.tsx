import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { Star, ArrowRight, MessageCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews — SculptClub Amsterdam Jordaan",
  description:
    "Lees wat onze klanten zeggen over SculptClub. 5.0 sterren op Google met 10 reviews. Boutique personal training in Amsterdam Jordaan.",
  alternates: {
    canonical: "/nl/reviews",
    languages: {
      nl: "/nl/reviews",
      en: "/en/reviews",
    },
  },
};

const reviews = [
  {
    name: "Thomas",
    text: "Fantastische studio in de Jordaan. Priv\u00e9, schoon en alles wat je nodig hebt. De trainers zijn top.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Sophie",
    text: "Ik was op zoek naar een rustige plek om te trainen zonder drukte. SculptClub is precies dat. Aanrader!",
    rating: 5,
    date: "2025",
  },
  {
    name: "Martijn",
    text: "Het concept is slim: geen abonnement, geen verplichtingen. Gewoon goed trainen in een goede ruimte.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Lisa",
    text: "Mijn trainer begreep meteen wat ik nodig had. De priv\u00e9 setting maakt het zo veel fijner dan een grote sportschool.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Daan",
    text: "Open Gym is perfect voor mij. Deurcode, geen wachttijden, en altijd rustig. Precies wat ik zocht.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Emma",
    text: "De locatie aan de gracht is prachtig. Heel fijn om te trainen in zo'n persoonlijke, intieme setting.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Jeroen",
    text: "Als ZZP-trainer huur ik hier de studio voor mijn klanten. Alles is netjes, goed onderhouden en de prijs is eerlijk.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Anna",
    text: "De flexibiliteit is top. Geen contract, gewoon boeken wanneer het mij uitkomt. En de apparatuur is van hoge kwaliteit.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Mark",
    text: "Na jaren in overvolle sportscholen is dit een verademing. Maximaal 3 mensen, altijd plek, altijd schoon.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Julia",
    text: "De gratis intake was heel waardevol. Geen verkooppraatje, gewoon eerlijk advies. Nu train ik hier 2x per week.",
    rating: 5,
    date: "2025",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-brand text-brand" />
      ))}
    </div>
  );
}

export default function ReviewsPageNL() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          overline="Reviews"
          title="Wat onze klanten zeggen"
          description={`${siteConfig.rating.value} sterren op Google \u2014 ${siteConfig.rating.count} reviews`}
        />
        {/* Google Rating Badge */}
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-brand text-brand" />
              ))}
            </div>
            <span className="text-2xl font-bold">{siteConfig.rating.value}</span>
          </div>
          <div className="text-center">
            <a
              href={siteConfig.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-brand hover:text-brand-dark transition-colors font-medium"
            >
              Bekijk op Google
              <ExternalLink className="ml-1 w-3.5 h-3.5" />
            </a>
          </div>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={(i % 3) * 0.1}>
              <Card className="h-full border-border/50">
                <CardContent className="pt-6">
                  <StarRating rating={review.rating} />
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href={siteConfig.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              Bekijk alle reviews op Google
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-background">
              Ervaar het zelf
            </h2>
            <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
              Boek een gratis proefles en ontdek waarom onze klanten ons 5
              sterren geven.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={acuityLinks.generic}
                external
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Boek Gratis Proefles
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-background/20 text-background hover:bg-background/10"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp ons
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
