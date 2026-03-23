import type { Locale } from "./site";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: Record<Locale, NavItem[]> = {
  nl: [
    { label: "Trainers", href: "/nl/vind-jouw-personal-trainer" },
    { label: "Open Gym", href: "/nl/open-gym" },
    { label: "Studio Huren", href: "/nl/studio-huren" },
  ],
  en: [
    { label: "Trainers", href: "/en/find-personal-trainer" },
    { label: "Open Gym", href: "/en/open-gym" },
    { label: "Studio Rental", href: "/en/studio-rental" },
  ],
};

export const secondaryNav: Record<Locale, NavItem[]> = {
  nl: [
    { label: "Over ons", href: "/nl/over-ons" },
    { label: "Reviews", href: "/nl/reviews" },
    { label: "Resultaten", href: "/nl/resultaten" },
    { label: "FAQ", href: "/nl/faqs" },
    { label: "Eerste bezoek", href: "/nl/eerste-bezoek" },
    { label: "Cadeaukaarten", href: "/nl/cadeaukaarten" },
    { label: "Contact", href: "/nl/contact" },
    { label: "Locatie", href: "/nl/locatie-uren" },
    { label: "Blog", href: "/nl/blog" },
  ],
  en: [
    { label: "About", href: "/en/about" },
    { label: "Reviews", href: "/en/reviews" },
    { label: "Results", href: "/en/results" },
    { label: "FAQs", href: "/en/faqs" },
    { label: "First Visit", href: "/en/first-visit" },
    { label: "Gift Cards", href: "/en/gift-cards" },
    { label: "Contact", href: "/en/contact" },
    { label: "Location", href: "/en/location-hours" },
    { label: "Blog", href: "/en/blog" },
  ],
};

export const footerServices: Record<Locale, NavItem[]> = {
  nl: [
    { label: "Vind een personal trainer", href: "/nl/vind-jouw-personal-trainer" },
    { label: "Train Zelfstandig", href: "/nl/open-gym" },
    { label: "Huur de Studio", href: "/nl/studio-huren" },
    { label: "Eerste bezoek", href: "/nl/eerste-bezoek" },
  ],
  en: [
    { label: "Find your Trainer", href: "/en/find-personal-trainer" },
    { label: "Train Solo", href: "/en/open-gym" },
    { label: "Rent the Studio", href: "/en/studio-rental" },
    { label: "First Visit", href: "/en/first-visit" },
  ],
};

export const footerCompany: Record<Locale, NavItem[]> = {
  nl: [
    { label: "Over ons", href: "/nl/over-ons" },
    { label: "Reviews", href: "/nl/reviews" },
    { label: "FAQ", href: "/nl/faqs" },
    { label: "Blog", href: "/nl/blog" },
  ],
  en: [
    { label: "About", href: "/en/about" },
    { label: "Reviews", href: "/en/reviews" },
    { label: "FAQs", href: "/en/faqs" },
    { label: "Blog", href: "/en/blog" },
  ],
};

export const footerLegal: Record<Locale, NavItem[]> = {
  nl: [
    { label: "Voorwaarden", href: "/nl/algemene-voorwaarden" },
    { label: "Privacybeleid", href: "/nl/privacybeleid" },
    { label: "Cookiebeleid", href: "/nl/cookiebeleid" },
    { label: "Toegankelijkheid", href: "/nl/toegankelijkheid" },
  ],
  en: [
    { label: "Terms", href: "/en/terms-conditions" },
    { label: "Privacy Policy", href: "/en/privacy-policy" },
    { label: "Cookie Policy", href: "/en/cookie-policy" },
    { label: "Accessibility", href: "/en/accessibility-statement" },
  ],
};

/** Get the alternate locale path for language switching */
export const alternateRoutes: Record<string, string> = {
  // NL → EN
  "/": "/en",
  "/nl/vind-jouw-personal-trainer": "/en/find-personal-trainer",
  "/nl/open-gym": "/en/open-gym",
  "/nl/studio-huren": "/en/studio-rental",
  "/nl/boek": "/en/book",
  "/nl/over-ons": "/en/about",
  "/nl/reviews": "/en/reviews",
  "/nl/resultaten": "/en/results",
  "/nl/faqs": "/en/faqs",
  "/nl/eerste-bezoek": "/en/first-visit",
  "/nl/cadeaukaarten": "/en/gift-cards",
  "/nl/contact": "/en/contact",
  "/nl/locatie-uren": "/en/location-hours",
  "/nl/studio": "/en/studio",
  "/nl/blog": "/en/blog",
  "/nl/algemene-voorwaarden": "/en/terms-conditions",
  "/nl/privacybeleid": "/en/privacy-policy",
  "/nl/cookiebeleid": "/en/cookie-policy",
  "/nl/toegankelijkheid": "/en/accessibility-statement",
  // EN → NL (reverse)
  "/en": "/",
  "/en/find-personal-trainer": "/nl/vind-jouw-personal-trainer",
  "/en/open-gym": "/nl/open-gym",
  "/en/studio-rental": "/nl/studio-huren",
  "/en/book": "/nl/boek",
  "/en/about": "/nl/over-ons",
  "/en/reviews": "/nl/reviews",
  "/en/results": "/nl/resultaten",
  "/en/faqs": "/nl/faqs",
  "/en/first-visit": "/nl/eerste-bezoek",
  "/en/gift-cards": "/nl/cadeaukaarten",
  "/en/contact": "/nl/contact",
  "/en/location-hours": "/nl/locatie-uren",
  "/en/studio": "/nl/studio",
  "/en/blog": "/nl/blog",
  "/en/terms-conditions": "/nl/algemene-voorwaarden",
  "/en/privacy-policy": "/nl/privacybeleid",
  "/en/cookie-policy": "/nl/cookiebeleid",
  "/en/accessibility-statement": "/nl/toegankelijkheid",
};
