// Social content library for SculptClub TikTok + Instagram
// Operator-first design: brain provides STRUCTURE (what to say, key facts, CTAs).
// Operator writes the actual Dutch prose in their own voice.
// Why: AI-generated Dutch ≠ native Dutch. Brand voice belongs to operator.

export type Platform = "tiktok" | "instagram";
export type Pillar =
  | "studio-tour"
  | "pt-showcase"
  | "trainer-spotlight"
  | "before-after"
  | "fitness-tip"
  | "behind-scenes"
  | "jordaan-local"
  | "social-proof";

export interface MediaAsset {
  src: string;
  label: string;
  role?: "primary" | "supporting";
}

export interface CaptionTemplate {
  message: string;
  keyPoints: string[];
  cta: string;
  targetLength: "short" | "medium" | "long";
}

export interface SocialIdea {
  id: string;
  platform: Platform;
  pillar: Pillar;
  title: string;
  hook: string;
  script: string;
  captionTemplate: CaptionTemplate;
  hashtags: string;
  visualNote: string;
  duration?: string;
  media?: MediaAsset[];
}

const FACTS = {
  address: "Egelantiersgracht 424, Jordaan, Amsterdam",
  hours: "Dagelijks 06:30 – 22:00",
  pt: "vanaf €45/sessie · gratis intake",
  studio: "vanaf €12 per 60 min",
  openGym: "vanaf €5,75 per sessie",
  rating: "5,0 ⭐ op Google",
  website: "sculptclub.nl",
  ptLanding: "sculptclub.nl/vind-jouw-personal-trainer",
  studioLanding: "sculptclub.nl/studio-huren",
};

