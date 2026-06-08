/**
 * All Acuity Scheduling links — exact match with live sculptclub.nl
 * Owner ID: 36720238
 * Schedule slug: fba376d5
 *
 * ─────────────────────────────────────────────────────────────────────
 *  CRITICAL: FREE vs PAID Acuity links have DIFFERENT integration rules
 * ─────────────────────────────────────────────────────────────────────
 *
 *  FREE try-outs (`acuityFreeTrials`)
 *    ✓ CAN be EMBEDDED via <AcuityEmbed> on sculptclub.nl pages
 *    ✓ No payment, so no Apple Pay concerns
 *    ✓ Visitor stays on sculptclub.nl during booking
 *    Used on: /nl/open-gym, /en/open-gym, /nl/studio-huren, /en/studio-rental
 *
 *  PAID sessions/packs (`acuityPaidSessions` / `acuityPackages`)
 *    ✗ MUST NOT be embedded in iframe
 *    ✗ Apple Pay's PaymentRequest API is BLOCKED inside iframes
 *    ✓ Use target="_blank" links to full Acuity domain
 *
 *  Personal Training free intake
 *    ✗ NOT an Acuity flow at all
 *    ✓ Goes through trainer-specific WhatsApp OR /nl/contact form
 *    Hub page: /nl/vind-jouw-personal-trainer (lists 8 trainers)
 *
 *  The legacy `acuityLinks` export below is kept as a DEPRECATED alias
 *  for backwards-compat with 30+ existing call sites. New code MUST use
 *  the explicit acuityFreeTrials / acuityPaidSessions objects.
 *
 *  The legacy `acuityLinks.generic` URL (Acuity master schedule) does
 *  NOT WORK — operator has disabled the public master booking page in
 *  Acuity settings. It returns "Online scheduling is not currently
 *  available." All 23 call sites of acuityLinks.generic are broken in
 *  production and should be migrated to either a specific deep-link
 *  or the trainer-finder /nl/vind-jouw-personal-trainer fallback.
 */

const SCHEDULE = "https://app.acuityscheduling.com/schedule.php";
const CATALOG = "https://app.acuityscheduling.com/catalog.php";
const OWNER = "36720238";

// ─── FREE try-outs ──────────────────────────────────────────────────
// Both can be safely embedded via <AcuityEmbed> (no payment = no Apple Pay).
// Live verified 2026-05-06: deep-link URLs load working calendars in iframe.
export const acuityFreeTrials = {
  /**
   * Free Open Gym try-out (appointmentType=87017445).
   * Embed on /nl/open-gym + /en/open-gym free-trial CTA section.
   */
  openGymTryout: `${SCHEDULE}?owner=${OWNER}&appointmentType=87017445`,

  /**
   * Free Studio Rental try-out (appointmentType=86758291).
   * Title shown in Acuity: "Free try out: Full Studio 60 min with SculptClub".
   * Embed on /nl/studio-huren + /en/studio-rental free-trial CTA section.
   * NOTE: this is for STUDIO RENTAL trial, NOT for personal-training intake.
   */
  studioRentalTryout: `https://app.acuityscheduling.com/schedule/fba376d5/appointment/86758291/calendar/12633534?appointmentTypeIds[]=86758291`,
} as const;

// ─── PAID single sessions ───────────────────────────────────────────
// MUST be opened via target="_blank" — never embedded.
// Apple Pay's PaymentRequest API is blocked inside iframes.
export const acuityPaidSessions = {
  /** Paid Open Gym single session (appointmentType=83513953) */
  openGymSession: `${SCHEDULE}?owner=${OWNER}&appointmentType=83513953`,

  /** Studio Rental Half 60min — €12 (appointmentType=84032351) */
  studioRentalHalf60: `${SCHEDULE}?owner=${OWNER}&appointmentType=84032351`,

  /** Studio Rental Half 90min — €17 (appointmentType=86677323) */
  studioRentalHalf90: `${SCHEDULE}?owner=${OWNER}&appointmentType=86677323`,

  /** Studio Rental Full 60min — €17 (appointmentType=82553655) */
  studioRentalFull60: `${SCHEDULE}?owner=${OWNER}&appointmentType=82553655`,

  /** Studio Rental Full 90min — €24 (appointmentType=85410115) */
  studioRentalFull90: `${SCHEDULE}?owner=${OWNER}&appointmentType=85410115`,

  /** Open Gym multi-session plan add-to-cart links (paid) */
  openGymPlans: {
    instapplan: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155887`,
    populair: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155888`,
    intensief: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155889`,
    onbeperkt: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155890`,
  },
} as const;

