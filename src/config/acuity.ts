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

  /** Studio Rental Half 90min — €17 (appointmentType=86677323).
   * NOT ADVERTISED on the site since 2026-07-30 (0× booked in ~3 months per
   * Acuity Reports), but DO NOT DELETE this entry or the Acuity product:
   * operator 2026-07-30 — "de 90 min niet uit acuity verwijderen … mogelijk
   * komt het later nog terug." The product stays bookable via direct link,
   * cached pages keep working, and re-offering it on the site is a matter of
   * re-adding UI that points at this link. */
  studioRentalHalf90: `${SCHEDULE}?owner=${OWNER}&appointmentType=86677323`,

  /** Studio Rental Full 60min — €17 (appointmentType=82553655) */
  studioRentalFull60: `${SCHEDULE}?owner=${OWNER}&appointmentType=82553655`,

  /** Studio Rental Full 90min — €24 (appointmentType=85410115).
   * NOT ADVERTISED on the site since 2026-07-30 — same rule as Half 90min
   * above: KEEP this entry and the Acuity product (operator: may return). */
  studioRentalFull90: `${SCHEDULE}?owner=${OWNER}&appointmentType=85410115`,

  /** Open Gym multi-session plan add-to-cart links (paid) */
  openGymPlans: {
    instapplan: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155887`,
    intensief: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155889`,
    onbeperkt: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2155890`,
  },
} as const;

// ─── Open Gym summer deal (Zomeraanbieding) ─────────────────────────
// Base Onbeperkt list price = €79 / 4 weken. Acuity holds ONE price per
// subscription product, so the deal is a SEPARATE €49 / 4-weken product
// (which is also why existing members keep their own price). Toggle:
//   active:false  → every deal element disappears; base €79 shows plain.
//   endDate       → a REAL operator-set date for the honest urgency line
//                   (null → no date shown, never faked).
//   dealUrl       → the €49 Zomerdeal product's add-to-cart link.
// ✅ ACUITY IN SYNC — VERIFIED LIVE 2026-08-28. Every product was read straight
// from its own Acuity cart and matches the prices published on the site:
//   2155887 Instapplan €29 · 2155890 Onbeperkt €79 · 2247082 Zomerdeal €49
//   2149357 Starter €89 · 2247124 Routine €179 · 2248025 Pro €299 · 2248026 Volume €499
// This CLOSES the 2026-07-21 "ACUITY OUT OF SYNC" warning that used to stand here,
// which said id 2155890 was "still €69" and that the "daarna €79" promise was not
// backed yet. It IS backed: 2155890 reads €79. (The 2026-07-16 note that set it to
// €69 is superseded — the 2026-07-21 raise to €79 did land in Acuity.)
// ACUITY SETUP (2026-07-16, brain-driven via Chrome MCP, operator-authorized):
// new private product "Open gym - Onbeperkt Zomerdeal" (id 2247082) created at €49
// every 4 weeks, forever-until-canceled, unlimited Open Gym Sessie redemption —
// Acuity bills €49 forever = the price-lock promise.
// Re-verify after any Acuity price edit: follow each catalog.php add-to-cart link
// with -L and read the "price" field in the returned JSON.
// ─── Open Gym single session ────────────────────────────────────────
// The ONE Open Gym price that was never covered by the "ACUITY IN SYNC"
// verification above — that note lists every multi-session PRODUCT and none of
// the single SESSION — and it is the one that drifted. Measured 2026-09-22 by
// rendering appointmentType 83513953 in a real browser: "Open Gym Sessie /
// Open Gym Session met SculptClub · 1 uur @ € 9,00". /nl/open-gym and
// /nl/boek-gym already said €9 in nine places between them; /nl/prijzen and
// /en/pricing said €10 in two places each, so the pricing page quoted a euro
// MORE than the customer is charged.
// Single source from here on, for the reason the Onbeperkt price already
// carries a few lines below: "never re-hardcode this price. A second hardcode
// here … is exactly how the /nl/prijzen ↔ /nl/open-gym contradiction happened."
// Re-verify by opening acuityPaidSessions.openGymSession and reading the price.
export const openGymSinglePrice = 9;

export const openGymSummerDeal = {
  active: true,
  priceRegular: 79,
  priceDeal: 49,
  endDate: null as string | null,
  dealUrl: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2247082`,
} as const;

