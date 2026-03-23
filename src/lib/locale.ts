import type { Locale } from "@/config/site";
import { defaultLocale } from "@/config/site";
import { alternateRoutes } from "@/config/navigation";

/** Detect locale from pathname */
export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/en")) return "en";
  return "nl";
}

/** Get alternate locale */
export function getAlternateLocale(locale: Locale): Locale {
  return locale === "nl" ? "en" : "nl";
}

/** Get the alternate path for language switching */
export function getAlternatePath(pathname: string): string {
  // Check exact match first
  if (alternateRoutes[pathname]) return alternateRoutes[pathname];

  // Fallback: swap /nl/ ↔ /en/ prefix
  if (pathname.startsWith("/en/")) {
    return "/nl/" + pathname.slice(4);
  }
  if (pathname.startsWith("/nl/")) {
    return "/en/" + pathname.slice(4);
  }
  // Root = NL, alternate = /en
  if (pathname === "/") return "/en";

  return pathname;
}

/** Get HTML lang attribute */
export function getHtmlLang(locale: Locale): string {
  return locale === "nl" ? "nl" : "en";
}
