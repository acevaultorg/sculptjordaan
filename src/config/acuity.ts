/**
 * All Acuity Scheduling links used across the site.
 * IMPORTANT: Every booking button must use one of these links.
 * Owner ID: 36720238 (from live sculptclub.nl)
 */

import type { Locale } from "./site";

const ACUITY_BASE = "https://app.acuityscheduling.com/schedule.php";
const ACUITY_CATALOG = "https://app.acuityscheduling.com/catalog.php";
const OWNER = "36720238";

export const acuityLinks = {
  /** Main scheduler — all appointment types */
  schedule: `${ACUITY_BASE}?owner=${OWNER}`,

  /** Specific appointment types from the live site */
  appointments: {
    type1: `${ACUITY_BASE}?owner=${OWNER}&appointmentType=84032351`,
    type2: `${ACUITY_BASE}?owner=${OWNER}&appointmentType=86677323`,
    type3: `${ACUITY_BASE}?owner=${OWNER}&appointmentType=82553655`,
    type4: `${ACUITY_BASE}?owner=${OWNER}&appointmentType=85410115`,
  },

  /** Open Gym — existing members book a session */
  openGymBook: `${ACUITY_BASE}?owner=${OWNER}&appointmentType=83513953`,

  /** Open Gym — new members buy a plan (catalog) */
  openGymPlans: {
    instapplan: `${ACUITY_CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155887`,
    populair: `${ACUITY_CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155889`,
    intensief: `${ACUITY_CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155891`,
    onbeperkt: `${ACUITY_CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155893`,
  },

  /** Studio rental packages (catalog) */
  studioPackages: {
    starter: `${ACUITY_CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2167201`,
    routine: `${ACUITY_CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2167203`,
    volume: `${ACUITY_CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2167205`,
  },

  /** Generic booking link */
  generic: `${ACUITY_BASE}?owner=${OWNER}`,
} as const;

/** WhatsApp links with pre-filled messages */
export const whatsappLinks = {
  generic: "https://wa.me/31683178934",
  trainerIntake: (trainerName: string, locale: "nl" | "en") =>
    locale === "nl"
      ? `https://wa.me/31683178934?text=${encodeURIComponent(`Hoi! Ik wil graag een gratis intake boeken bij ${trainerName} van SculptClub`)}`
      : `https://wa.me/31683178934?text=${encodeURIComponent(`Hi! I'd like to book a free intro with ${trainerName} at SculptClub`)}`,
  openGym: (locale: "nl" | "en") =>
    locale === "nl"
      ? `https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik wil graag meer weten over Open Gym bij SculptClub")}`
      : `https://wa.me/31683178934?text=${encodeURIComponent("Hi! I'd like to know more about Open Gym at SculptClub")}`,
  studioRental: (locale: "nl" | "en") =>
    locale === "nl"
      ? `https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik wil graag de studio huren bij SculptClub")}`
      : `https://wa.me/31683178934?text=${encodeURIComponent("Hi! I'd like to rent the studio at SculptClub")}`,
} as const;

/** CTA button configs for different contexts */
export const ctaButtons = {
  hero: {
    nl: {
      primary: { label: "Boek Gratis Proefles", href: acuityLinks.generic },
      secondary: { label: "Ontdek Open Gym", href: "/nl/open-gym" },
    },
    en: {
      primary: { label: "Book Free Trial", href: acuityLinks.generic },
      secondary: { label: "Discover Open Gym", href: "/en/open-gym" },
    },
  },
  openGym: {
    nl: {
      book: { label: "Boek Open Gym Sessie", href: acuityLinks.openGymBook },
      plans: { label: "Koop een Plan", href: acuityLinks.openGymPlans.populair },
    },
    en: {
      book: { label: "Book Open Gym Session", href: acuityLinks.openGymBook },
      plans: { label: "Buy a Plan", href: acuityLinks.openGymPlans.populair },
    },
  },
  studioRental: {
    nl: { label: "Huur de Studio", href: acuityLinks.generic },
    en: { label: "Rent the Studio", href: acuityLinks.generic },
  },
} as const;
