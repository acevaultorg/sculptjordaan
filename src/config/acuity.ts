/**
 * All Acuity Scheduling links used across the site.
 * IMPORTANT: Every booking button must use one of these links.
 */

import type { Locale } from "./site";

const ACUITY_BASE = "https://app.acuityscheduling.com/schedule.php";
const OWNER = "sculptclub";

export const acuityLinks = {
  /** Main booking page — embeds or links to the full scheduler */
  book: (locale: Locale) =>
    locale === "nl"
      ? `${ACUITY_BASE}?owner=${OWNER}`
      : `${ACUITY_BASE}?owner=${OWNER}`,

  /** Open Gym booking (specific appointment type) */
  openGym: `${ACUITY_BASE}?owner=${OWNER}&appointmentType=87017445`,

  /** Trainer intake — free consultation */
  trainerIntake: (trainerName: string) =>
    `${ACUITY_BASE}?owner=${OWNER}&calendarID=${trainerName}`,

  /** Generic booking link */
  generic: `${ACUITY_BASE}?owner=${OWNER}`,
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
  trainer: {
    nl: { label: "Plan gratis intake", href: acuityLinks.generic },
    en: { label: "Book free intro", href: acuityLinks.generic },
  },
  openGym: {
    nl: { label: "Boek Open Gym", href: acuityLinks.openGym },
    en: { label: "Book Open Gym", href: acuityLinks.openGym },
  },
  studioRental: {
    nl: { label: "Huur de Studio", href: acuityLinks.generic },
    en: { label: "Rent the Studio", href: acuityLinks.generic },
  },
  blog: {
    nl: {
      primary: { label: "Boek Gratis Proefles", href: acuityLinks.generic },
      whatsapp: { label: "WhatsApp ons", href: "https://wa.me/31683178934" },
      openGym: { label: "Boek Open Gym", href: acuityLinks.openGym },
    },
    en: {
      primary: { label: "Book Free Trial", href: acuityLinks.generic },
      whatsapp: { label: "WhatsApp us", href: "https://wa.me/31683178934" },
      openGym: { label: "Book Open Gym", href: acuityLinks.openGym },
    },
  },
} as const;
