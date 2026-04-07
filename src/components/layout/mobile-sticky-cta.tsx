"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/locale";
import { Calendar } from "lucide-react";

const copy = {
  nl: {
    label: "Boek gratis intake",
    href: "/nl/gratis-intake",
  },
  en: {
    label: "Book free intro",
    href: "/en/free-intro",
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
        <Link
          href={t.href}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold min-h-[48px] px-6 shadow-lg transition-colors"
          data-cta="mobile-sticky-intake"
        >
          <Calendar className="w-5 h-5" aria-hidden="true" />
          {t.label}
        </Link>
      </div>
    </div>
  );
}
