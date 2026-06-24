import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Cost optimization (2026-05-06): default deviceSizes generates up to 8
    // variants per source image (640/750/828/1080/1200/1920/2048/3840). For a
    // marketing site this is over-provisioned; the trimmed list below covers
    // the layouts in use. Cuts unique-transform count by ~38%.
    //
    // 2026-06-02 LCP fix: added 1280 between 1080 and 1920. CDP-measured LCP
    // on slow-4G mobile (Pixel-ish 393×852@3DPR) was 4572ms — POOR. Root cause:
    // hero img `sizes="100vw"` + DPR-3 viewport → effective need 1179px →
    // browser picked 1920 (next-up from 1080). 1920 AVIF ~250-400KB vs 1280
    // AVIF ~120KB. Adding 1280 catches the 393×3 + 414×3 (iPhone 14 Pro / 14
    // Pro Max / Pixel 7-8) most-common-mobile path. Projected LCP: 4.5s → ~2-2.5s.
    deviceSizes: [640, 828, 1080, 1280, 1920],
    // Default minimumCacheTTL is 14400s (4h) — every cached transform
    // revalidates that often, paying for transforms over and over. Raising to
    // 7 days (604800) cuts revalidations ~42×. Source images on this project
    // change rarely (they're committed JPEGs); 7-day staleness is acceptable
    // and on operator-triggered re-deploy the cache is invalidated by the
    // Vercel build pipeline anyway.
    minimumCacheTTL: 604800,
    // Lock to single quality variant (default behavior, but explicit prevents
    // accidental future per-image overrides from doubling variant count).
    qualities: [75],
  },

  async redirects() {
    return [
      // NL root duplicate
      { source: "/nl", destination: "/", permanent: true },
      { source: "/nl/", destination: "/", permanent: true },

      // Old WP slug redirects
      { source: "/hello-world", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/nl/blog", permanent: true },
      { source: "/tag/:path*", destination: "/nl/blog", permanent: true },
      { source: "/wp-admin", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },

      // Trainer short URLs
      { source: "/nl/alex", destination: "/nl/plan-gratis-intake-met-alex", permanent: true },
      { source: "/en/alex", destination: "/en/find-personal-trainer", permanent: true },
      { source: "/nl/eva", destination: "/nl/plan-gratis-intake-met-eva", permanent: true },
      { source: "/en/eva", destination: "/en/find-personal-trainer", permanent: true },
      { source: "/nl/hamish", destination: "/nl/plan-gratis-intake-met-hamish", permanent: true },
      { source: "/en/hamish", destination: "/en/find-personal-trainer", permanent: true },
      { source: "/nl/andrea", destination: "/nl/plan-gratis-intake-met-andrea", permanent: true },
      { source: "/en/andrea", destination: "/en/find-personal-trainer", permanent: true },
      { source: "/nl/dara", destination: "/nl/plan-gratis-intake-met-dara", permanent: true },
      { source: "/en/dara", destination: "/en/find-personal-trainer", permanent: true },

      // Common misspellings / old paths
      { source: "/pricing", destination: "/nl/prijzen", permanent: true },
      { source: "/prijzen", destination: "/nl/prijzen", permanent: true },
      { source: "/schedule", destination: "/nl/boek", permanent: true },
      { source: "/en/schedule", destination: "/en/book", permanent: true },
      { source: "/gallery", destination: "/", permanent: true },
      { source: "/en/gallery", destination: "/en", permanent: true },
      { source: "/classes", destination: "/nl/open-gym", permanent: true },
      { source: "/en/classes", destination: "/en/open-gym", permanent: true },
      { source: "/trainers", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/en/trainers", destination: "/en/find-personal-trainer", permanent: true },

      // Old WP page slugs → new paths
      { source: "/nl/training-studio-huren-amsterdam", destination: "/nl/studio-huren", permanent: true },
      { source: "/en/rent-training-studio-amsterdam", destination: "/en/studio-rental", permanent: true },
      { source: "/nl/hoe-het-studio-huren-sculptclub-werkt", destination: "/nl/studio-huren", permanent: true },
      { source: "/en/rent-the-studio-how-sculptclub-works", destination: "/en/studio-rental", permanent: true },
      { source: "/nl/zo-werkt-open-gym", destination: "/nl/open-gym", permanent: true },
      { source: "/en/how-open-gym-works", destination: "/en/open-gym", permanent: true },
      // /en/start and /nl/start are now real Instagram landing pages (audience segmentation)

      // Campaign landing pages — short URLs for Instagram bio / TikTok / ads
      { source: "/gratis-intake", destination: "/nl/gratis-intake", permanent: false },
      { source: "/free-intro", destination: "/en/free-intro", permanent: false },
      // Trainer-acquisition landing — used in trainer-pitch social posts (TT + IG carousels).
      // Without this redirect, sculptclub.nl/voor-trainers 404'd; slide-2 image CTA + TikTok
      // caption end-line both point to the un-prefixed slug. Permanent 301 keeps any existing
      // TikTok post (already shipped 2026-05-17) resolving cleanly without regenerating images.
      { source: "/voor-trainers", destination: "/nl/voor-trainers", permanent: true },
      { source: "/for-trainers", destination: "/en/for-trainers", permanent: true },
      // Social-post URL migration (2026-05-17): flat /social/post.html consolidated
      // into directory-per-post layout (/social/<post-id>/). Permanent because the
      // new structure is the long-term canonical — every future post gets its own
      // directory, no more /social/post-N.html collisions.
      { source: "/social/post.html", destination: "/social/trainer-pitch-001/", permanent: true },
      // Single canonical Content Studio (operator decision 2026-06-24: "two pages
      // super confusing"). There were TWO surfaces both called "social": the old
      // static hub at /social/index.html ("Content Hub") AND the polished React
      // Posting Studio at /nl/social. The studio is the real tool — so bare /social
      // now redirects to it. EXACT match: this does NOT catch the deeper asset paths
      // /social/<pack>/ or /social/<pack>/*.png (the slide PNGs the studio loads),
      // which keep serving from public/social/<pack>/. (Supersedes the 2026-05-16
      // removal of this same redirect — the "serve the hub" rationale is retired.)
      { source: "/social", destination: "/nl/social", permanent: false },
      // /start is handled by middleware (language detection) — not here

      // Shortlinks (migrated from Hostinger redirects)
      { source: "/ft", destination: "/en/find-personal-trainer", permanent: true },
      { source: "/bs", destination: "/nl/boek-studio", permanent: true },
      { source: "/rent", destination: "/nl/studio-huren", permanent: true },
      { source: "/qr-door-sign", destination: "/en/become-trainer", permanent: true },
      { source: "/book-a-free-session", destination: "/en/become-trainer", permanent: true },
      { source: "/qr", destination: "/", permanent: true },
      { source: "/qr01", destination: "/", permanent: true },

      // Utility pages
      { source: "/acuity/:path*", destination: "/nl/boek", permanent: true },
      { source: "/coming-soon", destination: "/", permanent: true },
      { source: "/pt-jordaan", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/nl/pt-jordaan", destination: "/nl/vind-jouw-personal-trainer", permanent: true },

      // ─── Old blog posts → blog index (53 posts from WordPress) ───
      // NL fitness guides
      { source: "/hoeveel-eiwit-heb-je-nodig", destination: "/nl/blog", permanent: true },
      { source: "/maaltijdtiming-voor-vetverlies", destination: "/nl/blog", permanent: true },
      { source: "/consistent-trainen-tips", destination: "/nl/blog", permanent: true },
      { source: "/trainen-met-druk-schema", destination: "/nl/blog", permanent: true },
      { source: "/fouten-beginners-sportschool", destination: "/nl/blog", permanent: true },
      { source: "/de-voordelen-van-personal-training-vs-alleen-trainen", destination: "/nl/blog", permanent: true },
      { source: "/hoe-warm-je-goed-op-voor-krachttraining", destination: "/nl/blog", permanent: true },
      { source: "/welke-apparatuur-heb-je-nodig-voor-een-volledige-workout", destination: "/nl/blog", permanent: true },
      { source: "/realistische-fitnessdoelen-stellen-en-ze-ook-bereiken", destination: "/nl/blog", permanent: true },
      { source: "/waarom-amsterdamse-professionals-kiezen-voor-prive-studios", destination: "/nl/blog", permanent: true },
      { source: "/krachttraining-voor-beginners", destination: "/nl/blog", permanent: true },
      { source: "/progressive-overload-uitleg", destination: "/nl/blog", permanent: true },
      { source: "/trainingsschema-drukke-professionals", destination: "/nl/blog", permanent: true },
      { source: "/body-recompositie", destination: "/nl/blog", permanent: true },
      { source: "/prive-training-vs-sportschool", destination: "/nl/blog", permanent: true },
      { source: "/eerste-sessie-sculptclub", destination: "/nl/blog", permanent: true },
      { source: "/personal-training-prijzen-amsterdam", destination: "/nl/blog", permanent: true },
      { source: "/beste-plekken-trainen-jordaan-amsterdam", destination: "/nl/blog", permanent: true },
      { source: "/rustdagen-krachttraining", destination: "/nl/blog", permanent: true },
      // EN fitness guides
      { source: "/how-much-protein-do-you-actually-need", destination: "/en/blog", permanent: true },
      { source: "/meal-timing-for-fat-loss", destination: "/en/blog", permanent: true },
      { source: "/how-to-stay-consistent-with-training", destination: "/en/blog", permanent: true },
      { source: "/training-with-busy-schedule", destination: "/en/blog", permanent: true },
      { source: "/beginner-gym-mistakes", destination: "/en/blog", permanent: true },
      { source: "/benefits-personal-training-vs-training-alone", destination: "/en/blog", permanent: true },
      { source: "/how-to-warm-up-before-strength-training", destination: "/en/blog", permanent: true },
      { source: "/gym-equipment-full-workout", destination: "/en/blog", permanent: true },
      { source: "/setting-realistic-fitness-goals", destination: "/en/blog", permanent: true },
      { source: "/private-gym-amsterdam-professionals", destination: "/en/blog", permanent: true },
      { source: "/strength-training-beginners", destination: "/en/blog", permanent: true },
      { source: "/progressive-overload-explained", destination: "/en/blog", permanent: true },
      { source: "/training-split-busy-professionals", destination: "/en/blog", permanent: true },
      { source: "/body-recomposition", destination: "/en/blog", permanent: true },
      { source: "/private-training-vs-commercial-gym", destination: "/en/blog", permanent: true },
      { source: "/first-session-sculptclub", destination: "/en/blog", permanent: true },
      { source: "/personal-training-prices-amsterdam", destination: "/en/blog", permanent: true },
      { source: "/best-places-train-jordaan-amsterdam", destination: "/en/blog", permanent: true },
      { source: "/rest-days-strength-training", destination: "/en/blog", permanent: true },
      // NL SEO landing pages
      { source: "/zzp-personal-trainer-beginnen-amsterdam", destination: "/nl/studio-huren", permanent: true },
      { source: "/schijnzelfstandigheid-personal-trainer", destination: "/nl/studio-huren", permanent: true },
      { source: "/personal-training-ruimte-huren-amsterdam", destination: "/nl/studio-huren", permanent: true },
      { source: "/kosten-personal-training-studio-huren-amsterdam", destination: "/nl/studio-huren", permanent: true },
      { source: "/studio-huurmodel-sculptclub-trainers", destination: "/nl/studio-huren", permanent: true },
      { source: "/wat-kost-personal-training-in-amsterdam", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/sportschool-zonder-abonnement-in-amsterdam", destination: "/nl/open-gym", permanent: true },
      { source: "/personal-training-voor-beginners-wat-je-moet-weten", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/sporten-in-de-jordaan-de-beste-opties-voor-fitness-en-personal-training", destination: "/", permanent: true },
      // EN SEO landing pages
      { source: "/personal-training-studio-jordaan-amsterdam", destination: "/en/studio-rental", permanent: true },
      { source: "/open-gym-amsterdam-jordaan", destination: "/en/open-gym", permanent: true },
      { source: "/rent-a-personal-training-studio-in-amsterdam-jordaan-how-sculptclub-works", destination: "/en/studio-rental", permanent: true },
      { source: "/how-to-choose-a-personal-trainer-in-amsterdam-jordaan-a-no-nonsense-checklist", destination: "/en/find-personal-trainer", permanent: true },
      { source: "/studio-rental-model-sculptclub-trainers", destination: "/en/studio-rental", permanent: true },
      { source: "/english-speaking-personal-trainers-in-amsterdam", destination: "/en/find-personal-trainer", permanent: true },

      // ─── GSC 404 cleanup — naked slugs, typos, old spellings, WP artifacts ───
      // Naked/alternate section entry points
      { source: "/blog", destination: "/nl/blog", permanent: true },
      { source: "/contact", destination: "/nl/contact", permanent: true },
      { source: "/reviews", destination: "/nl/reviews", permanent: true },
      { source: "/studio", destination: "/nl/studio-huren", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/nl/home", destination: "/", permanent: true },
      { source: "/en/home", destination: "/en", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/nl/index.html", destination: "/", permanent: true },
      { source: "/jordaan", destination: "/", permanent: true },
      { source: "/nl/jordaan", destination: "/", permanent: true },
      { source: "/sculptclub", destination: "/", permanent: true },
      // Personal training variants
      { source: "/personal-training", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/nl/personal-training", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/en/personal-training", destination: "/en/find-personal-trainer", permanent: true },
      { source: "/personal-trainer-amsterdam", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/nl/trainers", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/nl/training", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/nl/team", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/en/team", destination: "/en/find-personal-trainer", permanent: true },
      // Become-a-trainer variants
      { source: "/nl/werk-met-ons", destination: "/nl/word-trainer", permanent: true },
      { source: "/nl/word-pt", destination: "/nl/word-trainer", permanent: true },
      { source: "/en/become-pt", destination: "/en/become-trainer", permanent: true },
      // About/location/team
      { source: "/nl/over", destination: "/nl/over-ons", permanent: true },
      { source: "/en/over-ons", destination: "/en/about", permanent: true },
      { source: "/nl/locatie", destination: "/nl/locatie-uren", permanent: true },
      { source: "/en/location", destination: "/en/location-hours", permanent: true },
      // Gym / studio variants
      { source: "/nl/sportschool", destination: "/nl/open-gym", permanent: true },
      // Booking variants
      { source: "/nl/reserveer", destination: "/nl/boek", permanent: true },
      { source: "/en/book-session", destination: "/en/book", permanent: true },
      // Pricing variants
      { source: "/prijzen-pt", destination: "/nl/prijzen", permanent: true },
      { source: "/nl/prijzen-pt", destination: "/nl/prijzen", permanent: true },
      { source: "/tarieven", destination: "/nl/prijzen", permanent: true },
      { source: "/nl/tarieven", destination: "/nl/prijzen", permanent: true },
      { source: "/en/rates", destination: "/en/pricing", permanent: true },
      // Gift cards
      { source: "/nl/cadeaubon", destination: "/nl/cadeaukaarten", permanent: true },
      { source: "/en/gift-card", destination: "/en/gift-cards", permanent: true },
      // Sitemap / feed artifacts (WordPress legacy)
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemaps.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap-index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/rss", destination: "/nl/blog", permanent: true },
      { source: "/feed", destination: "/nl/blog", permanent: true },
      { source: "/nl/feed", destination: "/nl/blog", permanent: true },
      { source: "/en/feed", destination: "/en/blog", permanent: true },
      { source: "/nl/blog/rss", destination: "/nl/blog", permanent: true },
      { source: "/en/blog/rss", destination: "/en/blog", permanent: true },

      // ─── GSC 404 cleanup — wave 2 (PT variants, legal pages, intake aliases) ───
      // PT shortcodes
      { source: "/pt", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/nl/pt", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/en/pt", destination: "/en/find-personal-trainer", permanent: true },
      // Missing locale prefix on booking + gym pages
      { source: "/boek-studio", destination: "/nl/boek-studio", permanent: true },
      { source: "/boek-gym", destination: "/nl/boek-gym", permanent: true },
      { source: "/open-gym", destination: "/nl/open-gym", permanent: true },
      // Find-trainer EN variants
      { source: "/find-trainer", destination: "/en/find-personal-trainer", permanent: true },
      { source: "/nl/find-trainer", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/trainers-amsterdam", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/nl/trainers-amsterdam", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/studio-huren-amsterdam", destination: "/nl/studio-huren", permanent: true },
      { source: "/nl/jordaan-personal-trainer", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      // Subscription / membership queries (SculptClub has no memberships — land them on pricing)
      { source: "/nl/abonnementen", destination: "/nl/prijzen", permanent: true },
      { source: "/en/abonnementen", destination: "/en/pricing", permanent: true },
      { source: "/abonnement", destination: "/nl/prijzen", permanent: true },
      { source: "/nl/abonnement", destination: "/nl/prijzen", permanent: true },
      // Legal / policy naked variants
      { source: "/privacy", destination: "/nl/privacybeleid", permanent: true },
      { source: "/nl/privacy", destination: "/nl/privacybeleid", permanent: true },
      { source: "/en/privacy", destination: "/en/privacy-policy", permanent: true },
      { source: "/cookies", destination: "/nl/cookiebeleid", permanent: true },
      { source: "/nl/cookies", destination: "/nl/cookiebeleid", permanent: true },
      { source: "/en/cookies", destination: "/en/cookie-policy", permanent: true },
      { source: "/terms", destination: "/nl/algemene-voorwaarden", permanent: true },
      { source: "/nl/terms", destination: "/nl/algemene-voorwaarden", permanent: true },
      { source: "/en/terms", destination: "/en/terms-conditions", permanent: true },
      { source: "/en/terms-and-conditions", destination: "/en/terms-conditions", permanent: true },
      { source: "/en/terms-of-service", destination: "/en/terms-conditions", permanent: true },
      { source: "/nl/voorwaarden", destination: "/nl/algemene-voorwaarden", permanent: true },
      { source: "/en/accessibility", destination: "/en/accessibility-statement", permanent: true },
      // Intake aliases
      { source: "/intake", destination: "/nl/gratis-intake", permanent: true },
      { source: "/nl/intake", destination: "/nl/gratis-intake", permanent: true },
      { source: "/en/intake", destination: "/en/free-intro", permanent: true },
      { source: "/free-intake", destination: "/nl/gratis-intake", permanent: true },
      { source: "/free-intro-session", destination: "/en/free-intro", permanent: true },
      // Sitemap variants
      { source: "/nl/sitemap", destination: "/sitemap.xml", permanent: true },
      { source: "/en/sitemap", destination: "/sitemap.xml", permanent: true },
      // WordPress author legacy
      { source: "/author/:path*", destination: "/", permanent: true },
      // AMP legacy (AMP was removed)
      { source: "/amp", destination: "/", permanent: true },
      { source: "/nl/amp", destination: "/nl/blog", permanent: true },

      // ─── GSC 404 cleanup — wave 3 (exact URL list pulled from Search Console 2026-04-19) ───
      // No-locale trainer intake (old WP slugs)
      { source: "/plan-gratis-intake-met-alex", destination: "/nl/plan-gratis-intake-met-alex", permanent: true },
      { source: "/plan-gratis-intake-met-dara", destination: "/nl/plan-gratis-intake-met-dara", permanent: true },
      { source: "/plan-gratis-intake-met-eva", destination: "/nl/plan-gratis-intake-met-eva", permanent: true },
      { source: "/plan-gratis-intake-met-hamish", destination: "/nl/plan-gratis-intake-met-hamish", permanent: true },
      { source: "/plan-gratis-intake-met-andrea", destination: "/nl/plan-gratis-intake-met-andrea", permanent: true },
      { source: "/plan-gratis-intake-met-gezina", destination: "/nl/plan-gratis-intake-met-gezina", permanent: true },
      { source: "/plan-gratis-intake-met-jearmey", destination: "/nl/plan-gratis-intake-met-jearmey", permanent: true },
      { source: "/plan-gratis-intake-met-joey", destination: "/nl/plan-gratis-intake-met-joey", permanent: true },
      // WP duplicate-page artifacts
      { source: "/sculpt45class", destination: "/nl/open-gym", permanent: true },
      { source: "/help", destination: "/nl/contact", permanent: true },
      { source: "/nl/members", destination: "/nl/prijzen", permanent: true },
      { source: "/nl/contact-2", destination: "/nl/contact", permanent: true },
      { source: "/home-nl/faqs", destination: "/nl/faqs", permanent: true },
      { source: "/sculptclub-partner", destination: "/", permanent: true },
      { source: "/en/home-kopie-english", destination: "/en", permanent: true },
      { source: "/rent-studio-kopieren", destination: "/nl/studio-huren", permanent: true },
      { source: "/club-access-kopieren", destination: "/nl/open-gym", permanent: true },
      { source: "/start-2", destination: "/", permanent: true },
      { source: "/start-", destination: "/", permanent: true },
      { source: "/home-nl", destination: "/", permanent: true },
      // Naked legacy slugs that never had a locale prefix
      { source: "/rent-studio-for-trainers", destination: "/nl/studio-huren", permanent: true },
      { source: "/en/rent-studio-for-trainers", destination: "/en/studio-rental", permanent: true },
      { source: "/rent-studio", destination: "/nl/studio-huren", permanent: true },
      { source: "/training-studio-rent-jordaan-amsterdam", destination: "/en/studio-rental", permanent: true },
      { source: "/terms-conditions", destination: "/nl/algemene-voorwaarden", permanent: true },
      { source: "/try", destination: "/nl/gratis-intake", permanent: true },
      { source: "/come-by", destination: "/nl/locatie-uren", permanent: true },
      { source: "/subscriptions", destination: "/nl/prijzen", permanent: true },
      { source: "/fullorhalf", destination: "/nl/prijzen", permanent: true },
      { source: "/full", destination: "/nl/prijzen", permanent: true },
      { source: "/workout-sheets", destination: "/nl/blog", permanent: true },
      { source: "/memberships", destination: "/nl/prijzen", permanent: true },
      { source: "/faq", destination: "/nl/faqs", permanent: true },
      { source: "/small-group-trainer", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/club-access", destination: "/nl/open-gym", permanent: true },
      { source: "/Club-access", destination: "/nl/open-gym", permanent: true },
      { source: "/START", destination: "/", permanent: true },
      { source: "/choose-trainer", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/strength-45", destination: "/nl/prijzen", permanent: true },
      // EN blog slug was Dutch — send to EN equivalent
      { source: "/en/blog/prive-sportschool-vs-grote-sportschool", destination: "/en/blog/private-gym-vs-big-box-gym", permanent: true },

      // ─── GSC 404 cleanup — wave 4 (pulled from Search Console 2026-05-12) ───
      // 5 gaps caught after wave-3 audit: WP path-probe + missing locale/blog redirects + naked /about
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/nl/faqs-2", destination: "/nl/faqs", permanent: true },
      { source: "/nl/blog/personal-trainer-amsterdam-jordaan", destination: "/nl/personal-trainer-jordaan", permanent: true },
      { source: "/bookstudio", destination: "/nl/boek-studio", permanent: true },
      { source: "/about", destination: "/nl/over-ons", permanent: true },
    ];
  },

  async headers() {
    // Content-Security-Policy
    // Cloudflare Web Analytics: beacon at static.cloudflareinsights.com loads + posts back
    // to *.cloudflareinsights.com — both must be allowlisted (was missing pre-2026-04-27).
    // Hardening: base-uri / object-src / frame-ancestors / form-action / upgrade-insecure
    // close common XSS + clickjacking vectors that the prior CSP left open.
    const csp = [
      "default-src 'self'",
      // Clarity loads recording script from scripts.clarity.ms and POSTs
      // session data to *.clarity.ms (k/a/b/.../z). Prior CSP allowlisted
      // only `www.clarity.ms` (tag loader) → script + collect requests
      // blocked → 0 sessions recorded for 3+ days while Plausible captured
      // 152 UV/7d. Switching to `*.clarity.ms` wildcard covers all
      // current + future Microsoft Clarity subdomains.
      "script-src 'self' 'unsafe-inline' www.googletagmanager.com www.google-analytics.com googleads.g.doubleclick.net pagead2.googlesyndication.com connect.facebook.net *.clarity.ms app.acuityscheduling.com embed.acuityscheduling.com funnelpilot.app plausible.io analytics.tiktok.com static.cloudflareinsights.com",
      "style-src 'self' 'unsafe-inline'",
      // pagead2.googlesyndication.com + googleads.g.doubleclick.net → Google Ads
      // remarketing/conversion pixels load 1×1 tracking images; were blocked
      // pre-2026-05-17 (Lighthouse console errors).
      "img-src 'self' data: blob: *.google-analytics.com *.googletagmanager.com *.clarity.ms www.facebook.com www.google.com pagead2.googlesyndication.com googleads.g.doubleclick.net wa.me",
      "font-src 'self'",
      // 2026-05-17 additions per Lighthouse mobile audit: TikTok Events API
      // ships its pixel data to tiktokw.us subdomains (web-events flow);
      // Meta Conversions API Gateway uses conversionsapigateway.com for
      // server-side pixel forwarding; Google Ads pagead2 endpoint posts
      // back conversion data. All three were blocked → console errors +
      // attribution loss for paid campaigns.
      // 2026-06-22: the Meta Pixel (connect.facebook.net/signals/config/<id>)
      // forwards events to Meta's MANAGED server-side gateway hosted on Google
      // Cloud Run + AWS — e.g. mpc-prod-<hash>.a.run.app/events?cee=no and
      // <hash>.ecs.us-east-1.on.aws/event — NOT the *.conversionsapigateway.com
      // domain allowlisted above. Those two were CSP-blocked, throwing
      // SecurityPolicyViolation console errors on iOS Safari (~46% of iOS
      // sessions / ~28% of homepage sessions per Microsoft Clarity, 2026-06-22)
      // AND silently dropping the server-side conversion signal for Meta /
      // Instagram ads (Instagram is a top traffic source). Allowlisting the
      // managed-forwarder host patterns (https-scoped) COMPLETES the 2026-05-17
      // "allow Meta CAPI forwarding" decision above — same goal, the real hosts.
      // NOTE: broad subdomain wildcards = a mild CSP widening; Meta may rotate
      // the cluster hash/region (would re-block → re-capture the source from a
      // WebKit securitypolicyviolation listener and re-tighten).
      "connect-src 'self' www.googletagmanager.com www.google-analytics.com analytics.google.com region1.google-analytics.com googleads.g.doubleclick.net ad.doubleclick.net pagead2.googlesyndication.com connect.facebook.net *.conversionsapigateway.com https://*.a.run.app https://*.ecs.us-east-1.on.aws *.clarity.ms app.acuityscheduling.com embed.acuityscheduling.com funnelpilot.app plausible.io analytics.tiktok.com *.tiktokw.us cloudflareinsights.com *.cloudflareinsights.com",
      "frame-src app.acuityscheduling.com embed.acuityscheduling.com www.google.com maps.google.com",
      "base-uri 'self'",
      "form-action 'self' https://wa.me",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=(), payment=(self), interest-cohort=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
