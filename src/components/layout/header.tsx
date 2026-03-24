"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Globe, CalendarCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav, secondaryNav } from "@/config/navigation";
import { getLocaleFromPath, getAlternatePath, getAlternateLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const altLocale = getAlternateLocale(locale);
  const altPath = getAlternatePath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = mainNav[locale];
  const moreItems = secondaryNav[locale];

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
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
            alt="SculptClub"
            width={120}
            height={9}
            className="h-3 sm:h-4 w-auto dark:invert"
            priority
          />
        </Link>

        {/* Right side: nav links + language + hamburger */}
        <div className="flex items-center gap-1">
          {/* Desktop primary nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                  "hover:bg-accent",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language toggle — desktop only, shows current lang */}
          <Link
            href={altPath}
            className="hidden md:flex items-center gap-1.5 ml-2 px-3 py-1.5 rounded-full bg-secondary border border-border/50 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-border transition-all"
            aria-label={altLocale === "en" ? "Switch to English" : "Schakel naar Nederlands"}
          >
            <Globe className="w-3.5 h-3.5" />
            {locale.toUpperCase()}
          </Link>

          {/* Hamburger menu — always visible */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 -mr-2 ml-1 rounded-lg hover:bg-accent transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Dropdown menu — works on mobile AND desktop */}
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
              {/* On mobile: show main nav items too */}
              <div className="md:hidden">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2.5 rounded-lg text-base font-medium transition-colors",
                      "hover:bg-accent min-h-[44px] flex items-center",
                      pathname === item.href
                        ? "text-foreground bg-accent"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-2 border-t border-border/50" />
              </div>

              {/* Secondary nav — always visible in dropdown */}
              {moreItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2.5 rounded-lg text-sm transition-colors min-h-[44px] flex items-center",
                    "hover:bg-accent",
                    pathname === item.href
                      ? "text-foreground font-medium bg-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              {/* Acuity login for returning clients */}
              <a
                href="https://secure.acuityscheduling.com/login/36720238"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-brand hover:text-brand-dark hover:bg-accent transition-colors min-h-[44px] flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                {locale === "nl" ? "Mijn Boekingen" : "My Bookings"}
              </a>

              <div className="my-2 border-t border-border/50" />

              {/* Language switch */}
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
  );
}
