"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Section, FadeIn } from "@/components/sections/section";
import { acuityLinks, whatsappLinks } from "@/config/acuity";
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            {t.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <ButtonLink
              href={acuityLinks.generic}
              external
              size="lg"
              className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
            >
              {t.primary}
              <ArrowRight className="ml-2 w-4 h-4" />
            </ButtonLink>
            <ButtonLink
              href={whatsappLinks.generic}
              external
              size="lg"
              className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border border-white/30 text-white bg-white/10 hover:bg-white/20 transition-all"
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
