import type { Locale } from "@/config/site";
import { trainers } from "@/config/trainers";
import communityData from "@/data/trainer-directory.json";

/**
 * One shape for every trainer in the directory (/nl/trainers, /en/trainers).
 *
 * Two sources, both real data only:
 *  1. the SculptClub roster in src/config/trainers.ts (already on the site)
 *  2. community listings in src/data/trainer-directory.json, added by hand and
 *     only after the trainer agreed to be listed (`consent: true`).
 * Nothing is scraped and nobody is listed without consent.
 */

export interface DirectoryTrainer {
  slug: string;
  name: string;
  source: "studio" | "community";
  photo: string | null;
  imagePosition?: string;
  credentials: Record<Locale, string> | null;
  specialties: Record<Locale, string[]>;
  neighbourhood: Record<Locale, string>;
  languages: string[];
  bio: Record<Locale, string> | null;
  /** Where "book" goes. Roster trainers: their own intake page on this site. */
  booking: { href: Record<Locale, string>; external: boolean } | null;
  website: { url: string; label: string } | null;
  instagram: string | null;
}

interface CommunityEntry {
  slug: string;
  name: string;
  consent?: boolean;
  photo?: string;
  specialties: Record<Locale, string[]>;
  neighbourhood: Record<Locale, string>;
  languages: string[];
  bio?: Record<Locale, string>;
  bookingUrl?: string;
  website?: string;
  instagram?: string;
}

const fromRoster: DirectoryTrainer[] = trainers.map((t) => ({
  slug: t.id,
  name: t.name,
  source: "studio" as const,
  photo: t.image || null,
  imagePosition: t.imagePosition,
  credentials: t.credentials ?? null,
  specialties: t.specialization,
  // Roster trainers are listed on the site as SculptClub trainers in the Jordaan.
  neighbourhood: { nl: "Jordaan", en: "Jordaan" },
  languages: t.languages,
  bio: t.bio,
  booking: {
    href: { nl: `/nl/${t.slug.nl}`, en: `/en/${t.slug.en}` },
    external: false,
  },
  website: t.website ? { url: t.website.url, label: t.website.label } : null,
  instagram: t.instagram ?? null,
}));

const fromCommunity: DirectoryTrainer[] = (
  (communityData as { listings: CommunityEntry[] }).listings ?? []
)
  .filter((e) => e.consent === true && e.slug && e.name)
  .map((e) => ({
    slug: e.slug,
    name: e.name,
    source: "community" as const,
    photo: e.photo ?? null,
    credentials: null,
    specialties: e.specialties,
    neighbourhood: e.neighbourhood,
    languages: e.languages,
    bio: e.bio ?? null,
    booking: e.bookingUrl ? { href: { nl: e.bookingUrl, en: e.bookingUrl }, external: true } : null,
    website: e.website
      ? { url: e.website, label: e.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") }
      : null,
    instagram: e.instagram ?? null,
  }));

/**
 * Roster trainers who are NOT current renters (src: docs/TRAINER-ROSTER-RECONCILIATION-2026-08-25.md,
 * CLAUDE.md "Trainers"): Bryan (last rental 2026-03), Tom (never rented), Sergei (last rental 2026-07-11,
 * quiet 49+ days). They keep their intake pages but are not shown in the directory until the
 * operator confirms they are active. Remove an id from this list to list them.
 */
const NOT_LISTED = new Set(["bryan", "tom", "sergei"]);

export const directoryTrainers: DirectoryTrainer[] = [...fromRoster, ...fromCommunity].filter(
  (t) => !NOT_LISTED.has(t.slug),
);

export function getDirectoryTrainer(slug: string): DirectoryTrainer | undefined {
  return directoryTrainers.find((t) => t.slug === slug);
}

const LANGUAGE_NAMES: Record<Locale, Record<string, string>> = {
  nl: { NL: "Nederlands", EN: "Engels", PT: "Portugees", RU: "Russisch", IT: "Italiaans", ES: "Spaans", FR: "Frans", DE: "Duits" },
  en: { NL: "Dutch", EN: "English", PT: "Portuguese", RU: "Russian", IT: "Italian", ES: "Spanish", FR: "French", DE: "German" },
};

export function languageNames(codes: string[], locale: Locale): string {
  return codes.map((c) => LANGUAGE_NAMES[locale][c] ?? c).join(", ");
}

export const directoryPaths = {
  nl: { list: "/nl/trainers", add: "/nl/trainers/profiel-toevoegen", profile: (slug: string) => `/nl/trainers/${slug}` },
  en: { list: "/en/trainers", add: "/en/trainers/add-your-profile", profile: (slug: string) => `/en/trainers/${slug}` },
} as const;
