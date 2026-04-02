"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Globe, CalendarCheck, Users, Dumbbell, Building2, ArrowRight } from "lucide-react";
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
        title: "Vind een Trainer",
        description: "Gratis kennismaking · 45 min",
        href: "/nl/boek-trainer",
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
        title: "Find a Trainer",
        description: "Free consultation · 45 min",
        href: "/en/book-trainer",
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
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Close all on route change
  useEffect(() => {
    setMenuOpen(false);
    setBookOpen(false);
  }, [pathname]);

  // Lock body scroll when book panel is open
  useEffect(() => {
    if (bookOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [bookOpen]);

  function handleBookClick() {
    setBookOpen(!bookOpen);
    setMenuOpen(false);
  }

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
    setBookOpen(false);
  }

  return (
    <>
      <header ref={menuRef} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
        <nav
          className={cn(
            "flex items-center justify-between px-4 py-2.5 sm:px-6",
            "rounded-[1.5rem] border border-border/50",
            "bg-background/82 backdrop-blur-xl",
            "shadow-brand-md transition-all duration-300"
          )}
        >
          {/* Logo */}
          <Link
            href={locale === "nl" ? "/" : "/en"}
            className="flex items-center"
          >
            <Image
              src="/images/logo-sculptclub.png"
              alt="SculptClub logo"
              width={120}
              height={9}
              className="h-2.5 sm:h-3 w-auto dark:invert"
              priority
            />
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-1">
            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
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

            {/* First time? — always visible */}
            <Link
              href={locale === "nl" ? "/nl/eerste-bezoek" : "/en/first-visit"}
              className="flex items-center ml-1 px-2.5 sm:px-3 rounded-full text-[11px] sm:text-sm font-medium border border-foreground/20 text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all whitespace-nowrap min-h-[32px] sm:min-h-[36px]"
            >
              {locale === "nl" ? "Nieuw hier?" : "New here?"}
            </Link>

            {/* BOOK button — always visible */}
            <button
              onClick={handleBookClick}
              className={cn(
                "ml-1 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-sm font-bold transition-all cursor-pointer",
                "min-h-[32px] sm:min-h-[36px] flex items-center gap-1 sm:gap-1.5",
                bookOpen
                  ? "bg-brand-dark text-white"
                  : "bg-brand text-white hover:bg-brand-dark active:scale-95"
              )}
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              {booking.label}
            </button>

            {/* Language toggle — desktop */}
            <Link
              href={altPath}
              className="hidden md:flex items-center gap-1.5 ml-1 px-3 py-1.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground transition-all"
              aria-label={altLocale === "en" ? "Switch to English" : "Schakel naar Nederlands"}
            >
              <Globe className="w-3.5 h-3.5" />
              {locale.toUpperCase()}
            </Link>

            {/* Hamburger */}
            <button
              onClick={handleMenuClick}
              className="p-1.5 sm:p-2 -mr-1.5 sm:-mr-2 ml-0.5 sm:ml-1 rounded-lg hover:bg-accent transition-colors cursor-pointer"
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

                <Link
                  href={altPath}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors min-h-[44px] flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  {locale === "nl" ? "Nederlands" : "English"} → {altLocale === "en" ? "English" : "Nederlands"}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

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
