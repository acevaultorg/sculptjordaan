// Social content library for SculptClub TikTok + Instagram
//
// Honest design: AI-generated Dutch sounds invented (compound nouns no native
// would say). So this library is ENGLISH-only. Operator translates to natural
// Dutch when posting. Brain stops pretending.
//
// What brain provides:
//   - WHAT to communicate (the message, in English)
//   - Facts to include (prices, addresses, names — language-neutral)
//   - Suggested hook concept (English — operator writes Dutch)
//   - Script/shotlist (production directions — English standard for video)
//   - Hashtags (already English-dominant)
//   - Visual notes + downloadable images
//
// Operator owns: all customer-facing Dutch prose.

export type Platform = "tiktok" | "instagram";
export type PostFormat =
  | "TikTok Video"
  | "Reel"
  | "Carousel"
  | "Photo Post"
  | "Story"
  | "Meta Photo Ad"
  | "Meta Reel Ad"
  | "Meta Carousel Ad"
  | "TikTok Ad";
export type Pillar =
  | "studio-tour"
  | "pt-showcase"
  | "trainer-spotlight"
  | "before-after"
  | "fitness-tip"
  | "behind-scenes"
  | "jordaan-local"
  | "social-proof"
  | "paid-ad";

export interface MediaAsset {
  src: string;
  label: string;
  role?: "primary" | "supporting";
}

export interface CaptionBrief {
  /** What this post must communicate (English) */
  message: string;
  /** Facts to include — language-neutral (prices, addresses, names) */
  facts: string[];
  /** Suggested hook concept in English — operator writes Dutch */
  hookConcept: string;
  /** Call-to-action target */
  cta: string;
  /** Target caption length */
  targetLength: "short" | "medium" | "long";
}

export interface AdSpec {
  /** Meta Ads / TikTok Ads objective */
  objective: "leads" | "conversions" | "awareness" | "traffic" | "engagement";
  /** Targeting profile (specific audience to apply in Ads Manager) */
  audience: string;
  /** Daily budget recommendation */
  budget: string;
  /** How long to run before evaluating */
  duration: string;
  /** Landing-page URL the ad should drive to */
  landingUrl: string;
  /** Reference to competitor ad that inspired the pattern */
  competitorRef?: string;
  /** A/B variants worth testing alongside */
  abVariants?: string[];
  /** Overlay text spec (Dutch — operator writes; we provide the message + style) */
  overlayText?: {
    headline: string;
    subheadline?: string;
    style: string;
  };
}

export interface SocialIdea {
  id: string;
  platform: Platform;
  pillar: Pillar;
  /** Post format: Reel/Carousel/Photo Post (Instagram) or TikTok Video */
  format: PostFormat;
  /** English title for internal navigation */
  title: string;
  /** Script/shotlist (English, production notes) */
  script: string;
  /** What the caption needs to do — operator writes the actual Dutch */
  brief: CaptionBrief;
  hashtags: string;
  /** Production note (English) */
  visualNote: string;
  duration?: string;
  media?: MediaAsset[];
  /** Paid-ad spec — only set when pillar === 'paid-ad' */
  adSpec?: AdSpec;
}

const FACTS = {
  address: "Egelantiersgracht 424, Jordaan, Amsterdam",
  hours: "Daily 06:30 – 22:00",
  pt: "from €45/session · free intake",
  studio: "from €12 per 60 min",
  openGym: "from €6.13 per session",
  rating: "5.0 ⭐ on Google",
  website: "sculptclub.nl",
  ptLanding: "sculptclub.nl/vind-jouw-personal-trainer",
  studioLanding: "sculptclub.nl/studio-huren",
};

