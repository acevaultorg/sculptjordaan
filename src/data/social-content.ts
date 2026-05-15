// Social content library for SculptClub TikTok + Instagram
// All copy ready to post — uses real SculptClub facts (CLAUDE.md):
// - Egelantiersgracht 424, Jordaan, Amsterdam
// - PT from €45 (gratis intake), Open Gym €5.75-7.25/session, Studio €12+/60min
// - 5.0 stars on Google, daily 06:30-22:00, 4 trainers
// - Hashtags balance #amsterdam #jordaan local with niche fitness tags
// - Each idea is shootable in <60 min with one phone

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
  /** "primary" = best fit for the main shot; "supporting" = b-roll / carousel slide */
  role?: "primary" | "supporting";
}

export interface SocialIdea {
  id: string;
  platform: Platform;
  pillar: Pillar;
  title: string;
  hook: string;
  script: string;
  caption: string;
  hashtags: string;
  visualNote: string;
  duration?: string;
  /** Curated assets from public/images. Operator clicks to download + use. */
  media?: MediaAsset[];
}

export const SOCIAL_IDEAS: SocialIdea[] = [
  // ─── TIKTOK · STUDIO TOUR ───────────────────────────────────────────
  {
    id: "tt-tour-01",
    platform: "tiktok",
    pillar: "studio-tour",
    title: "60-second studio walkthrough",
    hook: "POV: je vindt een private gym in de Jordaan voor €12/uur",
    script: `[0-3s] Hook: walk through the door, "POV: private gym in Jordaan voor €12/uur"
[3-8s] Pan over Rogue power rack — "echte rack, geen plastic"
[8-15s] Show de barbells + bumper plates — "tot 200kg gewicht"
[15-22s] Cardio corner: Echo Bike + sled — "conditie & power"
[22-30s] Squat rack + mirrors — "perfect voor PT sessies"
[30-40s] Show de garage door open op de gracht — "Egelantiersgracht 424"
[40-50s] Snel door alle hoekjes — beats of music
[50-60s] CTA op screen: "Boek via sculptclub.nl · 5.0 ⭐ Google"`,
    caption: `Onze studio in de Jordaan vanaf €12 per uur 🔑

→ Privé gym, geen lopende leden
→ Echte Rogue power rack + barbells
→ Egelantiersgracht 424, midden in de Jordaan
→ Dagelijks open 06:30 – 22:00

Boek via link in bio of sculptclub.nl`,
    hashtags: `#amsterdam #jordaan #gymamsterdam #privegym #personaltraining #fitnessamsterdam #boutiquegym #studiohuren #amsterdamfitness #jordaanlocal`,
    visualNote: "Film overdag met natuurlijk licht. Music: upbeat trending sound (Reels Trending in NL). Geen voice-over nodig — alles op screen text.",
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
    title: "5 dingen die je niet verwacht in onze gym",
    hook: "5 dingen die niemand verwacht in onze gym in de Jordaan",
    script: `[0-3s] Hook: "5 dingen die niemand verwacht in onze gym"
[3-12s] #5: Garage door direct op de gracht — "open in de zomer"
[12-22s] #4: Geen abonnement nodig — "€12/uur, klaar"
[22-32s] #3: 0% commissie voor trainers — "trainers houden alles zelf"
[32-42s] #2: Privé — "alleen jij en je trainer"
[42-55s] #1: Open elke dag 06:30 tot 22:00 — "kom voor werk, na werk, wanneer het jou uitkomt"
[55-60s] CTA: "Eerste intake is gratis · sculptclub.nl"`,
    caption: `5 dingen waar mensen verbaasd over zijn als ze onze studio voor het eerst zien 👇

Geen ketenroutine, geen abonnementsdruk, geen wachten op een rack. Dat is precies waarom we hier zijn.

📍 Egelantiersgracht 424, Jordaan
⏰ Dagelijks 06:30–22:00
⭐ 5,0 op Google`,
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
    title: "Echte 1-op-1 sessie (geen acteer)",
    hook: "Hoe een echte personal training sessie eruit ziet",
    script: `[0-3s] Hook tekst: "Geen voorgeprogrammeerde Instagram-workout"
[3-10s] Trainer + klant beginnen met dynamische warming-up
[10-20s] Coaching moment — trainer corrigeert techniek
[20-30s] Klant zet PR — gefilmd vanaf squat hoek
[30-40s] Trainer + klant high-five, eerlijke reactie
[40-50s] Cooldown + gesprek over progressie
[50-60s] Text op screen: "Vanaf €45/sessie · Gratis intake · sculptclub.nl"`,
    caption: `Echt. Niet voorgeprogrammeerd.

Bij SculptClub bepaalt jouw trainer wat jij vandaag nodig hebt — niet een algoritme.

✓ 1-op-1 aandacht
✓ Echt coachen, geen tellen
✓ Gratis intake
✓ Vanaf €45 per sessie

Boek je gratis intake via sculptclub.nl/vind-jouw-personal-trainer`,
    hashtags: `#personaltrainer #personaltraining #amsterdam #jordaan #fitnessmotivation #strengthtraining #gymlife #amsterdamfitness #pt #fitnesscoach`,
    visualNote: "Real client (consent eerst!). Multi-angle: vaste cam op statief + handheld voor coach close-ups. Niet over-editen.",
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
    script: `[0-3s] Hook: "€45 voor een PT — wat krijg je daarvoor?"
[3-10s] Lijst-stijl: Item 1 — "Coach die naar je luistert"
[10-17s] Item 2 — "Programma op maat, geen sjabloon"
[17-24s] Item 3 — "Live techniek-correcties"
[24-31s] Item 4 — "Voedingsadvies indien gewenst"
[31-38s] Item 5 — "Volgende sessie aangepast op jouw progressie"
[38-50s] Bonus: "Eerste intake is gratis"
[50-60s] CTA: "Vind jouw trainer — sculptclub.nl"`,
    caption: `Voor €45 krijg je geen ketenwerk.

Je krijgt iemand die:
→ Naar je luistert
→ Een programma maakt dat bij jouw lichaam past
→ Live je techniek bijstuurt
→ De volgende sessie aanpast op wat vandaag gebeurde

Bij SculptClub bepalen trainers hun eigen tarief, 0% commissie. De prijs die je ziet is wat de trainer krijgt.

Eerste intake gratis. Geen contract.`,
    hashtags: `#personaltrainer #amsterdam #jordaan #pricetransparency #fitnessamsterdam #ptlife #strengthcoach #amsterdamlife #fitnessjourney`,
    visualNote: "Tekst-driven video, lijst-stijl met snelle cuts. Achtergrond: trainer aan het coachen / studio shots tussen items.",
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
    title: "Meet Alex (Strength · Calisthenics · NL/EN/PT)",
    hook: "Meet Alex — onze strength + calisthenics trainer",
    script: `[0-3s] Alex looking at camera, "Hi, I'm Alex"
[3-10s] B-roll: Alex coaching a real squat
[10-20s] Alex spreekt: "Ik focus me op strength en calisthenics — basics, technique first"
[20-30s] Action shot: Alex demos een muscle-up
[30-40s] Alex: "Tarief: €69 per 60 minuten. Eerste intake gratis."
[40-50s] B-roll: Alex coaching a client door een sessie
[50-60s] CTA: "Boek een gratis intake met Alex · sculptclub.nl"`,
    caption: `Maak kennis met Alex — een van onze trainers in de Jordaan 💪

🎯 Specialisme: Strength · Calisthenics · Recovery
🌍 Talen: NL · EN · PT
💰 Tarief: €69 / 60 min
🎁 Eerste intake gratis

Boek direct via sculptclub.nl of stuur Alex een DM.

@sculptclub`,
    hashtags: `#personaltrainer #amsterdam #jordaan #calisthenics #strengthtraining #personaltraineramsterdam #fitnesscoach #ptamsterdam`,
    visualNote: "Alex's authentic personality — geen scripted. Mix talking-head + coaching b-roll.",
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
    title: "Meet Eva (Dietitian + Strength · NL/EN)",
    hook: "Eva is diëtist én personal trainer — dat is zeldzaam",
    script: `[0-3s] Hook: "Wist je dat onze trainer Eva ook diëtist is?"
[3-12s] Eva: "Hi, ik ben Eva. Ik combineer strength training met voedingsadvies."
[12-22s] B-roll: Eva measuring portions / coaching squat
[22-32s] Eva: "De combinatie is krachtig — je traint én eet juist."
[32-42s] Real client testimony (1 zin, met toestemming)
[42-52s] Eva: "Tarief op aanvraag, eerste intake gratis"
[52-60s] CTA: "Stuur Eva een DM voor je gratis intake"`,
    caption: `Eva is diëtist én personal trainer — een combinatie die zeldzaam is in Amsterdam.

🥗 Voedingsadvies + krachttraining
🌍 NL · EN
💰 Tarief op aanvraag
🎁 Eerste intake gratis

Perfect als je naast je trainingen ook hulp wilt met je eetpatroon.

Boek via sculptclub.nl`,
    hashtags: `#dietist #personaltrainer #amsterdam #jordaan #voedingsadvies #nutrition #strengthtraining #fitcoach #womenwholift #amsterdamhealth`,
    visualNote: "Show Eva in beide rollen — keuken/voedingsadvies én gym/coaching. Splice naast elkaar.",
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
    script: `[0-3s] Split screen: "Week 1" links, "Week 12" rechts
[3-10s] Eerste sessie b-roll — moeite met basics
[10-20s] Tussenklipje: trainer-notitie "Eerst techniek, dan gewicht"
[20-30s] Week 4: meer zelfvertrouwen, betere uitvoering
[30-42s] Week 12: zelfde oefening, 2× zwaarder, perfecte uitvoering
[42-52s] Tekst op screen: "Niet alleen sterker — ook zelfverzekerder in eigen lichaam"
[52-60s] CTA: "Wil jij ook? sculptclub.nl"`,
    caption: `12 weken bij SculptClub. Resultaat van [naam klant met toestemming].

Wat we hebben gedaan:
✓ Eerste 4 weken: techniek
✓ Week 5-8: gewicht opbouwen
✓ Week 9-12: PR's stellen + behalen

Geen wonderdiet, geen 8x/week training. Gewoon 2-3x/week, consistente coaching.

→ Vanaf €45 per sessie
→ Eerste intake gratis
→ sculptclub.nl`,
    hashtags: `#beforeafter #transformation #personaltrainer #amsterdam #jordaan #strengthtraining #fitnessjourney #pt #fitnesstransformation`,
    visualNote: "ESSENTIEEL: client schriftelijke toestemming voor beeld. Geen privé info zonder consent. Bij twijfel — animatie/stockfoto's met disclaimer 'representative example'.",
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
    title: "3 squat fouten die iedereen maakt",
    hook: "3 squat fouten die ik elke week zie",
    script: `[0-3s] Hook: "3 squat fouten — fix dit"
[3-15s] Fout #1: Knees caving inward → show fix (push knees out)
[15-27s] Fout #2: Heels lifting → show fix (weight in mid-foot, hip mobility)
[27-39s] Fout #3: Forward lean too aggressive → show fix (chest up, core engaged)
[39-50s] Demo: perfect rep met juiste cue
[50-60s] CTA: "Want meer? Boek een sessie met onze trainers — sculptclub.nl"`,
    caption: `3 squat-fouten die iedereen maakt — verbeter dit voor je volgende sessie 👇

1️⃣ Knieën die naar binnen vallen
   → Knieën actief naar buiten duwen tijdens het zakken

2️⃣ Hielen die loskomen
   → Gewicht op het midden van je voet, werk aan enkelmobiliteit

3️⃣ Te ver voorover leunen
   → Borst omhoog, core strak, heupen niet eerst naar achter

Wil je dit live gecorrigeerd? Boek een gratis intake bij een van onze trainers.`,
    hashtags: `#squatform #fitnesstip #personaltrainer #amsterdam #strengthtraining #liftingtips #gymtips #squat #formcheck #personaltraineramsterdam`,
    visualNote: "Trainer demos elke fout (slow-mo) + corrigeert. Use overlay text op elke fout. Music: educatieve achtergrond.",
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
    hook: "Stop met sit-ups. Doe DIT in plaats daarvan.",
    script: `[0-3s] Hook: "Sit-ups gaan je core niet sterker maken"
[3-12s] Show: dead bug — slow, controlled
[12-22s] Show: pallof press — anti-rotation
[22-32s] Show: hollow body hold — stability
[32-42s] Korte uitleg: "Core = stabilizer, niet flexor"
[42-52s] B-roll: client doet de drie exercises
[52-60s] CTA: "Want een echte core programma? sculptclub.nl"`,
    caption: `Stop met dagelijkse sit-ups. Probeer dit in plaats daarvan:

1. Dead bug — leer je core stabiliseren
2. Pallof press — anti-rotatie kracht
3. Hollow body hold — totale core-spanning

Je core is een stabilisator, geen flexor. Train hem dus voor stabiliteit, niet voor zichtbare "abs".

Voor een compleet core-programma op maat → sculptclub.nl/vind-jouw-personal-trainer`,
    hashtags: `#coreworkout #corestability #fitnesstip #personaltrainer #amsterdam #strengthcoach #abs #fitnessadvice #liftingtips`,
    visualNote: "Top-down + side-view voor elke exercise. Beat-driven cuts tussen oefeningen.",
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
    hook: "Een dag in de Jordaan met onze studio",
    script: `[0-3s] Hook: "6:30 AM in de Jordaan"
[3-12s] Trainer opent de garage door, zon op gracht
[12-22s] Eerste klant komt binnen, koffie wordt gemaakt
[22-32s] Warming-up, music aan, energie omhoog
[32-42s] Mid-workout: focus, sweat, coach moments
[42-52s] Klant rondt af, fist bump, "tot vrijdag"
[52-60s] Tekst: "Open elke dag 06:30 – 22:00 · sculptclub.nl"`,
    caption: `Een ochtend in de Jordaan. Geen filter.

06:30 — Deuren open
06:45 — Eerste sessie van de dag
07:30 — Coffee break, planning
08:00 — Tweede sessie
...

We zijn elke dag open 06:30 – 22:00. Plan jouw sessie voor werk, na werk, wanneer het jou uitkomt.

📍 Egelantiersgracht 424
🔗 sculptclub.nl`,
    hashtags: `#jordaan #amsterdam #personaltrainer #morningroutine #gymlife #amsterdamlife #boutiquegym #fitnesscommunity #jordaanlife`,
    visualNote: "Authentic, geen overproduction. Film op één ochtend met phone. Vroege ochtend licht = magie.",
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
    title: "Waarom 5.0 sterren niet liegen",
    hook: "Waarom we 5.0 ⭐ hebben op Google",
    script: `[0-3s] Hook tekst: "Hoe je 5.0 ⭐ houdt op Google"
[3-12s] Trainer-aan-de-camera: "We hebben geen team van marketers"
[12-22s] "We hebben gewoon échte trainers die hun werk goed doen"
[22-32s] Show: client testimony in tekst-overlay (echte review uit Google)
[32-42s] Trainer: "0% commissie betekent dat onze trainers tijd hebben voor jou"
[42-52s] Show: nog 2 echte review-screenshots
[52-60s] CTA: "Boek je eigen ervaring · sculptclub.nl"`,
    caption: `5.0 ⭐ op Google. Geen marketing-truc.

Wat onze klanten zeggen:
"Eerlijke trainers, prachtige studio in de Jordaan"
"Geen abonnementsdruk, gewoon goede coaching"
"De gratis intake was al beter dan veel betaalde sessies"

→ Zelf ervaren? Eerste intake gratis op sculptclub.nl`,
    hashtags: `#googlereviews #amsterdam #jordaan #personaltrainer #5sterren #fivestars #boutiquegym #pt #amsterdamfitness #realreviews`,
    visualNote: "Real Google review screenshots (geblurd voor privacy maar zichtbaar 5⭐). Show actual review text.",
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
    title: "Carousel — 7 hoekjes van onze studio",
    hook: "7 hoekjes van onze studio in de Jordaan",
    script: `Carousel slides:
1. Cover: Studio entrance van buitenaf (Egelantiersgracht facade) + tekst "Welkom bij SculptClub"
2. Rogue power rack hoek + "Echte rack, geen plastic"
3. Barbell + bumper plates collectie + "Tot 200kg gewicht"
4. Echo Bike + sled corner + "Conditie + power"
5. Squat rack + spiegels + "Perfect voor PT sessies"
6. Garage door open op gracht + "Onze 'lobby' (in de zomer)"
7. CTA slide: "Boek je intake — sculptclub.nl · 5.0 ⭐ Google"`,
    caption: `7 hoekjes van onze studio in de Jordaan 🏋️‍♂️

We zijn een privé gym op Egelantiersgracht 424, midden in de Jordaan. Geen tickets, geen abonnementsdruk, gewoon echte apparatuur en goede coaching.

→ PT vanaf €45/sessie
→ Studio huur vanaf €12/uur
→ Open Gym vanaf €5,75/sessie
→ Eerste intake gratis

Boek via link in bio.`,
    hashtags: `#amsterdam #jordaan #privegym #boutiquegym #personaltrainer #strengthcoach #amsterdamfitness #fitnessamsterdam #jordaanlocal #amsterdamlife #personaltrainingamsterdam #gymamsterdam`,
    visualNote: "Carousel format — 7 high-quality square photos. Consistent grading (warm but clean).",
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
    hook: "Een privé gym in de Jordaan vanaf €12/uur",
    script: `Reel format (30s vertical):
[0-3s] Slow pan on facade — Sculpt sign visible
[3-10s] Walk through door, equipment reveals
[10-18s] Detail shots: barbell + plates close-up, rack
[18-25s] Person training in background (silhouette)
[25-30s] Final text frame: "€12/uur · Egelantiersgracht 424"`,
    caption: `Een privé gym in de Jordaan vanaf €12 per uur.

🔑 Geen abonnement
🔑 Echte apparatuur
🔑 Boek per uur
🔑 0% commissie voor trainers

Link in bio → sculptclub.nl`,
    hashtags: `#jordaan #amsterdam #fitnessamsterdam #boutiquegym #personaltrainer #strengthtraining #amsterdamlocal #jordaanvibes #amsterdamfitness`,
    visualNote: "Cinematic, slow camera moves. Music: chill ambient (Reels Audio Library). Geen voice-over.",
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
    script: `Carousel slides:
1. Cover: "€45 PT in de Jordaan — wat krijg je?" + photo van coaching moment
2. "Coach die naar je luistert" + photo van gesprek
3. "Programma op maat" + photo van trainer met notitieboek
4. "Live techniek-correcties" + photo coach corrigeert squat
5. "Voeding-advies optioneel" + photo gezond ontbijt
6. "Volgende sessie aangepast" + photo trainer schrijft progress
7. CTA: "Eerste intake gratis · sculptclub.nl"`,
    caption: `Wat krijg je voor €45 per uur bij SculptClub? 👇

Niet:
❌ Ketenwerk
❌ Standaard sjabloon-programma
❌ Een coach die op zijn telefoon zit

Wel:
✓ 1-op-1 aandacht
✓ Programma op maat
✓ Echte techniek-correctie
✓ Voortgang bijhouden + aanpassen
✓ De prijs die je ziet = wat de trainer krijgt (0% commissie)

Eerste intake gratis op sculptclub.nl/vind-jouw-personal-trainer`,
    hashtags: `#personaltrainer #amsterdam #jordaan #personaltraining #ptamsterdam #pricetransparency #fitnesscoach #strengthtraining #amsterdamlife`,
    visualNote: "Consistent visual style across 7 slides. Use SculptClub brand color (#134DE1) op een swipe-indicator.",
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
    title: "Reel — 60-sec PT session highlights",
    hook: "Hoe een echte PT sessie eruit ziet bij ons",
    script: `Reel format (60s):
[0-5s] Hook: "Geen acteer-PT. Echte sessie."
[5-15s] Warming-up + dynamic stretches
[15-30s] Mid-workout: coaching cues, focus
[30-45s] PR moment — celebration, real reaction
[45-55s] Cooldown gesprek
[55-60s] CTA: "Vanaf €45 · sculptclub.nl"`,
    caption: `Echte PT-sessie. Geen geënsceneerde Instagram-versie.

✓ Warming-up van 10 min
✓ 35 min werk (hypertrofie / kracht / techniek)
✓ Cooldown + gesprek over hoe het ging
✓ Programma voor volgende keer aangepast

Vanaf €45 per sessie. Eerste intake gratis.

Boek via link in bio.`,
    hashtags: `#personaltrainer #amsterdam #jordaan #personaltraining #fitnesscoach #strengthcoach #realresults #ptlife #amsterdamfitness`,
    visualNote: "Real client (consent eerst). Multi-angle film. Geen overproduce.",
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
    title: "Meet Andrea (Posture · Technique · €45/45min)",
    hook: "Meet Andrea — strength, posture, techniek",
    script: `Single photo post OF Reel:
Photo: Andrea in studio, action shot van coaching
Reel: 30s — Andrea introduceert zichzelf + coaching demo`,
    caption: `Maak kennis met Andrea 👋

🎯 Specialisme: Kracht · Houding · Techniek
🌍 Talen: NL · EN
💰 Tarief: €45 / 45 min
🎁 Eerste intake gratis

Andrea is een van onze trainers in de Jordaan en richt zich op de fundamenten — techniek, houding, basiskracht. Perfect voor wie net begint of na een blessure terugkomt.

Boek je gratis intake via sculptclub.nl of stuur ons een DM.`,
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
    title: "Meet Dara (Personal + Small Group · NL/EN)",
    hook: "Dara — personal training en small group sessies",
    script: `Carousel:
1. Dara coaching action shot
2. Dara talking to client (gesprek moment)
3. Group dynamics — Dara coaching meerdere personen
4. CTA — book via website`,
    caption: `Maak kennis met Dara — personal trainer + small-group coach 💪

🎯 Specialisme: Personal Training · Small Group · Strength & Conditioning
🌍 Talen: NL · EN
💰 Tarief: op aanvraag
🎁 Eerste intake gratis

Dara werkt zowel 1-op-1 als in kleine groepen. Goed voor wie samen met een trainingsmaatje wil komen en dezelfde gefocuste coaching wil houden.

Stuur Dara een DM of boek via sculptclub.nl`,
    hashtags: `#personaltrainer #amsterdam #jordaan #smallgrouptraining #personaltrainingamsterdam #fitnesscoach #strengthcoach`,
    visualNote: "Carousel met mix solo + group shots. Show Dara's coaching range.",
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
[0-3s] Hook: "Pijn in je heup bij squatten? Begin hier."
[3-15s] Oefening #1: 90/90 hip stretch — 30s per kant
[15-27s] Oefening #2: World's greatest stretch — 5 reps per kant
[27-39s] Oefening #3: Couch stretch — 60s per kant
[39-45s] CTA: "Bewaar deze post + doe het voor je volgende sessie"`,
    caption: `Heup-mobiliteit = beter squatten, minder pijn 👇

1️⃣ 90/90 Hip Stretch — 30s per kant
2️⃣ World's Greatest Stretch — 5 reps per kant
3️⃣ Couch Stretch — 60s per kant

Doe dit 3-4x per week voor merkbaar verschil binnen 4 weken.

→ Bewaar deze post voor je volgende warming-up.

Wil je een compleet mobiliteits-programma op maat? Boek een sessie met onze trainers via sculptclub.nl`,
    hashtags: `#hipmobility #squatform #personaltrainer #amsterdam #mobilitydrills #fitnesstip #strengthcoach #fitnessadvice #jordaan`,
    visualNote: "Clean side-view + top-down shots. Slow-mo voor elke drill. Music: educational/calm.",
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
    title: "Carrousel — 5 fouten bij eerste PT-sessie",
    hook: "5 fouten die mensen maken bij hun eerste PT-sessie",
    script: `Carrousel:
1. Cover: "5 fouten bij je eerste PT-sessie" + sterke typografie
2. Fout 1: "Doelen niet delen" → "Wat wil je bereiken?"
3. Fout 2: "Te zware kleren / verkeerde schoenen" → "Comfort + grip"
4. Fout 3: "Niet eerlijk over blessures" → "Trainer kan dan niks veiligs opbouwen"
5. Fout 4: "5 min voor de sessie nog eten" → "Liever 1-2 uur ervoor"
6. Fout 5: "Verwachten dat 1 sessie alles oplost" → "Consistentie wint"
7. CTA: "Klaar voor je eerste sessie? Boek je gratis intake — sculptclub.nl"`,
    caption: `5 fouten die mensen maken bij hun eerste PT-sessie ⚠️

1️⃣ Doelen niet delen — een trainer kan niet bouwen wat hij niet kent
2️⃣ Verkeerde kleding — comfort + grip > stijl
3️⃣ Blessures verzwijgen — eerlijk = veilig
4️⃣ Vlak vóór de sessie eten — geef je lichaam de tijd
5️⃣ Verwachten dat 1 sessie alles oplost — consistentie wint

Wil je beginnen? Eerste intake bij SculptClub is gratis.

→ sculptclub.nl/vind-jouw-personal-trainer`,
    hashtags: `#personaltrainer #amsterdam #jordaan #firstsession #fitnessbeginners #personaltrainingadvice #fitnesstip #ptamsterdam #strengthtraining`,
    visualNote: "Strong typography, consistent layout. Brand colors. Each slide = 1 mistake, 1 solution.",
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
[5-12s] Cyclist passes, then walk into studio
[12-20s] Indoor: setting up, koffie wordt gemaakt
[20-26s] First client arriving, fist bump
[26-30s] CTA: "Egelantiersgracht 424 · sculptclub.nl"`,
    caption: `Goedemorgen vanuit de Jordaan 🌅

We zijn elke ochtend om 06:30 open. De eerste sessie van de dag is vaak de stilste — gracht is leeg, gym is van jou.

📍 Egelantiersgracht 424
⏰ Dagelijks 06:30 – 22:00
☕ Koffie van het huis voor de vroege vogels

Link in bio → sculptclub.nl`,
    hashtags: `#jordaan #amsterdam #amsterdamlife #jordaanlife #morningvibes #amsterdammornings #jordaanmornings #amsterdamfitness #boutiquegym`,
    visualNote: "Cinematic, slow camera moves, natural light. Geen filters — Jordaan zelf is mooi genoeg.",
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
    title: "Carrousel — 5 plekken vlakbij voor vóór en na je training",
    hook: "5 plekken in de Jordaan voor vóór en na je training",
    script: `Carrousel:
1. Cover: "5 plekken vlakbij onze studio voor vóór en na je workout"
2. Plek 1: Café 't Smalle (5 min lopen) — koffie + terras aan de gracht
3. Plek 2: AH op Westerstraat (1 min) — supplementen + snacks
4. Plek 3: Westerpark (8 min) — outdoor warming-up of cooldown-loopje
5. Plek 4: Drogisterij om de hoek — magnesium + recovery essentials
6. Plek 5: De gracht zelf — handdoek neer voor stretching
7. CTA: "Train bij ons in de Jordaan — sculptclub.nl"`,
    caption: `5 plekken in de Jordaan voor vóór en na je training 📍

☕ Café 't Smalle — perfecte pre-workout koffie
🛒 AH Westerstraat — last-minute supplementen
🌳 Westerpark — outdoor loopje voor warming-up
💊 Drogisterij in de buurt — magnesium + recovery essentials
🌊 De gracht zelf — gratis cooldown-plek

Onze studio: Egelantiersgracht 424. Train bij ons en verken de Jordaan eromheen.

sculptclub.nl`,
    hashtags: `#jordaan #amsterdam #amsterdamlife #jordaanlife #amsterdamfitness #jordaanlocal #amsterdamlocal #boutiquegym #fitnessamsterdam`,
    visualNote: "Photos van elke spot. Aesthetic, Instagrammable. Geen tagged accounts zonder consent — gebruik exteriors.",
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
[0-5s] 06:00 — Trainer arriving, deuren open
[5-15s] 06:30-12:00 — Morning clients
[15-25s] 12:00 — Lunch + programma's plannen voor middag
[25-40s] 14:00-18:00 — Middag/avond clients
[40-50s] 19:00 — Last sessie van de dag
[50-60s] 22:00 — Studio close. CTA: "Wil je trainer worden? Bekijk sculptclub.nl"`,
    caption: `Een dag in het leven van een SculptClub PT 🎯

06:00 — Aankomst, koffie aan
06:30 — Eerste sessie
09:00 — Programma's plannen
11:00 — Tweede sessieblok
14:00 — Middagklanten
17:00 — Het drukste uur
20:00 — Laatste sessies
22:00 — Studio dicht

Bij SculptClub bepaal jij je eigen tarief, je eigen tijden en je eigen klanten. 0% commissie.

Trainer worden? → sculptclub.nl/word-trainer`,
    hashtags: `#personaltrainer #amsterdam #jordaan #dayinthelife #ptlife #amsterdamfitness #personaltrainingamsterdam #boutiquegym`,
    visualNote: "Authentic, geen overproduce. One single PT's actual day. Time-stamps op screen.",
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
    script: `Carousel:
1. Cover: "5.0 ⭐ op Google · Wat zeggen onze klanten?"
2-6. Vijf screenshots van echte 5-sterren reviews (met privacy-respecterende afmetingen — alleen first name + initial)
7. CTA: "Lees alle reviews op Google · sculptclub.nl"`,
    caption: `Wat onze klanten écht zeggen 💬

Alle reviews zijn van echte Google-klanten. 5,0 ⭐ gemiddeld over [aantal] reviews.

We zijn er trots op, maar werken er elke dag aan om het zo te houden. Elke nieuwe sessie is een kans om te verbeteren.

Lees alle reviews op Google → SculptClub op Maps.
Of boek je eigen ervaring → sculptclub.nl`,
    hashtags: `#googlereviews #5sterren #amsterdam #jordaan #personaltrainer #boutiquegym #fivestarservice #realreviews #amsterdamfitness`,
    visualNote: "Real Google review screenshots. Privacy: only first names + initials. Get consent voor specifieke reviews.",
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

// ─── STRATEGY ────────────────────────────────────────────────────────
// Brain-recommended balance between demand-side (PT customers) and supply-side
// (studio renters). The two audiences barely overlap; ad budget split ≠ social
// content split because:
// 1. TikTok/IG is consumer-skewed — trainer-renters discover via LinkedIn +
//    word-of-mouth, NOT short-form video.
// 2. PT customers outnumber potential trainer-renters ~50:1.
// 3. PT-showcase content secondarily attracts trainers ("they coach well, I'd
//    like to join") — studio-tour content rarely brings PT customers.
//
// Targets per 10 posts:
// - 6 demand-side (PT showcase, trainer spotlights, fitness tips, before/after,
//   social proof) → drives PT booking funnel
// - 3 supply-side (studio tour, behind-the-scenes "for trainers" framing)
//   → drives studio rental + trainer recruitment
// - 1 broad/local (Jordaan local, brand) → trust + local search relevance,
//   serves both audiences
//
// This is a 60/30/10 split. Operator's Google Ads at €15 Studio / €5 PT (75/25)
// stays unchanged — ads buy intent at moment-of-search, social builds trust
// and pipeline over weeks.

export type AudienceSide = "demand" | "supply" | "broad";

export const PILLAR_TO_AUDIENCE: Record<Pillar, AudienceSide> = {
  "studio-tour": "supply",
  "pt-showcase": "demand",
  "trainer-spotlight": "demand", // showcases trainer quality → drives PT bookings
  "before-after": "demand",
  "fitness-tip": "demand",
  "behind-scenes": "supply",
  "jordaan-local": "broad",
  "social-proof": "demand",
};

// ─── WEEKLY POST CALENDAR ────────────────────────────────────────────
// 4 posts/week (Mon/Wed/Fri/Sun). Realistic for solo operator.
// Pattern: alternate platforms + alternate audiences to avoid monotony.
// Aim: ~24 posts/month = full content rotation over 4 weeks before repeat.
//
// Best post times for Amsterdam timezone (CET):
// - Monday 19:30 — feed catches commute-home + evening-scroll
// - Wednesday 12:30 — lunch-break scroll
// - Friday 19:00 — weekend-mode + workout-planning Friday night
// - Sunday 11:00 — Sunday morning long-scroll, workout planning for week

export interface CalendarSlot {
  /** Mon=1, Tue=2, ..., Sun=7 (ISO weekday) */
  weekday: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  weekdayLabel: string;
  bestTime: string;
  platform: Platform;
  /** which week of the 4-week rotation: 1, 2, 3, 4 */
  weekNumber: 1 | 2 | 3 | 4;
  /** Specific idea ID from SOCIAL_IDEAS */
  ideaId: string;
  /** Why this slot/idea/platform combo */
  rationale: string;
}

export const POSTING_CALENDAR: CalendarSlot[] = [
  // ─── WEEK 1: Build awareness — establish brand + offerings ────────
  {
    weekday: 1,
    weekdayLabel: "Maandag",
    bestTime: "19:30",
    platform: "instagram",
    weekNumber: 1,
    ideaId: "ig-tour-01",
    rationale: "Maandag opent met de visuele basis: studio carrousel laat de hele club zien — context voor de rest van de week.",
  },
  {
    weekday: 3,
    weekdayLabel: "Woensdag",
    bestTime: "12:30",
    platform: "tiktok",
    weekNumber: 1,
    ideaId: "tt-pt-01",
    rationale: "Demand-side PT showcase tijdens lunch-scroll — wanneer mensen aan hun fitness-doelen denken.",
  },
  {
    weekday: 5,
    weekdayLabel: "Vrijdag",
    bestTime: "19:00",
    platform: "tiktok",
    weekNumber: 1,
    ideaId: "tt-tip-01",
    rationale: "Fitness-tip (squat fouten) op vrijdagavond — mensen plannen weekend-trainingen.",
  },
  {
    weekday: 7,
    weekdayLabel: "Zondag",
    bestTime: "11:00",
    platform: "instagram",
    weekNumber: 1,
    ideaId: "ig-spotlight-andrea",
    rationale: "Zondagochtend = lange feed-scroll. Trainer spotlight bouwt vertrouwen voor 'maandag-start' bookings.",
  },

  // ─── WEEK 2: Differentiate — show what makes SculptClub different ────────
  {
    weekday: 1,
    weekdayLabel: "Maandag",
    bestTime: "19:30",
    platform: "tiktok",
    weekNumber: 2,
    ideaId: "tt-tour-02",
    rationale: "5-dingen-format scoort hoog op TikTok. Verrast nieuwe kijkers met '0% commissie' en '€12/uur'.",
  },
  {
    weekday: 3,
    weekdayLabel: "Woensdag",
    bestTime: "12:30",
    platform: "instagram",
    weekNumber: 2,
    ideaId: "ig-pt-01",
    rationale: "Carrousel '€45 — wat krijg je?' beantwoordt de zilveren vraag van elke koopt-overwegende klant.",
  },
  {
    weekday: 5,
    weekdayLabel: "Vrijdag",
    bestTime: "19:00",
    platform: "tiktok",
    weekNumber: 2,
    ideaId: "tt-spotlight-eva",
    rationale: "Trainer spotlight Eva (diëtist + PT) — unieke positionering, hoog deelbaar.",
  },
  {
    weekday: 7,
    weekdayLabel: "Zondag",
    bestTime: "11:00",
    platform: "instagram",
    weekNumber: 2,
    ideaId: "ig-local-01",
    rationale: "Jordaan-ochtend Reel — bouwt local-brand-relevance, werkt voor zowel PT als studio-huur intent.",
  },

  // ─── WEEK 3: Convert — direct conversion-focused content ────────
  {
    weekday: 1,
    weekdayLabel: "Maandag",
    bestTime: "19:30",
    platform: "instagram",
    weekNumber: 3,
    ideaId: "ig-tip-02",
    rationale: "5-fouten-bij-eerste-PT carrousel adresseert objections die mensen tegenhouden van boeken.",
  },
  {
    weekday: 3,
    weekdayLabel: "Woensdag",
    bestTime: "12:30",
    platform: "tiktok",
    weekNumber: 3,
    ideaId: "tt-pt-02",
    rationale: "Pricing transparency video (€45 wat krijg je) — converteert mid-funnel kijkers.",
  },
  {
    weekday: 5,
    weekdayLabel: "Vrijdag",
    bestTime: "19:00",
    platform: "tiktok",
    weekNumber: 3,
    ideaId: "tt-spotlight-alex",
    rationale: "Trainer spotlight Alex (calisthenics) — niche-bereik via #calisthenics hashtag-community.",
  },
  {
    weekday: 7,
    weekdayLabel: "Zondag",
    bestTime: "11:00",
    platform: "instagram",
    weekNumber: 3,
    ideaId: "ig-proof-01",
    rationale: "Social-proof carrousel met echte 5.0 reviews — voor mensen die maandag willen boeken maar laatste twijfel hebben.",
  },

  // ─── WEEK 4: Deepen — supply-side + community + repeat ────────
  {
    weekday: 1,
    weekdayLabel: "Maandag",
    bestTime: "19:30",
    platform: "tiktok",
    weekNumber: 4,
    ideaId: "tt-bts-01",
    rationale: "Behind-the-scenes ochtend — humaniseert de brand, bouwt parasocial vertrouwen.",
  },
  {
    weekday: 3,
    weekdayLabel: "Woensdag",
    bestTime: "12:30",
    platform: "instagram",
    weekNumber: 4,
    ideaId: "ig-tip-01",
    rationale: "Heup-mobiliteit tip — saved-content (sterke retentie van followers).",
  },
  {
    weekday: 5,
    weekdayLabel: "Vrijdag",
    bestTime: "19:00",
    platform: "instagram",
    weekNumber: 4,
    ideaId: "ig-spotlight-dara",
    rationale: "Trainer spotlight Dara (small group) — onderscheidt SculptClub van pure 1-op-1 PT studios.",
  },
  {
    weekday: 7,
    weekdayLabel: "Zondag",
    bestTime: "11:00",
    platform: "instagram",
    weekNumber: 4,
    ideaId: "ig-local-02",
    rationale: "Jordaan plekken-gids — broad-appeal, vertrouwen-bouwer voor local-search-intent.",
  },
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
