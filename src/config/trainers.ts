import type { Locale } from "./site";

/**
 * 🚨 CANONICAL TRAINER ROSTER — when adding/removing/renaming a trainer here,
 * the following surfaces MUST be updated together to prevent AI-citation drift
 * (rounds 14 + 15 of the 2026-05-07 cleanup found these were out of sync):
 *
 *   1. src/config/trainers.ts (this file)         ← source of truth
 *   2. src/app/{nl,en}/plan-{...}/page.tsx        ← page routes per locale
 *   3. public/llms.txt § Trainers                 ← AI-citation canonical
 *   4. src/app/sitemap-ai.xml/route.ts            ← AI-crawler priority signal
 *
 * Build-time check at scripts/check-trainer-consistency.mjs (runs as
 * `prebuild`) verifies surfaces 3 and 4 are in sync with this file. If you
 * add a trainer here without updating llms.txt or sitemap-ai.xml, the build
 * fails with a clear message.
 */

export interface Trainer {
  id: string;
  name: string;
  slug: Record<Locale, string>;
  specialization: Record<Locale, string[]>;
  languages: string[];
  rate: string | null;
  /**
   * Trainer's personal Instagram URL. Optional — operator-confirmed
   * handles only. Empty/missing skips IG link rendering on cards
   * (per trainer-filter-grid + social tool conditional logic).
   * Added optional 2026-05-22 to support restoring Ibrahim (legacy WP
   * roster trainer whose IG handle wasn't migrated to this repo).
   */
  instagram?: string;
  instagramHandle?: string;
  /**
   * Localized credential string shown under the trainer's name on cards
   * and intake pages. Use the locale-appropriate professional title:
   *   nl: "Diëtist", "Fysiotherapeut, BSc"
   *   en: "Dietitian", "Physiotherapist, BSc"
   * Was a single non-localized string before 2026-05-07; that put the
   * Dutch term on the EN page (e.g. "Diëtist" on /en/find-personal-trainer)
   * which is a content correctness bug for English visitors.
   */
  credentials?: Record<Locale, string>;
  bio: Record<Locale, string>;
  image: string;
  /** Trainer's own WhatsApp number (wa.me link). Falls back to SculptClub main if not set. */
  whatsapp?: string;
}

// Display order — optimised for conversion by differentiation strength
// (strongest niche first), not by booking volume. Busy trainers have
// less availability, which hurts conversion. Clear specialties convert
// best because visitors pick on need-match, not on who's most popular.
// Ibrahim re-added 2026-05-22 (legacy WP-roster trainer; image was in
// .image-backups but his entry never got migrated to trainers.ts).
// Positioned at #4 (after Joey, before Alex) — his Voeding/Afvallen/
// Revalidatie profile fits between the strength-focused trainers and
// the holistic-focused ones. Operator can reorder freely.
const DISPLAY_ORDER = ["eva", "bryan", "joey", "ibrahim", "alex", "gezina", "andrea", "sergei", "dara", "jearmey", "hamish"] as const;

