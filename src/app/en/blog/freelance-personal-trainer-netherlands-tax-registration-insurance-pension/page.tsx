import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Freelance Personal Trainer Netherlands — Tax, KvK, Insurance, Pension (2026 Guide) — SculptClub" },
  description:
    "Complete guide for becoming a freelance personal trainer in the Netherlands: KvK registration, VAT, professional liability, disability insurance, pension and bookkeeping. With 2026 numbers.",
  keywords: [
    "freelance personal trainer netherlands vat",
    "personal trainer kvk registration",
    "professional liability personal trainer",
    "disability insurance personal trainer",
    "freelance trainer tax netherlands",
  ],
  alternates: {
    canonical: "/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension",
    languages: {
      nl: "/nl/blog/zzp-personal-trainer-nederland-kvk-btw-verzekering-pensioen",
      en: "/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension",
    title: "Freelance Personal Trainer Netherlands — Tax, KvK, Insurance, Pension (2026 Guide) — SculptClub",
    description:
      "Complete guide for becoming a freelance personal trainer in the Netherlands: KvK registration, VAT, professional liability, disability insurance, pension and bookkeeping. With 2026 numbers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Personal Trainer Netherlands — Tax, KvK, Insurance, Pension (2026 Guide) — SculptClub",
    description:
      "Complete guide for becoming a freelance personal trainer in the Netherlands: KvK registration, VAT, professional liability, disability insurance, pension and bookkeeping. With 2026 numbers.",
  },
};