export const SOCIAL_IDEAS: SocialIdea[] = [
  // ─── TIKTOK · STUDIO TOUR ───────────────────────────────────────────
  {
    id: "tt-tour-01",
    platform: "tiktok",
    pillar: "studio-tour",
    title: "Studio walkthrough — 60 sec",
    hook: "POV: je vindt een privégym in de Jordaan vanaf €12 per uur",
    script: `[0-3s] Hook tekst: "POV: privégym in Jordaan vanaf €12/uur"
[3-8s] Pan over Rogue power rack
[8-15s] Barbells + bumper plates close-up
[15-22s] Cardio corner: Echo Bike + sled
[22-30s] Squat rack + spiegels
[30-40s] Garage door open op de gracht
[40-50s] Snel door alle hoekjes — beats of music
[50-60s] CTA op screen: "Boek via sculptclub.nl"`,
    captionTemplate: {
      message: "Toon dat onze studio een echte privégym is in de Jordaan, niet een keten.",
      keyPoints: [
        `Locatie: ${FACTS.address}`,
        `Prijs: ${FACTS.studio}`,
        "Geen abonnement nodig",
        "Echte Rogue apparatuur",
        `${FACTS.hours}`,
        `${FACTS.rating}`,
      ],
      cta: `Boek via ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#amsterdam #jordaan #gymamsterdam #privegym #personaltraining #fitnessamsterdam #boutiquegym #studiohuren #amsterdamfitness #jordaanlocal`,
    visualNote: "Film overdag met natuurlijk licht. Music: trending sound NL. Geen voice-over — alles op screen.",
    duration: "60s",
    media: [
      { src: "/images/studio/studio-overview.jpeg", label: "Studio overview", role: "primary" },
      { src: "/images/studio/power-rack.jpeg", label: "Power rack" },
      { src: "/images/studio/dumbbell-rack.jpeg", label: "Dumbbell rack" },
      { src: "/images/studio/echo-bike-corner.jpg", label: "Echo bike corner" },
      { src: "/images/studio/rogue-sled.jpg", label: "Rogue sled" },
      { src: "/images/studio/canal-view-doors.jpg", label: "Gracht doors open" },
      { src: "/images/studio/facade-sculptclub.jpg", label: "Facade" },
    ],
  },
  {
    id: "tt-tour-02",
    platform: "tiktok",
    pillar: "studio-tour",
    title: "5 dingen die niemand verwacht in onze gym",
    hook: "5 dingen die niemand verwacht in onze gym in de Jordaan",
    script: `[0-3s] Hook: "5 dingen die niemand verwacht"
[3-12s] #5: Garage door op de gracht
[12-22s] #4: Geen abonnement nodig — per uur boeken
[22-32s] #3: 0% commissie voor trainers
[32-42s] #2: Privé — alleen jij + je trainer
[42-55s] #1: Dagelijks open 06:30 – 22:00
[55-60s] CTA: "Eerste intake gratis"`,
    captionTemplate: {
      message: "Lijst-format: 5 verrassingen die mensen ontdekken bij de eerste bezoek aan onze studio.",
      keyPoints: [
        "Garage door direct op de gracht (zomer-modus)",
        "Geen abonnement: huur per uur",
        "0% commissie voor trainers — eerlijke prijs",
        "Privé sessies — geen vreemden naast je",
        `${FACTS.hours}`,
        `${FACTS.address}`,
      ],
      cta: `Eerste intake gratis · ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#amsterdam #jordaan #personaltrainer #gymamsterdam #boutiquegym #privegym #fitnessjourney #amsterdamlife #jordaanlife`,
    visualNote: "Quick-cut transitions tussen elke '#'. Each shot ~7-10s. Trending audio met countdown beat.",
    duration: "60s",
    media: [
      { src: "/images/studio/canal-view-doors.jpg", label: "Garage door op gracht", role: "primary" },
      { src: "/images/studio/studio-interior-1.jpeg", label: "Studio interior" },
      { src: "/images/studio/studio-interior-2.jpeg", label: "Privé sfeer" },
      { src: "/images/studio/sculpt-wall-logo.jpeg", label: "Wall logo" },
      { src: "/images/studio/turf-lane-canal.jpg", label: "Turf lane" },
    ],
  },

  // ─── TIKTOK · PT SHOWCASE ───────────────────────────────────────────
  {
    id: "tt-pt-01",
    platform: "tiktok",
    pillar: "pt-showcase",
    title: "Echte 1-op-1 sessie (geen Instagram-versie)",
    hook: "Hoe een echte personal training sessie eruitziet",
    script: `[0-3s] Hook tekst over een coaching moment
[3-10s] Warming-up — dynamic stretches
[10-20s] Coach corrigeert techniek
[20-30s] Klant zet PR
[30-40s] High-five, eerlijke reactie
[40-50s] Cooldown gesprek
[50-60s] Tekst: "Vanaf €45 · Gratis intake · sculptclub.nl"`,
    captionTemplate: {
      message: "Laat zien dat een echte PT-sessie ánders is dan de geënsceneerde Instagram-versie.",
      keyPoints: [
        "1-op-1 aandacht van de trainer",
        "Echte coaching, geen geforceerde sets-tellen",
        `Prijs: ${FACTS.pt}`,
        "Eerste intake is gratis",
      ],
      cta: `Boek via ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #personaltraining #amsterdam #jordaan #fitnessmotivation #strengthtraining #gymlife #amsterdamfitness #pt #fitnesscoach`,
    visualNote: "Echte klant (toestemming eerst!). Multi-angle: statief vast + handheld voor close-ups. Niet over-editen.",
    duration: "60s",
    media: [
      { src: "/images/studio/pt-session-barbell.jpg", label: "PT sessie barbell", role: "primary" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Squat coaching" },
      { src: "/images/studio/training-chest-press.jpg", label: "Chest press" },
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Dumbbells focus" },
      { src: "/images/studio/training-barbell-dramatic.jpg", label: "Barbell dramatic" },
    ],
  },
  {
    id: "tt-pt-02",
    platform: "tiktok",
    pillar: "pt-showcase",
    title: "Wat €45 echt oplevert",
    hook: "Wat krijg je voor €45 bij een PT in de Jordaan?",
    script: `[0-3s] Hook: "€45 voor een PT — wat krijg je?"
[3-10s] Item 1 — Coach die luistert
[10-17s] Item 2 — Programma op maat
[17-24s] Item 3 — Live techniek-correcties
[24-31s] Item 4 — Voedingsadvies (optioneel)
[31-38s] Item 5 — Volgende sessie aangepast op jouw voortgang
[38-50s] Bonus: eerste intake gratis
[50-60s] CTA: sculptclub.nl`,
    captionTemplate: {
      message: "Lijst-format: wat krijgt iemand concreet voor €45/sessie bij SculptClub. Adresseert de objectie 'is het dat geld waard?'",
      keyPoints: [
        "Coach die echt luistert naar jouw doel",
        "Programma op maat, geen sjabloon",
        "Techniek-correcties tijdens de sessie",
        "Voedingsadvies indien gewenst",
        "Volgende sessie aangepast op vorige",
        "0% commissie: prijs = wat de trainer krijgt",
        "Eerste intake is gratis",
      ],
      cta: `Vind jouw trainer · ${FACTS.ptLanding}`,
      targetLength: "long",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #pricetransparency #fitnessamsterdam #ptlife #strengthcoach #amsterdamlife #fitnessjourney`,
    visualNote: "Lijst-stijl met snelle cuts. Achtergrond: trainer aan het coachen / studio shots tussen items.",
    duration: "60s",
    media: [
      { src: "/images/studio/pt-session-barbell.jpg", label: "Coach + klant", role: "primary" },
      { src: "/images/studio/training-dumbbells-power.jpg", label: "Dumbbells power" },
      { src: "/images/studio/training-squat-cinematic.jpg", label: "Squat cinematic" },
      { src: "/images/studio/training-dead-hang.jpg", label: "Dead hang" },
    ],
  },

  // ─── TIKTOK · TRAINER SPOTLIGHT ─────────────────────────────────────
  {
    id: "tt-spotlight-alex",
    platform: "tiktok",
    pillar: "trainer-spotlight",
    title: "Meet Alex — Strength · Calisthenics",
    hook: "Maak kennis met Alex — onze strength + calisthenics trainer",
    script: `[0-3s] Alex talking-head: korte intro
[3-10s] B-roll: Alex coaching een squat
[10-20s] Alex spreekt over zijn specialisme
[20-30s] Action shot: muscle-up demo
[30-40s] Alex noemt tarief + gratis intake
[40-50s] B-roll: coaching client door sessie
[50-60s] CTA: "Boek gratis intake · sculptclub.nl"`,
    captionTemplate: {
      message: "Stel Alex voor als trainer + roep specifieke klanten op die bij hem passen (kracht/calisthenics).",
      keyPoints: [
        "Specialisme: Strength · Calisthenics · Recovery",
        "Talen: NL · EN · PT",
        "Tarief: €69 per 60 min",
        "Eerste intake gratis",
      ],
      cta: `Boek via ${FACTS.website} of stuur Alex een DM`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #calisthenics #strengthtraining #personaltraineramsterdam #fitnesscoach #ptamsterdam`,
    visualNote: "Alex' authentieke stijl — geen script. Mix talking-head + coaching b-roll.",
    duration: "60s",
    media: [
      { src: "/images/trainers/alex.jpg", label: "Alex portrait", role: "primary" },
      { src: "/images/trainers/alex-wp.jpg", label: "Alex wp" },
      { src: "/images/studio/training-dead-hang.jpg", label: "Calisthenics action" },
      { src: "/images/studio/training-barbell-dramatic.jpg", label: "Strength action" },
    ],
  },
  {
    id: "tt-spotlight-eva",
    platform: "tiktok",
    pillar: "trainer-spotlight",
    title: "Meet Eva — Diëtist + PT",
    hook: "Eva is diëtist én personal trainer — die combinatie is zeldzaam",
    script: `[0-3s] Hook: "Onze trainer Eva is óók diëtist"
[3-12s] Eva intro: traint + adviseert
[12-22s] B-roll: Eva coaching squat
[22-32s] Eva over combinatie kracht + voeding
[32-42s] Korte klant-testimony (1 zin, met toestemming)
[42-52s] Eva noemt: tarief op aanvraag, intake gratis
[52-60s] CTA: "DM Eva voor je gratis intake"`,
    captionTemplate: {
      message: "Maak van Eva's unique combo (diëtist + PT) een onderscheidende reason-to-book.",
      keyPoints: [
        "Specialisme: Strength + Voedingsadvies",
        "Talen: NL · EN",
        "Tarief: op aanvraag",
        "Eerste intake gratis",
        "Combinatie van training + voeding-advies is uniek in Amsterdam",
      ],
      cta: `Boek via ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#dietist #personaltrainer #amsterdam #jordaan #voedingsadvies #nutrition #strengthtraining #fitcoach #womenwholift #amsterdamhealth`,
    visualNote: "Toon Eva in beide rollen — coaching én voedingsadvies. Splice naast elkaar.",
    duration: "60s",
    media: [
      { src: "/images/trainers/eva.jpg", label: "Eva portrait", role: "primary" },
      { src: "/images/trainers/eva-wp.jpg", label: "Eva wp" },
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Coaching action" },
    ],
  },

  // ─── TIKTOK · BEFORE/AFTER ──────────────────────────────────────────
  {
    id: "tt-ba-01",
    platform: "tiktok",
    pillar: "before-after",
    title: "12-weken transformatie (echte klant)",
    hook: "12 weken. €45 per sessie. Echt resultaat.",
    script: `[0-3s] Split screen: Week 1 ↔ Week 12
[3-10s] Eerste sessie b-roll
[10-20s] Trainer-notitie: "Eerst techniek, dan gewicht"
[20-30s] Week 4: betere uitvoering
[30-42s] Week 12: 2× zwaarder, perfecte vorm
[42-52s] Tekst op screen: meer zelfvertrouwen
[52-60s] CTA: "Wil jij ook? sculptclub.nl"`,
    captionTemplate: {
      message: "Toon een echte 12-weken transformatie van een klant (met toestemming). Focus op proces, niet alleen resultaat.",
      keyPoints: [
        "Periode: 12 weken",
        "Frequentie: 2-3× per week",
        "Eerste 4 weken: techniek",
        "Week 5-8: gewicht opbouwen",
        "Week 9-12: PR's halen",
        "Geen wonderdieet",
      ],
      cta: `Eerste intake gratis · ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#beforeafter #transformation #personaltrainer #amsterdam #jordaan #strengthtraining #fitnessjourney #pt #fitnesstransformation`,
    visualNote: "ESSENTIEEL: schriftelijke toestemming voor beeld. Bij twijfel: animatie/stockfoto's met disclaimer 'voorbeeld resultaat'.",
    duration: "60s",
    media: [
      { src: "/images/studio/training-barbell-squat.jpg", label: "Squat — vroege fase", role: "primary" },
      { src: "/images/studio/training-squat-cinematic.jpg", label: "Squat — late fase" },
      { src: "/images/studio/training-dumbbells-power.jpg", label: "Power development" },
    ],
  },

  // ─── TIKTOK · FITNESS TIP ───────────────────────────────────────────
  {
    id: "tt-tip-01",
    platform: "tiktok",
    pillar: "fitness-tip",
    title: "3 squat-fouten die iedereen maakt",
    hook: "3 squat-fouten die we elke week zien",
    script: `[0-3s] Hook: "3 squat-fouten — verbeter dit"
[3-15s] Fout #1: knieën vallen naar binnen → fix
[15-27s] Fout #2: hielen komen los → fix
[27-39s] Fout #3: te ver voorover leunen → fix
[39-50s] Demo: perfecte rep met juiste cue
[50-60s] CTA: "Meer? Boek een sessie · sculptclub.nl"`,
    captionTemplate: {
      message: "Educatieve tip: leer 3 veelgemaakte squat-fouten + de fix. Save-worthy content.",
      keyPoints: [
        "Fout 1: knieën naar binnen → actief naar buiten duwen",
        "Fout 2: hielen los → gewicht op midden voet, enkel-mobiliteit",
        "Fout 3: te voorover → borst omhoog, core strak",
        "Wil je live correctie? Eerste intake gratis",
      ],
      cta: `${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#squatform #fitnesstip #personaltrainer #amsterdam #strengthtraining #liftingtips #gymtips #squat #formcheck #personaltraineramsterdam`,
    visualNote: "Trainer demos elke fout (slow-mo) + corrigeert. Overlay-tekst per fout. Music: educational.",
    duration: "60s",
    media: [
      { src: "/images/studio/training-barbell-squat.jpg", label: "Squat reference shot", role: "primary" },
      { src: "/images/studio/training-squat-cinematic.jpg", label: "Squat form" },
      { src: "/images/studio/power-rack.jpeg", label: "Power rack setup" },
    ],
  },
  {
    id: "tt-tip-02",
    platform: "tiktok",
    pillar: "fitness-tip",
    title: "Hoe je core écht traint (niet sit-ups)",
    hook: "Stop met sit-ups. Doe DIT.",
    script: `[0-3s] Hook: "Sit-ups maken je core niet sterker"
[3-12s] Dead bug — slow, controlled
[12-22s] Pallof press — anti-rotatie
[22-32s] Hollow body hold — stabiliteit
[32-42s] Korte uitleg: core = stabilisator
[42-52s] B-roll: alle drie achter elkaar
[52-60s] CTA: "Compleet core-programma? sculptclub.nl"`,
    captionTemplate: {
      message: "Educatieve tip: leer drie betere core-oefeningen dan sit-ups. Save-worthy.",
      keyPoints: [
        "Dead bug — leer core stabiliseren",
        "Pallof press — anti-rotatie kracht",
        "Hollow body hold — totale core-spanning",
        "Core = stabilisator, niet zichtbaarheid",
      ],
      cta: `Compleet programma · ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#coreworkout #corestability #fitnesstip #personaltrainer #amsterdam #strengthcoach #abs #fitnessadvice #liftingtips`,
    visualNote: "Top-down + side-view per oefening. Beat-driven cuts.",
    duration: "60s",
    media: [
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Core focus reference", role: "primary" },
      { src: "/images/studio/back-room-full.jpg", label: "Back room space" },
      { src: "/images/studio/studio-interior-3.jpeg", label: "Floor space" },
    ],
  },

  // ─── TIKTOK · BEHIND THE SCENES ─────────────────────────────────────
  {
    id: "tt-bts-01",
    platform: "tiktok",
    pillar: "behind-scenes",
    title: "Een ochtend in de Jordaan studio",
    hook: "06:30 in de Jordaan",
    script: `[0-3s] Hook tekst: "06:30 AM in de Jordaan"
[3-12s] Trainer opent garage door, zon op gracht
[12-22s] Eerste klant binnen, koffie wordt gezet
[22-32s] Warming-up, music aan
[32-42s] Mid-workout: focus, coach moments
[42-52s] Klant rondt af, fist bump
[52-60s] Tekst: "Dagelijks 06:30 – 22:00"`,
    captionTemplate: {
      message: "Een authentieke ochtend in de Jordaan studio — humaniseert het brand.",
      keyPoints: [
        `Open: ${FACTS.hours}`,
        "Vroege ochtend = stilste tijd, gym voor jezelf",
        `${FACTS.address}`,
      ],
      cta: `${FACTS.website}`,
      targetLength: "short",
    },
    hashtags: `#jordaan #amsterdam #personaltrainer #morningroutine #gymlife #amsterdamlife #boutiquegym #fitnesscommunity #jordaanlife`,
    visualNote: "Authentiek, geen overproduce. Film op één ochtend met telefoon. Vroege ochtendlicht.",
    duration: "60s",
    media: [
      { src: "/images/studio/entrance-smile.jpg", label: "Entrance morning", role: "primary" },
      { src: "/images/studio/canal-view-doors.jpg", label: "Doors op gracht" },
      { src: "/images/studio/portrait-entrance-warm.jpg", label: "Entrance warm" },
      { src: "/images/studio/facade-sculptclub.jpg", label: "Facade" },
      { src: "/images/studio/training-bike-energy.jpg", label: "Energy training" },
    ],
  },

  // ─── TIKTOK · SOCIAL PROOF ──────────────────────────────────────────
  {
    id: "tt-proof-01",
    platform: "tiktok",
    pillar: "social-proof",
    title: "Waarom 5,0 sterren niet liegen",
    hook: "Waarom we 5,0 ⭐ hebben op Google",
    script: `[0-3s] Hook: "Hoe je 5,0 ⭐ vasthoudt op Google"
[3-12s] Trainer-aan-de-camera: korte uitleg
[12-22s] Show: review-screenshot 1
[22-32s] Show: review-screenshot 2
[32-42s] Trainer: 0% commissie betekent tijd voor klanten
[42-52s] Show: review-screenshot 3
[52-60s] CTA: "Boek je eigen ervaring · sculptclub.nl"`,
    captionTemplate: {
      message: "Social proof: laat zien dat de 5,0 sterren echt zijn + waarom (geen marketing-truc).",
      keyPoints: [
        "Echte Google reviews",
        "0% commissie = trainers hebben tijd voor klanten",
        "Geen marketing-team, alleen echte service",
      ],
      cta: `Eerste intake gratis · ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#googlereviews #amsterdam #jordaan #personaltrainer #5sterren #fivestars #boutiquegym #pt #amsterdamfitness #realreviews`,
    visualNote: "Echte Google review screenshots. Privacy: alleen voornaam + initiaal. Eventueel consent vragen.",
    duration: "60s",
    media: [
      { src: "/images/studio/training-dumbbells-smile.jpg", label: "Happy client", role: "primary" },
      { src: "/images/studio/entrance-smile.jpg", label: "Entrance smile" },
      { src: "/images/studio/training-bike-smile.jpg", label: "Cardio smile" },
      { src: "/images/studio/training-dumbbells-joy.jpg", label: "Dumbbells joy" },
    ],
  },

  // ─── INSTAGRAM · STUDIO TOUR ────────────────────────────────────────
  {
    id: "ig-tour-01",
    platform: "instagram",
    pillar: "studio-tour",
    title: "Carrousel — 7 hoekjes van onze studio",
    hook: "7 hoekjes van onze studio in de Jordaan",
    script: `Carrousel slides:
1. Cover: Studio entrance facade + tekst "Welkom bij SculptClub"
2. Rogue power rack hoek
3. Barbell + bumper plates collectie
4. Echo Bike + sled corner
5. Squat rack + spiegels
6. Garage door open op gracht
7. CTA slide: "Boek je intake — sculptclub.nl"`,
    captionTemplate: {
      message: "Visuele intro van de hele studio: 7 belangrijke plekken in de gym.",
      keyPoints: [
        `Locatie: ${FACTS.address}`,
        "Geen tickets, geen abonnementen",
        `PT: ${FACTS.pt}`,
        `Studio: ${FACTS.studio}`,
        `Open Gym: ${FACTS.openGym}`,
        "Eerste intake gratis",
      ],
      cta: "Boek via link in bio",
      targetLength: "long",
    },
    hashtags: `#amsterdam #jordaan #privegym #boutiquegym #personaltrainer #strengthcoach #amsterdamfitness #fitnessamsterdam #jordaanlocal #amsterdamlife #personaltrainingamsterdam #gymamsterdam`,
    visualNote: "Carrousel — 7 hoge kwaliteit vierkante foto's. Consistent grading (warm maar clean).",
    media: [
      { src: "/images/studio/facade-sculptclub.jpg", label: "Slide 1: Facade", role: "primary" },
      { src: "/images/studio/power-rack.jpeg", label: "Slide 2: Power rack" },
      { src: "/images/studio/dumbbells-floor.jpeg", label: "Slide 3: Dumbbells" },
      { src: "/images/studio/echo-bike-corner.jpg", label: "Slide 4: Echo bike + sled" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Slide 5: Squat rack" },
      { src: "/images/studio/canal-view-doors.jpg", label: "Slide 6: Gracht doors" },
      { src: "/images/studio/studio-overview.jpeg", label: "Slide 7: Overview" },
    ],
  },
  {
    id: "ig-tour-02",
    platform: "instagram",
    pillar: "studio-tour",
    title: "Reel — Studio aesthetic 30s",
    hook: "Een privégym in de Jordaan vanaf €12 per uur",
    script: `Reel (30s vertical):
[0-3s] Slow pan op facade — Sculpt sign zichtbaar
[3-10s] Loop door deur, equipment reveals
[10-18s] Detail shots: barbell + plates close-up
[18-25s] Person training in achtergrond (silhouette)
[25-30s] Final text frame: "€12/uur · Egelantiersgracht 424"`,
    captionTemplate: {
      message: "Cinematic glimp van de studio voor wie nog nooit binnen is geweest.",
      keyPoints: [
        `Prijs: ${FACTS.studio}`,
        "Geen abonnement",
        "Boek per uur",
        "0% commissie voor trainers",
      ],
      cta: `Link in bio · ${FACTS.website}`,
      targetLength: "short",
    },
    hashtags: `#jordaan #amsterdam #fitnessamsterdam #boutiquegym #personaltrainer #strengthtraining #amsterdamlocal #jordaanvibes #amsterdamfitness`,
    visualNote: "Cinematic, slow camera moves. Music: chill ambient. Geen voice-over.",
    duration: "30s",
    media: [
      { src: "/images/studio/facade-sculptclub.jpg", label: "Facade", role: "primary" },
      { src: "/images/studio/studio-overview.jpeg", label: "Studio overview" },
      { src: "/images/studio/training-barbell-skylight.jpg", label: "Barbell skylight" },
      { src: "/images/studio/training-barbell-dramatic.jpg", label: "Barbell dramatic" },
    ],
  },

  // ─── INSTAGRAM · PT SHOWCASE ────────────────────────────────────────
  {
    id: "ig-pt-01",
    platform: "instagram",
    pillar: "pt-showcase",
    title: "Carrousel — Wat €45 echt oplevert",
    hook: "Wat krijg je voor €45 bij een Jordaan PT?",
    script: `Carrousel slides:
1. Cover: "€45 PT in de Jordaan — wat krijg je?" + coaching foto
2. "Coach die luistert" + gesprek foto
3. "Programma op maat" + notitieboek foto
4. "Live techniek-correcties" + squat correctie
5. "Voedingsadvies optioneel" + gezond ontbijt
6. "Volgende sessie aangepast" + trainer schrijft
7. CTA: "Eerste intake gratis · sculptclub.nl"`,
    captionTemplate: {
      message: "Verbreking van wat €45 oplevert. Adresseert prijsvraag van mid-funnel kijkers.",
      keyPoints: [
        "1-op-1 aandacht",
        "Programma op maat (geen sjabloon)",
        "Techniek-correcties tijdens sessie",
        "Voortgang bijhouden + aanpassen",
        "0% commissie",
        "Eerste intake gratis",
      ],
      cta: `${FACTS.ptLanding}`,
      targetLength: "long",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #personaltraining #ptamsterdam #pricetransparency #fitnesscoach #strengthtraining #amsterdamlife`,
    visualNote: "Consistent visual style across 7 slides. Brand color (#134DE1) op swipe-indicator.",
    media: [
      { src: "/images/studio/pt-session-barbell.jpg", label: "Cover: coaching moment", role: "primary" },
      { src: "/images/studio/training-chest-press.jpg", label: "Chest press" },
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Programma op maat" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Technique correctie" },
      { src: "/images/studio/training-dumbbells-power.jpg", label: "Voortgang" },
      { src: "/images/studio/training-squat-cinematic.jpg", label: "PR moment" },
    ],
  },
  {
    id: "ig-pt-02",
    platform: "instagram",
    pillar: "pt-showcase",
    title: "Reel — 60-sec PT sessie highlights",
    hook: "Hoe een echte PT-sessie er uitziet",
    script: `Reel (60s):
[0-5s] Hook: "Geen geënsceneerde PT. Echte sessie."
[5-15s] Warming-up + dynamic stretches
[15-30s] Mid-workout: coaching cues, focus
[30-45s] PR moment — celebration, echte reactie
[45-55s] Cooldown gesprek
[55-60s] CTA: "Vanaf €45 · sculptclub.nl"`,
    captionTemplate: {
      message: "Realistische blik in een PT-sessie — toont structuur + waarom 60 min écht 60 min werk is.",
      keyPoints: [
        "10 min warming-up",
        "35 min werk (kracht/techniek/hypertrofie)",
        "Cooldown + gesprek over voortgang",
        "Programma voor volgende keer aangepast",
        `Prijs: ${FACTS.pt}`,
      ],
      cta: `Boek via link in bio`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #personaltraining #fitnesscoach #strengthcoach #realresults #ptlife #amsterdamfitness`,
    visualNote: "Echte klant (consent eerst). Multi-angle film. Geen overproduce.",
    duration: "60s",
    media: [
      { src: "/images/studio/pt-session-barbell.jpg", label: "PT in action", role: "primary" },
      { src: "/images/studio/training-barbell-dramatic.jpg", label: "Lift moment" },
      { src: "/images/studio/training-dumbbells-smile.jpg", label: "Success moment" },
    ],
  },

  // ─── INSTAGRAM · TRAINER SPOTLIGHTS ─────────────────────────────────
  {
    id: "ig-spotlight-andrea",
    platform: "instagram",
    pillar: "trainer-spotlight",
    title: "Meet Andrea — Houding · Techniek",
    hook: "Maak kennis met Andrea — kracht, houding, techniek",
    script: `Single photo OF Reel:
Photo: Andrea in studio, coaching action shot
Reel: 30s — intro + coaching demo`,
    captionTemplate: {
      message: "Introduceer Andrea als trainer voor beginners + post-blessure terugkomst.",
      keyPoints: [
        "Specialisme: Kracht · Houding · Techniek",
        "Talen: NL · EN",
        "Tarief: €45 per 45 min",
        "Eerste intake gratis",
        "Past goed bij beginners + na blessure",
      ],
      cta: `Boek via ${FACTS.website} of DM ons`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #posturecoach #strengthtraining #techniquefirst #personaltraineramsterdam #ptamsterdam`,
    visualNote: "Professional headshot/action — natural light, geen flash.",
    media: [
      { src: "/images/trainers/andrea.jpg", label: "Andrea portrait", role: "primary" },
      { src: "/images/trainers/andrea-wp.jpg", label: "Andrea wp" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Coaching technique" },
    ],
  },
  {
    id: "ig-spotlight-dara",
    platform: "instagram",
    pillar: "trainer-spotlight",
    title: "Meet Dara — Personal + Small Group",
    hook: "Dara — personal training en kleine groepen",
    script: `Carrousel:
1. Dara coaching action shot
2. Dara in gesprek met klant
3. Group dynamics — Dara coacht meerdere personen
4. CTA — boek via website`,
    captionTemplate: {
      message: "Stel Dara voor met focus op haar small-group aanbod (onderscheidend in Jordaan).",
      keyPoints: [
        "Specialisme: PT · Small Group · Strength & Conditioning",
        "Talen: NL · EN",
        "Tarief: op aanvraag",
        "Eerste intake gratis",
        "Werkt 1-op-1 én in kleine groepen",
      ],
      cta: `${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #smallgrouptraining #personaltrainingamsterdam #fitnesscoach #strengthcoach`,
    visualNote: "Carrousel met mix solo + group shots. Toon Dara's coaching range.",
    media: [
      { src: "/images/trainers/dara.jpg", label: "Dara portrait", role: "primary" },
      { src: "/images/trainers/dara-wp.jpg", label: "Dara wp" },
      { src: "/images/studio/pt-session-barbell.jpg", label: "Coaching session" },
    ],
  },

  // ─── INSTAGRAM · FITNESS TIPS ───────────────────────────────────────
  {
    id: "ig-tip-01",
    platform: "instagram",
    pillar: "fitness-tip",
    title: "Reel — 3 heup-mobiliteits oefeningen",
    hook: "3 heup-mobiliteits oefeningen die elke lifter zou moeten doen",
    script: `Reel (45s):
[0-3s] Hook: "Heup-pijn bij squat? Begin hier."
[3-15s] Oefening 1: 90/90 hip stretch — 30s per kant
[15-27s] Oefening 2: World's greatest stretch — 5 reps per kant
[27-39s] Oefening 3: Couch stretch — 60s per kant
[39-45s] CTA: "Bewaar deze post + doe het voor je volgende sessie"`,
    captionTemplate: {
      message: "Save-worthy educational reel: 3 mobiliteits oefeningen voor lifters.",
      keyPoints: [
        "90/90 Hip Stretch — 30s per kant",
        "World's Greatest Stretch — 5 reps per kant",
        "Couch Stretch — 60s per kant",
        "Frequentie: 3-4× per week",
        "Resultaat: merkbaar binnen 4 weken",
      ],
      cta: `Compleet mobiliteits-programma · ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#hipmobility #squatform #personaltrainer #amsterdam #mobilitydrills #fitnesstip #strengthcoach #fitnessadvice #jordaan`,
    visualNote: "Clean side-view + top-down. Slow-mo per drill. Music: educational/calm.",
    duration: "45s",
    media: [
      { src: "/images/studio/turf-lane-canal.jpg", label: "Mobility op turf", role: "primary" },
      { src: "/images/studio/back-room-full.jpg", label: "Back room space" },
      { src: "/images/studio/studio-interior-3.jpeg", label: "Floor space" },
    ],
  },
  {
    id: "ig-tip-02",
    platform: "instagram",
    pillar: "fitness-tip",
    title: "Carrousel — 5 fouten bij eerste PT",
    hook: "5 fouten bij je eerste PT-sessie",
    script: `Carrousel:
1. Cover: "5 fouten bij je eerste PT-sessie"
2. Fout 1: Doelen niet delen → wat wil je bereiken?
3. Fout 2: Verkeerde kleding/schoenen → comfort + grip
4. Fout 3: Blessures verzwijgen → eerlijk = veilig
5. Fout 4: Eten vlak voor sessie → 1-2 uur ervoor
6. Fout 5: Verwachting dat 1 sessie alles oplost → consistentie wint
7. CTA: "Boek je gratis intake · sculptclub.nl"`,
    captionTemplate: {
      message: "Adresseer objecties die mensen tegenhouden om hun eerste PT-sessie te boeken.",
      keyPoints: [
        "Doel delen vooraf",
        "Comfortabele sportkleding + grip-schoenen",
        "Wees eerlijk over blessures",
        "Eet 1-2 uur voor de sessie",
        "Plan minimaal 4 sessies in voor merkbaar resultaat",
      ],
      cta: `Eerste intake gratis · ${FACTS.ptLanding}`,
      targetLength: "long",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #firstsession #fitnessbeginners #personaltrainingadvice #fitnesstip #ptamsterdam #strengthtraining`,
    visualNote: "Sterke typografie, consistent layout. Brand colors. Per slide: 1 fout, 1 oplossing.",
    media: [
      { src: "/images/studio/entrance-portrait.jpg", label: "Cover: entrance", role: "primary" },
      { src: "/images/studio/pt-session-barbell.jpg", label: "First session vibe" },
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Focus moment" },
    ],
  },

  // ─── INSTAGRAM · JORDAAN LOCAL ──────────────────────────────────────
  {
    id: "ig-local-01",
    platform: "instagram",
    pillar: "jordaan-local",
    title: "Reel — Ochtend in de Jordaan",
    hook: "Onze ochtend in de Jordaan",
    script: `Reel (30s):
[0-5s] Open shot: gracht in de ochtend, mist op water
[5-12s] Fietser passeert, dan binnen in studio
[12-20s] Indoor: setting up, koffie wordt gezet
[20-26s] Eerste klant komt aan, fist bump
[26-30s] CTA: "Egelantiersgracht 424 · sculptclub.nl"`,
    captionTemplate: {
      message: "Authentieke Jordaan-ochtend, broad-appeal, bouwt local brand.",
      keyPoints: [
        `${FACTS.address}`,
        `${FACTS.hours}`,
        "Eerste sessie = stilste tijd van de dag",
        "Koffie van het huis voor vroege vogels",
      ],
      cta: `Link in bio · ${FACTS.website}`,
      targetLength: "short",
    },
    hashtags: `#jordaan #amsterdam #amsterdamlife #jordaanlife #morningvibes #amsterdammornings #jordaanmornings #amsterdamfitness #boutiquegym`,
    visualNote: "Cinematic, slow moves, natural light. Geen filters — Jordaan is mooi genoeg.",
    duration: "30s",
    media: [
      { src: "/images/hero/canal-view.jpg", label: "Gracht morning", role: "primary" },
      { src: "/images/studio/canal-view-doors.jpg", label: "Doors op gracht" },
      { src: "/images/studio/facade-sculptclub.jpg", label: "Facade" },
      { src: "/images/studio/entrance-smile.jpg", label: "Entrance" },
    ],
  },
  {
    id: "ig-local-02",
    platform: "instagram",
    pillar: "jordaan-local",
    title: "Carrousel — 5 plekken vlakbij voor pre/post workout",
    hook: "5 plekken in de Jordaan voor vóór en na je training",
    script: `Carrousel:
1. Cover: "5 plekken vlakbij onze studio voor pre/post workout"
2. Café 't Smalle (5 min lopen) — koffie + terras
3. AH Westerstraat (1 min) — supplementen + snacks
4. Westerpark (8 min) — outdoor warm-up / cooldown
5. Drogisterij om de hoek — magnesium + recovery
6. De gracht zelf — handdoek neer voor stretching
7. CTA: "Train bij ons in de Jordaan · sculptclub.nl"`,
    captionTemplate: {
      message: "Local-guide: praktische plekken vlakbij de studio. Bouwt vertrouwen + local search relevance.",
      keyPoints: [
        "Café 't Smalle — pre-workout koffie",
        "AH Westerstraat — laatste-minuut supplementen",
        "Westerpark — outdoor warming-up",
        "Drogisterij — recovery essentials",
        "De gracht — gratis cooldown plek",
      ],
      cta: `${FACTS.address} · ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#jordaan #amsterdam #amsterdamlife #jordaanlife #amsterdamfitness #jordaanlocal #amsterdamlocal #boutiquegym #fitnessamsterdam`,
    visualNote: "Foto's van elke plek. Aesthetic + Instagrammable. Geen tagged accounts zonder consent — gebruik exteriors.",
    media: [
      { src: "/images/studio/facade-sculptclub.jpg", label: "Cover: facade", role: "primary" },
      { src: "/images/hero/canal-view.jpg", label: "Gracht" },
      { src: "/images/studio/canal-view-doors.jpg", label: "Studio op gracht" },
    ],
  },

  // ─── INSTAGRAM · BEHIND SCENES ──────────────────────────────────────
  {
    id: "ig-bts-01",
    platform: "instagram",
    pillar: "behind-scenes",
    title: "Reel — Een dag in het leven van een PT",
    hook: "Een dag in het leven van een PT in de Jordaan",
    script: `Reel (60s):
[0-5s] 06:00 — Trainer komt aan, deuren open
[5-15s] 06:30-12:00 — Ochtend klanten
[15-25s] 12:00 — Lunch + planning middag
[25-40s] 14:00-18:00 — Middag/avond klanten
[40-50s] 19:00 — Laatste sessie van de dag
[50-60s] 22:00 — Studio dicht. CTA: "Trainer worden? sculptclub.nl/word-trainer"`,
    captionTemplate: {
      message: "Toon hoe een full-day PT er uitziet bij SculptClub. Dubbele doel: humaniseert brand + spreekt potentiële trainers aan.",
      keyPoints: [
        "Trainer bepaalt zelf tarief, tijden, klanten",
        "0% commissie",
        "Privé studio, eigen profiel op site",
        "Locatie: Jordaan",
      ],
      cta: `Trainer worden? ${FACTS.website}/word-trainer`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #dayinthelife #ptlife #amsterdamfitness #personaltrainingamsterdam #boutiquegym`,
    visualNote: "Authentiek, geen overproduce. Eén PT's echte dag. Time-stamps op screen.",
    duration: "60s",
    media: [
      { src: "/images/studio/entrance-smile.jpg", label: "Morning arrival", role: "primary" },
      { src: "/images/studio/pt-session-barbell.jpg", label: "Morning session" },
      { src: "/images/studio/training-bike-energy.jpg", label: "Cardio block" },
      { src: "/images/studio/training-dumbbells-power.jpg", label: "Middle of day" },
      { src: "/images/studio/portrait-entrance-warm.jpg", label: "Evening close" },
    ],
  },

  // ─── INSTAGRAM · SOCIAL PROOF ───────────────────────────────────────
  {
    id: "ig-proof-01",
    platform: "instagram",
    pillar: "social-proof",
    title: "Carrousel — Echte Google reviews",
    hook: "Wat klanten écht zeggen — Google reviews",
    script: `Carrousel:
1. Cover: "5,0 ⭐ op Google · Wat zeggen onze klanten?"
2-6. Vijf screenshots van echte 5-sterren reviews (alleen voornaam + initiaal)
7. CTA: "Lees alle reviews op Google · sculptclub.nl"`,
    captionTemplate: {
      message: "Toont 5,0 ⭐ rating met echte reviews als bewijs. Voor mid-funnel kijkers met laatste twijfel.",
      keyPoints: [
        `${FACTS.rating}`,
        "Reviews zijn van echte Google-klanten",
        "Privacy: alleen voornaam + initiaal getoond",
      ],
      cta: `Lees alles op Google Maps · of boek: ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#googlereviews #5sterren #amsterdam #jordaan #personaltrainer #boutiquegym #fivestarservice #realreviews #amsterdamfitness`,
    visualNote: "Echte Google review screenshots. Privacy: alleen voornaam + initiaal. Consent vragen voor specifieke reviews.",
    media: [
      { src: "/images/studio/training-dumbbells-joy.jpg", label: "Cover: happy client", role: "primary" },
      { src: "/images/studio/training-dumbbells-smile.jpg", label: "Real smile" },
      { src: "/images/studio/training-bike-smile.jpg", label: "Cardio happy" },
    ],
  },
];

export const PILLARS = [
  { id: "all" as const, label: "Alle pilaren", count: SOCIAL_IDEAS.length },
  { id: "studio-tour" as Pillar, label: "Studio tour", count: SOCIAL_IDEAS.filter(i => i.pillar === "studio-tour").length },
  { id: "pt-showcase" as Pillar, label: "PT showcase", count: SOCIAL_IDEAS.filter(i => i.pillar === "pt-showcase").length },
  { id: "trainer-spotlight" as Pillar, label: "Trainer spotlight", count: SOCIAL_IDEAS.filter(i => i.pillar === "trainer-spotlight").length },
  { id: "before-after" as Pillar, label: "Before/after", count: SOCIAL_IDEAS.filter(i => i.pillar === "before-after").length },
  { id: "fitness-tip" as Pillar, label: "Fitness tips", count: SOCIAL_IDEAS.filter(i => i.pillar === "fitness-tip").length },
  { id: "behind-scenes" as Pillar, label: "Behind the scenes", count: SOCIAL_IDEAS.filter(i => i.pillar === "behind-scenes").length },
  { id: "jordaan-local" as Pillar, label: "Jordaan local", count: SOCIAL_IDEAS.filter(i => i.pillar === "jordaan-local").length },
  { id: "social-proof" as Pillar, label: "Social proof", count: SOCIAL_IDEAS.filter(i => i.pillar === "social-proof").length },
];

export type AudienceSide = "demand" | "supply" | "broad";

export const PILLAR_TO_AUDIENCE: Record<Pillar, AudienceSide> = {
  "studio-tour": "supply",
  "pt-showcase": "demand",
  "trainer-spotlight": "demand",
  "before-after": "demand",
  "fitness-tip": "demand",
  "behind-scenes": "supply",
  "jordaan-local": "broad",
  "social-proof": "demand",
};

export interface CalendarSlot {
  weekday: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  weekdayLabel: string;
  bestTime: string;
  platform: Platform;
  weekNumber: 1 | 2 | 3 | 4;
  ideaId: string;
  rationale: string;
}

export const POSTING_CALENDAR: CalendarSlot[] = [
  { weekday: 1, weekdayLabel: "Maandag", bestTime: "19:30", platform: "instagram", weekNumber: 1, ideaId: "ig-tour-01", rationale: "Week start met visuele basis — studio carrousel zet de toon." },
  { weekday: 3, weekdayLabel: "Woensdag", bestTime: "12:30", platform: "tiktok", weekNumber: 1, ideaId: "tt-pt-01", rationale: "Demand-side PT showcase tijdens lunch-scroll." },
  { weekday: 5, weekdayLabel: "Vrijdag", bestTime: "19:00", platform: "tiktok", weekNumber: 1, ideaId: "tt-tip-01", rationale: "Fitness-tip op vrijdagavond — mensen plannen weekend-trainingen." },
  { weekday: 7, weekdayLabel: "Zondag", bestTime: "11:00", platform: "instagram", weekNumber: 1, ideaId: "ig-spotlight-andrea", rationale: "Zondagochtend feed-scroll. Trainer spotlight bouwt vertrouwen." },

  { weekday: 1, weekdayLabel: "Maandag", bestTime: "19:30", platform: "tiktok", weekNumber: 2, ideaId: "tt-tour-02", rationale: "5-dingen format scoort hoog op TikTok." },
  { weekday: 3, weekdayLabel: "Woensdag", bestTime: "12:30", platform: "instagram", weekNumber: 2, ideaId: "ig-pt-01", rationale: "Prijs-uitleg carrousel beantwoordt zilveren vraag." },
  { weekday: 5, weekdayLabel: "Vrijdag", bestTime: "19:00", platform: "tiktok", weekNumber: 2, ideaId: "tt-spotlight-eva", rationale: "Trainer spotlight Eva (diëtist + PT) — unieke combinatie." },
  { weekday: 7, weekdayLabel: "Zondag", bestTime: "11:00", platform: "instagram", weekNumber: 2, ideaId: "ig-local-01", rationale: "Jordaan-ochtend Reel — local brand relevance." },

  { weekday: 1, weekdayLabel: "Maandag", bestTime: "19:30", platform: "instagram", weekNumber: 3, ideaId: "ig-tip-02", rationale: "5-fouten-bij-eerste-PT carrousel adresseert objecties." },
  { weekday: 3, weekdayLabel: "Woensdag", bestTime: "12:30", platform: "tiktok", weekNumber: 3, ideaId: "tt-pt-02", rationale: "Pricing video converteert mid-funnel kijkers." },
  { weekday: 5, weekdayLabel: "Vrijdag", bestTime: "19:00", platform: "tiktok", weekNumber: 3, ideaId: "tt-spotlight-alex", rationale: "Trainer spotlight Alex — niche bereik via #calisthenics." },
  { weekday: 7, weekdayLabel: "Zondag", bestTime: "11:00", platform: "instagram", weekNumber: 3, ideaId: "ig-proof-01", rationale: "Social proof carrousel voor mensen met laatste twijfel." },

  { weekday: 1, weekdayLabel: "Maandag", bestTime: "19:30", platform: "tiktok", weekNumber: 4, ideaId: "tt-bts-01", rationale: "Behind-the-scenes ochtend — humaniseert brand." },
  { weekday: 3, weekdayLabel: "Woensdag", bestTime: "12:30", platform: "instagram", weekNumber: 4, ideaId: "ig-tip-01", rationale: "Heup-mobiliteit tip — sterke saved-content retentie." },
  { weekday: 5, weekdayLabel: "Vrijdag", bestTime: "19:00", platform: "instagram", weekNumber: 4, ideaId: "ig-spotlight-dara", rationale: "Trainer spotlight Dara (small group) — onderscheidend." },
  { weekday: 7, weekdayLabel: "Zondag", bestTime: "11:00", platform: "instagram", weekNumber: 4, ideaId: "ig-local-02", rationale: "Jordaan plekken-gids — broad appeal." },
];

export const WEEKDAY_NAMES_NL = ["", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

export const STRATEGY_SUMMARY = {
  headline: "Strategie: 60% demand · 30% supply · 10% broad",
  body: `Operator's Google Ads gaat 75% naar Studio (€15/dag) en 25% naar PT (€5/dag). Maar social content volgt een ANDERE balans:

→ 60% demand-side (PT showcases · trainer spotlights · fitness tips · before/after · social proof) — drives PT bookings, omdat consumenten 50× zo talrijk zijn als potentiële studio-huurders.

→ 30% supply-side (studio tour · behind-the-scenes) — bouwt awareness bij trainers + voor mensen die de gym willen huren.

→ 10% broad (Jordaan local · brand) — local-search relevance, werkt voor beide audiences.

Waarom niet matchen met ad-budget? Omdat ads intentie kopen en social vertrouwen bouwt. Trainers vinden je via LinkedIn, mond-tot-mond en industry-channels — niet via TikTok. PT-content trekt indirect ook trainers aan ("hier zien ze goed coachen, daar wil ik werken").`,
  cadence: "4 posts per week — Maandag 19:30, Woensdag 12:30, Vrijdag 19:00, Zondag 11:00 (Amsterdam time).",
  rotation: "4 weken rotatie = 16 posts per maand. Pilaren rouleren zodat geen 2 vergelijkbare posts achter elkaar komen.",
};
