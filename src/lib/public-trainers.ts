import type { Locale } from "@/config/site";
import publicData from "@/data/amsterdam-trainers-public.json";

/**
 * Public listings for the trainer directory (/nl/trainers, /en/trainers).
 *
 * WHAT THIS IS (Paulo, card mur25os738na7x, 2026-10-02: "a site with all trainers of
 * Amsterdam, link to their Instagram"). It supersedes the consent-only line of 2026-09-30
 * (card muo24oe4otc0tc) for LISTINGS only — profile pages stay consent-only.
 *
 * Rules every entry in src/data/amsterdam-trainers-public.json follows:
 *  - public BUSINESS info only, read from the trainer's own website (or a studio's public
 *    "our trainers" page): name as published, specialties, neighbourhood, languages, a
 *    price only when the site publishes one, the website, and an Instagram link ONLY when
 *    that website itself links to it. Every entry stores the page it was read from
 *    (`source_url`) and the date (`checked`).
 *  - never scraped from Instagram or any social network; no photos, no phone numbers, no
 *    e-mail addresses, no street addresses (neighbourhood only).
 *  - no profile page per listing: a card on the list, with the source and an easy
 *    "edit or remove" link (contact@sculptclub.nl). A trainer who wants a full profile uses
 *    the add-your-profile form, and then moves to trainer-directory.json with consent.
 *  - removal requests are honoured by deleting the entry; never re-add a removed name
 *    (put it in `removed` so a later refresh cannot bring it back).
 */

export interface PublicTrainer {
  id: string;
  name: string;
  kind: "trainer" | "studio";
  area: string;
  tags: string[];
  languages: string[];
  price: string | null;
  website: string;
  websiteLabel: string;
  instagram: string | null;
  sourceUrl: string;
  checked: string;
}

interface RawEntry {
  name: string;
  kind?: string;
  area: string;
  specialities?: string[];
  languages?: string[] | null;
  price?: string | null;
  website: string;
  instagram?: string | null;
  source_url: string;
  checked: string;
}

/** Fixed speciality vocabulary (filter keys are the English words). */
export const TAGS: Record<string, Record<Locale, string>> = {
  Strength: { nl: "Kracht", en: "Strength" },
  "Weight loss": { nl: "Afvallen", en: "Weight loss" },
  Nutrition: { nl: "Voeding", en: "Nutrition" },
  Mobility: { nl: "Mobiliteit", en: "Mobility" },
  Rehab: { nl: "Revalidatie", en: "Rehab" },
  "Pre/postnatal": { nl: "Zwanger & na de bevalling", en: "Pre/postnatal" },
  Women: { nl: "Voor vrouwen", en: "For women" },
  Seniors: { nl: "55+", en: "55+" },
  Boxing: { nl: "Boksen", en: "Boxing" },
  Calisthenics: { nl: "Calisthenics", en: "Calisthenics" },
  HIIT: { nl: "HIIT", en: "HIIT" },
  Running: { nl: "Hardlopen", en: "Running" },
  Yoga: { nl: "Yoga", en: "Yoga" },
  Pilates: { nl: "Pilates", en: "Pilates" },
};

export const AREAS = [
  "Jordaan",
  "Centrum",
  "Westerpark",
  "Oud-West",
  "De Baarsjes",
  "Bos en Lommer",
  "Nieuw-West",
  "Zuid",
  "Oud-Zuid",
  "De Pijp",
  "Zuidas",
  "Rivierenbuurt",
  "Buitenveldert",
  "Oost",
  "Watergraafsmeer",
  "IJburg",
  "Noord",
  "Mobile/at home",
] as const;

export function areaLabel(area: string, locale: Locale): string {
  if (area === "Mobile/at home") return locale === "nl" ? "Aan huis of buiten" : "At home or outdoors";
  return area;
}

function normTag(t: string): string | null {
  const s = t.trim().toLowerCase();
  const hit = Object.keys(TAGS).find((k) => k.toLowerCase() === s);
  if (hit) return hit;
  if (/strength|kracht|power/.test(s)) return "Strength";
  if (/weight|fat|afvallen/.test(s)) return "Weight loss";
  if (/nutrition|voeding|diet/.test(s)) return "Nutrition";
  if (/mobility|mobiliteit|flexib/.test(s)) return "Mobility";
  if (/rehab|revalid|injur|blessure|recovery|herstel/.test(s)) return "Rehab";
  if (/pre|post|natal|pregnan|zwanger/.test(s)) return "Pre/postnatal";
  if (/women|vrouw|female/.test(s)) return "Women";
  if (/senior|55|older|ouder/.test(s)) return "Seniors";
  if (/box|kickbox|martial/.test(s)) return "Boxing";
  if (/calisthenic/.test(s)) return "Calisthenics";
  if (/hiit|interval|bootcamp/.test(s)) return "HIIT";
  if (/run|hardlo/.test(s)) return "Running";
  if (/yoga/.test(s)) return "Yoga";
  if (/pilates/.test(s)) return "Pilates";
  return null;
}

/** Map free-text roster specialties (English) onto the filter vocabulary. */
export function tagsFromText(specs: string[]): string[] {
  const out = new Set<string>();
  for (const s of specs) {
    const t = normTag(s);
    if (t) out.add(t);
  }
  return [...out];
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const data = publicData as { listings: RawEntry[]; removed?: string[] };
const removed = new Set((data.removed ?? []).map((n) => n.toLowerCase()));

export const publicTrainers: PublicTrainer[] = (data.listings ?? [])
  // An entry whose area is not one of AREAS is dropped, never guessed into a neighbourhood.
  .filter((e) => e.name && e.website && e.source_url && !removed.has(e.name.toLowerCase()))
  .filter((e) => (AREAS as readonly string[]).includes(e.area))
  .map((e) => ({
    id: slugify(e.name),
    name: e.name,
    kind: e.kind === "studio" ? ("studio" as const) : ("trainer" as const),
    area: e.area,
    tags: tagsFromText(e.specialities ?? []).slice(0, 4),
    languages: (e.languages ?? []).map((l) => l.toUpperCase()).filter((l) => /^[A-Z]{2}$/.test(l)),
    price: e.price && e.price.trim() ? e.price.trim() : null,
    website: e.website,
    websiteLabel: e.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, ""),
    instagram: e.instagram && /^https:\/\/(www\.)?instagram\.com\/[A-Za-z0-9._]+\/?$/.test(e.instagram) ? e.instagram : null,
    sourceUrl: e.source_url,
    checked: e.checked,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));
