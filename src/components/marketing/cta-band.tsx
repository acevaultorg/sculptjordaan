"use client";

import { Users, Dumbbell, Building2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Section, FadeIn } from "@/components/sections/section";
import { acuityLinks } from "@/config/acuity";
import type { Locale } from "@/config/site";

export function CtaBand({ locale }: { locale: Locale }) {
  const t =
    locale === "nl"
      ? {
          title: "Probeer het gratis",
          description:
            "Elke optie begint zonder kosten. Probeer vrijblijvend, altijd opzegbaar.",
          options: [
            {
              icon: Users,
              label: "Intake met een trainer",
              description: "gratis · vrijblijvend",
              href: "/nl/boek-trainer",
              external: false,
            },
            {
              icon: Dumbbell,
              label: "Probeersessie Open Gym",
              description: "60 min · gratis · zelf trainen",
              href: acuityLinks.openGymTrial,
              external: true,
            },
            {
              icon: Building2,
              label: "Rondleiding Studio",
              description: "15 min · gratis · kijk of het past",
              href: acuityLinks.studioTrial,
              external: true,
            },
          ],
          // whatsappLabel + callLabel removed 2026-05-27 — sticky lead
          // bar now owns WhatsApp + Phone (no duplicate in CtaBand).
        }
      : {
          title: "Try it free",
          description:
            "Every option starts at zero cost. Try with no obligation, cancel anytime.",
          options: [
            {
              icon: Users,
              label: "Intro with a trainer",
              description: "free · no obligation",
              href: "/en/book-trainer",
              external: false,
            },
            {
              icon: Dumbbell,
              label: "Open Gym trial",
              description: "60 min · free · train solo",
              href: acuityLinks.openGymTrial,
              external: true,
            },
            {
              icon: Building2,
              label: "Studio Tour",
              description: "15 min · free · see if it fits",
              href: acuityLinks.studioTrial,
              external: true,
            },
          ],
          // see NL comment.
        };

  return (
    <Section bg="dark">
      <FadeIn>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* 3 equal-weight option cards — UX audit 2026-05-27 per operator
            directive "too many primary CTA colors". Previously card #1
            (Intake) was orange-filled, competing with hero PT-orange +
            sticky-bar WhatsApp-orange (3 orange anchors visible on mobile
            at once = decision-paralysis + color-noise). Now all 3 cards
            use the same glass-outline treatment so the user picks by
            CONTENT not by COLOR. The orange brand-anchor is reserved
            for the hero PT-button (only top-of-page primary). Sticky bar
            (mobile) and per-page hero buttons retain the orange CTA
            convention so the brand color still signals "primary action"
            — just no longer at 3 stacked positions on the same viewport.

            The WhatsApp + Phone button-pair below the cards (shipped
            2026-05-26) was REMOVED in the same audit — the fixed sticky
            lead bar already provides WhatsApp + Phone in every mobile
            viewport, and CtaBand visitors on desktop reach the in-page
            content anyway. Removing the duplicate cuts CtaBand from 5
            actions to 3 — cleaner choice architecture. */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {t.options.map((opt) => (
            <ButtonLink
              key={opt.label}
              href={opt.href}
              external={opt.external}
              className="h-auto min-h-[9rem] flex flex-col items-center justify-center gap-2 whitespace-normal rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm px-5 py-6 text-center hover:bg-white/15 hover:border-white/40 transition-all group"
            >
              <opt.icon className="w-6 h-6 text-brand" />
              <span className="text-sm font-semibold text-white">
                {opt.label}
              </span>
              <span className="text-xs text-white/65">
                {opt.description}
              </span>
            </ButtonLink>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