export default function BlogPostFreelanceTrainerTax() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Freelance trainer Netherlands — tax, insurance, pension", url: "/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension" },
        ]}
      />
      <BlogPostingJsonLd
        title="Freelance personal trainer in the Netherlands — tax, KvK, insurance, pension (2026 guide)"
        description="Complete guide for becoming a freelance personal trainer in the Netherlands: KvK registration, VAT, professional liability, disability insurance, pension and bookkeeping. With 2026 numbers."
        url="/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension"
        datePublished="2026-05-20"
      />
      <FaqJsonLd faqs={[
        { question: "What does KvK registration cost for a personal trainer?", answer: "€82.25 one-time in 2026. You get a KvK number immediately after registration. Your VAT number follows from the Belastingdienst within 1-3 weeks." },
        { question: "What VAT rate applies to personal training?", answer: "21% standard rate in 2026. The sport VAT exemption no longer applies to individual PT sessions — that exemption is for non-profit clubs and associations only." },
        { question: "Do I need disability insurance (AOV)?", answer: "Not legally required, but strongly recommended. Options: broodfonds (collective, ~€50-100/month), commercial AOV (~€150-300/month) or self-insure. Choice depends on your fixed costs and savings buffer." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Freelance personal trainer in the Netherlands — tax, KvK, insurance, pension (2026 guide)
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />20 May 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                You’re starting as a personal trainer in the Netherlands. Before your first invoice goes out, there’s a handful of formal steps you cannot skip: KvK registration, VAT administration, professional liability, and over time pension. This guide walks through each, with current 2026 numbers.
              </p>
              <p>
                <em>Note: this article is informational, not tax or legal advice. For your specific situation, consult a Dutch tax advisor, accountant, or the Belastingdienst directly.</em>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Step 1 — When are you formally a freelancer (ZZP)?</h2>
              <p>
                You’re a freelancer once you register at the Chamber of Commerce (Kamer van Koophandel, KvK) as a sole trader (eenmanszaak). Before that registration, you cannot legally invoice — receiving money for services without a KvK and VAT number is technically undeclared work.
              </p>
              <p>
                Grey area: occasionally helping a friend in exchange for a coffee or dinner isn’t commerce. But the moment you structurally deliver paid services, you’re formally an entrepreneur and need to register.
              </p>
              <p>
                Practical definition of “structural”: more than 3-4 paid sessions per month, or pre-arranged client relationships with invoices.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Step 2 — KvK registration (€82.25, 1 day)</h2>
              <p>
                Register online at kvk.nl. You need:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "A valid ID (DigiD or passport — non-Dutch residents need BSN first)",
                  "A business address (your home is allowed, but consider a virtual office or coworking for privacy — the KvK address is public)",
                  "A business name (your own name, or a trade name)",
                  "The right SBI code: 8551 (sports/recreation education) or 9319 (other sports activities)",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                Registration costs <strong className="text-foreground">€82.25 one-time (2026 rate)</strong>. You get a KvK number immediately. Your VAT number arrives automatically from the Belastingdienst within 1-3 weeks.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Step 3 — VAT — 21% standard, no sport exemption</h2>
              <p>
                Individual personal training falls under the 21% standard VAT rate in 2026. You add this on top of your net rate.
              </p>
              <p>
                Example: your net rate is €50/session. Your invoice reads €50 + €10.50 VAT = €60.50. You remit the €10.50 to the Belastingdienst.
              </p>
              <p>
                A common confusion: there is a “sport VAT exemption” but it only applies to non-profit clubs and associations. Commercial 1-on-1 PT does not qualify.
              </p>
              <p>
                VAT filing is quarterly (or monthly above ~€100k revenue). The Small Business Scheme (KOR) is an option below €20,000 annual revenue — no VAT charged, but you also cannot deduct input VAT. For most ambitious PTs, KOR isn’t the right choice.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Step 4 — Professional liability insurance (~€25-50/month)</h2>
              <p>
                As a PT you’re responsible for your clients’ physical safety. If someone injures during your session and holds you liable, the financial consequences can be enormous.
              </p>
              <p>
                Professional liability insurance (beroepsaansprakelijkheidsverzekering, BA) covers damage you cause as a professional to others. Insurers offering PT policies in the Netherlands:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Centraal Beheer", "Well-known with freelancers, flexible coverage"],
                  ["Univé", "Often cheaper for sport professions"],
                  ["Aon (business)", "Higher coverage for those who also work in gyms"],
                  ["Specialist sport insurers (e.g. NL Sportverzekeringen)", "Packages specifically for PTs, physios and fitness instructors"],
                ].map(([name, desc]) => (
                  <li key={name} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{name}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Expect ~€25-50/month for €1-€2.5M coverage. Significantly lower amounts barely exist seriously. Significantly higher isn’t needed without a large schedule.
              </p>
              <p>
                <strong className="text-foreground">At SculptClub:</strong> we require a valid BA policy if you rent our studio. Not because we take commission (we don’t — 0%), but because we want the risk pyramid clean for everyone.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Step 5 — Disability insurance (AOV)</h2>
              <p>
                An AOV covers your income when you cannot work yourself (injury, illness, mental health). It’s NOT legally required for freelancers, but it’s an important consideration.
              </p>
              <p>
                Three main paths:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Broodfonds", "Collective of freelancers who pay each other during illness. €50-100/month. Covers typically 2 years. No medical screening upfront. Solidaristic, not commercial."],
                  ["Commercial AOV", "Insurance via De Goudse, Klaverblad, Movir or similar. €150-300/month. Longer coverage, higher payout, requires medical screening."],
                  ["Self-insurance", "You build your own buffer. Only sensible with 12+ months of fixed costs in the bank and low fixed expenses."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                For starting PTs with low fixed costs (no mortgage, no kids), a Broodfonds is often the smart choice. PTs with family + owned home usually need a commercial AOV.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Step 6 — Pension — no employer, so you arrange it</h2>
              <p>
                Freelancers don’t build pension via an employer. You’ll get state pension (AOW) from age 67, but in 2026 that’s about €1,200 net/month — not enough to live on. Supplementary pension is on you.
              </p>
              <p>
                Three popular routes for freelancer pension:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Lijfrente via ABN AMRO / Brand New Day / Bright Pensions", "Deposit yearly (up to ~€16k/year tax-deductible). Money locked until pension age."],
                  ["Banksparen (annuity savings account)", "Like lijfrente but at a bank. Often lower fees than investment-based annuities."],
                  ["Free investing (ETFs via DEGIRO / Saxo)", "No tax deduction, but money stays accessible. Riskier — requires discipline not to tap."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Practical advice for year 1: do nothing here, focus on clients and cashflow. From year 2-3 onward: minimum €200/month set aside for your retirement future. The older you get, the more expensive catching up gets.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Step 7 — Bookkeeping (Excel vs MoneyMonk vs accountant)</h2>
              <p>
                Three bookkeeping levels for a freelance PT, increasing in cost + quality:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Excel / Numbers (€0)", "Works up to ~€20-30k revenue. You enter invoices + expenses yourself. VAT filing via mijnBelastingdienst.nl. Lots of work, error-prone, but free."],
                  ["MoneyMonk / Tellow / Jortt (€10-25/month)", "Cloud bookkeeping for freelancers. Automatic bank connection, one-click VAT filings, exportable annual statement. Recommended from €30k revenue."],
                  ["Accountant (€50-150/month)", "Fully outsourced. Recommended from €70k revenue or when your situation gets complex (online sales, international invoices, partner administration)."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                For 90% of starting PTs, <strong className="text-foreground">MoneyMonk</strong> is the sweet spot. ~€15/month, saves a day’s work per quarter on VAT, and annual statement is automated. Investment that pays back.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Step 8 — First income tax filing</h2>
              <p>
                You file income tax once per year as a freelancer. Key deductions:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Zelfstandigenaftrek 2026", "€2,123 — if you spend at least 1,225 hours in your business that year (urencriterium)."],
                  ["Startersaftrek (first 5 years)", "Extra ~€2,123 on top of zelfstandigenaftrek. Up to 3× in your first 5 years."],
                  ["MKB-winstvrijstelling", "14% of your profit (after deductions) is tax-free."],
                  ["KIA (small-scale investment deduction)", "Deduction on investments above €2,601/year. Especially useful if you buy equipment."],
                  ["Business expenses", "Studio rent, insurance, KvK, MoneyMonk, phone, training, travel. All deductible."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                In practice a starting freelance PT with €30k revenue and the usual deductions pays effectively 15-25% tax on profit. Not 49% as the bracket suggests — the deductions do heavy lifting.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Summary — what to have arranged before your first client</h2>
              <p>
                Minimal starter checklist:
              </p>
              <ol className="space-y-2 list-decimal pl-6">
                {[
                  "KvK registration (€82.25) and wait for VAT number (1-3 weeks)",
                  "Professional liability insurance activated (~€25-50/month)",
                  "MoneyMonk or equivalent bookkeeping set up (~€15/month)",
                  "Business bank account (bunq, ING, ABN, Knab — pick what fits)",
                  "First invoice template ready (with KvK number, VAT number, 21% VAT)",
                ].map((line) => (
                  <li key={line} className="leading-relaxed">{line}</li>
                ))}
              </ol>
              <p>
                Pension and AOV are not blockers for client 1, but they are for client 50 — sort them within your first year.
              </p>
              <p>
                Looking for a place to train clients once the paperwork is done? Rates, equipment and how per-hour rental works are on our <a href="/en/for-trainers" className="text-brand hover:underline">for-trainers page</a>.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Further reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/en/for-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub freelance-trainer checklist</p></a>
                  <a href="/en/for-trainers/becoming-freelance-personal-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Becoming a freelance personal trainer</p></a>
                  <a href="/en/blog/first-10-clients-freelance-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">First 10 clients as a freelance PT</p></a>
                  <a href="/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Cost: studio rental vs opening own gym</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Sorted? Time for a workspace</h3>
                <p className="mb-4">
                  KvK registered, BA insurance live, ready to start. Check out SculptClub Studio Rental — no fixed costs, zero commission, from €12/hour.
                </p>
                <ButtonLink href="/en/studio-rental" size="lg">
                  See Studio Rental
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
