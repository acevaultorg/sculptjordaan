"use client";

import Image from "next/image";
import { Users, Camera } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { trackHeroClick } from "@/lib/tracking";
import { getColor } from "@/lib/image-color-manifest";
import type { Locale } from "@/config/site";

const HERO_SRC = "/images/studio/training-barbell-squat.jpg";

export function Hero({ locale }: { locale: Locale }) {
  const t = {
    // Hero CTAs target the CONSUMER visitor (paid Google PT-search ads,
    // organic search, brand traffic). Both CTAs match operator funnel goals
    // 2026-05-16: "every new user should book try-out / book see-the-studio".
    //
    // Primary = trainer-search (matches highest-intent paid search keyword
    // "personal trainer Jordaan/Amsterdam"). Secondary = see-the-studio
    // gallery (was "Huur de Studio" → /studio-huren before 2026-05-16, which
    // routes ZZP-trainer audience — wrong destination for consumer visitor).
    //
    // ZZP studio-rental path remains exposed via TrainerSignalBand directly
    // below the hero + header nav "Studio Huren" / "Studio Rental".
    nl: {
      subtitle: "Amsterdam ××× Jordaan",
      taglineSub: "Jouw manier. Jouw resultaat.",
      ctas: [
        { label: "Vind Personal Trainer", href: "/nl/vind-jouw-personal-trainer", icon: Users, primary: true },
        { label: "Bekijk de studio", href: "/nl/studio", icon: Camera, primary: false },
      ],
      trust: "Eerste intake gratis · Geen contracten · Dagelijks 06:30–22:00 · 5.0 ★ Google",
    },
    en: {
      subtitle: "Amsterdam ××× Jordaan",
      taglineSub: "Your way. Your results.",
      ctas: [
        { label: "Find Personal Trainer", href: "/en/find-personal-trainer", icon: Users, primary: true },
        { label: "See the studio", href: "/en/studio", icon: Camera, primary: false },
      ],
      trust: "First intro free · No contracts · Daily 06:30–22:00 · 5.0 ★ Google",
    },
  }[locale];

  return (
    <section className="relative overflow-hidden -mt-20 min-h-[90vh] sm:min-h-[88vh] lg:min-h-[92vh] flex flex-col">
      {/* Background image — minimal overlay so the gym stays visible.
          Text contrast comes from text-shadow on the hero container.
          backgroundColor renders BEFORE the image fetches: zero-paint-cost
          dominant-color preview (matched to image via build-time manifest).
          Replaces the reverted blur-SVG approach (see
          docs/PERF-EXPERIMENTS-2026-05-07.md). */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: getColor(HERO_SRC) }}>
        <Image
          src={HERO_SRC}
          alt="Personal training session at SculptClub private gym in Amsterdam Jordaan — barbell squat in Rogue power rack"
          fill
          className="object-cover [object-position:center_25%] [transform:translateZ(0)]"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />
      </div>

      {/* Inner container — flex column with top cluster anchored near top
          and bottom cluster anchored near bottom. Padding matches the nav
          height at top and gives breathing room at bottom. */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto max-w-6xl w-full px-4 sm:px-6 pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16">
        <div
          className="text-center flex-1 flex flex-col [text-shadow:_0_2px_24px_rgba(0,0,0,0.9),_0_0_12px_rgba(0,0,0,0.75)] [animation:hero-content-fade-in_0.6s_ease-out]"
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

          {/* BOTTOM CLUSTER — CTAs + trust line (pushed down) */}
          <div>
            <div className="flex flex-col items-stretch sm:flex-row sm:flex-wrap sm:justify-center gap-3 max-w-2xl mx-auto">
              {t.ctas.map((cta, i) => (
                <ButtonLink
                  key={cta.href}
                  href={cta.href}
                  size="lg"
                  className={
                    cta.primary
                      ? "rounded-xl px-6 py-5 min-h-[52px] text-sm font-semibold bg-brand hover:bg-brand-dark text-white border border-brand transition-all shadow-brand-lg [text-shadow:none]"
                      : "rounded-xl px-6 py-5 min-h-[52px] text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/25 backdrop-blur transition-all [text-shadow:none]"
                  }
                  onClick={() => trackHeroClick(cta.label, i + 1, locale)}
                >
                  <cta.icon className="w-4 h-4" />
                  {cta.label}
                </ButtonLink>
              ))}
            </div>

            <p className="mt-5 text-center text-xs text-white/70">{t.trust}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
