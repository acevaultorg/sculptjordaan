"use client";

import { useState } from "react";
import { trackTabSwitch } from "@/lib/tracking";
import { ButtonLink } from "@/components/ui/button-link";
import { acuityPaidSessions, openGymSummerDeal } from "@/config/acuity";

type Locale = "nl" | "en";

/**
 * Open Gym: "Losse sessie" ⟷ "Abonnement" toggle, shown high on the Open Gym
 * page (operator 2026-07-25: "goal is here that [visitors] know we offer
 * subscriptions and get them").
 *
 * Why a toggle and not just another card row: the page already had all three
 * prices, but only far down in the pricing section — a visitor deciding in the
 * hero saw ONLY the €9 hourly + free-tryout CTAs and never learned a membership
 * existed. This mirrors the proven /nl/studio-huren RentalTabs pattern (same
 * shape, same interaction) so it reads as house furniture, not a new widget.
 *
 * DELIBERATELY DIFFERENT from /nl/open-gym/unlimited-summer-deal, whose single
 * job is the FREE try-out (operator 2026-07-25). Here the free try-out stays
 * available as the low-commitment path, but the subscription is the headline.
 *
 * 🚨 HONEST MATH ONLY. Every number below is derived, never invented:
 *   - losse sessie  €9   / 1 uur                      (CLAUDE.md, live Acuity)
 *   - Instapplan    €29  / 4 sessies = €7,25 p.s.     → 19% under €9
 *   - Onbeperkt     €49  (deal) or €79 (regular)
 * The badge uses the Instapplan figure because it is a GUARANTEED saving at a
 * fixed session count. We do NOT advertise an Onbeperkt "% saving" — that
 * depends on how often someone trains, so any single % would be a claim we
 * can't stand behind. Instead the panel states the break-even factually.
 */
export function OpenGymPlanTabs({ locale }: { locale: Locale }) {
  const [tab, setTab] = useState<"single" | "membership">("membership");
  const deal = openGymSummerDeal;

  // Break-even: how many €9 sessions equal one 4-week Onbeperkt period.
  // 49 / 9 = 5.4 → from the 6th session you are cheaper. 79 / 9 = 8.8 → 9th.
  const price = deal.active ? deal.priceDeal : deal.priceRegular;
  const breakEven = Math.floor(price / 9) + 1;

  const c =
    locale === "nl"
      ? {
          single: "Losse sessie",
          membership: "Abonnement",
          // €7,25 (Instapplan) vs €9 los = 19,4% → "19%". Hard, verifiable, and
          // short enough not to wrap the pill. Onbeperkt saves MORE than this
          // the more you train, which the panel body states factually rather
          // than compressing into a % we can't guarantee.
          save: "bespaar 19%",
          singleTitle: "€9 per uur",
          singleBody:
            "Losse sessie van 60 minuten. Geen abonnement, reserveer wanneer het uitkomt.",
          singleCta: "Reserveer je uur",
          instapTitle: "Instapplan",
          instapBody: "4 sessies per 4 weken · €7,25 per sessie",
          unlimitedTitle: "Onbeperkt",
          unlimitedBody: `Zo vaak trainen als je wilt. Vanaf ${breakEven} sessies per 4 weken ben je goedkoper uit dan los.`,
          dealNote: `Nu €${deal.priceDeal} per 4 weken. Je houdt deze prijs zolang je lid blijft (normaal €${deal.priceRegular}).`,
          plainNote: `€${deal.priceRegular} per 4 weken.`,
          membershipCta: "Word lid",
          instapCta: "Kies Instapplan",
          cancel: "Altijd gratis opzegbaar · geen contract",
        }
      : {
          single: "Single session",
          membership: "Membership",
          save: "save 19%",
          singleTitle: "€9 per hour",
          singleBody:
            "A single 60-minute session. No membership, book whenever it suits you.",
          singleCta: "Reserve your hour",
          instapTitle: "Starter plan",
          instapBody: "4 sessions per 4 weeks · €7.25 per session",
          unlimitedTitle: "Unlimited",
          unlimitedBody: `Train as often as you like. From ${breakEven} sessions per 4 weeks you pay less than booking singles.`,
          dealNote: `Now €${deal.priceDeal} per 4 weeks. You keep this price for as long as you stay a member (normally €${deal.priceRegular}).`,
          plainNote: `€${deal.priceRegular} per 4 weeks.`,
          membershipCta: "Become a member",
          instapCta: "Choose starter plan",
          cancel: "Cancel anytime, free · no contract",
        };

  return (
    <div className="mt-6">
      {/* Toggle — same shape as RentalTabs so it reads as house furniture */}
      <div className="flex max-w-md gap-2 rounded-full border border-border bg-card p-1">
        <button
          type="button"
          onClick={() => {
            setTab("single");
            trackTabSwitch("open_gym", "single");
          }}
          className={`min-h-11 flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
            tab === "single"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={tab === "single"}
        >
          {c.single}
        </button>
        <button
          type="button"
          onClick={() => {
            setTab("membership");
            trackTabSwitch("open_gym", "membership");
          }}
          className={`flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
            tab === "membership"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={tab === "membership"}
        >
          <span>{c.membership}</span>
          <span className="rounded-full bg-discount px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
            {c.save}
          </span>
        </button>
      </div>

      <div className="mt-4 rounded-2xl border border-border bg-card p-5">
        {tab === "single" ? (
          <div>
            <p className="text-2xl font-bold">{c.singleTitle}</p>
            <p className="mt-1 text-sm text-muted-foreground">{c.singleBody}</p>
            <ButtonLink
              href={acuityPaidSessions.openGymSession}
              size="lg"
              variant="outline"
              className="mt-4 w-full sm:w-auto"
              data-intent="open_gym"
              data-pricing="paid"
            >
              {c.singleCta}
            </ButtonLink>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Onbeperkt — the option we actually want people to take */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-2">
                <p className="text-lg font-bold">{c.unlimitedTitle}</p>
                <p className="text-2xl font-bold">€{price}</p>
                {deal.active && (
                  <span className="text-sm text-muted-foreground line-through">
                    €{deal.priceRegular}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{c.unlimitedBody}</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {deal.active ? c.dealNote : c.plainNote}
              </p>
              <ButtonLink
                href={deal.active ? deal.dealUrl : acuityPaidSessions.openGymPlans.onbeperkt}
                size="lg"
                className="mt-3 w-full sm:w-auto"
                data-intent="open_gym"
                data-pricing="paid"
              >
                {c.membershipCta}
              </ButtonLink>
            </div>

            {/* Instapplan — the lower-commitment membership step */}
            <div className="border-t border-border pt-4">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <p className="font-semibold">{c.instapTitle}</p>
                <p className="text-lg font-bold">€29</p>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{c.instapBody}</p>
              <ButtonLink
                href={acuityPaidSessions.openGymPlans.instapplan}
                size="sm"
                variant="outline"
                className="mt-3 min-h-11 sm:min-h-0"
                data-intent="open_gym"
                data-pricing="paid"
              >
                {c.instapCta}
              </ButtonLink>
            </div>

            <p className="text-xs text-muted-foreground">{c.cancel}</p>
          </div>
        )}
      </div>
    </div>
  );
}
