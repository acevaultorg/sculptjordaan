"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Dumbbell, Building2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { trackHeroClick } from "@/lib/tracking";
import type { Locale } from "@/config/site";

export function Hero({ locale }: { locale: Locale }) {
  const t = {
    nl: {
      subtitle: "Amsterdam ××× Jordaan",
      taglineSub: "Jouw manier. Jouw resultaat.",
      ctas: [
        { label: "Vind Personal Trainer", href: "/nl/vind-jouw-personal-trainer", icon: Users },
        { label: "Huur de Studio", href: "/nl/boek-studio", icon: Building2 },
        { label: "Boek Open Gym", href: "/nl/boek-gym", icon: Dumbbell },
      ],
      trust: "Eerste intake gratis · Geen contracten · Dagelijks 06:30–22:00 · 5.0 ★ Google",
    },
    en: {
      subtitle: "Amsterdam ××× Jordaan",
      taglineSub: "Your way. Your results.",
      ctas: [
        { label: "Find Personal Trainer", href: "/en/find-personal-trainer", icon: Users },
        { label: "Rent the Studio", href: "/en/book-studio", icon: Building2 },
        { label: "Book Open Gym", href: "/en/book-gym", icon: Dumbbell },
      ],
      trust: "First intro free · No contracts · Daily 06:30–22:00 · 5.0 ★ Google",
    },
  }[locale];

  return (
    <section className="relative overflow-hidden -mt-20 min-h-[90vh] sm:min-h-[88vh] lg:min-h-[92vh] flex flex-col">
      {/* Background image — minimal overlay so the gym stays visible.
          Text contrast comes from text-shadow on the motion container. */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/studio/studio-interior-1.jpeg"
          alt="SculptClub private personal training studio interior with professional equipment in Amsterdam Jordaan"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
      </div>

      {/* Inner container — flex column with top cluster anchored near top
          and bottom cluster anchored near bottom. Padding matches the nav
          height at top and gives breathing room at bottom. */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto max-w-6xl w-full px-4 sm:px-6 pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex-1 flex flex-col [text-shadow:_0_2px_20px_rgba(0,0,0,0.55)]"
        >
          {/* TOP CLUSTER — overline + h1 + taglineSub (tight group, pulled up) */}
          <div>
            <p className="overline mb-4 !text-white/85 tracking-[0.18em]">{t.subtitle}</p>

            <h1 className="text-white">
              {/* Hero headline — single line on all viewports 320px+.
                  clamp(1.875rem, 8vw, 4rem) = 30px → 64px (cap at 800px viewport).
                  Measured ratio: PRIVATE GYM = 9.09 × font-size at +0.12em tracking. */}
              <span className="block font-bold tracking-[0.12em] leading-[0.95] text-[clamp(1.875rem,8vw,4rem)]">
                PRIVATE GYM
              </span>
              <span className="block mt-4 sm:mt-5 text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-white/85">
                {t.taglineSub}
              </span>
            </h1>
          </div>

          {/* Flexible spacer — pushes CTAs to the bottom of the hero */}
          <div className="flex-1 min-h-[2rem]" aria-hidden="true" />

          {/* BOTTOM CLUSTER — 3 CTAs + trust line (pushed down) */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {t.ctas.map((cta, i) => (
                <ButtonLink
                  key={cta.href}
                  href={cta.href}
                  size="lg"
                  className="rounded-xl px-6 py-5 min-h-[52px] text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/25 backdrop-blur transition-all"
                  onClick={() => trackHeroClick(cta.label, i + 1, locale)}
                >
                  <cta.icon className="w-4 h-4" />
                  {cta.label}
                </ButtonLink>
              ))}
            </div>

            <p className="mt-5 text-xs text-white/70">{t.trust}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
