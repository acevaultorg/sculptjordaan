"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav, secondaryNav } from "@/config/navigation";
import { getLocaleFromPath, getAlternatePath, getAlternateLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const altLocale = getAlternateLocale(locale);
  const altPath = getAlternatePath(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = mainNav[locale];
  const moreItems = secondaryNav[locale];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
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
          className="font-heading text-lg font-bold tracking-tight"
        >
          SculptClub
        </Link>

        {/* Desktop nav */}
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

          {/* Language toggle */}
          <Link
            href={altPath}
            className="ml-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            {altLocale.toUpperCase()}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 rounded-lg hover:bg-accent transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "mt-2 rounded-[1.5rem] border border-border/50",
              "bg-background/95 backdrop-blur-xl",
              "shadow-brand-lg p-4 md:hidden"
            )}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-3 py-2.5 rounded-lg text-base font-medium transition-colors",
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

              {moreItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors min-h-[44px] flex items-center"
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-2 border-t border-border/50" />

              <Link
                href={altPath}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors min-h-[44px] flex items-center"
              >
                {altLocale === "en" ? "English" : "Nederlands"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
