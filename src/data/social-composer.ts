// ─── Content Studio · post composer ────────────────────────────────────────
// Powers the "✨ Genereer" mode in the Posting Studio (/nl/social). Generates
// endless post drafts WITHOUT an LLM or backend — it recombines hand-written,
// native-Dutch fragments in the studio's proven, grammar-safe house format:
//
//     [opening line]
//
//     fact · fact · fact.
//
//     [CTA] · link in bio 👆
//
// WHY fragments, not free Dutch generation: per src/data/social-content.ts +
// rules/dutch-voice-guide, AI-generated Dutch prose reads as invented. So every
// fragment here is hand-quality native Dutch (adapted from the operator's own
// curated packs), and the join is the noun-phrase-bullet pattern the packs
// already use → no conjugation gymnastics, no invented compound nouns.
//
// FACT-SAFE: fact bullets use ONLY verified business facts (CLAUDE.md). Trainer
// pillars frame studio rental + freedom — NEVER the "0% commissie" badge
// (feedback_model_is_rental_not_commission: the model is rent, not commission).

import { AUDIENCE_BIO_LINK, type StudioAudience } from "./social-packs";

export type ComposerAudience = StudioAudience; // "client" | "trainer"
export type ComposerFormat = "tiktok" | "instagram";

export interface ComposerPillar {
  id: string;
  audience: ComposerAudience;
  /** chip label (NL) */
  label: string;
  /** one-line what this angle is */
  blurb: string;
  /** native-Dutch opening lines (low grammar risk) */
  openings: string[];
  /** verified facts as noun phrases — joined by " · " */
  factBullets: string[];
  /** CTA lines (house style; " · link in bio 👆" is appended for Instagram) */
  ctas: string[];
  /** punchy hook lines (number/win forward) — TikTok first frame / title */
  hooks: string[];
  /** slide overlays (headline + sub) for a carousel / video */
  slides: { headline: string; sub: string }[];
  /** hashtag bank (English-dominant, per house style) */
  hashtags: string[];
  /** landing page the post drives to */
  ctaUrl: string;
}

const BIO = (a: ComposerAudience) => AUDIENCE_BIO_LINK[a].url;