/**
 * STUDENT RATE — Open Gym Onbeperkt at €39/4 weeks on proof of student ID.
 *
 * Created in Acuity 2026-09-01 as product 2272560 by DUPLICATING the €49
 * Zomerdeal (2247082), so every setting except title and price is identical:
 * billing every 4 weeks, forever-until-cancelled, €0 setup fee, access
 * Private (deep-link only, like all 8 products), and redemption = unlimited
 * "Open Gym Sessie / Open Gym Session".
 *
 * Verified live 2026-09-01: the catalog URL returns 200 and renders
 * "Onbeperkt Studenten" at 39.00 (control: 2247082 still renders 49.00).
 *
 * WHY €39 and not lower: it sits between the €29 Instapplan (4 sessions) and
 * the €49 price-locked deal, so it undercuts neither. Rationale is the ~18%
 * true utilisation of 112 opening h/wk measured in the Acuity full export —
 * a student training off-peak is near-zero marginal cost and fills dead hours.
 *
 * ⚠️ NOT time-restricted. Acuity applies availability to APPOINTMENT TYPES,
 * not to subscription products, so an off-peak-only student tier would need a
 * separate restricted appointment type. At 18% utilisation that isn't worth
 * the complexity yet — revisit if peak hours start filling.
 *
 * Verification is a human step: student card shown at the first visit.
 */
