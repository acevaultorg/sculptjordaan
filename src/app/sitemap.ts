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
  "/nl/prijzen",
  "/nl/algemene-voorwaarden",
  "/nl/privacybeleid",
  "/nl/cookiebeleid",
  "/nl/toegankelijkheid",
  "/nl/plan-gratis-intake-met-alex",
  "/nl/plan-gratis-intake-met-eva",
  "/nl/plan-gratis-intake-met-hamish",
  "/nl/plan-gratis-intake-met-andrea",
  "/nl/plan-gratis-intake-met-dara",
  "/nl/boek-trainer",
  "/nl/boek-studio",
  "/nl/boek-gym",
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
  "/en/pricing",
  "/en/terms-conditions",
  "/en/privacy-policy",
  "/en/cookie-policy",
  "/en/accessibility-statement",
  "/en/plan-free-intro-with-alex",
  "/en/plan-free-intro-with-eva",
  "/en/plan-free-intro-with-hamish",
  "/en/plan-free-intro-with-andrea",
  "/en/plan-free-intro-with-dara",
  "/en/book-trainer",
  "/en/book-studio",
  "/en/book-gym",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const allPages = [...nlPages, ...enPages].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" || path === "/en"
      ? 1.0
      : path.includes("/blog/")
      ? 0.6
      : /\/(privacybeleid|cookiebeleid|algemene-voorwaarden|toegankelijkheid|privacy-policy|cookie-policy|terms-conditions|accessibility-statement)/.test(path)
      ? 0.2
      : 0.8,
  }));

  return allPages;
}