export const COMPOSER_PILLARS: ComposerPillar[] = [
  // ── CLIENT (Instagram = #1 acquisition lever — client pillars first) ──────
  {
    id: "open-gym",
    audience: "client",
    label: "Open Gym",
    blurb: "Entry-product — solo trainen, laagste prijspunt, breedste publiek.",
    openings: [
      "Solo trainen in onze privé studio aan de Egelantiersgracht.",
      "Train op je eigen tempo — Open Gym in de Jordaan.",
      "Jouw eigen privé studio, zonder druk en zonder publiek.",
    ],
    factBullets: [
      "60 minuten solo trainen",
      "max 4 personen per slot",
      "vanaf €7,25 per sessie",
      "eerste probeersessie vrijblijvend",
      "geen contract",
      "dagelijks open van 06:00 tot 22:00",
      "deurcode via WhatsApp de avond ervoor",
    ],
    ctas: ["Boek je probeersessie", "Plan je eerste probeersessie", "Kom langs voor een vrijblijvende probeersessie"],
    hooks: [
      "Vanaf €7,25 per sessie — privé trainen in de Jordaan.",
      "Geen sportschool. Geen publiek. Wel een privé studio aan de gracht.",
      "Max 4 mensen tegelijk. Jouw rust, jouw tempo.",
    ],
    slides: [
      { headline: "Open Gym", sub: "Solo trainen · privé · 60 min" },
      { headline: "Vanaf €7,25", sub: "per sessie · geen contract" },
      { headline: "Egelantiersgracht 424", sub: "Jordaan · Amsterdam" },
    ],
    hashtags: ["#opengym", "#amsterdamgym", "#privegym", "#jordaan", "#fitamsterdam", "#krachttraining", "#amsterdamfitness"],
    ctaUrl: "sculptclub.nl/nl/open-gym",
  },
  {
    id: "pt",
    audience: "client",
    label: "Personal Training",
    blurb: "Vind jouw trainer — 1-op-1, eerste intake gratis.",
    openings: [
      "Vind jouw personal trainer in onze privé studio.",
      "1-op-1 training in de Jordaan, afgestemd op jou.",
      "Jouw doel, jouw trainer, jouw privé studio aan de gracht.",
    ],
    factBullets: [
      "personal training vanaf €45 per sessie",
      "eerste intake gratis",
      "trainers bepalen hun eigen tarief",
      "je betaalt je trainer direct",
      "geen abonnement, geen contract",
      "NL- én Engelssprekende trainers",
      "privé studio aan de Egelantiersgracht",
    ],
    ctas: ["Plan je gratis intake", "Doe de trainer-match", "Vind jouw trainer"],
    hooks: [
      "Personal training vanaf €45 — eerste intake gratis.",
      "Geen abonnement. Geen contract. Wel een trainer die bij je past.",
      "Match met jouw trainer in 30 seconden.",
    ],
    slides: [
      { headline: "Personal Training", sub: "1-op-1 · privé studio" },
      { headline: "Vanaf €45", sub: "eerste intake gratis" },
      { headline: "Vind jouw match", sub: "NL/EN trainers · Jordaan" },
    ],
    hashtags: ["#personaltrainer", "#personaltrainingamsterdam", "#jordaan", "#amsterdam", "#krachttraining", "#fitamsterdam", "#ptamsterdam"],
    ctaUrl: "sculptclub.nl/nl/vind-jouw-personal-trainer",
  },
  {
    id: "studio",
    audience: "client",
    label: "De Studio",
    blurb: "De plek zelf — grachtenpand, privé, Jordaan.",
    openings: [
      "Een privé trainingsstudio in een grachtenpand in de Jordaan.",
      "Trainen aan de Egelantiersgracht — rustig, privé, persoonlijk.",
      "Geen drukke sportschool, maar jouw eigen plek in de Jordaan.",
    ],
    factBullets: [
      "privé studio aan de Egelantiersgracht 424",
      "max 4 personen tegelijk",
      "5,0 op Google",
      "dagelijks open 06:00–22:00",
      "Open Gym én personal training",
      "geen contract",
    ],
    ctas: ["Kom een keer langs", "Boek je eerste probeersessie", "Plan een vrijblijvende kennismaking"],
    hooks: [
      "Een privé studio in een grachtenpand. Zo traint Amsterdam.",
      "Max 4 mensen. Geen wachtrij voor de squat rack.",
      "5,0 op Google — en je traint vrijwel privé.",
    ],
    slides: [
      { headline: "De Studio", sub: "Grachtenpand · Jordaan" },
      { headline: "Max 4 personen", sub: "rustig & privé" },
      { headline: "5,0 ★ Google", sub: "Egelantiersgracht 424" },
    ],
    hashtags: ["#jordaan", "#amsterdam", "#privegym", "#boutiquegym", "#amsterdamfitness", "#grachtenpand", "#fitamsterdam"],
    ctaUrl: "sculptclub.nl/nl/studio",
  },
  {
    id: "proof",
    audience: "client",
    label: "Social proof",
    blurb: "Vertrouwen — 5,0 reviews, geen contract, altijd gratis annuleren.",
    openings: [
      "Waarom mensen blijven trainen bij SculptClub.",
      "Geen verkooppraatje — gewoon waarom het werkt.",
      "Wat klanten het vaakst zeggen na hun eerste sessie.",
    ],
    factBullets: [
      "5,0 op Google",
      "geen contract, stop wanneer je wilt",
      "annuleren is altijd gratis",
      "eerste sessie of intake vrijblijvend",
      "max 4 personen — echt persoonlijke aandacht",
      "trainers met eigen specialisatie",
    ],
    ctas: ["Ervaar het zelf", "Boek je eerste probeersessie", "Plan je gratis intake"],
    hooks: [
      "5,0 op Google. Geen contract. Geen druk.",
      "Annuleren is altijd gratis — ja, echt altijd.",
      "Geen abonnement dat je vergeet op te zeggen.",
    ],
    slides: [
      { headline: "5,0 ★ Google", sub: "geen contract" },
      { headline: "Altijd gratis annuleren", sub: "geen kleine lettertjes" },
      { headline: "Max 4 personen", sub: "persoonlijke aandacht" },
    ],
    hashtags: ["#amsterdam", "#jordaan", "#personaltrainer", "#opengym", "#fitamsterdam", "#krachttraining"],
    ctaUrl: "sculptclub.nl/nl/open-gym",
  },
  {
    id: "education",
    audience: "client",
    label: "Educatie / tip",
    blurb: "Waarde eerst — een tip die indirect naar PT-find funnelt.",
    openings: [
      "Eén ding dat je training direct beter maakt:",
      "Korte tip uit de studio:",
      "Veelgemaakte fout — en hoe je 'm oplost:",
    ],
    factBullets: [
      "begeleiding van een trainer vanaf €45",
      "eerste intake gratis",
      "privé studio in de Jordaan",
      "NL- én Engelssprekende trainers",
    ],
    ctas: ["Wil je dit 1-op-1 leren? Plan je gratis intake", "Train het uit met een trainer", "Vind jouw trainer"],
    hooks: [
      "De meeste mensen doen dit verkeerd bij de squat.",
      "Eén cue die je deadlift meteen veiliger maakt.",
      "Stop met dit — begin met dat.",
    ],
    slides: [
      { headline: "De tip", sub: "techniek vóór gewicht" },
      { headline: "Waarom het werkt", sub: "vorm beschermt je" },
      { headline: "Leer het 1-op-1", sub: "intake gratis · Jordaan" },
    ],
    hashtags: ["#krachttraining", "#fitnesstips", "#personaltrainer", "#amsterdam", "#jordaan", "#techniek"],
    ctaUrl: "sculptclub.nl/nl/vind-jouw-personal-trainer",
  },

  // ── TRAINER (supply — rent + freedom framing, NEVER "0% commissie" badge) ──
  {
    id: "rent",
    audience: "trainer",
    label: "Studio huren",
    blurb: "Trainer-werving — huur de studio, train je eigen klanten.",
    openings: [
      "Huur onze privé studio en train je eigen klanten in de Jordaan.",
      "Jouw eigen studio-uren, jouw klanten, jouw tarief.",
      "Train zelfstandig in een grachtenpand — wij verzorgen de ruimte.",
    ],
    factBullets: [
      "studio huren vanaf €12 per 60 min",
      "jij houdt je eigen klanten en tarief",
      "volledige vrijheid in je planning",
      "je betaalt alleen de huur",
      "privé studio aan de Egelantiersgracht",
      "dagelijks beschikbaar van 06:00 tot 22:00",
    ],
    ctas: ["Bekijk de huurtarieven", "Plan een rondleiding", "Reserveer je eerste uur"],
    hooks: [
      "Studio huren vanaf €12/uur — jouw klanten, jouw tarief.",
      "Geen eigen zaak openen. Wel je eigen studio-uren.",
      "Train zelfstandig in de Jordaan — betaal alleen de ruimte.",
    ],
    slides: [
      { headline: "Studio huren", sub: "vanaf €12 / 60 min" },
      { headline: "Jouw klanten", sub: "jouw tarief · jouw planning" },
      { headline: "Privé studio", sub: "Egelantiersgracht · Jordaan" },
    ],
    hashtags: ["#personaltrainer", "#studiohuren", "#amsterdam", "#jordaan", "#zzp", "#ptamsterdam", "#trainingsruimte"],
    ctaUrl: "sculptclub.nl/nl/studio-huren",
  },
  {
    id: "trainer-proof",
    audience: "trainer",
    label: "Waarom trainers kiezen",
    blurb: "Trainer social proof — vrijheid, flexibele huur, eigen klanten.",
    openings: [
      "Waarom zelfstandige trainers voor onze studio kiezen.",
      "Wat trainers hier het meest waarderen.",
      "Geen sportschool-baas, wel je eigen plek.",
    ],
    factBullets: [
      "je houdt 100% van je eigen klanten",
      "flexibele huur vanaf €12 per 60 min",
      "geen langlopend contract",
      "een rustige privé studio, geen drukke gym",
      "centraal in de Jordaan",
    ],
    ctas: ["Bekijk hoe het werkt", "Plan een rondleiding", "Bekijk de tarieven"],
    hooks: [
      "Je houdt je eigen klanten. Wij verhuren alleen de ruimte.",
      "Flexibel huren vanaf €12/uur, geen contract dat je vastzet.",
      "Een privé studio in de Jordaan — als thuiswerken, maar dan pro.",
    ],
    slides: [
      { headline: "Jouw klanten blijven van jou", sub: "wij verhuren de ruimte" },
      { headline: "Vanaf €12/uur", sub: "flexibel · geen contract" },
      { headline: "Jordaan", sub: "privé studio aan de gracht" },
    ],
    hashtags: ["#personaltrainer", "#zzp", "#studiohuren", "#amsterdam", "#jordaan", "#ptamsterdam"],
    ctaUrl: "sculptclub.nl/nl/studio-huren",
  },
];

