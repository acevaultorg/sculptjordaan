var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// api/whatsapp/webhook.ts
var onRequestGet = /* @__PURE__ */ __name(async (context) => {
  const url = new URL(context.request.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge") || "";
  const expected = context.env.WHATSAPP_VERIFY_TOKEN;
  if (expected && mode === "subscribe" && token === expected) {
    return new Response(challenge, { status: 200, headers: { "Content-Type": "text/plain" } });
  }
  return new Response("Forbidden", { status: 403 });
}, "onRequestGet");
var onRequestPost = /* @__PURE__ */ __name(async () => {
  return new Response("OK", { status: 200 });
}, "onRequestPost");

// api/lead-magnet.ts
var json = /* @__PURE__ */ __name((data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
}), "json");
var onRequestPost2 = /* @__PURE__ */ __name(async (context) => {
  let body;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }
  const { email, source_page = "/", locale = "nl", lead_magnet = "unknown" } = body;
  if (!email || typeof email !== "string") return json({ error: "Email required" }, 400);
  const trimmed = email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return json({ error: "Invalid email format" }, 400);
  }
  console.log("LEAD_MAGNET", JSON.stringify({
    ts: (/* @__PURE__ */ new Date()).toISOString(),
    email: trimmed,
    source_page,
    locale,
    lead_magnet,
    ip: context.request.headers.get("cf-connecting-ip") || context.request.headers.get("x-forwarded-for") || "unknown",
    ua: context.request.headers.get("user-agent")?.slice(0, 100) || "unknown"
  }));
  const cheatSheetUrl = locale === "en" ? "/pt-cheat-sheet?locale=en" : "/pt-cheat-sheet";
  return json({
    ok: true,
    cheat_sheet_url: cheatSheetUrl,
    message: locale === "en" ? "Captured \u2014 operator will send the PDF shortly." : "Geregistreerd \u2014 operator stuurt de PDF binnenkort."
  });
}, "onRequestPost");

