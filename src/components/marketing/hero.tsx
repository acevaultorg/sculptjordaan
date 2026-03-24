"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Dumbbell, Building2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import type { Locale } from "@/config/site";

export function Hero({ locale }: { locale: Locale }) {
  const t = {
    nl: {
      tagline: "Jouw gym. Jouw manier. Jouw resultaat.",
      subtitle: "Privé Personal Training Studio — Amsterdam Jordaan",
      description:
        "Een private gym aan de gracht in de Jordaan. Train met een personal trainer, train zelfstandig of huur de studio. Geen abonnement, geen drukte — alleen jij en je training.",
      ctas: [
        { label: "Vind je Trainer", href: "/nl/vind-jouw-personal-trainer", icon: Users },
        { label: "Train Zelfstandig", href: "/nl/open-gym", icon: Dumbbell },
        { label: "Studio Huren", href: "/nl/studio-huren", icon: Building2 },
      ],
    },
    en: {
      tagline: "Your gym. Your way. Your results.",
      subtitle: "Private Personal Training Studio — Amsterdam Jordaan",
      description:
        "A private gym on the canal in the Jordaan. Train with a personal trainer, train independently or rent the studio. No membership, no crowds — just you and your training.",
      ctas: [
        { label: "Find your Trainer", href: "/en/find-personal-trainer", icon: Users },
        { label: "Train Solo", href: "/en/open-gym", icon: Dumbbell },
        { label: "Rent the Studio", href: "/en/studio-rental", icon: Building2 },
      ],
    },
  }[locale];

  return (
    <section className="relative overflow-hidden -mt-20 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
      {/* Background image with strong dark overlay for text readability */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/gym-entrance.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="overline mb-4 !text-white/70">{t.subtitle}</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95] text-white">
            {t.tagline}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>

          {/* 3 CTAs — all clearly visible on dark background */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {t.ctas.map((cta) => (
              <ButtonLink
                key={cta.href}
                href={cta.href}
                size="lg"
                className="rounded-xl px-6 py-5 min-h-[48px] text-sm font-semibold border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all"
              >
                <cta.icon className="mr-2 w-4 h-4" />
                {cta.label}
              </ButtonLink>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
