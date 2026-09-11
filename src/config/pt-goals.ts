import type { Locale } from "./site";

/**
 * Personal-training GOALS — the "transformation" layer of the PT hub
 * (/nl/vind-jouw-personal-trainer + /en/find-personal-trainer).
 *
 * Why this exists (operator 2026-09-11): "we should not sell personal training
 * by the hour, we should sell transformations." The old hub opened on a
 * directory of 13 trainer bios priced per session; 30d GA4 showed 93 views,
 * ~10s engagement per view and ONE lead on the NL page. Visitors arrive with a
 * goal, not with a trainer name — so the hub now starts from the goal.
 *
 * Rules for this file:
 *  - `trainerIds` must only list trainers whose OWN specialization/bio in
 *    trainers.ts names that goal. No trainer is claimed for an outcome they
 *    do not advertise themselves. The comment per goal cites the evidence.
 *  - Nothing here promises a result. Copy describes what a traject WORKS ON
 *    and what CAN be measured; the trainer sets the actual plan and price.
 *  - SculptClub does not set trainer prices (trainers are independent and
 *    keep 100%). A traject's price is agreed between client and trainer at
 *    the free intake — never render a price from this file.
 */
export interface PtGoal {
  id: string;
  icon: "flame" | "dumbbell" | "activity" | "heart" | "sparkles" | "battery";
  /** Short label — intake-form goal option + WhatsApp context. */
  short: Record<Locale, string>;
  title: Record<Locale, string>;
  /** One line: the change the client is after. */
  promise: Record<Locale, string>;
  /** What a traject toward this goal typically works on. */
  focus: Record<Locale, string[]>;
  /** Examples of what can be tracked — the trainer picks what fits. */
  measures: Record<Locale, string[]>;
  /** Optional safety/scope note shown with the goal. */
  note?: Record<Locale, string>;
  trainerIds: string[];
}

