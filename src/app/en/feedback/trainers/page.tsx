import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { FeedbackForm } from "@/components/marketing/feedback-form";

/**
 * /en/feedback/trainers : feedback form for trainers who rent the studio. Added 2026-09-21 (card mubc1udkwgp5rp).
 * Noindex by design: reached by direct link and QR code, not a search surface.
 * Answers are stored via functions/api/feedback.ts. Read them: npm run feedback:read.
 */

export const metadata: Metadata = {
  title: { absolute: "Feedback for trainers | SculptClub" },
  description: "For trainers who rent the studio: tell us in one minute what works, what could be better and what you miss.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/en/feedback/trainers",
    languages: { nl: "/nl/feedback/trainers", en: "/en/feedback/trainers" },
  },
};

export default function FeedbackTrainersPageEn() {
  return (
    <PageLayout>
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">For trainers who rent</p>
            <h1 className="mb-3 text-3xl font-bold sm:text-4xl">What could be better about the studio?</h1>
            <p className="mb-8 text-muted-foreground">Five short questions, under a minute. Everything is optional except the score. Your answer helps decide what we improve.</p>
            <FeedbackForm audience="renter" locale="en" />
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