// ─── PAID packages (catalog.php) ────────────────────────────────────
// MUST be opened via target="_blank" — Apple Pay restriction.
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

// ─── DEPRECATED aliases (backwards-compat) ──────────────────────────
// Existing call sites still resolve through this object. ALL NEW code
// MUST use the explicit acuityFreeTrials / acuityPaidSessions objects
// above so the FREE-vs-PAID distinction is explicit at the call site.
export const acuityLinks = {
  /** @deprecated → use `acuityPaidSessions.studioRentalHalf60` */
  halfStudio60: acuityPaidSessions.studioRentalHalf60,
  /** @deprecated → use `acuityPaidSessions.studioRentalHalf90` */
  halfStudio90: acuityPaidSessions.studioRentalHalf90,
  /** @deprecated → use `acuityPaidSessions.studioRentalFull60` */
  fullStudio60: acuityPaidSessions.studioRentalFull60,
  /** @deprecated → use `acuityPaidSessions.studioRentalFull90` */
  fullStudio90: acuityPaidSessions.studioRentalFull90,
  /** @deprecated → use `acuityPaidSessions.openGymSession` */
  openGymBook: acuityPaidSessions.openGymSession,
  /** @deprecated → use `acuityFreeTrials.openGymTryout` (note: FREE) */
  openGymTrial: acuityFreeTrials.openGymTryout,
  /**
   * @deprecated → use `acuityFreeTrials.studioRentalTryout` (note: FREE).
   * IMPORTANT: this is the STUDIO RENTAL trial, NOT a personal-training
   * intake. PT intake flows through trainer WhatsApp + /nl/contact form,
   * not Acuity.
   */
  studioTrial: acuityFreeTrials.studioRentalTryout,
  /**
   * @deprecated DOES NOT WORK — operator disabled the Acuity master
   * schedule page in Acuity settings. Returns "Online scheduling is
   * not currently available." Migrate call sites to either:
   *  - `/nl/vind-jouw-personal-trainer` for PT intake hub
   *  - `acuityFreeTrials.openGymTryout` for Open Gym free trial
   *  - `acuityFreeTrials.studioRentalTryout` for Studio Rental free trial
   *  - `acuityPaidSessions.X` for specific paid sessions
   */
  generic: `${SCHEDULE}?owner=${OWNER}`,
  /** @deprecated → use `acuityPaidSessions.openGymPlans` */
  openGymPlans: acuityPaidSessions.openGymPlans,
} as const;