export const SOCIAL_IDEAS: SocialIdea[] = [
  // ─── TIKTOK · STUDIO TOUR ───────────────────────────────────────────
  //
  // WINNING-PATTERN NOTE (operator observed 2026-05-17):
  // The 10.5K-view top post on @sculptclub.jordaan was a static studio-floor
  // shot with BOLD UPPERCASE PRICE OVERLAY ("YOUR PRIVATE GYM RENT FROM €12/HOUR
  // TRY FIRST SESSION FREE"). 3.5× the views of any other post. Pattern: no
  // actors, no script, ~10-20s, all caption-overlay, numbered rubber flooring
  // as the visual anchor. Below ideas replicate this formula across all 3
  // product tiers (Open Gym · PT · Studio Full). Operator can shoot all 4
  // variants in one 30-minute studio session.
  //
  {
    id: "tt-pricetag-opengym",
    platform: "tiktok",
    pillar: "studio-tour",
    format: "TikTok Video",
    title: "Price-tag · Open Gym from €6.13/session",
    script: `[0-3s] Static shot of studio floor (numbered rubber flooring visible)
[3-10s] Slow pan or zoom toward equipment
[10-15s] BOLD OVERLAY appears: "OPEN GYM" line 1
[15-20s] BOLD OVERLAY: "FROM €6.13 / SESSION"
[20-25s] BOLD OVERLAY: "TRY FIRST SESSION FREE"
[25-30s] Small text: "Jordaan · No membership · Cancel anytime"`,
    brief: {
      message: "Replicate the 10.5K-view winning format. Static studio shot + bold price overlay + free-trial CTA. Open Gym tier: €6.13/session is the lowest price-point on the entire roster — make the headline punch.",
      facts: [
        "Open Gym Instapplan: €29 / 4 weeks (4 sessions = €7.25/session)",
        "Open Gym Populair: €49 / 4 weeks (8 sessions = €6.13/session)",
        "Open Gym Onbeperkt: €59 / 4 weeks unlimited",
        "Max 4 people per slot",
        "Door code via WhatsApp the night before",
        "First session free",
        "No contract · cancel anytime",
      ],
      hookConcept: "€6.13/session for a private gym in the Jordaan — read that again",
      cta: `Book first free session · ${FACTS.website}/nl/open-gym`,
      targetLength: "short",
    },
    hashtags: `#opengym #amsterdam #jordaan #gymamsterdam #privegym #goedkopegym #budgetgym #amsterdamfitness #boutiquegym #fitnesstudio`,
    visualNote: "MAX 30s. No people in shot. Numbered rubber flooring as anchor. Bold uppercase overlay matches winning post style. Use a punchy beat — silence-then-drop or trending audio.",
    duration: "30s",
    media: [
      { src: "/images/studio/studio-overview.jpeg", label: "Studio floor + numbered flooring", role: "primary" },
      { src: "/images/studio/studio-interior-1.jpeg", label: "Interior" },
      { src: "/images/studio/power-rack.jpeg", label: "Power rack" },
      { src: "/images/studio/dumbbell-rack.jpeg", label: "Dumbbells" },
    ],
  },
  {
    id: "tt-pricetag-pt",
    platform: "tiktok",
    pillar: "studio-tour",
    format: "TikTok Video",
    title: "Price-tag · Personal Training from €45/session",
    script: `[0-3s] Static shot of studio floor + equipment in background
[3-10s] Slow zoom on dumbbell rack or power rack
[10-15s] BOLD OVERLAY: "PERSONAL TRAINING"
[15-20s] BOLD OVERLAY: "FROM €45 / SESSION"
[20-25s] BOLD OVERLAY: "FIRST INTAKE FREE"
[25-30s] Small text: "8 trainers · independent · Jordaan"`,
    brief: {
      message: "Same winning formula as €12 studio-rental post but for the PT tier. Lead with the most accessible rate (Andrea €45/45min) to anchor low price. Sub-line clarifies the trainers are independent — you pay them direct (rent-only model).",
      facts: [
        "Andrea: €45 per 45 min — lowest rate on roster",
        "8 trainers, varied specialisms",
        "Trainers rent the studio — the full rate goes to the trainer",
        "First intake free · no obligation",
        "Trainers set their own rates · trainer-led pricing",
      ],
      hookConcept: "€45 personal trainer in Amsterdam Jordaan — and the trainer keeps 100%",
      cta: `Pick a trainer · ${FACTS.ptLanding}`,
      targetLength: "short",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #ptamsterdam #personaltrainingamsterdam #affordablept #ptkosten #amsterdamfitness #boutiquegym #freelancer`,
    visualNote: "MAX 30s. Optionally show a trainer's hands/shoulders only (not face) to suggest the human side without committing to a specific trainer. Bold uppercase overlay style.",
    duration: "30s",
    media: [
      { src: "/images/studio/pt-session-barbell.jpg", label: "PT session anchor", role: "primary" },
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Coaching focus" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Form coaching" },
    ],
  },
  {
    id: "tt-pricetag-studiofull",
    platform: "tiktok",
    pillar: "studio-tour",
    format: "TikTok Video",
    title: "Price-tag · Full Studio Rental from €17/hour (variant of €12 winner)",
    script: `[0-3s] Static shot of full studio (wider angle than the €12 winner)
[3-10s] Slow pan: dumbbells → rack → cardio corner
[10-15s] BOLD OVERLAY: "FULL STUDIO"
[15-20s] BOLD OVERLAY: "RENT FROM €17 / HOUR"
[20-25s] BOLD OVERLAY: "FOR PT WITH 2-5 CLIENTS"
[25-30s] Small text: "First session free · Jordaan · keep 100%"`,
    brief: {
      message: "Variant of the €12 winning post — same exact format but full-studio tier for trainers running small-group sessions. Different audience (trainers running 2-5 person classes), same exact visual playbook.",
      facts: [
        "Full studio: €17/60min, €24/90min",
        "Half studio (1 trainer + 1 client): €12/60min",
        "Packages: Starter €89 (10% off), Routine €199 (15% off), Pro €349 (20% off), Volume €549 (23% off)",
        "First session free for new trainers",
        "Includes all equipment + wifi + music + cleaning",
        "Free cancellation",
      ],
      hookConcept: "Full studio for your group of 5 — €17/hour in the Jordaan",
      cta: `${FACTS.studioLanding}`,
      targetLength: "short",
    },
    hashtags: `#studiohuren #amsterdam #jordaan #personaltrainer #freelancetrainer #ptamsterdam #fitnessstudio #zzpfitness #studiorental #fitnessrental`,
    visualNote: "MIRROR the €12 winning post visual style — same camera angle, same uppercase overlay style. Difference: WIDER angle to show the 'group' feel + the €17 sublime.",
    duration: "30s",
    media: [
      { src: "/images/studio/studio-overview.jpeg", label: "Full studio wide", role: "primary" },
      { src: "/images/studio/studio-interior-2.jpeg", label: "Group-friendly angle" },
      { src: "/images/studio/echo-bike-corner.jpg", label: "Equipment range" },
      { src: "/images/studio/sculpt-wall-logo.jpeg", label: "Brand mark" },
    ],
  },
  {
    id: "ig-pricetag-trio",
    platform: "instagram",
    pillar: "studio-tour",
    format: "Carousel",
    title: "Carousel — Price-tag trio (Open Gym · PT · Studio Rental)",
    script: `Carousel (4 slides — IG variant of the 10.5K-view TikTok winning formula):
1. Cover: dark studio shot + BOLD OVERLAY "YOUR PRIVATE GYM" + sublime "3 ways in · 1 first session free"
2. Slide: "OPEN GYM · from €6.13/session · Try free · No contract"
3. Slide: "PERSONAL TRAINING · from €45/session · 8 independent trainers · First intake free"
4. Slide: "STUDIO RENTAL · from €12/hour · For freelance trainers · First session free"
5. CTA: "Pick your option · sculptclub.nl · Jordaan, Amsterdam"`,
    brief: {
      message: "Instagram variant of the TikTok winning pattern. Same overlay-on-studio-floor visual style. Carousel lets viewer swipe through ALL THREE tiers — they self-select which one fits their budget/need.",
      facts: [
        "Open Gym from €6.13/session",
        "Personal Training from €45/session",
        "Studio Rental from €12/hour",
        "All three: first session free",
        "Jordaan, Egelantiersgracht 424",
        "Daily 06:30-22:00",
      ],
      hookConcept: "3 ways to use SculptClub — all under €50, all first-free",
      cta: FACTS.website,
      targetLength: "short",
    },
    hashtags: `#amsterdam #jordaan #amsterdamfitness #boutiquegym #privegym #personaltrainer #studiohuren #opengym #ptamsterdam #fitnessamsterdam`,
    visualNote: "Slide design: high contrast, bold uppercase price, minimal copy. Brand color (#EF5012) optional accent. NUMBERED RUBBER FLOORING as visual anchor across all slides for continuity.",
    media: [
      { src: "/images/studio/studio-overview.jpeg", label: "Cover", role: "primary" },
      { src: "/images/studio/power-rack.jpeg", label: "Open Gym slide bg" },
      { src: "/images/studio/pt-session-barbell.jpg", label: "PT slide bg" },
      { src: "/images/studio/studio-interior-2.jpeg", label: "Rental slide bg" },
    ],
  },
  {
    id: "tt-tour-01",
    platform: "tiktok",
    pillar: "studio-tour",
    format: "TikTok Video",
    title: "Studio walkthrough — 60 sec",
    script: `[0-3s] Hook on-screen text
[3-8s] Pan over Rogue power rack
[8-15s] Barbells + bumper plates close-up
[15-22s] Cardio corner: Echo Bike + sled
[22-30s] Squat rack + mirrors
[30-40s] Garage door open onto the canal
[40-50s] Fast cuts through all corners — beats of music
[50-60s] CTA on screen: "Boek via sculptclub.nl"`,
    brief: {
      message: "Show that our studio is a real private gym in the Jordaan, not a chain. Lead with the per-hour price for two people (trainer + client = €12/hr half-studio).",
      facts: [
        `Location: ${FACTS.address}`,
        "Half-studio: €12/60min, €17/90min (perfect for trainer + 1 client)",
        "Full studio: €17/60min, €24/90min (for groups/duos training together)",
        "No membership required",
        "Real Rogue equipment",
        FACTS.hours,
        FACTS.rating,
      ],
      hookConcept: "POV: finding a private gym in Jordaan from €12/hour for two people",
      cta: `Book via ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#amsterdam #jordaan #gymamsterdam #privegym #personaltraining #fitnessamsterdam #boutiquegym #studiohuren #amsterdamfitness #jordaanlocal`,
    visualNote: "Shoot in daylight with natural light. Music: trending NL sound. No voice-over — all on-screen text.",
    duration: "60s",
    media: [
      { src: "/images/studio/studio-overview.jpeg", label: "Studio overview", role: "primary" },
      { src: "/images/studio/power-rack.jpeg", label: "Power rack" },
      { src: "/images/studio/dumbbell-rack.jpeg", label: "Dumbbell rack" },
      { src: "/images/studio/echo-bike-corner.jpg", label: "Echo bike corner" },
      { src: "/images/studio/rogue-sled.jpg", label: "Rogue sled" },
      { src: "/images/studio/canal-view-doors.jpg", label: "Canal doors open" },
      { src: "/images/studio/facade-sculptclub.jpg", label: "Facade" },
    ],
  },
  {
    id: "tt-tour-02",
    platform: "tiktok",
    pillar: "studio-tour",
    format: "TikTok Video",
    title: "5 things people don't expect about our gym",
    script: `[0-3s] Hook: "5 things people don't expect"
[3-12s] #5: Garage door onto the canal
[12-22s] #4: No membership needed — hourly booking
[22-32s] #3: trainers rent the space — they keep 100%
[32-42s] #2: Private — just you + your trainer
[42-55s] #1: ${FACTS.hours}
[55-60s] CTA: First intake free`,
    brief: {
      message: "List format: 5 things people are surprised by on their first visit.",
      facts: [
        "Garage door opens directly onto the canal (summer mode)",
        "No membership — book per hour",
        "Trainers rent the space and keep 100% — honest pricing",
        "Private sessions — no strangers next to you",
        FACTS.hours,
        FACTS.address,
      ],
      hookConcept: "5 things nobody expects about our gym",
      cta: `First intake free · ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#amsterdam #jordaan #personaltrainer #gymamsterdam #boutiquegym #privegym #fitnessjourney #amsterdamlife #jordaanlife`,
    visualNote: "Quick-cut transitions between each '#'. Each shot ~7-10s. Trending audio with countdown beat.",
    duration: "60s",
    media: [
      { src: "/images/studio/canal-view-doors.jpg", label: "Canal door", role: "primary" },
      { src: "/images/studio/studio-interior-1.jpeg", label: "Studio interior" },
      { src: "/images/studio/studio-interior-2.jpeg", label: "Private vibe" },
      { src: "/images/studio/sculpt-wall-logo.jpeg", label: "Wall logo" },
      { src: "/images/studio/turf-lane-canal.jpg", label: "Turf lane" },
    ],
  },

  // ─── TIKTOK · PT SHOWCASE ───────────────────────────────────────────
  {
    id: "tt-pt-01",
    platform: "tiktok",
    pillar: "pt-showcase",
    format: "TikTok Video",
    title: "Real 1-on-1 PT session (not Instagram-staged)",
    script: `[0-3s] Hook on-screen text over coaching moment
[3-10s] Warming-up — dynamic stretches
[10-20s] Coach corrects technique
[20-30s] Client hits a PR
[30-40s] High-five, real reaction
[40-50s] Cooldown conversation
[50-60s] On-screen: ${FACTS.pt} · ${FACTS.website}`,
    brief: {
      message: "Show that a real PT session looks different from the staged Instagram version.",
      facts: [
        "1-on-1 attention",
        "Real coaching, not just counting reps",
        FACTS.pt,
        "First intake free",
      ],
      hookConcept: "60 seconds inside a SculptClub PT session",
      cta: `Book via ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #personaltraining #amsterdam #jordaan #fitnessmotivation #strengthtraining #gymlife #amsterdamfitness #pt #fitnesscoach`,
    visualNote: "Real client (get consent first). Multi-angle: tripod fixed + handheld for close-ups. Don't over-edit.",
    duration: "60s",
    media: [
      { src: "/images/studio/pt-session-barbell.jpg", label: "PT session barbell", role: "primary" },
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
    format: "TikTok Video",
    title: "What €45 actually gets you",
    script: `[0-3s] Hook: "€45 for a PT — what do you get?"
[3-10s] Item 1 — Coach who listens
[10-17s] Item 2 — Tailored program
[17-24s] Item 3 — Live form corrections
[24-31s] Item 4 — Nutrition advice (optional)
[31-38s] Item 5 — Next session adjusted to your progress
[38-50s] Bonus: first intake free
[50-60s] CTA: ${FACTS.website}`,
    brief: {
      message: "List format addressing the 'is it worth €45?' objection.",
      facts: [
        "Coach who actually listens to your goal",
        "Tailored program — no template",
        "Form corrections during the session",
        "Nutrition advice if wanted",
        "Next session adapted to previous one",
        "No middleman — you pay your trainer direct, transparent pricing",
        "First intake free",
      ],
      hookConcept: "What do you actually get for €45?",
      cta: `Find your trainer · ${FACTS.ptLanding}`,
      targetLength: "long",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #pricetransparency #fitnessamsterdam #ptlife #strengthcoach #amsterdamlife #fitnessjourney`,
    visualNote: "List-style with fast cuts. Background: trainer coaching / studio shots between items.",
    duration: "60s",
    media: [
      { src: "/images/studio/pt-session-barbell.jpg", label: "Coach + client", role: "primary" },
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
    format: "TikTok Video",
    title: "Meet Alex — Strength · Calisthenics",
    script: `[0-3s] Alex talking-head intro
[3-10s] B-roll: Alex coaching a squat
[10-20s] Alex on his specialism
[20-30s] Action shot: muscle-up demo
[30-40s] Alex mentions rate + free intake
[40-50s] B-roll: coaching client through session
[50-60s] CTA: ${FACTS.website}`,
    brief: {
      message: "Introduce Alex + call out the type of client who'd be a fit (strength / calisthenics).",
      facts: [
        "Specialism: Strength · Calisthenics · Recovery",
        "Languages: NL · EN · PT",
        "Rate: €69 per 60 min",
        "First intake free",
      ],
      hookConcept: "Alex teaches the muscle-up — even if you can't do a pull-up yet",
      cta: `Book via ${FACTS.website} or DM Alex`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #calisthenics #strengthtraining #personaltraineramsterdam #fitnesscoach #ptamsterdam`,
    visualNote: "Alex's authentic personality — no script. Mix talking-head + coaching b-roll.",
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
    format: "TikTok Video",
    title: "Meet Eva — Dietitian + PT (rare combo)",
    script: `[0-3s] Hook: "Our trainer Eva is also a dietitian"
[3-12s] Eva intro: trains + advises on nutrition
[12-22s] B-roll: Eva coaching squat
[22-32s] Eva on the strength + nutrition combo
[32-42s] Short client testimony (1 sentence, with consent)
[42-52s] Eva: rate on request, free intake
[52-60s] CTA: DM Eva for free intake`,
    brief: {
      message: "Eva's unique combo (dietitian + PT) is the differentiator. Make it the reason-to-book.",
      facts: [
        "Specialism: Strength + Nutrition advice",
        "Languages: NL · EN",
        "Rate: on request",
        "First intake free",
        "Strength + nutrition advice combo is rare in Amsterdam",
      ],
      hookConcept: "Eva is the only PT in Amsterdam who's also a registered dietitian",
      cta: `Book via ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#dietist #personaltrainer #amsterdam #jordaan #voedingsadvies #nutrition #strengthtraining #fitcoach #womenwholift #amsterdamhealth`,
    visualNote: "Show Eva in both roles — coaching AND nutrition advice. Splice side-by-side.",
    duration: "60s",
    media: [
      { src: "/images/trainers/eva.jpg", label: "Eva portrait", role: "primary" },
      { src: "/images/trainers/eva-wp.jpg", label: "Eva wp" },
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Coaching action" },
    ],
  },
  {
    id: "tt-spotlight-gezina",
    platform: "tiktok",
    pillar: "trainer-spotlight",
    format: "TikTok Video",
    title: "Meet Gezina — Women's strength specialist",
    script: `[0-3s] Hook: "She trains women — really trains them"
[3-12s] Gezina coaching a deadlift, encouraging cue
[12-22s] Talking-head: why she only trains women
[22-32s] B-roll: small group of 2-3 women, energetic
[32-42s] Gezina on cycle-aware programming (1-line, plain language)
[42-52s] Client smile after a PR (with consent)
[52-60s] CTA: ${FACTS.website}`,
    brief: {
      message: "Position Gezina as the trainer for women who want STRONG, not 'toned'. Cycle-aware programming is the differentiator.",
      facts: [
        "Specialism: Women's training · Strength · Performance",
        "Languages: NL · EN",
        "Rate: on request",
        "First intake free",
        "Trains 1-on-1 AND small group",
        "Cycle-aware programming — strength volume aligned to your cycle",
      ],
      hookConcept: "The only PT in the Jordaan who programs strength around your cycle",
      cta: `DM Gezina @gezfitness · book via ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#womenwholift #vrouwentraining #personaltrainer #amsterdam #jordaan #strengthtraining #womenshealth #cycletraining #fitnesscoachamsterdam #ptamsterdam`,
    visualNote: "Real, not aesthetic-empowerment-cliché. Gezina coaching focus + 1 PR moment. No mirror selfies.",
    duration: "60s",
    media: [
      { src: "/images/trainers/gezina.jpg", label: "Gezina portrait", role: "primary" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Coaching deadlift" },
      { src: "/images/studio/training-dumbbells-smile.jpg", label: "PR moment" },
    ],
  },
  {
    id: "tt-spotlight-jearmey",
    platform: "tiktok",
    pillar: "trainer-spotlight",
    format: "TikTok Video",
    title: "Meet Jearmey — Strength · Fat loss · Athletic performance",
    script: `[0-3s] Hook: "Want to lose fat without losing strength?"
[3-12s] Jearmey demoing a power clean
[12-22s] Talking-head: his three-pillar approach (strength · fat loss · pain-free)
[22-32s] B-roll: client mid-session, sweat + form
[32-42s] Jearmey on why "athletic" beats "fitness"
[42-52s] Quick montage: sprint · lift · stretch
[52-60s] CTA: ${FACTS.website}`,
    brief: {
      message: "Jearmey is for people who want to PERFORM, not just look better. Strength + fat loss + pain-free movement = athletic body.",
      facts: [
        "Specialism: Strength · Fat Loss · Athletic Performance",
        "Languages: NL · EN",
        "Rate: on request",
        "First intake free",
        "Programmes built to deliver measurable result",
      ],
      hookConcept: "Train like an athlete — even if you're 38 and sit at a desk",
      cta: `DM @jer.proformance · book via ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #strengthtraining #fatloss #athleticperformance #ptamsterdam #fitcoachamsterdam #performancetraining #afvallen`,
    visualNote: "High-intensity edit. Power, speed, technique. No before/after weight-loss frames — show CAPABILITY gains.",
    duration: "60s",
    media: [
      { src: "/images/trainers/jearmey.jpg", label: "Jearmey portrait", role: "primary" },
      { src: "/images/studio/training-barbell-dramatic.jpg", label: "Power lift" },
      { src: "/images/studio/training-dumbbells-power.jpg", label: "Power moment" },
    ],
  },
  {
    id: "tt-spotlight-sergei",
    platform: "tiktok",
    pillar: "trainer-spotlight",
    format: "TikTok Video",
    title: "Meet Sergei — 10+ years · Body recomposition specialist",
    script: `[0-3s] Hook: "Posture · body composition · busy professional"
[3-12s] Sergei talking-head intro (English — his market)
[12-22s] B-roll: Sergei coaching a deadlift with precise setup cues
[22-32s] Quick reference to 10+ years experience + structured programming
[32-42s] Posture-fix demo: before-shot ↔ after one session
[42-52s] Sergei on 1:1 / duo / small group options
[52-60s] CTA: "DM @transformbst · ${FACTS.website}"`,
    brief: {
      message: "Sergei is the trainer for busy English-speaking professionals who want a structured plan, not a session-by-session improvise. 10+ years experience.",
      facts: [
        "Specialism: Body Recomposition · Posture Correction · Strength & Movement · Recovery",
        "Languages: EN · RU (English-first audience)",
        "Rate: €80 per 60 min",
        "First intake free",
        "10+ years of personal training experience",
        "1:1, duo or small group format",
      ],
      hookConcept: "Structured, evidence-based programming — built around your week, not against it",
      cta: `DM @transformbst · book via ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #bodyrecomposition #postureimprovement #strengthcoach #personaltraineramsterdam #ptamsterdam #englishspeaking #expatfitness`,
    visualNote: "English-only captions on screen. Sergei's expat-professional market — avoid Dutch overlay text.",
    duration: "60s",
    media: [
      { src: "/images/trainers/sergei.jpg", label: "Sergei portrait", role: "primary" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Coaching deadlift" },
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Posture cue" },
    ],
  },
  {
    id: "tt-spotlight-joey",
    platform: "tiktok",
    pillar: "trainer-spotlight",
    format: "TikTok Video",
    title: "Meet Joey — The Ascend Method (strength + breath + nervous system)",
    script: `[0-3s] Hook: "What if your strength came from your nervous system?"
[3-12s] Joey: 1-line intro of The Ascend Method
[12-22s] B-roll: Joey coaching slow, intentional movement
[22-32s] Breathwork micro-demo (3 breath cycles, on-screen)
[32-42s] Joey on the high-performer who feels disconnected
[42-52s] Quote overlay: "Wisdom isn't studied, it's embodied."
[52-60s] CTA: ${FACTS.website}`,
    brief: {
      message: "Joey is for high-performers who are strong but stuck. Position The Ascend Method as the differentiator — body + mind + breath aligned.",
      facts: [
        "Specialism: Strength · Breathwork · Nervous System · Self-Inquiry",
        "Languages: NL · EN",
        "Rate: on request",
        "First intake free",
        "Method: The Ascend Method — Inner Alignment System",
        "For high-performers who feel stuck, stressed, or disconnected",
      ],
      hookConcept: "Train your body AND your nervous system in one hour",
      cta: `DM @joaonomad137 · book via ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #breathwork #nervoussystem #mindbodyconnection #ascendmethod #strengthtraining #embodiment #ptamsterdam`,
    visualNote: "Calmer pacing than other spotlights. Cinematic, intentional. Joey's brand = depth, not intensity.",
    duration: "60s",
    media: [
      { src: "/images/trainers/joey.jpg", label: "Joey portrait", role: "primary" },
      { src: "/images/trainers/joey-wp.jpg", label: "Joey wp" },
      { src: "/images/studio/training-dead-hang.jpg", label: "Intentional movement" },
    ],
  },
  {
    id: "tt-spotlight-andrea",
    platform: "tiktok",
    pillar: "trainer-spotlight",
    format: "TikTok Video",
    title: "Meet Andrea — €45/45 min · Technique-first",
    script: `[0-3s] Hook on-screen: "€45 · 45 min · best-priced PT in Amsterdam"
[3-12s] Andrea coaching a squat, slow-motion form correction
[12-22s] Andrea talking-head: why technique-first beats "feel the burn"
[22-32s] B-roll: a posture-fix on a real client (with consent)
[32-42s] Andrea on her ideal client: beginners + post-injury return
[42-52s] On-screen: "First intake free · €45 from there"
[52-60s] CTA: ${FACTS.website}`,
    brief: {
      message: "Andrea is the most accessible PT on the roster (price) AND the safest pick for beginners + post-injury. Position both clearly.",
      facts: [
        "Specialism: Strength · Posture · Technique",
        "Languages: NL · EN",
        "Rate: €45 per 45 min — most accessible rate on roster",
        "First intake free",
        "Best fit: beginners + post-injury comeback",
      ],
      hookConcept: "She rebuilds lower backs in four sessions — start with a free intake",
      cta: `DM @grskiiii · book via ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #posturecoach #strengthtraining #techniquefirst #personaltraineramsterdam #ptamsterdam #affordablept #beginnerfriendly`,
    visualNote: "Calm + competent. Lead with the price hook because it's the genuine differentiator.",
    duration: "60s",
    media: [
      { src: "/images/trainers/andrea.jpg", label: "Andrea portrait", role: "primary" },
      { src: "/images/trainers/andrea-wp.jpg", label: "Andrea wp" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Technique" },
    ],
  },
  {
    id: "tt-spotlight-dara",
    platform: "tiktok",
    pillar: "trainer-spotlight",
    format: "TikTok Video",
    title: "Meet Dara — Train as a pair, same focus",
    script: `[0-3s] Hook: "Train as a pair — split the cost, keep the focus"
[3-12s] Dara coaching two clients in sync
[12-22s] Dara talking-head: small-group as her differentiator
[22-32s] B-roll: pair high-fives after a set
[32-42s] Dara on choosing 1-on-1 vs duo (1 sentence)
[42-52s] Energy montage: cardio + strength back-to-back
[52-60s] CTA: ${FACTS.website}`,
    brief: {
      message: "Dara's offer = bring a friend, train together. Same coaching, halved cost, accountability. Differentiator on the roster.",
      facts: [
        "Specialism: Personal Training · Small Group · Strength & Conditioning",
        "Languages: NL · EN",
        "Rate: on request",
        "First intake free",
        "Trains 1-on-1 AND pairs/small groups (rare in the Jordaan)",
      ],
      hookConcept: "Bring a friend — same session, half the cost each",
      cta: `DM Dara via WhatsApp · book via ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #smallgrouptraining #duotraining #strengthcoach #personaltrainingamsterdam #fitnesscoach #ptamsterdam`,
    visualNote: "Show TWO people training together — that's the visual hook. Energy, accountability, fun.",
    duration: "60s",
    media: [
      { src: "/images/trainers/dara.jpg", label: "Dara portrait", role: "primary" },
      { src: "/images/trainers/dara-wp.jpg", label: "Dara wp" },
      { src: "/images/studio/pt-session-barbell.jpg", label: "Duo session" },
    ],
  },

  // ─── TIKTOK · JORDAAN LOCAL ─────────────────────────────────────────
  {
    id: "tt-local-01",
    platform: "tiktok",
    pillar: "jordaan-local",
    format: "TikTok Video",
    title: "Walking to the studio · POV through the Jordaan",
    script: `[0-3s] POV walking on Egelantiersgracht, canal-side
[3-12s] Cyclists pass, cafés open, neighbourhood texture
[12-22s] Approach the studio: green door + sign reveal
[22-32s] Inside: lights on, music low, equipment ready
[32-42s] Trainer fist-bump on entry
[42-52s] Quick training cut: barbell setup
[52-60s] CTA: "${FACTS.address} · ${FACTS.website}"`,
    brief: {
      message: "Jordaan-local POV — builds neighbourhood + 'private gym' feel. High retention via location curiosity.",
      facts: [
        FACTS.address,
        "5 min walk from Anne Frank House",
        "Tram 13/17 stop: Marnixstraat",
        "First session of day is the quietest",
      ],
      hookConcept: "POV: walking through the Jordaan to your private gym",
      cta: `${FACTS.address} · ${FACTS.website}`,
      targetLength: "short",
    },
    hashtags: `#jordaan #amsterdam #amsterdamlife #pov #jordaanamsterdam #amsterdamfitness #boutiquegym #ptamsterdam #amsterdammornings #fitnessjordaan`,
    visualNote: "Steadicam or stabilized phone. Natural light. Trending TikTok POV sound. Show the WALK as much as the destination.",
    duration: "60s",
    media: [
      { src: "/images/hero/canal-view.jpg", label: "Canal POV", role: "primary" },
      { src: "/images/studio/facade-sculptclub.jpg", label: "Studio facade" },
      { src: "/images/studio/entrance-smile.jpg", label: "Entrance" },
      { src: "/images/studio/power-rack.jpeg", label: "Inside" },
    ],
  },
  {
    id: "tt-local-02",
    platform: "tiktok",
    pillar: "jordaan-local",
    format: "TikTok Video",
    title: "Why a gym IN the Jordaan matters (vs. a chain across town)",
    script: `[0-3s] Hook: "Why train in the Jordaan?"
[3-12s] Quick comparison: 30-min commute to chain gym ↔ 5-min walk to private studio
[12-22s] Pan over Egelantiersgracht — canal, cafés, neighbours
[22-32s] Inside the studio: max 4 people · quiet · curated equipment
[32-42s] Trainer cue overlay: "When the gym is on your block, you actually go"
[42-52s] B-roll: client leaving, walking home along canal
[52-60s] CTA: "${FACTS.address} · first intake free · ${FACTS.website}"`,
    brief: {
      message: "Frictionless = sustainable. A 5-minute walk is the single biggest retention lever a gym can offer. Make THAT the brand.",
      facts: [
        "5-min walk from most Jordaan addresses",
        "Max 4 people per Open Gym slot",
        "Curated equipment: Rogue, Echo Bike, free weights",
        "First intake free",
      ],
      hookConcept: "The shortest commute to a real workout in Amsterdam",
      cta: `${FACTS.address} · ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#jordaan #amsterdam #jordaanlife #amsterdamfitness #boutiquegym #neighbourhoodgym #commute #wellbeing #jordaanlocal #amsterdammornings`,
    visualNote: "Show the 5-min walk visually — that IS the value prop.",
    duration: "60s",
    media: [
      { src: "/images/hero/canal-view.jpg", label: "Canal walk", role: "primary" },
      { src: "/images/studio/facade-sculptclub.jpg", label: "Studio facade" },
      { src: "/images/studio/power-rack.jpeg", label: "Inside power rack" },
    ],
  },

  // ─── TIKTOK · BEFORE/AFTER ──────────────────────────────────────────
  {
    id: "tt-ba-01",
    platform: "tiktok",
    pillar: "before-after",
    format: "TikTok Video",
    title: "12-week transformation (real client)",
    script: `[0-3s] Split screen: Week 1 ↔ Week 12
[3-10s] First session b-roll
[10-20s] Trainer note: "Technique first, weight second"
[20-30s] Week 4: better execution
[30-42s] Week 12: 2× heavier, perfect form
[42-52s] On-screen: confidence gained
[52-60s] CTA: "Want this too? sculptclub.nl"`,
    brief: {
      message: "Show a real 12-week transformation (with consent). Focus on process, not just result.",
      facts: [
        "Duration: 12 weeks",
        "Frequency: 2-3× per week",
        "First 4 weeks: technique",
        "Weeks 5-8: build load",
        "Weeks 9-12: hit PRs",
        "No miracle diet",
      ],
      hookConcept: "12 weeks. €45 per session. Real result.",
      cta: `First intake free · ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#beforeafter #transformation #personaltrainer #amsterdam #jordaan #strengthtraining #fitnessjourney #pt #fitnesstransformation`,
    visualNote: "ESSENTIAL: written consent for client image. If unsure: use animation/stock with 'example result' disclaimer.",
    duration: "60s",
    media: [
      { src: "/images/studio/training-barbell-squat.jpg", label: "Squat — early phase", role: "primary" },
      { src: "/images/studio/training-squat-cinematic.jpg", label: "Squat — late phase" },
      { src: "/images/studio/training-dumbbells-power.jpg", label: "Power development" },
    ],
  },

  // ─── TIKTOK · FITNESS TIP ───────────────────────────────────────────
  {
    id: "tt-tip-01",
    platform: "tiktok",
    pillar: "fitness-tip",
    format: "TikTok Video",
    title: "3 squat mistakes everyone makes",
    script: `[0-3s] Hook: "3 squat mistakes — fix this"
[3-15s] Mistake #1: knees caving in → fix
[15-27s] Mistake #2: heels lifting → fix
[27-39s] Mistake #3: too much forward lean → fix
[39-50s] Demo: perfect rep with right cue
[50-60s] CTA: "More? Book a session · sculptclub.nl"`,
    brief: {
      message: "Educational tip: teach 3 common squat mistakes + the fix. Save-worthy content.",
      facts: [
        "Mistake 1: knees cave in → actively push them out",
        "Mistake 2: heels lift → weight on midfoot + ankle mobility",
        "Mistake 3: too much forward lean → chest up, core tight",
        "Want live correction? First intake free",
      ],
      hookConcept: "Three squat fixes — from our PT floor in the Jordaan",
      cta: FACTS.ptLanding,
      targetLength: "medium",
    },
    hashtags: `#squatform #fitnesstip #personaltrainer #amsterdam #strengthtraining #liftingtips #gymtips #squat #formcheck #personaltraineramsterdam`,
    visualNote: "Trainer demos each mistake (slow-mo) + correction. Text overlay per mistake. Music: educational.",
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
    format: "TikTok Video",
    title: "How to actually train your core (not sit-ups)",
    script: `[0-3s] Hook: "Sit-ups don't make your core stronger"
[3-12s] Dead bug — slow, controlled
[12-22s] Pallof press — anti-rotation
[22-32s] Hollow body hold — stability
[32-42s] Quick explanation: core = stabilizer
[42-52s] B-roll: all three back-to-back
[52-60s] CTA: "Complete core program? sculptclub.nl"`,
    brief: {
      message: "Educational tip: 3 better core exercises than sit-ups. Save-worthy.",
      facts: [
        "Dead bug — learn to stabilize the core",
        "Pallof press — anti-rotation strength",
        "Hollow body hold — total core tension",
        "Core = stabilizer, not visibility",
      ],
      hookConcept: "Sit-ups don't build a strong core. These three exercises do.",
      cta: `Complete program · ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#coreworkout #corestability #fitnesstip #personaltrainer #amsterdam #strengthcoach #abs #fitnessadvice #liftingtips`,
    visualNote: "Top-down + side-view per exercise. Beat-driven cuts.",
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
    format: "TikTok Video",
    title: "An early morning in the Jordaan studio",
    script: `[0-3s] Hook on-screen: "06:30 AM in the Jordaan"
[3-12s] Trainer opens garage door, sun on canal
[12-22s] First client in, coffee being made
[22-32s] Warming-up, music on
[32-42s] Mid-workout: focus, coaching moments
[42-52s] Client finishes, fist bump
[52-60s] On-screen: ${FACTS.hours}`,
    brief: {
      message: "Authentic morning at the Jordaan studio — humanizes the brand.",
      facts: [
        `Open: ${FACTS.hours}`,
        "Early morning = quietest time, gym to yourself",
        FACTS.address,
      ],
      hookConcept: "06:30 in the Jordaan",
      cta: FACTS.website,
      targetLength: "short",
    },
    hashtags: `#jordaan #amsterdam #personaltrainer #morningroutine #gymlife #amsterdamlife #boutiquegym #fitnesscommunity #jordaanlife`,
    visualNote: "Authentic, no over-production. Shoot one morning with phone. Early morning light is magic.",
    duration: "60s",
    media: [
      { src: "/images/studio/entrance-smile.jpg", label: "Entrance morning", role: "primary" },
      { src: "/images/studio/canal-view-doors.jpg", label: "Canal doors" },
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
    format: "TikTok Video",
    title: "Why 5.0 stars on Google aren't a marketing trick",
    script: `[0-3s] Hook: "How we keep our 5.0 on Google"
[3-12s] Trainer talking to camera: explanation
[12-22s] Show: review screenshot 1
[22-32s] Show: review screenshot 2
[32-42s] Trainer: "I keep 100% = time for clients"
[42-52s] Show: review screenshot 3
[52-60s] CTA: "Book your own experience · sculptclub.nl"`,
    brief: {
      message: "Social proof: show the 5.0 stars are real + explain why (no marketing trick).",
      facts: [
        FACTS.rating,
        "Trainers focus on coaching, not selling memberships",
        "No marketing team — just real service",
      ],
      hookConcept: "How we hold 5,0 on Google",
      cta: `First intake free · ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#googlereviews #amsterdam #jordaan #personaltrainer #5sterren #fivestars #boutiquegym #pt #amsterdamfitness #realreviews`,
    visualNote: "Real Google review screenshots. Privacy: only first name + initial. Ask consent for specific reviews.",
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
    format: "Carousel",
    title: "Carousel — 7 corners of our studio",
    script: `Carousel slides:
1. Cover: Studio entrance facade + welcome text
2. Rogue power rack corner
3. Barbell + bumper plates collection
4. Echo Bike + sled corner
5. Squat rack + mirrors
6. Garage door open onto canal
7. CTA slide: "Book your intake — sculptclub.nl"`,
    brief: {
      message: "Visual intro of the whole studio: 7 key spots in the gym.",
      facts: [
        `Location: ${FACTS.address}`,
        "No tickets, no memberships",
        `PT: ${FACTS.pt}`,
        `Studio: ${FACTS.studio}`,
        `Open Gym: ${FACTS.openGym}`,
        "First intake free",
      ],
      hookConcept: "7 corners of our studio in the Jordaan",
      cta: "Book via link in bio",
      targetLength: "long",
    },
    hashtags: `#amsterdam #jordaan #privegym #boutiquegym #personaltrainer #strengthcoach #amsterdamfitness #fitnessamsterdam #jordaanlocal #amsterdamlife #personaltrainingamsterdam #gymamsterdam`,
    visualNote: "Carousel — 7 high-quality square photos. Consistent grading (warm but clean).",
    media: [
      { src: "/images/studio/facade-sculptclub.jpg", label: "Slide 1: Facade", role: "primary" },
      { src: "/images/studio/power-rack.jpeg", label: "Slide 2: Power rack" },
      { src: "/images/studio/dumbbells-floor.jpeg", label: "Slide 3: Dumbbells" },
      { src: "/images/studio/echo-bike-corner.jpg", label: "Slide 4: Echo bike + sled" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Slide 5: Squat rack" },
      { src: "/images/studio/canal-view-doors.jpg", label: "Slide 6: Canal doors" },
      { src: "/images/studio/studio-overview.jpeg", label: "Slide 7: Overview" },
    ],
  },
  {
    id: "ig-tour-02",
    platform: "instagram",
    pillar: "studio-tour",
    format: "Reel",
    title: "Reel — Studio aesthetic 30s",
    script: `Reel (30s vertical):
[0-3s] Slow pan on facade — Sculpt sign visible
[3-10s] Walk through door, equipment reveals
[10-18s] Detail shots: barbell + plates close-up
[18-25s] Person training in background (silhouette)
[25-30s] Final text frame: "€12/hr · ${FACTS.address}"`,
    brief: {
      message: "Cinematic glimpse of the studio for people who've never been inside.",
      facts: [
        `Price: ${FACTS.studio}`,
        "No membership",
        "Book per hour",
        "Transparent per-hour pricing",
      ],
      hookConcept: "A private gym in Jordaan from €12 per hour",
      cta: `Link in bio · ${FACTS.website}`,
      targetLength: "short",
    },
    hashtags: `#jordaan #amsterdam #fitnessamsterdam #boutiquegym #personaltrainer #strengthtraining #amsterdamlocal #jordaanvibes #amsterdamfitness`,
    visualNote: "Cinematic, slow camera moves. Music: chill ambient. No voice-over.",
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
    format: "Carousel",
    title: "Carousel — What €45 actually gets you",
    script: `Carousel slides:
1. Cover: "€45 PT in Jordaan — what do you get?" + coaching photo
2. "Coach who listens" + conversation photo
3. "Tailored program" + notebook photo
4. "Live form correction" + squat correction
5. "Nutrition advice optional" + healthy breakfast
6. "Next session adjusted" + trainer writing
7. CTA: "First intake free · sculptclub.nl"`,
    brief: {
      message: "Breakdown of what €45 actually delivers. Addresses price question for mid-funnel viewers.",
      facts: [
        "1-on-1 attention",
        "Tailored program (no template)",
        "Form corrections during session",
        "Track progress + adjust",
        "Transparent pricing — what you see is what you pay",
        "First intake free",
      ],
      hookConcept: "What do you actually get for €45?",
      cta: FACTS.ptLanding,
      targetLength: "long",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #personaltraining #ptamsterdam #pricetransparency #fitnesscoach #strengthtraining #amsterdamlife`,
    visualNote: "Consistent visual style across 7 slides. Brand color (#EF5012) on swipe indicator.",
    media: [
      { src: "/images/studio/pt-session-barbell.jpg", label: "Cover: coaching moment", role: "primary" },
      { src: "/images/studio/training-chest-press.jpg", label: "Chest press" },
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Tailored program" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Technique correction" },
      { src: "/images/studio/training-dumbbells-power.jpg", label: "Progress" },
      { src: "/images/studio/training-squat-cinematic.jpg", label: "PR moment" },
    ],
  },
  {
    id: "ig-pt-02",
    platform: "instagram",
    pillar: "pt-showcase",
    format: "Reel",
    title: "Reel — 60-sec PT session highlights",
    script: `Reel (60s):
[0-5s] Hook: "No staged PT. Real session."
[5-15s] Warming-up + dynamic stretches
[15-30s] Mid-workout: coaching cues, focus
[30-45s] PR moment — celebration, real reaction
[45-55s] Cooldown conversation
[55-60s] CTA: "${FACTS.pt} · ${FACTS.website}"`,
    brief: {
      message: "Realistic look at a PT session — shows structure + why 60 min is really 60 min of work.",
      facts: [
        "10 min warming-up",
        "35 min work (strength/technique/hypertrophy)",
        "Cooldown + conversation on progress",
        "Program adjusted for next time",
        FACTS.pt,
      ],
      hookConcept: "Inside a SculptClub PT session — full 60 minutes",
      cta: "Book via link in bio",
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #personaltraining #fitnesscoach #strengthcoach #realresults #ptlife #amsterdamfitness`,
    visualNote: "Real client (consent first). Multi-angle film. No over-produce.",
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
    format: "Reel",
    title: "Meet Andrea — Posture · Technique",
    script: `Single photo OR Reel:
Photo: Andrea in studio, coaching action shot
Reel: 30s — intro + coaching demo`,
    brief: {
      message: "Introduce Andrea as the trainer for beginners + post-injury comeback.",
      facts: [
        "Specialism: Strength · Posture · Technique",
        "Languages: NL · EN",
        "Rate: €45 per 45 min",
        "First intake free",
        "Good fit for beginners + post-injury return",
      ],
      hookConcept: "Andrea rebuilds lower backs in four sessions",
      cta: `Book via ${FACTS.website} or DM us`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #posturecoach #strengthtraining #techniquefirst #personaltraineramsterdam #ptamsterdam`,
    visualNote: "Professional headshot/action — natural light, no flash.",
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
    format: "Carousel",
    title: "Meet Dara — Personal + Small Group",
    script: `Carousel:
1. Dara coaching action shot
2. Dara talking with client
3. Group dynamics — Dara coaching multiple
4. CTA — book via website`,
    brief: {
      message: "Introduce Dara with focus on her small-group offering (differentiator in Jordaan).",
      facts: [
        "Specialism: PT · Small Group · Strength & Conditioning",
        "Languages: NL · EN",
        "Rate: on request",
        "First intake free",
        "Works 1-on-1 AND small groups",
      ],
      hookConcept: "Dara trains pairs as one session — same focus, half the price each",
      cta: FACTS.website,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #smallgrouptraining #personaltrainingamsterdam #fitnesscoach #strengthcoach`,
    visualNote: "Carousel mix solo + group shots. Show Dara's coaching range.",
    media: [
      { src: "/images/trainers/dara.jpg", label: "Dara portrait", role: "primary" },
      { src: "/images/trainers/dara-wp.jpg", label: "Dara wp" },
      { src: "/images/studio/pt-session-barbell.jpg", label: "Coaching session" },
    ],
  },
  {
    id: "ig-spotlight-gezina",
    platform: "instagram",
    pillar: "trainer-spotlight",
    format: "Carousel",
    title: "Meet Gezina — Women's strength specialist",
    script: `Carousel (5 slides):
1. Portrait of Gezina in studio (action, not pose)
2. Coaching shot: deadlift with female client
3. Small-group dynamic shot (2-3 women)
4. Quote slide: "Cycle-aware programming — your strength volume aligned to your cycle"
5. CTA slide: "DM @gezfitness · sculptclub.nl/vind-jouw-personal-trainer"`,
    brief: {
      message: "Differentiate Gezina on women-only programming AND cycle-aware approach. Both rare in the Jordaan.",
      facts: [
        "Specialism: Women's Training · Strength · Performance",
        "Languages: NL · EN",
        "Rate: on request",
        "First intake free",
        "1-on-1 + small group format",
        "Cycle-aware programming — strength scaled to your cycle phase",
      ],
      hookConcept: "The only PT in the Jordaan who programs strength around your cycle",
      cta: `DM Gezina · ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#womenwholift #vrouwentraining #personaltrainer #amsterdam #jordaan #strengthtraining #womenshealth #cycletraining #ptamsterdam #amsterdamfitness`,
    visualNote: "Color grading: warm, confident. Avoid pink/sparkles cliché. Real strength = the aesthetic.",
    media: [
      { src: "/images/trainers/gezina.jpg", label: "Gezina portrait", role: "primary" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Coaching deadlift" },
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Focus moment" },
    ],
  },
  {
    id: "ig-spotlight-jearmey",
    platform: "instagram",
    pillar: "trainer-spotlight",
    format: "Reel",
    title: "Meet Jearmey — Train like an athlete",
    script: `Reel (45s):
[0-3s] Hook overlay: "Train like an athlete — even if you sit at a desk"
[3-15s] Jearmey demoing 3 athletic moves (power clean · jump · sprint setup)
[15-27s] Talking-head: 3-pillar approach (strength · fat loss · pain-free)
[27-37s] Quick client B-roll: someone mid-session, full effort
[37-45s] CTA: "DM @jer.proformance · sculptclub.nl"`,
    brief: {
      message: "Jearmey for the person who wants PERFORMANCE not just looking-better. Position the 3-pillar model clearly.",
      facts: [
        "Specialism: Strength · Fat Loss · Athletic Performance",
        "Languages: NL · EN",
        "Rate: on request",
        "First intake free",
        "Builds programmes for measurable results",
      ],
      hookConcept: "Lose fat without losing strength — that's the brief",
      cta: `DM Jearmey · ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #strengthtraining #fatloss #athleticperformance #ptamsterdam #performancetraining #afvallen #fitcoachamsterdam`,
    visualNote: "High energy. Trap-music tempo. Show power moments, not gym-vibe lifestyle shots.",
    duration: "45s",
    media: [
      { src: "/images/trainers/jearmey.jpg", label: "Jearmey portrait", role: "primary" },
      { src: "/images/studio/training-barbell-dramatic.jpg", label: "Power lift" },
      { src: "/images/studio/training-dumbbells-power.jpg", label: "Power moment" },
    ],
  },
  {
    id: "ig-spotlight-sergei",
    platform: "instagram",
    pillar: "trainer-spotlight",
    format: "Carousel",
    title: "Meet Sergei — 10+ years · For busy professionals",
    script: `Carousel (6 slides, English captions only — Sergei's market):
1. Portrait of Sergei in studio
2. "10+ years of personal training experience"
3. Specialisms list (Body Recomp · Posture · Strength · Recovery)
4. "Structured, evidence-based programming — not session-by-session improvise"
5. "1-on-1, duo, or small group · €80/60 min · first intake free"
6. CTA: "DM @transformbst — book via sculptclub.nl"`,
    brief: {
      message: "Sergei = the trainer for English-speaking busy professionals who want a STRUCTURED plan + experienced coach. 10+ yrs is the proof.",
      facts: [
        "Specialism: Body Recomposition · Posture Correction · Strength & Movement · Recovery",
        "Languages: EN · RU (English-first audience)",
        "Rate: €80 per 60 min",
        "First intake free",
        "10+ years personal training experience",
        "Format: 1:1 · duo · small group",
      ],
      hookConcept: "Evidence-based programming, built around YOUR week",
      cta: `DM @transformbst · ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #bodyrecomposition #postureimprovement #strengthcoach #personaltraineramsterdam #ptamsterdam #englishspeakingpt #expatfitness`,
    visualNote: "Clean professional crops — no muscle-bro shots. Glasses optional but premium feel. ENGLISH overlays only.",
    media: [
      { src: "/images/trainers/sergei.jpg", label: "Sergei portrait", role: "primary" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Coaching cue" },
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Posture cue" },
    ],
  },
  {
    id: "ig-spotlight-joey",
    platform: "instagram",
    pillar: "trainer-spotlight",
    format: "Reel",
    title: "Meet Joey — The Ascend Method",
    script: `Reel (45s, cinematic pace):
[0-3s] Slow zoom on Joey in studio, calm gaze
[3-15s] Joey: "The Ascend Method — body, breath, awareness in one session"
[15-27s] B-roll: slow squat with intentional breathing overlay
[27-37s] Quote on screen: "Wisdom isn't studied, it's embodied."
[37-45s] CTA: "DM @joaonomad137 — book via sculptclub.nl"`,
    brief: {
      message: "Joey is high-end positioned for high-performers who feel stuck. The Ascend Method = his unique brand. Pacing must feel different from other trainers.",
      facts: [
        "Specialism: Strength · Breathwork · Nervous System · Self-Inquiry",
        "Languages: NL · EN",
        "Rate: on request",
        "First intake free",
        "Method: The Ascend Method — Inner Alignment System",
        "For high-performers feeling stuck, stressed or disconnected",
      ],
      hookConcept: "Train your body AND your nervous system in one hour",
      cta: `DM @joaonomad137 · book via ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #breathwork #nervoussystem #mindbodyconnection #ascendmethod #strengthtraining #embodiment #amsterdamhealth`,
    visualNote: "Slower edits. Cinematic. Joey's brand = depth, not intensity. Trust the quiet.",
    duration: "45s",
    media: [
      { src: "/images/trainers/joey.jpg", label: "Joey portrait", role: "primary" },
      { src: "/images/trainers/joey-wp.jpg", label: "Joey wp" },
      { src: "/images/studio/training-dead-hang.jpg", label: "Intentional movement" },
    ],
  },
  {
    id: "ig-spotlight-alex",
    platform: "instagram",
    pillar: "trainer-spotlight",
    format: "Reel",
    title: "Meet Alex — Strength · Calisthenics · €69/60 min",
    script: `Reel (45s):
[0-3s] Hook: "He'll teach you the muscle-up — even if you can't do a pull-up yet"
[3-15s] Alex coaching a calisthenics progression
[15-27s] Alex talking-head: NL/EN/PT — three languages
[27-37s] Quick montage: dead hang → muscle-up
[37-45s] CTA: "DM @almeidalexjr · sculptclub.nl"`,
    brief: {
      message: "Alex's calisthenics specialty is rare in Amsterdam — lead with it. Trilingual is the secondary differentiator.",
      facts: [
        "Specialism: Strength · Calisthenics · Recovery",
        "Languages: NL · EN · PT",
        "Rate: €69 per 60 min",
        "First intake free",
        "Calisthenics specialist — uncommon in Amsterdam PT scene",
      ],
      hookConcept: "Calisthenics teacher who'll get you to your first muscle-up",
      cta: `DM @almeidalexjr · ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#calisthenics #personaltrainer #amsterdam #jordaan #strengthtraining #muscleup #bodyweight #ptamsterdam #fitcoachamsterdam #calisthenicsamsterdam`,
    visualNote: "Mix dynamic calisthenics moves + studio b-roll. Don't lean on Alex-as-influencer; show TEACHING.",
    duration: "45s",
    media: [
      { src: "/images/trainers/alex.jpg", label: "Alex portrait", role: "primary" },
      { src: "/images/trainers/alex-wp.jpg", label: "Alex wp" },
      { src: "/images/studio/training-dead-hang.jpg", label: "Calisthenics action" },
    ],
  },
  {
    id: "ig-spotlight-eva",
    platform: "instagram",
    pillar: "trainer-spotlight",
    format: "Carousel",
    title: "Meet Eva — Dietitian + PT (rare combo)",
    script: `Carousel (5 slides):
1. Portrait: Eva in studio
2. "Registered dietitian AND personal trainer — one of very few in Amsterdam"
3. Coaching shot: form correction on a lift
4. "Strength + nutrition under one coach — no more conflicting advice"
5. CTA: "First intake free · DM @sportieefnl · sculptclub.nl"`,
    brief: {
      message: "Eva's dietitian credential is the moat. Carousel lets you show both sides — coaching AND nutrition advice.",
      facts: [
        "Specialism: Strength + Nutrition advice",
        "Languages: NL · EN",
        "Rate: on request",
        "First intake free",
        "Credential: Diëtist / Dietitian (registered)",
        "Strength + nutrition under ONE coach is rare in Amsterdam",
      ],
      hookConcept: "Stop getting conflicting advice from your PT and your dietitian — Eva is both",
      cta: `DM @sportieefnl · ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#dietist #personaltrainer #amsterdam #jordaan #voedingsadvies #nutritioncoach #strengthtraining #fitcoach #womenwholift #amsterdamhealth`,
    visualNote: "Show BOTH roles: coaching AND nutrition framing. Don't reduce Eva to either alone.",
    media: [
      { src: "/images/trainers/eva.jpg", label: "Eva portrait", role: "primary" },
      { src: "/images/trainers/eva-wp.jpg", label: "Eva wp" },
      { src: "/images/studio/training-dumbbells-focus.jpg", label: "Coaching action" },
    ],
  },

  // ─── INSTAGRAM · FITNESS TIPS ───────────────────────────────────────
  {
    id: "ig-tip-01",
    platform: "instagram",
    pillar: "fitness-tip",
    format: "Reel",
    title: "Reel — 3 hip mobility drills",
    script: `Reel (45s):
[0-3s] Hook: "Three hip-mobility drills before your next squat day"
[3-15s] Drill 1: 90/90 hip stretch — 30s each side
[15-27s] Drill 2: World's greatest stretch — 5 reps each side
[27-39s] Drill 3: Couch stretch — 60s each side
[39-45s] CTA: "Save this post + do it before your next session"`,
    brief: {
      message: "Save-worthy educational reel: 3 mobility drills for lifters.",
      facts: [
        "90/90 Hip Stretch — 30s per side",
        "World's Greatest Stretch — 5 reps per side",
        "Couch Stretch — 60s per side",
        "Frequency: 3-4× per week",
        "Result: noticeable within 4 weeks",
      ],
      hookConcept: "Hip pain on squats? Start here.",
      cta: `Full mobility program · ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#hipmobility #squatform #personaltrainer #amsterdam #mobilitydrills #fitnesstip #strengthcoach #fitnessadvice #jordaan`,
    visualNote: "Clean side-view + top-down. Slow-mo per drill. Music: educational/calm.",
    duration: "45s",
    media: [
      { src: "/images/studio/turf-lane-canal.jpg", label: "Mobility on turf", role: "primary" },
      { src: "/images/studio/back-room-full.jpg", label: "Back room space" },
      { src: "/images/studio/studio-interior-3.jpeg", label: "Floor space" },
    ],
  },
  {
    id: "ig-tip-02",
    platform: "instagram",
    pillar: "fitness-tip",
    format: "Carousel",
    title: "Carousel — 5 mistakes at your first PT session",
    script: `Carousel:
1. Cover: "5 mistakes at your first PT session"
2. Mistake 1: Not sharing goals → what do you want to achieve?
3. Mistake 2: Wrong clothes/shoes → comfort + grip
4. Mistake 3: Hiding injuries → honest = safe
5. Mistake 4: Eating right before → 1-2 hours before
6. Mistake 5: Expecting 1 session to solve everything → consistency wins
7. CTA: "First intake free · sculptclub.nl"`,
    brief: {
      message: "Address objections that hold people back from booking their first PT session.",
      facts: [
        "Share your goal upfront",
        "Comfortable sportswear + grip shoes",
        "Be honest about injuries",
        "Eat 1-2 hours before session",
        "Plan at least 4 sessions for noticeable result",
      ],
      hookConcept: "5 mistakes at your first PT session",
      cta: `First intake free · ${FACTS.ptLanding}`,
      targetLength: "long",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #firstsession #fitnessbeginners #personaltrainingadvice #fitnesstip #ptamsterdam #strengthtraining`,
    visualNote: "Strong typography, consistent layout. Brand colors. Per slide: 1 mistake, 1 solution.",
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
    format: "Reel",
    title: "Reel — Morning in the Jordaan",
    script: `Reel (30s):
[0-5s] Open shot: canal in the morning, mist on water
[5-12s] Cyclist passes, then into studio
[12-20s] Indoor: setting up, coffee being made
[20-26s] First client arrives, fist bump
[26-30s] CTA: "${FACTS.address} · ${FACTS.website}"`,
    brief: {
      message: "Authentic Jordaan morning — broad appeal, builds local brand.",
      facts: [
        FACTS.address,
        FACTS.hours,
        "First session of day = quietest time",
        "Coffee on the house for early birds",
      ],
      hookConcept: "A private gym, before the city wakes up",
      cta: `Link in bio · ${FACTS.website}`,
      targetLength: "short",
    },
    hashtags: `#jordaan #amsterdam #amsterdamlife #jordaanlife #morningvibes #amsterdammornings #jordaanmornings #amsterdamfitness #boutiquegym`,
    visualNote: "Cinematic, slow moves, natural light. No filters — the Jordaan is pretty enough.",
    duration: "30s",
    media: [
      { src: "/images/hero/canal-view.jpg", label: "Canal morning", role: "primary" },
      { src: "/images/studio/canal-view-doors.jpg", label: "Doors on canal" },
      { src: "/images/studio/facade-sculptclub.jpg", label: "Facade" },
      { src: "/images/studio/entrance-smile.jpg", label: "Entrance" },
    ],
  },
  {
    id: "ig-local-02",
    platform: "instagram",
    pillar: "jordaan-local",
    format: "Carousel",
    title: "Carousel — 5 nearby spots for pre/post workout",
    script: `Carousel:
1. Cover: "5 spots near our studio for pre/post workout"
2. Café 't Smalle (5 min walk) — coffee + terrace
3. AH Westerstraat (1 min) — supplements + snacks
4. Westerpark (8 min) — outdoor warm-up / cooldown
5. Drugstore around the corner — magnesium + recovery
6. The canal itself — towel down for stretching
7. CTA: "Train with us in the Jordaan · sculptclub.nl"`,
    brief: {
      message: "Local guide: practical spots near the studio. Builds trust + local search relevance.",
      facts: [
        "Café 't Smalle — pre-workout coffee",
        "AH Westerstraat — last-minute supplements",
        "Westerpark — outdoor warm-up",
        "Local drugstore — recovery essentials",
        "The canal — free cooldown spot",
      ],
      hookConcept: "5 spots in the Jordaan for before + after training",
      cta: `${FACTS.address} · ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#jordaan #amsterdam #amsterdamlife #jordaanlife #amsterdamfitness #jordaanlocal #amsterdamlocal #boutiquegym #fitnessamsterdam`,
    visualNote: "Photo of each spot. Aesthetic + Instagrammable. No tagged accounts without consent — use exteriors.",
    media: [
      { src: "/images/studio/facade-sculptclub.jpg", label: "Cover: facade", role: "primary" },
      { src: "/images/hero/canal-view.jpg", label: "Canal" },
      { src: "/images/studio/canal-view-doors.jpg", label: "Studio on canal" },
    ],
  },
  {
    id: "ig-ba-01",
    platform: "instagram",
    pillar: "before-after",
    format: "Carousel",
    title: "Carousel — 12 weeks · Real client · No miracle diet",
    script: `Carousel (7 slides):
1. Cover: "12 weeks · 2-3 sessions/week · €45 from there"
2. Week 1 — first session photo + form-cue overlay
3. Week 4 — better execution shot
4. Week 8 — load increase visualization (weights at week 1 vs week 8)
5. Week 12 — PR moment (with consent)
6. Client quote (1 sentence, in own words): "I came for the strength, I stayed for how it made me feel"
7. CTA: "First intake free · sculptclub.nl/vind-jouw-personal-trainer"`,
    brief: {
      message: "Real 12-week client journey — focus on the PROCESS not just the after-photo. Honest framing builds trust.",
      facts: [
        "Duration: 12 weeks",
        "Frequency: 2-3 sessions per week",
        "Weeks 1-4: technique foundation",
        "Weeks 5-8: progressive load",
        "Weeks 9-12: hit PRs",
        "No miracle diet",
        "First intake free",
      ],
      hookConcept: "12 weeks, real client, real process — not a body-transformation ad",
      cta: `First intake free · ${FACTS.ptLanding}`,
      targetLength: "medium",
    },
    hashtags: `#transformation #personaltrainer #amsterdam #jordaan #strengthtraining #fitnessjourney #realresults #pt #beforeafter #ptamsterdam`,
    visualNote: "ESSENTIAL: written consent for client image. If unsure: use animation/stock with 'example result' disclaimer. Avoid scale/weight-focus — show CAPABILITY gains.",
    media: [
      { src: "/images/studio/training-barbell-squat.jpg", label: "Week 1 squat", role: "primary" },
      { src: "/images/studio/training-squat-cinematic.jpg", label: "Week 12 squat" },
      { src: "/images/studio/training-dumbbells-power.jpg", label: "PR moment" },
      { src: "/images/studio/training-dumbbells-smile.jpg", label: "Success" },
    ],
  },

  // ─── INSTAGRAM · BEHIND SCENES ──────────────────────────────────────
  {
    id: "ig-bts-01",
    platform: "instagram",
    pillar: "behind-scenes",
    format: "Reel",
    title: "Reel — A day in the life of a PT",
    script: `Reel (60s):
[0-5s] 06:00 — Trainer arrives, doors open
[5-15s] 06:30-12:00 — Morning clients
[15-25s] 12:00 — Lunch + afternoon planning
[25-40s] 14:00-18:00 — Afternoon/evening clients
[40-50s] 19:00 — Last session of the day
[50-60s] 22:00 — Studio closes. CTA: "Want to become a trainer? sculptclub.nl/word-trainer"`,
    brief: {
      message: "Show what a full PT day looks like at SculptClub. Dual purpose: humanizes brand + speaks to potential trainers.",
      facts: [
        "Trainer sets own rate, hours, clients",
        "Trainer keeps 100% (rent-only model)",
        "Private studio, own profile on site",
        "Location: Jordaan",
      ],
      hookConcept: "A day in the life of a PT in the Jordaan",
      cta: `Become a trainer? ${FACTS.website}/word-trainer`,
      targetLength: "medium",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #dayinthelife #ptlife #amsterdamfitness #personaltrainingamsterdam #boutiquegym`,
    visualNote: "Authentic, no over-produce. One real PT day. Time-stamps on screen.",
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
    format: "Carousel",
    title: "Carousel — Real Google reviews",
    script: `Carousel:
1. Cover: "5.0 ⭐ on Google · What do our clients say?"
2-6. Five screenshots of real 5-star reviews (first name + initial only)
7. CTA: "Read all reviews on Google · sculptclub.nl"`,
    brief: {
      message: "Show 5.0 rating with real reviews as proof. For mid-funnel viewers with last doubt.",
      facts: [
        FACTS.rating,
        "Reviews are from real Google clients",
        "Privacy: only first name + initial shown",
      ],
      hookConcept: "Five reviews. Unedited.",
      cta: `Read on Google Maps · or book: ${FACTS.website}`,
      targetLength: "medium",
    },
    hashtags: `#googlereviews #5sterren #amsterdam #jordaan #personaltrainer #boutiquegym #fivestarservice #realreviews #amsterdamfitness`,
    visualNote: "Real Google review screenshots. Privacy: only first name + initial. Ask consent for specific reviews.",
    media: [
      { src: "/images/studio/training-dumbbells-joy.jpg", label: "Cover: happy client", role: "primary" },
      { src: "/images/studio/training-dumbbells-smile.jpg", label: "Real smile" },
      { src: "/images/studio/training-bike-smile.jpg", label: "Cardio happy" },
    ],
  },

  // ─── INSTAGRAM · COMMERCIAL-INTENT (AEO answer-format) ──────────────
  {
    id: "ig-aeo-cost",
    platform: "instagram",
    pillar: "social-proof",
    format: "Carousel",
    title: "Carousel — How much does PT cost in Amsterdam (2026)",
    script: `Carousel (8 slides — answer-engine optimized):
1. Cover: "Personal training in Amsterdam — what does it cost in 2026?"
2. Chain gyms (David Lloyd, Basic-Fit Premium): €70-100/session, contracts
3. Independent freelance PTs in studios: €45-95/session, no contract
4. SculptClub trainers: from €45/session · trainers set own rates · pay your trainer direct
5. Bullet table: low end (€45 Andrea, 45 min) → high end (€80 Sergei, 60 min) → premium specialism (Joey, Eva on request)
6. What's included: equipment, studio, programming, technique coaching, sometimes nutrition advice
7. Hidden costs to ASK about: session length difference (45 vs 60 min), package discounts, intake fee, cancellation policy
8. CTA: "First intake free at SculptClub · sculptclub.nl/vind-jouw-personal-trainer"`,
    brief: {
      message: "Cost transparency = trust. People search this exact query before booking — own the answer with HONEST framing including competitor range.",
      facts: [
        "Amsterdam PT market: €45-100/session typical",
        "Chain gyms typically require monthly membership ON TOP of session cost",
        "Freelance PTs in private studios: €45-95/session range",
        "SculptClub: from €45/session · first intake free · no contract",
        "Trainer-set rates · you pay your trainer direct, no middleman",
        "Session length varies: 45 min (Andrea) vs 60 min (most others)",
      ],
      hookConcept: "Honest comparison: what PT actually costs in Amsterdam (and what's hidden)",
      cta: `Compare trainer rates · ${FACTS.ptLanding}`,
      targetLength: "long",
    },
    hashtags: `#personaltrainer #amsterdam #personaltraineramsterdam #ptamsterdam #fitnesscost #amsterdamfitness #ptkosten #personaltrainingkosten #jordaan #fitnessbudget`,
    visualNote: "Information-dense but scannable. Light type, lots of whitespace. NUMBERS pop. This carousel is the closer for cost-conscious leads.",
    media: [
      { src: "/images/studio/power-rack.jpeg", label: "Cover: studio shot", role: "primary" },
      { src: "/images/studio/pt-session-barbell.jpg", label: "Session in action" },
      { src: "/images/studio/training-barbell-squat.jpg", label: "Technique" },
    ],
  },
  {
    id: "ig-aeo-howtofind",
    platform: "instagram",
    pillar: "social-proof",
    format: "Carousel",
    title: "Carousel — How to find a personal trainer in Amsterdam (2026)",
    script: `Carousel (9 slides — answer-engine optimized):
1. Cover: "How to find a personal trainer in Amsterdam — actually good one"
2. Step 1: Define what you want (strength · fat loss · posture · specialism)
3. Step 2: Check certification + experience (years working, specialism alignment)
4. Step 3: Free intake is non-negotiable — never pay to meet a PT
5. Step 4: Match languages (NL/EN at minimum; multilingual is plus)
6. Step 5: Studio matters too — private vs chain · 5-min walk vs cross-town
7. Step 6: Reviews on Google (not just Instagram clout)
8. Quick filter: SculptClub has 8 trainers across 5+ specialisms · free intake · NL/EN · 5⭐ on Google
9. CTA: "Use our trainer finder · sculptclub.nl/vind-jouw-personal-trainer"`,
    brief: {
      message: "How-to-find-PT is one of the highest-volume queries. Own it with a HONEST guide that incidentally points to our trainer finder.",
      facts: [
        "Step 1: Define your goal — match specialism, not vibes",
        "Step 2: Verify certification + years of experience",
        "Step 3: Free intake is industry standard — never pay just to meet",
        "Step 4: Language match prevents miscommunication on form cues",
        "Step 5: Studio location predicts attendance — pick within 10 min of home/work",
        "Step 6: Google reviews > Instagram followers as quality signal",
        "SculptClub: 8 trainers · 5+ specialisms · all free intake · NL+EN",
      ],
      hookConcept: "The 6 questions to ask before booking any PT in Amsterdam",
      cta: `Compare 8 trainers · ${FACTS.ptLanding}`,
      targetLength: "long",
    },
    hashtags: `#personaltrainer #amsterdam #personaltraineramsterdam #ptamsterdam #fitnessjordaan #amsterdamfitness #howtofindapt #ptzoeken #personaltrainerzoeken #jordaan`,
    visualNote: "Use checklist visuals — numbered, clean. Each step gets its own slide. No clipart. Photos of trainers from roster as visual anchors.",
    media: [
      { src: "/images/trainers/eva.jpg", label: "Trainer 1", role: "primary" },
      { src: "/images/trainers/alex.jpg", label: "Trainer 2" },
      { src: "/images/trainers/gezina.jpg", label: "Trainer 3" },
      { src: "/images/trainers/sergei.jpg", label: "Trainer 4" },
    ],
  },

  // ─── PAID ADS — META + TIKTOK ──────────────────────────────────────────
  // Operator-shared competitor ads 2026-05-16 inspired these.
  // Reference: thebodystudio.nl (Studio Rental, Instagram) used yellow/black
  // bold-overlay text + hand-drawn arrow + trainer-from-behind visual + dual
  // objection-killer copy ("Per uur mogelijk! Ook voor beginners").
  // Reference: saints-and-stars (Membership Gym, TikTok) used "50% OFF + bring
  // 10 friends for free" — multi-incentive value stack + premium aesthetic.
  // SculptClub's better deltas: €12/hr (genuinely cheap), full freedom for
  // trainers, free first intake, 5★ Google rating, boutique vs membership-mill.
  //
  // Per-ad specs include audience, budget, A/B variants, overlay-text style.
  // Operator copy-pastes these straight into Meta Ads Manager / TikTok Ads.

  {
    id: "ad-studio-01",
    platform: "instagram",
    pillar: "paid-ad",
    format: "Meta Photo Ad",
    title: "Ad — Studio rental yellow/black hook (counter-thebodystudio.nl)",
    script: `Single image, 1080×1350 (4:5 Instagram feed) OR 1080×1920 (Reels/Story).
Visual: trainer from behind, mid-session in SculptClub studio, canal-facing windows visible.
Overlay text (yellow background, black text, bold sans-serif, dual layer):
  Top stripe: "STUDIO HUREN PER UUR"
  Bottom stripe: "€12/uur · volledige vrijheid · ook voor beginnende trainers"
Hand-drawn white arrow pointing down at the trainer's shoulders (retro-authentic).
Operator face/avatar bottom-left + small "❤️" emoji (replicates the engagement-bait pattern).`,
    brief: {
      message: "Counter thebodystudio.nl's identical ad with a stronger value-prop. €12/hr is half their likely rate, plus full freedom (rent-only, trainer keeps 100%) is the SculptClub edge. Targets personal trainers across Amsterdam looking for hourly rental.",
      facts: [
        `Studio: ${FACTS.studio}`,
        "Rent-only model — trainer keeps 100% of PT income",
        "Available daily 06:30-22:00, hourly bookings, no contract",
        "Egelantiersgracht 424 — central Jordaan",
        "Free first test session for new trainers",
      ],
      hookConcept: "Bold yellow stripes over trainer-from-behind shot. Mimic the ad scroll-stop pattern verified by competitor; differentiate on price + freedom.",
      cta: `Bekijk studio + boek je gratis test: ${FACTS.studioLanding}`,
      targetLength: "short",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #studiohuren #ptamsterdam #personaltrainerwanted`,
    visualNote: "Photo with bold overlay text. Use Canva or Figma. Overlay style: yellow #FFD700 background blocks, black #000 text, Inter Black or Anton font. Arrow drawn freehand-style with brush tool (not vector-clean — feels authentic).",
    media: [
      { src: "/images/studio/portrait-entrance-warm.jpg", label: "Hero: trainer from behind", role: "primary" },
      { src: "/images/studio/pt-session-barbell.jpg", label: "Alt: mid-session shot" },
    ],
    adSpec: {
      objective: "leads",
      audience: "Personal trainers, 22-55, Amsterdam + 25km radius. Interests: PT certification orgs (NESTA, NASM, EFAA), fitness business, freelance work. Behaviors: small business owners. Exclude: existing customers list.",
      budget: "€10-15/day for 7-14 days; expect 3-8 qualified leads at €1.50-3.50 CPL",
      duration: "7 days minimum to escape learning phase; evaluate at €100 spend",
      landingUrl: "https://sculptclub.nl/nl/studio-huren?utm_source=meta&utm_medium=cpc&utm_campaign=studio-rental-trainers&utm_content=yellow-overlay",
      competitorRef: "thebodystudio.nl Instagram ad (Mar 11), yellow/black overlay + arrow + trainer-from-behind",
      overlayText: {
        headline: "STUDIO HUREN PER UUR",
        subheadline: "€12/uur · volledige vrijheid · ook voor beginnende trainers",
        style: "Two stacked yellow stripes (#FFD700), black bold text (Inter Black 80pt), white hand-drawn arrow pointing at trainer",
      },
      abVariants: [
        "Variant B: same visual, headline 'EERSTE SESSIE GRATIS · €12/uur daarna'",
        "Variant C: studio interior wide shot instead of trainer-from-behind, headline 'PRIVÉ STUDIO HUREN · €12/uur'",
      ],
    },
  },

  {
    id: "ad-studio-02",
    platform: "tiktok",
    pillar: "paid-ad",
    format: "TikTok Ad",
    title: "Ad — Studio rental UGC walk-through (15s)",
    script: `Format: TikTok Reel ad, 9:16 vertical, 15 seconds, native UGC feel (not over-produced).

[0-2s] Hook text: "Ik betaal €12/uur voor een privé studio in Amsterdam"
        Visual: trainer walks up to Egelantiersgracht 424 entrance with kettlebells
[2-5s]  Trainer (operator/Paulo or partner trainer) speaks to camera:
        "Volledige vrijheid, geen contract, gewoon een uur en je kan trainen"
[5-9s]  Quick cuts: open garage door → canal view → power rack → kettlebells →
        client mid-session
[9-12s] Trainer speaks again: "Mijn klant betaalt mij direct. Sculpt krijgt niets."
[12-15s] On-screen text: "Eerste sessie gratis · sculptclub.nl/studio-huren"
         CTA button: "Boek nu"`,
    brief: {
      message: "Native-feeling TikTok ad. Counter Saints-&-Stars's premium aesthetic with raw 'this is a real working trainer's space' authenticity. Mix the price-shock (€12/hr) with operator-trainer authenticity.",
      facts: [
        `Studio: ${FACTS.studio}`,
        "Rent-only — the trainer's PT income stays 100% theirs",
        "First test session FREE for new trainers",
        FACTS.address,
      ],
      hookConcept: "First-person 'I pay €12/hr' authenticity. Real trainer, real space, real numbers. UGC ads outperform polished ads 2-4x on TikTok for fitness vertical.",
      cta: `Plan je gratis testsessie: ${FACTS.studioLanding}`,
      targetLength: "short",
    },
    hashtags: `#personaltraineramsterdam #ptlife #fitnessbusiness #jordaan #amsterdamfitness`,
    visualNote: "Shot on iPhone, NO tripod, slight handheld feel. Operator face-on or partner trainer. Natural light from canal-side windows. Text overlay style: TikTok native (white text + black drop shadow, NOT Canva-style branding).",
    duration: "15s",
    media: [
      { src: "/images/studio/portrait-entrance-warm.jpg", label: "Entrance shot", role: "primary" },
      { src: "/images/studio/pt-session-barbell.jpg", label: "Mid-session" },
    ],
    adSpec: {
      objective: "traffic",
      audience: "TikTok: Amsterdam + 30km, age 22-50, interests fitness/wellness/personal training, behaviors small biz owners + fitness trainers. Exclude: app-installs (low-intent).",
      budget: "€8-12/day for 10-14 days; expect 30-60 LP visits at €0.30-0.50 CPC; 2-5 conversions",
      duration: "10 days minimum (TikTok algorithm needs ~7 days + 50 conversions to optimize)",
      landingUrl: "https://sculptclub.nl/nl/studio-huren?utm_source=tiktok&utm_medium=video&utm_campaign=studio-rental-ugc&utm_content=trainer-walkthrough",
      competitorRef: "Saints-&-Stars TikTok ad polished-premium aesthetic → counter with authentic UGC trainer-POV",
      overlayText: {
        headline: "Ik betaal €12/uur voor een privé studio in Amsterdam",
        subheadline: "Eerste sessie gratis · sculptclub.nl/studio-huren",
        style: "TikTok native text-overlay: white #FFF with black 1px stroke, Helvetica Now Bold 60pt, bottom-center positioning",
      },
      abVariants: [
        "Variant B: lead with client testimonial instead of trainer ('My PT trains me in a privé studio for €12/uur')",
        "Variant C: 30-sec longer version with full studio tour",
      ],
    },
  },

  {
    id: "ad-pt-01",
    platform: "instagram",
    pillar: "paid-ad",
    format: "Meta Reel Ad",
    title: "Ad — Free intake hero (counter-Saints-Stars 50% off mechanic)",
    script: `Format: Meta Reels Ad, 9:16 vertical, 12 seconds.

[0-2s] Hook bold text appears over slow-motion training shot:
        "EERSTE PT-INTAKE GRATIS"
        Sub: "1-op-1 · Privé studio in de Jordaan"
[2-5s] Quick cuts: trainer + client doing a deadlift teach, smile-after-set,
       canal view through window
[5-9s] Real trainer (Andrea or Eva — pick high-conversion trainer) speaks:
       "Boek gratis. Geen verplichting. Past niet? Geen probleem."
[9-12s] Final card: "Plan je intake · sculptclub.nl/eerste-bezoek"
        + 5★ rating badge corner-pin`,
    brief: {
      message: "Free-intake = SculptClub's strongest acquisition lever. Saints-&-Stars uses 50% off + 10 friends; SculptClub counters with 100% off first session + zero commitment. Frame as 'try-out without strings'.",
      facts: [
        "First intake is GRATIS (free) — €45/sessie regular",
        "1-on-1 with the trainer of your choice",
        "5★ rating on Google · 100% satisfaction or no obligation",
        "Privé studio · max 4 people in space · NEVER overcrowded",
      ],
      hookConcept: "'Free' beats '50% off' for first-time conversions in PT vertical. Saints-&-Stars's friend-multiplier is for mass-membership; SculptClub stays boutique-1-on-1.",
      cta: `Boek je gratis intake: sculptclub.nl/eerste-bezoek`,
      targetLength: "short",
    },
    hashtags: `#personaltraineramsterdam #jordaan #fitnessjordaan #gratisintake #amsterdamfitness`,
    visualNote: "Mix of slow-motion (240fps→24fps slowdown) for emotional shots + normal-speed for action. Color grade: warm tones (matches studio's lighting). Reel cover frame should be the smile-after-set + headline overlay.",
    duration: "12s",
    media: [
      { src: "/images/studio/training-dumbbells-joy.jpg", label: "Smile-after-set hero", role: "primary" },
      { src: "/images/studio/pt-session-barbell.jpg", label: "Deadlift teach" },
      { src: "/images/studio/training-bike-energy.jpg", label: "Energy moment" },
    ],
    adSpec: {
      objective: "leads",
      audience: "Meta: Amsterdam + 15km, age 25-55, interests fitness/health/weight loss/strength training, behaviors gym-goers + premium-brand shoppers. Exclude: existing customer list + people 18-22 (lower budget).",
      budget: "€15-20/day; expect 5-12 leads/day at €1.50-4 CPL",
      duration: "14 days first run; evaluate at €200 spend",
      landingUrl: "https://sculptclub.nl/nl/eerste-bezoek?utm_source=meta&utm_medium=reel&utm_campaign=free-intake-hero&utm_content=12s-reel",
      competitorRef: "Saints-&-Stars TikTok ad '50% OFF + 10 friends'; SculptClub counter = 100% off + zero obligation",
      overlayText: {
        headline: "EERSTE PT-INTAKE GRATIS",
        subheadline: "1-op-1 · Privé studio in de Jordaan",
        style: "Sans-serif Bold (Syne or Inter), color: white over dark-grade footage. Lower-third positioning. 5★ corner badge: gold #D4A437 stars + 5.0 number, top-right.",
      },
      abVariants: [
        "Variant B: lead with client transformation testimonial 30-sec instead of trainer-talk",
        "Variant C: still photo + same overlay (cheaper to produce, test Reel-vs-Photo)",
      ],
    },
  },

  {
    id: "ad-pt-02",
    platform: "instagram",
    pillar: "paid-ad",
    format: "Meta Carousel Ad",
    title: "Ad — '5★ social proof' carousel (mid-funnel doubt-killer)",
    script: `Format: Meta Carousel Ad, 1080×1080 square (works for Feed + Story).

Slide 1 (Cover): Studio entrance photo + overlay text:
  "5.0 ★ op Google · Boutique PT-studio in de Jordaan"
  Tap-arrow indicator bottom-right (Meta UI suggests swipe)

Slide 2: Google review screenshot — anonymized to "Sarah B." 5-star
  Overlay: "'In 8 weken nooit dezelfde sessie gehad — geen sportschool-energie'"

Slide 3: Google review screenshot — anonymized to "Marco V." 5-star
  Overlay: "'Privé studio is exactly what I wanted — no crowds, focused'"

Slide 4: Google review screenshot — anonymized to "Lisa T." 5-star
  Overlay: "'Andrea's vorm-correctie is wat ik nog nooit eerder kreeg'"

Slide 5: Trainer team photo (operator + Andrea + Eva + Dara group shot)
  Overlay: "4 specialisten · €45/sessie · gratis intake"

Slide 6 (CTA): Studio interior + bold "PLAN JE GRATIS INTAKE"
  Sub: "sculptclub.nl/eerste-bezoek"`,
    brief: {
      message: "Mid-funnel: viewer has SEEN the brand (saw Ad #1 or #3), now needs proof to convert. Real reviews from real Dutch clients. Position as 'we are not Saints-&-Stars or any chain — we are specialists'.",
      facts: [
        "5.0 ★ Google rating (publicly verifiable)",
        "Real reviews from real Amsterdam clients (consent for any specific quote)",
        "4 specialist trainers — each with different specialty (strength / nutrition / posture / small-group)",
        "Free intake — no charge for first appointment",
      ],
      hookConcept: "Stack 3-4 real reviews + trainer credentials = trust collapse-killer. Critical for ad-fatigued viewers who saw a hero ad but didn't click.",
      cta: `Plan je gratis intake: sculptclub.nl/eerste-bezoek`,
      targetLength: "medium",
    },
    hashtags: `#personaltraineramsterdam #5sterren #amsterdamfitness #jordaan #boutiquept #personaltrainerjordaan`,
    visualNote: "Real Google review screenshots with names obscured (privacy). Each slide design-consistent: SculptClub brand colors (#EF5012 accent, #F7F5F1 background), Syne serif for trainer name, Inter sans for review text.",
    media: [
      { src: "/images/studio/training-dumbbells-smile.jpg", label: "Cover: client smiling", role: "primary" },
      { src: "/images/studio/portrait-entrance-warm.jpg", label: "Trainer-team studio backdrop" },
    ],
    adSpec: {
      objective: "conversions",
      audience: "Retargeting: people who visited sculptclub.nl in last 30 days but didn't book. PLUS: lookalike-1% of existing customer list. Age 25-55, Amsterdam.",
      budget: "€8-12/day retargeting (smaller audience, higher LTV)",
      duration: "Always-on as retargeting backstop; refresh creative every 30 days",
      landingUrl: "https://sculptclub.nl/nl/eerste-bezoek?utm_source=meta&utm_medium=carousel&utm_campaign=social-proof&utm_content=5star-reviews",
      competitorRef: "n/a — this is retargeting-funnel content, not competitor-driven",
      overlayText: {
        headline: "5.0 ★ op Google · Boutique PT-studio in de Jordaan",
        subheadline: "Plan je gratis intake",
        style: "White Syne serif text over photo, dark scrim 30% opacity underneath for readability",
      },
      abVariants: [
        "Variant B: video carousel (each slide a 3-sec micro-clip of client+trainer instead of static)",
        "Variant C: only 3 slides (reviews only, no trainer slide) — simpler is sometimes better",
      ],
    },
  },

  {
    id: "ad-opengym-01",
    platform: "tiktok",
    pillar: "paid-ad",
    format: "TikTok Ad",
    title: "Ad — Open Gym first-session-free TikTok (price-shock)",
    script: `Format: TikTok Reel ad, 9:16 vertical, 10 seconds.

[0-2s] Big number on-screen: "€7.25"
       Background: empty studio at sunrise through canal windows
[2-4s] Number shrinks, new headline appears: "per sessie · €29/4 weken"
       Cut to: kettlebell-swing close-up
[4-7s] Quick reveal: empty studio → trainer-arrived → racks-up dumbbells
       On-screen counter: "max 4 personen tegelijk"
[7-10s] Final card: "EERSTE SESSIE GRATIS · sculptclub.nl/open-gym"
        TikTok CTA: "Book now"`,
    brief: {
      message: "Open Gym is SculptClub's volume play — €7.25/sessie undercuts Saints-&-Stars even after their 50% off (€69 → €34.50/4-weken = €8.62/sessie, still higher than SculptClub's €7.25). Lead with the number, hammer the privacy advantage.",
      facts: [
        "Open Gym: €29/4-weken Instapplan (€7.25/sessie)",
        "Always free first test session",
        "Max 4 people at a time in studio — never overcrowded",
        "No contract · cancel anytime · daily 06:30-22:00",
      ],
      hookConcept: "Numbers-only opener (€7.25). Beats Saints-&-Stars even at their 50%-off price. Emphasize boutique scarcity (max 4).",
      cta: `Boek je gratis testsessie: sculptclub.nl/open-gym`,
      targetLength: "short",
    },
    hashtags: `#opengymamsterdam #€7sessie #boutiquegym #amsterdamfitness #jordaangym`,
    visualNote: "Bold number-first TikTok hook. Helvetica Black 200pt for the €7.25 figure. Studio shots: sunrise = warm/golden, makes the price-tag feel premium-yet-accessible.",
    duration: "10s",
    media: [
      { src: "/images/studio/portrait-entrance-warm.jpg", label: "Sunrise entrance", role: "primary" },
      { src: "/images/studio/training-bike-energy.jpg", label: "Cardio active" },
    ],
    adSpec: {
      objective: "conversions",
      audience: "TikTok: Amsterdam + 20km, age 22-45, interests fitness/gym/wellness, behaviors fitness-class attendees + value-conscious shoppers. Exclude: 18-22 (different price point).",
      budget: "€10/day for 14 days; expect 5-15 conversions at €15-25 CPA (€29 sub × 80% net = €23 LTV first month, breaks even quickly)",
      duration: "14 days; review at €140 spend",
      landingUrl: "https://sculptclub.nl/nl/open-gym?utm_source=tiktok&utm_medium=video&utm_campaign=open-gym-price-shock&utm_content=€7.25-hook",
      competitorRef: "Saints-&-Stars membership pricing (likely €60-90/maand) — SculptClub Open Gym is genuinely cheaper",
      overlayText: {
        headline: "€7,25",
        subheadline: "per sessie · €29 voor 4 weken · max 4 personen",
        style: "Massive Helvetica Black 200pt for €7,25, then 60pt subheadline. White text with subtle drop shadow. TikTok-native style.",
      },
      abVariants: [
        "Variant B: lead with 'EERSTE SESSIE GRATIS' instead of price (test which message converts better)",
        "Variant C: 20-sec version with client testimonial mid-clip",
      ],
    },
  },

  {
    id: "ad-trainer-referral-01",
    platform: "instagram",
    pillar: "paid-ad",
    format: "Meta Reel Ad",
    title: "Ad — 'Bring a friend' multiplier (Saints-&-Stars inspired)",
    script: `Format: Meta Reels Ad, 9:16 vertical, 12 seconds.

[0-3s] Hook text bouncing in:
        "Vriend mag mee voor zijn 1e sessie GRATIS"
        Visual: two friends entering Egelantiersgracht 424 together
[3-6s] Both train side-by-side — supervised by single trainer
        Overlay: "Train samen · of apart · jij kiest"
[6-9s] Trainer (operator or Andrea) speaks to camera:
       "Eerste intake gratis. Vriend ook. Daarna €45 per sessie."
[9-12s] Final card: "Plan jullie intake · sculptclub.nl/eerste-bezoek"
        CTA: "Boek nu" (Meta button)`,
    brief: {
      message: "Saints-&-Stars's 'bring 10 friends for free' works because it's a value-stack + viral mechanic. SculptClub's boutique version: bring ONE friend (not 10) — quality over quantity. Maintains 1-on-1 trainer ratio.",
      facts: [
        "Free first intake — also for the friend",
        "Sessions €45/each after intake (no per-friend surcharge)",
        "Train together or separately — operator's choice",
        "Boutique = max 4 people in space at once",
      ],
      hookConcept: "Reduce the viral-multiplier from 10x (chain-gym) to 1+1 (boutique). Adds social proof + reduces 'I'll go alone' anxiety.",
      cta: `Plan jullie intake: sculptclub.nl/eerste-bezoek`,
      targetLength: "short",
    },
    hashtags: `#personaltraineramsterdam #vriendmee #fitnessduo #jordaan #amsterdamfitness #boutiquept`,
    visualNote: "Casting: 2 friends (operator's existing customer base — ask consent). NOT 2 models — authentic. Edit pace medium (not TikTok-frantic, not Reel-slow). Color grade warm.",
    duration: "12s",
    media: [
      { src: "/images/studio/training-dumbbells-joy.jpg", label: "Hero: clients smiling", role: "primary" },
      { src: "/images/studio/portrait-entrance-warm.jpg", label: "Entrance arrival" },
    ],
    adSpec: {
      objective: "leads",
      audience: "Meta: Amsterdam + 15km, age 25-50, interests fitness/wellness/group fitness, behaviors fitness gift purchasers + relationship-status engaged or in-relationship. Lookalike of recent paid customers.",
      budget: "€12/day for 10 days",
      duration: "10 days; evaluate at €120 spend",
      landingUrl: "https://sculptclub.nl/nl/eerste-bezoek?utm_source=meta&utm_medium=reel&utm_campaign=bring-a-friend&utm_content=duo-trainer",
      competitorRef: "Saints-&-Stars '50% off + 10 friends free' multi-incentive value stack",
      overlayText: {
        headline: "Vriend mag mee voor zijn 1e sessie GRATIS",
        subheadline: "Daarna €45/sessie · samen of apart",
        style: "Sans-serif Inter Bold 70pt white text, drop shadow, bouncing animation on entrance (Meta-native style)",
      },
      abVariants: [
        "Variant B: only headline 'EERSTE INTAKE GRATIS · vriend mag mee' (simpler)",
        "Variant C: photo carousel instead of video (cheaper to produce)",
      ],
    },
  },

  {
    id: "ad-brand-01",
    platform: "instagram",
    pillar: "paid-ad",
    format: "Meta Reel Ad",
    title: "Ad — Brand-awareness Jordaan-positioning (top-of-funnel)",
    script: `Format: Meta Reels Ad, 9:16 vertical, 15 seconds.

[0-2s] Aerial-style canal shot (or close-up of Egelantiersgracht canal at sunrise)
       Overlay fade-in: "Stop met sportscholen vol mensen die je niet kent."
[2-5s] Cut to: walking up to Egelantiersgracht 424 entrance
       Studio garage door opens into a clean private space
[5-9s] Quick montage: trainer + client lifting, kettlebell swing, canal view
       through window, weight rack close-up
[9-12s] Trainer voice-over (English subs):
        "Privé studio in de Jordaan · 1-op-1 of small group · max 4 personen"
[12-15s] Final card: brand mark + "sculptclub.nl"
         Sub: "5★ op Google · Egelantiersgracht 424"`,
    brief: {
      message: "Top-of-funnel brand-awareness. Position SculptClub as the anti-chain-gym for Amsterdam fitness-conscious people. Run alongside performance ads to build saved-followers + ad-recall.",
      facts: [
        FACTS.address,
        "Max 4 people in studio at once",
        "5★ Google rating",
        "Premier boutique PT studio in the Jordaan",
      ],
      hookConcept: "'Stop with crowded gyms' = anti-thesis pitch. Saints-&-Stars optimizes for 'membership + bring friends'; SculptClub optimizes for 'finally a space that's MINE'.",
      cta: `sculptclub.nl`,
      targetLength: "medium",
    },
    hashtags: `#amsterdamfitness #jordaan #privégym #boutiquept #amsterdam #personaltraineramsterdam #sculptclub`,
    visualNote: "Highest production quality of all ads. Color-graded warm Jordaan-light. Voice-over by operator (Paulo) in clear Dutch with English subs auto-overlay (Meta supports). Music: low-BPM ambient, NOT pump-up.",
    duration: "15s",
    media: [
      { src: "/images/studio/portrait-entrance-warm.jpg", label: "Sunrise entrance", role: "primary" },
      { src: "/images/studio/pt-session-barbell.jpg", label: "Mid-session" },
      { src: "/images/studio/training-dumbbells-joy.jpg", label: "Client joy" },
    ],
    adSpec: {
      objective: "awareness",
      audience: "Meta: Amsterdam + 25km, age 25-55, all genders, broad targeting. Layer: fitness-interested OR wellness-interested OR luxury-brand shoppers. NO specific behavior filter (top-of-funnel = broad).",
      budget: "€5-8/day always-on; brand-awareness compounds over months",
      duration: "30+ day campaigns; refresh creative monthly",
      landingUrl: "https://sculptclub.nl/?utm_source=meta&utm_medium=reel&utm_campaign=brand-awareness&utm_content=jordaan-positioning",
      competitorRef: "All chain-gyms with mass-membership positioning — SculptClub positions as the anti-thesis",
      overlayText: {
        headline: "Stop met sportscholen vol mensen die je niet kent.",
        subheadline: "sculptclub.nl · 5★ op Google · Egelantiersgracht 424",
        style: "Syne serif headline 60pt white text over dark color grade. Subheadline Inter regular 30pt.",
      },
      abVariants: [
        "Variant B: 30-sec longer version with full studio walkthrough",
        "Variant C: photo-only static (cheaper, test if motion matters for brand)",
      ],
    },
  },

  {
    id: "ad-studio-03",
    platform: "instagram",
    pillar: "paid-ad",
    format: "Meta Photo Ad",
    title: "Ad — Studio rental SHOCK price (€12/uur, scroll-stop)",
    script: `Single image, 1080×1350 (4:5 Instagram feed).

Visual: studio interior wide-angle, natural canal-window light, kettlebells + power rack visible.

Overlay text (bold, full-width black bar at top + bottom):
  Top bar: "€12 PER UUR"
  Bottom bar: "Volledige vrijheid · Privé studio · Amsterdam Jordaan"

Center-screen: large yellow circle with "+ EERSTE TEST GRATIS" inside
(stops the scroll — yellow circle + black bars = high contrast)`,
    brief: {
      message: "Maximum scroll-stop. €12/uur is genuinely cheap for Amsterdam studio rental — typical rate €25-45/hr at private gyms. Lead with the number, layer the full-freedom (rent-only) as kicker.",
      facts: [
        "€12/uur half-studio (the deal sweet spot)",
        "Rent-only — trainer keeps 100% of PT income",
        "First test session free",
        FACTS.address,
        "Daily 06:30-22:00 availability",
      ],
      hookConcept: "Aggressive price-anchor. €12 looks too good — viewer hits the link to verify. Conversion happens on landing page.",
      cta: `Bekijk studio: ${FACTS.studioLanding}`,
      targetLength: "short",
    },
    hashtags: `#studiohurenamsterdam #pthuur #ptamsterdam #€12peruur #jordaan`,
    visualNote: "High-contrast graphic-design ad. NOT a photo with overlay — a designed graphic with photo background. Use Canva or Figma. Black bars: solid #000, yellow circle: #FFD700, white text inside circle.",
    media: [
      { src: "/images/studio/pt-session-barbell.jpg", label: "Studio interior wide", role: "primary" },
    ],
    adSpec: {
      objective: "traffic",
      audience: "Same as ad-studio-01: PT certifications, Amsterdam + 25km, 22-55, fitness-business-owner behavior.",
      budget: "€8-12/day, 7-14 days",
      duration: "7 days first; evaluate at €70 spend",
      landingUrl: "https://sculptclub.nl/nl/studio-huren?utm_source=meta&utm_medium=image&utm_campaign=studio-rental-shock-price&utm_content=€12-graphic",
      competitorRef: "thebodystudio.nl Instagram ad — same target audience, weaker price",
      overlayText: {
        headline: "€12 PER UUR",
        subheadline: "Volledige vrijheid · Privé studio · Amsterdam Jordaan",
        style: "Top + bottom solid black bars, white Helvetica Bold 80pt headline. Center yellow circle 30% of image height, black text 40pt 'EERSTE TEST GRATIS'.",
      },
      abVariants: [
        "Variant B: replace circle with arrow pointing to subhead (closer to thebodystudio.nl visual lang)",
        "Variant C: change headline to 'STUDIO VANAF €12/UUR · TEST GRATIS' (kicker integrated)",
      ],
    },
  },
];

export const PILLARS = [
  { id: "all" as const, label: "All pillars", count: SOCIAL_IDEAS.length },
  { id: "studio-tour" as Pillar, label: "Studio tour", count: SOCIAL_IDEAS.filter(i => i.pillar === "studio-tour").length },
  { id: "pt-showcase" as Pillar, label: "PT showcase", count: SOCIAL_IDEAS.filter(i => i.pillar === "pt-showcase").length },
  { id: "trainer-spotlight" as Pillar, label: "Trainer spotlight", count: SOCIAL_IDEAS.filter(i => i.pillar === "trainer-spotlight").length },
  { id: "before-after" as Pillar, label: "Before/after", count: SOCIAL_IDEAS.filter(i => i.pillar === "before-after").length },
  { id: "fitness-tip" as Pillar, label: "Fitness tips", count: SOCIAL_IDEAS.filter(i => i.pillar === "fitness-tip").length },
  { id: "behind-scenes" as Pillar, label: "Behind the scenes", count: SOCIAL_IDEAS.filter(i => i.pillar === "behind-scenes").length },
  { id: "jordaan-local" as Pillar, label: "Jordaan local", count: SOCIAL_IDEAS.filter(i => i.pillar === "jordaan-local").length },
  { id: "social-proof" as Pillar, label: "Social proof", count: SOCIAL_IDEAS.filter(i => i.pillar === "social-proof").length },
  { id: "paid-ad" as Pillar, label: "Paid ads", count: SOCIAL_IDEAS.filter(i => i.pillar === "paid-ad").length },
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
  "paid-ad": "broad",
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
  { weekday: 1, weekdayLabel: "Monday", bestTime: "19:30", platform: "instagram", weekNumber: 1, ideaId: "ig-tour-01", rationale: "Week starts with the visual baseline — studio carousel sets the tone." },
  { weekday: 3, weekdayLabel: "Wednesday", bestTime: "12:30", platform: "tiktok", weekNumber: 1, ideaId: "tt-pt-01", rationale: "Demand-side PT showcase during lunch-scroll." },
  { weekday: 5, weekdayLabel: "Friday", bestTime: "19:00", platform: "tiktok", weekNumber: 1, ideaId: "tt-tip-01", rationale: "Fitness tip on Friday evening — people plan weekend training." },
  { weekday: 7, weekdayLabel: "Sunday", bestTime: "11:00", platform: "instagram", weekNumber: 1, ideaId: "ig-spotlight-andrea", rationale: "Sunday morning feed-scroll. Trainer spotlight builds trust." },

  { weekday: 1, weekdayLabel: "Monday", bestTime: "19:30", platform: "tiktok", weekNumber: 2, ideaId: "tt-tour-02", rationale: "5-things format scores high on TikTok." },
  { weekday: 3, weekdayLabel: "Wednesday", bestTime: "12:30", platform: "instagram", weekNumber: 2, ideaId: "ig-pt-01", rationale: "Price-explanation carousel answers the silver-bullet question." },
  { weekday: 5, weekdayLabel: "Friday", bestTime: "19:00", platform: "tiktok", weekNumber: 2, ideaId: "tt-spotlight-eva", rationale: "Trainer spotlight Eva (dietitian + PT) — unique combination." },
  { weekday: 7, weekdayLabel: "Sunday", bestTime: "11:00", platform: "instagram", weekNumber: 2, ideaId: "ig-local-01", rationale: "Jordaan morning Reel — local brand relevance." },

  { weekday: 1, weekdayLabel: "Monday", bestTime: "19:30", platform: "instagram", weekNumber: 3, ideaId: "ig-tip-02", rationale: "5-mistakes carousel addresses booking objections." },
  { weekday: 3, weekdayLabel: "Wednesday", bestTime: "12:30", platform: "tiktok", weekNumber: 3, ideaId: "tt-pt-02", rationale: "Pricing video converts mid-funnel viewers." },
  { weekday: 5, weekdayLabel: "Friday", bestTime: "19:00", platform: "tiktok", weekNumber: 3, ideaId: "tt-spotlight-alex", rationale: "Trainer spotlight Alex — niche reach via #calisthenics." },
  { weekday: 7, weekdayLabel: "Sunday", bestTime: "11:00", platform: "instagram", weekNumber: 3, ideaId: "ig-proof-01", rationale: "Social proof carousel for people with last doubts." },

  { weekday: 1, weekdayLabel: "Monday", bestTime: "19:30", platform: "tiktok", weekNumber: 4, ideaId: "tt-bts-01", rationale: "Behind-the-scenes morning — humanizes the brand." },
  { weekday: 3, weekdayLabel: "Wednesday", bestTime: "12:30", platform: "instagram", weekNumber: 4, ideaId: "ig-tip-01", rationale: "Hip mobility tip — strong save-rate retention." },
  { weekday: 5, weekdayLabel: "Friday", bestTime: "19:00", platform: "instagram", weekNumber: 4, ideaId: "ig-spotlight-dara", rationale: "Trainer spotlight Dara (small group) — differentiator." },
  { weekday: 7, weekdayLabel: "Sunday", bestTime: "11:00", platform: "instagram", weekNumber: 4, ideaId: "ig-local-02", rationale: "Jordaan spots guide — broad appeal." },
];

export const STRATEGY_SUMMARY = {
  headline: "Strategy: 60% demand · 30% supply · 10% broad",
  body: `Google Ads runs 75% Studio (€15/day) and 25% PT (€5/day). But social content follows a DIFFERENT balance:

→ 60% demand-side (PT showcases · trainer spotlights · fitness tips · before/after · social proof) — drives PT bookings, because consumers are ~50× more numerous than potential studio renters.

→ 30% supply-side (studio tour · behind-the-scenes) — builds awareness with trainers + people who want to rent the gym.

→ 10% broad (Jordaan local · brand) — local-search relevance, serves both audiences.

Why not match the ad-budget ratio? Because ads buy intent at moment-of-search, and social builds trust over weeks. Trainers find rental space via LinkedIn + word-of-mouth + industry channels — not via TikTok. PT content secondarily attracts trainers too ("they coach well here, I'd want to work here").`,
  cadence: "4 posts/week — Monday 19:30, Wednesday 12:30, Friday 19:00, Sunday 11:00 (Amsterdam time).",
  rotation: "4-week rotation = 16 posts/month. Pillars alternate so no two similar posts back-to-back.",
};

export interface CompetitorLearning {
  brand: string;
  platform: string;
  ad: string;
  worked: string;
  applyToSculptClub: string;
  ourBetterAngle: string;
}

export const COMPETITOR_LEARNINGS: CompetitorLearning[] = [
  {
    brand: "thebodystudio.nl",
    platform: "Instagram (ad observed 2026-05-16, posted 11 March)",
    ad: "Trainer-from-behind photo. Bold yellow/black overlay text 'RUIMTE VERHUUR VOOR PERSONAL TRAINER · PER UUR MOGELIJK! OOK VOOR BEGINNERS'. Hand-drawn white arrow pointing at trainer. CTA: 'Learn more'. Caption: 'Personal trainer! Opzoek naar een fijne plek om te trainen met jouw klanten? - Vanaf 1 klant kan je bij ons terecht...'. 60 likes, 7 comments, 17 shares.",
    worked: "Yellow/black contrast = high scroll-stop. Hand-drawn arrow = retro-authentic. Trainer-from-behind = viewer projects themselves into the role. Dual objection-killer copy ('per uur' + 'voor beginners') addresses two common hesitations in one line.",
    applyToSculptClub: "Replicate the bold-overlay + arrow visual pattern for SculptClub studio-rental ads. See ad-studio-01 + ad-studio-03 for the implementation.",
    ourBetterAngle: "€12/uur (lower than typical Amsterdam private-gym rate of €25-45) + volledige vrijheid (eigen tarief, eigen klanten) + first test GRATIS. Stronger value-prop than thebodystudio.nl on every axis.",
  },
  {
    brand: "Saints & Stars",
    platform: "TikTok (ad observed 2026-05-16)",
    ad: "Premium aesthetic — two fitness models on club-lit treadmills. Huge text 'CLAIM THE DEAL · GET 50% OFF · (& BRING 10 FRIENDS FOR FREE)'. Tagline: 'NEXT LEVEL GYM'. CTA: 'Start training today >'. Caption: 'Start your first 4 weeks at 50% and unlock unlimited workouts, 10 guest passes & exclusive perks.' 14 hearts, 3 saves.",
    worked: "Value-stack copy (50% off + 10 friends free + exclusive perks) creates multi-incentive appeal. Premium aesthetic positions brand as aspirational. 'Bring friends' = viral mechanic (each customer brings 10 = de-facto referral program). 'NEXT LEVEL GYM' = positioning claim.",
    applyToSculptClub: "Adapt the multi-incentive value-stack pattern, scaled to boutique. SculptClub's 'bring 10 friends' = 'bring 1 friend free' (preserves 1-on-1 ratio). 'NEXT LEVEL GYM' becomes 'PREMIER PRIVÉ GYM IN DE JORDAAN'. See ad-trainer-referral-01 + ad-pt-01 + ad-brand-01.",
    ourBetterAngle: "100% off first session (vs Saints-&-Stars 50% off subscription). Boutique 1-on-1 vs membership-mill. 5★ Google rating vs unknown rating. Eerste intake gratis + €45/sessie daarna is genuinely cheaper than Saints-&-Stars €60-90/maand membership for low-frequency trainers.",
  },
];

export const PAID_ADS_STRATEGY = {
  headline: "Paid ads strategy — operator-shared competitor reference, 2026-05-16",
  body: `Two competitor ads observed:
1. thebodystudio.nl (Studio Rental, Instagram) — yellow/black bold-overlay + arrow
2. Saints & Stars (Membership Gym, TikTok) — '50% off + 10 friends free' value-stack

Both work because they: (a) scroll-stop with visual contrast or value-stack, (b) include a specific number, (c) close with a clear CTA verb. SculptClub's 8 ads in this library replicate those patterns with a STRONGER value-prop (genuinely cheaper, more specific, more authentic).

Budget recommendation (operator runs in Meta Ads Manager + TikTok Ads Manager):
- €5-10/day on brand-awareness (ad-brand-01) — always-on
- €15-20/day on free-intake hero (ad-pt-01) — primary lead-gen
- €10-15/day on studio rental (ad-studio-01 or 03) — when trainer-supply is needed
- €8-12/day on retargeting (ad-pt-02 5★ social-proof) — always-on backstop
- €10/day Open Gym shock-price (ad-opengym-01) — volume play

Total starter budget: ~€50-70/day = €1500-2100/maand. Expected CPL €1.50-4 = 13-46 leads/day = 400-1400 leads/maand. At 5% intake→paid conversion = 20-70 paid customers/maand.`,
  competitorsTracked: COMPETITOR_LEARNINGS,
  adIds: ["ad-studio-01", "ad-studio-02", "ad-studio-03", "ad-pt-01", "ad-pt-02", "ad-opengym-01", "ad-trainer-referral-01", "ad-brand-01"],
};
