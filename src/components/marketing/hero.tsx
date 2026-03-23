"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { ctaButtons } from "@/config/acuity";
import type { Locale } from "@/config/site";

export function Hero({ locale }: { locale: Locale }) {
  const cta = ctaButtons.hero[locale];
  const t = {
    nl: {
      tagline: "Jouw gym. Jouw manier. Jouw resultaat.",
      subtitle: "Boutique Personal Training — Amsterdam Jordaan",
      description:
        "Privé personal training studio in het hart van de Jordaan. Train met een expert trainer, solo in Open Gym, of huur de studio voor je eigen klanten. Geen abonnement. Geen drukte. Geen contracten.",
    },
    en: {
      tagline: "Your gym. Your way. Your results.",
      subtitle: "Boutique Personal Training — Amsterdam Jordaan",
      description:
        "Private personal training studio in the heart of the Jordaan. Train with an expert trainer, solo in Open Gym, or rent the studio for your own clients. No membership. No crowds. No contracts.",
    },
  }[locale];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="overline mb-4">{t.subtitle}</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95]">
            {t.tagline}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <ButtonLink
              href={cta.primary.href}
              external
              size="lg"
              className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
            >
              {cta.primary.label}
              <ArrowRight className="ml-2 w-4 h-4" />
            </ButtonLink>

            <ButtonLink
              href={cta.secondary.href}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold"
            >
              {cta.secondary.label}
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
