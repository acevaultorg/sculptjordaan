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
      subtitle: "Amsterdam Jordaan",
      taglineSub: "Jouw manier. Jouw resultaat.",
      ctas: [
        { label: "Vind Personal Trainer", href: "/nl/vind-jouw-personal-trainer", icon: Users },
        { label: "Huur de Studio", href: "/nl/boek-studio", icon: Building2 },
        { label: "Boek Open Gym", href: "/nl/boek-gym", icon: Dumbbell },
      ],
      trust: "Eerste intake gratis · Geen contracten · Dagelijks 06:30–22:00 · 5.0 ★ Google",
    },
    en: {
      subtitle: "Amsterdam Jordaan",
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
    <section className="relative overflow-hidden -mt-20 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
      {/* Background image with strong dark overlay for text readability */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/studio/studio-interior-1.jpeg"
          alt="SculptClub private personal training studio interior with professional equipment in Amsterdam Jordaan"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="overline mb-5 !text-white/70 tracking-[0.18em]">{t.subtitle}</p>

          <h1 className="text-white">
            {/* Hero headline — single line on all viewports 320px+.
                SculptClub typography guidelines (docs/TYPOGRAPHY-GUIDELINES.md).
                Measured ratio: PRIVATE GYM = 9.09 × font-size at +0.12em tracking.
                clamp(1.875rem, 8vw, 4rem) = 30px → 64px (cap at 800px viewport).
                Verified with DOM probe:
                - 320px:  30px font × 9.09 = 273px text in 288 container (fits +15)
                - 375px:  30px font × 9.09 = 273px text in 343 container (fits +70)
                - 640px:  51.2px font × 9.09 = 465px text in 592 container (fits +127)
                - 768px:  61.44px font × 9.09 = 559px text in 720 container (fits +161)
                - 1280px: 64px (capped) × 9.09 = 582px text in 1104 container (45% vp)
                - 1728px: 64px (capped) × 9.09 = 582px text in 1104 container (34% vp)
                No whitespace-nowrap — allows graceful wrap on <320px edge viewports. */}
            <span className="block font-bold tracking-[0.12em] leading-[0.95] text-[clamp(1.875rem,8vw,4rem)]">
              PRIVATE GYM
            </span>
            <span className="block mt-5 sm:mt-6 lg:mt-7 text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-white/85">
              {t.taglineSub}
            </span>
          </h1>

          {/* 3 CTAs — all equal weight, Apple-style */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
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

          {/* Single consolidated trust line — replaces old 3-row stack */}
          <p className="mt-6 text-xs text-white/70">{t.trust}</p>
        </motion.div>
      </div>
    </section>
  );
}
