import { Section, FadeIn } from "@/components/sections/section";
import type { Locale } from "@/config/site";

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
              n: "01",
              title: "Trainers verdienen hun volle tarief.",
              body: "Wij rekenen 0% commissie. De prijs die je ziet is wat de trainer krijgt — wij nemen niets. Daardoor werken de beste onafhankelijke trainers van Amsterdam hier.",
            },
            {
              n: "02",
              title: "Je traint harder in privé.",
              body: "Maximaal 3 mensen tegelijk. Geen wachtrij, geen publiek, geen receptie. Je krijgt de avond ervoor een deurcode via WhatsApp — je loopt binnen en begint.",
            },
            {
              n: "03",
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
              n: "01",
              title: "Trainers deserve their full rate.",
              body: "We take 0% commission. The rate you see is what the trainer charges — we don't mark it up. That's why the best independent trainers in Amsterdam work here.",
            },
            {
              n: "02",
              title: "You train harder in private.",
              body: "Max 3 people at once. No queue, no audience, no reception desk. You get a door code via WhatsApp the night before — you walk in and start.",
            },
            {
              n: "03",
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
            <div key={b.n} className="relative">
              <span className="block text-5xl font-display font-bold text-brand/40 leading-none mb-3">
                {b.n}
              </span>
              <h3 className="text-lg font-bold mb-2 text-balance">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
