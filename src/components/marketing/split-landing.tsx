"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/layout/whatsapp-button";
import { ArtDirectedPicture } from "@/components/ui/art-directed-picture";
import type { ArtDirectedPictureId } from "@/lib/art-directed-picture-manifest";
import { trackLandingClick } from "@/lib/tracking";
import { siteConfig, type Locale } from "@/config/site";

/**
 * /landing + /en/landing — one-screen split page for campaign traffic
 * (Instagram bio, TikTok, QR codes). Owner's brief 2026-09-30, v3 2026-10-01.
 *
 * One screen (100svh) on phone and desktop, with a minimum height on small
 * phones so the copy and contact controls stay readable without overlapping:
 *   left / top     = personal trainers who rent the studio (deep navy → cobalt)
 *   right / bottom = people who want to train (deep crimson → brick red)
 *
 * Paulo's 2026-10-04 proposal: centred logo, language left, menu right,
 * shorter copy, rental shortcut, address and WhatsApp in the lower half.
 * The 20% hue wash preserves more natural photo colour; a mostly neutral,
 * darker scrim behind the copy keeps the white text readable.
 *
 * Photos: the studio's own (no stock), served by <ArtDirectedPicture> as
 * AVIF/WebP/JPEG with a square crop for the phone half and a portrait crop
 * for the desktop half. Only the first half's photo is fetchpriority=high.
 *
 * Routing links stay internal and use landing_trainer_click / landing_client_click.
 * The owner's requested WhatsApp contact is the single external contact action;
 * its existing global click listener handles contact tracking.
 */

