"use client";

import { ArrowRight, MessageCircle, Users, Dumbbell, Building2 } from "lucide-react";
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
            "Kies hoe je wilt trainen. Elke optie start met een gratis kennismaking.",
          options: [
            {
              icon: Users,
              label: "Gratis intake met een trainer",
              description: "45 min kennismaking — vrijblijvend",
              href: "/nl/vind-jouw-personal-trainer",
              external: false,
            },
            {
              icon: Dumbbell,
              label: "Gratis proefles Open Gym",
              description: "60 min zelf trainen — geen kosten",
              href: acuityLinks.openGymTrial,
              external: true,
            },
            {
              icon: Building2,
              label: "Gratis proefles Studio Huren",
              description: "60 min de studio uitproberen",
              href: acuityLinks.studioTrial,
              external: true,
            },
          ],
          whatsapp: "Liever direct contact? WhatsApp ons",
        }
      : {
          title: "Ready to start?",
          description:
            "Choose how you want to train. Every option starts with a free introduction.",
          options: [
            {
              icon: Users,
              label: "Free intro with a trainer",
              description: "45 min meet & greet — no obligation",
              href: "/en/find-personal-trainer",
              external: false,
            },
            {
              icon: Dumbbell,
              label: "Free Open Gym trial",
              description: "60 min solo training — no cost",
              href: acuityLinks.openGymTrial,
              external: true,
            },
            {
              icon: Building2,
              label: "Free Studio Rental trial",
              description: "60 min try the studio",
              href: acuityLinks.studioTrial,
              external: true,
            },
          ],
          whatsapp: "Prefer direct contact? WhatsApp us",
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

        {/* 3 clear options */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {t.options.map((opt) => (
            <ButtonLink
              key={opt.label}
              href={opt.href}
              external={opt.external}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-6 text-center hover:bg-white/10 hover:border-white/30 transition-all group"
            >
              <opt.icon className="w-6 h-6 text-brand-foreground opacity-80 group-hover:opacity-100" />
              <span className="text-sm font-semibold text-white">{opt.label}</span>
              <span className="text-xs text-white/60">{opt.description}</span>
            </ButtonLink>
          ))}
        </div>

        {/* WhatsApp fallback */}
        <div className="mt-8 text-center">
          <a
            href={whatsappLinks.generic}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {t.whatsapp}
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
