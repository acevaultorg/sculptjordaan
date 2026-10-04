import type { Locale } from "./site";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  // Shorter label used only where space is tight (the header category tiles on
  // narrow phones), so all 4 categories fit at 375px without a scrollbar.
  shortLabel?: string;
  // Tiny qualifier line under the label — desktop (sm+) version, full text.
  caption?: string;
  // Same qualifier, shorter — used on the mobile tile instead of `caption` so
  // the "always fits 4, never scrolls" row guarantee still holds.
  captionShort?: string;
  // Persistent highlight: render this tile with the orange brand fill at all
  // times (not only when it's the active page) — used to keep the trainer
  // studio-rental CTA visually prominent. Allowed to be orange because tiles
  // are clickable (color-clickability contract).
  highlight?: boolean;
}

// Primary categories. Was the operator's 2026-07-04 four-tile concept
// (Small Group · Open Gym · Personal Training · Rent Studio); Small Group was
// REMOVED 2026-08-28 on measured grounds, operator-delegated ("jij maakt de
// beste beslissing en voert uit"):
//   · 0 Small Group bookings in THREE independent instruments — GA4 purchases
//     (Jul 31-Aug 27), Clarity booking confirmations, and the Acuity
//     appointments report itself (Jul: 164 appointments, Aug: 191 — not one
//     Small Group row; the type doesn't even appear).
//   · Fewest pill clicks of the four (6/30d vs Huur Studio's 30, Clarity
//     heatmap, element-position verified in the header band).
// The /small-group page still exists and stays reachable via the FirstTimeMenu
// sheet + footer; only the tile is gone. Three tiles = more room per tile on
// mobile. "Voor Trainers" hub stays in footer + hamburger as before.
export const mainNav: Record<Locale, NavItem[]> = {
  nl: [
    { label: "Open Gym", href: "/nl/open-gym" },
    { label: "Personal Training", href: "/nl/vind-jouw-personal-trainer" },
    { label: "Huur Studio", href: "/nl/studio-huren", caption: "(voor trainers)" },
  ],
  en: [
    { label: "Open Gym", href: "/en/open-gym" },
    { label: "Personal Training", href: "/en/find-personal-trainer" },
    { label: "Rent Studio", href: "/en/studio-rental", caption: "(For trainers)" },
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
    { label: "Huur de Studio", href: "/nl/studio-huren" },
    { label: "Word trainer", href: "/nl/word-trainer" },
    { label: "Voor Trainers (hub)", href: "/nl/voor-trainers" },
    { label: "Vind een personal trainer", href: "/nl/vind-jouw-personal-trainer" },
    { label: "Trainergids", href: "/nl/trainers" },
    { label: "Gratis intake", href: "/nl/gratis-intake" },
    { label: "Open Gym", href: "/nl/open-gym" },
    { label: "Small Group", href: "/nl/small-group" },
    { label: "Lessen & trainers", href: "/nl/lessen" },
    { label: "Eerste bezoek", href: "/nl/eerste-bezoek" },
    { label: "Cadeaukaarten", href: "/nl/cadeaukaarten" },
    // SculptCoach link REMOVED 2026-08-29: sculptcoach.app returns HTTP 402
    // (x-vercel-error: DEPLOYMENT_DISABLED) — the Vercel deployment is disabled for
    // non-payment, so this footer link sent every visitor on every page to an error
    // page. Repo ../sculptcoach last shipped 2026-05-05. RESTORE this line verbatim
    // once sculptcoach.app returns 200:
    // { label: "SculptCoach App ↗", href: "https://sculptcoach.app" },
  ],
  en: [
    { label: "Rent the Studio", href: "/en/studio-rental" },
    { label: "Become a trainer", href: "/en/become-trainer" },
    { label: "For Trainers (hub)", href: "/en/for-trainers" },
    { label: "Find your Trainer", href: "/en/find-personal-trainer" },
    { label: "Trainer directory", href: "/en/trainers" },
    { label: "Free intro", href: "/en/free-intro" },
    { label: "Open Gym", href: "/en/open-gym" },
    { label: "Small Group", href: "/en/small-group" },
    { label: "Classes & trainers", href: "/en/classes" },
    { label: "First Visit", href: "/en/first-visit" },
    { label: "Gift cards", href: "/en/gift-cards" },
    // SculptCoach link REMOVED 2026-08-29: sculptcoach.app returns HTTP 402
    // (x-vercel-error: DEPLOYMENT_DISABLED) — the Vercel deployment is disabled for
    // non-payment, so this footer link sent every visitor on every page to an error
    // page. Repo ../sculptcoach last shipped 2026-05-05. RESTORE this line verbatim
    // once sculptcoach.app returns 200:
    // { label: "SculptCoach App ↗", href: "https://sculptcoach.app" },
  ],
};

