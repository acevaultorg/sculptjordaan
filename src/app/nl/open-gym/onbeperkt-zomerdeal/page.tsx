import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, openGymSummerDeal, whatsappLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  MessageCircle,
  Lock,
  Users,
  Clock,
  Ban,
  KeyRound,
  Check,
} from "lucide-react";

/**
 * Open Gym — Onbeperkt Zomerdeal. Dedicated landing page for the live summer
 * ad creative (operator 2026-07-21), which anchors ~~€79~~ → €49 /4 weken and
 * ends on a "Book free trial" CTA.
 *
 * WHY A SEPARATE PAGE (and not just /nl/open-gym):
 *   - Ad-to-page match. The ad sells ONE offer; /nl/open-gym sells the whole
 *     Open Gym product (4 plans, tryout, FAQ, gallery). Sending paid/social
 *     traffic to the general page makes the visitor re-find the offer they
 *     clicked. This page opens on the offer.
 *   - Measurable. A distinct URL isolates deal traffic + conversions from
 *     organic Open Gym traffic, so the campaign can actually be judged.
 *   - It is NOT a clone. Deal-specific angle (price-lock), deal-specific FAQ,
 *     one primary CTA. The full product detail stays on /nl/open-gym, which
 *     this page links to — no duplicate-content competition.
 *
 * WHY NESTED (/nl/open-gym/onbeperkt-zomerdeal, not /nl/open-gym-zomerdeal):
 *   matches the site's existing convention (/nl/studio-huren/rekentool,
 *   /nl/studio-huren/gratis-test, /nl/voor-trainers/...) and gives Google +
 *   AI engines an explicit parent→child topical relationship. The nesting is
 *   what makes the BreadcrumbList below truthful.
 *
 * SLUG IS DUTCH ON PURPose: Dutch searchers type "onbeperkt sporten" /
 * "zomeractie", not "unlimited summer deal". "Open Gym" stays English because
 * it is the product name used in Dutch copy. EN parity uses the operator's
 * own wording: /en/open-gym/unlimited-summer-deal.
 *
 * PRIMARY CTA = the free tryout, deliberately. It mirrors the ad's own
 * "Book free trial" ending, and it is the lowest-friction step: nobody
 * subscribes to a gym they have not stood inside. "Word direct lid" is the
 * secondary path for visitors who are already sold.
 *
 * HONEST URGENCY: the deal is framed as "the €49 window closes for NEW
 * joiners" — never as a countdown, never as fake scarcity (I-23 / dark-pattern
 * ban). Members who join keep €49 for as long as they stay members, which is
 * the genuinely distinctive thing about this offer.
 *
 * Gate: openGymSummerDeal.active — flip to false in src/config/acuity.ts and
 * this page self-retires to the plain regular price with no deal framing.
 *
 * EN parity: src/app/en/open-gym/unlimited-summer-deal/page.tsx (keep in sync).
 */

const deal = openGymSummerDeal;
const savings = deal.priceRegular - deal.priceDeal;

export const metadata: Metadata = {
  title: { absolute: `Zomeractie — Onbeperkt Open Gym €${deal.priceDeal}/4 weken | SculptClub Jordaan` },
  description: `Onbeperkt trainen in onze privé gym in de Jordaan voor €${deal.priceDeal} per 4 weken (normaal €${deal.priceRegular}). Word nu lid en hou die prijs zolang je lid blijft. Max 4 personen, geen contract, eerste sessie gratis.`,
  keywords: [
    "sportschool aanbieding amsterdam",
    "onbeperkt sporten amsterdam",
    "goedkope sportschool jordaan",
    "open gym amsterdam",
    "sportschool zonder contract amsterdam",
    "zomeractie sportschool",
  ],
  alternates: {
    canonical: "/nl/open-gym/onbeperkt-zomerdeal",
    languages: {
      nl: "/nl/open-gym/onbeperkt-zomerdeal",
      en: "/en/open-gym/unlimited-summer-deal",
    },
  },
  openGraph: {
    type: "website",
    url: "/nl/open-gym/onbeperkt-zomerdeal",
    title: `Zomeractie — Onbeperkt trainen voor €${deal.priceDeal}/4 weken`,
    description: `Normaal €${deal.priceRegular}. Word nu lid en hou €${deal.priceDeal} zolang je lid blijft. Privé gym in de Jordaan, max 4 personen.`,
  },
};

const included = [
  { icon: Users, text: "Max 4 personen in de studio — nooit wachten op een toestel" },
  { icon: Clock, text: "Elke dag open van 06:30 tot 22:00" },
  { icon: KeyRound, text: "Deurcode via WhatsApp — je kunt meteen beginnen" },
  { icon: Ban, text: "Geen contract, geen opzegtermijn — stoppen is altijd gratis" },
];

