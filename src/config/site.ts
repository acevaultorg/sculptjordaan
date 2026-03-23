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
    nl: "Privé personal training studio in de Jordaan, Amsterdam. Personal training, Open Gym en studio verhuur. Geen abonnement, geen drukte.",
    en: "Private personal training studio in the Jordaan, Amsterdam. Personal training, Open Gym and studio rental. No membership, no crowds.",
  },
  url: "https://sculptjordaan.nl",
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
  email: "info@sculptclub.nl",
  whatsapp: "https://wa.me/31683178934",
  hours: "Daily 06:30–22:00",
  instagram: "https://instagram.com/sculptclubjordaan",
  instagramHandle: "@sculptclubjordaan",
  google: "https://g.page/sculptclub",
  rating: { value: 5.0, count: 10 },
  founded: "2025",
  acuity: {
    openGymId: "87017445",
    baseUrl: "https://app.acuityscheduling.com/schedule.php",
    owner: "sculptclub",
  },
  analytics: {
    ga4: "G-QYW5H4XTXW",
    googleAds: "AW-17749877333",
    googleAdsConversion: "QW0mCPOF_YocENXE5o9C",
    fbPixel: "4350118535216982",
    clarity: "vx7zcg6zys",
  },
} as const;

export type Locale = "nl" | "en";

export const locales: Locale[] = ["nl", "en"];
export const defaultLocale: Locale = "nl";
