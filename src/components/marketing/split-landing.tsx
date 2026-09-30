"use client";

import Image from "next/image";
import Link from "next/link";
import { trackLandingClick } from "@/lib/tracking";
import type { Locale } from "@/config/site";

/**
 * /landing + /en/landing — one-screen split page for campaign traffic
 * (Instagram bio, TikTok, QR codes). Owner's brief 2026-09-30.
 *
 * Exactly one screen (100svh), no scroll, on phone and desktop:
 *   left / top     = personal trainers who rent the studio (evergreen, male photo)
 *   right / bottom = people who want to train (coral-orange, female photo)
 *
 * Colour + legibility: each photo gets a multiply tint in the half's colour and
 * then a dark scrim on top. The scrim alone makes a pure-white pixel under the
 * text land on a dark enough colour for white text to pass WCAG AA (≥ 4.5:1);
 * qa/landing/contrast.json holds the measured values from the render check.
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
  image: { src: string; alt: string; position: string };
};

export type SplitLandingCopy = {
  locale: Locale;
  homeHref: string;
  homeLabel: string;
  switchLang: { label: string; href: string; hrefLang: string };
  trainer: SplitHalf;
  client: SplitHalf;
};

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
}: {
  side: "trainer" | "client";
  half: SplitHalf;
  locale: Locale;
}) {
  const isTrainer = side === "trainer";
  const headingId = `landing-${side}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className={`relative isolate flex min-h-0 flex-col justify-center overflow-hidden px-6 sm:px-10 lg:px-16 ${
        isTrainer ? "bg-[#0E2A21] pt-16 pb-5 md:pt-24 md:pb-24" : "bg-[#8F2E0B] pt-5 pb-5 md:pt-24 md:pb-24"
      }`}
    >
      <Image
        src={half.image.src}
        alt={half.image.alt}
        fill
        preload
        sizes="(min-width: 768px) 50vw, 100vw"
        className="-z-30 object-cover"
        style={{ objectPosition: half.image.position }}
      />
      {/* Colour tint: multiply keeps the photo's light and shade, in the half's colour. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-20 mix-blend-multiply ${isTrainer ? "bg-[#2C6B52]" : "bg-[#F0592A]"}`}
      />
      {/* Scrim: darkest behind the text block, lighter toward the edges so the colour still reads. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 ${
          isTrainer
            ? "bg-[linear-gradient(180deg,rgba(4,20,15,0.62)_0%,rgba(4,20,15,0.70)_50%,rgba(4,20,15,0.78)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(58,14,0,0.50)_0%,rgba(58,14,0,0.56)_50%,rgba(58,14,0,0.66)_100%)]"
        }`}
      />

      <div className="mx-auto w-full max-w-md text-white md:mx-0 lg:max-w-lg">
        <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-white/90 sm:text-sm">
          {half.eyebrow}
        </p>
        <h2
          id={headingId}
          className="mt-1.5 font-heading text-[1.625rem] font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl md:mt-3 lg:text-5xl"
        >
          {half.headline}
        </h2>
        <p className="mt-2 text-[0.9375rem] leading-snug text-white/95 sm:text-base md:mt-4 md:text-lg">
          {half.support}
        </p>

        <Link
          href={half.cta.href}
          onClick={() => trackLandingClick(side, half.cta.href, locale)}
          className={`group mt-4 inline-flex min-h-[52px] w-full items-center justify-between gap-3 rounded-full bg-white px-6 text-base font-semibold shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-px hover:bg-white/90 hover:shadow-xl active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:w-auto sm:min-w-[260px] md:mt-8 md:min-h-[56px] md:text-lg ${
            isTrainer ? "text-[#0E2A21] focus-visible:ring-offset-[#0E2A21]" : "text-[#8F2E0B] focus-visible:ring-offset-[#8F2E0B]"
          }`}
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
                  className="inline-flex min-h-[44px] items-center rounded-full border border-white/70 bg-black/15 px-4 text-sm font-medium text-white transition duration-200 hover:border-white hover:bg-white/15 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
  return (
    <main
      id="main-content"
      className="relative grid h-[100svh] w-full grid-rows-2 overflow-hidden md:grid-cols-2 md:grid-rows-1"
    >
      <h1 className="sr-only">SculptClub</h1>

      {/* Logo (the file, never type) centred over the seam, plus a language switch. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-center px-4 pt-4 md:pt-7">
        <Link href={copy.homeHref} aria-label={copy.homeLabel} className="pointer-events-auto inline-flex min-h-[44px] items-center">
          <Image
            src="/images/logo-sculptclub.svg"
            alt="SculptClub"
            width={162}
            height={30}
            preload
            className="h-7 w-auto select-none invert drop-shadow md:h-9"
          />
        </Link>
        <Link
          href={copy.switchLang.href}
          hrefLang={copy.switchLang.hrefLang}
          className="pointer-events-auto absolute right-3 top-4 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full px-3 text-sm font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline md:right-6 md:top-7"
        >
          {copy.switchLang.label}
        </Link>
      </div>

      <Half side="trainer" half={copy.trainer} locale={copy.locale} />
      <Half side="client" half={copy.client} locale={copy.locale} />
    </main>
  );
}
