import type { MetadataRoute } from "next";

// AI / LLM crawlers — explicit allowlist (bot-harvest, 2026).
// Each one becomes a citation channel: when these crawlers index the site,
// answers from ChatGPT / Claude / Perplexity / Gemini / Apple Intelligence
// can cite SculptClub, driving humans with intent.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Googlebot-Extended",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "Bytespider",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "FacebookExternalHit",
  "DuckAssistBot",
  "YouBot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search engines + Google Ads bots — full access, blocking crawl-relevant junk.
      {
        userAgent: ["Googlebot", "Bingbot", "DuckDuckBot", "YandexBot", "Baiduspider", "Slurp"],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["AdsBot-Google", "AdsBot-Google-Mobile", "Mediapartners-Google", "Googlebot-Image", "Googlebot-News"],
        allow: "/",
      },
      // AI / LLM crawlers — explicitly welcomed.
      ...AI_CRAWLERS.map((ua) => ({
        userAgent: ua,
        allow: "/",
        disallow: ["/api/"],
      })),
      // Catch-all for anything not enumerated above.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: ["https://sculptclub.nl/sitemap.xml", "https://sculptclub.nl/sitemap-ai.xml"],
    host: "https://sculptclub.nl",
  };
}
