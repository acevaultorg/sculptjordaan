/**
 * All Acuity Scheduling links — exact match with live sculptclub.nl
 * Owner ID: 36720238
 * Schedule slug: fba376d5
 */

const SCHEDULE = "https://app.acuityscheduling.com/schedule.php";
const CATALOG = "https://app.acuityscheduling.com/catalog.php";
const OWNER = "36720238";

// ─── Single Session Booking (schedule.php) ───────────────────────
export const acuityLinks = {
  /** Studio Rental — Half Studio 60 min (€12) */
  halfStudio60: `${SCHEDULE}?owner=${OWNER}&appointmentType=84032351`,
  /** Studio Rental — Half Studio 90 min (€17) */
  halfStudio90: `${SCHEDULE}?owner=${OWNER}&appointmentType=86677323`,
  /** Studio Rental — Full Studio 60 min (€17) */
  fullStudio60: `${SCHEDULE}?owner=${OWNER}&appointmentType=82553655`,
  /** Studio Rental — Full Studio 90 min (€24) */
  fullStudio90: `${SCHEDULE}?owner=${OWNER}&appointmentType=85410115`,
  /** Open Gym — book a session (existing members) */
  openGymBook: `${SCHEDULE}?owner=${OWNER}&appointmentType=83513953`,
  /** Free try-out — Open Gym */
  openGymTrial: `${SCHEDULE}?owner=${OWNER}&appointmentType=87017445`,
  /** Free try-out — Studio Rental */
  studioTrial: `https://app.acuityscheduling.com/schedule/fba376d5/appointment/86758291/calendar/12633534?appointmentTypeIds[]=86758291`,
  /** Generic scheduler (used by pages that don't target a specific appointment type) */
  generic: `${SCHEDULE}?owner=${OWNER}`,
  /** Aliases for Open Gym plans (used across pages) */
  openGymPlans: {
    instapplan: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155887`,
    populair: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155888`,
    intensief: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155889`,
    onbeperkt: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155890`,
  },
} as const;

// ─── Package Purchases (catalog.php) ─────────────────────────────
export const acuityPackages = {
  /** Studio rental discount packs */
  studio: {
    starter: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2149357`,
    routine: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2149358`,
    pro: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2149359`,
    volume: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2149360`,
  },
  /** Open Gym membership plans */
  openGym: {
    once: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155887`,
    twice: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155888`,
    thrice: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155889`,
    unlimited: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155890`,
  },
  /** Open Gym "Train Together" duo plans (EN only on old site) */
  openGymDuo: {
    once: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2160074`,
    twice: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2160077`,
  },
} as const;

// ─── WhatsApp Links ──────────────────────────────────────────────
export const whatsappLinks = {
  /** Generic question */
  nl: `https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik heb een vraag over SculptClub")}`,
  en: `https://wa.me/31683178934?text=${encodeURIComponent("Hi! I have a question about SculptClub")}`,
  /** Open Gym interest */
  openGymNl: `https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik heb interesse in Open Gym bij SculptClub")}`,
  openGymEn: `https://wa.me/31683178934?text=${encodeURIComponent("Hi! I'm interested in Open Gym at SculptClub")}`,
  /** Studio rental interest */
  studioNl: `https://wa.me/31683178934?text=${encodeURIComponent("Hoi! Ik wil graag meer weten over studio huren bij SculptClub")}`,
  studioEn: `https://wa.me/31683178934?text=${encodeURIComponent("Hi! I'd like to know more about renting the studio at SculptClub")}`,
  /** Trainer intake — per trainer */
  trainerIntake: (name: string, locale: "nl" | "en") =>
    locale === "nl"
      ? `https://wa.me/31683178934?text=${encodeURIComponent(`Hoi! Ik wil graag een gratis intake boeken bij ${name} van SculptClub`)}`
      : `https://wa.me/31683178934?text=${encodeURIComponent(`Hi! I'd like to book a free intro with ${name} at SculptClub`)}`,
  /** Generic (no pre-filled text) */
  generic: "https://wa.me/31683178934",
  /** Bank transfer for Volume pack */
  bankTransferNl: `https://wa.me/31683178934?text=${encodeURIComponent("Hi! Ik wil graag het Volume pakket (€549) kopen en betalen via bankoverschrijving. Mijn naam:")}`,
  bankTransferEn: `https://wa.me/31683178934?text=${encodeURIComponent("Hi! I'd like to order the Volume pack (€549) and pay via bank transfer. My name:")}`,
  /** Dara has her own WhatsApp number */
  dara: "https://wa.me/31645658213",
} as const;
