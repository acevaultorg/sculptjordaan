"use client";

import { MessageCircle, Users, Dumbbell, Building2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Section, FadeIn } from "@/components/sections/section";
import { acuityLinks, whatsappLinks } from "@/config/acuity";
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
              description: "45 min · gratis · vrijblijvend",
              href: "/nl/boek-trainer",
              external: false,
            },
            {
              icon: Dumbbell,
              label: "Proefles Open Gym",
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
          whatsapp: "Liever direct contact? WhatsApp ons",
        }
      : {
          title: "Try it free",
          description:
            "Every option starts at zero cost. Try with no obligation, cancel anytime.",
          options: [
            {
              icon: Users,
              label: "Intro with a trainer",
              description: "45 min · free · no obligation",
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

        {/* 3 clear options — primary first, glass for the rest */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {t.options.map((opt, i) => {
            const isPrimary = i === 0;
            return (
              <ButtonLink
                key={opt.label}
                href={opt.href}
                external={opt.external}
                className={
                  isPrimary
                    ? "h-auto min-h-[9rem] flex flex-col items-center justify-center gap-2 whitespace-normal rounded-2xl bg-brand hover:bg-brand-dark text-white px-5 py-6 text-center shadow-brand-md hover:shadow-brand-lg transition-all group"
                    : "h-auto min-h-[9rem] flex flex-col items-center justify-center gap-2 whitespace-normal rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm px-5 py-6 text-center hover:bg-white/15 hover:border-white/40 transition-all group"
                }
              >
                <opt.icon className={isPrimary ? "w-6 h-6 text-white" : "w-6 h-6 text-white/85"} />
                <span className="text-sm font-semibold text-white">{opt.label}</span>
                <span className={isPrimary ? "text-xs text-white/85" : "text-xs text-white/65"}>
                  {opt.description}
                </span>
              </ButtonLink>
            );
          })}
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
