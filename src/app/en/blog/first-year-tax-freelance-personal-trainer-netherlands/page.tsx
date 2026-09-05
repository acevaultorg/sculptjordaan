import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "First-year tax as a freelance personal trainer in the Netherlands (2026) — SculptClub" },
  description:
    "Self-employed deduction €1,200, starter's deduction €2,123, the 1,225-hour criterion, and the 12.7% SME profit exemption — what each Dutch tax deduction actually saves in your first year, with a worked example.",
  keywords: [
    "first year tax freelance personal trainer netherlands",
    "zelfstandigenaftrek 2026 english",
    "starters deduction netherlands freelancer",
    "1225 hour criterion netherlands",
    "mkb profit exemption personal trainer",
  ],
  alternates: {
    canonical: "/en/blog/first-year-tax-freelance-personal-trainer-netherlands",
    languages: {
      nl: "/nl/blog/belasting-eerste-jaar-zzp-personal-trainer",
      en: "/en/blog/first-year-tax-freelance-personal-trainer-netherlands",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/first-year-tax-freelance-personal-trainer-netherlands",
    title: "First-year tax as a freelance personal trainer in the Netherlands (2026) — SculptClub",
    description:
      "The hours criterion, self-employed deduction, starter's deduction and SME profit exemption — the four deductions that shape your first year, with the Belastingdienst's own figures and a worked example.",
  },
  twitter: {
    card: "summary_large_image",
    title: "First-year tax as a freelance personal trainer in the Netherlands (2026) — SculptClub",
    description:
      "The hours criterion, self-employed deduction, starter's deduction and SME profit exemption — with a worked example for your first year.",
  },
};