export const ptGoals: PtGoal[] = [
  {
    // eva: Diëtist + Voeding · ibrahim: "specialisatie voeding en afvallen" ·
    // sergei: Lichaamsrecompositie · roberta: Afvallen · jearmey: "vet
    // verliezen" · alex: "afvallen, spieropbouw" (all from trainers.ts)
    id: "afvallen",
    icon: "flame",
    short: { nl: "Afvallen", en: "Lose fat" },
    title: { nl: "Afvallen & strakker worden", en: "Lose fat & get leaner" },
    promise: {
      nl: "Minder vet, meer spier — en gewoontes die je volhoudt.",
      en: "Less fat, more muscle — and habits you can keep.",
    },
    focus: {
      nl: ["Krachttraining die je stofwisseling helpt", "Haalbare voeding die bij je week past", "Gewoontes buiten de studio"],
      en: ["Strength training that supports your metabolism", "Realistic nutrition that fits your week", "Habits outside the studio"],
    },
    measures: {
      nl: ["Omvang of lichaamssamenstelling", "Kracht in de basisoefeningen", "Energie en slaap"],
      en: ["Measurements or body composition", "Strength in the core lifts", "Energy and sleep"],
    },
    trainerIds: ["eva", "ibrahim", "sergei", "roberta", "jearmey", "alex"],
  },
  {
    // dara: Kracht & Balans, Beginners welkom · andrea: kracht, techniek ·
    // tom: Kracht & Conditie · gezina: Kracht · sergei: Kracht & Beweging ·
    // hamish: functionele kracht
    id: "sterker",
    icon: "dumbbell",
    short: { nl: "Sterker worden", en: "Get stronger" },
    title: { nl: "Sterker worden — ook als beginner", en: "Get stronger — beginners welcome" },
    promise: {
      nl: "Van twijfelen bij de dumbbells naar zelfverzekerd zwaar tillen.",
      en: "From unsure at the rack to lifting heavy with confidence.",
    },
    focus: {
      nl: ["Techniek eerst: squat, hinge, duwen, trekken", "Stapsgewijs zwaarder, zonder blessures", "Een schema dat je later ook zelf kunt draaien"],
      en: ["Technique first: squat, hinge, push, pull", "Progressively heavier, without injury", "A programme you can later run on your own"],
    },
    measures: {
      nl: ["Gewicht en herhalingen per oefening", "Techniek op video", "Hoe zeker je je voelt"],
      en: ["Load and reps per lift", "Technique on video", "How confident you feel"],
    },
    trainerIds: ["dara", "andrea", "tom", "gezina", "sergei", "hamish"],
  },
  {
    // ibrahim: Revalidatie · andrea: Houding, Techniek · sergei:
    // Houdingscorrectie, Herstel · roberta: Houding & Mobiliteit · jearmey:
    // "pijnvrij bewegen"
    id: "pijnvrij",
    icon: "activity",
    short: { nl: "Pijnvrij bewegen", en: "Pain-free movement" },
    title: { nl: "Pijnvrij bewegen & herstel", en: "Move pain-free & recover" },
    promise: {
      nl: "Weer zonder zorgen bewegen — met een lichaam dat sterker is dan voorheen.",
      en: "Move without worry again — in a body that is stronger than before.",
    },
    focus: {
      nl: ["Houding en mobiliteit", "Rustig opbouwen na een blessure", "Kracht rond de zwakke plek"],
      en: ["Posture and mobility", "Building back up after an injury", "Strength around the weak spot"],
    },
    measures: {
      nl: ["Bewegingsbereik", "Pijn of ongemak per week", "Wat je weer kunt doen"],
      en: ["Range of motion", "Pain or discomfort per week", "What you can do again"],
    },
    note: {
      nl: "Geen vervanging van een fysiotherapeut. Bij acute of onverklaarde pijn: eerst naar je huisarts of fysio.",
      en: "Not a replacement for a physiotherapist. With acute or unexplained pain, see your GP or physio first.",
    },
    trainerIds: ["ibrahim", "andrea", "sergei", "roberta", "jearmey"],
  },
  {
    // gezina: Training voor vrouwen, "afgestemd op het lichaam en de cyclus" ·
    // eva: Diëtist, Kracht, Voeding · andrea: Houding, Techniek, kracht
    // (the old hub already routed "vrouwelijke personal trainer" to these 3)
    id: "vrouwen",
    icon: "heart",
    short: { nl: "Sterk als vrouw", en: "Strong as a woman" },
    title: { nl: "Sterk als vrouw", en: "Strong as a woman" },
    promise: {
      nl: "Krachttraining afgestemd op jouw lichaam, cyclus en levensfase.",
      en: "Strength training tuned to your body, cycle and life stage.",
    },
    focus: {
      nl: ["Kracht opbouwen in een rustige, privé setting", "Training die meebeweegt met je cyclus", "Voeding die je energie geeft"],
      en: ["Building strength in a calm, private setting", "Training that works with your cycle", "Nutrition that gives you energy"],
    },
    measures: {
      nl: ["Kracht per oefening", "Energie door de maand heen", "Hoe je je voelt in je lichaam"],
      en: ["Strength per lift", "Energy through the month", "How you feel in your body"],
    },
    trainerIds: ["gezina", "eva", "andrea"],
  },
  {
    // bryan: Calisthenics, Skills · alex: Static Calisthenics, Gymnastiek
    id: "skills",
    icon: "sparkles",
    short: { nl: "Calisthenics", en: "Calisthenics" },
    title: { nl: "Calisthenics skills", en: "Calisthenics skills" },
    promise: {
      nl: "Je eerste handstand, muscle-up of pull-up — met een helder stappenplan.",
      en: "Your first handstand, muscle-up or pull-up — with a clear step-by-step plan.",
    },
    focus: {
      nl: ["Progressies per skill", "Sterke fundamenten: schouders, core, grip", "Mobiliteit voor de moeilijke posities"],
      en: ["Progressions per skill", "Strong foundations: shoulders, core, grip", "Mobility for the hard positions"],
    },
    measures: {
      nl: ["Seconden in je hold", "Herhalingen per progressie", "Welke stap je hebt gehaald"],
      en: ["Seconds in your hold", "Reps per progression", "Which step you have unlocked"],
    },
    trainerIds: ["bryan", "alex"],
  },
  {
    // joey: Ademwerk, Zenuwstelsel, "voor high-performers die vastzitten,
    // stress ervaren" · hamish: High Performance · tom: "duurzaam blijven
    // trainen met een druk leven"
    id: "energie",
    icon: "battery",
    short: { nl: "Energie & stress", en: "Energy & stress" },
    title: { nl: "Meer energie, minder stress", en: "More energy, less stress" },
    promise: {
      nl: "Voor drukke professionals: je energie en regie terug.",
      en: "For busy professionals: get your energy and control back.",
    },
    focus: {
      nl: ["Training die in een volle agenda past", "Ademwerk en herstel", "Een ritme dat je volhoudt"],
      en: ["Training that fits a full calendar", "Breathwork and recovery", "A rhythm you can sustain"],
    },
    measures: {
      nl: ["Energie en slaap", "Hoe vaak je traint zonder te missen", "Conditie en kracht"],
      en: ["Energy and sleep", "How consistently you train", "Fitness and strength"],
    },
    trainerIds: ["joey", "hamish", "tom"],
  },
];
