"use client";

import { useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { trackTabSwitch } from "@/lib/tracking";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import {
  acuityPaidSessions,
  acuityPackages,
  openGymSummerDeal,
  openGymStudentDeal,
} from "@/config/acuity";
import type { Locale } from "@/config/site";

/**
 * HomePricingExplorer — Open Gym + studio huren combined in ONE homepage
 * pricing section (operator 2026-07-30: "Opengym and rent studio combined,
 * different way: select [per uur][pakketten][abonnementen] · 1 person -
 * 2 person - Full studio").
 *
 * UX shape — tabs on the PAYMENT axis, capacity as rows, NOT a 3×3 matrix:
 * the matrix is sparse (abonnementen exist only for Open Gym; pakketten only
 * for studio huren), so a second capacity selector would need disabled cells
 * — dead ends. With payment tabs + capacity rows every visible option is
 * bookable in ≤2 taps and each tab honestly states which capacity it covers.
 * Toggle pills reuse the exact RentalTabs/OpenGymPlanTabs shape so this
 * reads as house furniture, not a new widget.
 *
 * Two-audience rule (memory: two-audience sensitivity): the 1-persoon row
 * speaks to CLIENTS (Open Gym), the 2-personen + hele-studio rows to
 * TRAINERS renting (€12/uur is the number they love). Both personas find
 * their entry price on the default tab without touching anything.
 *
 * 🚨 HONEST MATH ONLY (same discipline as OpenGymPlanTabs):
 *   pakketten badge  "bespaar tot 23%" → Volume €499 for €650 credit = 23.2%
 *   abonnement badge "bespaar 19%"     → Instapplan €7,25/sessie vs €9 los = 19.4%
 *   break-even line derived from the live deal price, never hardcoded.
 * Capacity copy: half = "max 2 personen"; full studio = "kleine groep",
 * NEVER a hard number (CLAUDE.md 2026-07-13).
 */

type Tab = "hourly" | "packages" | "membership";

const COPY = {
  nl: {
    title: "Open Gym & studio huren — alle tarieven",
    subtitle:
      "Train zelf of huur de ruimte als trainer. Geen abonnement verplicht, geen contract, altijd gratis annuleren.",
    tabs: { hourly: "Per uur", packages: "Pakketten", membership: "Abonnement" },
    savePackages: "bespaar tot 23%",
    saveMembership: "bespaar 19%",
    hourly: {
      note: "Reserveer per sessie — betaal alleen wanneer je traint.",
      rows: {
        gym: {
          title: "Open Gym",
          who: "1 persoon",
          // Operator 2026-07-30: "max 4 personen in de studio" was confusing
          // right after "1 persoon" (you book for 1, the ROOM holds max 4).
          // Reframed as the benefit — quiet, never crowded — with "tegelijk"
          // making it unambiguously about the room, not your booking.
          sub: "Train zelf in alle rust — nooit meer dan 4 tegelijk",
        },
        half: {
          title: "Halve studio",
          who: "voor 2 personen",
          sub: "1-op-1 sessies · eigen klanten, eigen tarief",
        },
        full: {
          title: "Hele studio",
          who: "kleine groep",
          sub: "Volledig privé — jouw eigen kleine groep",
        },
      },
    },
    packages: {
      // Operator 2026-07-30: "dit heeft meer uitleg nodig" — the panel showed
      // pack names + a struck-through "t.w.v." with zero explanation of what
      // tegoed IS or what it buys. Now: one how-it-works line + per pack the
      // discount and what the credit is worth in half-studio hours (derived
      // from the €12/uur rate — honest math, recomputes if rates change).
      forWho:
        "Voor trainers die vaker huren: koop tegoed met korting en boek er losse uren mee — halve of hele studio.",
      hoursBasis: "Uurindicatie op basis van halve studio (€12/uur).",
      creditWord: "tegoed",
      hoursLine: (h: number) => `ruim ${h} uur halve studio`,
      buy: "Koop",
      all: "Alle pakketdetails",
      rows: [
        { name: "Starter", price: 89, credit: 99, pct: 10 },
        { name: "Routine", price: 179, credit: 210, pct: 15 },
        { name: "Pro", price: 299, credit: 375, pct: 20 },
        { name: "Volume", price: 499, credit: 650, pct: 23 },
      ],
    },
    membership: {
      forWho: "Abonnementen zijn voor Open Gym — 1 persoon.",
      unlimitedTitle: "Onbeperkt",
      unlimitedBody: (breakEven: number) =>
        `Zo vaak trainen als je wilt. Vanaf ${breakEven} sessies per 4 weken ben je goedkoper uit dan los.`,
      dealNote: (deal: number, regular: number) =>
        `Nu €${deal} per 4 weken — je houdt deze prijs zolang je lid blijft (normaal €${regular}).`,
      plainNote: (regular: number) => `€${regular} per 4 weken.`,
      unlimitedCta: "Word lid",
      instapTitle: "Instapplan",
      instapBody: "4 sessies per 4 weken — €7,25 per sessie",
      instapCta: "Kies Instapplan",
      cancel: "Altijd gratis opzegbaar · geen contract",
    },
    tryFirst: "Eerst gratis proberen?",
    tryGym: "Open Gym probeersessie",
    tryStudio: "Gratis test voor trainers",
    book: "Boek",
  },
  en: {
    title: "Open Gym & studio rental — all rates",
    subtitle:
      "Train on your own or rent the space as a trainer. No membership required, no contract, always free cancellation.",
    tabs: { hourly: "Hourly", packages: "Packages", membership: "Membership" },
    savePackages: "save up to 23%",
    saveMembership: "save 19%",
    hourly: {
      note: "Book per session — pay only when you train.",
      rows: {
        gym: {
          title: "Open Gym",
          who: "1 person",
          // EN twin of the NL disambiguation (see nl copy note above).
          sub: "Train on your own in peace — never more than 4 at a time",
        },
        half: {
          title: "Half studio",
          who: "for 2 people",
          sub: "1-on-1 sessions · your clients, your rates",
        },
        full: {
          title: "Full studio",
          who: "small group",
          sub: "Fully private — your own small group",
        },
      },
    },
    packages: {
      forWho:
        "For trainers who rent regularly: buy credit at a discount and book hourly sessions with it — half or full studio.",
      hoursBasis: "Hour estimates based on the half studio (€12/hr).",
      creditWord: "credit",
      hoursLine: (h: number) => `over ${h} hours of half studio`,
      buy: "Buy",
      all: "All package details",
      rows: [
        { name: "Starter", price: 89, credit: 99, pct: 10 },
        { name: "Routine", price: 179, credit: 210, pct: 15 },
        { name: "Pro", price: 299, credit: 375, pct: 20 },
        { name: "Volume", price: 499, credit: 650, pct: 23 },
      ],
    },
    membership: {
      forWho: "Memberships are for Open Gym — 1 person.",
      unlimitedTitle: "Unlimited",
      unlimitedBody: (breakEven: number) =>
        `Train as often as you like. From ${breakEven} sessions per 4 weeks you pay less than booking singles.`,
      dealNote: (deal: number, regular: number) =>
        `Now €${deal} per 4 weeks — you keep this price for as long as you stay a member (normally €${regular}).`,
      plainNote: (regular: number) => `€${regular} per 4 weeks.`,
      unlimitedCta: "Become a member",
      instapTitle: "Starter plan",
      instapBody: "4 sessions per 4 weeks — €7.25 per session",
      instapCta: "Choose starter plan",
      cancel: "Cancel anytime, free · no contract",
    },
    tryFirst: "Want to try first, free?",
    tryGym: "Open Gym trial session",
    tryStudio: "Free trial for trainers",
    book: "Book",
  },
} as const;

/** One bookable price chip — the price IS the button (orange = clickable).
 * Homepage shows ONLY the 60-min rates (operator 2026-07-30: "bied geen 90
 * min aan") — one button per row keeps the entry decision simple; 90-min
 * options still exist on /nl/studio-huren for trainers who want them. */
function PriceButton({
  href,
  price,
  minutes,
  intent,
}: {
  href: string;
  price: number;
  minutes: 60 | 90;
  intent: "open_gym" | "studio_rental";
}) {
  return (
    <ButtonLink
      href={href}
      size="sm"
      // min-h-11 = 44px tap target on mobile (WCAG 2.5.5 / mobile-perfection);
      // relaxes to the compact sm height on ≥sm where a pointer is precise.
      className="min-h-11 shrink-0 sm:min-h-0"
      data-intent={intent}
      data-pricing="paid"
    >
      €{price}
      <span className="ml-1.5 font-normal opacity-80">· {minutes} min</span>
    </ButtonLink>
  );
}

export function HomePricingExplorer({ locale }: { locale: Locale }) {
  const [tab, setTab] = useState<Tab>("hourly");
  const c = COPY[locale];
  const deal = openGymSummerDeal;

  // Same derivation as OpenGymPlanTabs: sessions at €9 that equal one
  // 4-week Onbeperkt period. 49/9 → cheaper from the 6th session.
  const unlimitedPrice = deal.active ? deal.priceDeal : deal.priceRegular;
  const breakEven = Math.floor(unlimitedPrice / 9) + 1;

  const gymTrialHref = locale === "nl" ? "/nl/gratis-proefles" : "/en/free-trial";
  const studioTrialHref =
    locale === "nl" ? "/nl/studio-huren/gratis-test" : "/en/studio-rental/free-trial";
  const packagesHref = locale === "nl" ? "/nl/boek-studio" : "/en/book-studio";

  const tabButton = (key: Tab, label: string, badge?: string) => (
    <button
      type="button"
      // GA4 tab_switch (surface=home_pricing). Plausible classes removed —
      // Plausible was retired on this site 2026-07-20, they tracked nothing.
      onClick={() => {
        setTab(key);
        trackTabSwitch("home_pricing", key);
      }}
      className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition ${
        tab === key
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground"
      }`}
      aria-pressed={tab === key}
    >
      <span>{label}</span>
      {badge && (
        <span className="hidden rounded-full bg-discount px-1.5 py-0.5 text-[10px] font-bold leading-none text-white min-[420px]:inline">
          {badge}
        </span>
      )}
    </button>
  );

  return (
    <Section id="tarieven">
      <SectionHeader title={c.title} description={c.subtitle} center />
      <FadeIn>
        <div className="mx-auto max-w-2xl">
          {/* Payment-axis toggle — house pill shape (RentalTabs/OpenGymPlanTabs) */}
          <div className="flex gap-1 rounded-full border border-border bg-card p-1 sm:gap-2">
            {tabButton("hourly", c.tabs.hourly)}
            {tabButton("packages", c.tabs.packages, c.savePackages)}
            {tabButton("membership", c.tabs.membership, c.saveMembership)}
          </div>

          <div className="mt-4 rounded-2xl border border-border bg-card">
            {tab === "hourly" && (
              <div>
                <p className="px-5 pt-4 text-sm text-muted-foreground">{c.hourly.note}</p>
                {/* Capacity rows: 1 persoon → 2 personen → hele studio */}
                <div className="divide-y divide-border">
                  <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold">
                        {c.hourly.rows.gym.title}{" "}
                        <span className="font-normal text-muted-foreground">
                          — {c.hourly.rows.gym.who}
                        </span>
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {c.hourly.rows.gym.sub}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <PriceButton
                        href={acuityPaidSessions.openGymSession}
                        price={9}
                        minutes={60}
                        intent="open_gym"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold">
                        {c.hourly.rows.half.title}{" "}
                        <span className="font-normal text-muted-foreground">
                          — {c.hourly.rows.half.who}
                        </span>
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {c.hourly.rows.half.sub}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <PriceButton
                        href={acuityPaidSessions.studioRentalHalf60}
                        price={12}
                        minutes={60}
                        intent="studio_rental"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold">
                        {c.hourly.rows.full.title}{" "}
                        <span className="font-normal text-muted-foreground">
                          — {c.hourly.rows.full.who}
                        </span>
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {c.hourly.rows.full.sub}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <PriceButton
                        href={acuityPaidSessions.studioRentalFull60}
                        price={17}
                        minutes={60}
                        intent="studio_rental"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tab === "packages" && (
              <div>
                <p className="px-5 pt-4 text-sm text-muted-foreground">{c.packages.forWho}</p>
                <div className="divide-y divide-border">
                  {c.packages.rows.map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center justify-between gap-3 p-5"
                    >
                      <div>
                        <p className="flex items-center gap-2 font-semibold">
                          {p.name}
                          <span className="rounded-full bg-discount px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
                            −{p.pct}%
                          </span>
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">€{p.price}</span>
                          {" → "}€{p.credit} {c.packages.creditWord}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {c.packages.hoursLine(Math.floor(p.credit / 12))}
                        </p>
                      </div>
                      <ButtonLink
                        href={
                          acuityPackages.studio[
                            p.name.toLowerCase() as keyof typeof acuityPackages.studio
                          ]
                        }
                        size="sm"
                        variant="outline"
                        className="min-h-11 shrink-0 sm:min-h-0"
                        data-intent="studio_rental"
                        data-pricing="paid"
                      >
                        {c.packages.buy} {p.name}
                      </ButtonLink>
                    </div>
                  ))}
                </div>
                <div className="px-5 pb-4">
                  <p className="text-xs text-muted-foreground">{c.packages.hoursBasis}</p>
                  <p className="mt-1">
                    <Link
                      href={packagesHref}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {c.packages.all} →
                    </Link>
                  </p>
                </div>
              </div>
            )}

            {tab === "membership" && (
              <div className="space-y-4 p-5">
                <p className="text-sm text-muted-foreground">{c.membership.forWho}</p>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <p className="text-lg font-bold">{c.membership.unlimitedTitle}</p>
                    <p className="text-2xl font-bold">€{unlimitedPrice}</p>
                    {deal.active && (
                      <span className="text-sm text-muted-foreground line-through">
                        €{deal.priceRegular}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.membership.unlimitedBody(breakEven)}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {deal.active
                      ? c.membership.dealNote(deal.priceDeal, deal.priceRegular)
                      : c.membership.plainNote(deal.priceRegular)}
                  </p>
                  <ButtonLink
                    href={
                      deal.active ? deal.dealUrl : acuityPaidSessions.openGymPlans.onbeperkt
                    }
                    size="lg"
                    className="mt-3 w-full sm:w-auto"
                    data-intent="open_gym"
                    data-pricing="paid"
                  >
                    {c.membership.unlimitedCta}
                  </ButtonLink>
                  {openGymStudentDeal.active && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      {locale === "nl"
                        ? `Student? Onbeperkt voor €${openGymStudentDeal.priceStudent} per 4 weken op vertoon van je studentenpas. `
                        : `Student? Unlimited for €${openGymStudentDeal.priceStudent} per 4 weeks with a valid student ID. `}
                      <Link
                        href={locale === "nl" ? "/nl/open-gym/studentenkorting" : "/en/open-gym/student-discount"}
                        className="font-medium text-primary underline underline-offset-4 hover:no-underline"
                        data-intent="open_gym"
                        data-pricing="paid"
                      >
                        {locale === "nl" ? "Bekijk de studentenkorting" : "See the student discount"}
                      </Link>
                    </p>
                  )}
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <p className="font-semibold">{c.membership.instapTitle}</p>
                    <p className="text-lg font-bold">€29</p>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {c.membership.instapBody}
                  </p>
                  <ButtonLink
                    href={acuityPaidSessions.openGymPlans.instapplan}
                    size="sm"
                    variant="outline"
                    className="mt-3 min-h-11 sm:min-h-0"
                    data-intent="open_gym"
                    data-pricing="paid"
                  >
                    {c.membership.instapCta}
                  </ButtonLink>
                </div>
                <p className="text-xs text-muted-foreground">{c.membership.cancel}</p>
              </div>
            )}
          </div>

          {/* Free-trial escape hatch — both funnels, one quiet line */}
          <p className="mt-3 text-center text-sm text-muted-foreground">
            {c.tryFirst}{" "}
            <Link
              href={gymTrialHref}
              className="font-medium text-primary hover:underline"
              data-intent="open_gym"
              data-pricing="free"
            >
              {c.tryGym}
            </Link>
            {" · "}
            <Link
              href={studioTrialHref}
              className="font-medium text-primary hover:underline"
              data-intent="studio_rental"
              data-pricing="free"
            >
              {c.tryStudio}
            </Link>
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
