import type { MetadataRoute } from "next";

const BASE_URL = "https://sculptclub.nl";

const nlPages = [
  "/",
  "/nl/vind-jouw-personal-trainer",
  "/nl/open-gym",
  "/nl/studio-huren",
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
  "/nl/blog/personal-trainer-amsterdam-centrum",
  "/nl/blog/personal-trainer-de-pijp-amsterdam",
  "/nl/blog/boutique-gym-vs-sportschool-keten",
  "/nl/blog/personal-trainer-voor-beginners",
  "/nl/blog/personal-trainer-amsterdam-oost",
  "/nl/blog/personal-trainer-na-blessure-amsterdam",
  "/nl/blog/krachttraining-voor-vrouwen",
  "/nl/blog/personal-trainer-amsterdam-zuid",
  "/nl/blog/personal-trainer-voor-senioren-amsterdam",
  "/nl/blog/personal-trainer-worden-amsterdam",
  "/nl/blog/personal-trainer-amsterdam-noord",
  "/nl/blog/zakelijk-personal-training-amsterdam",
  "/nl/word-trainer",
  "/nl/prijzen",
  "/nl/boutique-personal-training-vs-keten",
  "/nl/algemene-voorwaarden",
  "/nl/privacybeleid",
  "/nl/cookiebeleid",
  "/nl/toegankelijkheid",
  "/nl/plan-gratis-intake-met-alex",
  "/nl/plan-gratis-intake-met-eva",
  "/nl/plan-gratis-intake-met-hamish",
  "/nl/plan-gratis-intake-met-andrea",
  "/nl/plan-gratis-intake-met-dara",
  "/nl/plan-gratis-intake-met-gezina",
  "/nl/plan-gratis-intake-met-jearmey",
  "/nl/plan-gratis-intake-met-joey",
  "/nl/boek-trainer",
  "/nl/boek-studio",
  "/nl/boek-gym",
  "/nl/gratis-intake",
];

const enPages = [
  "/en",
  "/en/find-personal-trainer",
  "/en/open-gym",
  "/en/studio-rental",
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
  "/en/blog/personal-trainer-amsterdam-centrum",
  "/en/blog/personal-trainer-de-pijp-amsterdam",
  "/en/blog/boutique-gym-vs-big-chain-gym",
  "/en/blog/personal-trainer-for-beginners",
  "/en/blog/personal-trainer-amsterdam-east",
  "/en/blog/personal-trainer-after-injury-amsterdam",
  "/en/blog/strength-training-for-women",
  "/en/blog/personal-trainer-amsterdam-south",
  "/en/blog/personal-trainer-for-seniors-amsterdam",
  "/en/blog/become-personal-trainer-amsterdam",
  "/en/blog/personal-trainer-amsterdam-north",
  "/en/blog/corporate-personal-training-amsterdam",
  "/en/become-trainer",
  "/en/pricing",
  "/en/boutique-personal-training-vs-chain-gyms",
  "/en/terms-conditions",
  "/en/privacy-policy",
  "/en/cookie-policy",
  "/en/accessibility-statement",
  "/en/plan-free-intro-with-alex",
  "/en/plan-free-intro-with-eva",
  "/en/plan-free-intro-with-hamish",
  "/en/plan-free-intro-with-andrea",
  "/en/plan-free-intro-with-dara",
  "/en/plan-free-intro-with-gezina",
  "/en/plan-free-intro-with-jearmey",
  "/en/plan-free-intro-with-joey",
  "/en/book-trainer",
  "/en/book-studio",
  "/en/book-gym",
  "/en/free-intro",
];

// High-intent money pages get max priority — everything else cascades down.
const MONEY_PAGE_RE = /^\/(nl|en)\/(gratis-intake|free-intro|vind-jouw-personal-trainer|find-personal-trainer|prijzen|pricing|open-gym|studio-huren|studio-rental|boek|book|boek-trainer|book-trainer|boek-studio|book-studio|boek-gym|book-gym|plan-gratis-intake|plan-free-intro|boutique-personal-training-vs-keten|boutique-personal-training-vs-chain-gyms)$/;
const LEGAL_RE = /\/(privacybeleid|cookiebeleid|algemene-voorwaarden|toegankelijkheid|privacy-policy|cookie-policy|terms-conditions|accessibility-statement)/;

// Newest blog posts get a priority boost — signals freshness to Google.
const FRESH_BLOG_SLUGS = new Set([
  "personal-trainer-amsterdam-noord",
  "personal-trainer-amsterdam-north",
  "zakelijk-personal-training-amsterdam",
  "corporate-personal-training-amsterdam",
  "personal-trainer-na-blessure-amsterdam",
  "personal-trainer-after-injury-amsterdam",
  "krachttraining-voor-vrouwen",
  "strength-training-for-women",
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
      lastModified: now,
      changeFrequency,
      priority,
    };
  });

  return allPages;
}
