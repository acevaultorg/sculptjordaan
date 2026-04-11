"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Globe, CalendarCheck, Users, Dumbbell, Building2, ArrowRight, User, ExternalLink, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav, secondaryNav } from "@/config/navigation";
import { getLocaleFromPath, getAlternatePath, getAlternateLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const bookingMenu = {
  nl: {
    label: "Boek",
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
        description: "Gratis kennismaking · 45 min",
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
    label: "Book",
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
        description: "Free intro · 45 min",
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
} as const;

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const altLocale = getAlternateLocale(locale);
  const altPath = getAlternatePath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const menuRef = useRef<HTMLDivElement>(null);

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
          "border-b border-border/50 bg-background/85 backdrop-blur-xl",
          "transition-all duration-300"
        )}
      >
        <nav className="flex items-center justify-between gap-2 px-4 py-3 sm:px-5 sm:py-3.5 mx-auto max-w-7xl min-w-0">
          {/* Logo — bigger for brand presence */}
          <Link
            href={locale === "nl" ? "/" : "/en"}
            aria-label={locale === "nl" ? "SculptClub — Naar home" : "SculptClub — Go to home"}
            className="flex items-center -mx-2 px-2 -my-2 py-2 rounded-lg hover:bg-accent/50 active:scale-95 transition-all min-h-[44px]"
          >
            <Image
              src="/images/logo-sculptclub.svg"
              alt="SculptClub"
              width={162}
              height={30}
              className="h-8 sm:h-9 w-auto invert select-none"
              priority
            />
          </Link>

          {/* Right side — single flat row, consistent gap between ALL items.
              gap-2 sm:gap-3 makes every item-to-item distance match the
              Nieuw hier ↔ Boek gap visually. */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop nav links (md+ only) */}
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
                      isActive ? "text-foreground" : "text-muted-foreground"
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

            {/* Nieuw hier? */}
            <Link
              href={locale === "nl" ? "/nl/eerste-bezoek" : "/en/first-visit"}
              className="h-9 flex items-center px-3 sm:px-4 rounded-full text-[11px] sm:text-sm font-medium border border-brand/60 text-brand hover:border-brand hover:bg-brand/10 transition-all whitespace-nowrap"
            >
              {locale === "nl" ? "Nieuw hier?" : "New here?"}
            </Link>

            {/* Boek */}
            <button
              onClick={handleBookClick}
              className={cn(
                "h-9 flex items-center gap-1.5 px-3 sm:px-4 rounded-full text-[11px] sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap",
                bookOpen
                  ? "bg-brand-dark text-white"
                  : "bg-brand text-white hover:bg-brand-dark active:scale-95"
              )}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              {booking.label}
            </button>

            {/* Language toggle — vertically stacked segmented pill (NL over EN)
                for compact footprint. ~36px wide vs ~72px horizontal.
                Both languages visible, current one highlighted. */}
            <div
              className="w-9 h-9 flex flex-col p-0.5 rounded-lg bg-muted/40 border border-border"
              role="group"
              aria-label={locale === "nl" ? "Taal" : "Language"}
            >
              <a
                href={locale === "nl" ? pathname : altPath}
                aria-current={locale === "nl" ? "page" : undefined}
                aria-label="Nederlands"
                className={cn(
                  "flex-1 flex items-center justify-center rounded-md text-[10px] font-semibold leading-none tracking-[0.02em] transition-all",
                  locale === "nl"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                NL
              </a>
              <a
                href={locale === "en" ? pathname : altPath}
                aria-current={locale === "en" ? "page" : undefined}
                aria-label="English"
                className={cn(
                  "flex-1 flex items-center justify-center rounded-md text-[10px] font-semibold leading-none tracking-[0.02em] transition-all",
                  locale === "en"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </a>
            </div>

            {/* Client login — matching chip style with Language pill */}
            <button
              onClick={handleLoginClick}
              className={cn(
                "w-9 h-9 flex items-center justify-center rounded-lg border border-border transition-all cursor-pointer touch-manipulation",
                loginOpen
                  ? "text-foreground bg-accent"
                  : "text-muted-foreground hover:text-foreground bg-muted/40 hover:bg-accent active:scale-95"
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
                "w-9 h-9 flex items-center justify-center rounded-lg border border-border transition-all cursor-pointer touch-manipulation",
                menuOpen
                  ? "text-foreground bg-accent"
                  : "text-muted-foreground hover:text-foreground bg-muted/40 hover:bg-accent active:scale-95"
              )}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* ─── Hamburger dropdown ─── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "mt-2 rounded-[1.5rem] border border-border/50",
                "bg-background/95 backdrop-blur-xl",
                "shadow-brand-lg p-4"
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
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── LOGIN / My Bookings panel — action menu (replaces broken Acuity iframe) ─── */}
      <AnimatePresence>
        {loginOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm"
              onClick={() => setLoginOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-[999] flex flex-col max-h-[85dvh]"
            >
              <div className="bg-[#ffffff] dark:bg-[#0a0a0a] rounded-t-[2rem] shadow-2xl flex flex-col flex-1 overflow-hidden">
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
                      href="https://wa.me/31683178934"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── BOOK fullscreen panel ─── */}
      <AnimatePresence>
        {bookOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-sm"
              onClick={() => setBookOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-[999] flex flex-col max-h-[85dvh]"
            >
              <div className="bg-[#ffffff] dark:bg-[#0a0a0a] rounded-t-[2rem] shadow-2xl flex flex-col flex-1 overflow-hidden">
                {/* Handle bar */}
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-10 h-1 rounded-full bg-border" />
                </div>

                {/* Close + Title */}
                <div className="flex items-center justify-between px-6 py-4">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{booking.title}</h2>
                  <button
                    onClick={() => setBookOpen(false)}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* 3 big booking cards */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-6">
                  <div className="grid gap-3 sm:gap-4">
                    {booking.categories.map((cat, i) => (
                      <motion.div
                        key={cat.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                      >
                        <Link
                          href={cat.href}
                          className={cn(
                            "group flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl transition-all duration-200",
                            "border border-border/50 hover:border-brand/30",
                            "hover:shadow-brand-lg active:scale-[0.98]",
                            "bg-muted/50 hover:bg-muted"
                          )}
                        >
                          {/* Icon circle */}
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 bg-brand/10 text-brand">
                            <cat.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                          </div>

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <p className="text-lg sm:text-xl font-bold text-foreground">{cat.title}</p>
                            <p className="text-sm text-muted-foreground mt-0.5">{cat.description}</p>
                          </div>

                          {/* Arrow */}
                          <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
                        </Link>
                      </motion.div>
                    ))}
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
                      {booking.returning}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
