import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { FeedbackForm } from "@/components/marketing/feedback-form";
import { trainers } from "@/config/trainers";

/**
 * /nl/feedback : feedback form for people who train at SculptClub. Added 2026-09-21 (card mubc1udkwgp5rp).
 * Noindex by design: reached by direct link and QR code, not a search surface.
 * Answers are stored via functions/api/feedback.ts. Read them: npm run feedback:read.
 */

export const metadata: Metadata = {
  title: { absolute: "Feedback | SculptClub" },
  description: "Vertel ons in een minuut wat goed gaat, wat beter kan en welk materiaal je mist bij SculptClub.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/nl/feedback",
    languages: { nl: "/nl/feedback", en: "/en/feedback" },
  },
};

export default function FeedbackPageNl() {
  return (
    <PageLayout>
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Feedback</p>
            <h1 className="mb-3 text-3xl font-bold sm:text-4xl">Hoe vind je SculptClub?</h1>
            <p className="mb-8 text-muted-foreground">Vijf korte vragen, minder dan een minuut. Alles is optioneel behalve het cijfer. We lezen elk antwoord zelf.</p>
            <FeedbackForm audience="client" locale="nl" trainerNames={trainers.map((t) => t.name)} />
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
