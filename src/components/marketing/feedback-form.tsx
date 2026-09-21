"use client";

/**
 * FeedbackForm — five questions, under a minute, no login.
 * Two audiences, one component: "client" (people who train here) and "renter"
 * (trainers who rent the studio). Posts to /api/feedback (functions/api/feedback.ts),
 * which stores the answer in Workers KV. Read them with `npm run feedback:read`.
 *
 * RULES THIS COMPONENT KEEPS:
 *  - The consent box is separate and starts UNTICKED. Without the tick an answer is
 *    never publishable. Nothing on the site reads the store automatically.
 *  - The Google review link on the thank-you screen is shown to EVERYONE, whatever
 *    rating they gave. Showing it only to happy visitors is review gating and is
 *    against Google's policy. Do not make it conditional on `rating`.
 *  - Equipment options are things the studio does NOT list in its published inventory
 *    (src/app/nl/studio/page.tsx `equipmentCategories`). Nothing here promises a purchase.
 *  - Fires the plain GA4 event `feedback_submit` only. Never `conversion`, never
 *    `generate_lead`: those feed Google Ads at EUR 45 per event.
 */

import { useRef, useState } from "react";
import { CheckCircle2, Loader2, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";
import { trackFeedbackSubmit } from "@/lib/tracking";

type Audience = "client" | "renter";
type Locale = "nl" | "en";

const EQUIPMENT: { id: string; nl: string; en: string }[] = [
  { id: "treadmill", nl: "Loopband", en: "Treadmill" },
  { id: "leg_press", nl: "Leg press", en: "Leg press" },
  { id: "smith", nl: "Smith machine", en: "Smith machine" },
  { id: "trap_bar", nl: "Trap bar", en: "Trap bar" },
  { id: "landmine", nl: "Landmine", en: "Landmine" },
  { id: "trx_rings", nl: "TRX of ringen", en: "TRX or rings" },
  { id: "boxing_bag", nl: "Bokszak", en: "Boxing bag" },
  { id: "ghd_hip_thrust", nl: "GHD of hip thrust bank", en: "GHD or hip thrust bench" },
  { id: "heavier_dumbbells", nl: "Dumbbells zwaarder dan 40 kg", en: "Dumbbells heavier than 40 kg" },
];

const SLOTS: { id: string; nl: string; en: string }[] = [
  { id: "early", nl: "Vroege ochtend (voor 9:00)", en: "Early morning (before 9:00)" },
  { id: "morning", nl: "Ochtend (9:00 tot 12:00)", en: "Morning (9:00 to 12:00)" },
  { id: "afternoon", nl: "Middag (12:00 tot 17:00)", en: "Afternoon (12:00 to 17:00)" },
  { id: "evening", nl: "Avond (na 17:00)", en: "Evening (after 17:00)" },
  { id: "weekend", nl: "Weekend", en: "Weekend" },
];

const COPY = {
  nl: {
    rating: { client: "Hoe is je ervaring bij SculptClub?", renter: "Hoe bevalt het huren van de studio?" },
    ratingHint: "1 is slecht, 5 is top",
    feedback: {
      client: "Wat is goed, en wat kan beter?",
      renter: "Wat is goed, wat kan beter, en wat zou je hier graag zien?",
    },
    feedbackHint: { client: "", renter: "Ook welkom: wat zou ervoor zorgen dat je meer uren boekt?" },
    ideas: "Wat zou je hier graag zien?",
    slots: "Welke tijden zou je vaker willen boeken?",
    equipment: "Welk materiaal mis je of zou je graag zien?",
    equipmentOther: "Anders, namelijk",
    group: {
      client: "Zou je meedoen aan een groepsles in kleine groep, rond €18 per les?",
      renter: "Zou je zelf een groepsles willen geven in de studio?",
    },
    groupOptions: { yes: "Ja", maybe: "Misschien", no: "Nee" },
    aboutYou: "Over jou (mag je leeg laten)",
    trainer: "Bij welke trainer train je?",
    trainerNone: "Geen of weet ik niet",
    firstName: "Voornaam",
    email: "E-mail, alleen als je een antwoord wilt",
    consent: "SculptClub mag mijn antwoord met mijn voornaam op de site tonen",
    consentHint: "Zonder dit vinkje publiceren we niets van wat je schrijft.",
    submit: "Verstuur",
    sending: "Versturen",
    needRating: "Kies eerst een cijfer van 1 tot 5.",
    error: "Versturen lukte niet. Probeer het zo nog eens.",
    thanksTitle: "Dank je wel",
    thanksBody: "Je antwoord is binnen. We lezen alles zelf.",
    reviewLead: "Wil je ons ook op Google helpen? Een review maakt voor een kleine studio veel verschil.",
    reviewCta: "Schrijf een Google review",
    optional: "optioneel",
  },
  en: {
    rating: { client: "How is your experience at SculptClub?", renter: "How do you like renting the studio?" },
    ratingHint: "1 is poor, 5 is great",
    feedback: {
      client: "What is good, and what could be better?",
      renter: "What is good, what could be better, and what would you like to see here?",
    },
    feedbackHint: { client: "", renter: "Also welcome: what would make you book more hours?" },
    ideas: "What would you like to see here?",
    slots: "Which times would you like to book more often?",
    equipment: "Which equipment do you miss or would you like to see?",
    equipmentOther: "Something else",
    group: {
      client: "Would you join a small group class, around €18 per class?",
      renter: "Would you like to run a group class in the studio yourself?",
    },
    groupOptions: { yes: "Yes", maybe: "Maybe", no: "No" },
    aboutYou: "About you (you can leave this empty)",
    trainer: "Which trainer do you train with?",
    trainerNone: "None or not sure",
    firstName: "First name",
    email: "Email, only if you want a reply",
    consent: "SculptClub may show my answer with my first name on the site",
    consentHint: "Without this tick we publish nothing of what you write.",
    submit: "Send",
    sending: "Sending",
    needRating: "Pick a score from 1 to 5 first.",
    error: "Sending failed. Please try again in a moment.",
    thanksTitle: "Thank you",
    thanksBody: "Your answer has arrived. We read everything ourselves.",
    reviewLead: "Would you help us on Google too? A review makes a real difference for a small studio.",
    reviewCta: "Write a Google review",
    optional: "optional",
  },
} as const;

const chip = (on: boolean, align: "left" | "center" = "left") =>
  `min-h-[44px] rounded-xl border px-3.5 py-2 ${align === "center" ? "text-center" : "text-left"} text-sm leading-snug transition-colors ${
    on
      ? "border-brand bg-brand text-brand-foreground"
      : "border-border bg-background text-foreground hover:border-brand"
  }`;

export function FeedbackForm({
  audience,
  locale,
  trainerNames = [],
}: {
  audience: Audience;
  locale: Locale;
  /** Passed from the server page so the full trainers config stays out of the client bundle. */
  trainerNames?: string[];
}) {
  const t = COPY[locale];
  const startedAt = useRef<number>(Date.now());
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [problem, setProblem] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [ideas, setIdeas] = useState("");
  const [equipment, setEquipment] = useState<string[]>([]);
  const [equipmentOther, setEquipmentOther] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [group, setGroup] = useState("");
  const [trainer, setTrainer] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot

  const toggle = (arr: string[], set: (v: string[]) => void, id: string) =>
    set(arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating < 1) {
      setProblem(t.needRating);
      return;
    }
    setProblem("");
    setState("submitting");
    try {
      const source =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("utm_source") || ""
          : "";
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audience,
          locale,
          rating,
          feedback,
          ideas,
          equipment,
          equipment_other: equipmentOther,
          slots,
          group,
          trainer,
          first_name: firstName,
          email,
          consent_publish: consent === true,
          source,
          website,
          elapsed_ms: Date.now() - startedAt.current,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      trackFeedbackSubmit(audience, locale);
      setState("success");
    } catch {
      setState("error");
      setProblem(t.error);
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-center" role="status">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-brand" aria-hidden="true" />
        <h2 className="mb-2 text-xl font-bold">{t.thanksTitle}</h2>
        <p className="mb-5 text-muted-foreground">{t.thanksBody}</p>
        {/* Shown to EVERYONE, never conditional on the rating (no review gating). */}
        <p className="mb-4 text-sm text-muted-foreground">{t.reviewLead}</p>
        <a
          href={siteConfig.googleReview}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-dark sm:w-auto"
        >
          {t.reviewCta}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      {/* 1. rating */}
      <fieldset>
        <legend className="mb-1 text-base font-semibold">1. {t.rating[audience]}</legend>
        <p className="mb-3 text-sm text-muted-foreground">{t.ratingHint}</p>
        <div className="flex gap-2" role="radiogroup" aria-label={t.rating[audience]}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={`${n}`}
              onClick={() => setRating(n)}
              className={`flex h-12 flex-1 items-center justify-center gap-1 rounded-xl border text-base font-semibold transition-colors ${
                rating === n
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-background text-foreground hover:border-brand"
              }`}
            >
              {n}
              <Star className="h-4 w-4" aria-hidden="true" />
            </button>
          ))}
        </div>
      </fieldset>

      {/* 2. feedback */}
      <div className="space-y-2">
        <Label htmlFor="fb-feedback" className="text-base font-semibold leading-snug">
          2. {t.feedback[audience]}
        </Label>
        {t.feedbackHint[audience] && <p className="text-sm text-muted-foreground">{t.feedbackHint[audience]}</p>}
        <Textarea id="fb-feedback" rows={3} maxLength={1500} value={feedback} onChange={(e) => setFeedback(e.target.value)} />
      </div>

      {/* 3. ideas (client) or slots (renter) */}
      {audience === "client" ? (
        <div className="space-y-2">
          <Label htmlFor="fb-ideas" className="text-base font-semibold leading-snug">
            3. {t.ideas}
          </Label>
          <Textarea id="fb-ideas" rows={2} maxLength={1500} value={ideas} onChange={(e) => setIdeas(e.target.value)} />
        </div>
      ) : (
        <fieldset>
          <legend className="mb-3 text-base font-semibold leading-snug">3. {t.slots}</legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SLOTS.map((s) => (
              <button key={s.id} type="button" aria-pressed={slots.includes(s.id)} onClick={() => toggle(slots, setSlots, s.id)} className={chip(slots.includes(s.id))}>
                {s[locale]}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {/* 4. equipment */}
      <fieldset>
        <legend className="mb-3 text-base font-semibold leading-snug">4. {t.equipment}</legend>
        <div className="grid grid-cols-2 gap-2">
          {EQUIPMENT.map((it) => (
            <button key={it.id} type="button" aria-pressed={equipment.includes(it.id)} onClick={() => toggle(equipment, setEquipment, it.id)} className={chip(equipment.includes(it.id))}>
              {it[locale]}
            </button>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          <Label htmlFor="fb-eq-other" className="text-sm text-muted-foreground">
            {t.equipmentOther}
          </Label>
          <Input id="fb-eq-other" maxLength={300} value={equipmentOther} onChange={(e) => setEquipmentOther(e.target.value)} className="min-h-[44px]" />
        </div>
      </fieldset>

      {/* 5. group class */}
      <fieldset>
        <legend className="mb-3 text-base font-semibold leading-snug">5. {t.group[audience]}</legend>
        <div className="flex gap-2" role="radiogroup" aria-label={t.group[audience]}>
          {(["yes", "maybe", "no"] as const).map((g) => (
            <button
              key={g}
              type="button"
              role="radio"
              aria-checked={group === g}
              onClick={() => setGroup(group === g ? "" : g)}
              className={`${chip(group === g, "center")} flex-1`}
            >
              {t.groupOptions[g]}
            </button>
          ))}
        </div>
      </fieldset>

      {/* about you, all optional */}
      <fieldset className="space-y-4 rounded-2xl border border-border bg-card p-4">
        <legend className="px-1 text-sm font-semibold text-muted-foreground">{t.aboutYou}</legend>
        {audience === "client" && trainerNames.length > 0 && (
          <div className="space-y-2">
            <Label htmlFor="fb-trainer">{t.trainer}</Label>
            <select
              id="fb-trainer"
              value={trainer}
              onChange={(e) => setTrainer(e.target.value)}
              className="min-h-[44px] w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground"
            >
              <option value="">{t.trainerNone}</option>
              {trainerNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="fb-name">{t.firstName}</Label>
          <Input id="fb-name" autoComplete="given-name" maxLength={60} value={firstName} onChange={(e) => setFirstName(e.target.value)} className="min-h-[44px]" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fb-email">{t.email}</Label>
          <Input id="fb-email" type="email" autoComplete="email" maxLength={200} value={email} onChange={(e) => setEmail(e.target.value)} className="min-h-[44px]" />
        </div>
      </fieldset>

      {/* honeypot: hidden from people and assistive tech */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="fb-website">Website</label>
        <input id="fb-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      {/* consent: separate, unticked by default */}
      <div className="flex items-start gap-3">
        <input
          id="fb-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-6 w-6 shrink-0 rounded border-border accent-[var(--brand)]"
        />
        <div>
          <label htmlFor="fb-consent" className="text-sm font-medium leading-snug">
            {t.consent} <span className="font-normal text-muted-foreground">({t.optional})</span>
          </label>
          <p className="mt-1 text-sm text-muted-foreground">{t.consentHint}</p>
        </div>
      </div>

      {problem && (
        <p className="text-sm font-medium text-destructive" role="alert">
          {problem}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-brand-foreground transition-colors hover:bg-brand-dark disabled:opacity-70"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            {t.sending}
          </>
        ) : (
          t.submit
        )}
      </button>
    </form>
  );
}
