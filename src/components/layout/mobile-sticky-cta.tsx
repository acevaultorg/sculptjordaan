"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/locale";
import { Calendar, HelpCircle } from "lucide-react";

const copy = {
  nl: {
    primaryLabel: "Boek gratis intake",
    primaryHref: "/nl/gratis-intake",
    secondaryLabel: "Nieuw hier?",
    secondaryHref: "/nl/eerste-bezoek",
  },
  en: {
    primaryLabel: "Book free intro",
    primaryHref: "/en/free-intro",
    secondaryLabel: "New here?",
    secondaryHref: "/en/first-visit",
  },
} as const;

// Hide on conversion + booking pages where it would be redundant
const HIDDEN_PATH_SUBSTRINGS = [
  "/gratis-intake",
  "/free-intro",
  "/plan-gratis-intake",
  "/plan-free-intro",
  "/boek-",
  "/book-",
];

export function MobileStickyCta() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = copy[locale];

  if (HIDDEN_PATH_SUBSTRINGS.some((s) => pathname.includes(s))) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 md:hidden pointer-events-none"
      aria-hidden={false}
    >
      {/* Subtle top gradient so the bar is always legible over page content */}
      <div className="h-4 bg-gradient-to-t from-background to-transparent" />
      <div className="bg-background/95 backdrop-blur border-t border-border/60 px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pointer-events-auto">
        <div className="flex items-stretch gap-2">
          <Link
            href={t.secondaryHref}
            className="flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-border/70 bg-background/60 text-foreground font-medium min-h-[48px] px-4 text-sm"
            data-cta="mobile-sticky-new-here"
            aria-label={t.secondaryLabel}
          >
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            {t.secondaryLabel}
          </Link>
          <Link
            href={t.primaryHref}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold min-h-[48px] px-4 shadow-lg transition-colors text-sm"
            data-cta="mobile-sticky-intake"
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
            {t.primaryLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
