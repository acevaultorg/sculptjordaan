"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Globe, User, ArrowRight, ExternalLink, MessageCircle, Building2, Users, Dumbbell } from "lucide-react";
import { mainNav, secondaryNav } from "@/config/navigation";
import { getLocaleFromPath, getAlternatePath, getAlternateLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

// 2026-07-04 header redesign (operator concept): a clean two-row header — a
// utility row (logo · language · login · menu) above a PERSISTENT category
// tile bar (Small Group · Open Gym · Personal Training · Rent Studio, from
// mainNav). This replaced the standalone Boek/Try-Out disambiguator buttons.
// Booking access is preserved: the login (person) sheet below is a booking
// entry point (it lists the 3 booking flows), each category tile links to a
// page with its own on-page booking CTA, and mobile keeps the sticky
// MobileBottomCTABar. Kept verbatim from the prior header: the scroll-aware
// transparency, the overDarkHero homepage-hero treatment, the logo invert
// logic, the hamburger dropdown, the login sheet, all animations + a11y.

// bookingMenu drives the "My bookings" login sheet (person icon). Each card
// links to the relevant booking flow.
const bookingMenu = {
  nl: {
    categories: [
      { icon: Building2, title: "Studio Huren", description: "Per uur boeken · Pakketten", href: "/nl/boek-studio" },
      { icon: Users, title: "Personal Trainer", description: "Gratis kennismaking", href: "/nl/vind-jouw-personal-trainer" },
      { icon: Dumbbell, title: "Open Gym", description: "Boek een sessie · Kies een plan", href: "/nl/boek-gym" },
    ],
  },
  en: {
    categories: [
      { icon: Building2, title: "Studio Rental", description: "Book by the hour · Packages", href: "/en/book-studio" },
      { icon: Users, title: "Personal Trainer", description: "Free intro", href: "/en/find-personal-trainer" },
      { icon: Dumbbell, title: "Open Gym", description: "Book a session · Pick a plan", href: "/en/book-gym" },
    ],
  },
} as const;

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const altLocale = getAlternateLocale(locale);
  const altPath = getAlternatePath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll-aware header: transparent at top, opaque+blur after 40px scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // set initial state (handles deep links with hash)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset menus on route change (React 19: update state during render, not in effect)
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setLoginOpen(false);
  }

  const navItems = mainNav[locale];
  const moreItems = secondaryNav[locale];
  const booking = bookingMenu[locale];

  // Only the homepage (/ and /en) renders a full-bleed dark <Hero> photo behind
  // the transparent header — white/glass chrome is legible there. Every other
  // page has a light/theme top section, so use theme colors elsewhere.
  const overDarkHero = !scrolled && (pathname === "/" || pathname === "/en");

  // Close hamburger when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Lock body scroll when login panel is open
  useEffect(() => {
    if (loginOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [loginOpen]);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
    setLoginOpen(false);
  }

  function handleLoginClick() {
    setLoginOpen(!loginOpen);
    setMenuOpen(false);
  }

  // Shared utility-icon chip style (globe · login · hamburger). NOTE: no
  // `display` here on purpose — each element sets its own (`flex`, or the
  // globe's `hidden sm:flex`), so the chip's style can't override the globe's
  // mobile-hide.
  const iconChip = cn(
    "items-center justify-center rounded-xl border transition-all cursor-pointer touch-manipulation",
    "w-11 h-11 sm:w-9 sm:h-9",
    "text-foreground/75 hover:text-foreground bg-muted hover:bg-accent border-foreground/15 active:scale-95"
  );

  return (
    <>
      <header
        ref={menuRef}
        className={cn(
          "fixed top-0 inset-x-0 z-50",
          "transition-[background-color,backdrop-filter,border-color] duration-300",
          // Always a bottom line under the header (operator 2026-07-04). Over the
          // dark homepage hero a subtle white hairline; a theme line elsewhere.
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
            : overDarkHero
              ? "bg-transparent border-b border-white/25"
              : "bg-transparent border-b border-border/50"
        )}
      >
        {/* One flex-wrap row: at md+ everything fits on a SINGLE row
            (logo · tiles-centered · icons); below md it wraps to two rows
            (logo + icons on row 1, the full-width category tiles on row 2).
            Order classes drive the wrap: logo(1) · icons(2, ml-auto) · tiles(3,
            w-full) on mobile → logo(1) · tiles(2, flex-1) · icons(3) at md+. */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 px-3 py-2.5 sm:px-4 mx-auto max-w-7xl min-w-0 lg:flex-nowrap lg:gap-y-0 lg:gap-x-4">
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
              // Logo ink is #333. Invert (→ light) only when behind it is dark:
              // over the homepage dark hero, OR in dark mode. Sized down a step
              // (2026-07-04, operator) so the one-row layout fits comfortably.
              className={cn("h-8 sm:h-9 w-auto select-none", overDarkHero ? "invert" : "dark:invert")}
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          {/* Category tiles */}
          <nav
            aria-label={locale === "nl" ? "Categorieën" : "Categories"}
            className="order-3 w-full lg:order-2 lg:w-auto lg:flex-1 flex items-stretch justify-center gap-1 sm:gap-2 min-w-0"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    // Mobile: each tile keeps its own natural content width (no
                    // word is ever abbreviated/hidden) — padding/gap/tracking are
                    // tuned tight so the 4 always fit the row without scrolling.
                    // min-w-0 + overflow-hidden + truncate on the span below is a
                    // last-resort safety net only (extreme zoom/viewport), not
                    // the normal behavior.
                    "min-w-0 overflow-hidden flex items-center justify-center text-center rounded-xl font-semibold whitespace-nowrap transition-all",
                    "h-9 sm:h-10 px-2 sm:px-5 text-xs sm:text-sm",
                    isActive
                      // Active = brand fill (clickable, so orange is allowed per
                      // the color-clickability contract).
                      ? "bg-brand text-brand-foreground shadow-sm"
                      : overDarkHero
                        // Over the homepage dark hero: glass tiles.
                        ? "text-white/90 bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-md"
                        // Elsewhere / scrolled: solid theme tiles.
                        : "text-foreground bg-muted border border-border/60 hover:border-brand hover:bg-brand/5"
                  )}
                >
                  {/* short label on phones, full label at sm+ */}
                  <span className="sm:hidden truncate max-w-full tracking-tight">{item.shortLabel ?? item.label}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Utility icons */}
          <div className="order-2 ml-auto lg:order-3 lg:ml-0 flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Language toggle — desktop only (sm+). Mobile: globe lives inside
                the hamburger dropdown (frees horizontal room on phones). */}
            <a
              href={altPath}
              aria-label={locale === "nl" ? "Schakel naar Engels" : "Switch to Dutch"}
              title={locale === "nl" ? "Schakel naar Engels" : "Switch to Dutch"}
              className={cn("hidden sm:flex", iconChip)}
            >
              <Globe className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">{locale === "nl" ? "English" : "Nederlands"}</span>
            </a>

            {/* Client login / My bookings — also a booking entry point */}
            <button
              onClick={handleLoginClick}
              className={cn("flex", iconChip, loginOpen && "text-foreground bg-accent border-border")}
              aria-label={locale === "nl" ? "Mijn boekingen" : "My bookings"}
              title={locale === "nl" ? "Mijn boekingen" : "My bookings"}
            >
              <User className="w-4 h-4" />
            </button>

            {/* Hamburger */}
            <button
              onClick={handleMenuClick}
              className={cn("flex", iconChip, menuOpen && "text-foreground bg-accent border-border")}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ─── Hamburger dropdown ─── */}
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

      {/* ─── LOGIN / My Bookings panel — action menu ─── */}
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
    </>
  );
}
