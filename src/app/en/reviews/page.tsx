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
    "Read what our clients say about SculptClub. 5.0 stars on Google with 10 reviews. Boutique personal training in Amsterdam Jordaan.",
  alternates: {
    canonical: "/en/reviews",
    languages: {
      nl: "/nl/reviews",
      en: "/en/reviews",
    },
  },
};

const reviews = [
  {
    name: "Thomas",
    text: "Fantastic studio in the Jordaan. Private, clean and everything you need. The trainers are excellent.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Sophie",
    text: "I was looking for a quiet place to train without crowds. SculptClub is exactly that. Highly recommended!",
    rating: 5,
    date: "2025",
  },
  {
    name: "Martijn",
    text: "The concept is smart: no subscription, no obligations. Just good training in a good space.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Lisa",
    text: "My trainer understood exactly what I needed right away. The private setting makes it so much better than a big gym.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Daan",
    text: "Open Gym is perfect for me. Door code, no waiting, and always quiet. Exactly what I was looking for.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Emma",
    text: "The canal-side location is beautiful. A wonderful place to train in such a personal, intimate setting.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Jeroen",
    text: "As a freelance trainer I rent the studio here for my clients. Everything is tidy, well-maintained and fairly priced.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Anna",
    text: "The flexibility is great. No contract, just book when it suits me. And the equipment is high quality.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Mark",
    text: "After years in overcrowded gyms, this is a breath of fresh air. Maximum 3 people, always space, always clean.",
    rating: 5,
    date: "2025",
  },
  {
    name: "Julia",
    text: "The free intro was very valuable. No sales pitch, just honest advice. Now I train here twice a week.",
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

export default function ReviewsPageEN() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          overline="Reviews"
          title="What our clients say"
          description={`${siteConfig.rating.value} stars on Google \u2014 ${siteConfig.rating.count} reviews`}
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
              View on Google
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
              View all reviews on Google
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
              Experience it yourself
            </h2>
            <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
              Book a free trial and discover why our clients give us 5 stars.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={acuityLinks.generic}
                external
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Book Free Trial
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
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
