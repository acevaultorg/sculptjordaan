import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute:
      "ZZP Personal Trainer Checklist Netherlands (2026) | SculptClub",
  },
  description:
    "Step-by-step checklist for personal trainers becoming self-employed (ZZP) in the Netherlands. KvK, VAT, insurance, banking, admin, first invoice.",
  keywords: [
    "zzp personal trainer netherlands",
    "freelance personal trainer registration",
    "kvk personal trainer",
    "personal trainer business setup amsterdam",
    "english personal trainer netherlands",
  ],
  alternates: {
    canonical: "/en/for-trainers/zzp-personal-trainer-checklist",
    languages: {
      nl: "/nl/voor-trainers/zzp-personal-trainer-checklist",
      en: "/en/for-trainers/zzp-personal-trainer-checklist",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/for-trainers/zzp-personal-trainer-checklist",
    title: "ZZP Personal Trainer Checklist Netherlands (2026) | SculptClub",
    description:
      "Step-by-step checklist for personal trainers becoming self-employed (ZZP) in the Netherlands. KvK, VAT, insurance, banking, admin, first invoice.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZZP Personal Trainer Checklist Netherlands (2026) | SculptClub",
    description:
      "Step-by-step checklist for personal trainers becoming self-employed (ZZP) in the Netherlands. KvK, VAT, insurance, banking, admin, first invoice.",
  },
};

