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
  // NL → EN: pages
  "/": "/en",
  "/nl/vind-jouw-personal-trainer": "/en/find-personal-trainer",
  "/nl/open-gym": "/en/open-gym",
  "/nl/studio-huren": "/en/studio-rental",
  "/nl/boek": "/en/book",
  "/nl/boek-studio": "/en/book-studio",
  "/nl/boek-trainer": "/en/book-trainer",
  "/nl/boek-gym": "/en/book-gym",
  "/nl/prijzen": "/en/pricing",
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
  // NL → EN: trainer intake pages
  "/nl/plan-gratis-intake-met-alex": "/en/plan-free-intro-with-alex",
  "/nl/plan-gratis-intake-met-andrea": "/en/plan-free-intro-with-andrea",
  "/nl/plan-gratis-intake-met-dara": "/en/plan-free-intro-with-dara",
  "/nl/plan-gratis-intake-met-eva": "/en/plan-free-intro-with-eva",
  "/nl/plan-gratis-intake-met-hamish": "/en/plan-free-intro-with-hamish",
  // NL → EN: blog posts
  "/nl/blog/afvallen-met-krachttraining": "/en/blog/weight-loss-strength-training",
  "/nl/blog/consistent-blijven-met-sporten": "/en/blog/stay-consistent-exercise",
  "/nl/blog/eerste-keer-sportschool-tips": "/en/blog/first-time-gym-tips",
  "/nl/blog/krachttraining-voor-beginners": "/en/blog/strength-training-beginners-guide",
  "/nl/blog/open-gym-vs-sportschool": "/en/blog/open-gym-vs-regular-gym",
  "/nl/blog/personal-trainer-amsterdam": "/en/blog/personal-trainer-amsterdam",
  "/nl/blog/personal-training-amsterdam-jordaan": "/en/blog/personal-training-amsterdam-jordaan",
  "/nl/blog/prive-sportschool-vs-grote-sportschool": "/en/blog/private-gym-vs-big-box-gym",
  "/nl/blog/sportschool-zonder-abonnement-amsterdam": "/en/blog/gym-without-membership-amsterdam",
  "/nl/blog/studio-huren-personal-trainer-amsterdam": "/en/blog/studio-rental-personal-trainers-amsterdam",
  "/nl/blog/wat-kost-personal-training-amsterdam": "/en/blog/personal-training-cost-amsterdam",
  "/nl/blog/voedingscoach-amsterdam": "/en/blog/nutrition-coach-amsterdam",
  "/nl/blog/fysiotherapeut-personal-trainer-amsterdam": "/en/blog/physiotherapist-personal-trainer-amsterdam",
  "/nl/blog/gratis-intake-personal-trainer-amsterdam": "/en/blog/free-intro-personal-trainer-amsterdam",
  "/nl/blog/gym-huren-per-uur-amsterdam": "/en/blog/gym-rental-per-hour-amsterdam",
  "/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam": "/en/blog/rent-training-space-freelance-personal-trainer-amsterdam",
  "/nl/blog/fysiotherapie-studio-huren-amsterdam": "/en/blog/physiotherapy-studio-rental-amsterdam",
  "/nl/blog/sportschool-jordaan-amsterdam": "/en/blog/gym-jordaan-amsterdam",
  "/nl/blog/personal-training-afvallen-amsterdam": "/en/blog/personal-training-weight-loss-amsterdam",
  "/nl/blog/personal-trainer-amsterdam-west": "/en/blog/personal-trainer-amsterdam-west",
  // EN → NL: pages
  "/en": "/",
  "/en/find-personal-trainer": "/nl/vind-jouw-personal-trainer",
  "/en/open-gym": "/nl/open-gym",
  "/en/studio-rental": "/nl/studio-huren",
  "/en/book": "/nl/boek",
  "/en/book-studio": "/nl/boek-studio",
  "/en/book-trainer": "/nl/boek-trainer",
  "/en/book-gym": "/nl/boek-gym",
  "/en/pricing": "/nl/prijzen",
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
  // EN → NL: trainer intake pages
  "/en/plan-free-intro-with-alex": "/nl/plan-gratis-intake-met-alex",
  "/en/plan-free-intro-with-andrea": "/nl/plan-gratis-intake-met-andrea",
  "/en/plan-free-intro-with-dara": "/nl/plan-gratis-intake-met-dara",
  "/en/plan-free-intro-with-eva": "/nl/plan-gratis-intake-met-eva",
  "/en/plan-free-intro-with-hamish": "/nl/plan-gratis-intake-met-hamish",
  // Campaign landing pages
  "/nl/gratis-intake": "/en/free-intro",
  // EN → NL: blog posts
  "/en/blog/weight-loss-strength-training": "/nl/blog/afvallen-met-krachttraining",
  "/en/blog/stay-consistent-exercise": "/nl/blog/consistent-blijven-met-sporten",
  "/en/blog/first-time-gym-tips": "/nl/blog/eerste-keer-sportschool-tips",
  "/en/blog/strength-training-beginners-guide": "/nl/blog/krachttraining-voor-beginners",
  "/en/blog/open-gym-vs-regular-gym": "/nl/blog/open-gym-vs-sportschool",
  "/en/blog/personal-trainer-amsterdam": "/nl/blog/personal-trainer-amsterdam",
  "/en/blog/personal-training-amsterdam-jordaan": "/nl/blog/personal-training-amsterdam-jordaan",
  "/en/blog/private-gym-vs-big-box-gym": "/nl/blog/prive-sportschool-vs-grote-sportschool",
  "/en/blog/gym-without-membership-amsterdam": "/nl/blog/sportschool-zonder-abonnement-amsterdam",
  "/en/blog/studio-rental-personal-trainers-amsterdam": "/nl/blog/studio-huren-personal-trainer-amsterdam",
  "/en/blog/personal-training-cost-amsterdam": "/nl/blog/wat-kost-personal-training-amsterdam",
  "/en/blog/nutrition-coach-amsterdam": "/nl/blog/voedingscoach-amsterdam",
  "/en/blog/physiotherapist-personal-trainer-amsterdam": "/nl/blog/fysiotherapeut-personal-trainer-amsterdam",
  "/en/blog/free-intro-personal-trainer-amsterdam": "/nl/blog/gratis-intake-personal-trainer-amsterdam",
  "/en/blog/gym-rental-per-hour-amsterdam": "/nl/blog/gym-huren-per-uur-amsterdam",
  "/en/blog/rent-training-space-freelance-personal-trainer-amsterdam": "/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam",
  "/en/blog/physiotherapy-studio-rental-amsterdam": "/nl/blog/fysiotherapie-studio-huren-amsterdam",
  "/en/blog/gym-jordaan-amsterdam": "/nl/blog/sportschool-jordaan-amsterdam",
  "/en/blog/personal-training-weight-loss-amsterdam": "/nl/blog/personal-training-afvallen-amsterdam",
  "/en/blog/personal-trainer-amsterdam-west": "/nl/blog/personal-trainer-amsterdam-west",
  // Campaign landing pages
  "/en/free-intro": "/nl/gratis-intake",
};
