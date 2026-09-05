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
  /**
   * External booking URL (Calendly etc.) used INSTEAD of the WhatsApp CTA on
   * the trainer's card + intake page. For trainers who prefer not to publish a
   * private mobile number (Roberta, 2026-07-25 — her own request by email).
   * When set, `whatsapp` is ignored for this trainer's CTAs so we never fall
   * back to the studio number and mislabel it as reaching the trainer.
   */
  bookingUrl?: string;
  /**
   * Localized label for the `bookingUrl` button. Lets a trainer name what the
   * call actually is — Roberta offers a short free DISCOVERY CALL, not a full
   * intake, so labelling it "Boek intake" would be inaccurate. Falls back to
   * the generic intake wording if omitted.
   */
  bookingLabel?: Record<Locale, string>;
  /**
   * Trainer's typical availability, short free-text per locale
   * (e.g. nl: "Ma–vr ochtend + avond", en: "Mon–Fri mornings + evenings").
   * 🚨 OPERATOR-SUPPLIED REAL DATA ONLY — ask the trainer; never guess or
   * fabricate. Missing = the availability row simply doesn't render on the
   * intake page. Added 2026-06-10 (richer trainer profiles, structural ship).
   */
  availability?: Record<Locale, string>;
  /**
   * Real client testimonials for this trainer.
   * 🚨 REAL QUOTES ONLY — operator-collected, client-consented, attributed by
   * first name or initials. NEVER fabricate: fake reviews violate Google
   * policy + Dutch/EU consumer law and would poison the site's trust signals.
   * Missing/empty = the testimonials block doesn't render. UI-only — do NOT
   * add Review/AggregateRating schema for these (self-serving review markup
   * is ignored/penalized by Google). Added 2026-06-10.
   */
  testimonials?: { quote: Record<Locale, string>; author: string }[];
  /**
   * Optional extra photos shown as a thumbnail strip below the hero photo on
   * the intake page. Clicking the hero OR any thumbnail opens a fullscreen
   * lightbox slider covering the hero + all extra photos (see
   * TrainerPhotoGallery). `image` above is always the hero (index 0) — this
   * array is ONLY the additional photos, not a duplicate of `image`.
   * Missing/empty = no thumbnail strip renders; page is pixel-identical to
   * before (10 of 12 trainers have no gallery). Added 2026-07-01 (Tom, 3
   * operator-provided photos).
   */
  gallery?: { src: string; alt: Record<Locale, string> }[];
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
// Tom inserted at #3 (premium, highly-differentiated: 12yr high-end London PT +
// military/rowing/BJJ). Operator can reorder freely. Added 2026-07-01.
// Gezina moved up to #2 (operator 2026-07-04 "plaats gezina hoger op de pagina")
// — women's-training specialist, given more prominence.
// Roberta added 2026-07-25 (her own email request). Placed at #6 — her
// Strength / posture-&-mobility / weight-loss profile sits
// naturally among the general-strength coaches. Operator can reorder freely.
const DISPLAY_ORDER = ["eva", "gezina", "bryan", "tom", "joey", "roberta", "ibrahim", "alex", "andrea", "sergei", "dara", "jearmey", "hamish"] as const;

