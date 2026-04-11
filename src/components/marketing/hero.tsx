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
      taglineMain: "PRIVATE GYM",
      taglineSub: "Jouw manier. Jouw resultaat.",
      tagline: "PRIVATE GYM — Jouw manier. Jouw resultaat.",
      subtitle: "Privé Studio · Amsterdam Jordaan",
      ctas: [
        { label: "Vind Personal Trainer", href: "/nl/vind-jouw-personal-trainer", icon: Users },
        { label: "Huur de Studio", href: "/nl/boek-studio", icon: Building2 },
        { label: "Boek Open Gym", href: "/nl/boek-gym", icon: Dumbbell },
      ],
      trust: "Eerste intake gratis · Geen contracten · Dagelijks 06:30–22:00 · 5.0 ★ Google",
    },
    en: {
      taglineMain: "PRIVATE GYM",
      taglineSub: "Your way. Your results.",
      tagline: "PRIVATE GYM — Your way. Your results.",
      subtitle: "Private Studio · Amsterdam Jordaan",
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
            <span className="block font-bold tracking-[-0.05em] leading-[0.88] text-[clamp(2.75rem,14vw,9.5rem)]">
              {t.taglineMain}
            </span>
            <span className="block mt-4 sm:mt-5 lg:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-white/85">
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
