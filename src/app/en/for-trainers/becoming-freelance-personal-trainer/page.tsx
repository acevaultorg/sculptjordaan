import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "Becoming a Freelance Personal Trainer in Amsterdam (2026)",
  },
  description:
    "Practical guide for personal trainers going freelance in Amsterdam. Registration, rates, first clients, renting a studio in Jordaan.",
  keywords: [
    "freelance personal trainer amsterdam",
    "becoming a personal trainer netherlands",
    "personal trainer registration netherlands",
    "personal trainer rates amsterdam",
    "english personal trainer amsterdam",
  ],
  alternates: {
    canonical: "/en/for-trainers/becoming-freelance-personal-trainer",
    languages: {
      nl: "/nl/voor-trainers/freelance-personal-trainer-worden",
      en: "/en/for-trainers/becoming-freelance-personal-trainer",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/for-trainers/becoming-freelance-personal-trainer",
    title: "Becoming a Freelance Personal Trainer in Amsterdam (2026)",
    description:
      "Practical guide for personal trainers going freelance in Amsterdam. Registration, rates, first clients, renting a studio in Jordaan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Becoming a Freelance Personal Trainer in Amsterdam (2026)",
    description:
      "Practical guide for personal trainers going freelance in Amsterdam. Registration, rates, first clients, renting a studio in Jordaan.",
  },
};

export default function FreelancePTGuideEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "For Trainers", url: "/en/for-trainers" },
          {
            name: "Becoming Freelance Personal Trainer",
            url: "/en/for-trainers/becoming-freelance-personal-trainer",
          },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Guide for PTs"
          title="Becoming a freelance personal trainer in Amsterdam"
          description="An honest guide for personal trainers considering going freelance in Amsterdam. No sales pitch — what we see working for trainers who start at SculptClub."
          center={false}
        />
      </Section>

      <Section>
        <article className="prose prose-invert max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            Going from employee at a chain gym to freelance personal trainer feels like a big step. Amsterdam has roughly 1,500 active PTs. Half work salaried at Basic-Fit, TrainMore, Fit For Free or a physiotherapy practice. The other half work for themselves — from home, in public gyms, or in rented studio space.
          </p>

          <h2>1. Registration + admin</h2>
          <p>
            In the Netherlands, freelance PTs operate as ZZP'er (self-employed without staff). What you need to set up:
          </p>
          <ul>
            <li>
              <strong>Register with KvK</strong> (Chamber of Commerce) — €82.25 one-time fee. SBI-code: 9313 (Fitness centres) or 8551 (Sport and recreation education).
            </li>
            <li>
              <strong>VAT number</strong> — issued automatically with KvK registration. Under €20,000 annual turnover you qualify for KOR (small-business scheme) — no VAT on invoices.
            </li>
            <li>
              <strong>Professional liability insurance</strong> — required if you train in a studio or at clients' homes. Around €25–€45/month at ZZP-pensioen.nl or Centraal Beheer.
            </li>
            <li>
              <strong>Bookkeeping</strong> — free with MoneyMonk or Bunq Business for the first 12 months, then €10–€20/month.
            </li>
            <li>
              <strong>Pension</strong> — not mandatory but smart. Brand New Day or Bright Pensions from €50/month.
            </li>
          </ul>

          <h2>2. Setting your rates</h2>
          <p>
            In Amsterdam, personal training rates range from €60 to €95 per hour. Boutique trainers with experience (5+ years) and specialization (strength, postpartum, injury rehab) charge €85–€125. Chain-gym rates (€30–€55) are not viable for freelance trainers.
          </p>
          <p>
            <strong>Reverse-engineer from your goal:</strong> want €4,000 net per month? You need to gross roughly €5,500. At €75/hour, that's 73 sessions per month, or 18 per week. Account for no-shows, holidays and admin time — plan for 22–25 billable sessions per week.
          </p>

          <h2>3. Finding space</h2>
          <p>
            This is the biggest pitfall for beginning freelance PTs. Three options, ranked by how often they work:
          </p>
          <ul>
            <li>
              <strong>At the client's home</strong> — lowest barrier, highest commute burden. Clients expect lower rates (€45–€60). No equipment, just bodyweight and bands.
            </li>
            <li>
              <strong>Public parks (Vondelpark, Westerpark)</strong> — free, but weather-dependent and not suitable for heavy strength work. Works 3–5 months per year in the Netherlands.
            </li>
            <li>
              <strong>Renting a studio by the hour</strong> — fixed location, professional equipment, premium perception. From €12/hour at <a href="/en/studio-rental">SculptClub in Jordaan</a> (no membership, just rent — you keep 100%).
            </li>
          </ul>
          <p>
            Many trainers start at clients' homes and switch to a fixed studio within 3–6 months because the commute eats their margin. A trainer who trains 4 clients in the same studio earns 4× more than one cycling across the city.
          </p>

          <h2>4. First clients</h2>
          <p>
            Your first 5 clients usually come from your existing network — former gym members, friends, friends-of-friends. After that, it gets harder without an online presence. What works for PTs in Amsterdam:
          </p>
          <ul>
            <li>
              <strong>Google Business Profile</strong> — free, locally findable. Add photos of where you train, ask every happy client for a review. One PT with 30 reviews ranks above 5 PTs with 5 reviews.
            </li>
            <li>
              <strong>Instagram content</strong> — not "transformations" but your training philosophy, exercise breakdowns, client stories (with permission). 30 minutes a week, consistently.
            </li>
            <li>
              <strong>Directory listings</strong> — sites people use to find PTs in Amsterdam. SculptClub has its own <a href="/en/find-personal-trainer">trainer directory</a> where members appear for free.
            </li>
            <li>
              <strong>Physiotherapist referrals</strong> — physios get weekly requests for "who can take this person further after rehab?" A solid relationship with 2–3 local physios produces steady client flow.
            </li>
          </ul>

          <h2>5. Common mistakes</h2>
          <ul>
            <li>
              <strong>Pricing too low to "win clients"</strong> — doesn't work. Clients paying €40 are often more demanding than clients paying €80. Lower prices attract price-shoppers, not loyal clients.
            </li>
            <li>
              <strong>No deposit / cancellation policy</strong> — no-shows can cost 15–20% of revenue. Monthly packages with upfront payment are the boutique-PT standard.
            </li>
            <li>
              <strong>Too many target audiences</strong> — "strength, fat-loss, postpartum, sports rehab, seniors" is not positioning. Pick 1–2 specialties; become the name in Amsterdam for that niche.
            </li>
            <li>
              <strong>No fixed location</strong> — clients book more easily with a trainer who has a recognizable address. A fixed studio (even rented hourly) substantially raises perceived professionalism.
            </li>
            <li>
              <strong>No invoicing, no admin</strong> — Dutch tax authority checks on ZZP-trainers have increased since 2024. Keep your admin clean from day 1.
            </li>
          </ul>

          <h2>Bottom line</h2>
          <p>
            Going freelance in Amsterdam is achievable for trainers who work consistently. The first 6 months are hardest — after that, it compounds through referrals and reviews. The biggest levers: fixed location, specialized positioning, and an honest price that reflects your work.
          </p>
          <p>
            At SculptClub in Jordaan you can start small — rent the studio by the hour, no membership — you keep 100% of your rate. When you grow, you can join as a trainer and get your own profile on our site plus matching with clients who find SculptClub directly.
          </p>
        </article>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to start?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Schedule a free intro, see the studio, decide if it fits. No obligation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/en/become-trainer" size="lg">
                Join as a trainer
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="/en/studio-rental"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                See studio rental
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
