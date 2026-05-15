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
export type PostFormat = "TikTok Video" | "Reel" | "Carousel" | "Photo Post" | "Story";
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
}

const FACTS = {
  address: "Egelantiersgracht 424, Jordaan, Amsterdam",
  hours: "Daily 06:30 – 22:00",
  pt: "from €45/session · free intake",
  studio: "from €12 per 60 min",
  openGym: "from €5.75 per session",
  rating: "5.0 ⭐ on Google",
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
[22-32s] #3: 0% commission for trainers
[32-42s] #2: Private — just you + your trainer
[42-55s] #1: ${FACTS.hours}
[55-60s] CTA: First intake free`,
    brief: {
      message: "List format: 5 things people are surprised by on their first visit.",
      facts: [
        "Garage door opens directly onto the canal (summer mode)",
        "No membership — book per hour",
        "0% commission for trainers means honest pricing",
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
      hookConcept: "What a real PT session actually looks like",
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
        "0% commission — price = what the trainer earns",
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
      hookConcept: "Meet Alex — strength + calisthenics trainer",
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
      hookConcept: "Our trainer is also a registered dietitian",
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
      hookConcept: "3 squat mistakes we see every week",
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
      hookConcept: "Stop doing sit-ups. Try this instead.",
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
[32-42s] Trainer: "0% commission = time for clients"
[42-52s] Show: review screenshot 3
[52-60s] CTA: "Book your own experience · sculptclub.nl"`,
    brief: {
      message: "Social proof: show the 5.0 stars are real + explain why (no marketing trick).",
      facts: [
        FACTS.rating,
        "0% commission means trainers have time for clients",
        "No marketing team — just real service",
      ],
      hookConcept: "Why our Google rating actually stays at 5.0",
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
        "0% commission for trainers",
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
        "0% commission",
        "First intake free",
      ],
      hookConcept: "What do you actually get for €45?",
      cta: FACTS.ptLanding,
      targetLength: "long",
    },
    hashtags: `#personaltrainer #amsterdam #jordaan #personaltraining #ptamsterdam #pricetransparency #fitnesscoach #strengthtraining #amsterdamlife`,
    visualNote: "Consistent visual style across 7 slides. Brand color (#134DE1) on swipe indicator.",
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
      hookConcept: "What a real PT session looks like at our gym",
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
      hookConcept: "Meet Andrea — strength, posture, technique",
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
      hookConcept: "Dara — personal training and small groups",
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

  // ─── INSTAGRAM · FITNESS TIPS ───────────────────────────────────────
  {
    id: "ig-tip-01",
    platform: "instagram",
    pillar: "fitness-tip",
    format: "Reel",
    title: "Reel — 3 hip mobility drills",
    script: `Reel (45s):
[0-3s] Hook: "Hip pain on squats? Start here."
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
      hookConcept: "Good morning from the Jordaan",
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
        "0% commission",
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
      hookConcept: "What clients actually say on Google",
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
