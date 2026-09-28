"use client";

import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import type { Locale } from "@/config/site";

const steps = {
  nl: [
    {
      step: "01",
      title: "Plan je sessie",
      description:
        "Personal Training plan je direct met je trainer (WhatsApp of contactformulier). Open Gym en de studio boek je online, dat duurt 2 minuten.",
    },
    {
      step: "02",
      title: "Krijg toegang",
      description:
        "Voor PT regelt je trainer de studio en zorgt dat je binnen kunt. Voor Open Gym en studio ontvang je om 00:00 in de nacht ervoor een deurcode via WhatsApp. Er is geen receptie.",
    },
    {
      step: "03",
      title: "Train privé",
      description:
        "Je loopt naar binnen en begint. Kan je toch niet? Annuleren is altijd gratis.",
    },
  ],
  en: [
    {
      step: "01",
      title: "Plan your session",
      description:
        "Personal Training is arranged directly with your trainer (via WhatsApp or contact form). Open Gym and studio sessions are booked online, which takes 2 minutes.",
    },
    {
      step: "02",
      title: "Get access",
      description:
        "For PT your trainer arranges the studio and gets you in. For Open Gym and studio rental, you receive a door code via WhatsApp at midnight before your session. There's no reception desk.",
    },
    {
      step: "03",
      title: "Train privately",
      description:
        "Walk in and start. Can't make it after all? Cancelling is always free.",
    },
  ],
};

export function HowItWorks({ locale }: { locale: Locale }) {
  const items = steps[locale];
  const t =
    locale === "nl"
      ? { overline: "Hoe het werkt", title: "In 3 stappen aan de slag" }
      : { overline: "How it works", title: "Get started in 3 steps" };

  return (
    <Section>
      <SectionHeader overline={t.overline} title={t.title} />
      <div className="grid sm:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <FadeIn key={item.step} delay={i * 0.1}>
            <div className="relative">
              {/* Step number is decorative typography (matches title visual,
                  no semantic value beyond "this is step N" which the heading
                  order conveys). Lighthouse mobile audit 2026-05-17 flagged
                  contrast 1.14:1 — failing AA. aria-hidden marks as decorative
                  so screen readers skip it AND a11y audit no longer flags
                  contrast (decorative elements are exempt). */}
              <span
                className="text-6xl font-heading font-bold text-border/60 leading-none"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
