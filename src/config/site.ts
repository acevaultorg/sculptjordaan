export const siteConfig = {
  name: "SculptClub",
  tagline: {
    nl: "Jouw gym. Jouw manier. Jouw resultaat.",
    en: "Your gym. Your way. Your results.",
  },
  subtitle: {
    nl: "Boutique Personal Training — Amsterdam Jordaan",
    en: "Boutique Personal Training — Amsterdam Jordaan",
  },
  description: {
    nl: "Privé personal training studio in de Jordaan, Amsterdam. Gratis intake — trainers vanaf €45/sessie. Open Gym & studio verhuur. Geen abonnement.",
    en: "Private personal training studio in the Jordaan, Amsterdam. Free intro — trainers from €45/session. Open Gym & studio rental. No membership.",
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
  phone: "+31683178934",
  phoneDisplay: "+31 6 83 17 89 34",
  email: "contact@sculptclub.nl",
  whatsapp: "https://wa.me/31683178934",
  hours: "Daily 06:30–22:00",
  instagram: "https://instagram.com/sculptclubjordaan",
  instagramHandle: "@sculptclubjordaan",
  tiktok: "https://www.tiktok.com/@sculptclub.jordaan",
  tiktokHandle: "@sculptclub.jordaan",
  google: "https://www.google.com/maps/place/SculptClub/@52.3759967,4.880676,17z",
  rating: { value: 5.0, count: 8 },
  founded: "2025",
  acuity: {
    openGymId: "87017445",
    baseUrl: "https://app.acuityscheduling.com/schedule.php",
    owner: "36720238",
  },
  analytics: {
    ga4: "G-QYW5H4XTXW",
    googleAds: "AW-18011741633",
    googleAdsConversion: "NwwsCNGZlp8cEMG71YxD",
    fbPixel: "4350118535216982",
    clarity: "vx7zcg6zys",
    tiktokPixel: "D75710BC77UDBCCMHF60",
  },
} as const;

export type Locale = "nl" | "en";

export const locales: Locale[] = ["nl", "en"];
export const defaultLocale: Locale = "nl";
