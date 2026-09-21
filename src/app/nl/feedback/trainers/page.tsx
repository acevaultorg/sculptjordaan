import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { FeedbackForm } from "@/components/marketing/feedback-form";

/**
 * /nl/feedback/trainers : feedback form for trainers who rent the studio. Added 2026-09-21 (card mubc1udkwgp5rp).
 * Noindex by design: reached by direct link and QR code, not a search surface.
 * Answers are stored via functions/api/feedback.ts. Read them: npm run feedback:read.
 */

export const metadata: Metadata = {
  title: { absolute: "Feedback voor trainers | SculptClub" },
  description: "Voor trainers die de studio huren: vertel ons in een minuut wat goed gaat, wat beter kan en wat je mist.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/nl/feedback/trainers",
    languages: { nl: "/nl/feedback/trainers", en: "/en/feedback/trainers" },
  },
};

export default function FeedbackTrainersPageNl() {
  return (
    <PageLayout>
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Voor trainers die huren</p>
            <h1 className="mb-3 text-3xl font-bold sm:text-4xl">Wat kan er beter aan de studio?</h1>
            <p className="mb-8 text-muted-foreground">Vijf korte vragen, minder dan een minuut. Alles is optioneel behalve het cijfer. Jouw antwoord bepaalt mee wat we verbeteren.</p>
            <FeedbackForm audience="renter" locale="nl" />
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
