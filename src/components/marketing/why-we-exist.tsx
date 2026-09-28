import { Section, FadeIn } from "@/components/sections/section";
import { Percent, Lock, Calendar } from "lucide-react";
import type { Locale } from "@/config/site";

// Three differentiators — these are PARALLEL, not sequential. Previously
// numbered 01/02/03 (2026-05-07: caught by operator that this duplicated the
// "Get started in 3 steps" section directly above on the same page —
// two consecutive 01/02/03 stacks read as a confusing visual sequence).
// Replaced with semantic icons matching the studio-huren features pattern:
//   Percent  → "trainers keep 100% of their rate" (matches the rent-not-commission model)
//   Lock     → "Private + quiet"   (matches the "private studio" pillar)
//   Calendar → "Flexible / no lock-in" (matches "per session, no contract")
export function WhyWeExist({ locale }: { locale: Locale }) {
  const t =
    locale === "nl"
      ? {
          eyebrow: "Het verschil",
          title: "Een kleine studio, zonder contract",
          // 2026-06-02 intro rewrite per operator competitive-audit decisions:
          //  · F ("PT en small group only") — opens by stating the model: alleen
          //    personal training & small group, nooit een volle sportschool.
          //  · C (pricing-transparency wedge, trainer-friendly framing) — "je ziet
          //    vooraf wat het kost" + "geen 'neem contact op voor prijzen'".
          //    DIRECTLY attacks the hidden-pricing of every Jordaan rival
          //    (U.P. / Omnia / Staetsgeheim / Studio Performance Boost all hide
          //    prices). Respects 0%-commission model — the FIRST card below
          //    states trainers set their own rate; here we only claim transparency.
          intro:
            "Hier train je met een personal trainer of in een kleine groep, nooit in een volle zaal. Alle prijzen staan op de site, je hoeft er niet naar te vragen.",
          beliefs: [
            {
              icon: Percent,
              title: "Je trainer houdt het hele tarief",
              // 2026-06-02 honesty fix per operator: "this is not the full
              // story, trainers pay rent". Previous body only mentioned 0%
              // commission on session rates without disclosing the studio-
              // rental side. Now explicitly states both sides: trainer keeps
              // 100% of their session fee + SculptClub revenue comes from
              // studio rental (transparent two-sided model, removes the
              // implied "we work for free" trust gap that ZZP trainers would
              // hit on the pricing page anyway).
              body: "Trainers huren de studio en houden 100% van wat jij ze betaalt. Wij verdienen alleen aan de huur, vanaf €12 per uur.",
            },
            {
              icon: Lock,
              title: "Maximaal 4 mensen tegelijk",
              // 2026-06-02 (2nd pass): "geen meekijkers" → "volledige focus"
              // per operator. Reframed the negative (no onlookers) as the
              // positive payoff (full focus). Restructured so the positive
              // lands at the end of the list rather than mid-sentence.
              body: "Er is geen receptie. Met zo weinig mensen in de studio hoef je niet op een rek of bank te wachten.",
            },
            {
              icon: Calendar,
              title: "Je zit nergens aan vast",
              body: "De eerste intake is gratis. PT boek je per sessie, en Open Gym loopt per 4 weken die je altijd kunt opzeggen.",
            },
          ],
          // N (equipment-brand validation) per operator: "Rogue Eleiko brands"
          // (+ Concept2 per Google listing). NO towels/coffee — operator: "coffee
          // around the corner". Equipment names are 3rd-party validation that
          // ZZP-trainers + serious clients shop on. Slim line below the 3 cards.
          equipmentLine:
            "De apparatuur is van Rogue, Eleiko en Concept2.",
        }
      : {
          eyebrow: "What makes us different",
          title: "A small studio with no contract",
          // See NL parallel — 2026-06-02 intro rewrite: F (PT & small group only)
          // + C (pricing-transparency wedge).
          intro:
            "You train here with a personal trainer or in a small group, never in a packed room. Every price is on the site, so you never have to ask.",
          beliefs: [
            {
              icon: Percent,
              title: "Your trainer keeps the full rate",
              // EN parallel — see NL comment for full 2026-06-02 honesty fix
              // reasoning. Two-sided transparency on the financial model.
              body: "Trainers rent the studio and keep 100% of what you pay them. We only earn from the rent, from €12 an hour.",
            },
            {
              icon: Lock,
              title: "Never more than 4 people",
              body: "There's no reception desk. With so few people in the studio, you don't wait for a rack or a bench.",
            },
            {
              icon: Calendar,
              title: "Nothing locks you in",
              body: "The first intake is free. You book PT per session, and Open Gym runs in 4-week cycles you can stop at any time.",
            },
          ],
          equipmentLine:
            "The equipment is Rogue, Eleiko and Concept2.",
        };

  return (
    <Section bg="muted">
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="overline mb-3 text-brand tracking-[0.18em]">{t.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">{t.intro}</p>
        </div>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-3 max-w-5xl mx-auto">
          {t.beliefs.map((b) => (
            <div key={b.title} className="relative">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand">
                <b.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-balance">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>

        {/* Equipment-brand line (N) — 2026-06-02. Centered, muted, below the
            cards so it reads as a credibility footnote not a 4th pillar. */}
        <p className="mt-10 text-center text-sm font-medium text-muted-foreground">
          {t.equipmentLine}
        </p>
      </FadeIn>
    </Section>
  );
}
