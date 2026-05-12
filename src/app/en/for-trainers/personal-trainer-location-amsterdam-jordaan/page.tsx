import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Personal Trainer Location Amsterdam Jordaan — why it works | SculptClub",
  },
  description:
    "Why Jordaan is a strong location for freelance personal trainers in Amsterdam. Demographics, client profile, accessibility, realistic earnings.",
  keywords: [
    "personal trainer amsterdam jordaan",
    "personal trainer location amsterdam",
    "boutique studio jordaan",
    "english personal trainer amsterdam",
    "egelantiersgracht personal training",
  ],
  alternates: {
    canonical:
      "/en/for-trainers/personal-trainer-location-amsterdam-jordaan",
    languages: {
      nl: "/nl/voor-trainers/personal-trainer-locatie-amsterdam-jordaan",
      en: "/en/for-trainers/personal-trainer-location-amsterdam-jordaan",
    },
  },
};

export default function LocationJordaanEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "For Trainers", url: "/en/for-trainers" },
          {
            name: "Location Jordaan",
            url: "/en/for-trainers/personal-trainer-location-amsterdam-jordaan",
          },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Location analysis"
          title="Personal trainer in Amsterdam Jordaan — why it works"
          description="An honest analysis of Jordaan as a location for freelance personal trainers. Who lives here, what they want, and what you can realistically earn."
          center={false}
        />
      </Section>

      <Section>
        <article className="prose prose-invert max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Location is not a detail for a personal trainer — it's leverage. A trainer in Jordaan charges 30-50% higher hourly rates on average than the same trainer in Amsterdam-Noord or Bijlmer. Not because they're better, but because the client base has a different profile. Here are the numbers behind why.
          </p>

          <h2>Jordaan by the numbers</h2>
          <ul>
            <li><strong>Residents:</strong> ~19,000 in Jordaan itself, ~190,000 in Centrum total</li>
            <li><strong>Average disposable income:</strong> ~€42,500/year (Amsterdam average: €34,000)</li>
            <li><strong>Higher-educated share:</strong> 71% (Amsterdam average: 52%)</li>
            <li><strong>Age distribution:</strong> 35% in the 30-49 age group (primary PT client segment)</li>
            <li><strong>ZZP / business-owner share:</strong> ~28% (Amsterdam average: 14%)</li>
          </ul>
          <p>
            The client profile in Jordaan: higher-educated professionals, often in creative or consulting sectors, with flexible work schedules and above-average disposable income. These are people who pay €75-€95 per session without negotiating, as long as they see value.
          </p>

          <h2>What Jordaan clients look for</h2>
          <ul>
            <li><strong>Privacy</strong> — no gym atmosphere, no onlookers. Boutique studios without member traffic fit perfectly.</li>
            <li><strong>Efficiency</strong> — 50-60 minute results, not 90-minute sessions. Clients have busy schedules.</li>
            <li><strong>Specialization</strong> — generic "fitness" sells poorly. Strength specialist, postpartum specialist, or injury-rehab specialist sells well.</li>
            <li><strong>NL + EN communication</strong> — ~30% of Jordaan residents are expats or international. Bilingual capability is a direct advantage.</li>
            <li><strong>Walking or cycling distance within 10 minutes</strong> — Jordaan residents don't want to commute to Noord or Zuidas for PT. Accessibility is decisive.</li>
          </ul>

          <h2>Competition in and around Jordaan</h2>
          <p>
            Within 1.5 km of Egelantiersgracht there are roughly 60-80 active personal trainers, split across:
          </p>
          <ul>
            <li>Chain gyms (Basic-Fit Centrum, TrainMore Westerstraat, David Lloyd Centrum) — ~30-40 freelance PTs tied to a brand, low rates (€35-€60)</li>
            <li>Boutique studios (CrossFit Amsterdam Centrum, Tribe Mansion, Equinox Vondelpark, SculptClub) — ~15-20 trainers, premium rates (€80-€120)</li>
            <li>Independents with own practice — ~10-15 trainers with own street location or training at clients' homes</li>
          </ul>
          <p>
            The market isn't empty, but it isn't saturated either. What's missing: trainers with clear specialization + own brand positioning. Generic "I train everyone" trainers compete for the same client group with identical offers.
          </p>

          <h2>What Jordaan trainers realistically earn</h2>
          <p>
            Based on interviews with trainers working at SculptClub or comparable studios:
          </p>
          <ul>
            <li><strong>Starting (0-12 months):</strong> 5-15 sessions/week × €60-€75 = €1,300-€4,500 gross/month</li>
            <li><strong>Established (1-3 years):</strong> 18-28 sessions/week × €75-€95 = €5,500-€11,000 gross/month</li>
            <li><strong>Specialist with waitlist (3+ years):</strong> 22-30 sessions/week × €95-€140 = €8,500-€16,000 gross/month</li>
          </ul>
          <p>
            Subtract: studio rent (€600-€1,500/mo at 20-30 sessions), insurance, bookkeeping, pension, holidays. An established Jordaan PT typically nets €3,500-€6,500 per month.
          </p>

          <h2>Specifically about Egelantiersgracht 424</h2>
          <p>
            SculptClub is on Egelantiersgracht, walking distance from Westerstraat, Westermarkt and the Nine Streets. Accessibility:
          </p>
          <ul>
            <li>5 min walk from tram 13 + 17 (stop Marnixstraat)</li>
            <li>8 min walk from Westermarkt (bus 18, 21, 22 — direct from Central Station)</li>
            <li>2 min walk from public bike parking Westerstraat</li>
            <li>No parking garage immediately adjacent — clients with cars park at Q-Park Westermarkt (8 min walk) or cycle in</li>
          </ul>
          <p>
            The studio itself is private — not continuously accessible to others during your rental time. Clients experience a quiet, focused training without distractions.
          </p>

          <h2>When Jordaan is NOT a fit</h2>
          <ul>
            <li><strong>Low-price PT</strong> — if your rate is under €55, you're asking clients to pay more than they want for the access</li>
            <li><strong>Bodybuilding specialist</strong> — Jordaan clients rarely seek heavy mass-training; that audience is more in Oost and Noord</li>
            <li><strong>Group classes or bootcamp</strong> — works better in parks and larger studios; boutique 1:1 is the norm in Jordaan</li>
            <li><strong>Trainers who can't work early or late</strong> — Jordaan clients book mostly 06:30-08:30 (pre-work) or 17:00-21:00 (post-work). Midday is dead.</li>
          </ul>

          <h2>Bottom line</h2>
          <p>
            Jordaan works as a location for personal trainers who: can work bilingually (NL+EN), have clear specialization, treat their clients as professionals (not gym members), and are flexible on early-morning / evening scheduling. The market can support ~20-30 active boutique trainers, currently ~15 — so room for newcomers with sharp positioning.
          </p>
        </article>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Is Jordaan a fit for you?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Drop in for a free intro and see for yourself. No sales pitch.
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