export const openGymStudentDeal = {
  active: true,
  priceRegular: 79,
  priceStudent: 39,
  requiresStudentId: true,
  url: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2272560`,
} as const;

// ─── PAID packages (catalog.php) ────────────────────────────────────
// MUST be opened via target="_blank" — Apple Pay restriction.
export const acuityPackages = {
  /** Studio rental discount packs — repriced 2026-07-18 (89/179/299/499).
   *  New Acuity products created for the new prices: Routine 2247124 ·
   *  Pro 2248025 · Volume 2248026 (old 2149358/59/60 were ALSO price-corrected
   *  so any cached/old page charges the right price; retire them to
   *  Unavailable only after this relink is verified live). */
  studio: {
    starter: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2149357`,
    routine: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2247124`,
    pro: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2248025`,
    volume: `${CATALOG}?owner=${OWNER}&action=addCart&clear=1&id=2248026`,
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
  trainerIntake: (name: string, locale: "nl" | "en", baseUrl?: string, goal?: string) => {
    const base = baseUrl ?? "https://wa.me/31615147952";
    // `goal` (2026-09-11, goal-first PT hub): tells the trainer WHY the lead is
    // writing, so the intake starts from the client's goal instead of "hi".
    const text =
      locale === "nl"
        ? goal
          ? `Hoi ${name}! Ik wil graag een gratis intake bij SculptClub voor een traject: ${goal}`
          : `Hoi! Ik wil graag een gratis intake boeken bij ${name} van SculptClub`
        : goal
          ? `Hi ${name}! I'd like a free intro at SculptClub for a programme: ${goal}`
          : `Hi! I'd like to book a free intro with ${name} at SculptClub`;
    return `${base}?text=${encodeURIComponent(text)}`;
  },
  /** Trainer price request — per trainer. Opens WhatsApp with pre-filled rate enquiry + free intro. */
  trainerPriceRequest: (name: string, locale: "nl" | "en", baseUrl?: string, goal?: string) => {
    const base = baseUrl ?? "https://wa.me/31615147952";
    // Price REQUEST is the primary price action on the PT hub (2026-09-11): the
    // trainer gets a high-intent lead with the goal in it, instead of the visitor
    // reading "op aanvraag" and leaving.
    const text =
      locale === "nl"
        ? goal
          ? `Hoi ${name}! Wat kost een traject bij jou voor: ${goal}? Ik wil ook graag een gratis intake plannen.`
          : `Hoi! Ik wil graag het tarief weten van ${name} en een gratis intake plannen.`
        : goal
          ? `Hi ${name}! What does a programme with you cost for: ${goal}? I'd also like to book a free intro.`
          : `Hi! I'd like to know ${name}'s rate and book a free intro.`;
    return `${base}?text=${encodeURIComponent(text)}`;
  },
  /** SCULPT TRANSFORMATION — per trainer. The paid-intent counterpart to
   *  trainerIntake: the visitor is asking to START a 4-week transformation, not
   *  to book a free intro.
   *
   *  BUSINESS MODEL (operator directive 2026-09-19, version (a) — do not change
   *  without a written operator decision): the TRAINER sells and collects this.
   *  SculptClub markets the shared FORMAT ("vanaf €299 / 4 weken, incl.
   *  onbeperkt Open Gym") and earns the room rent, exactly as today. There is
   *  deliberately NO SculptClub checkout for €299 — that would be a different
   *  company (payment flow, VAT, liability, trainer agreements) and is NOT
   *  authorised. So this is a WhatsApp link to the trainer, like every other
   *  trainer CTA on the hub.
   *
   *  The message says "vanaf" and asks the trainer to confirm the price,
   *  because trainer rates run €45-€100/60min and each sets their own package
   *  price at or above the €299 floor. Never phrase it as an agreed price.
   *
   *  ⚠️ The word "transformatie"/"transformation" in this text is LOAD-BEARING
   *  for analytics — src/components/layout/analytics.tsx classifies a click on a
   *  trainer's own WhatsApp number as trainer/PAID only when it finds that
   *  marker (every other trainer-number click is trainer/free). Change the
   *  wording here and the paid-vs-free split on the hub goes blind. */
  trainerTransformation: (name: string, locale: "nl" | "en", baseUrl?: string, goal?: string) => {
    const base = baseUrl ?? "https://wa.me/31615147952";
    const text =
      locale === "nl"
        ? goal
          ? `Hoi ${name}! Ik wil graag starten met een SCULPT TRANSFORMATION van 4 weken (vanaf €299, incl. onbeperkt Open Gym). Mijn doel: ${goal}. Wat wordt de prijs bij jou?`
          : `Hoi ${name}! Ik wil graag starten met een SCULPT TRANSFORMATION van 4 weken (vanaf €299, incl. onbeperkt Open Gym). Wat wordt de prijs bij jou?`
        : goal
          ? `Hi ${name}! I'd like to start a 4-week SCULPT TRANSFORMATION (from €299, unlimited Open Gym included). My goal: ${goal}. What would the price be with you?`
          : `Hi ${name}! I'd like to start a 4-week SCULPT TRANSFORMATION (from €299, unlimited Open Gym included). What would the price be with you?`;
    return `${base}?text=${encodeURIComponent(text)}`;
  },
  /** Generic (no pre-filled text) */
  generic: "https://wa.me/31615147952",
  /** Bank transfer for Volume pack */
  bankTransferNl: `https://wa.me/31615147952?text=${encodeURIComponent("Hi! Ik wil graag het Volume pakket (€499) kopen en betalen via bankoverschrijving. Mijn naam:")}`,
  bankTransferEn: `https://wa.me/31615147952?text=${encodeURIComponent("Hi! I'd like to order the Volume pack (€499) and pay via bank transfer. My name:")}`,
  /** Studio pack — per-pack "Betaal per factuur" (pay by invoice) WhatsApp, the
      secondary action beside the Koop/Acuity button on each /boek-studio package
      card (Q 2026-06-08). Shows the strikethrough regular price via WhatsApp's
      ~strikethrough~ syntax so the message mirrors the card (~€99~ €89). Wording
      includes "studio huren" / "renting the studio" so detectWaIntent classifies
      these clicks as studio_rental/paid. */
  studioPackInvoice: (pack: "Starter" | "Routine" | "Pro" | "Volume", regularPrice: number, price: number, locale: "nl" | "en") => {
    const text =
      locale === "nl"
        ? `Hoi! Ik wil graag het ${pack}-pakket voor studio huren kopen en per factuur betalen — ~€${regularPrice}~ €${price}. Mijn naam:`
        : `Hi! I'd like to buy the ${pack} pack for renting the studio and pay by invoice — ~€${regularPrice}~ €${price}. My name:`;
    return `https://wa.me/31615147952?text=${encodeURIComponent(text)}`;
  },
  /** Dara has her own WhatsApp number */
  dara: "https://wa.me/31645658213",
} as const;
