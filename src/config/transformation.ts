import type { Locale } from "./site";

/**
 * SCULPT TRANSFORMATION — the ONE short price line that trainer cards render
 * instead of an hourly rate.
 *
 * Why this exists (operator 2026-09-19, verbatim): "SCULPT TRANSFORMATION
 * instead of personal training. We sell transformations, not just [PT]. we
 * dont name hourly rate, we say ''from 299/ 4 weeks''. cta's: [Probeer nu]
 * [Get from 299/ 4 weeks] on every card with a trainer."
 *
 * That shipped on the finder hub only. Measured live 2026-09-21 17:59Z:
 * hourly rates were STILL on the three most-visited surfaces —
 * sculptclub.nl (€45, €100), /nl/gratis-intake (€45, €69, €72, €80, €100)
 * and the per-trainer intake pages (/nl/plan-gratis-intake-met-andrea showed
 * "€45 / 45 min") — while "€299" appeared ZERO times on the homepage and on
 * /nl/gratis-intake. So the pages that get the traffic still sold by the hour.
 *
 * Rules for this file:
 *  - SHORT only. Trainer cards are ~175px wide at 375px, so the long
 *    "incl. onbeperkt Open Gym" variant (trainer-intake.tsx) does not fit and
 *    must not be used here.
 *  - `trainer.rate` in trainers.ts stays untouched — it is still the data the
 *    trainer agreed to; only the DISPLAY changes. Nothing here changes a price.
 *  - The exact price is agreed between client and trainer at the free intake
 *    (trainers are independent and keep 100%), which is why this says "vanaf".
 */
export const transformationFrom: Record<Locale, string> = {
  nl: "Vanaf €299 / 4 weken",
  en: "From €299 / 4 weeks",
};