/* ── pure helpers (deterministic by seed → re-roll varies, no hydration risk) ── */
function pick<T>(arr: T[], n: number): T {
  return arr[((n % arr.length) + arr.length) % arr.length];
}
function pickN<T>(arr: T[], count: number, seed: number): T[] {
  const out: T[] = [];
  const len = arr.length;
  for (let i = 0; i < Math.min(count, len); i++) out.push(arr[(((seed + i) % len) + len) % len]);
  return out;
}

export interface ComposedPost {
  hook: string;
  caption: string;
  hashtags: string;
  slides: { headline: string; sub: string }[];
  ctaUrl: string;
  bioLink: string;
  format: ComposerFormat;
}

/**
 * Compose a post draft. `topic` (optional, operator's own words) replaces the
 * generated opening + hook so the one risky line is in the operator's voice;
 * everything else stays verified-fact + house format.
 */
export function composePost(
  pillar: ComposerPillar,
  format: ComposerFormat,
  topic: string,
  roll: number,
): ComposedPost {
  const t = topic.trim();
  const opening = t || pick(pillar.openings, roll);
  const hook = t || pick(pillar.hooks, roll);
  const bullets = pickN(pillar.factBullets, 4, roll);
  const cta = pick(pillar.ctas, roll + 1);
  const hashtags = pickN(pillar.hashtags, 5, roll).join(" ");

  const body =
    format === "tiktok"
      ? `${opening}\n\n${bullets.join(" · ")}.\n\n${cta}\n${pillar.ctaUrl}`
      : `${opening}\n\n${bullets.join(" · ")}.\n\n${cta} · link in bio 👆`;

  return {
    hook,
    caption: `${body}\n\n${hashtags}`,
    hashtags,
    slides: pillar.slides,
    ctaUrl: pillar.ctaUrl,
    bioLink: BIO(pillar.audience),
    format,
  };
}
