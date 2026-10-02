"use client";

import Image from "next/image";
import Link from "next/link";
import { ArtDirectedPicture } from "@/components/ui/art-directed-picture";
import type { ArtDirectedPictureId } from "@/lib/art-directed-picture-manifest";
import { trackLandingClick } from "@/lib/tracking";
import type { Locale } from "@/config/site";

/**
 * /landing + /en/landing — one-screen split page for campaign traffic
 * (Instagram bio, TikTok, QR codes). Owner's brief 2026-09-30, v3 2026-10-01.
 *
 * Exactly one screen (100svh), no scroll, on phone and desktop:
 *   left / top     = personal trainers who rent the studio (deep navy → cobalt)
 *   right / bottom = people who want to train (deep crimson → brick red)
 *
 * Colour + legibility (v4, 2026-10-02, Paulo: "let some color come through"): the photos keep
 * their natural colour (variants are capped at 70% brightness when generated). A soft hue
 * wash (mix-blend-color, 32%) carries the blue / red identity and a scrim in the same dark
 * hue holds white text at WCAG AA or better over the brightest pixel. v1-v3 were a hard
 * duotone at 7:1; qa/landing-v4/results.json holds the values measured on the rendered
 * pixels by scripts/qa-landing.mjs (min 4.98:1).
 *
 * Photos: the studio's own (no stock), served by <ArtDirectedPicture> as
 * AVIF/WebP/JPEG with a square crop for the phone half and a portrait crop
 * for the desktop half. Only the first half's photo is fetchpriority=high.
 *
 * All links are internal on purpose: the global Acuity/WhatsApp click listener
 * in analytics.tsx fires Ads conversions on those, and a routing page must not
 * count as a lead. The only events here are landing_trainer_click /
 * landing_client_click (GA4, no personal data).
 */

export type SplitHalf = {
  eyebrow: string;
  headline: string;
  support: string;
  cta: { label: string; href: string };
  pills?: { label: string; href: string }[];
  image: {
    /** Entry in scripts/generate-art-directed-pictures.mjs. */
    picture: ArtDirectedPictureId;
    alt: string;
    /** object-position: `base` for the phone crop, `md` for the desktop crop. */
    position: { base: string; md: string };
  };
};

export type SplitLandingCopy = {
  locale: Locale;
  homeHref: string;
  homeLabel: string;
  /** Label for the NL | EN toggle group, read by screen readers. */
  langLabel: string;
  /** The other language's page. The current language is shown, not linked. */
  switchLang: { label: string; href: string; hrefLang: string; ariaLabel: string };
  trainer: SplitHalf;
  client: SplitHalf;
};

/**
 * Per-half palette. Trainer = navy base, cobalt tint (the cobalt is SculptClub's
 * pre-2026-05 brand blue #134DE1, deepened). Client = oxblood base, crimson tint.
 * `ink` is the button text on white: 15:1 (navy) and 10:1 (crimson).
 * Duotone ceiling (white photo pixel = screen(tint, base)): #275EDE for blue and
 * #C72B3D for red, 5.6:1 and 5.5:1 against white before the scrim. The scrim
 * (30 to 45% of base where the text sits) brings that ceiling above 7:1.
 */
