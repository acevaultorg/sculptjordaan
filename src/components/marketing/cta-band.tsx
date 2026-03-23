"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Section, FadeIn } from "@/components/sections/section";
import { ctaButtons } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/site";

export function CtaBand({ locale }: { locale: Locale }) {
  const t =
    locale === "nl"
      ? {
          title: "Klaar om te beginnen?",
          description:
            "Plan een gratis intake met een van onze trainers, boek je eerste Open Gym sessie, of neem contact met ons op via WhatsApp.",
          primary: "Boek Gratis Proefles",
          whatsapp: "WhatsApp ons",
        }
      : {
          title: "Ready to start?",
          description:
            "Book a free intro with one of our trainers, schedule your first Open Gym session, or reach out via WhatsApp.",
          primary: "Book Free Trial",
          whatsapp: "WhatsApp us",
        };

  return (
    <Section bg="dark">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
            {t.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <ButtonLink
              href={ctaButtons.hero[locale].primary.href}
              external
              size="lg"
              className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
            >
              {t.primary}
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
              {t.whatsapp}
            </ButtonLink>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
