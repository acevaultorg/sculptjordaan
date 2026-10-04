// ─── Posting Studio packs ──────────────────────────────────────────────────
// Ready-to-post slide packs for /nl/social (the Posting Studio). Each pack maps
// to a folder under public/social/<id>/ that holds the pre-rendered slides as
// `${platform}-${slide.name}.png` (TikTok = 9:16, Instagram = 1:1) plus the
// verbatim captions below. The studio renders these in one guided flow:
// open a pack → pick platform → Save all slides to Photos → copy caption →
// post → tick off.
//
// Caption text is VERBATIM from each pack's public/social/<id>/index.html COPY
// object (single source of truth — keep in sync if a pack's index.html changes).
// audience splits the board so client-facing and trainer-recruitment posts are
// never mixed (opposite psychology — see rules/two-audience-sensitivity).

export type StudioAudience = "client" | "trainer";

export interface PackSlide {
  /** filename part → `${platform}-${name}.png` under /social/<id>/ */
  name: string;
  /** display number, e.g. "1" */
  label: string;
  /** short NL caption shown under the thumbnail */
  title: string;
}

export interface SocialPack {
  /** folder under /public/social/ */
  id: string;
  /** human NL title shown in the studio */
  title: string;
  audience: StudioAudience;
  /** one-line what + why */
  blurb: string;
  /** landing page the post drives to (reference) */
  ctaUrl: string;
  /**
   * Set when the pack is a finished VIDEO post instead of a slide deck. The
   * studio then offers "save the video" in place of "save all slides" and
   * `slides` is empty. One 9:16 file serves both TikTok and an IG Reel.
   */
  video?: { src: string; poster: string; durationLabel: string };
  slides: PackSlide[];
  tiktok: { title: string; description: string; hashtags: string };
  instagram: { caption: string; hashtags: string };
}

