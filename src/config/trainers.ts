import type { Locale } from "./site";

export interface Trainer {
  id: string;
  name: string;
  slug: Record<Locale, string>;
  specialization: Record<Locale, string[]>;
  languages: string[];
  rate: string | null;
  instagram: string;
  instagramHandle: string;
  credentials?: string;
  bio: Record<Locale, string>;
  image: string;
  /** Trainer's own WhatsApp number (wa.me link). Falls back to SculptClub main if not set. */
  whatsapp?: string;
}

export const trainers: Trainer[] = [
  {
    id: "alex",
    name: "Alex",
    slug: {
      nl: "plan-gratis-intake-met-alex",
      en: "plan-free-intro-with-alex",
    },
    specialization: {
      nl: ["Kracht", "Calisthenics", "Herstel"],
      en: ["Strength", "Calisthenics", "Recovery"],
    },
    languages: ["NL", "EN", "PT"],
    rate: "€69 / 60 min",
    instagram: "https://instagram.com/almeidalexjr",
    instagramHandle: "@almeidalexjr",
    bio: {
      nl: "Gespecialiseerd in krachttraining, calisthenics en hersteltraining. Alex combineert functionele bewegingen met doelgerichte programmering voor meetbare resultaten.",
      en: "Specializing in strength training, calisthenics and recovery. Alex combines functional movements with targeted programming for measurable results.",
    },
    image: "/images/trainers/alex.jpg",
  },
  {
    id: "eva",
    name: "Eva",
    slug: {
      nl: "plan-gratis-intake-met-eva",
      en: "plan-free-intro-with-eva",
    },
    specialization: {
      nl: ["Kracht", "Voeding"],
      en: ["Strength", "Nutrition"],
    },
    languages: ["NL", "EN"],
    rate: null,
    instagram: "https://instagram.com/sportieefnl",
    instagramHandle: "@sportieefnl",
    credentials: "Diëtist",
    bio: {
      nl: "Als gediplomeerd diëtist en personal trainer biedt Eva een unieke combinatie van krachttraining en voedingsadvies voor een holistische aanpak.",
      en: "As a certified dietitian and personal trainer, Eva offers a unique combination of strength training and nutritional guidance for a holistic approach.",
    },
    image: "/images/trainers/eva.jpg",
  },
  {
    id: "hamish",
    name: "Hamish",
    slug: {
      nl: "plan-gratis-intake-met-hamish",
      en: "plan-free-intro-with-hamish",
    },
    specialization: {
      nl: ["Fysiotherapie", "Kracht"],
      en: ["Physiotherapy", "Strength"],
    },
    languages: ["NL", "EN"],
    rate: null,
    instagram: "https://instagram.com/hamishleijer",
    instagramHandle: "@hamishleijer",
    credentials: "Fysiotherapeut, BSc",
    bio: {
      nl: "Hamish combineert zijn achtergrond als fysiotherapeut met krachttraining. Ideaal voor revalidatie, blessurepreventie en het opbouwen van een sterke basis.",
      en: "Hamish combines his physiotherapy background with strength training. Ideal for rehabilitation, injury prevention and building a strong foundation.",
    },
    image: "/images/trainers/hamish.jpg",
  },
  {
    id: "andrea",
    name: "Andrea",
    slug: {
      nl: "plan-gratis-intake-met-andrea",
      en: "plan-free-intro-with-andrea",
    },
    specialization: {
      nl: ["Kracht", "Houding", "Techniek"],
      en: ["Strength", "Posture", "Technique"],
    },
    languages: ["NL", "EN"],
    rate: "€45 / 45 min",
    instagram: "https://instagram.com/grskiiii",
    instagramHandle: "@grskiiii",
    bio: {
      nl: "Andrea focust op houding, techniek en kracht. Met aandacht voor correcte uitvoering helpt ze je een sterke, functionele basis op te bouwen.",
      en: "Andrea focuses on posture, technique and strength. With attention to proper form, she helps you build a strong, functional foundation.",
    },
    image: "/images/trainers/andrea.jpg",
  },
  {
    id: "dara",
    name: "Dara",
    slug: {
      nl: "plan-gratis-intake-met-dara",
      en: "plan-free-intro-with-dara",
    },
    specialization: {
      nl: ["Personal Training", "Small Group"],
      en: ["Personal Training", "Small Group"],
    },
    languages: ["NL", "EN"],
    rate: null,
    instagram: "https://instagram.com/strengthandbalancecoaching",
    instagramHandle: "@strengthandbalancecoaching",
    bio: {
      nl: "Dara is gespecialiseerd in personal training en small group sessies. Haar energieke aanpak motiveert je om je grenzen te verleggen.",
      en: "Dara specializes in personal training and small group sessions. Her energetic approach motivates you to push your limits.",
    },
    image: "/images/trainers/dara.jpg",
    whatsapp: "https://wa.me/31645658213",
  },
  {
    id: "jearmey",
    name: "Jearmey",
    slug: {
      nl: "plan-gratis-intake-met-jearmey",
      en: "plan-free-intro-with-jearmey",
    },
    specialization: {
      nl: ["Kracht", "Afvallen", "Atletische Prestatie"],
      en: ["Strength", "Fat Loss", "Athletic Performance"],
    },
    languages: ["NL", "EN"],
    rate: null,
    instagram: "https://instagram.com/jer.proformance",
    instagramHandle: "@jer.proformance",
    bio: {
      nl: "Jearmey helpt je sterker worden, vet verliezen en pijnvrij bewegen. Met een focus op kracht en atletische prestaties bouwt hij programma's die resultaat leveren.",
      en: "Jearmey helps you build strength, lose fat and move pain-free. With a focus on strength and athletic performance, he builds programmes that deliver results.",
    },
    image: "/images/trainers/jearmey.jpg",
  },
];
