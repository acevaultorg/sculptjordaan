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
          title: "Geen contract. Volledige vrijheid. Geen drukte.",
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
            "Alleen personal training & small group, nooit een volle sportschool. Klein, onafhankelijk, stil. En je ziet vooraf wat het kost: geen 'neem contact op voor prijzen'.",
          beliefs: [
            {
              icon: Percent,
              title: "Trainers verdienen hun volle tarief.",
              // 2026-06-02 honesty fix per operator: "this is not the full
              // story, trainers pay rent". Previous body only mentioned 0%
              // commission on session rates without disclosing the studio-
              // rental side. Now explicitly states both sides: trainer keeps
              // 100% of their session fee + SculptClub revenue comes from
              // studio rental (transparent two-sided model, removes the
              // implied "we work for free" trust gap that ZZP trainers would
              // hit on the pricing page anyway).
              body: "Trainers huren de studio en houden 100% van hun tarief. Wat je ziet is wat de trainer krijgt, wij nemen niets van de sessie. Onze inkomsten komen uit studiohuur (vanaf €12/uur), dus onafhankelijke trainers werken hier op eigen voorwaarden.",
            },
            {
              icon: Lock,
              title: "Je traint harder in privé.",
              // 2026-06-02 (2nd pass): "geen meekijkers" → "volledige focus"
              // per operator. Reframed the negative (no onlookers) as the
              // positive payoff (full focus). Restructured so the positive
              // lands at the end of the list rather than mid-sentence.
              body: "Maximaal 4 mensen tegelijk. Geen wachtrij, geen receptie. Volledige focus. Je traint zonder afleiding, alleen jij en je werk.",
            },
            {
              icon: Calendar,
              title: "Vrijheid maakt je sterker.",
              body: "De eerste intake is gratis, Open Gym loopt in 4-weken cycli die je altijd kunt opzeggen, en PT boek je per sessie. Je blijft omdat het werkt, niet omdat je vast zit.",
            },
          ],
          // N (equipment-brand validation) per operator: "Rogue Eleiko brands"
          // (+ Concept2 per Google listing). NO towels/coffee — operator: "coffee
          // around the corner". Equipment names are 3rd-party validation that
          // ZZP-trainers + serious clients shop on. Slim line below the 3 cards.
          equipmentLine:
            "Uitgerust met Rogue, Eleiko en Concept2, geen instapapparatuur.",
        }
      : {
          eyebrow: "What makes us different",
          title: "No contract. Full freedom. No crowds.",
          // See NL parallel — 2026-06-02 intro rewrite: F (PT & small group only)
          // + C (pricing-transparency wedge).
          intro:
            "Personal training & small group only, never a crowded gym. Small, independent, quiet. And you see the price upfront: no 'contact us for pricing'.",
          beliefs: [
            {
              icon: Percent,
              title: "Trainers deserve their full rate.",
              // EN parallel — see NL comment for full 2026-06-02 honesty fix
              // reasoning. Two-sided transparency on the financial model.
              body: "Trainers rent the studio and keep 100% of their rate. What you see is what the trainer gets, we take nothing from the session. Our income comes from studio rental (from €12/hour), so independent trainers work here on their own terms.",
            },
            {
              icon: Lock,
              title: "You train harder in private.",
              body: "Max 4 people at once. No queue, no reception desk. Full focus. You train without distraction, just you and your work.",
            },
            {
              icon: Calendar,
              title: "Freedom makes you stronger.",
              body: "First intro is free, Open Gym runs in 4-week cycles you can cancel anytime, and PT is booked per session. You stay because it works, not because you're locked in.",
            },
          ],
          equipmentLine:
            "Equipped with Rogue, Eleiko and Concept2, no entry-level kit.",
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