// Ordered: client/demand packs first (Instagram is the #1 acquisition lever —
// CLAUDE.md channel-mix truth), trainer/supply packs last. Open Gym leads
// (entry product, lowest price-point, broadest audience, the 10.5K-view
// price-overlay winning format).
export const SOCIAL_PACKS: SocialPack[] = [
  {
    // WATCH-CONTENT. Operator 2026-09-07: "our tiktok has a lot of ad content;
    // post more content people love to see and like." No offer, no price, no
    // text card — a real trainer doing the thing he coaches. Alex sent the clip
    // himself. First measured test of the format: read views at 48h against the
    // account's 240-265 carousel band and the 1.5K-11K offer-led winners, and
    // record the number on Marketing card mtdculbxd2grn7 before re-cutting the
    // rotation either way.
    id: "alex-handstand-001",
    title: "Alex \u00b7 10 seconden handstand (video)",
    audience: "client",
    blurb:
      "Watch-content, geen aanbieding, echte skill van een echte trainer, in onze eigen zaal. Alex stuurde de clip zelf op 7 sep.",
    ctaUrl: "sculptclub.nl/nl/plan-gratis-intake-met-alex",
    video: {
      src: "/social/alex-handstand-001/reel.mp4",
      poster: "/social/alex-handstand-001/cover.jpg",
      durationLabel: "10 s \u00b7 9:16",
    },
    slides: [],
    tiktok: {
      title: "Tien seconden stil op twee dumbbells. Alex, static calisthenics, Amsterdam",
      description:
        "Tien seconden stil. Op twee dumbbells.\n\nDit is Alex, static calisthenics, achtergrond in gymnastiek. Geen trucje, geen montage: gewoon controle die je opbouwt, rep voor rep.\n\nVan je eerste push-up tot een strakke handstand. Zo coacht hij het, in onze priv\u00e9 studio in de Jordaan.\n\n@almeidalexjr",
      hashtags:
        "#handstand #calisthenics #amsterdam #jordaan #personaltrainer #gymnastics #handstandpractice #bodyweight #sculptclub",
    },
    instagram: {
      caption:
        "Tien seconden stil. Op twee dumbbells.\n\nDit is Alex, static calisthenics, achtergrond in gymnastiek. Geen trucje, geen montage: gewoon controle die je opbouwt, rep voor rep.\n\nVan je eerste push-up tot een strakke handstand. Zo coacht hij het, in onze priv\u00e9 studio in de Jordaan.\n\n@almeidalexjr",
      hashtags:
        "#handstand #calisthenics #amsterdam #jordaan #personaltrainer #gymnastics #handstandpractice #bodyweight #sculptclub",
    },
  },
  {
    id: "open-gym-pitch-001",
    title: "Open Gym · solo trainen vanaf €7,25",
    audience: "client",
    blurb: "Entry-product. Solo trainen in de privé studio, laagste prijspunt, breedste publiek.",
    ctaUrl: "sculptclub.nl/open-gym",
    slides: [
      { name: "main-offer", label: "1", title: "Solo trainen · privé · 60 min" },
      { name: "price-substance", label: "2", title: "Vanaf €7,25 / sessie" },
      { name: "location", label: "3", title: "Egelantiersgracht 424 · Jordaan" },
    ],
    tiktok: {
      title: "Open Gym · privé studio in de Jordaan · solo trainen 60 minuten",
      description:
        "Boek je eerste probeersessie Open Gym in onze privé studio aan de Egelantiersgracht.\n\n60 minuten solo trainen · max 4 personen per slot · vrijblijvend · vanaf €7,25 per sessie · geen contract.\n\nsculptclub.nl/open-gym",
      hashtags: "#opengym #amsterdamgym #privegym #jordaan #fitamsterdam",
    },
    instagram: {
      caption:
        "Open Gym in onze privé studio aan de Egelantiersgracht.\n\n60 minuten solo trainen · max 4 personen per slot · eerste probeersessie vrijblijvend · vanaf €7,25 per sessie · geen contract.\n\nBoek je probeersessie · link in bio 👆",
      hashtags: "#opengym #amsterdamgym #privegym #jordaan #fitamsterdam",
    },
  },
  {
    id: "intake-pitch-001",
    title: "Gratis intake · 8 trainers, 1 privé studio",
    audience: "client",
    blurb: "PT-pitch: gratis eerste sessie, 8 specialisten. De kern-acquisitie voor klanten.",
    ctaUrl: "sculptclub.nl/gratis-intake",
    slides: [
      { name: "main-offer", label: "1", title: "Privé · 1-op-1 · 45 min" },
      { name: "no-pressure", label: "2", title: "Ontmoet de trainers · 8 specialisten" },
      { name: "location", label: "3", title: "Plan je eerste sessie · /gratis-intake" },
    ],
    tiktok: {
      title: "Acht trainers, één privé studio aan de Egelantiersgracht.",
      description:
        "Een eerste sessie 1-op-1 met je personal trainer in onze privé studio aan de Egelantiersgracht.\n\n45 minuten · vrijblijvend · 8 trainers · 5.0 ★ Google.\n\nPlan je gratis intake → sculptclub.nl/gratis-intake",
      hashtags: "#personaltrainingamsterdam #amsterdamgym #jordaan #pt #fitamsterdam",
    },
    instagram: {
      caption:
        "Een eerste sessie 1-op-1 met je personal trainer in onze privé studio aan de Egelantiersgracht.\n\n45 minuten · vrijblijvend · 8 trainers · 5.0 ★ Google · Jordaan.\n\nPlan je gratis intake · link in bio 👆",
      hashtags: "#personaltrainingamsterdam #amsterdamgym #jordaan #pt #fitamsterdam",
    },
  },
  {
    id: "pt-how-to-choose-001",
    title: "Hoe kies je een personal trainer?",
    audience: "client",
    blurb: "Educatief: Doel · Stijl · Tijd, bouwt vertrouwen, leidt naar de gratis intake.",
    ctaUrl: "sculptclub.nl/gratis-intake",
    slides: [
      { name: "hook", label: "1", title: "Hook · Hoe kies je een PT?" },
      { name: "criteria", label: "2", title: "Drie dingen · Doel · Stijl · Tijd" },
      { name: "cta", label: "3", title: "Vind jouw trainer · /gratis-intake" },
    ],
    tiktok: {
      title: "Hoe kies je een personal trainer in Amsterdam?",
      description:
        "Doel · Stijl · Tijd. Drie dingen die de juiste keuze maken voor jouw PT.\n\nAcht trainers in onze privé studio aan de Egelantiersgracht · vier specialisaties · 5.0 ★ Google.\n\nPlan je gratis intake → sculptclub.nl/gratis-intake",
      hashtags: "#personaltrainingamsterdam #amsterdamgym #jordaan #pt #fitamsterdam",
    },
    instagram: {
      caption:
        "Hoe kies je een personal trainer? Drie dingen die ertoe doen.\n\nDoel: wat wil je bereiken?\nStijl: past de aanpak bij hoe jij wilt trainen?\nTijd: past het in je week?\n\nAcht trainers in onze privé studio aan de Egelantiersgracht · vier specialisaties · 5.0 ★ Google.\n\nPlan je gratis intake · link in bio 👆",
      hashtags: "#personaltrainingamsterdam #amsterdamgym #jordaan #pt #fitamsterdam",
    },
  },
  {
    id: "education-squat-mistakes-001",
    title: "3 fouten in je squat",
    audience: "client",
    blurb: "Educatief: 3 squat-fouten + de fix, value-first hook richting de gratis intake.",
    ctaUrl: "sculptclub.nl/gratis-intake",
    slides: [
      { name: "hook", label: "1", title: "Hook · 3 fouten in je squat" },
      { name: "faults", label: "2", title: "De 3 fouten · knieën, romp, hielen" },
      { name: "cta", label: "3", title: "Laat je squat checken · /gratis-intake" },
    ],
    tiktok: {
      title: "3 fouten in je squat: welke maak jij?",
      description:
        "Knieën die naar binnen vallen · romp die voorover valt · hielen die los komen. De drie meest gemaakte fouten, en de fix.\n\nEerste sessie 1-op-1 met je trainer in onze privé studio aan de Egelantiersgracht.\n\nPlan je gratis intake → sculptclub.nl/gratis-intake",
      hashtags: "#squat #squatform #personaltrainingamsterdam #amsterdamgym #jordaan",
    },
    instagram: {
      caption:
        "3 fouten in je squat, welke maak jij?\n\nKnieën die naar binnen vallen · romp die voorover valt · hielen die los komen. De drie meest gemaakte fouten, en de fix.\n\nEerste sessie 1-op-1 met je trainer in onze privé studio aan de Egelantiersgracht.\n\nPlan je gratis intake · link in bio 👆",
      hashtags: "#squat #squatform #personaltrainingamsterdam #amsterdamgym #jordaan",
    },
  },
  {
    id: "trainer-spotlight-alex-001",
    title: "Maak kennis met Alex",
    audience: "client",
    blurb: "Trainer-spotlight: stelt Alex voor aan potentiële klanten (kracht/calisthenics/herstel).",
    ctaUrl: "sculptclub.nl/nl/plan-gratis-intake-met-alex",
    slides: [
      { name: "intro", label: "1", title: "Intro · Alex · Kracht/Cali/Herstel" },
      { name: "approach", label: "2", title: "Aanpak · Functioneel · 4 weken" },
      { name: "cta", label: "3", title: "Plan een sessie · /plan-gratis-intake-met-alex" },
    ],
    tiktok: {
      title: "SCULPT TRANSFORMATION met Alex in de Jordaan",
      description:
        "Vier weken gericht trainen met een eigen programma, en zien dat het werkt.\n\nSCULPT TRANSFORMATION vanaf €329 per 4 weken, inclusief onbeperkt Open Gym.\n\nMet Alex in onze privé studio aan de Egelantiersgracht. Kracht · Calisthenics · Hersteltraining. NL · EN · PT. Alex is zelfstandig en spreekt de exacte prijs met je af bij de gratis intake.\n\nProbeer eerst gratis → sculptclub.nl/nl/plan-gratis-intake-met-alex\n\nMAKE IT WORK.",
      hashtags: "#personaltrainingamsterdam #amsterdamgym #jordaan #calisthenics #krachttraining",
    },
    instagram: {
      caption:
        "Vier weken gericht trainen met een eigen programma, en zien dat het werkt.\n\nSCULPT TRANSFORMATION vanaf €329 per 4 weken, inclusief onbeperkt Open Gym.\n\nMet Alex, onze personal trainer voor kracht, calisthenics en hersteltraining. NL · EN · PT. Alex is zelfstandig en spreekt de exacte prijs met je af bij de gratis intake.\n\nProbeer eerst gratis. Link in bio 👆\n\nMAKE IT WORK.",
      hashtags: "#personaltrainingamsterdam #amsterdamgym #jordaan #calisthenics #krachttraining",
    },
  },
  {
    id: "trainer-commission-math-001",
    title: "30% commissie vs €12 huur",
    audience: "trainer",
    blurb: "Trainer-werving: 30% commissie elders vs €12 huur hier, de simpele math.",
    ctaUrl: "sculptclub.nl/voor-trainers",
    slides: [
      { name: "loss", label: "1", title: "Loss · 30% commissie" },
      { name: "keep", label: "2", title: "Keep · €12 huur" },
      { name: "cta", label: "3", title: "CTA · Bekijk studio" },
    ],
    tiktok: {
      title: "30% commissie. Elke sessie. Elke maand. ↓",
      description:
        "Trainers betalen tot 30% commissie per sessie aan de meeste gyms.\n\nSculptClub: €12 huur per uur · je houdt 100% van je tarief · eigen klanten · eigen profiel.\n\nDe math is simpel.\n\nProbeer gratis → sculptclub.nl/voor-trainers",
      hashtags: "#personaltraineramsterdam #studiohuren #zzpfitness #jordaan #ptamsterdam",
    },
    instagram: {
      caption:
        "30% commissie. Elke sessie. Elke maand. 🧡\n\nTrainers betalen tot 30% commissie per sessie aan de meeste gyms. SculptClub: €12 huur per uur · je houdt 100% van je tarief · eigen klanten · eigen profiel.\n\nDe math is simpel.\n\nProbeer gratis · link in bio 👆",
      hashtags: "#personaltraineramsterdam #studiohuren #zzpfitness #jordaan #ptamsterdam",
    },
  },
  {
    id: "trainer-pitch-001",
    title: "Huur je eigen PT-studio · €12/uur",
    audience: "trainer",
    blurb: "Trainer-werving: huur je eigen studio, je houdt 100% van je tarief, eigen klanten, geen contract.",
    ctaUrl: "sculptclub.nl/voor-trainers",
    slides: [
      { name: "main-offer", label: "1", title: "Main offer · €12/uur" },
      { name: "usp-focus", label: "2", title: "USP · 100% van je tarief" },
      { name: "location", label: "3", title: "Locatie · Jordaan" },
    ],
    tiktok: {
      title: "🧡 Huur jouw eigen PT-studio in de Jordaan · €12/uur",
      description:
        "Trainers, eigen sleutel, eigen tarief, eigen klanten.\n\nJe houdt 100% van je tarief · geen contract · dagelijks geopend 06:00 – 22:00.\n\nProbeer gratis → sculptclub.nl/voor-trainers",
      hashtags: "#personaltraineramsterdam #studiohuren #zzpfitness #jordaan #ptamsterdam",
    },
    instagram: {
      caption:
        "Privé personal training studio in de Jordaan 🧡\n\nTrainers, huur jouw eigen studio vanaf €12/uur · je houdt 100% van je tarief · geen contract · dagelijks geopend 06:00 – 22:00.\n\nProbeer gratis · link in bio 👆",
      hashtags: "#personaltraineramsterdam #studiohuren #zzpfitness #jordaan #ptamsterdam",
    },
  },
];

/** Per-audience bio-link the operator should set during a campaign (the tap-target
 * for "link in bio", since IG/TikTok captions aren't clickable). */
export const AUDIENCE_BIO_LINK: Record<StudioAudience, { label: string; url: string }> = {
  client: { label: "Klanten-posts", url: "sculptclub.nl/gratis-intake" },
  trainer: { label: "Trainer-posts", url: "sculptclub.nl/voor-trainers" },
};