const THEME = {
  trainer: {
    base: "bg-[#0A1633]",
    tint: "bg-[#1E4FD6]",
    scrim:
      "bg-[linear-gradient(180deg,rgba(10,22,51,0.42)_0%,rgba(10,22,51,0.44)_45%,rgba(10,22,51,0.56)_100%)]",
    ink: "text-[#0A1633] focus-visible:ring-offset-[#0A1633]",
    rule: "bg-[#8FB0FF]",
  },
  client: {
    base: "bg-[#3F0910]",
    tint: "bg-[#B42330]",
    scrim:
      "bg-[linear-gradient(180deg,rgba(63,9,16,0.42)_0%,rgba(63,9,16,0.44)_45%,rgba(63,9,16,0.56)_100%)]",
    ink: "text-[#9B1620] focus-visible:ring-offset-[#3F0910]",
    rule: "bg-[#FFB0A8]",
  },
} as const;

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function Half({
  side,
  half,
  locale,
  priority,
}: {
  side: "trainer" | "client";
  half: SplitHalf;
  locale: Locale;
  /** First visible photo (top on phones, left on desktop) gets fetchpriority=high; the other is lazy. */
  priority: boolean;
}) {
  const isTrainer = side === "trainer";
  const t = THEME[side];
  const headingId = `landing-${side}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className={`relative isolate flex min-h-0 flex-col justify-center overflow-hidden px-6 sm:px-10 md:justify-start md:pt-[30vh] md:pb-16 lg:px-16 ${t.base} ${
        isTrainer ? "pt-[4.25rem] pb-6" : "pt-6 pb-6"
      }`}
    >
      <ArtDirectedPicture
        id={half.image.picture}
        alt={half.image.alt}
        sizes="(min-width: 768px) 50vw, 100vw"
        priority={priority}
        position={half.image.position}
        className="absolute inset-0 -z-40 h-full w-full object-cover"
      />
      {/* v4 (2026-10-02, Paulo): the photo keeps its natural colour. A soft hue wash
          (mix-blend-color keeps the photo's lightness and only borrows the hue, at
          low opacity) carries the blue / red identity without turning skin into plastic. */}
      <div aria-hidden="true" className={`absolute inset-0 -z-20 mix-blend-color opacity-[0.32] ${t.tint}`} />
      {/* Scrim in the same hue, deeper toward the bottom: holds the text at 7:1 (the photo's own
          brightest pixel is capped when the variants are generated). */}
      <div aria-hidden="true" className={`absolute inset-0 -z-10 ${t.scrim}`} />

      <div className="mx-auto w-full max-w-md text-white md:mx-0 lg:max-w-lg">
        <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white sm:text-[0.8125rem]">
          <span aria-hidden="true" className={`h-[2px] w-5 rounded-full ${t.rule}`} />
          {half.eyebrow}
        </p>
        <h2
          id={headingId}
          className="mt-2 font-heading text-[1.75rem] font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-4xl md:mt-4 lg:text-5xl"
        >
          {half.headline}
        </h2>
        <p className="mt-2 text-[0.9375rem] leading-snug text-white text-pretty sm:text-base md:mt-4 md:text-lg">
          {half.support}
        </p>

        <Link
          href={half.cta.href}
          onClick={() => trackLandingClick(side, half.cta.href, locale)}
          className={`group mt-4 inline-flex min-h-[56px] w-full items-center justify-between gap-3 rounded-full bg-white px-6 text-[1.0625rem] font-semibold shadow-lg shadow-black/25 transition duration-200 hover:-translate-y-px hover:bg-white/90 hover:shadow-xl active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:w-auto sm:min-w-[280px] md:mt-8 md:text-lg ${t.ink}`}
        >
          <span>{half.cta.label}</span>
          <ArrowIcon />
        </Link>

        {half.pills && half.pills.length > 0 && (
          <ul className="mt-2.5 flex flex-wrap gap-2 md:mt-4">
            {half.pills.map((pill) => (
              <li key={pill.href}>
                <Link
                  href={pill.href}
                  onClick={() => trackLandingClick(side, pill.href, locale)}
                  className="inline-flex min-h-[44px] items-center rounded-full border border-white/60 bg-black/20 px-4 text-sm font-medium text-white transition duration-200 hover:border-white hover:bg-white/15 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {pill.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export function SplitLanding({ copy }: { copy: SplitLandingCopy }) {
  const current = copy.locale.toUpperCase();
  const switchFirst = copy.locale === "en"; // always show NL | EN in that order

  const currentChip = (
    <span aria-current="page" className="inline-flex h-11 min-w-[44px] items-center justify-center">
      <span className="inline-flex h-8 min-w-[2.25rem] items-center justify-center rounded-full bg-white px-2.5 text-[#0A1633]">
        {current}
      </span>
    </span>
  );
  const switchChip = (
    <Link
      href={copy.switchLang.href}
      hrefLang={copy.switchLang.hrefLang}
      lang={copy.switchLang.hrefLang}
      aria-label={copy.switchLang.ariaLabel}
      className="group inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <span className="inline-flex h-8 min-w-[2.25rem] items-center justify-center rounded-full border border-white/50 px-2.5 text-white transition-colors group-hover:border-white group-hover:bg-white/15">
        {copy.switchLang.label}
      </span>
    </Link>
  );

  return (
    <main
      id="main-content"
      className="relative grid h-[100svh] w-full grid-rows-2 overflow-hidden md:grid-cols-2 md:grid-rows-1"
    >
      <h1 className="sr-only">SculptClub</h1>

      {/* Top bar on the content's own left edge: logo (the file, never type) + NL | EN toggle. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-3 sm:px-10 md:pt-6 lg:px-16">
        <Link
          href={copy.homeHref}
          aria-label={copy.homeLabel}
          className="pointer-events-auto -ml-1 inline-flex min-h-[44px] items-center rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Image
            src="/images/logo-sculptclub.svg"
            alt="SculptClub"
            width={162}
            height={30}
            preload
            className="h-6 w-auto select-none brightness-0 invert md:h-8"
          />
        </Link>
        <nav
          aria-label={copy.langLabel}
          className="pointer-events-auto -mr-1.5 flex items-center text-xs font-semibold tracking-wide"
        >
          {switchFirst ? switchChip : currentChip}
          {switchFirst ? currentChip : switchChip}
        </nav>
      </div>

      <Half side="trainer" half={copy.trainer} locale={copy.locale} priority />
      <Half side="client" half={copy.client} locale={copy.locale} priority={false} />
    </main>
  );
}