export default function BlogPostFirstYearTaxFreelancePersonalTrainerNetherlands() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "First-year tax for freelance personal trainers", url: "/en/blog/first-year-tax-freelance-personal-trainer-netherlands" },
        ]}
      />
      <BlogPostingJsonLd
        title="First-year tax as a freelance personal trainer in the Netherlands (2026)"
        description="Self-employed deduction €1,200, starter's deduction €2,123, the 1,225-hour criterion and the 12.7% SME profit exemption — what each deduction actually saves in your first year, with a worked example."
        url="/en/blog/first-year-tax-freelance-personal-trainer-netherlands"
        datePublished="2026-09-02"
      />
      <FaqJsonLd faqs={[
        { question: "What is the hours criterion and how many hours do I need?", answer: "The hours criterion (urencriterium) is 1,225 hours per calendar year spent on your business — roughly 24 hours a week. Both billable PT hours and indirect hours (acquisition, bookkeeping, website upkeep) count in full. If you start mid-year, the full 1,225 hours still apply for that calendar year — it is not pro-rated." },
        { question: "How much self-employed deduction and starter's deduction do I get in 2026?", answer: "In 2026 the self-employed deduction (zelfstandigenaftrek) is €1,200. If you qualify as a starter, an extra €2,123 starter's deduction is added on top — €3,323 combined. The self-employed deduction is being phased down each year (it was €2,470 in 2025 and drops to €900 in 2027); the starter's deduction is not being reduced." },
        { question: "How many times can I apply the starter's deduction?", answer: "A maximum of 3 times within your first 5 years as an entrepreneur, and only if you were not recognised as an entrepreneur in one or more of the preceding 5 calendar years, and you did not apply the self-employed deduction more than twice already in that period." },
        { question: "What is the SME profit exemption and how does it work?", answer: "12.7% of your profit in 2026, after the entrepreneur's deduction (self-employed deduction plus any starter's deduction) has been subtracted, is exempt from tax. The Belastingdienst applies this automatically in your tax return — you do not need to claim it separately." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                First-year tax as a freelance personal trainer in the Netherlands
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />September 2, 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Meet the <strong>1,225-hour</strong> criterion in 2026, and you deduct <strong>€1,200 self-employed deduction</strong> from your profit — as a starter, an extra <strong>€2,123 starter&apos;s deduction</strong> is added on top. On what remains, <strong>12.7% SME profit exemption</strong> is tax-free. Those four items decide what you actually keep in your first year.
              </p>
              <p>
                <em>Important: this article is informational, not tax advice. The figures come from the Dutch tax office (Belastingdienst), as of September 2026; for your own return, talk to your accountant or the Belastingdienst directly.</em>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">The hours criterion: 1,225 hours — the key to every other deduction</h2>
              <p>
                Without meeting the hours criterion, there is no self-employed deduction and no starter&apos;s deduction. The threshold is <strong className="text-foreground">1,225 hours per calendar year</strong> spent on your business — roughly 24 hours a week. That does not need to be billable client time: acquisition, bookkeeping, maintaining your website, and travel time between sessions all count in full.
              </p>
              <p>
                Start in July, and the full 1,225 hours still apply for that calendar year — there is no pro-rating. For most starting personal trainers running several clients a day, that is achievable; with a handful of clients alongside a part-time job it usually is not, and the whole deduction falls away.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Self-employed deduction: €1,200 in 2026 — and it shrinks every year</h2>
              <p>
                The self-employed deduction (zelfstandigenaftrek) is a fixed amount you subtract from your profit once you meet the hours criterion, have not yet reached state pension age, and the Belastingdienst recognises you as an entrepreneur for income tax purposes. In 2026 that is <strong className="text-foreground">€1,200</strong> — a steep downward line: €2,470 in 2025, €1,200 in 2026, and €900 from 2027 onward. The government is phasing this deduction down step by step.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Starter&apos;s deduction: an extra €2,123, up to 3 times in your first 5 years</h2>
              <p>
                As a starter, an extra <strong className="text-foreground">€2,123</strong> is added on top of the self-employed deduction — <strong className="text-foreground">€3,323</strong> combined in 2026. Unlike the self-employed deduction, the starter&apos;s deduction is not being phased down.
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "You can apply it a maximum of 3 times within your first 5 years as an entrepreneur.",
                  "Condition: you were not recognised as an entrepreneur in one or more of the preceding 5 calendar years.",
                  "And: you did not apply the self-employed deduction more than twice already in that period.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                In practice: starting earlier means claiming the starter&apos;s deduction in your strongest years, before the regular self-employed deduction is phased down further.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">SME profit exemption: 12.7% of what remains</h2>
              <p>
                After the entrepreneur&apos;s deduction (self-employed deduction plus any starter&apos;s deduction) has been subtracted from your profit, the <strong className="text-foreground">SME profit exemption</strong> (mkb-winstvrijstelling) applies: in 2026, <strong className="text-foreground">12.7%</strong> of that remaining profit is exempt from tax. This is not something you fill in yourself — the Belastingdienst applies it automatically in your return.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">A worked example</h2>
              <p>
                Say you make €40,000 profit before deductions in your first year, and you qualify as a starter meeting the hours criterion:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "€40,000 profit − €3,323 entrepreneur's deduction (self-employed + starter's) = €36,677",
                  "− 12.7% SME profit exemption on €36,677 = €4,658 exempt",
                  "= €32,019 taxable profit, on which you then pay income tax (box 1) and the Zvw health-insurance contribution",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                The last step — what you actually pay in income tax on that €32,019 — depends on your total income and the current box 1 brackets; work that through with your accountant or the Belastingdienst&apos;s own calculator. This article stops at what gets deducted, not at what you ultimately transfer.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Further reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Freelance PT in the Netherlands — tax, registration, insurance</p></a>
                  <a href="/en/blog/vat-personal-trainer-netherlands" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">VAT for personal trainers — 21% or 9%</p></a>
                  <a href="/en/blog/disability-insurance-freelance-personal-trainer-netherlands" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Disability insurance (AOV) for personal trainers</p></a>
                  <a href="/en/for-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub freelance-trainer checklist</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Deductions clear? Time for a workspace</h3>
                <p className="mb-4">
                  Hours tracked, deductions worked out. Check out SculptClub Studio Rental — no fixed costs, no contract, from €12/hour.
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