// ─── WhatsApp Links ──────────────────────────────────────────────
// Personal Training free intake flows through these WhatsApp links
// (per-trainer when possible, generic fallback otherwise) plus the
// /nl/contact + /en/contact form pages.
export const whatsappLinks = {
  /** Generic question */
  nl: `https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik heb een vraag over SculptClub")}`,
  en: `https://wa.me/31615147952?text=${encodeURIComponent("Hi! I have a question about SculptClub")}`,
  /** Open Gym interest */
  openGymNl: `https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik heb interesse in Open Gym bij SculptClub")}`,
  openGymEn: `https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'm interested in Open Gym at SculptClub")}`,
  /** Studio rental interest */
  studioNl: `https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik wil graag meer weten over studio huren bij SculptClub")}`,
  studioEn: `https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'd like to know more about renting the studio at SculptClub")}`,
  /** Tour request (Q, 2026-06-02) — lower-friction "see the space first" entry,
      validated by Vondelgym's "Boek rondleiding". Routes to the WhatsApp Business
      line (auto-replies live) — NOT a new Acuity type (Acuity types are operator-
      only per CLAUDE.md). Especially strong for the ZZP-trainer funnel: trainers
      want to see equipment + the room before committing to hourly rental. */
  tourNl: `https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik wil graag een rondleiding plannen bij SculptClub (15 min, vrijblijvend).")}`,
  tourEn: `https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'd like to book a tour of SculptClub (15 min, no obligation).")}`,
  /** PT free-intake — "match me with a trainer" path for paid traffic landing on
      /nl/gratis-intake + /en/free-intro. Shortcuts the trainer-finder hub flow
      (which was driving 100% bounces from Google Ads visitors per Clarity
      recordings audit 2026-05-16: 2 paid visitors / both 5-11s bounce / 0 clicks).
      One-click direct conversion via WhatsApp pre-filled with intake intent. */
  intakeMatchNl: `https://wa.me/31615147952?text=${encodeURIComponent("Hoi! Ik wil graag een gratis intake boeken. Kun je mij matchen met de juiste trainer?")}`,
  intakeMatchEn: `https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'd like to book a free intake. Can you match me with the right trainer?")}`,
  /** Trainer intake — per trainer. Opens WhatsApp with pre-filled free-intro enquiry. */
  trainerIntake: (name: string, locale: "nl" | "en", baseUrl?: string) => {
    const base = baseUrl ?? "https://wa.me/31615147952";
    const text =
      locale === "nl"
        ? `Hoi! Ik wil graag een gratis intake boeken bij ${name} van SculptClub`
        : `Hi! I'd like to book a free intro with ${name} at SculptClub`;
    return `${base}?text=${encodeURIComponent(text)}`;
  },
  /** Trainer price request — per trainer. Opens WhatsApp with pre-filled rate enquiry + free intro. */
  trainerPriceRequest: (name: string, locale: "nl" | "en", baseUrl?: string) => {
    const base = baseUrl ?? "https://wa.me/31615147952";
    const text =
      locale === "nl"
        ? `Hoi! Ik wil graag het tarief weten van ${name} en een gratis intake plannen.`
        : `Hi! I'd like to know ${name}'s rate and book a free intro.`;
    return `${base}?text=${encodeURIComponent(text)}`;
  },
  /** Generic (no pre-filled text) */
  generic: "https://wa.me/31615147952",
  /** Bank transfer for Volume pack */
  bankTransferNl: `https://wa.me/31615147952?text=${encodeURIComponent("Hi! Ik wil graag het Volume pakket (€549) kopen en betalen via bankoverschrijving. Mijn naam:")}`,
  bankTransferEn: `https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'd like to order the Volume pack (€549) and pay via bank transfer. My name:")}`,
  /** Studio pack — per-pack "Betaal per factuur" (pay by invoice) WhatsApp, the
      secondary action beside the Koop/Acuity button on each /boek-studio package
      card (Q 2026-06-08). Wording includes "studio huren" / "renting the studio"
      so detectWaIntent classifies these clicks as studio_rental/paid. */
  studioPackInvoice: (pack: "Starter" | "Routine" | "Pro" | "Volume", price: number, locale: "nl" | "en") => {
    const text =
      locale === "nl"
        ? `Hoi! Ik wil graag het ${pack}-pakket voor studio huren (€${price}) kopen en per factuur betalen. Mijn naam:`
        : `Hi! I'd like to buy the ${pack} studio-rental pack — renting the studio (€${price}) — and pay by invoice. My name:`;
    return `https://wa.me/31615147952?text=${encodeURIComponent(text)}`;
  },
  /** Dara has her own WhatsApp number */
  dara: "https://wa.me/31645658213",
} as const;
