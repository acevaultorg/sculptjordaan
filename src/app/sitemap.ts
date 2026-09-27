// Static export (CF Pages migration 2026-07-07): metadata/route handlers
// must be static under output:export.
export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const BASE_URL = "https://sculptclub.nl";

// Resolve real per-route last-modified — Google + Bing both use lastmod as a
// freshness signal, and uniform `now` for every URL is a known anti-pattern
// (gets discounted). Resolution order:
//   1. Generated git-commit-time map (scripts/sitemap-lastmod.mjs at prebuild) —
//      this is the only source that survives Vercel's git-clone mtime reset.
//   2. Filesystem mtime (works in `next dev` with real edit times).
//   3. Build-time `now` fallback.
const APP_DIR = join(process.cwd(), "src", "app");
const LASTMOD_MAP_PATH = join(process.cwd(), "src", "sitemap-lastmod.json");

let lastmodMap: Record<string, string> | null = null;
try {
  lastmodMap = JSON.parse(readFileSync(LASTMOD_MAP_PATH, "utf8")) as Record<
    string,
    string
  >;
} catch {
  lastmodMap = null;
}

function pageFileFor(routePath: string): string | null {
  // "/" → src/app/page.tsx
  // "/en" → src/app/en/page.tsx
  // "/nl/blog/foo" → src/app/nl/blog/foo/page.tsx
  const trimmed = routePath === "/" ? "" : routePath.replace(/^\//, "");
  const candidates = [
    join(APP_DIR, trimmed, "page.tsx"),
    join(APP_DIR, trimmed, "page.ts"),
    join(APP_DIR, trimmed, "page.mdx"),
  ];
  return candidates.find((p) => existsSync(p)) ?? null;
}
function lastModifiedFor(routePath: string, fallback: Date): Date {
  const fromMap = lastmodMap?.[routePath];
  if (fromMap) {
    const d = new Date(fromMap);
    if (!isNaN(d.valueOf())) return d;
  }
  const file = pageFileFor(routePath);
  if (!file) return fallback;
  try {
    return statSync(file).mtime;
  } catch {
    return fallback;
  }
}

const nlPages = [
  "/",
  "/nl/vind-jouw-personal-trainer",
  "/nl/lessen",
  "/nl/open-gym",
  "/nl/open-gym/onbeperkt-zomerdeal",
  "/nl/open-gym/studentenkorting",
  "/nl/small-group",
  "/nl/studio-huren",
  "/nl/fotostudio-huren",
  "/nl/studio-huren/rekentool",
  // Added 2026-07-30 — was `index, follow` + self-canonical but absent from this
  // hand-maintained array, so it was never submitted for indexing. This is the
  // conversion page of the studio-rental funnel (93% of revenue), i.e. the single
  // page a searching trainer is most likely to convert on.
  "/nl/studio-huren/gratis-test",
  "/nl/boek",
  "/nl/over-ons",
  "/nl/reviews",
  "/nl/resultaten",
  "/nl/faqs",
  "/nl/eerste-bezoek",
  "/nl/cadeaukaarten",
  "/nl/contact",
  "/nl/locatie-uren",
  "/nl/studio",
  "/nl/blog",
  "/nl/blog/krachttraining-voor-beginners",
  "/nl/blog/personal-training-amsterdam-jordaan",
  "/nl/blog/personal-trainer-amsterdam",
  "/nl/blog/wat-kost-personal-training-amsterdam",
  "/nl/blog/open-gym-vs-sportschool",
  "/nl/blog/eerste-keer-sportschool-tips",
  "/nl/blog/sportschool-zonder-abonnement-amsterdam",
  "/nl/blog/afvallen-met-krachttraining",
  "/nl/blog/consistent-blijven-met-sporten",
  "/nl/blog/prive-sportschool-vs-grote-sportschool",
  "/nl/blog/studio-huren-personal-trainer-amsterdam",
  "/nl/blog/voedingscoach-amsterdam",
  "/nl/blog/fysiotherapeut-personal-trainer-amsterdam",
  "/nl/blog/gratis-intake-personal-trainer-amsterdam",
  "/nl/blog/gym-huren-per-uur-amsterdam",
  "/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam",
  "/nl/blog/fysiotherapie-studio-huren-amsterdam",
  "/nl/blog/sportschool-jordaan-amsterdam",
  "/nl/blog/personal-training-afvallen-amsterdam",
  "/nl/blog/personal-trainer-amsterdam-west",
  // Removed from sitemap (still live for navigation; noindex'd per
  // rules/adsense-thin-content-prevention.md Gates 2 + 3 — thin/templated):
  //   /nl/blog/personal-trainer-amsterdam-centrum
  //   /nl/blog/personal-trainer-de-pijp-amsterdam
  //   /nl/blog/personal-trainer-amsterdam-oost
  "/nl/blog/boutique-gym-vs-sportschool-keten",
  "/nl/blog/personal-trainer-voor-beginners",
  "/nl/blog/personal-trainer-na-blessure-amsterdam",
  "/nl/blog/krachttraining-voor-vrouwen",
  "/nl/blog/personal-trainer-rugklachten-amsterdam",
  "/nl/blog/lichaamssamenstelling-verbeteren-amsterdam",
  "/nl/blog/personal-trainer-amsterdam-zuid",
  "/nl/blog/personal-trainer-voor-senioren-amsterdam",
  "/nl/blog/personal-trainer-worden-amsterdam",
  "/nl/blog/personal-trainer-amsterdam-noord",
  "/nl/blog/zakelijk-personal-training-amsterdam",
  "/nl/blog/vrouwelijke-personal-trainer-amsterdam",
  "/nl/blog/engels-sprekende-personal-trainer-amsterdam",
  "/nl/blog/personal-trainer-na-bevalling-amsterdam",
  "/nl/blog/personal-trainer-zwangerschap-amsterdam",
  "/nl/blog/personal-trainer-stress-burnout-amsterdam",
  "/nl/blog/small-group-training-amsterdam",
  // Supply-side ship 2026-05-20 — close trainer/PT-customer 84/13/3 ratio gap
  "/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam",
  "/nl/blog/eerste-10-klanten-zzp-personal-trainer-amsterdam",
  "/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen",
  "/nl/blog/aov-personal-trainer-zzp",
  "/nl/blog/btw-personal-trainer",
  "/nl/blog/belasting-eerste-jaar-zzp-personal-trainer",
  "/nl/blog/factuur-personal-trainer-zzp",
  "/nl/blog/pensioen-zzp-personal-trainer",
  "/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam",
  "/nl/blog/hoeveel-klanten-personal-trainer-amsterdam-rondkomen",
  "/nl/blog/studio-huren-vs-commerciele-gym-personal-trainer-amsterdam",
  "/nl/blog/personal-trainer-marketing-instagram-amsterdam-jordaan",
  "/nl/word-trainer",
  "/nl/voor-trainers",
  "/nl/voor-trainers/freelance-personal-trainer-worden",
  "/nl/voor-trainers/zzp-personal-trainer-checklist",
  "/nl/voor-trainers/personal-trainer-locatie-amsterdam-jordaan",
  "/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten",
  "/nl/prijzen",
  // Added 2026-07-30 — both are `index, follow` + self-canonical (i.e. the page
  // author intended them indexed) but had drifted out of this hand-maintained
  // array, so neither was ever submitted. High local intent — these target the
  // "Jordaan" queries the studio actually competes for. NOT to be confused with
  // the deliberately noindex'd thin location pages listed further up.
  "/nl/personal-trainer-jordaan",
  "/nl/sportschool-jordaan",
  "/nl/boutique-personal-training-vs-keten",
  "/nl/algemene-voorwaarden",
  "/nl/privacybeleid",
  "/nl/cookiebeleid",
  "/nl/toegankelijkheid",
  // Re-added to sitemap 2026-07-01 (reversed — see the matching `robots` comment
  // in each /nl/plan-gratis-intake-met-* route file for the full rationale):
  // these are genuinely distinct staff/team-profile pages, not a templated
  // location-swap doorway, and GSC confirmed they'd been noindex-excluded —
  // suppressing the highest-intent conversion pages on the site.
  "/nl/plan-gratis-intake-met-eva",
  "/nl/plan-gratis-intake-met-bryan",
  "/nl/plan-gratis-intake-met-tom",
  "/nl/plan-gratis-intake-met-roberta",
  "/nl/plan-gratis-intake-met-joey",
  "/nl/plan-gratis-intake-met-ibrahim",
  "/nl/plan-gratis-intake-met-alex",
  "/nl/plan-gratis-intake-met-gezina",
  "/nl/plan-gratis-intake-met-andrea",
  "/nl/plan-gratis-intake-met-sergei",
  "/nl/plan-gratis-intake-met-dara",
  "/nl/plan-gratis-intake-met-jearmey",
  "/nl/plan-gratis-intake-met-hamish",
  "/nl/boek-trainer",
  "/nl/boek-studio",
  "/nl/boek-gym",
  "/nl/gratis-proefles",
  "/nl/gratis-intake",
];

const enPages = [
  "/en",
  "/en/find-personal-trainer",
  "/en/classes",
  "/en/open-gym",
  "/en/open-gym/unlimited-summer-deal",
  "/en/open-gym/student-discount",
  "/en/small-group",
  "/en/studio-rental",
  "/en/photo-studio-rental",
  "/en/studio-rental/calculator",
  // Added 2026-07-30 — EN twin of /nl/studio-huren/gratis-test. Same story:
  // `index, follow` + self-canonical, but never in this array so never submitted.
  "/en/studio-rental/free-trial",
  "/en/book",
  "/en/about",
  "/en/reviews",
  "/en/results",
  "/en/faqs",
  "/en/first-visit",
  "/en/gift-cards",
  "/en/contact",
  "/en/location-hours",
  "/en/studio",
  "/en/blog",
  "/en/blog/strength-training-beginners-guide",
  "/en/blog/personal-training-amsterdam-jordaan",
  "/en/blog/personal-trainer-amsterdam",
  "/en/blog/personal-training-cost-amsterdam",
  "/en/blog/open-gym-vs-regular-gym",
  "/en/blog/first-time-gym-tips",
  "/en/blog/gym-without-membership-amsterdam",
  "/en/blog/weight-loss-strength-training",
  "/en/blog/stay-consistent-exercise",
  "/en/blog/private-gym-vs-big-box-gym",
  "/en/blog/studio-rental-personal-trainers-amsterdam",
  "/en/blog/nutrition-coach-amsterdam",
  "/en/blog/physiotherapist-personal-trainer-amsterdam",
  "/en/blog/free-intro-personal-trainer-amsterdam",
  "/en/blog/gym-rental-per-hour-amsterdam",
  "/en/blog/rent-training-space-freelance-personal-trainer-amsterdam",
  "/en/blog/physiotherapy-studio-rental-amsterdam",
  "/en/blog/gym-jordaan-amsterdam",
  "/en/blog/personal-training-weight-loss-amsterdam",
  "/en/blog/personal-trainer-amsterdam-west",
  // Removed from sitemap (still live; noindex'd — thin/templated location pages
  // per rules/adsense-thin-content-prevention.md Gates 2 + 3):
  //   /en/blog/personal-trainer-amsterdam-centrum
  //   /en/blog/personal-trainer-de-pijp-amsterdam
  //   /en/blog/personal-trainer-amsterdam-east
  "/en/blog/boutique-gym-vs-big-chain-gym",
  "/en/blog/personal-trainer-for-beginners",
  "/en/blog/personal-trainer-after-injury-amsterdam",
  "/en/blog/strength-training-for-women",
  "/en/blog/back-pain-personal-trainer-amsterdam",
  "/en/blog/improve-body-composition-amsterdam",
  "/en/blog/personal-trainer-amsterdam-south",
  "/en/blog/personal-trainer-for-seniors-amsterdam",
  "/en/blog/become-personal-trainer-amsterdam",
  "/en/blog/personal-trainer-amsterdam-north",
  "/en/blog/corporate-personal-training-amsterdam",
  "/en/blog/female-personal-trainer-amsterdam",
  "/en/blog/english-speaking-personal-trainer-amsterdam",
  "/en/blog/postpartum-personal-trainer-amsterdam",
  "/en/blog/prenatal-personal-trainer-amsterdam",
  "/en/blog/burnout-personal-trainer-amsterdam",
  "/en/blog/small-group-training-amsterdam",
  // Supply-side ship 2026-05-20 — close trainer/PT-customer 84/13/3 ratio gap
  "/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam",
  "/en/blog/first-10-clients-freelance-personal-trainer-amsterdam",
  "/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension",
  "/en/blog/disability-insurance-freelance-personal-trainer-netherlands",
  "/en/blog/vat-personal-trainer-netherlands",
  "/en/blog/first-year-tax-freelance-personal-trainer-netherlands",
  "/en/blog/invoice-freelance-personal-trainer-netherlands",
  "/en/blog/pension-freelance-personal-trainer-netherlands",
  "/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam",
  "/en/blog/how-many-clients-personal-trainer-amsterdam-living-wage",
  "/en/blog/studio-rental-vs-commercial-gym-personal-trainer-amsterdam",
  "/en/blog/personal-trainer-marketing-instagram-amsterdam-jordaan",
  "/en/become-trainer",
  "/en/for-trainers",
  "/en/for-trainers/becoming-freelance-personal-trainer",
  "/en/for-trainers/zzp-personal-trainer-checklist",
  "/en/for-trainers/personal-trainer-location-amsterdam-jordaan",
  "/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor",
  "/en/pricing",
  // Added 2026-07-30 — EN twins of the two NL local pages above. Both
  // `index, follow` + self-canonical, both previously unsubmitted.
  "/en/personal-trainer-amsterdam-jordaan",
  "/en/boutique-gym-amsterdam",
  "/en/boutique-personal-training-vs-chain-gyms",
  "/en/terms-conditions",
  "/en/privacy-policy",
  "/en/cookie-policy",
  "/en/accessibility-statement",
  // Re-added to sitemap 2026-07-01 (reversed — see the matching `robots` comment
  // in each /en/plan-free-intro-with-* route file for the full rationale): these
  // are genuinely distinct staff/team-profile pages, not a templated location-
  // swap doorway, and GSC confirmed they'd been noindex-excluded — suppressing
  // the highest-intent conversion pages on the site.
  "/en/plan-free-intro-with-eva",
  "/en/plan-free-intro-with-bryan",
  "/en/plan-free-intro-with-tom",
  "/en/plan-free-intro-with-roberta",
  "/en/plan-free-intro-with-joey",
  "/en/plan-free-intro-with-ibrahim",
  "/en/plan-free-intro-with-alex",
  "/en/plan-free-intro-with-gezina",
  "/en/plan-free-intro-with-andrea",
  "/en/plan-free-intro-with-sergei",
  "/en/plan-free-intro-with-dara",
  "/en/plan-free-intro-with-jearmey",
  "/en/plan-free-intro-with-hamish",
  "/en/book-trainer",
  "/en/book-studio",
  "/en/book-gym",
  "/en/free-trial",
  "/en/free-intro",
];

// High-intent money pages get max priority — everything else cascades down.
// `plan-gratis-intake(-met-.+)?` / `plan-free-intro(-with-.+)?` are NOT exact-
// anchored to the bare slug: this alternation is meant to also match the 24
// per-trainer intake pages (/nl/plan-gratis-intake-met-tom, etc, re-added to
// the sitemap 2026-07-01). Before this fix those 24 URLs silently fell through
// to the 0.8 default priority / weekly changefreq — arguably the HIGHEST-
// intent pages on the site (a visitor on a specific trainer's page is closer
// to booking than one on the general listing), so they should get the same
// money-page tier as /nl/gratis-intake itself.
// 2026-07-30 — `open-gym`, `studio-huren` and `studio-rental` now also match
// their SUBpaths (`(\/.+)?`). Same bug the plan-gratis-intake note above
// describes: the `$` anchor meant only the bare slug counted as a money page, so
// every conversion sub-page silently fell through to the 0.8 default —
// /nl/studio-huren/rekentool + /gratis-test, /en/studio-rental/calculator +
// /free-trial, and both live summer-deal pages (/nl/open-gym/onbeperkt-zomerdeal,
// /en/open-gym/unlimited-summer-deal) were all sitting at 0.8 under a 0.9 parent.
// These are the pages a visitor converts ON, so they earn the money-page tier.
const MONEY_PAGE_RE = /^\/(nl|en)\/(gratis-intake|free-intro|gratis-proefles|free-trial|vind-jouw-personal-trainer|find-personal-trainer|prijzen|pricing|open-gym(\/.+)?|studio-huren(\/.+)?|studio-rental(\/.+)?|boek|book|boek-trainer|book-trainer|boek-studio|book-studio|boek-gym|book-gym|plan-gratis-intake(-met-.+)?|plan-free-intro(-with-.+)?|boutique-personal-training-vs-keten|boutique-personal-training-vs-chain-gyms)$/;
const LEGAL_RE = /\/(privacybeleid|cookiebeleid|algemene-voorwaarden|toegankelijkheid|privacy-policy|cookie-policy|terms-conditions|accessibility-statement)/;

// Newest blog posts get a priority boost — signals freshness to Google.
const FRESH_BLOG_SLUGS = new Set([
  "pensioen-zzp-personal-trainer",
  "pension-freelance-personal-trainer-netherlands",
  "factuur-personal-trainer-zzp",
  "invoice-freelance-personal-trainer-netherlands",
  "belasting-eerste-jaar-zzp-personal-trainer",
  "first-year-tax-freelance-personal-trainer-netherlands",
  "btw-personal-trainer",
  "vat-personal-trainer-netherlands",
  "aov-personal-trainer-zzp",
  "disability-insurance-freelance-personal-trainer-netherlands",
  "personal-trainer-stress-burnout-amsterdam",
  "burnout-personal-trainer-amsterdam",
  "personal-trainer-amsterdam-noord",
  "personal-trainer-amsterdam-north",
  "zakelijk-personal-training-amsterdam",
  "corporate-personal-training-amsterdam",
  "personal-trainer-na-blessure-amsterdam",
  "personal-trainer-after-injury-amsterdam",
  "krachttraining-voor-vrouwen",
  "strength-training-for-women",
  "personal-trainer-rugklachten-amsterdam",
  "back-pain-personal-trainer-amsterdam",
  "lichaamssamenstelling-verbeteren-amsterdam",
  "improve-body-composition-amsterdam",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const allPages = [...nlPages, ...enPages].map((path) => {
    const isHome = path === "/" || path === "/en";
    const isMoney = MONEY_PAGE_RE.test(path);
    const isLegal = LEGAL_RE.test(path);
    const isBlog = path.includes("/blog/") && path !== "/nl/blog" && path !== "/en/blog";
    const blogSlug = isBlog ? path.split("/").pop() ?? "" : "";
    const isFreshBlog = isBlog && FRESH_BLOG_SLUGS.has(blogSlug);

    let priority = 0.8;
    if (isHome) priority = 1.0;
    else if (isMoney) priority = 0.9;
    else if (isFreshBlog) priority = 0.75;
    else if (isBlog) priority = 0.6;
    else if (isLegal) priority = 0.2;

    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";
    if (isHome || isMoney) changeFrequency = "daily";
    else if (isLegal) changeFrequency = "monthly";
    else if (isBlog) changeFrequency = "monthly";

    return {
      url: `${BASE_URL}${path}`,
      lastModified: lastModifiedFor(path, now),
      changeFrequency,
      priority,
    };
  });

  return allPages;
}