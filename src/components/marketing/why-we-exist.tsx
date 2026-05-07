import { Section, FadeIn } from "@/components/sections/section";
import { Percent, Lock, Calendar } from "lucide-react";
import type { Locale } from "@/config/site";

// Three differentiators — these are PARALLEL, not sequential. Previously
// numbered 01/02/03 (2026-05-07: caught by operator that this duplicated the
// "Get started in 3 steps" section directly above on the same page —
// two consecutive 01/02/03 stacks read as a confusing visual sequence).
// Replaced with semantic icons matching the studio-huren features pattern:
//   Percent  → "0% commission"     (matches the "we take 0%" claim)
//   Lock     → "Private + quiet"   (matches the "private studio" pillar)
//   Calendar → "Flexible / no lock-in" (matches "per session, no contract")
export function WhyWeExist({ locale }: { locale: Locale }) {
  const t =
    locale === "nl"
      ? {
          eyebrow: "Het verschil",
          title: "Geen contract. Geen commissie. Geen drukte.",
          intro:
            "Klein, onafhankelijk, stil. De beste onafhankelijke trainers van Amsterdam werken hier omdat wij niet in de weg lopen.",
          beliefs: [
            {
              icon: Percent,
              title: "Trainers verdienen hun volle tarief.",
              body: "Wij rekenen 0% commissie. De prijs die je ziet is wat de trainer krijgt — wij nemen niets. Daardoor werken de beste onafhankelijke trainers van Amsterdam hier.",
            },
            {
              icon: Lock,
              title: "Je traint harder in privé.",
              body: "Maximaal 3 mensen tegelijk. Geen wachtrij, geen publiek, geen receptie. Je traint zonder afleiding — alleen jij en je werk.",
            },
            {
              icon: Calendar,
              title: "Vrijheid maakt je sterker.",
              body: "De eerste intake is gratis, Open Gym loopt in 4-weken cycli die je altijd kunt opzeggen, en PT boek je per sessie. Je blijft omdat het werkt, niet omdat je vast zit.",
            },
          ],
        }
      : {
          eyebrow: "What makes us different",
          title: "No contract. No commission. No crowds.",
          intro:
            "Small, independent, quiet. The best independent trainers in Amsterdam work here because we don't get in the way.",
          beliefs: [
            {
              icon: Percent,
              title: "Trainers deserve their full rate.",
              body: "We take 0% commission. The rate you see is what the trainer charges — we don't mark it up. That's why the best independent trainers in Amsterdam work here.",
            },
            {
              icon: Lock,
              title: "You train harder in private.",
              body: "Max 3 people at once. No queue, no audience, no reception desk. You train without distraction — just you and your work.",
            },
            {
              icon: Calendar,
              title: "Freedom makes you stronger.",
              body: "First intro is free, Open Gym runs in 4-week cycles you can cancel anytime, and PT is booked per session. You stay because it works, not because you're locked in.",
            },
          ],
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
      </FadeIn>
    </Section>
  );
}