// _middleware.ts
var vanityDomains = {
  "ptjordaan.nl": { destPath: "/nl/vind-jouw-personal-trainer", utmSource: "ptjordaan", utmCampaign: "local_pt" },
  "jordaanpt.nl": { destPath: "/nl/vind-jouw-personal-trainer", utmSource: "jordaanpt", utmCampaign: "pt" },
  "pt45.nl": { destPath: "/nl/vind-jouw-personal-trainer", utmSource: "pt45", utmCampaign: "pt" },
  "vindpt.nl": { destPath: "/nl/vind-jouw-personal-trainer", utmSource: "vindpt", utmCampaign: "pt" },
  "sculpt45.com": { destPath: "/nl/prijzen", utmSource: "sculpt45", utmCampaign: "pricing" },
  "gymjordaan.nl": { destPath: "/nl/open-gym", utmSource: "gymjordaan", utmCampaign: "opengym" },
  "krachtzaal.nl": { destPath: "/nl/open-gym", utmSource: "krachtzaal", utmCampaign: "opengym" },
  "jordaangym.nl": { destPath: "/nl", utmSource: "jordaangym", utmCampaign: "homepage" },
  "sculptjordaan.nl": { destPath: "/nl", utmSource: "sculptjordaan", utmCampaign: "brand_variant" }
};
var EXACT = { "/nl": ["/", 301], "/nl/": ["/", 301], "/hello-world": ["/", 301], "/wp-admin": ["/", 301], "/wp-login.php": ["/", 301], "/nl/alex": ["/nl/plan-gratis-intake-met-alex", 301], "/en/alex": ["/en/find-personal-trainer", 301], "/nl/eva": ["/nl/plan-gratis-intake-met-eva", 301], "/en/eva": ["/en/find-personal-trainer", 301], "/nl/hamish": ["/nl/plan-gratis-intake-met-hamish", 301], "/en/hamish": ["/en/find-personal-trainer", 301], "/nl/andrea": ["/nl/plan-gratis-intake-met-andrea", 301], "/en/andrea": ["/en/find-personal-trainer", 301], "/nl/dara": ["/nl/plan-gratis-intake-met-dara", 301], "/en/dara": ["/en/find-personal-trainer", 301], "/pricing": ["/nl/prijzen", 301], "/prijzen": ["/nl/prijzen", 301], "/schedule": ["/nl/boek", 301], "/en/schedule": ["/en/book", 301], "/gallery": ["/", 301], "/en/gallery": ["/en", 301], "/classes": ["/nl/open-gym", 301], "/en/classes": ["/en/open-gym", 301], "/trainers": ["/nl/vind-jouw-personal-trainer", 301], "/en/trainers": ["/en/find-personal-trainer", 301], "/nl/training-studio-huren-amsterdam": ["/nl/studio-huren", 301], "/en/rent-training-studio-amsterdam": ["/en/studio-rental", 301], "/nl/hoe-het-studio-huren-sculptclub-werkt": ["/nl/studio-huren", 301], "/en/rent-the-studio-how-sculptclub-works": ["/en/studio-rental", 301], "/nl/zo-werkt-open-gym": ["/nl/open-gym", 301], "/en/how-open-gym-works": ["/en/open-gym", 301], "/gratis-intake": ["/nl/gratis-intake", 302], "/free-intro": ["/en/free-intro", 302], "/voor-trainers": ["/nl/voor-trainers", 301], "/for-trainers": ["/en/for-trainers", 301], "/social/post.html": ["/social/trainer-pitch-001/", 301], "/social": ["/nl/social", 302], "/ft": ["/en/find-personal-trainer", 301], "/bs": ["/nl/boek-studio", 301], "/rent": ["/nl/studio-huren", 301], "/qr-door-sign": ["/en/become-trainer", 301], "/book-a-free-session": ["/en/become-trainer", 301], "/qr": ["/", 301], "/qr01": ["/", 301], "/coming-soon": ["/", 301], "/pt-jordaan": ["/nl/vind-jouw-personal-trainer", 301], "/nl/pt-jordaan": ["/nl/vind-jouw-personal-trainer", 301], "/hoeveel-eiwit-heb-je-nodig": ["/nl/blog", 301], "/maaltijdtiming-voor-vetverlies": ["/nl/blog", 301], "/consistent-trainen-tips": ["/nl/blog", 301], "/trainen-met-druk-schema": ["/nl/blog", 301], "/fouten-beginners-sportschool": ["/nl/blog", 301], "/de-voordelen-van-personal-training-vs-alleen-trainen": ["/nl/blog", 301], "/hoe-warm-je-goed-op-voor-krachttraining": ["/nl/blog", 301], "/welke-apparatuur-heb-je-nodig-voor-een-volledige-workout": ["/nl/blog", 301], "/realistische-fitnessdoelen-stellen-en-ze-ook-bereiken": ["/nl/blog", 301], "/waarom-amsterdamse-professionals-kiezen-voor-prive-studios": ["/nl/blog", 301], "/krachttraining-voor-beginners": ["/nl/blog", 301], "/progressive-overload-uitleg": ["/nl/blog", 301], "/trainingsschema-drukke-professionals": ["/nl/blog", 301], "/body-recompositie": ["/nl/blog", 301], "/prive-training-vs-sportschool": ["/nl/blog", 301], "/eerste-sessie-sculptclub": ["/nl/blog", 301], "/personal-training-prijzen-amsterdam": ["/nl/blog", 301], "/beste-plekken-trainen-jordaan-amsterdam": ["/nl/blog", 301], "/rustdagen-krachttraining": ["/nl/blog", 301], "/how-much-protein-do-you-actually-need": ["/en/blog", 301], "/meal-timing-for-fat-loss": ["/en/blog", 301], "/how-to-stay-consistent-with-training": ["/en/blog", 301], "/training-with-busy-schedule": ["/en/blog", 301], "/beginner-gym-mistakes": ["/en/blog", 301], "/benefits-personal-training-vs-training-alone": ["/en/blog", 301], "/how-to-warm-up-before-strength-training": ["/en/blog", 301], "/gym-equipment-full-workout": ["/en/blog", 301], "/setting-realistic-fitness-goals": ["/en/blog", 301], "/private-gym-amsterdam-professionals": ["/en/blog", 301], "/strength-training-beginners": ["/en/blog", 301], "/progressive-overload-explained": ["/en/blog", 301], "/training-split-busy-professionals": ["/en/blog", 301], "/body-recomposition": ["/en/blog", 301], "/private-training-vs-commercial-gym": ["/en/blog", 301], "/first-session-sculptclub": ["/en/blog", 301], "/personal-training-prices-amsterdam": ["/en/blog", 301], "/best-places-train-jordaan-amsterdam": ["/en/blog", 301], "/rest-days-strength-training": ["/en/blog", 301], "/zzp-personal-trainer-beginnen-amsterdam": ["/nl/studio-huren", 301], "/schijnzelfstandigheid-personal-trainer": ["/nl/studio-huren", 301], "/personal-training-ruimte-huren-amsterdam": ["/nl/studio-huren", 301], "/kosten-personal-training-studio-huren-amsterdam": ["/nl/studio-huren", 301], "/studio-huurmodel-sculptclub-trainers": ["/nl/studio-huren", 301], "/wat-kost-personal-training-in-amsterdam": ["/nl/vind-jouw-personal-trainer", 301], "/sportschool-zonder-abonnement-in-amsterdam": ["/nl/open-gym", 301], "/personal-training-voor-beginners-wat-je-moet-weten": ["/nl/vind-jouw-personal-trainer", 301], "/sporten-in-de-jordaan-de-beste-opties-voor-fitness-en-personal-training": ["/", 301], "/personal-training-studio-jordaan-amsterdam": ["/en/studio-rental", 301], "/open-gym-amsterdam-jordaan": ["/en/open-gym", 301], "/rent-a-personal-training-studio-in-amsterdam-jordaan-how-sculptclub-works": ["/en/studio-rental", 301], "/how-to-choose-a-personal-trainer-in-amsterdam-jordaan-a-no-nonsense-checklist": ["/en/find-personal-trainer", 301], "/studio-rental-model-sculptclub-trainers": ["/en/studio-rental", 301], "/english-speaking-personal-trainers-in-amsterdam": ["/en/find-personal-trainer", 301], "/blog": ["/nl/blog", 301], "/contact": ["/nl/contact", 301], "/reviews": ["/nl/reviews", 301], "/studio": ["/nl/studio-huren", 301], "/home": ["/", 301], "/nl/home": ["/", 301], "/en/home": ["/en", 301], "/index.html": ["/", 301], "/nl/index.html": ["/", 301], "/jordaan": ["/", 301], "/nl/jordaan": ["/", 301], "/sculptclub": ["/", 301], "/personal-training": ["/nl/vind-jouw-personal-trainer", 301], "/nl/personal-training": ["/nl/vind-jouw-personal-trainer", 301], "/en/personal-training": ["/en/find-personal-trainer", 301], "/personal-trainer-amsterdam": ["/nl/vind-jouw-personal-trainer", 301], "/nl/trainers": ["/nl/vind-jouw-personal-trainer", 301], "/nl/training": ["/nl/vind-jouw-personal-trainer", 301], "/nl/team": ["/nl/vind-jouw-personal-trainer", 301], "/en/team": ["/en/find-personal-trainer", 301], "/nl/werk-met-ons": ["/nl/word-trainer", 301], "/nl/word-pt": ["/nl/word-trainer", 301], "/en/become-pt": ["/en/become-trainer", 301], "/nl/over": ["/nl/over-ons", 301], "/en/over-ons": ["/en/about", 301], "/nl/locatie": ["/nl/locatie-uren", 301], "/en/location": ["/en/location-hours", 301], "/nl/sportschool": ["/nl/open-gym", 301], "/nl/reserveer": ["/nl/boek", 301], "/en/book-session": ["/en/book", 301], "/prijzen-pt": ["/nl/prijzen", 301], "/nl/prijzen-pt": ["/nl/prijzen", 301], "/tarieven": ["/nl/prijzen", 301], "/nl/tarieven": ["/nl/prijzen", 301], "/en/rates": ["/en/pricing", 301], "/nl/cadeaubon": ["/nl/cadeaukaarten", 301], "/en/gift-card": ["/en/gift-cards", 301], "/sitemap_index.xml": ["/sitemap.xml", 301], "/sitemaps.xml": ["/sitemap.xml", 301], "/sitemap-index.xml": ["/sitemap.xml", 301], "/rss": ["/nl/blog", 301], "/feed": ["/nl/blog", 301], "/nl/feed": ["/nl/blog", 301], "/en/feed": ["/en/blog", 301], "/nl/blog/rss": ["/nl/blog", 301], "/en/blog/rss": ["/en/blog", 301], "/pt": ["/nl/vind-jouw-personal-trainer", 301], "/nl/pt": ["/nl/vind-jouw-personal-trainer", 301], "/en/pt": ["/en/find-personal-trainer", 301], "/boek-studio": ["/nl/boek-studio", 301], "/boek-gym": ["/nl/boek-gym", 301], "/open-gym": ["/nl/open-gym", 301], "/find-trainer": ["/en/find-personal-trainer", 301], "/nl/find-trainer": ["/nl/vind-jouw-personal-trainer", 301], "/trainers-amsterdam": ["/nl/vind-jouw-personal-trainer", 301], "/nl/trainers-amsterdam": ["/nl/vind-jouw-personal-trainer", 301], "/studio-huren-amsterdam": ["/nl/studio-huren", 301], "/nl/jordaan-personal-trainer": ["/nl/vind-jouw-personal-trainer", 301], "/nl/abonnementen": ["/nl/prijzen", 301], "/en/abonnementen": ["/en/pricing", 301], "/abonnement": ["/nl/prijzen", 301], "/nl/abonnement": ["/nl/prijzen", 301], "/privacy": ["/nl/privacybeleid", 301], "/nl/privacy": ["/nl/privacybeleid", 301], "/en/privacy": ["/en/privacy-policy", 301], "/cookies": ["/nl/cookiebeleid", 301], "/nl/cookies": ["/nl/cookiebeleid", 301], "/en/cookies": ["/en/cookie-policy", 301], "/terms": ["/nl/algemene-voorwaarden", 301], "/nl/terms": ["/nl/algemene-voorwaarden", 301], "/en/terms": ["/en/terms-conditions", 301], "/en/terms-and-conditions": ["/en/terms-conditions", 301], "/en/terms-of-service": ["/en/terms-conditions", 301], "/nl/voorwaarden": ["/nl/algemene-voorwaarden", 301], "/en/accessibility": ["/en/accessibility-statement", 301], "/intake": ["/nl/gratis-intake", 301], "/nl/intake": ["/nl/gratis-intake", 301], "/en/intake": ["/en/free-intro", 301], "/free-intake": ["/nl/gratis-intake", 301], "/free-intro-session": ["/en/free-intro", 301], "/nl/sitemap": ["/sitemap.xml", 301], "/en/sitemap": ["/sitemap.xml", 301], "/amp": ["/", 301], "/nl/amp": ["/nl/blog", 301], "/plan-gratis-intake-met-alex": ["/nl/plan-gratis-intake-met-alex", 301], "/plan-gratis-intake-met-dara": ["/nl/plan-gratis-intake-met-dara", 301], "/plan-gratis-intake-met-eva": ["/nl/plan-gratis-intake-met-eva", 301], "/plan-gratis-intake-met-hamish": ["/nl/plan-gratis-intake-met-hamish", 301], "/plan-gratis-intake-met-andrea": ["/nl/plan-gratis-intake-met-andrea", 301], "/plan-gratis-intake-met-gezina": ["/nl/plan-gratis-intake-met-gezina", 301], "/plan-gratis-intake-met-jearmey": ["/nl/plan-gratis-intake-met-jearmey", 301], "/plan-gratis-intake-met-joey": ["/nl/plan-gratis-intake-met-joey", 301], "/sculpt45class": ["/nl/open-gym", 301], "/help": ["/nl/contact", 301], "/nl/members": ["/nl/prijzen", 301], "/nl/contact-2": ["/nl/contact", 301], "/home-nl/faqs": ["/nl/faqs", 301], "/sculptclub-partner": ["/", 301], "/en/home-kopie-english": ["/en", 301], "/rent-studio-kopieren": ["/nl/studio-huren", 301], "/club-access-kopieren": ["/nl/open-gym", 301], "/start-2": ["/", 301], "/start-": ["/", 301], "/home-nl": ["/", 301], "/rent-studio-for-trainers": ["/nl/studio-huren", 301], "/en/rent-studio-for-trainers": ["/en/studio-rental", 301], "/rent-studio": ["/nl/studio-huren", 301], "/training-studio-rent-jordaan-amsterdam": ["/en/studio-rental", 301], "/terms-conditions": ["/nl/algemene-voorwaarden", 301], "/try": ["/nl/gratis-intake", 301], "/come-by": ["/nl/locatie-uren", 301], "/subscriptions": ["/nl/prijzen", 301], "/fullorhalf": ["/nl/prijzen", 301], "/full": ["/nl/prijzen", 301], "/workout-sheets": ["/nl/blog", 301], "/memberships": ["/nl/prijzen", 301], "/faq": ["/nl/faqs", 301], "/small-group-trainer": ["/nl/vind-jouw-personal-trainer", 301], "/club-access": ["/nl/open-gym", 301], "/Club-access": ["/nl/open-gym", 301], "/START": ["/", 301], "/choose-trainer": ["/nl/vind-jouw-personal-trainer", 301], "/strength-45": ["/nl/prijzen", 301], "/en/blog/prive-sportschool-vs-grote-sportschool": ["/en/blog/private-gym-vs-big-box-gym", 301], "/nl/faqs-2": ["/nl/faqs", 301], "/nl/blog/personal-trainer-amsterdam-jordaan": ["/nl/personal-trainer-jordaan", 301], "/bookstudio": ["/nl/boek-studio", 301], "/about": ["/nl/over-ons", 301], "/andrea": ["/nl/plan-gratis-intake-met-andrea", 301], "/hamish": ["/nl/plan-gratis-intake-met-hamish", 301], "/bob": ["/nl/vind-jouw-personal-trainer", 301], "/mare": ["/nl/vind-jouw-personal-trainer", 301], "/book-your-spot": ["/nl/gratis-intake", 301], "/book": ["/nl/gratis-intake", 301], "/firsttime": ["/nl/gratis-intake", 301], "/comments/feed": ["/nl/blog", 301], "/en/about-enlgish": ["/en/about", 301], "/en/home-en": ["/en", 301], "/en/home-eng": ["/en", 301], "/nl/rentstudio": ["/nl/studio-huren", 301], "/nl/training-studio-huren-amterdam": ["/nl/studio-huren", 301], "/opengym": ["/nl/open-gym", 301], "/personal-training-jordaan": ["/nl/vind-jouw-personal-trainer", 301], "/partner": ["/", 301], "/privacy-policy": ["/nl/privacybeleid", 301], "/review": ["https://search.google.com/local/writereview?placeid=ChIJCXG6-WAJxkcRO-dqhcrQSgU", 302], "/nl/review": ["https://search.google.com/local/writereview?placeid=ChIJCXG6-WAJxkcRO-dqhcrQSgU", 302], "/en/review": ["https://search.google.com/local/writereview?placeid=ChIJCXG6-WAJxkcRO-dqhcrQSgU", 302], "/en/": ["/en", 301], "/en/vind-jouw-personal-trainer": ["/en/find-personal-trainer", 301], "/en/studio-huren": ["/en/studio-rental", 301], "/en/boek": ["/en/book", 301], "/en/boek-studio": ["/en/book-studio", 301], "/en/boek-trainer": ["/en/book-trainer", 301], "/en/boek-gym": ["/en/book-gym", 301], "/en/prijzen": ["/en/pricing", 301], "/en/resultaten": ["/en/results", 301], "/en/eerste-bezoek": ["/en/first-visit", 301], "/en/cadeaukaarten": ["/en/gift-cards", 301], "/en/locatie-uren": ["/en/location-hours", 301], "/en/algemene-voorwaarden": ["/en/terms-conditions", 301], "/en/privacybeleid": ["/en/privacy-policy", 301], "/en/cookiebeleid": ["/en/cookie-policy", 301], "/en/toegankelijkheid": ["/en/accessibility-statement", 301], "/en/plan-gratis-intake-met-alex": ["/en/plan-free-intro-with-alex", 301], "/en/plan-gratis-intake-met-andrea": ["/en/plan-free-intro-with-andrea", 301], "/en/plan-gratis-intake-met-dara": ["/en/plan-free-intro-with-dara", 301], "/en/plan-gratis-intake-met-eva": ["/en/plan-free-intro-with-eva", 301], "/en/plan-gratis-intake-met-gezina": ["/en/plan-free-intro-with-gezina", 301], "/en/plan-gratis-intake-met-jearmey": ["/en/plan-free-intro-with-jearmey", 301], "/en/plan-gratis-intake-met-joey": ["/en/plan-free-intro-with-joey", 301], "/en/blog/afvallen-met-krachttraining": ["/en/blog/weight-loss-strength-training", 301], "/en/blog/consistent-blijven-met-sporten": ["/en/blog/stay-consistent-exercise", 301], "/en/blog/eerste-keer-sportschool-tips": ["/en/blog/first-time-gym-tips", 301], "/en/blog/krachttraining-voor-beginners": ["/en/blog/strength-training-beginners-guide", 301], "/en/blog/open-gym-vs-sportschool": ["/en/blog/open-gym-vs-regular-gym", 301], "/en/blog/sportschool-zonder-abonnement-amsterdam": ["/en/blog/gym-without-membership-amsterdam", 301], "/en/blog/studio-huren-personal-trainer-amsterdam": ["/en/blog/studio-rental-personal-trainers-amsterdam", 301], "/en/blog/wat-kost-personal-training-amsterdam": ["/en/blog/personal-training-cost-amsterdam", 301], "/en/blog/voedingscoach-amsterdam": ["/en/blog/nutrition-coach-amsterdam", 301], "/en/blog/fysiotherapeut-personal-trainer-amsterdam": ["/en/blog/physiotherapist-personal-trainer-amsterdam", 301], "/en/blog/gratis-intake-personal-trainer-amsterdam": ["/en/blog/free-intro-personal-trainer-amsterdam", 301], "/en/blog/gym-huren-per-uur-amsterdam": ["/en/blog/gym-rental-per-hour-amsterdam", 301], "/en/blog/trainingsruimte-huren-zzp-trainer-amsterdam": ["/en/blog/rent-training-space-freelance-personal-trainer-amsterdam", 301], "/en/blog/fysiotherapie-studio-huren-amsterdam": ["/en/blog/physiotherapy-studio-rental-amsterdam", 301], "/en/blog/sportschool-jordaan-amsterdam": ["/en/blog/gym-jordaan-amsterdam", 301], "/en/blog/personal-training-afvallen-amsterdam": ["/en/blog/personal-training-weight-loss-amsterdam", 301], "/en/blog/boutique-gym-vs-sportschool-keten": ["/en/blog/boutique-gym-vs-big-chain-gym", 301], "/en/blog/personal-trainer-voor-beginners": ["/en/blog/personal-trainer-for-beginners", 301], "/en/blog/personal-trainer-amsterdam-oost": ["/en/blog/personal-trainer-amsterdam-east", 301], "/en/blog/personal-trainer-na-blessure-amsterdam": ["/en/blog/personal-trainer-after-injury-amsterdam", 301], "/en/blog/krachttraining-voor-vrouwen": ["/en/blog/strength-training-for-women", 301], "/en/blog/personal-trainer-rugklachten-amsterdam": ["/en/blog/back-pain-personal-trainer-amsterdam", 301], "/en/blog/lichaamssamenstelling-verbeteren-amsterdam": ["/en/blog/improve-body-composition-amsterdam", 301], "/en/blog/personal-trainer-amsterdam-zuid": ["/en/blog/personal-trainer-amsterdam-south", 301], "/en/blog/personal-trainer-voor-senioren-amsterdam": ["/en/blog/personal-trainer-for-seniors-amsterdam", 301], "/en/blog/personal-trainer-worden-amsterdam": ["/en/blog/become-personal-trainer-amsterdam", 301], "/en/word-trainer": ["/en/become-trainer", 301], "/nl/find-personal-trainer": ["/nl/vind-jouw-personal-trainer", 301], "/nl/studio-rental": ["/nl/studio-huren", 301], "/nl/book": ["/nl/boek", 301], "/nl/book-studio": ["/nl/boek-studio", 301], "/nl/book-trainer": ["/nl/boek-trainer", 301], "/nl/book-gym": ["/nl/boek-gym", 301], "/nl/pricing": ["/nl/prijzen", 301], "/nl/about": ["/nl/over-ons", 301], "/nl/results": ["/nl/resultaten", 301], "/nl/first-visit": ["/nl/eerste-bezoek", 301], "/nl/gift-cards": ["/nl/cadeaukaarten", 301], "/nl/location-hours": ["/nl/locatie-uren", 301], "/nl/terms-conditions": ["/nl/algemene-voorwaarden", 301], "/nl/privacy-policy": ["/nl/privacybeleid", 301], "/nl/cookie-policy": ["/nl/cookiebeleid", 301], "/nl/accessibility-statement": ["/nl/toegankelijkheid", 301], "/nl/plan-free-intro-with-alex": ["/nl/plan-gratis-intake-met-alex", 301], "/nl/plan-free-intro-with-andrea": ["/nl/plan-gratis-intake-met-andrea", 301], "/nl/plan-free-intro-with-dara": ["/nl/plan-gratis-intake-met-dara", 301], "/nl/plan-free-intro-with-eva": ["/nl/plan-gratis-intake-met-eva", 301], "/nl/plan-free-intro-with-gezina": ["/nl/plan-gratis-intake-met-gezina", 301], "/nl/plan-free-intro-with-jearmey": ["/nl/plan-gratis-intake-met-jearmey", 301], "/nl/plan-free-intro-with-joey": ["/nl/plan-gratis-intake-met-joey", 301], "/en/gratis-intake": ["/en/free-intro", 301], "/nl/blog/weight-loss-strength-training": ["/nl/blog/afvallen-met-krachttraining", 301], "/nl/blog/stay-consistent-exercise": ["/nl/blog/consistent-blijven-met-sporten", 301], "/nl/blog/first-time-gym-tips": ["/nl/blog/eerste-keer-sportschool-tips", 301], "/nl/blog/strength-training-beginners-guide": ["/nl/blog/krachttraining-voor-beginners", 301], "/nl/blog/open-gym-vs-regular-gym": ["/nl/blog/open-gym-vs-sportschool", 301], "/nl/blog/private-gym-vs-big-box-gym": ["/nl/blog/prive-sportschool-vs-grote-sportschool", 301], "/nl/blog/gym-without-membership-amsterdam": ["/nl/blog/sportschool-zonder-abonnement-amsterdam", 301], "/nl/blog/studio-rental-personal-trainers-amsterdam": ["/nl/blog/studio-huren-personal-trainer-amsterdam", 301], "/nl/blog/personal-training-cost-amsterdam": ["/nl/blog/wat-kost-personal-training-amsterdam", 301], "/nl/blog/nutrition-coach-amsterdam": ["/nl/blog/voedingscoach-amsterdam", 301], "/nl/blog/physiotherapist-personal-trainer-amsterdam": ["/nl/blog/fysiotherapeut-personal-trainer-amsterdam", 301], "/nl/blog/free-intro-personal-trainer-amsterdam": ["/nl/blog/gratis-intake-personal-trainer-amsterdam", 301], "/nl/blog/gym-rental-per-hour-amsterdam": ["/nl/blog/gym-huren-per-uur-amsterdam", 301], "/nl/blog/rent-training-space-freelance-personal-trainer-amsterdam": ["/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam", 301], "/nl/blog/physiotherapy-studio-rental-amsterdam": ["/nl/blog/fysiotherapie-studio-huren-amsterdam", 301], "/nl/blog/gym-jordaan-amsterdam": ["/nl/blog/sportschool-jordaan-amsterdam", 301], "/nl/blog/personal-training-weight-loss-amsterdam": ["/nl/blog/personal-training-afvallen-amsterdam", 301], "/nl/blog/boutique-gym-vs-big-chain-gym": ["/nl/blog/boutique-gym-vs-sportschool-keten", 301], "/nl/blog/personal-trainer-for-beginners": ["/nl/blog/personal-trainer-voor-beginners", 301], "/nl/blog/personal-trainer-amsterdam-east": ["/nl/blog/personal-trainer-amsterdam-oost", 301], "/nl/blog/personal-trainer-after-injury-amsterdam": ["/nl/blog/personal-trainer-na-blessure-amsterdam", 301], "/nl/blog/strength-training-for-women": ["/nl/blog/krachttraining-voor-vrouwen", 301], "/nl/blog/back-pain-personal-trainer-amsterdam": ["/nl/blog/personal-trainer-rugklachten-amsterdam", 301], "/nl/blog/improve-body-composition-amsterdam": ["/nl/blog/lichaamssamenstelling-verbeteren-amsterdam", 301], "/nl/blog/personal-trainer-amsterdam-south": ["/nl/blog/personal-trainer-amsterdam-zuid", 301], "/nl/blog/personal-trainer-for-seniors-amsterdam": ["/nl/blog/personal-trainer-voor-senioren-amsterdam", 301], "/nl/blog/become-personal-trainer-amsterdam": ["/nl/blog/personal-trainer-worden-amsterdam", 301], "/nl/blog/personal-trainer-amsterdam-north": ["/nl/blog/personal-trainer-amsterdam-noord", 301], "/nl/blog/corporate-personal-training-amsterdam": ["/nl/blog/zakelijk-personal-training-amsterdam", 301], "/nl/become-trainer": ["/nl/word-trainer", 301], "/nl/free-intro": ["/nl/gratis-intake", 301] };
var SPLAT = [["/category/", "/nl/blog", 301], ["/tag/", "/nl/blog", 301], ["/acuity/", "/nl/boek", 301], ["/author/", "/", 301], ["/wp-content/", "/", 301], ["/wp-includes/", "/", 301], ["/wp-json/", "/", 301], ["/en/author/", "/en", 301]];
var onRequest = /* @__PURE__ */ __name(async (context) => {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();
  const bareHost = host.replace(/^www\./, "");
  const path = url.pathname;
  const vanity = vanityDomains[bareHost];
  if (vanity) {
    const target = new URL(`https://sculptclub.nl${vanity.destPath}`);
    if (path && path !== "/") target.pathname = path;
    url.searchParams.forEach((v, k) => target.searchParams.set(k, v));
    if (!target.searchParams.has("utm_source")) {
      target.searchParams.set("utm_source", vanity.utmSource);
      target.searchParams.set("utm_medium", "vanity_domain");
      target.searchParams.set("utm_campaign", vanity.utmCampaign);
    }
    return Response.redirect(target.toString(), 301);
  }
  if (host === "www.sculptclub.nl") {
    url.hostname = "sculptclub.nl";
    return Response.redirect(url.toString(), 301);
  }
  if (path === "/start") {
    const al = (context.request.headers.get("accept-language") || "").toLowerCase();
    url.pathname = al.startsWith("nl") ? "/nl/start" : "/en/start";
    return Response.redirect(url.toString(), 302);
  }
  const ex = EXACT[path];
  if (ex) {
    const dest = ex[0];
    if (/^https?:\/\//.test(dest)) return Response.redirect(dest, ex[1]);
    url.pathname = dest;
    url.search = url.search;
    return Response.redirect(url.toString(), ex[1]);
  }
  for (const [prefix, dest, code] of SPLAT) {
    if (path.startsWith(prefix)) {
      const rest = path.slice(prefix.length);
      const d = dest.includes(":splat") ? dest.replace(":splat", rest) : dest;
      if (/^https?:\/\//.test(d)) return Response.redirect(d, code);
      const t = new URL(url.toString());
      t.pathname = d;
      return Response.redirect(t.toString(), code);
    }
  }
  return context.next();
}, "onRequest");

// ../.wrangler/tmp/pages-M3ZBUI/functionsRoutes-0.13826458409797882.mjs
var routes = [
  {
    routePath: "/api/whatsapp/webhook",
    mountPath: "/api/whatsapp",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet]
  },
  {
    routePath: "/api/whatsapp/webhook",
    mountPath: "/api/whatsapp",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost]
  },
  {
    routePath: "/api/lead-magnet",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost2]
  },
  {
    routePath: "/",
    mountPath: "/",
    method: "",
    middlewares: [onRequest],
    modules: []
  }
];

// ../../../../.nvm/versions/node/v24.14.1/lib/node_modules/wrangler/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../../../../.nvm/versions/node/v24.14.1/lib/node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
export {
  pages_template_worker_default as default
};
