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
  "/nl/algemene-voorwaarden",
  "/nl/privacybeleid",
  "/nl/cookiebeleid",
  "/nl/toegankelijkheid",
  "/nl/plan-gratis-intake-met-alex",
  "/nl/plan-gratis-intake-met-eva",
  "/nl/plan-gratis-intake-met-hamish",
  "/nl/plan-gratis-intake-met-andrea",
  "/nl/plan-gratis-intake-met-dara",
  "/nl/blog",
  "/nl/blog/personal-training-amsterdam-jordaan",
  "/nl/blog/krachttraining-voor-beginners",
  "/nl/blog/open-gym-vs-sportschool",
  "/nl/blog/wat-kost-personal-training-amsterdam",
  "/nl/blog/eerste-keer-sportschool-tips",
  "/nl/blog/personal-trainer-amsterdam",
  "/nl/blog/sportschool-zonder-abonnement-amsterdam",
  "/nl/blog/afvallen-met-krachttraining",
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
  "/en/terms-conditions",
  "/en/privacy-policy",
  "/en/cookie-policy",
  "/en/accessibility-statement",
  "/en/plan-free-intro-with-alex",
  "/en/plan-free-intro-with-eva",
  "/en/plan-free-intro-with-hamish",
  "/en/plan-free-intro-with-andrea",
  "/en/plan-free-intro-with-dara",
  "/en/blog",
  "/en/blog/personal-training-amsterdam-jordaan",
  "/en/blog/strength-training-beginners-guide",
  "/en/blog/open-gym-vs-regular-gym",
  "/en/blog/personal-training-cost-amsterdam",
  "/en/blog/first-time-gym-tips",
  "/en/blog/personal-trainer-amsterdam",
  "/en/blog/gym-without-membership-amsterdam",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const allPages = [...nlPages, ...enPages].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" || path === "/en" ? 1.0 : 0.8,
  }));

  return allPages;
}
