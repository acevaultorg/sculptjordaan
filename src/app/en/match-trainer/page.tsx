import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { TrainerMatchQuizClient } from "@/components/marketing/trainer-match-quiz-client";
import { Star } from "lucide-react";

/**
 * /en/match-trainer — English locale of the trainer-match quiz.
 * See /nl/match-trainer/page.tsx for full design + rationale.
 */

export const metadata: Metadata = {
  title: { absolute: "Match yourself with a personal trainer — SculptClub" },
  description:
    "3 questions, 30 seconds. We show your top-2 trainer match from 11 trainers in Jordaan, Amsterdam. First intro free · no obligation.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/en/match-trainer",
    languages: {
      nl: "/nl/match-trainer",
      en: "/en/match-trainer",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/match-trainer",
    title: "Match yourself with a personal trainer — SculptClub",
    description:
      "3 questions, 30 seconds. We show your top-2 trainer match from 11 trainers in Jordaan, Amsterdam. First intro free · no obligation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Match yourself with a personal trainer — SculptClub",
    description:
      "3 questions, 30 seconds. We show your top-2 trainer match from 11 trainers in Jordaan, Amsterdam. First intro free · no obligation.",
  },
};

export default function MatchTrainerPage() {
  return (
    <PageLayout>
      <Section bg="default">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <Link
              href="/en"
              className="inline-block mb-6"
              aria-label="Back to homepage"
            >
              <Image
                src="/images/logo-sculptclub.png"
                alt="SculptClub"
                width={140}
                height={10}
                className="h-3.5 w-auto dark:invert mx-auto"
              />
            </Link>
            <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-semibold text-foreground ml-1">5.0</span>
              <span>on Google</span>
            </div>
            {/* h1 + sub moved here from the quiz's (removed) intro screen —
                2026-06-10 CRO pass drops the visitor straight into Q1. */}
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Match yourself with the right trainer
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              3 questions · 30 seconds · we show your top-2 match from 11 trainers.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <TrainerMatchQuizClient locale="en" />
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground max-w-lg mx-auto">
            <p>
              Private studio · Egelantiersgracht 424 · Cancel anytime · First intro free · Reply <strong className="text-foreground font-semibold">usually within 1 hour</strong> via WhatsApp
            </p>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