const trainersRaw: Trainer[] = [
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
    credentials: {
      nl: "Diëtist",
      en: "Dietitian",
    },
    bio: {
      nl: "Als gediplomeerd diëtist en personal trainer biedt Eva een unieke combinatie van krachttraining en voedingsadvies voor een holistische aanpak.",
      en: "As a certified dietitian and personal trainer, Eva offers a unique combination of strength training and nutritional guidance for a holistic approach.",
    },
    image: "/images/trainers/eva.jpg",
  },
  {
    id: "bryan",
    name: "Bryan",
    slug: {
      nl: "plan-gratis-intake-met-bryan",
      en: "plan-free-intro-with-bryan",
    },
    specialization: {
      nl: ["Calisthenics", "Skills", "Mobiliteit"],
      en: ["Calisthenics", "Skills", "Mobility"],
    },
    languages: ["NL", "EN"],
    rate: "vanaf €55 / 60 min",
    instagram: "https://instagram.com/calisthenics_skilllab",
    instagramHandle: "@calisthenics_skilllab",
    bio: {
      nl: "Calisthenics-specialist. Van eerste push-up tot handstand, muscle-up en human flag — Bryan leert je je eigen lichaamsgewicht beheersen met heldere progressies, sterke fundamenten en gerichte mobiliteit.",
      en: "Calisthenics specialist. From your first push-up to handstand, muscle-up and human flag — Bryan teaches you to master your own bodyweight with clear progressions, strong foundations and targeted mobility.",
    },
    image: "/images/trainers/bryan.jpg",
    whatsapp: "https://wa.me/31642267007",
  },
  {
    id: "ibrahim",
    name: "Ibrahim",
    slug: {
      nl: "plan-gratis-intake-met-ibrahim",
      en: "plan-free-intro-with-ibrahim",
    },
    specialization: {
      nl: ["Voeding", "Afvallen", "Revalidatie"],
      en: ["Nutrition", "Weight Loss", "Rehabilitation"],
    },
    languages: ["NL", "EN"],
    rate: null,
    instagram: "https://www.instagram.com/beter_dan_gister_/",
    instagramHandle: "@beter_dan_gister_",
    bio: {
      nl: "Als personal trainer help ik mensen doelgericht werken aan een fitter en gezonder lichaam. Mijn specialisatie ligt in voeding en afvallen, waarbij ik praktische en haalbare plannen maak die passen bij jouw levensstijl. Daarnaast begeleid ik ook bij revalidatie, zodat je op een veilige en verantwoorde manier weer sterker en pijnvrij kunt bewegen.",
      en: "As a personal trainer I help people work purposefully toward a fitter and healthier body. My specialty is nutrition and weight loss — I build practical, achievable plans that fit your lifestyle. I also guide rehabilitation, so you can safely return to stronger and pain-free movement.",
    },
    image: "/images/trainers/ibrahim.jpg",
    whatsapp: "https://wa.me/31636091780",
  },
  {
    id: "gezina",
    name: "Gezina",
    slug: {
      nl: "plan-gratis-intake-met-gezina",
      en: "plan-free-intro-with-gezina",
    },
    specialization: {
      nl: ["Vrouwentraining", "Kracht", "Prestatie"],
      en: ["Women's Training", "Strength", "Performance"],
    },
    languages: ["NL", "EN"],
    rate: null,
    instagram: "https://www.instagram.com/gezfitness/",
    instagramHandle: "@gezfitness",
    bio: {
      nl: "Gezina is een gecertificeerde personal trainer gespecialiseerd in vrouwentraining. Ze helpt vrouwen sterker worden door personal training en small group sessies, afgestemd op het lichaam en de cyclus.",
      en: "Gezina is a certified personal trainer specializing in women's training. She helps women build strength through personal training and small group sessions, designed to work in sync with the body and cycle.",
    },
    image: "/images/trainers/gezina.jpg",
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
  {
    id: "sergei",
    name: "Sergei",
    slug: {
      nl: "plan-gratis-intake-met-sergei",
      en: "plan-free-intro-with-sergei",
    },
    specialization: {
      nl: ["Lichaamsrecompositie", "Houdingscorrectie", "Kracht & Beweging", "Herstel"],
      en: ["Body Recomposition", "Posture Correction", "Strength & Movement", "Recovery"],
    },
    languages: ["EN", "RU"],
    rate: "€80 / 60 min",
    instagram: "https://www.instagram.com/transformbst",
    instagramHandle: "@transformbst",
    credentials: {
      nl: "Gecertificeerd personal trainer, 10+ jaar ervaring",
      en: "Certified Personal Trainer, 10+ years experience",
    },
    bio: {
      nl: "Sergei helpt drukke professionals en beginners om een sterker lichaam, betere houding, meer zelfvertrouwen en duurzame gezonde gewoontes op te bouwen via gestructureerde personal training. 1-op-1, duo of small group training.",
      en: "Sergei helps busy professionals and beginners build a stronger body, better posture, more confidence, and long-term healthy habits through structured personal training. 1:1, duo or small group training.",
    },
    image: "/images/trainers/sergei.jpg",
  },
  {
    id: "joey",
    name: "Joey",
    slug: {
      nl: "plan-gratis-intake-met-joey",
      en: "plan-free-intro-with-joey",
    },
    specialization: {
      nl: ["Kracht", "Ademwerk", "Zenuwstelsel", "Zelfonderzoek"],
      en: ["Strength", "Breathwork", "Nervous System", "Self-Inquiry"],
    },
    languages: ["NL", "EN"],
    rate: null,
    instagram: "https://www.instagram.com/joaonomad137",
    instagramHandle: "@joaonomad137",
    credentials: {
      // Joey's method name is a brand term — same in NL and EN, no translation.
      nl: "The Ascend Method — Inner Alignment System",
      en: "The Ascend Method — Inner Alignment System",
    },
    bio: {
      nl: "Joey begeleidt je om lichaam, geest en bewustzijn op één lijn te brengen. Via functionele training, ademwerk en zelfonderzoek bouw je energie, helderheid en innerlijke kracht op. Voor high-performers die vastzitten, stress ervaren of zich afgesloten voelen — herwin je energie, neem de regie terug. \"Wisdom isn't studied, it's embodied.\"",
      en: "Joey guides you to align body, mind and awareness. Through functional training, breathwork and self-inquiry you build energy, clarity and inner strength. For high-performers feeling stuck, stressed or disconnected — reclaim your energy, take back control. \"Wisdom isn't studied, it's embodied.\"",
    },
    image: "/images/trainers/joey.jpg",
    whatsapp: "https://wa.me/31639175337",
  },
  {
    id: "hamish",
    name: "Hamish",
    slug: {
      nl: "plan-gratis-intake-met-hamish",
      en: "plan-free-intro-with-hamish",
    },
    specialization: {
      nl: ["Kracht", "High Performance", "Afvallen"],
      en: ["Strength", "High Performance", "Fat Loss"],
    },
    languages: ["NL", "EN"],
    rate: "€72 / 60 min",
    instagram: "https://instagram.com/hamishleijer",
    instagramHandle: "@hamishleijer",
    bio: {
      nl: "Als ervaren personal trainer helpt Hamish je om fysieke grenzen te doorbreken. Met een scherpe focus op functionele kracht, metabole optimalisatie en een resultaatgerichte aanpak zorgt hij dat je training naadloos aansluit op een high-performance levensstijl. Geen shortcuts, alleen structurele progressie.",
      en: "As an experienced personal trainer, Hamish helps you break through physical barriers. With a sharp focus on functional strength, metabolic optimization, and a results-driven approach, he ensures your training seamlessly aligns with a high-performance lifestyle. No shortcuts, just structural progress.",
    },
    image: "/images/trainers/hamish.jpg",
    whatsapp: "https://wa.me/31613326221",
  },
];

const byId = Object.fromEntries(trainersRaw.map((t) => [t.id, t]));
export const trainers: Trainer[] = DISPLAY_ORDER.map((id) => byId[id]).filter(Boolean);
