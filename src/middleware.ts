import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { alternateRoutes } from "@/config/navigation";

/**
 * Vanity domain routing map.
 *
 * Each entry maps a hostname to a deep-link destination on sculptclub.nl with
 * UTM attribution. This lives in code (not Vercel dashboard) so it's
 * version-controlled and can't be lost by accidental dashboard edits.
 *
 * Requirement: each vanity domain must be added to Vercel as a Domain
 * (alias) on the SculptClub project, NOT as a "Redirect to URL". If it's
 * set as a Redirect, Vercel's edge handles it before middleware runs and
 * this map is bypassed. See HEALTH.md in vault root for the setup guide.
 */
type VanityRoute = {
  destPath: string; // path on sculptclub.nl (always starts with /)
  utmSource: string;
  utmCampaign: string;
};

const vanityDomains: Record<string, VanityRoute> = {
  // PT finder funnel — all four variants land on the Dutch "Vind jouw personal trainer" page
  "ptjordaan.nl": {
    destPath: "/nl/vind-jouw-personal-trainer",
    utmSource: "ptjordaan",
    utmCampaign: "local_pt",
  },
  "jordaanpt.nl": {
    destPath: "/nl/vind-jouw-personal-trainer",
    utmSource: "jordaanpt",
    utmCampaign: "pt",
  },
  "pt45.nl": {
    destPath: "/nl/vind-jouw-personal-trainer",
    utmSource: "pt45",
    utmCampaign: "pt",
  },
  "vindpt.nl": {
    destPath: "/nl/vind-jouw-personal-trainer",
    utmSource: "vindpt",
    utmCampaign: "pt",
  },
  // Studio rental funnel
  "sculptspace.nl": {
    destPath: "/nl/studio-huren",
    utmSource: "sculptspace",
    utmCampaign: "studio_rental",
  },
  // Pricing entry
  "sculpt45.com": {
    destPath: "/nl/prijzen",
    utmSource: "sculpt45",
    utmCampaign: "pricing",
  },
  // Open Gym funnel
  "gymjordaan.nl": {
    destPath: "/nl/open-gym",
    utmSource: "gymjordaan",
    utmCampaign: "opengym",
  },
  "krachtzaal.nl": {
    destPath: "/nl/open-gym",
    utmSource: "krachtzaal",
    utmCampaign: "opengym",
  },
  // Homepage landers — Dutch domains land on /nl (NOT /en)
  "jordaangym.nl": {
    destPath: "/nl",
    utmSource: "jordaangym",
    utmCampaign: "homepage",
  },
  "sculptjordaan.nl": {
    destPath: "/nl",
    utmSource: "sculptjordaan",
    utmCampaign: "brand_variant",
  },
};

/**
 * Auto-redirect wrong-locale slugs to the correct path.
 * e.g. /en/boek-studio → /en/book-studio, /nl/book-studio → /nl/boek-studio
 * Derived from alternateRoutes so it stays in sync automatically.
 */
const wrongLocaleRedirects: Record<string, string> = {};
for (const [from, to] of Object.entries(alternateRoutes)) {
  const fromIsEN = from.startsWith("/en");
  const toIsEN = to.startsWith("/en");

  if (!fromIsEN && toIsEN) {
    // NL→EN mapping: /nl/boek-studio → /en/book-studio
    // Wrong URL: /en/boek-studio (NL slug under EN prefix) → redirect to /en/book-studio
    const nlSlug = from.replace(/^\/nl/, "");
    const wrongPath = "/en" + nlSlug;
    if (wrongPath !== to) wrongLocaleRedirects[wrongPath] = to;
  } else if (fromIsEN && !toIsEN) {
    // EN→NL mapping: /en/book-studio → /nl/boek-studio
    // Wrong URL: /nl/book-studio (EN slug under NL prefix) → redirect to /nl/boek-studio
    const enSlug = from.replace(/^\/en/, "");
    const wrongPath = "/nl" + enSlug;
    if (wrongPath !== to) wrongLocaleRedirects[wrongPath] = to;
  }
}

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").toLowerCase();
  // Strip any "www." prefix so ptjordaan.nl and www.ptjordaan.nl match the same rule
  const bareHost = host.replace(/^www\./, "");

  // ── Vanity domain routing ────────────────────────────────────────────────
  // Check if the request host is one of our vanity redirect domains.
  // On match, redirect to the mapped deep-link path on sculptclub.nl with
  // UTM attribution preserved + injected.
  const vanity = vanityDomains[bareHost];
  if (vanity) {
    const incoming = new URL(request.url);
    const target = new URL(`https://sculptclub.nl${vanity.destPath}`);

    // If the incoming request has a deeper path (e.g. /about, /contact),
    // append it so deep-links are preserved instead of flattened.
    if (incoming.pathname && incoming.pathname !== "/" && incoming.pathname !== "") {
      target.pathname = incoming.pathname;
    }

    // Preserve any inbound query params (e.g. ?fbclid=...), then inject UTM
    // attribution if the incoming request didn't already supply utm_source.
    incoming.searchParams.forEach((value, key) => target.searchParams.set(key, value));
    if (!target.searchParams.has("utm_source")) {
      target.searchParams.set("utm_source", vanity.utmSource);
      target.searchParams.set("utm_medium", "vanity_domain");
      target.searchParams.set("utm_campaign", vanity.utmCampaign);
    }

    return NextResponse.redirect(target, 301);
  }

  // Redirect www.sculptclub.nl → sculptclub.nl (keep path + query)
  if (host === "www.sculptclub.nl") {
    const url = new URL(request.url);
    url.host = "sculptclub.nl";
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  const { pathname } = request.nextUrl;

  // Redirect wrong-locale slugs (e.g. /en/boek-studio → /en/book-studio)
  const redirect = wrongLocaleRedirects[pathname];
  if (redirect) {
    const url = request.nextUrl.clone();
    url.pathname = redirect;
    return NextResponse.redirect(url, 301);
  }

  // Auto-detect language on root path and /start
  // Dutch system language → NL, all others → EN
  if (pathname === "/" || pathname === "/start") {
    const acceptLang = request.headers.get("accept-language") || "";
    const isDutch = acceptLang.startsWith("nl");

    if (pathname === "/") {
      if (!isDutch) {
        const url = request.nextUrl.clone();
        url.pathname = "/en";
        return NextResponse.redirect(url, 302);
      }
    } else {
      // /start → /nl/start or /en/start
      const url = request.nextUrl.clone();
      url.pathname = isDutch ? "/nl/start" : "/en/start";
      return NextResponse.redirect(url, 302);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|images|fonts|manifest.json|api).*)",
};