export const footerCompany: Record<Locale, NavItem[]> = {
  nl: [
    { label: "Over ons", href: "/nl/over-ons" },
    { label: "Reviews", href: "/nl/reviews" },
    // Added 2026-08-28: /nl/contact and /nl/resultaten were UNREACHABLE from the
    // homepage by following links — each one's only inbound link was its own
    // translation (a closed nl<->en loop), so neither was in any crawl path.
    { label: "Resultaten", href: "/nl/resultaten" },
    { label: "Contact", href: "/nl/contact" },
    { label: "FAQ", href: "/nl/faqs" },
    { label: "Blog", href: "/nl/blog" },
  ],
  en: [
    { label: "About", href: "/en/about" },
    { label: "Reviews", href: "/en/reviews" },
    // Added 2026-08-28 — see the NL note above (same closed-loop problem).
    { label: "Results", href: "/en/results" },
    { label: "Contact", href: "/en/contact" },
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
  "/nl/lessen": "/en/classes",
  "/nl/open-gym": "/en/open-gym",
  "/nl/studio-huren": "/en/studio-rental",
  "/nl/boek": "/en/book",
  "/nl/boek-studio": "/en/book-studio",
  "/nl/boek-trainer": "/en/book-trainer",
  "/nl/boek-gym": "/en/book-gym",
  "/nl/gratis-proefles": "/en/free-trial",
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
  "/nl/plan-gratis-intake-met-gezina": "/en/plan-free-intro-with-gezina",
  "/nl/plan-gratis-intake-met-jearmey": "/en/plan-free-intro-with-jearmey",
  "/nl/plan-gratis-intake-met-joey": "/en/plan-free-intro-with-joey",
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
  "/nl/blog/personal-trainer-amsterdam-centrum": "/en/blog/personal-trainer-amsterdam-centrum",
  "/nl/blog/personal-trainer-de-pijp-amsterdam": "/en/blog/personal-trainer-de-pijp-amsterdam",
  "/nl/blog/boutique-gym-vs-sportschool-keten": "/en/blog/boutique-gym-vs-big-chain-gym",
  "/nl/blog/personal-trainer-voor-beginners": "/en/blog/personal-trainer-for-beginners",
  "/nl/blog/personal-trainer-amsterdam-oost": "/en/blog/personal-trainer-amsterdam-east",
  "/nl/blog/personal-trainer-amsterdam-noord": "/en/blog/personal-trainer-amsterdam-north",
  "/nl/blog/personal-trainer-na-blessure-amsterdam": "/en/blog/personal-trainer-after-injury-amsterdam",
  "/nl/blog/krachttraining-voor-vrouwen": "/en/blog/strength-training-for-women",
  "/nl/blog/personal-trainer-rugklachten-amsterdam": "/en/blog/back-pain-personal-trainer-amsterdam",
  "/nl/blog/lichaamssamenstelling-verbeteren-amsterdam": "/en/blog/improve-body-composition-amsterdam",
  "/nl/blog/personal-trainer-amsterdam-zuid": "/en/blog/personal-trainer-amsterdam-south",
  "/nl/blog/personal-trainer-voor-senioren-amsterdam": "/en/blog/personal-trainer-for-seniors-amsterdam",
  "/nl/blog/personal-trainer-worden-amsterdam": "/en/blog/become-personal-trainer-amsterdam",
  "/nl/blog/zakelijk-personal-training-amsterdam": "/en/blog/corporate-personal-training-amsterdam",
  "/nl/word-trainer": "/en/become-trainer",
  // EN → NL: pages
  "/en": "/",
  "/en/find-personal-trainer": "/nl/vind-jouw-personal-trainer",
  "/en/open-gym": "/nl/open-gym",
  "/en/studio-rental": "/nl/studio-huren",
  "/en/book": "/nl/boek",
  "/en/book-studio": "/nl/boek-studio",
  "/en/book-trainer": "/nl/boek-trainer",
  "/en/book-gym": "/nl/boek-gym",
  "/en/free-trial": "/nl/gratis-proefles",
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
  "/en/plan-free-intro-with-gezina": "/nl/plan-gratis-intake-met-gezina",
  "/en/plan-free-intro-with-jearmey": "/nl/plan-gratis-intake-met-jearmey",
  "/en/plan-free-intro-with-joey": "/nl/plan-gratis-intake-met-joey",
  // Campaign landing pages
  "/nl/gratis-intake": "/en/free-intro",
  "/nl/start": "/en/start",
  "/landing": "/en/landing",
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
  "/en/blog/personal-trainer-amsterdam-centrum": "/nl/blog/personal-trainer-amsterdam-centrum",
  "/en/blog/personal-trainer-de-pijp-amsterdam": "/nl/blog/personal-trainer-de-pijp-amsterdam",
  "/en/blog/boutique-gym-vs-big-chain-gym": "/nl/blog/boutique-gym-vs-sportschool-keten",
  "/en/blog/personal-trainer-for-beginners": "/nl/blog/personal-trainer-voor-beginners",
  "/en/blog/personal-trainer-amsterdam-east": "/nl/blog/personal-trainer-amsterdam-oost",
  "/en/blog/personal-trainer-after-injury-amsterdam": "/nl/blog/personal-trainer-na-blessure-amsterdam",
  "/en/blog/strength-training-for-women": "/nl/blog/krachttraining-voor-vrouwen",
  "/en/blog/back-pain-personal-trainer-amsterdam": "/nl/blog/personal-trainer-rugklachten-amsterdam",
  "/en/blog/improve-body-composition-amsterdam": "/nl/blog/lichaamssamenstelling-verbeteren-amsterdam",
  "/en/blog/personal-trainer-amsterdam-south": "/nl/blog/personal-trainer-amsterdam-zuid",
  "/en/blog/personal-trainer-for-seniors-amsterdam": "/nl/blog/personal-trainer-voor-senioren-amsterdam",
  "/en/blog/become-personal-trainer-amsterdam": "/nl/blog/personal-trainer-worden-amsterdam",
  "/en/blog/personal-trainer-amsterdam-north": "/nl/blog/personal-trainer-amsterdam-noord",
  "/en/blog/corporate-personal-training-amsterdam": "/nl/blog/zakelijk-personal-training-amsterdam",
  "/en/become-trainer": "/nl/word-trainer",
  // Campaign landing pages
  "/en/free-intro": "/nl/gratis-intake",
  "/en/start": "/nl/start",
  "/en/landing": "/landing",

  // ─── hreflang-declared pairs, added 2026-08-29 ───────────────────
  // Extracted from each page's own alternates.languages metadata. These 33
  // pairs were already declared to Google but missing here, so the in-app
  // language offer fell back to the homepage and dropped the visitor's
  // context. Both directions, because getAlternatePath looks up either.
  // Source of truth stays the page's own metadata — re-run the extractor
  // if a slug changes.
  // +2 pairs 2026-09-05 (35 total): /open-gym/studentenkorting (shipped 09-01) and
  // the belasting/first-year-tax blog post (shipped 09-05) recurred the SAME gap —
  // both declared alternates in their own metadata but were never added here, so
  // HreflangLinks hit its `if (!nlPath || !enPath) return null` guard and they served
  // 2 hreflang tags instead of 5 (no x-default, no nl-NL). Any page added after
  // 2026-08-29 needs an entry here too — the extractor is not wired into the build.
  "/nl/blog/aov-personal-trainer-zzp": "/en/blog/disability-insurance-freelance-personal-trainer-netherlands",
  "/en/blog/disability-insurance-freelance-personal-trainer-netherlands": "/nl/blog/aov-personal-trainer-zzp",
  "/nl/blog/belasting-eerste-jaar-zzp-personal-trainer": "/en/blog/first-year-tax-freelance-personal-trainer-netherlands",
  "/en/blog/first-year-tax-freelance-personal-trainer-netherlands": "/nl/blog/belasting-eerste-jaar-zzp-personal-trainer",
  "/nl/blog/factuur-personal-trainer-zzp": "/en/blog/invoice-freelance-personal-trainer-netherlands",
  "/nl/blog/pensioen-zzp-personal-trainer": "/en/blog/pension-freelance-personal-trainer-netherlands",
  "/en/blog/pension-freelance-personal-trainer-netherlands": "/nl/blog/pensioen-zzp-personal-trainer",
  "/en/blog/invoice-freelance-personal-trainer-netherlands": "/nl/blog/factuur-personal-trainer-zzp",
  "/nl/blog/btw-personal-trainer": "/en/blog/vat-personal-trainer-netherlands",
  "/en/blog/vat-personal-trainer-netherlands": "/nl/blog/btw-personal-trainer",
  "/nl/blog/eerste-10-klanten-zzp-personal-trainer-amsterdam": "/en/blog/first-10-clients-freelance-personal-trainer-amsterdam",
  "/en/blog/first-10-clients-freelance-personal-trainer-amsterdam": "/nl/blog/eerste-10-klanten-zzp-personal-trainer-amsterdam",
  "/nl/blog/engels-sprekende-personal-trainer-amsterdam": "/en/blog/english-speaking-personal-trainer-amsterdam",
  "/en/blog/english-speaking-personal-trainer-amsterdam": "/nl/blog/engels-sprekende-personal-trainer-amsterdam",
  "/nl/blog/hoeveel-klanten-personal-trainer-amsterdam-rondkomen": "/en/blog/how-many-clients-personal-trainer-amsterdam-living-wage",
  "/en/blog/how-many-clients-personal-trainer-amsterdam-living-wage": "/nl/blog/hoeveel-klanten-personal-trainer-amsterdam-rondkomen",
  "/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam": "/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam",
  "/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam": "/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam",
  "/nl/blog/personal-trainer-marketing-instagram-amsterdam-jordaan": "/en/blog/personal-trainer-marketing-instagram-amsterdam-jordaan",
  "/en/blog/personal-trainer-marketing-instagram-amsterdam-jordaan": "/nl/blog/personal-trainer-marketing-instagram-amsterdam-jordaan",
  "/nl/blog/personal-trainer-na-bevalling-amsterdam": "/en/blog/postpartum-personal-trainer-amsterdam",
  "/en/blog/postpartum-personal-trainer-amsterdam": "/nl/blog/personal-trainer-na-bevalling-amsterdam",
  "/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam": "/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam",
  "/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam": "/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam",
  "/nl/blog/personal-trainer-stress-burnout-amsterdam": "/en/blog/burnout-personal-trainer-amsterdam",
  "/en/blog/burnout-personal-trainer-amsterdam": "/nl/blog/personal-trainer-stress-burnout-amsterdam",
  "/nl/blog/personal-trainer-zwangerschap-amsterdam": "/en/blog/prenatal-personal-trainer-amsterdam",
  "/en/blog/prenatal-personal-trainer-amsterdam": "/nl/blog/personal-trainer-zwangerschap-amsterdam",
  "/nl/blog/small-group-training-amsterdam": "/en/blog/small-group-training-amsterdam",
  "/en/blog/small-group-training-amsterdam": "/nl/blog/small-group-training-amsterdam",
  "/nl/blog/studio-huren-vs-commerciele-gym-personal-trainer-amsterdam": "/en/blog/studio-rental-vs-commercial-gym-personal-trainer-amsterdam",
  "/en/blog/studio-rental-vs-commercial-gym-personal-trainer-amsterdam": "/nl/blog/studio-huren-vs-commerciele-gym-personal-trainer-amsterdam",
  "/nl/blog/vrouwelijke-personal-trainer-amsterdam": "/en/blog/female-personal-trainer-amsterdam",
  "/en/blog/female-personal-trainer-amsterdam": "/nl/blog/vrouwelijke-personal-trainer-amsterdam",
  "/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen": "/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension",
  "/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension": "/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen",
  "/nl/boutique-personal-training-vs-keten": "/en/boutique-personal-training-vs-chain-gyms",
  "/en/boutique-personal-training-vs-chain-gyms": "/nl/boutique-personal-training-vs-keten",
  "/nl/open-gym/onbeperkt-zomerdeal": "/en/open-gym/unlimited-summer-deal",
  "/en/open-gym/unlimited-summer-deal": "/nl/open-gym/onbeperkt-zomerdeal",
  "/nl/open-gym/studentenkorting": "/en/open-gym/student-discount",
  "/en/open-gym/student-discount": "/nl/open-gym/studentenkorting",
  "/nl/personal-trainer-jordaan": "/en/personal-trainer-amsterdam-jordaan",
  "/en/personal-trainer-amsterdam-jordaan": "/nl/personal-trainer-jordaan",
  "/nl/plan-gratis-intake-met-bryan": "/en/plan-free-intro-with-bryan",
  "/en/plan-free-intro-with-bryan": "/nl/plan-gratis-intake-met-bryan",
  "/nl/plan-gratis-intake-met-hamish": "/en/plan-free-intro-with-hamish",
  "/en/plan-free-intro-with-hamish": "/nl/plan-gratis-intake-met-hamish",
  "/nl/plan-gratis-intake-met-ibrahim": "/en/plan-free-intro-with-ibrahim",
  "/en/plan-free-intro-with-ibrahim": "/nl/plan-gratis-intake-met-ibrahim",
  "/nl/plan-gratis-intake-met-roberta": "/en/plan-free-intro-with-roberta",
  "/en/plan-free-intro-with-roberta": "/nl/plan-gratis-intake-met-roberta",
  "/nl/plan-gratis-intake-met-sergei": "/en/plan-free-intro-with-sergei",
  "/en/plan-free-intro-with-sergei": "/nl/plan-gratis-intake-met-sergei",
  "/nl/plan-gratis-intake-met-tom": "/en/plan-free-intro-with-tom",
  "/en/plan-free-intro-with-tom": "/nl/plan-gratis-intake-met-tom",
  "/nl/small-group": "/en/small-group",
  "/en/small-group": "/nl/small-group",
  "/nl/sportschool-jordaan": "/en/boutique-gym-amsterdam",
  "/en/boutique-gym-amsterdam": "/nl/sportschool-jordaan",
  "/nl/studio-huren/gratis-test": "/en/studio-rental/free-trial",
  "/nl/fotostudio-huren": "/en/photo-studio-rental",
  "/en/photo-studio-rental": "/nl/fotostudio-huren",
  "/nl/praktijkruimte-huren": "/en/practice-space-rental",
  "/en/practice-space-rental": "/nl/praktijkruimte-huren",
  "/en/studio-rental/free-trial": "/nl/studio-huren/gratis-test",
  "/nl/studio-huren/rekentool": "/en/studio-rental/calculator",
  "/en/studio-rental/calculator": "/nl/studio-huren/rekentool",
  // Trainer directory (2026-10-01)
  "/nl/trainers": "/en/trainers",
  "/en/trainers": "/nl/trainers",
  "/nl/trainers/profiel-toevoegen": "/en/trainers/add-your-profile",
  "/en/trainers/add-your-profile": "/nl/trainers/profiel-toevoegen",
  "/nl/trainers/eva": "/en/trainers/eva",
  "/en/trainers/eva": "/nl/trainers/eva",
  "/nl/trainers/gezina": "/en/trainers/gezina",
  "/en/trainers/gezina": "/nl/trainers/gezina",
  "/nl/trainers/joey": "/en/trainers/joey",
  "/en/trainers/joey": "/nl/trainers/joey",
  "/nl/trainers/roberta": "/en/trainers/roberta",
  "/en/trainers/roberta": "/nl/trainers/roberta",
  "/nl/trainers/ibrahim": "/en/trainers/ibrahim",
  "/en/trainers/ibrahim": "/nl/trainers/ibrahim",
  "/nl/trainers/alex": "/en/trainers/alex",
  "/en/trainers/alex": "/nl/trainers/alex",
  "/nl/trainers/andrea": "/en/trainers/andrea",
  "/en/trainers/andrea": "/nl/trainers/andrea",
  "/nl/trainers/dara": "/en/trainers/dara",
  "/en/trainers/dara": "/nl/trainers/dara",
  "/nl/trainers/jearmey": "/en/trainers/jearmey",
  "/en/trainers/jearmey": "/nl/trainers/jearmey",
  "/nl/trainers/hamish": "/en/trainers/hamish",
  "/en/trainers/hamish": "/nl/trainers/hamish",
  "/nl/trainers/bryan": "/en/trainers/bryan",
  "/en/trainers/bryan": "/nl/trainers/bryan",
  "/nl/trainers/tom": "/en/trainers/tom",
  "/en/trainers/tom": "/nl/trainers/tom",
  "/nl/trainers/sergei": "/en/trainers/sergei",
  "/en/trainers/sergei": "/nl/trainers/sergei",
  "/nl/voor-trainers": "/en/for-trainers",
  "/en/for-trainers": "/nl/voor-trainers",
  "/nl/voor-trainers/freelance-personal-trainer-worden": "/en/for-trainers/becoming-freelance-personal-trainer",
  "/en/for-trainers/becoming-freelance-personal-trainer": "/nl/voor-trainers/freelance-personal-trainer-worden",
  "/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten": "/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor",
  "/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor": "/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten",
  "/nl/voor-trainers/personal-trainer-locatie-amsterdam-jordaan": "/en/for-trainers/personal-trainer-location-amsterdam-jordaan",
  "/en/for-trainers/personal-trainer-location-amsterdam-jordaan": "/nl/voor-trainers/personal-trainer-locatie-amsterdam-jordaan",
  "/nl/voor-trainers/zzp-personal-trainer-checklist": "/en/for-trainers/zzp-personal-trainer-checklist",
  "/en/for-trainers/zzp-personal-trainer-checklist": "/nl/voor-trainers/zzp-personal-trainer-checklist",
};