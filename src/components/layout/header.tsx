"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Globe, CalendarCheck, Users, Dumbbell, Building2, ArrowRight, User, ExternalLink, MessageCircle } from "lucide-react";
import { mainNav, secondaryNav } from "@/config/navigation";
import { getLocaleFromPath, getAlternatePath, getAlternateLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

type MenuCategory = {
  icon: typeof Building2;
  title: string;
  description: string;
  href: string;
  external?: boolean;
};

type MenuConfig = {
  label: string;
  title: string;
  subtitle?: string;
  categories: readonly MenuCategory[];
  returning: string;
};

const bookingMenu: { nl: MenuConfig; en: MenuConfig } = {
  nl: {
    label: "Studio huren",
    title: "Wat wil je doen?",
    categories: [
      {
        icon: Building2,
        title: "Studio Huren",
        description: "Per uur boeken · Pakketten",
        href: "/nl/boek-studio",
      },
      {
        icon: Users,
        title: "Personal Trainer",
        description: "Gratis kennismaking",
        href: "/nl/vind-jouw-personal-trainer",
      },
      {
        icon: Dumbbell,
        title: "Open Gym",
        description: "Boek een sessie · Kies een plan",
        href: "/nl/boek-gym",
      },
    ],
    returning: "Al lid? Mijn boekingen",
  },
  en: {
    label: "Rent Studio",
    title: "What would you like to do?",
    categories: [
      {
        icon: Building2,
        title: "Studio Rental",
        description: "Book by the hour · Packages",
        href: "/en/book-studio",
      },
      {
        icon: Users,
        title: "Personal Trainer",
        description: "Free intro",
        href: "/en/find-personal-trainer",
      },
      {
        icon: Dumbbell,
        title: "Open Gym",
        description: "Book a session · Pick a plan",
        href: "/en/book-gym",
      },
    ],
    returning: "Already a member? My bookings",
  },
};

// Try-Out menu — distinct from Boek. Operator 2026-05-27: when visitor
// clicks Try-Out, the disambiguator sheet should be CONTEXTUALIZED for
// the try-out funnel (free first-time experience), not generic booking.
// Same visual layout (3 product cards + "Al lid?" link) but every
// category routes to the FREE try-out flow:
//   Studio Huren → Acuity Free Studio Rental Tryout (free 60min slot)
//   Personal Trainer → /nl/gratis-intake (PT free-intake landing)
//   Open Gym → Acuity Free Open Gym Tryout (free session)
// All free-tryout destinations are pre-existing + wired in
// src/config/acuity.ts (acuityFreeTrials.*) — this menu just routes
// to them from a single canonical disambiguator.
const tryoutMenu: { nl: MenuConfig; en: MenuConfig } = {
  nl: {
    label: "Bekijk studio",
    title: "Wat wil je proberen?",
    subtitle: "Eerste keer altijd gratis.",
    // 2026-05-27 update — operator: "also the steps afterwards" +
    // "user for studio huren try-out should not go to booking page,
    // best special page for trainers that are new, so they can book
    // try out (for free) easily with acuity."
    //
    // History: Studio Huren + Open Gym originally routed to external
    // Acuity calendars in a new tab (visitor left sculptclub.nl
    // mid-funnel). Mid-day update routed both to in-page #schedule
    // anchors on the full /studio-huren + /open-gym pages, but those
    // pages now lead with paid pricing (post-CTA-simplification),
    // which is wrong-context for a free-tryout visitor.
    //
    // Now: dedicated lean free-tryout landing pages with embedded
    // Acuity scheduler:
    //   Studio Huren → /nl/studio-huren/gratis-test (new)
    //   Open Gym    → /nl/open-gym#schedule (still has dedicated
    //                  Gratis proefles section + embed on the main
    //                  open-gym page — works for now; could spin off
    //                  if the same friction surfaces there)
    //   Personal Trainer → /nl/gratis-intake (existing dedicated page)
    //
    // Result: every Try-Out card lands on a page focused exclusively
    // on booking the free first session — no paid pricing competing
    // for attention.
    categories: [
      {
        icon: Building2,
        title: "Studio Huren",
        description: "Gratis proefsessie · 60 min",
        href: "/nl/studio-huren/gratis-test",
      },
      {
        icon: Users,
        title: "Personal Trainer",
        description: "Gratis kennismaking",
        href: "/nl/gratis-intake",
      },
      {
        icon: Dumbbell,
        title: "Open Gym",
        description: "Gratis eerste sessie",
        href: "/nl/open-gym#schedule",
      },
    ],
    returning: "Al lid? Mijn boekingen",
  },
  en: {
    label: "View studio",
    title: "What would you like to try?",
    subtitle: "First time is always free.",
    categories: [
      {
        icon: Building2,
        title: "Studio Rental",
        description: "Free test session · 60 min",
        href: "/en/studio-rental/free-trial",
      },
      {
        icon: Users,
        title: "Personal Trainer",
        description: "Free intro",
        href: "/en/free-intro",
      },
      {
        icon: Dumbbell,
        title: "Open Gym",
        description: "Free first session",
        href: "/en/open-gym#schedule",
      },
    ],
    returning: "Already a member? My bookings",
  },
};

// Trainer-funnel routes — the audience here is ZZP trainers, not consumers.
// Hiding the consumer-facing "Try-Out" CTA on these routes removes mental
// noise that competes with the page's trainer-specific actions (audit
// 2026-05-19: 25 IG-trainer-prospects landed on /en/become-trainer today
// and saw the consumer-targeted "Try-Out" header CTA right alongside the
// trainer pitch — wrong-audience signal at the moment of arrival).
// Keep "Boek" + globe + login + hamburger on these routes since those are
// shared / universal-utility chrome, not audience-specific.
function isTrainerFunnelPath(pathname: string): boolean {
  return /\/(studio-huren|studio-rental|word-trainer|become-trainer|voor-trainers|for-trainers)(\/|$)/.test(pathname);
}

// Dedicated booking-STEP pages — the page IS the booking action (an inline
// Acuity scheduler / booking widget), so the header's "Boek" + "Try-Out"
// disambiguator CTAs are redundant noise that competes with the on-page
// widget's own button. Operator 2026-06-04 on /studio-huren/gratis-test:
// "Boek button in menu bar is onnodige afleiding op deze pagina". Mirrors the
// MobileBottomCTABar / MobileLeadBar suppression from commit 704d2c6 (same
// route set). Content HUBS that merely CONTAIN a booking section (homepage,
// /studio-huren hub, /open-gym, /gratis-intake, /vind-jouw-personal-trainer)
// are intentionally NOT matched here — they keep the header CTAs.
function isBookingStepPath(pathname: string): boolean {
  return (
    /\/(boeking-bevestigd|booking-confirmed)(\/|$)/.test(pathname) || // post-booking — already converted
    /\/(studio-huren|studio-rental)\/(gratis-test|free-trial)(\/|$)/.test(pathname) || // free-trial step
    /\/plan-(gratis-intake-met|free-intro-with)-/.test(pathname) || // per-trainer intake step (×22)
    /\/(boek-trainer|boek-gym|boek-studio|book-trainer|book-gym|book-studio)(\/|$)/.test(pathname) || // dedicated book pages
    /\/(boek|book|start)(\/|$)/.test(pathname) // book/start booking endpoints
  );
}

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const altLocale = getAlternateLocale(locale);
  const altPath = getAlternatePath(pathname);
  const hideConsumerCta = isTrainerFunnelPath(pathname);
  // On dedicated booking-step pages, suppress the header booking CTAs
  // (Boek + Try-Out) — the page itself is the booking action. See
  // isBookingStepPath() above. Universal chrome (logo, language, login,
  // hamburger) stays; the hamburger still exposes full nav.
  const onBookingStep = isBookingStepPath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  // bookMode: tracks which sheet content to render when bookOpen=true.
  // "book" = canonical Boek menu (3 booking entry points).
  // "tryout" = Try-Out menu with free-first-time variants of the same
  // 3 product paths. Same modal chrome, distinct content + destinations.
  const [bookMode, setBookMode] = useState<"book" | "tryout">("book");
  const [loginOpen, setLoginOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll-aware header: transparent at top, opaque+blur after 40px scroll.
  // Premium pattern used by Apple, Saints & Stars, Tesla, Balenciaga.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll(); // set initial state (handles deep links with hash)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset menus on route change (React 19: update state during render, not in effect)
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setBookOpen(false);
    setLoginOpen(false);
  }

  const navItems = mainNav[locale];
  const moreItems = secondaryNav[locale];
  const booking = bookingMenu[locale];
  const tryout = tryoutMenu[locale];
  // Active menu = bookingMenu OR tryoutMenu depending on which button
  // opened the sheet. Modal renders `activeMenu.title/categories/etc`.
  const activeMenu = bookMode === "tryout" ? tryoutMenu[locale] : booking;

  // Only the homepage (/ and /en) renders a full-bleed dark <Hero> photo
  // behind the transparent header. There, white nav text + a shadow is
  // legible at the top. EVERY other page has a light/theme top section, so
  // white-on-transparent was low-contrast + the shadow read as a fuzzy halo
  // (operator audit 2026-05-29). `overDarkHero` gates the white treatment to
  // the only place it's correct; elsewhere the header uses theme colors.
  const overDarkHero = !scrolled && (pathname === "/" || pathname === "/en");

  // Close hamburger when clicking outside (book panel has its own backdrop)
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Lock body scroll when book or login panel is open
  useEffect(() => {
    if (bookOpen || loginOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [bookOpen, loginOpen]);

  function handleBookClick() {
    // If sheet is open in tryout mode and user taps Boek, switch mode
    // (keep sheet open, swap content). Cleaner than close-reopen flash.
    if (bookOpen && bookMode === "tryout") {
      setBookMode("book");
      return;
    }
    setBookMode("book");
    setBookOpen(!bookOpen);
    setMenuOpen(false);
    setLoginOpen(false);
  }

  function handleTryoutClick() {
    if (bookOpen && bookMode === "book") {
      setBookMode("tryout");
      return;
    }
    setBookMode("tryout");
    setBookOpen(!bookOpen);
    setMenuOpen(false);
    setLoginOpen(false);
  }

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
    setBookOpen(false);
    setLoginOpen(false);
  }

  function handleLoginClick() {
    setLoginOpen(!loginOpen);
    setMenuOpen(false);
    setBookOpen(false);
  }

  return (
    <>
      <header
        ref={menuRef}
        className={cn(
          "fixed top-0 inset-x-0 z-50",
          "transition-[background-color,backdrop-filter,border-color] duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-2.5 px-3 py-3 sm:px-4 sm:py-3.5 mx-auto max-w-7xl min-w-0 sm:flex-nowrap sm:gap-y-0">
          {/* Logo — bigger for brand presence */}
          <Link
            href={locale === "nl" ? "/" : "/en"}
            aria-label={locale === "nl" ? "SculptClub — Naar home" : "SculptClub — Go to home"}
            className="order-1 shrink-0 flex items-center -mx-2 px-2 -my-2 py-2 rounded-lg hover:bg-accent/50 active:scale-95 transition-all min-h-[44px]"
          >
            <Image
              src="/images/logo-sculptclub.svg"
              alt="SculptClub"
              width={162}
              height={30}
              // 2026-06-20: mobile h-8 → h-11 (44px). The 2026-05-27 shrink to
              // h-8 was only because the wordmark competed with the Try-Out +
              // Boek buttons IN ONE ROW. The header is now TWO rows on mobile
              // (logo + icons = row 1, CTAs = row 2), so it no longer competes —
              // restored to the bigger h-11 for brand presence (operator
              // directive 2026-06-20: "two rows so logo can be bigger on mobile").
              // Desktop (sm+) stays h-10 — wide-viewport layout has room.
              // Logo ink is #333. Invert (→ light) only when behind it is
              // dark: over the homepage dark hero, OR in dark mode. On light
              // pages the un-inverted dark wordmark reads clearly on the bone
              // background (was previously inverted-to-light = near-invisible).
              className={cn("h-11 sm:h-10 w-auto select-none", overDarkHero ? "invert" : "dark:invert")}
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          {/* CTA cluster (nav links + Try-Out + Boek). Mobile: wraps to its own
              full-width row 2 below the logo (order-3 + w-full, pills centered),
              applied ONLY when CTAs are present — booking-step pages have none,
              so no empty second row. Desktop: grouped on the right (sm:order-2 +
              sm:ml-auto), single row. */}
          <div className={cn(
            "flex items-center gap-1 sm:gap-3 min-w-0 order-3 sm:order-2 sm:w-auto sm:ml-auto sm:justify-end",
            !onBookingStep && "w-full justify-center"
          )}>
            {/* Desktop nav links (md+ only) — text-shadow when header is transparent
                so links stay legible over the hero image */}
            <div className="hidden md:flex items-center gap-0.5 mr-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative px-3 h-9 flex items-center rounded-lg text-sm font-medium transition-colors",
                      "hover:bg-accent",
                      overDarkHero
                        ? "text-white [text-shadow:_0_1px_6px_rgba(0,0,0,0.5)]"
                        : isActive
                          ? "text-foreground"
                          : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-brand" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Try-Out — audience-conditional. Consumer-targeted CTA;
                hidden on trainer-funnel pages (isTrainerFunnelPath()) so the
                trainer audience there sees a cleaner header focused on their
                own offer instead of competing with a wrong-audience pitch.

                2026-05-27: changed from Link → button that opens the same
                "Wat wil je doen?" sheet as the Boek button. Operator
                directive: "als iemand tryout klikt is er daarna een
                scherm zoals dit nodig zodat user daarna de juiste try-out
                kan boeken." Visitor lands on a marketing-content page
                (/nl/eerste-bezoek) when they clicked a verb-action label
                ("Try-Out" = "try the studio"). The information-page route
                created a mental-model mismatch — visitor clicked an
                action expecting action. Now: same modal that disambiguates
                Studio Huren / Personal Trainer / Open Gym intent → user
                self-routes to the right try-out booking flow within 1 tap. */}
            {!hideConsumerCta && !onBookingStep && (
              <button
                type="button"
                onClick={handleTryoutClick}
                aria-haspopup="dialog"
                aria-expanded={bookOpen && bookMode === "tryout"}
                className={cn(
                  "plausible-event-name=header_tryout_open h-11 sm:h-9 flex items-center px-3.5 sm:px-4 rounded-xl text-[13px] sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer",
                  overDarkHero
                    // Over the homepage dark hero: dark glass + white text.
                    ? "border border-white/20 text-white bg-black/30 backdrop-blur-md hover:bg-black/40 hover:border-white/30"
                    // Light/dark theme pages: clean secondary pill (the dark
                    // glass read as a muddy grey pill on the bone background).
                    : "border border-border text-foreground bg-secondary hover:bg-accent"
                )}
              >
                {tryout.label}
              </button>
            )}

            {/* Boek — mobile = outline (glass over hero), desktop = solid brand.
                Pre-2026-05-27 the button was bg-brand on every breakpoint.
                Clarity audit (last 3 days, project vx7zcg6zys): "Boek" got
                12.77% of homepage clicks (6 of 47) while the hero PT primary
                CTA "Probeer Personal training" got only 4.26% (2 of 47).
                3 orange-filled CTAs competed on mobile first-paint (cookie +
                header Boek + hero PT) — Hick's Law decision-paralysis kicked
                in, and Boek (closest to thumb) stole clicks from the
                lead-funnel-deeper hero CTA. Mobile outline treatment
                subordinates the header chrome so the brand-orange-primary
                chain is reserved for the revenue-funnel CTAs (hero PT button
                + mobile sticky lead bar WhatsApp). Desktop keeps the fill —
                no cookie/lead-bar competition there + Boek is still
                primary-action on demand-side traffic that's not InstagramApp
                in-app (~37% of traffic).
                2026-06-04: hidden on dedicated booking-step pages
                (onBookingStep) — the page IS the booking action there, so the
                disambiguator CTA is redundant. */}
            {!onBookingStep && (
            <button
              onClick={handleBookClick}
              aria-haspopup="dialog"
              aria-expanded={bookOpen && bookMode === "book"}
              className={cn(
                "plausible-event-name=header_boek_open h-11 sm:h-9 flex items-center gap-1.5 px-3.5 sm:px-4 rounded-xl text-[13px] sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap",
                bookOpen && bookMode === "book"
                  // Active state — match Try-Out's structural border so the
                  // pressed-pill stays visually aligned (same 2px box rule).
                  ? "border border-brand-dark bg-brand-dark text-brand-foreground"
                  : overDarkHero
                    // HOMEPAGE hero only: mobile = brand-tinted glass (kept
                    // subordinate to the hero PT primary CTA per the
                    // 2026-05-27 Clarity audit — 3 orange CTAs competing on
                    // mobile first-paint stole clicks from the lead-funnel
                    // hero CTA), desktop = solid brand (no competition there).
                    // 2026-06-02: sm:border-0 removed → kept invisible
                    // sm:border-brand instead so desktop Boek matches Try-Out's
                    // border-box height (Try-Out always has `border border-border`,
                    // dropping Boek's border made fill 2px taller — operator
                    // caught the height mismatch).
                    ? "border border-brand/60 text-brand bg-black/30 backdrop-blur-md hover:bg-brand/10 hover:border-brand active:scale-95 sm:text-brand-foreground sm:bg-brand sm:border-brand sm:hover:bg-brand-dark sm:hover:border-brand-dark sm:backdrop-blur-none"
                    // EVERYWHERE ELSE: solid brand on every breakpoint. Off the
                    // homepage there's no competing hero PT CTA, so Boek is the
                    // primary action and should read as solid orange (the glass
                    // treatment looked like a muddy grey pill on light pages).
                    // 2026-06-02: added invisible `border border-brand` (same
                    // color as bg) so Boek's outer box matches Try-Out's outer
                    // box exactly. Try-Out has `border border-border` (1px),
                    // and with box-sizing:border-box, that eats 2px of fill
                    // height — without a matching border on Boek the fill area
                    // rendered 2px taller, visible as a height mismatch on the
                    // 36px desktop button (operator screenshot 2026-06-02).
                    : "border border-brand bg-brand text-brand-foreground hover:bg-brand-dark hover:border-brand-dark active:scale-95"
              )}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              {booking.label}
            </button>
            )}
          </div>

          {/* Icon cluster (language · login · menu). Mobile: sits on row 1 to the
              right of the logo (order-2 + ml-auto). Desktop: grouped far-right
              after the CTAs (sm:order-3 + sm:ml-0). */}
          <div className="flex items-center gap-1 sm:gap-3 order-2 ml-auto shrink-0 sm:order-3 sm:ml-0">
            {/* Language toggle — desktop only (sm+).
                Mobile: globe is hidden here and lives inside the hamburger
                dropdown (see Switch to NL/EN row at the bottom of the menu
                below). Frees ~44px of horizontal room on phones so the logo
                can render at h-11 instead of h-9 — operator directive
                2026-05-18 "place the globe in menu, so the logo can be made
                bigger on mobile". Desktop behaviour unchanged. */}
            <a
              href={altPath}
              aria-label={locale === "nl" ? "Schakel naar Engels" : "Switch to Dutch"}
              title={locale === "nl" ? "Schakel naar Engels" : "Switch to Dutch"}
              // 2026-05-27 contrast fix: was `bg-muted/40 text-muted-foreground
              // border-border` → too low-contrast in light mode (operator
              // screenshot showed icons almost invisible against light-cream
              // page bg). Now opaque `bg-muted` (no /40) + `text-foreground/75`
              // + `border-foreground/15` — readable in both light + dark per
              // CLAUDE.md token-safety rules (no hardcoded text-white/bg-black
              // on chrome elements; whites only over photos or on brand fills).
              className="hidden sm:flex w-11 h-11 sm:w-9 sm:h-9 items-center justify-center rounded-xl bg-muted border border-foreground/15 text-foreground/75 hover:text-foreground hover:bg-accent active:scale-95 transition-all touch-manipulation"
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">
                {locale === "nl" ? "English" : "Nederlands"}
              </span>
            </a>

            {/* Client login — matching chip style with Language pill */}
            <button
              onClick={handleLoginClick}
              className={cn(
                "plausible-event-name=header_login_open w-11 h-11 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl border transition-all cursor-pointer touch-manipulation",
                loginOpen
                  ? "text-foreground bg-accent border-border"
                  : "text-foreground/75 hover:text-foreground bg-muted hover:bg-accent border-foreground/15 active:scale-95"
              )}
              aria-label={locale === "nl" ? "Mijn boekingen" : "My bookings"}
              title={locale === "nl" ? "Mijn boekingen" : "My bookings"}
            >
              <User className="w-4 h-4" />
            </button>

            {/* Hamburger — matching chip style with Language pill */}
            <button
              onClick={handleMenuClick}
              className={cn(
                "plausible-event-name=header_menu_open w-11 h-11 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl border transition-all cursor-pointer touch-manipulation",
                menuOpen
                  ? "text-foreground bg-accent border-border"
                  : "text-foreground/75 hover:text-foreground bg-muted hover:bg-accent border-foreground/15 active:scale-95"
              )}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* ─── Hamburger dropdown ─── */}
        {/* Always-rendered + state-driven CSS transitions (replaces framer-motion
            AnimatePresence). When closed: opacity:0 + translate-y-2 + pointer-events-none
            + aria-hidden. Transition duration 200ms matches prior framer-motion. */}
        {menuOpen && (
            <div
              className={cn(
                "mt-2 rounded-[1.5rem] border border-border/50",
                "bg-background/95 backdrop-blur-xl",
                "shadow-brand-lg p-4",
                "[animation:hamburger-dropdown-in_0.2s_ease-out]"
              )}
            >
              <div className="flex flex-col gap-1">
                <div className="md:hidden">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={cn(
                        "block px-3 py-2.5 rounded-lg text-base font-medium transition-colors",
                        "hover:bg-accent min-h-[44px] flex items-center",
                        pathname === item.href ? "text-foreground bg-accent" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="my-2 border-t border-border/50" />
                </div>

                {moreItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2.5 rounded-lg text-sm transition-colors min-h-[44px] flex items-center",
                      "hover:bg-accent",
                      pathname === item.href ? "text-foreground font-medium bg-accent" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="my-2 border-t border-border/50" />

                <a
                  href={altPath}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors min-h-[44px] flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  {altLocale === "en" ? "Switch to English" : "Schakel naar Nederlands"}
                </a>
              </div>
            </div>
          )}
      </header>

      {/* ─── LOGIN / My Bookings panel — action menu (replaces broken Acuity iframe) ─── */}
      {/* Backdrop fade-in + bottom-sheet slide-up via CSS keyframes (replaces
          framer-motion spring physics — visually equivalent at this scale,
          120KB lighter at runtime). Conditional render means exit is instant;
          on this UI (modal closing) instant exit is acceptable per the
          section.tsx FadeIn fix precedent. */}
      {loginOpen && (
          <>
            <div
              className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm [animation:backdrop-fade-in_0.25s_ease-out]"
              onClick={() => setLoginOpen(false)}
            />
            <div
              className="fixed inset-x-0 bottom-0 z-[999] flex flex-col max-h-[85dvh] [animation:panel-slide-up_0.4s_cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="bg-[#FFFFFF] dark:bg-[#0B0907] rounded-t-[2rem] shadow-2xl flex flex-col flex-1 overflow-hidden">
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-10 h-1 rounded-full bg-border" />
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {locale === "nl" ? "Mijn boekingen" : "My bookings"}
                  </h2>
                  <button
                    onClick={() => setLoginOpen(false)}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors cursor-pointer"
                    aria-label={locale === "nl" ? "Sluiten" : "Close"}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-6 pb-8">
                  <p className="text-sm text-muted-foreground mb-5">
                    {locale === "nl"
                      ? "Plan een nieuwe sessie of beheer bestaande boekingen."
                      : "Book a new session or manage existing bookings."}
                  </p>

                  <div className="space-y-3">
                    {booking.categories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        onClick={() => setLoginOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-2xl border border-border/60 hover:border-brand hover:bg-brand/5 transition-colors group"
                      >
                        <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                          <cat.icon className="w-5 h-5 text-brand" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-base">{cat.title}</div>
                          <div className="text-sm text-muted-foreground">{cat.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
                    <a
                      href="https://app.acuityscheduling.com/schedule/fba376d5"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setLoginOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span className="flex-1">
                        {locale === "nl" ? "Beheer via Acuity (nieuw tabblad)" : "Manage via Acuity (new tab)"}
                      </span>
                    </a>
                    <a
                      href="https://wa.me/31615147952"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setLoginOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span className="flex-1">
                        {locale === "nl" ? "Hulp nodig? WhatsApp ons" : "Need help? WhatsApp us"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

      {/* ─── BOOK fullscreen panel ─── */}
      {/* Same CSS-keyframe pattern as login panel above (backdrop fade-in +
          bottom-sheet slide-up). Booking cards inside use staggered CSS
          animation-delay (i × 0.08s) — see card markup below. */}
      {bookOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm [animation:backdrop-fade-in_0.25s_ease-out]"
              onClick={() => setBookOpen(false)}
            />

            {/* Panel */}
            <div
              className="fixed inset-x-0 bottom-0 z-[999] flex flex-col max-h-[85dvh] [animation:panel-slide-up_0.4s_cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="bg-[#FFFFFF] dark:bg-[#0B0907] rounded-t-[2rem] shadow-2xl flex flex-col flex-1 overflow-hidden">
                {/* Handle bar */}
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-10 h-1 rounded-full bg-border" />
                </div>

                {/* Close + Title (+ optional subtitle, used by Try-Out
                    menu to flag "first time always free" so visitor knows
                    every card below routes to a no-cost option). */}
                <div className="flex items-start justify-between px-6 py-4 gap-4">
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{activeMenu.title}</h2>
                    {activeMenu.subtitle && (
                      <p className="mt-1 text-sm text-brand font-medium">{activeMenu.subtitle}</p>
                    )}
                  </div>
                  <button
                    onClick={() => setBookOpen(false)}
                    aria-label={locale === "nl" ? "Sluiten" : "Close"}
                    className="shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* 3 product cards. Handles internal (<Link>) AND external
                    (acuityFreeTrials.* — direct to Acuity calendar in new
                    tab) destinations. The Try-Out menu uses external for
                    Studio Huren + Open Gym so the visitor lands on the
                    free-tryout Acuity slot picker directly (no extra
                    landing page in between). */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-6">
                  <div className="grid gap-3 sm:gap-4">
                    {activeMenu.categories.map((cat, i) => {
                      const cardClass = cn(
                        "group flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl transition-all duration-200",
                        "border border-border/50 hover:border-brand/30",
                        "hover:shadow-brand-lg active:scale-[0.98]",
                        "bg-muted/50 hover:bg-muted"
                      );
                      const inner = (
                        <>
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 bg-brand/10 text-brand">
                            <cat.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-lg sm:text-xl font-bold text-foreground">{cat.title}</p>
                            <p className="text-sm text-muted-foreground mt-0.5">{cat.description}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
                        </>
                      );
                      return (
                        <div
                          key={cat.href}
                          style={{
                            animation: "panel-card-fade-in 0.3s ease-out both",
                            animationDelay: `${i * 0.08}s`,
                          }}
                        >
                          {cat.external ? (
                            <a
                              href={cat.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`plausible-event-name=header_${bookMode}_${cat.title.toLowerCase().replace(/[^a-z]+/g, "_")}_click ${cardClass}`}
                              onClick={() => setBookOpen(false)}
                            >
                              {inner}
                            </a>
                          ) : (
                            <Link
                              href={cat.href}
                              className={`plausible-event-name=header_${bookMode}_${cat.title.toLowerCase().replace(/[^a-z]+/g, "_")}_click ${cardClass}`}
                              onClick={() => setBookOpen(false)}
                            >
                              {inner}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Returning client */}
                  <div className="mt-6 text-center">
                    <a
                      href="https://app.acuityscheduling.com/schedule.php?owner=36720238&action=appt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand transition-colors"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      {activeMenu.returning}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
    </>
  );
}
