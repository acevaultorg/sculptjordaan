import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // NL root duplicate
      { source: "/nl", destination: "/", permanent: true },
      { source: "/nl/", destination: "/", permanent: true },

      // Old WP slug redirects (from sc-redirects.php)
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
      { source: "/pricing", destination: "/nl/open-gym", permanent: true },
      { source: "/prijzen", destination: "/nl/open-gym", permanent: true },
      { source: "/en/pricing", destination: "/en/open-gym", permanent: true },
      { source: "/schedule", destination: "/nl/boek", permanent: true },
      { source: "/en/schedule", destination: "/en/book", permanent: true },
      { source: "/gallery", destination: "/", permanent: true },
      { source: "/en/gallery", destination: "/en", permanent: true },
      { source: "/classes", destination: "/nl/open-gym", permanent: true },
      { source: "/en/classes", destination: "/en/open-gym", permanent: true },
      { source: "/trainers", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/en/trainers", destination: "/en/find-personal-trainer", permanent: true },

      // Old WP page slugs → new paths
      { source: "/nl/vind-jouw-personal-trainer/", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/nl/training-studio-huren-amsterdam", destination: "/nl/studio-huren", permanent: true },
      { source: "/en/rent-training-studio-amsterdam", destination: "/en/studio-rental", permanent: true },
      { source: "/nl/hoe-het-studio-huren-sculptclub-werkt", destination: "/nl/studio-huren", permanent: true },
      { source: "/en/rent-the-studio-how-sculptclub-works", destination: "/en/studio-rental", permanent: true },
      { source: "/nl/zo-werkt-open-gym", destination: "/nl/open-gym", permanent: true },
      { source: "/en/how-open-gym-works", destination: "/en/open-gym", permanent: true },
      { source: "/en/start", destination: "/en/book", permanent: true },

      // Utility pages
      { source: "/acuity/:path*", destination: "/nl/boek", permanent: true },
      { source: "/coming-soon", destination: "/", permanent: true },
      { source: "/sitemap", destination: "/sitemap.xml", permanent: true },

      // PT Jordaan landing (old blog post as page)
      { source: "/pt-jordaan", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
      { source: "/nl/pt-jordaan", destination: "/nl/vind-jouw-personal-trainer", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
