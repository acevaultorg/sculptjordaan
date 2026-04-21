import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
    ];
  },

  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' www.googletagmanager.com www.google-analytics.com googleads.g.doubleclick.net connect.facebook.net www.clarity.ms app.acuityscheduling.com funnelpilot.app plausible.io analytics.tiktok.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: *.google-analytics.com *.googletagmanager.com wa.me",
      "font-src 'self'",
      "connect-src 'self' www.googletagmanager.com www.google-analytics.com analytics.google.com googleads.g.doubleclick.net connect.facebook.net www.clarity.ms app.acuityscheduling.com funnelpilot.app plausible.io analytics.tiktok.com",
      "frame-src app.acuityscheduling.com www.google.com maps.google.com",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
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

export default nextConfig;
