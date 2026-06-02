import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { TrainerMatchQuiz } from "@/components/marketing/trainer-match-quiz";
import { Star } from "lucide-react";

/**
 * /nl/match-trainer — decision-paralysis killer for the 10-trainer roster.
 *
 * Shipped 2026-05-26 lead-cap optimization. Entry point linked from:
 *   - /nl/gratis-intake (alternative to TrainerChoiceGrid)
 *   - / homepage (header "Match je trainer" link — to be wired)
 *   - /nl/vind-jouw-personal-trainer (fallback link)
 *
 * No-index by design (paid traffic + organic both land via canonical
 * intake page; this is a tool, not an SEO surface).
 */

export const metadata: Metadata = {
  title: { absolute: "Match jezelf met je personal trainer — SculptClub" },
  description:
    "3 vragen, 30 seconden. We tonen je top-2 trainer-match uit 11 trainers in Jordaan. Eerste intake gratis · vrijblijvend.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/nl/match-trainer",
    languages: {
      nl: "/nl/match-trainer",
      en: "/en/match-trainer",
    },
  },
};

export default function MatchTrainerPage() {
  return (
    <PageLayout>
      <Section bg="default">
        <FadeIn>
          {/* Compact header — visitor came here to take action, not read marketing */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <Link
              href="/nl"
              className="inline-block mb-6"
              aria-label="Terug naar homepage"
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
              <span>op Google</span>
            </div>
          </div>

          {/* Quiz — handles intro → 3 questions → result */}
          <div className="max-w-2xl mx-auto">
            <TrainerMatchQuiz locale="nl" />
          </div>

          {/* Trust strip below the quiz — visible on result screen + intro */}
          <div className="mt-8 text-center text-xs text-muted-foreground max-w-lg mx-auto">
            <p>
              Privé studio · Egelantiersgracht 424 · Altijd opzegbaar · Eerste intake gratis · Antwoord <strong className="text-foreground font-semibold">meestal binnen 1 uur</strong> via WhatsApp
            </p>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
