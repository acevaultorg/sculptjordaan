"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Dumbbell, Building2, MapPin, Clock } from "lucide-react";
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
      description:
        "Privé studio aan de gracht in de Jordaan. Drie manieren om te trainen — gratis intake, altijd opzegbaar.",
      ctas: [
        { label: "Vind Personal Trainer", href: "/nl/vind-jouw-personal-trainer", icon: Users },
        { label: "Huur de Studio", href: "/nl/boek-studio", icon: Building2 },
        { label: "Boek Open Gym", href: "/nl/boek-gym", icon: Dumbbell },
      ],
      trust: "Eerste intake gratis · Geen vaste contracten · 5.0 ★ Google",
      signals: {
        rating: "5.0 op Google",
        location: "Jordaan, Amsterdam",
        hours: "Dagelijks 06:30 – 22:00",
      },
    },
    en: {
      taglineMain: "PRIVATE GYM",
      taglineSub: "Your way. Your results.",
      tagline: "PRIVATE GYM — Your way. Your results.",
      subtitle: "Private Studio · Amsterdam Jordaan",
      description:
        "Private studio on the canal in the Jordaan. Three ways to train — free intro, cancel anytime.",
      ctas: [
        { label: "Find Personal Trainer", href: "/en/find-personal-trainer", icon: Users },
        { label: "Rent the Studio", href: "/en/book-studio", icon: Building2 },
        { label: "Book Open Gym", href: "/en/book-gym", icon: Dumbbell },
      ],
      trust: "First intro free · No lock-in contracts · 5.0 ★ Google",
      signals: {
        rating: "5.0 on Google",
        location: "Jordaan, Amsterdam",
        hours: "Daily 06:30 – 22:00",
      },
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

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="overline mb-4 !text-white/70 tracking-[0.18em]">{t.subtitle}</p>

          <h1 className="text-white">
            <span className="block text-[3rem] leading-[0.92] sm:text-7xl md:text-[6.5rem] lg:text-[9rem] xl:text-[11rem] font-bold tracking-[-0.05em] whitespace-nowrap">
              {t.taglineMain}
            </span>
            <span className="block mt-3 sm:mt-4 lg:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-white/85">
              {t.taglineSub}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/85 max-w-xl sm:max-w-2xl mx-auto leading-relaxed text-pretty">
            {t.description}
          </p>

          {/* 3 CTAs — all glass; primary Book lives in the header */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {t.ctas.map((cta, i) => (
              <ButtonLink
                key={cta.href}
                href={cta.href}
                size="lg"
                className="rounded-xl px-6 py-5 min-h-[48px] text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/25 backdrop-blur transition-all"
                onClick={() => trackHeroClick(cta.label, i + 1, locale)}
              >
                <cta.icon className="w-4 h-4" />
                {cta.label}
              </ButtonLink>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/60">{t.trust}</p>

          {/* Trust line: location · hours — single line, no chip overlap with WhatsApp FAB */}
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-white/75 pr-16 sm:pr-0">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
              {t.signals.location}
            </span>
            <span className="text-white/30" aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
              {t.signals.hours}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