export type SplitHalf = {
  eyebrow: string;
  headline: string;
  support: string;
  cta: { label: string; href: string };
  pills?: { label: string; href: string }[];
  /** Where the header menu sends this audience (the info page); defaults to the main CTA. */
  menuHref?: string;
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
 * A subtle colour wash keeps the original photos visible, with a neutral
 * scrim behind the white copy rather than a strong duotone treatment.
 */
const THEME = {
  trainer: {
    base: "bg-[#0A1633]",
    tint: "bg-[#1E4FD6]",
    scrim:
      "bg-[linear-gradient(180deg,rgba(7,14,25,0.16)_0%,rgba(7,14,25,0.30)_35%,rgba(7,14,25,0.34)_65%,rgba(7,14,25,0.24)_100%)]",
    ink: "text-[#0A1633] focus-visible:ring-offset-[#0A1633]",
    rule: "bg-[#8FB0FF]",
  },
  client: {
    base: "bg-[#3F0910]",
    tint: "bg-[#B42330]",
    scrim:
      "bg-[linear-gradient(180deg,rgba(34,10,12,0.20)_0%,rgba(34,10,12,0.34)_35%,rgba(34,10,12,0.42)_65%,rgba(34,10,12,0.30)_100%)]",
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
      className={`relative isolate flex min-h-0 flex-col overflow-hidden px-6 sm:px-10 md:pt-28 md:pb-36 lg:px-16 ${t.base} ${
        isTrainer ? "pt-16 pb-4" : "pt-4 pb-28"
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
      {/* Preserve the photo's luminance and natural skin tones under a softer hue wash. */}
      <div aria-hidden="true" className={`absolute inset-0 -z-20 mix-blend-color opacity-[0.16] ${t.tint}`} />
      {/* More shade behind the copy, less over the rest of the photograph. */}
      <div aria-hidden="true" className={`absolute inset-0 -z-10 ${t.scrim}`} />

      {/* Phone: copy above the buttons. Desktop (Paulo 2026-10-04, muu5d6dn1ypv53): copy in the vertical
          middle of the photo, buttons on the bottom line of both halves. */}
      <div className={`mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col text-white md:mx-0 md:grid md:grid-rows-[1fr_auto_1fr] lg:max-w-lg ${isTrainer ? "justify-end" : ""}`}>
        {/* Same minimum height on both halves so the two eyebrows start on one line. */}
        <div className="md:row-start-2 md:min-h-[12rem] lg:min-h-[14rem] [text-shadow:0_1px_14px_rgba(0,0,0,0.55)]">
        <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white sm:text-[0.8125rem]">
          <span aria-hidden="true" className={`h-[2px] w-5 rounded-full ${t.rule}`} />
          {half.eyebrow}
        </p>
        <h2
          id={headingId}
          className="mt-2 font-heading text-[1.625rem] font-bold leading-[1.08] tracking-tight text-white text-balance min-[360px]:text-[1.75rem] sm:text-4xl md:mt-4 lg:text-5xl"
        >
          {half.headline}
        </h2>
        <p className="mt-2 text-[0.9375rem] leading-snug text-white text-pretty sm:text-base md:mt-4 md:text-lg">
          {half.support}
        </p>
        </div>

        {/* Buttons sit at the bottom of each half so both CTAs line up across the split. */}
        <div className={`pt-3 md:row-start-3 md:self-end md:pt-8 ${isTrainer ? "" : "mt-auto"}`}>
        <Link
          href={half.cta.href}
          onClick={() => trackLandingClick(side, half.cta.href, locale)}
          className={`group inline-flex min-h-[52px] w-full items-center justify-between gap-3 whitespace-nowrap rounded-full bg-white px-6 text-[1.0625rem] font-semibold shadow-lg shadow-black/25 transition duration-200 hover:-translate-y-px hover:bg-white/90 hover:shadow-xl active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:w-auto sm:min-w-[280px] md:min-h-[56px] md:text-lg ${t.ink}`}
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
                  className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full border border-white/60 bg-black/40 px-4 text-sm font-medium text-white backdrop-blur-sm transition duration-200 hover:border-white hover:bg-white/15 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {pill.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        </div>
      </div>
    </section>
  );
}

export function SplitLanding({ copy }: { copy: SplitLandingCopy }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isNl = copy.locale === "nl";
  const current = copy.locale.toUpperCase();

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !menuRef.current?.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  const menuLinks = [
    { label: isNl ? "Studio huren" : "Studio rental", href: copy.trainer.menuHref ?? copy.trainer.cta.href },
    { label: "Personal training", href: copy.client.menuHref ?? copy.client.cta.href },
    ...(copy.client.pills || []),
    { label: isNl ? "Alle mogelijkheden" : "Explore SculptClub", href: copy.homeHref },
  ];

  const langMenuRef = useRef<HTMLDivElement>(null);
  const [langOpen, setLangOpen] = useState(false);
  useEffect(() => {
    if (!langOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLangOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !langMenuRef.current?.contains(event.target)) setLangOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [langOpen]);

  // Compact language menu: shows the current language, opens a two-item list.
  const langMenu = (
    <div ref={langMenuRef} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={langOpen}
        aria-controls="landing-lang-menu"
        aria-label={`${copy.langLabel}: ${current}`}
        onClick={() => setLangOpen(!langOpen)}
        className="inline-flex h-11 min-w-[44px] items-center justify-center gap-1 rounded-lg border border-white/25 bg-black/20 px-2.5 text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {current}
        <ChevronDown className={`h-4 w-4 transition-transform ${langOpen ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      <div
        id="landing-lang-menu"
        hidden={!langOpen}
        className="absolute left-0 top-[calc(100%+8px)] w-28 rounded-xl border border-white/20 bg-[#0A1633]/95 p-1.5 text-white shadow-xl backdrop-blur-md"
      >
        <span aria-current="page" className="flex min-h-11 items-center rounded-lg bg-white/10 px-3 text-sm font-semibold">
          {current}
        </span>
        <Link
          href={copy.switchLang.href}
          hrefLang={copy.switchLang.hrefLang}
          lang={copy.switchLang.hrefLang}
          aria-label={copy.switchLang.ariaLabel}
          className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {copy.switchLang.label}
        </Link>
      </div>
    </div>
  );

  return (
    <main
      id="main-content"
      data-landing-version="feedback-20261006"
      className="relative grid h-[100svh] min-h-[640px] w-full grid-rows-2 overflow-hidden max-[359px]:min-h-[720px] md:min-h-0 md:grid-cols-2 md:grid-rows-1"
    >
      <h1 className="sr-only">SculptClub</h1>

      {/* Paulo's proposal: language left, the real logo centred, navigation right. */}
      <header className="pointer-events-none absolute inset-x-0 top-0 z-20 grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 pt-3 sm:px-10 md:pt-6 lg:px-16">
        <nav aria-label={copy.langLabel} className="pointer-events-auto justify-self-start text-xs font-semibold tracking-wide">
          {langMenu}
        </nav>
        <Link
          href={copy.homeHref}
          aria-label={copy.homeLabel}
          className="pointer-events-auto inline-flex min-h-[44px] items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Image
            src="/images/logo-sculptclub.svg"
            alt="SculptClub"
            width={162}
            height={30}
            preload
            className="h-auto w-[112px] select-none brightness-0 invert min-[360px]:w-[140px] md:w-[162px]"
          />
        </Link>
        <div ref={menuRef} className="pointer-events-auto relative justify-self-end">
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? (isNl ? "Menu sluiten" : "Close menu") : (isNl ? "Menu openen" : "Open menu")}
            aria-expanded={menuOpen}
            aria-controls="landing-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
          <nav
            id="landing-menu"
            aria-label={isNl ? "Navigatie" : "Navigation"}
            hidden={!menuOpen}
            className="absolute right-0 top-[calc(100%+12px)] w-64 max-w-[calc(100vw-32px)] rounded-xl border border-white/20 bg-[#0A1633]/95 p-2 text-white shadow-xl backdrop-blur-md"
          >
            {menuLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <Half side="trainer" half={copy.trainer} locale={copy.locale} priority />
      <Half side="client" half={copy.client} locale={copy.locale} priority={false} />
      <footer className="absolute inset-x-6 bottom-[calc(64px+env(safe-area-inset-bottom))] z-10 flex items-center justify-between gap-4 text-white sm:inset-x-10 md:left-[calc(50%+40px)] md:right-10 lg:left-[calc(50%+64px)] lg:right-16">
        <p className="max-w-[240px] text-xs leading-relaxed text-white md:text-sm">
          {siteConfig.address.street}<span className="block">Jordaan, Amsterdam</span>
        </p>
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isNl ? "Stel je vraag via WhatsApp" : "Ask a question on WhatsApp"}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:h-12 md:w-12"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
      </footer>
    </main>
  );
}
