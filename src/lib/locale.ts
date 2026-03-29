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

  // Safe fallback: return alternate locale homepage instead of naively swapping
  // prefixes (which would create broken URLs like /en/boek-studio)
  if (pathname.startsWith("/en")) return "/";
  return "/en";
}

/** Get HTML lang attribute */
export function getHtmlLang(locale: Locale): string {
  return locale === "nl" ? "nl" : "en";
}
