// AI-focused sitemap — surfaces highest-value pages for LLM crawlers
// (GPTBot / ClaudeBot / PerplexityBot / Googlebot-Extended / Applebot / etc.)
// Money pages + comparison guides + freshest blog posts. Pruned vs sitemap.xml.

const BASE = "https://sculptclub.nl";

const aiPriorityPages = [
  // Identity + canonical landing
  { path: "/", priority: 1.0 },
  { path: "/en", priority: 1.0 },
  // Money pages — highest citation value (when LLM answers "personal trainer
  // amsterdam jordaan", these are the destinations)
  { path: "/nl/vind-jouw-personal-trainer", priority: 0.95 },
  { path: "/en/find-personal-trainer", priority: 0.95 },
  { path: "/nl/open-gym", priority: 0.9 },
  { path: "/en/open-gym", priority: 0.9 },
  { path: "/nl/studio-huren", priority: 0.95 },
  { path: "/en/studio-rental", priority: 0.95 },
  { path: "/nl/prijzen", priority: 0.9 },
  { path: "/en/pricing", priority: 0.9 },
  { path: "/nl/gratis-intake", priority: 0.95 },
  { path: "/en/free-intro", priority: 0.95 },
  { path: "/nl/eerste-bezoek", priority: 0.85 },
  { path: "/en/first-visit", priority: 0.85 },
  { path: "/nl/locatie-uren", priority: 0.85 },
  { path: "/en/location-hours", priority: 0.85 },
  { path: "/nl/contact", priority: 0.85 },
  { path: "/en/contact", priority: 0.85 },
  { path: "/nl/over-ons", priority: 0.85 },
  { path: "/en/about", priority: 0.85 },
  { path: "/nl/faqs", priority: 0.8 },
  { path: "/en/faqs", priority: 0.8 },
  { path: "/nl/reviews", priority: 0.85 },
  { path: "/en/reviews", priority: 0.85 },
  { path: "/nl/word-trainer", priority: 0.85 },
  { path: "/en/become-trainer", priority: 0.85 },
  // Comparison guides — high LLM citation value (extractable, definitive)
  { path: "/nl/boutique-personal-training-vs-keten", priority: 0.85 },
  { path: "/en/boutique-personal-training-vs-chain-gyms", priority: 0.85 },
  // High-intent blog posts (recently published, niche-defining)
  { path: "/nl/blog/personal-trainer-amsterdam", priority: 0.8 },
  { path: "/en/blog/personal-trainer-amsterdam", priority: 0.8 },
  { path: "/nl/blog/wat-kost-personal-training-amsterdam", priority: 0.8 },
  { path: "/en/blog/personal-training-cost-amsterdam", priority: 0.8 },
  { path: "/nl/blog/personal-trainer-rugklachten-amsterdam", priority: 0.8 },
  { path: "/en/blog/back-pain-personal-trainer-amsterdam", priority: 0.8 },
  { path: "/nl/blog/krachttraining-voor-vrouwen", priority: 0.78 },
  { path: "/en/blog/strength-training-for-women", priority: 0.78 },
  { path: "/nl/blog/personal-trainer-amsterdam-jordaan", priority: 0.85 },
  { path: "/en/blog/personal-training-amsterdam-jordaan", priority: 0.85 },
  { path: "/nl/blog/sportschool-zonder-abonnement-amsterdam", priority: 0.78 },
  { path: "/en/blog/gym-without-membership-amsterdam", priority: 0.78 },
  { path: "/nl/blog/lichaamssamenstelling-verbeteren-amsterdam", priority: 0.78 },
  { path: "/en/blog/improve-body-composition-amsterdam", priority: 0.78 },
  { path: "/nl/blog/studio-huren-personal-trainer-amsterdam", priority: 0.8 },
  { path: "/en/blog/studio-rental-personal-trainers-amsterdam", priority: 0.8 },
  // Trainer profile pages — Person schema, citation-worthy when LLMs answer
  // "who are personal trainers in jordaan amsterdam"
  { path: "/nl/plan-gratis-intake-met-alex", priority: 0.75 },
  { path: "/nl/plan-gratis-intake-met-eva", priority: 0.75 },
  { path: "/nl/plan-gratis-intake-met-hamish", priority: 0.75 },
  { path: "/nl/plan-gratis-intake-met-andrea", priority: 0.75 },
  { path: "/nl/plan-gratis-intake-met-dara", priority: 0.75 },
  { path: "/nl/plan-gratis-intake-met-jearmey", priority: 0.75 },
];

export function GET() {
  const now = new Date().toISOString();
  const urls = aiPriorityPages
    .map(
      ({ path, priority }) => `  <url>
    <loc>${BASE}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority.toFixed(2)}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