export default function ZZPChecklistEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "For Trainers", url: "/en/for-trainers" },
          {
            name: "ZZP Checklist",
            url: "/en/for-trainers/zzp-personal-trainer-checklist",
          },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Practical checklist"
          title="ZZP personal trainer checklist (2026)"
          description="Everything you need to set up as a freelance personal trainer in the Netherlands. Order, costs, time investment. No vagueness."
          center={false}
        />
      </Section>

      <Section>
        <article className="prose prose-invert max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed">
            This checklist assumes you already have a valid personal training certification (NL-Actief, NSCA, ACE, EHFA Level 3 or equivalent). Below is the administrative setup — from KvK registration to your first invoice. Total timeline: 1-2 weeks. Total cost: ~€150-€250 one-time + ~€60-€120 monthly fixed.
          </p>

          <h2>Step 1 — KvK (Chamber of Commerce) registration</h2>
          <ul>
            <li><strong>Cost:</strong> €82.25 one-time</li>
            <li><strong>Time:</strong> 30 min online + KvK office visit (~45 min)</li>
            <li><strong>How:</strong> go to <a href="https://www.kvk.nl/inschrijven/" rel="external">kvk.nl/inschrijven</a>, fill in your details, schedule an appointment. Bring: ID, BSN (Dutch tax number), residential address.</li>
            <li><strong>SBI code:</strong> 9313 (Fitness centres) or 8551 (Sports and recreation education). Both work.</li>
            <li><strong>Business name:</strong> "Your Name Personal Training" or a trade name. Not protected without separate trademark registration.</li>
            <li><strong>Note for expats:</strong> you need a BSN to register. Get this via the gemeente (city hall) registration at your address. Takes 1-2 weeks if newly arrived.</li>
          </ul>

          <h2>Step 2 — VAT number + KOR</h2>
          <ul>
            <li><strong>Cost:</strong> €0</li>
            <li><strong>Time:</strong> automatic with KvK registration (within 5 working days)</li>
            <li><strong>KOR (Small Business Scheme):</strong> if you expect to stay under €20,000 annual turnover, register for KOR. This means: no VAT on invoices, no VAT filings. Apply via <a href="https://www.belastingdienst.nl" rel="external">Mijn Belastingdienst Zakelijk</a>.</li>
            <li><strong>Above €20,000?</strong> Charge 21% VAT on invoices, file quarterly. Bookkeeping software handles this automatically.</li>
            <li><strong>Deeper dive:</strong> exactly which rate (21% or 9%) applies to personal training, and when, is worked out in <a href="/en/blog/vat-personal-trainer-netherlands">VAT for personal trainers</a>.</li>
          </ul>

          <h2>Step 3 — Professional liability insurance</h2>
          <ul>
            <li><strong>Cost:</strong> €25–€45 per month</li>
            <li><strong>Time:</strong> 20 min online application</li>
            <li><strong>Required?</strong> Not legally, but most studio landlords (including SculptClub) and clients' own insurers require it. Without insurance you're personally liable for injuries.</li>
            <li><strong>Providers:</strong> ZZP-pensioen.nl, Centraal Beheer Achmea, Hiscox, Schouten ZZP. Minimum coverage €1 million per event.</li>
            <li><strong>Tip:</strong> choose a policy that also covers "damage to rented premises" — relevant if you rent studio space.</li>
            <li><strong>Separately:</strong> disability insurance (what if you yourself get injured and can't train) is a different policy — see <a href="/en/blog/disability-insurance-freelance-personal-trainer-netherlands">disability insurance for personal trainers</a>.</li>
          </ul>

          <h2>Step 4 — Business bank account</h2>
          <ul>
            <li><strong>Cost:</strong> €0–€10 per month</li>
            <li><strong>Time:</strong> 15 min online</li>
            <li><strong>Required?</strong> Not legally, but strongly recommended. Tax audits are harder with private/business mixed on one account.</li>
            <li><strong>Options:</strong> Bunq Easy Bank Pro (€8.99/mo, free first 12 months), Knab ZZP (€0/mo basic), ING Business (€8/mo). Bunq + Knab are most ZZP-friendly. Bunq supports English UI fully; ING is mostly Dutch.</li>
          </ul>

          <h2>Step 5 — Bookkeeping</h2>
          <ul>
            <li><strong>Cost:</strong> €0–€20 per month</li>
            <li><strong>Time:</strong> 1 hour setup + 15 min/week maintenance</li>
            <li><strong>Software:</strong> MoneyMonk (€11.75/mo, built for ZZP'ers, NL only), Bunq Business with built-in bookkeeping, Tellow (€11.90/mo). Avoid manual Excel — tax authority requires digital records for 7 years.</li>
            <li><strong>Track:</strong> every invoice you send, every receipt/invoice you pay (equipment, certifications, studio rent, travel costs), mileage if you travel to clients.</li>
          </ul>

          <h2>Step 6 — Pension (voluntary but smart)</h2>
          <ul>
            <li><strong>Cost:</strong> from €50 per month</li>
            <li><strong>Time:</strong> 30 min one-time</li>
            <li><strong>Why:</strong> ZZP'ers don't get employer pension. Without your own buildup, you'll only have AOW (~€1,500 gross/month single in 2026). Contributions are tax-deductible up to an annual cap.</li>
            <li><strong>Providers:</strong> Brand New Day, Bright Pensions, Aegon ZZP-pensioen. All low-cost, mobile-managed.</li>
          </ul>

          <h2>Step 7 — Terms + Privacy policy</h2>
          <ul>
            <li><strong>Cost:</strong> €0–€50 one-time</li>
            <li><strong>Time:</strong> 1 hour</li>
            <li><strong>What:</strong> terms of service (payment terms, cancellation policy, no-show policy) + GDPR privacy statement if you store client data.</li>
            <li><strong>Templates:</strong> free via <a href="https://www.kvk.nl/advies-en-informatie/" rel="external">KvK advice</a> or NL Actief (Dutch sports industry association).</li>
            <li><strong>Tip:</strong> put your terms on one page of your website and reference them in every invoice. Nobody reads it, but legally needed.</li>
          </ul>

          <h2>Step 8 — Send your first invoice</h2>
          <ul>
            <li><strong>Cost:</strong> €0</li>
            <li><strong>Time:</strong> 10 min</li>
            <li><strong>Required fields:</strong> your name + address, KvK number, VAT number (or "KOR applies"), invoice date, invoice number (sequential), client details, description + rate + total, payment terms.</li>
            <li><strong>Recommendation:</strong> 14-day payment terms, upfront payment for packages. Late payers cost you on average €30-€80 in reminders + admin time per case.</li>
          </ul>

          <h2>Step 9 — Sort out training space</h2>
          <p>
            Once admin is set: pick where you work. Options compared in <a href="/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor">own studio vs home vs outdoor</a>. For most starting ZZP-PTs, hourly rental is the logical choice — low fixed costs, professional appearance.
          </p>
          <p>
            At <a href="/en/studio-rental">SculptClub in Jordaan</a> you start by the hour (€12 for half-studio, €17 for full). No membership, you keep 100% of your rate, all equipment included.
          </p>

          <h2>Step 10 — First clients</h2>
          <p>
            Detailed in the <a href="/en/for-trainers/becoming-freelance-personal-trainer">freelance trainer guide</a>. Short version: Google Business Profile + 10 reviews from first clients + Instagram content + 2-3 physio referral relationships = typically 8-15 new leads/month within 6 months.
          </p>

          <h2>Cost summary</h2>
          <ul>
            <li>One-time: <strong>~€150-€250</strong> (KvK + setup costs)</li>
            <li>Monthly fixed: <strong>~€60-€120</strong> (insurance + bank + bookkeeping + pension)</li>
            <li>Variable per session: studio rent €12-€24, admin time</li>
          </ul>
          <p>
            Compare with chain-gym employment (~€2,500-€3,500 gross/month): as a ZZP'er you need 8-12 paid sessions/week to match the same net income. Above that point you earn significantly more.
          </p>
          <p>
            Want more depth per step — VAT, disability insurance, pension? Read the complete guide <a href="/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension">freelance personal trainer in the Netherlands: KvK, VAT, insurance, pension</a>. And for what you actually keep after deductions in your first year: <a href="/en/blog/first-year-tax-freelance-personal-trainer-netherlands">first-year tax as a freelance personal trainer</a>.
          </p>
        </article>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready for the next step?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Start with a free intro at SculptClub. See the studio, ask questions, decide afterwards.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/en/become-trainer" size="lg">
                Join as a trainer
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
