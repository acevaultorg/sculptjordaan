// Cloudflare Pages Functions middleware — runs on every request.
// Ported from src/app's former src/middleware.ts during the Vercel→CF Pages
// migration (2026-07-07). CF Pages `_redirects` can't do HOST-based routing or
// header-based logic, so those live here; all PATH-based redirects (the ~360
// rules incl. /review + wrong-locale slugs) are in public/_redirects.
//
// Handles: (1) vanity-domain host routing → deep links on sculptclub.nl + UTM;
//          (2) www.sculptclub.nl → apex; (3) /start → Accept-Language locale.
// Everything else passes through to the static asset.

type VanityRoute = { destPath: string; utmSource: string; utmCampaign: string };

// Each of these hostnames must be attached as a custom domain on the
// `sculptclub` CF Pages project for this to fire (same as the old Vercel aliases).
const vanityDomains: Record<string, VanityRoute> = {
  "ptjordaan.nl": { destPath: "/nl/vind-jouw-personal-trainer", utmSource: "ptjordaan", utmCampaign: "local_pt" },
  "jordaanpt.nl": { destPath: "/nl/vind-jouw-personal-trainer", utmSource: "jordaanpt", utmCampaign: "pt" },
  "pt45.nl": { destPath: "/nl/vind-jouw-personal-trainer", utmSource: "pt45", utmCampaign: "pt" },
  "vindpt.nl": { destPath: "/nl/vind-jouw-personal-trainer", utmSource: "vindpt", utmCampaign: "pt" },
  "sculpt45.com": { destPath: "/nl/prijzen", utmSource: "sculpt45", utmCampaign: "pricing" },
  "gymjordaan.nl": { destPath: "/nl/open-gym", utmSource: "gymjordaan", utmCampaign: "opengym" },
  "krachtzaal.nl": { destPath: "/nl/open-gym", utmSource: "krachtzaal", utmCampaign: "opengym" },
  "jordaangym.nl": { destPath: "/nl", utmSource: "jordaangym", utmCampaign: "homepage" },
  "sculptjordaan.nl": { destPath: "/nl", utmSource: "sculptjordaan", utmCampaign: "brand_variant" },
};

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();
  const bareHost = host.replace(/^www\./, "");

  // ── Vanity domain routing ────────────────────────────────────────────────
  const vanity = vanityDomains[bareHost];
  if (vanity) {
    const target = new URL(`https://sculptclub.nl${vanity.destPath}`);
    // Preserve a deeper incoming path (e.g. /about) instead of flattening it.
    if (url.pathname && url.pathname !== "/") target.pathname = url.pathname;
    // Preserve inbound query, then inject UTM if the caller didn't supply one.
    url.searchParams.forEach((v, k) => target.searchParams.set(k, v));
    if (!target.searchParams.has("utm_source")) {
      target.searchParams.set("utm_source", vanity.utmSource);
      target.searchParams.set("utm_medium", "vanity_domain");
      target.searchParams.set("utm_campaign", vanity.utmCampaign);
    }
    return Response.redirect(target.toString(), 301);
  }

  // ── www.sculptclub.nl → apex (keep path + query) ─────────────────────────
  if (host === "www.sculptclub.nl") {
    url.hostname = "sculptclub.nl";
    return Response.redirect(url.toString(), 301);
  }

  // ── /start → Accept-Language locale (no static content of its own) ───────
  // (Root `/` ALWAYS serves Dutch — never auto-flip; see CLAUDE.md killed
  //  investigations. Only /start auto-detects.)
  if (url.pathname === "/start") {
    const acceptLang = context.request.headers.get("accept-language") || "";
    url.pathname = acceptLang.toLowerCase().startsWith("nl") ? "/nl/start" : "/en/start";
    return Response.redirect(url.toString(), 302);
  }

  return context.next();
};
