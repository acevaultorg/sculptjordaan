"use client";

import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import type { Locale } from "@/config/site";

const steps = {
  nl: [
    {
      step: "01",
      title: "Kies je pad",
      description:
        "Personal Training, Open Gym of Studio Huren — kies wat bij jou past. Plan een gratis intake of boek direct.",
    },
    {
      step: "02",
      title: "Start met trainen",
      description:
        "Ontvang je persoonlijke deurcode en begin met trainen. Privé, professioneel, op jouw schema.",
    },
    {
      step: "03",
      title: "Zie resultaat",
      description:
        "Consistentie in een omgeving die voor jou werkt. Geen drukte, geen wachten, puur focus op jouw doel.",
    },
  ],
  en: [
    {
      step: "01",
      title: "Choose your path",
      description:
        "Personal Training, Open Gym or Studio Rental — choose what suits you. Book a free intro or start directly.",
    },
    {
      step: "02",
      title: "Start training",
      description:
        "Receive your personal door code and start training. Private, professional, on your schedule.",
    },
    {
      step: "03",
      title: "See results",
      description:
        "Consistency in an environment that works for you. No crowds, no waiting, pure focus on your goal.",
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
              <span className="text-6xl font-heading font-bold text-border/60 leading-none">
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
