export const siteConfig = {
  name: "SculptClub",
  tagline: {
    nl: "Jouw gym. Jouw manier. Jouw resultaat.",
    en: "Your gym. Your way. Your results.",
  },
  subtitle: {
    nl: "Personal Training & Privé Studio — Amsterdam Jordaan",
    en: "Personal Training & Private Studio — Amsterdam Jordaan",
  },
  description: {
    nl: "Huur jouw eigen studio in de Jordaan vanaf €12/uur — eigen klanten, eigen tarief, geen contract. Ook personal training met gratis intake.",
    en: "Rent your own studio in the Jordaan from €12/hour — your clients, your rates, no contract. Also personal training with free intro session.",
  },
  url: "https://sculptclub.nl",
  ogImage: "/images/og-default.jpg",
  address: {
    street: "Egelantiersgracht 424",
    city: "Amsterdam",
    zip: "1015 RR",
    country: "Netherlands",
  },
  geo: { lat: 52.3759967, lng: 4.880676 },
  phone: "+31615147952",
  phoneDisplay: "+31 6 15 14 79 52",
  email: "contact@sculptclub.nl",
  whatsapp: "https://wa.me/31615147952",
  hours: "Daily 06:30–22:00",
  instagram: "https://instagram.com/sculptclubjordaan",
  instagramHandle: "@sculptclubjordaan",
  tiktok: "https://www.tiktok.com/@sculptclub.jordaan",
  tiktokHandle: "@sculptclub.jordaan",
  google: "https://www.google.com/maps/place/SculptClub/@52.3759967,4.880676,17z",
  // Direct ONE-TAP "write a review" link — the single source of truth for every
  // "leave a review" CTA + the /review short URL (middleware redirect). Opens
  // Google's star-rating + write form directly for SculptClub.
  // place_id ChIJCXG6-WAJxkcRO-dqhcrQSgU derived from the Maps feature id
  // (ftid 0x47c60960f9ba7109:0x54ad0ca856ae73b) and VERIFIED live: the
  // writereview link resolves to SculptClub's review surface (ludocid
  // 381346686706575163 + "SculptClub, Egelantiersgracht 424" — exact match).
  // Equivalent to the GBP "Ask for reviews" g.page/r/…/review short link.
  // Every CTA + the printable /review QR point at THIS constant via the stable
  // /review redirect, so changing it here upgrades all of them at once.
  googleReview:
    "https://search.google.com/local/writereview?placeid=ChIJCXG6-WAJxkcRO-dqhcrQSgU",
  rating: { value: 5.0, count: 21 },
  founded: "2025",
  acuity: {
    openGymId: "87017445",
    baseUrl: "https://app.acuityscheduling.com/schedule.php",
    owner: "36720238",
  },
  analytics: {
    ga4: "G-QYW5H4XTXW",
    gtm: "GTM-PG592B5Q",
    googleAds: "AW-18011741633",
    googleAdsConversion: "NwwsCNGZlp8cEMG71YxD",
    // Purchase conversion (high-value, booking actually completed) — separate label
    // from the 'Submit lead form' label above which fires on contact-form + trainer-intake.
    // Verified 2026-05-16 via Chrome MCP against Google Ads 511-161-9582 conversion action editor.
    googleAdsConversionPurchase: "wBmPCNKywIccEMG71YxD",
    fbPixel: "4350118535216982",
    clarity: "vx7zcg6zys",
    tiktokPixel: "D75710BC77UDBCCMHF60",
  },
} as const;

export type Locale = "nl" | "en";

export const locales: Locale[] = ["nl", "en"];
export const defaultLocale: Locale = "nl";
