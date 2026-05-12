import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Own Studio vs Home vs Outdoor — where to work as a personal trainer | SculptClub",
  },
  description:
    "Comparison for freelance personal trainers: own studio (lease), at client's home, in a park, or hourly studio rental. Costs, margins, client perception.",
  keywords: [
    "where to train as personal trainer",
    "own studio vs home personal trainer",
    "personal trainer studio rental vs lease",
    "personal trainer at home amsterdam",
    "personal trainer outdoor amsterdam",
  ],
  alternates: {
    canonical:
      "/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor",
    languages: {
      nl: "/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten",
      en: "/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor",
    },
  },
};

export default function StudioVsHomeVsOutdoorEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "For Trainers", url: "/en/for-trainers" },
          {
            name: "Studio vs Home vs Outdoor",
            url: "/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor",
          },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Comparison"
          title="Own studio, at client's home, outdoor, or studio by the hour?"
          description="The four main options for where a freelance personal trainer can work — with real numbers for costs, margins, and client perception."
          center={false}
        />
      </Section>

      <Section>
        <article className="prose prose-invert max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            A freelance personal trainer can work four ways: lease an own studio, train at clients' homes, train outdoors in a park, or rent a studio by the hour. Each option has a different cost model, different client base, and different risks. Below the comparison based on real numbers from the Amsterdam PT market.
          </p>

          <h2>Option A — Lease your own studio</h2>
          <p>
            Rent or buy your own space, possibly shared with other trainers. Full control, but substantial fixed costs.
          </p>
          <ul>
            <li><strong>Fixed costs/mo:</strong> €1,500-€3,500 rent + €200-€400 utilities + €150-€300 insurance = <strong>€1,850-€4,200/mo</strong></li>
            <li><strong>One-time investment:</strong> €15,000-€40,000 in equipment (Rogue rack, dumbbells, cable machine, flooring, mirrors, mat, benches)</li>
            <li><strong>Margin at 25 sessions/wk × €85:</strong> €8,500 revenue/mo − €4,000 costs = €4,500 net margin (before tax)</li>
            <li><strong>Break-even:</strong> ~12-15 sessions/wk just to cover fixed costs</li>
            <li><strong>When valuable:</strong> 3+ years experience, proven client flow, ≥25 paying sessions/wk, you want scale economics</li>
            <li><strong>Risks:</strong> long lease contracts (usually 5 years in NL), equipment depreciation, vacancy during holidays or illness</li>
          </ul>

          <h2>Option B — Train at clients' homes</h2>
          <p>
            No space costs, but commute-time penalty and lower perceived professionalism.
          </p>
          <ul>
            <li><strong>Fixed costs/mo:</strong> €25-€45 insurance + €0 rent = <strong>€25-€45/mo</strong></li>
            <li><strong>One-time investment:</strong> €500-€1,500 in portable equipment (kettlebells, bands, suspension trainer, jump rope)</li>
            <li><strong>Margin at 25 sessions/wk × €55-€70:</strong> €5,500-€7,000 revenue/mo − €100 = €5,400-€6,900 net margin</li>
            <li><strong>But:</strong> count 30-45 min commute per session. Effective loss of ~25-35% productive hours vs. fixed location.</li>
            <li><strong>When valuable:</strong> starting trainer with &lt;10 regular clients, or specialist working only with elderly/less-mobile clients</li>
            <li><strong>Risks:</strong> client no-show costs commute time (not just session time), limited equipment, no referral effect (clients don't see you work with others)</li>
          </ul>

          <h2>Option C — Outdoor in a park</h2>
          <p>
            Vondelpark, Westerpark, Sloterpark. No rent, but weather-dependent and unsuitable for heavy training.
          </p>
          <ul>
            <li><strong>Fixed costs/mo:</strong> €25-€45 insurance = <strong>€25-€45/mo</strong></li>
            <li><strong>One-time investment:</strong> €200-€600 in portable equipment</li>
            <li><strong>Workable months in NL:</strong> 5-6 per year (May-September + sometimes March-April/October)</li>
            <li><strong>Margin at 15 sessions/wk × €55-€70 (in season):</strong> €3,300-€4,200 revenue/mo</li>
            <li><strong>In winter (November-February):</strong> 0-30% of summer revenue</li>
            <li><strong>When valuable:</strong> additional channel on top of a fixed location, not as primary model</li>
            <li><strong>Risks:</strong> rain/wind cancellation, no strength equipment, limited audience (mostly younger active types)</li>
          </ul>

          <h2>Option D — Rent a studio by the hour</h2>
          <p>
            Book an hour in a shared or private studio when you have a client. No fixed costs, professional appearance.
          </p>
          <ul>
            <li><strong>Fixed costs/mo:</strong> €25-€45 insurance = <strong>€25-€45/mo</strong></li>
            <li><strong>Variable costs:</strong> €12-€24 per session in studio rent</li>
            <li><strong>One-time investment:</strong> €0-€300 (all equipment is the studio's)</li>
            <li><strong>Margin at 25 sessions/wk × €85, €17 rent:</strong> €8,500 revenue/mo − €1,700 rent − €40 insurance = €6,760 net margin</li>
            <li><strong>Margin at 25 sessions/wk × €85, €12 rent (half studio):</strong> €8,500 − €1,200 − €40 = €7,260 net margin</li>
            <li><strong>When valuable:</strong> 8-25 sessions/wk, no fixed contract wanted, premium client base wanted</li>
            <li><strong>Risks:</strong> studio availability in peak hours, no full control over interior/equipment, price increases by studio owner</li>
          </ul>

          <h2>Comparison in one table</h2>
          <p>At 25 sessions/week, average client base. Numbers in net margin per month:</p>
          <ul>
            <li>Own studio: <strong>€4,500/mo</strong> (highest ceiling, highest risk, highest setup investment)</li>
            <li>Client's home: <strong>€5,400/mo</strong> (highest flexibility, lowest equipment, highest commute-time loss)</li>
            <li>Outdoor (seasonal): <strong>€3,300/mo in summer, €0-€1,000 in winter</strong> (lowest costs, not year-round)</li>
            <li>Studio by the hour: <strong>€6,760-€7,260/mo</strong> (highest effective margin, no long contracts, professional appearance)</li>
          </ul>

          <h2>Which option when?</h2>
          <ul>
            <li><strong>Month 1-12:</strong> studio by the hour (Option D). Low fixed costs, premium client perception, easy to scale up or down.</li>
            <li><strong>Month 12-36:</strong> hourly rental stays optimal for most trainers. Scale advantage over own studio only kicks in at &gt;30 sessions/wk.</li>
            <li><strong>Year 3+ with &gt;30 sessions/wk consistently:</strong> consider leasing own studio, or negotiate a fixed block-rental deal with a shared studio.</li>
            <li><strong>Outdoor as supplement:</strong> 2-3 sessions/wk in summer for variety + outdoor-specific training (functional, running, conditioning). Not as primary model.</li>
            <li><strong>At client's home:</strong> only for specific niches (postpartum, elderly, injury rehab) where the client can't travel.</li>
          </ul>

          <h2>Why most Amsterdam trainers stay with Option D</h2>
          <p>
            In 2025-2026 we see a shift in Amsterdam: trainers who opened their own studios in 2018-2020 are now closing them because fixed costs press too hard against fluctuating client flows. The flexibility of hourly rental (no contract, zero notice period, only pay what you use) fits better with how boutique PT work actually flows — with seasonal peaks, client cycles, and personal holidays.
          </p>
          <p>
            At <a href="/en/studio-rental">SculptClub</a>, many trainers start with 4-6 sessions per week renting hourly. As their client flow grows, they buy packages (10/20/30 hours at once with 10-23% discount). When they sit stable at 25+ sessions/wk, some consider Option A — but most stay with D because the margin is net higher there, with less risk.
          </p>
        </article>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to try Option D?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Free intro session in our studio. See the space, compare with what you do now.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/en/studio-rental" size="lg">
                See studio rental
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="/en/for-trainers"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                For Trainers hub
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