const trainersRaw: Trainer[] = [
  {
    id: "alex",
    name: "Alex",
    slug: {
      nl: "plan-gratis-intake-met-alex",
      en: "plan-free-intro-with-alex",
    },
    specialization: {
      nl: ["Static Calisthenics", "Gymnastiek", "Prestatie"],
      en: ["Static Calisthenics", "Gymnastics", "Performance"],
    },
    languages: ["NL", "EN", "PT"],
    rate: "€69 / 60 min",
    instagram: "https://instagram.com/almeidalexjr",
    instagramHandle: "@almeidalexjr",
    // Bio + specialization corrected 2026-06-01 per Alex's own description
    // (operator relayed via WhatsApp): he is a STATIC calisthenics specialist
    // with a gymnastics background / fitness instructor — not generic "strength
    // training" as the prior copy stated. Phrasing cleaned from his non-native
    // English; meaning preserved. Brand-voice compliant (no banned words).
    credentials: {
      nl: "Fitnessinstructeur",
      en: "Fitness Instructor",
    },
    bio: {
      nl: "Static calisthenics-specialist met een achtergrond in gymnastiek. Als fitnessinstructeur richt Alex zich op prestatie, afvallen, spieropbouw en herstel met functionele, skill-gerichte bewegingen — van je eerste push-up tot een beheerste handstand, terwijl je je atletisch vermogen opbouwt met meetbare resultaten.",
      en: "Static calisthenics specialist with a background in gymnastics. As a fitness instructor, Alex coaches performance, weight loss, muscle gain and recovery through functional, skill-based movement — from your first push-up to a clean handstand, building real athletic ability and measurable results.",
    },
    image: "/images/trainers/alex.jpg",
    // Alex = Alexandre de Almeida. Portuguese mobile (+351 917 397 700) —
    // operator-confirmed 2026-05-31 via his WhatsApp contact card. Was MISSING,
    // so his intake WhatsApp button fell back to the SculptClub studio number
    // (31615147952) instead of reaching Alex directly. wa.me uses the full
    // international number with no '+' or spaces: 351917397700.
    whatsapp: "https://wa.me/351917397700",
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
    // Eva = Eva Pt (~SportieefCoaching). Operator-confirmed 2026-05-31 via her
    // WhatsApp contact card: +31 6 23232640. Was missing → her intake button
    // fell back to the SculptClub studio number. wa.me/31623232640.
    whatsapp: "https://wa.me/31623232640",
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
      nl: ["Training voor vrouwen", "Kracht", "Prestatie"],
      en: ["Women's Training", "Strength", "Performance"],
    },
    languages: ["NL", "EN"],
    rate: null,
    instagram: "https://www.instagram.com/gezfitness/",
    instagramHandle: "@gezfitness",
    bio: {
      nl: "Gezina is een gecertificeerde personal trainer gespecialiseerd in training voor vrouwen. Ze helpt vrouwen sterker worden door personal training en small group sessies, afgestemd op het lichaam en de cyclus.",
      en: "Gezina is a certified personal trainer specializing in women's training. She helps women build strength through personal training and small group sessions, designed to work in sync with the body and cycle.",
    },
    image: "/images/trainers/gezina.jpg",
    // Gezina — operator-confirmed 2026-05-31 via WhatsApp contact card:
    // +31 6 13440302. Was missing → intake button fell back to the studio
    // number. wa.me/31613440302.
    whatsapp: "https://wa.me/31613440302",
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
    // Andrea Grskii (female trainer, @grskiiii) — operator-confirmed 2026-05-31
    // via WhatsApp contact card: +31 6 22730864. Was missing → intake button
    // fell back to the studio number. wa.me/31622730864.
    whatsapp: "https://wa.me/31622730864",
  },
  {
    id: "dara",
    name: "Dara",
    slug: {
      nl: "plan-gratis-intake-met-dara",
      en: "plan-free-intro-with-dara",
    },
    specialization: {
      nl: ["Kracht & Balans", "Personal Training", "Beginners welkom"],
      en: ["Strength & Balance", "Personal Training", "Beginner-friendly"],
    },
    languages: ["NL", "EN"],
    rate: null,
    instagram: "https://instagram.com/strengthandbalancecoaching",
    instagramHandle: "@strengthandbalancecoaching",
    bio: {
      nl: "Dara coacht je in kracht én balans, met persoonlijke aandacht en een aanpak die je stap voor stap zelfverzekerder maakt. Of je nu net begint of weer in beweging wilt komen: je traint op jouw tempo, in een rustige setting waar je je meteen op je gemak voelt.",
      en: "Dara coaches you in strength and balance, with personal attention and an approach that builds your confidence step by step. Whether you're just starting out or getting back into movement, you train at your own pace in a calm setting where you feel at ease from the first session.",
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
    // Jearmey ("Jer", @jer.proformance) — operator-confirmed 2026-05-31 via
    // WhatsApp contact card: +31 6 21582581. Was missing → intake button fell
    // back to the studio number. wa.me/31621582581.
    whatsapp: "https://wa.me/31621582581",
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
    // Sergei Novozhilov (@transformbst) — operator-confirmed 2026-05-31 via
    // WhatsApp contact card: +31 6 39382800. Was missing → intake button fell
    // back to the studio number. wa.me/31639382800.
    whatsapp: "https://wa.me/31639382800",
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
  {
    id: "tom",
    name: "Tom",
    slug: {
      nl: "plan-gratis-intake-met-tom",
      en: "plan-free-intro-with-tom",
    },
    specialization: {
      nl: ["Kracht & Conditie", "Duurzame Training", "Brazilian Jiu-Jitsu"],
      en: ["Strength & Conditioning", "Sustainable Training", "Brazilian Jiu-Jitsu"],
    },
    // English only — operator confirmed 2026-07-04 Tom does NOT coach in Dutch
    // (the earlier NL inference from his Amsterdam mobile/name was wrong).
    languages: ["EN"],
    rate: "€100 / 60 min",
    // Block of ten (€900 = €90/session) + monthly PAYG billing also offered, but
    // the Trainer schema has a single `rate` field (no trainer shows block
    // pricing). Per-session rate shown here; block/PAYG covered at the intake.
    credentials: {
      nl: "Personal trainer, 12 jaar ervaring (Mayfair & Soho, Londen)",
      en: "Personal Trainer, 12 years' experience (Mayfair & Soho, London)",
    },
    bio: {
      nl: "Tom heeft 12 jaar ervaring, opgebouwd op de sportvloeren van Mayfair en Soho in Londen, waar hij veeleisende cliënten trainde. Met een achtergrond in het leger, roeien en Brazilian Jiu-Jitsu combineert hij die ervaring met een heldere aanpak: je gezonder maken en je de middelen geven om ook met een druk leven duurzaam te blijven trainen.",
      en: "Tom brings 12 years of experience from the gym floors of Mayfair and Soho in London, where he trained demanding, high-end clients — alongside a background in the military, rowing and Brazilian Jiu-Jitsu. His approach is clear: get you healthier, and give you the tools to train sustainably through a busy life.",
    },
    // Real photo — front-facing street portrait, cropped 1122×1200 (best card
    // fit of the 3 operator-provided shots; see commit f602c7f).
    image: "/images/trainers/tom.jpg",
    // 2 more of the 3 operator-provided photos — found in ~/Downloads (chat
    // attachments land there, not written to disk automatically; the
    // f602c7f comment saying "can't be written to disk" was wrong, corrected
    // 2026-07-01). Renders as a thumbnail strip + fullscreen slider on the
    // intake page (TrainerPhotoGallery) — operator asked to "see all 3
    // photos when you click on profile".
    gallery: [
      {
        src: "/images/trainers/tom-2.jpg",
        alt: {
          nl: "Tom, personal trainer bij SculptClub, tegen een bakstenen muur",
          en: "Tom, personal trainer at SculptClub, against a brick wall",
        },
      },
      {
        src: "/images/trainers/tom-3.jpg",
        alt: {
          nl: "Tom traint een cliënt met stootkussens",
          en: "Tom coaching a client with focus mitts",
        },
      },
    ],
    // Tom — operator-provided direct contact 2026-07-01: +31 6 15294322.
    whatsapp: "https://wa.me/31615294322",
  },
  {
    id: "roberta",
    name: "Roberta",
    slug: {
      nl: "plan-gratis-intake-met-roberta",
      en: "plan-free-intro-with-roberta",
    },
    specialization: {
      nl: ["Kracht", "Houding & Mobiliteit", "Afvallen"],
      en: ["Strength", "Posture & Mobility", "Weight Loss"],
    },
    languages: ["EN", "IT"],
    rate: null,
    instagram: "https://instagram.com/fitmillennial.pt",
    instagramHandle: "@fitmillennial.pt",
    // Bio supplied by Roberta herself (email 2026-07-25), condensed to the
    // house length + voice. Claims kept exactly as she wrote them — Italian,
    // Amsterdam-based, 1-to-1 + small group + one-off consultations. Nothing
    // added or inferred.
    // 2026-08-31: ACE® removed from credentials + bio + all page copy at
    // Roberta's own request (WhatsApp 17:46) — "if you can remove ACE from my
    // description". Do NOT reinstate it without her asking.
    bio: {
      nl: "Italiaanse personal trainer in Amsterdam. Roberta helpt drukke volwassenen sterker te worden, beter te bewegen en een realistische routine op te bouwen die bij hun leven past. Ze geeft 1-op-1 en kleine groepen, en losse consulten voor beginners én gevorderden die professionele begeleiding willen zonder wekelijkse afspraken. De nadruk ligt op techniek, houding en mobiliteit, en vooruitgang die je op eigen kracht volhoudt.",
      en: "Italian personal trainer based in Amsterdam. Roberta helps busy adults get stronger, move better and build a realistic routine that fits their lifestyle. She offers one-to-one and small-group coaching, plus focused consultations for beginners and experienced exercisers who want professional guidance without committing to weekly appointments. The emphasis is on proper technique, posture and mobility, and sustainable progress you can carry on your own.",
    },
    image: "/images/trainers/roberta-main.jpg",
    // Roberta asked (email 2026-07-25) NOT to publish a private mobile —
    // her CTA goes to her own Calendly instead of WhatsApp, and she offers a
    // short free DISCOVERY CALL rather than a full intake, so the button is
    // relabelled to match what she actually delivers.
    bookingUrl: "https://calendly.com/robertavirzipt/30min",
    bookingLabel: {
      nl: "Boek een gratis kennismakingsgesprek",
      en: "Book a free discovery call",
    },
  },
];

const byId = Object.fromEntries(trainersRaw.map((t) => [t.id, t]));
export const trainers: Trainer[] = DISPLAY_ORDER.map((id) => byId[id]).filter(Boolean);
