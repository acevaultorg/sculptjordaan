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
      tagline: "Jouw gym. Jouw manier. Jouw resultaat.",
      subtitle: "Privé Personal Training Studio — Amsterdam Jordaan",
      description:
        "Privé studio aan de gracht. Personal training vanaf €45/sessie. Open Gym vanaf €29/4 weken. Studio huren vanaf €12/uur. Altijd opzegbaar.",
      ctas: [
        { label: "Vind je Personal Trainer", href: "/nl/vind-jouw-personal-trainer", icon: Users },
        { label: "Huur de Studio", href: "/nl/boek-studio", icon: Building2 },
        { label: "Boek Open Gym", href: "/nl/boek-gym", icon: Dumbbell },
      ],
      trust: "Eerste intake gratis · Geen vaste contracten · 5.0 ★ Google",
    },
    en: {
      tagline: "Your gym. Your way. Your results.",
      subtitle: "Private Personal Training Studio — Amsterdam Jordaan",
      description:
        "Private studio on the canal. Personal training from €45/session. Open Gym from €29/4 weeks. Studio rental from €12/hour. Cancel anytime.",
      ctas: [
        { label: "Find your Personal Trainer", href: "/en/find-personal-trainer", icon: Users },
        { label: "Rent the Studio", href: "/en/book-studio", icon: Building2 },
        { label: "Book Open Gym", href: "/en/book-gym", icon: Dumbbell },
      ],
      trust: "First intro free · No lock-in contracts · 5.0 ★ Google",
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
          <p className="overline mb-4 !text-white/70">{t.subtitle}</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95] text-white">
            {t.tagline}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>

          {/* 3 CTAs — primary solid, secondary glass */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
            {t.ctas.map((cta, i) => (
              <ButtonLink
                key={cta.href}
                href={cta.href}
                size="lg"
                className={
                  i === 0
                    ? "rounded-xl px-6 py-5 min-h-[48px] text-sm font-semibold bg-brand hover:bg-brand-dark text-white transition-all shadow-lg"
                    : "rounded-xl px-6 py-5 min-h-[48px] text-sm font-semibold border border-white/40 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 hover:border-white/60 transition-all"
                }
                onClick={() => trackHeroClick(cta.label, i + 1, locale)}
              >
                <cta.icon className="w-4 h-4" />
                {cta.label}
              </ButtonLink>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/60">{t.trust}</p>
        </motion.div>
      </div>
    </section>
  );
}