const faqs = [
  {
    question: `Hoe lang hou ik de prijs van €${deal.priceDeal}?`,
    answer: `Zolang je lid blijft. Word je nu lid van Onbeperkt, dan betaal je €${deal.priceDeal} per 4 weken en die prijs blijft staan zolang je lidmaatschap doorloopt. Stop je en kom je later terug, dan geldt het tarief dat op dat moment voor nieuwe leden geldt.`,
  },
  {
    question: "Wat gebeurt er als de zomeractie afloopt?",
    answer: `Dan gaat Onbeperkt voor nieuwe leden terug naar €${deal.priceRegular} per 4 weken. Voor jou verandert er niets — jij houdt €${deal.priceDeal}.`,
  },
  {
    question: "Kan ik eerst gratis proberen?",
    answer: "Ja. Je eerste sessie is gratis en vrijblijvend, ook als je daarna geen lid wordt. Je krijgt de deurcode via WhatsApp en je traint gewoon een keer mee.",
  },
  {
    question: "Zit ik ergens aan vast?",
    answer: "Nee. Open Gym loopt per 4 weken en je zegt altijd gratis op, zonder opzegtermijn en zonder uitleg.",
  },
  {
    question: "Hoe druk is het?",
    answer: "Er zijn maximaal 4 mensen tegelijk in de studio. Dat is het hele punt van een privé gym — je hoeft nooit te wachten en je traint niet in een volle zaal.",
  },
];

export default function OnbeperktZomerdealPage() {
  // Deal switched off → this page must not keep advertising a price that no
  // longer exists. Show the plain regular price with zero deal framing.
  const dealOn = deal.active;

  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/nl" },
          { name: "Open Gym", url: "/nl/open-gym" },
          { name: "Onbeperkt Zomerdeal", url: "/nl/open-gym/onbeperkt-zomerdeal" },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {/* ── Offer ─────────────────────────────────────────────────────── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            {dealOn && (
              <span className="inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-brand-foreground">
                Zomeractie
              </span>
            )}

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Onbeperkt trainen in de Jordaan
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Privé gym aan de Egelantiersgracht. Max 4 personen. Train zo vaak
              je wilt.
            </p>

            <div className="mt-8 flex items-baseline justify-center gap-3">
              {dealOn && (
                <span className="sc-price-old text-2xl text-muted-foreground">
                  €{deal.priceRegular}
                </span>
              )}
              <span className="text-6xl font-bold text-foreground">
                €{dealOn ? deal.priceDeal : deal.priceRegular}
              </span>
              <span className="text-lg text-muted-foreground">/ 4 weken</span>
            </div>

            {dealOn && (
              <>
                <p className="mt-3 text-lg font-semibold text-brand">
                  Bespaar €{savings} per 4 weken
                </p>
                <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
                  Word nu lid en je houdt deze prijs{" "}
                  <strong className="text-foreground">
                    zolang je lid blijft
                  </strong>
                  . Daarna is Onbeperkt €{deal.priceRegular} voor nieuwe leden.
                </p>
              </>
            )}

            {/* Free tryout first — mirrors the ad's own ending, and it is the
                step almost everyone actually takes before subscribing. */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={acuityFreeTrials.openGymTryout}
                external
                size="lg"
                className="w-full sm:w-auto"
              >
                Boek gratis probeersessie
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={deal.dealUrl}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Word direct lid
              </ButtonLink>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Eerste sessie gratis en vrijblijvend — ook als je daarna geen lid
              wordt.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ── Price lock — the genuinely distinctive bit ─────────────────── */}
      {dealOn && (
        <Section bg="muted">
          <FadeIn>
            <div className="mx-auto flex max-w-2xl items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <Lock className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Je prijs staat vast zolang je lid blijft
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Dit is geen kortingsperiode van vier weken. Word je nu lid,
                  dan betaal je €{deal.priceDeal} per 4 weken en dat blijft zo —
                  ook als het tarief voor nieuwe leden later weer €
                  {deal.priceRegular} is. Wat sluit is het{" "}
                  <strong className="text-foreground">instapmoment</strong>,
                  niet jouw prijs.
                </p>
              </div>
            </div>
          </FadeIn>
        </Section>
      )}

      {/* ── What you get ──────────────────────────────────────────────── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground">
              Wat je krijgt
            </h2>
            <ul className="mt-6 space-y-4">
              {included.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-muted-foreground">
              Liever eerst alle plannen en foto&apos;s zien?{" "}
              <a
                href="/nl/open-gym"
                className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
              >
                Bekijk de volledige Open Gym pagina
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <Section bg="muted">
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground">
              Veelgestelde vragen
            </h2>
            <dl className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="flex items-start gap-2 font-semibold text-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {faq.question}
                  </dt>
                  <dd className="mt-2 pl-6 text-muted-foreground">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </Section>

      {/* ── Close ─────────────────────────────────────────────────────── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Kom een keer langs
            </h2>
            <p className="mt-3 text-muted-foreground">
              {siteConfig.address.street} — een paar minuten lopen vanaf de
              Westermarkt. Boek een gratis sessie of stel eerst je vraag.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={acuityFreeTrials.openGymTryout}
                external
                size="lg"
                className="w-full sm:w-auto"
              >
                Boek gratis probeersessie
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.openGymNl}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto plausible-event-name=WhatsApp+Click"
              >
                <MessageCircle className="h-4 w-4" />
                Stel je vraag
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
