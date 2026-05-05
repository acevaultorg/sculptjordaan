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
  title: { absolute: "Results — SculptClub Amsterdam Jordaan" },
  description:
    "See our clients' transformations and results. Personal training that works. Book your free trial at SculptClub.",
  alternates: {
    canonical: "/en/results",
    languages: {
      nl: "/nl/resultaten",
      en: "/en/results",
    },
  },
};

const results = [
  {
    name: "Thomas K.",
    duration: "3 months",
    quote:
      "After 3 months of training at SculptClub I feel stronger than ever. The personal attention makes all the difference.",
    highlights: ["12 kg lost", "+40% strength gain", "Better posture"],
  },
  {
    name: "Lisa M.",
    duration: "6 months",
    quote:
      "Eva helped me with both training and nutrition. The results speak for themselves. I can recommend it to everyone.",
    highlights: [
      "Body transformed",
      "More energy",
      "Healthier lifestyle",
    ],
  },
  {
    name: "Mark R.",
    duration: "4 months",
    quote:
      "After my injury, Hamish rebuilt me. From rehabilitation to personal records. Fantastic guidance.",
    highlights: [
      "Fully recovered",
      "New PRs set",
      "Injury-free training",
    ],
  },
];

const reviewsJsonLdData = results.map((r) => ({
  name: r.name,
  text: r.quote,
  rating: 5,
  date: "2026-01-01",
}));

export default function ResultsPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{"name":"Home","url":"/en"},{"name":"Results","url":"/en/results"}]} />
      <ReviewsJsonLd reviews={reviewsJsonLdData} />
      <Section>
        <SectionHeader
          as="h1"
          overline="Results"
          title="Real People, Real Results"
          description="Our clients achieve measurable results with personal guidance. Read their stories and transformations."
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
              Your Transformation Starts Here
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a free trial session and discover what personal training at
              SculptClub can do for you. Our trainers will help you reach your
              goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonLink
                href={acuityLinks.generic}
                external
                size="lg"
                className="bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Book free trial
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
                Ask a question
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
