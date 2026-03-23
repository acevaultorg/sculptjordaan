"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/site";

const reviews = [
  {
    name: "Thomas",
    text: {
      nl: "Fantastische studio in de Jordaan. Privé, schoon en alles wat je nodig hebt. De trainers zijn top.",
      en: "Fantastic studio in the Jordaan. Private, clean and everything you need. The trainers are excellent.",
    },
    rating: 5,
  },
  {
    name: "Sophie",
    text: {
      nl: "Ik was op zoek naar een rustige plek om te trainen zonder drukte. SculptClub is precies dat. Aanrader!",
      en: "I was looking for a quiet place to train without crowds. SculptClub is exactly that. Highly recommended!",
    },
    rating: 5,
  },
  {
    name: "Martijn",
    text: {
      nl: "Het concept is slim: geen abonnement, geen verplichtingen. Gewoon goed trainen in een goede ruimte.",
      en: "The concept is smart: no subscription, no obligations. Just good training in a good space.",
    },
    rating: 5,
  },
];

export function ReviewsPreview({ locale }: { locale: Locale }) {
  const t =
    locale === "nl"
      ? {
          overline: "Reviews",
          title: "Wat onze klanten zeggen",
          cta: "Bekijk alle reviews",
          ctaHref: "/nl/reviews",
          google: `${siteConfig.rating.value} sterren op Google (${siteConfig.rating.count} reviews)`,
        }
      : {
          overline: "Reviews",
          title: "What our clients say",
          cta: "View all reviews",
          ctaHref: "/en/reviews",
          google: `${siteConfig.rating.value} stars on Google (${siteConfig.rating.count} reviews)`,
        };

  return (
    <Section bg="muted">
      <SectionHeader overline={t.overline} title={t.title} description={t.google} />
      <div className="grid sm:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <FadeIn key={review.name} delay={i * 0.1}>
            <Card className="h-full border-border/50">
              <CardContent className="pt-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{review.text[locale]}&rdquo;
                </p>
                <p className="mt-3 text-sm font-semibold">{review.name}</p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href={t.ctaHref}
          className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
        >
          {t.cta}
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
