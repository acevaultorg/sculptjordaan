import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Disability insurance (AOV) for freelance personal trainers in the Netherlands — mandatory from ~2030 — SculptClub" },
  description:
    "Is disability insurance mandatory for freelance personal trainers in the Netherlands? From around 2030 it will be (the BAZ act). What the mandatory AOV means, what private cover costs for a physical profession, and when a broodfonds is enough.",
  keywords: [
    "aov personal trainer netherlands",
    "disability insurance freelance netherlands",
    "baz act self employed",
    "broodfonds personal trainer",
    "zzp insurance fitness professional",
  ],
  alternates: {
    canonical: "/en/blog/disability-insurance-freelance-personal-trainer-netherlands",
    languages: {
      nl: "/nl/blog/aov-personal-trainer-zzp",
      en: "/en/blog/disability-insurance-freelance-personal-trainer-netherlands",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/disability-insurance-freelance-personal-trainer-netherlands",
    title: "Disability insurance (AOV) for freelance personal trainers in the Netherlands — SculptClub",
    description:
      "What the upcoming mandatory AOV (BAZ act) means for personal trainers, what private cover costs for a physical profession, and when a broodfonds is enough.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disability insurance (AOV) for freelance personal trainers in the Netherlands — SculptClub",
    description:
      "What the upcoming mandatory AOV (BAZ act) means for personal trainers, what private cover costs for a physical profession, and when a broodfonds is enough.",
  },
};

export default function BlogPostDisabilityInsurancePT() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Disability insurance for personal trainers", url: "/en/blog/disability-insurance-freelance-personal-trainer-netherlands" },
        ]}
      />
      <BlogPostingJsonLd
        title="Disability insurance (AOV) for freelance personal trainers in the Netherlands — mandatory from ~2030"
        description="What the upcoming mandatory AOV (BAZ act) means for personal trainers, what private cover costs for a physical profession, and when a broodfonds is enough."
        url="/en/blog/disability-insurance-freelance-personal-trainer-netherlands"
        datePublished="2026-08-28"
      />
      <FaqJsonLd faqs={[
        { question: "Is disability insurance mandatory for personal trainers in the Netherlands?", answer: "Not yet. The BAZ bill (basic disability insurance for the self-employed) went to the Dutch parliament in March 2026 and is expected to make disability insurance mandatory for sole traders around 2030. If you already hold a private AOV that meets the legal requirements, an opt-out lets you stay outside the public scheme." },
        { question: "What does an AOV cost for a personal trainer?", answer: "Personal training counts as a physical profession, so insurers place it in a medium-high risk class. 2026 indication: roughly €80-120 gross per month for a trainer around 30 with €2,500 insured monthly income and a 30-day waiting period; around €50-80 with a 90-day wait. Broader cover runs €150-380 per month. Premiums are tax-deductible." },
        { question: "Is a broodfonds enough for a personal trainer?", answer: "A broodfonds typically pays €1,000-2,500 net per month for a maximum of two years. That is a solid bridge for shorter recoveries, but it does not cover permanent disability. A common combination for physical professions: broodfonds for the first two years plus an AOV with a two-year waiting period for everything after." },
        { question: "Are AOV premiums tax-deductible in the Netherlands?", answer: "Yes. Disability insurance premiums are deductible for Dutch income tax, so the net cost is roughly 30-40% below the gross premium depending on your tax rate." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Disability insurance for personal trainers — mandatory from ~2030, what it costs now
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />August 28, 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Disability insurance (AOV) is not yet mandatory for freelance personal trainers in the Netherlands — but that is changing. The BAZ bill has been before parliament since March 2026 and is expected to make cover mandatory for nearly all sole traders around 2030. And in a physical profession, the real question was never whether to arrange something, but what.
              </p>
              <p>
                <em>Important: this article is informational, not financial advice. Figures are indications as of August 2026; for your own situation, talk to an independent AOV adviser or the insurer directly.</em>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Is an AOV mandatory for personal trainers?</h2>
              <p>
                Not today. But the Dutch cabinet sent the <strong className="text-foreground">BAZ bill</strong> (basic disability insurance for the self-employed) to parliament on 23 March 2026. In short: nearly all self-employed sole traders — including personal trainers with an eenmanszaak — will be required to insure against loss of income from disability. The intended start date is around <strong className="text-foreground">2030</strong>.
              </p>
              <p>
                The public scheme in the bill: a premium of about <strong className="text-foreground">5.4% of profit</strong> (capped around €171 per month), against a payout of roughly 70% of prior income, up to minimum-wage level. If you already hold a private AOV that meets the legal bar, the <strong className="text-foreground">opt-out</strong> lets you stay outside the public scheme — which is why many advisers say: if you are going to take out an AOV anyway, doing it before the law lands means you still choose your own terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">What does an AOV cost for a personal trainer?</h2>
              <p>
                In insurer terms, personal training is a <strong className="text-foreground">physical profession</strong>: you demonstrate movements, spot heavy lifts and spend the day on the gym floor. That puts you in a medium-high risk class, paying more than someone behind a desk. 2026 indications:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["~€80-120 gross per month", "trainer around 30, €2,500 insured monthly income, 30-day waiting period"],
                  ["~€50-80 per month", "same profile with a 90-day wait — the premium lever with the biggest effect"],
                  ["€150-380 per month", "broader cover (€1,800-3,500 net/month insured, longer payout duration)"],
                ].map(([price, desc]) => (
                  <li key={price} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{price}</strong> — {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Two levers that structurally lower the premium: a <strong className="text-foreground">longer waiting period</strong> (if your buffer covers 3-6 months, you do not need to insure those months) and a <strong className="text-foreground">lower insured amount</strong> (insure your fixed costs, not your revenue). And premiums are <strong className="text-foreground">tax-deductible</strong>, so the net cost lands roughly 30-40% below the gross figure.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Broodfonds: the collective alternative</h2>
              <p>
                A broodfonds is a group of 20-50 independents who each set aside a monthly amount (often around €90) and make donations to whoever falls ill — typically <strong className="text-foreground">€1,000-2,500 net per month, for a maximum of two years</strong>.
              </p>
              <p>
                The honest comparison: a broodfonds is an excellent bridge for shorter recoveries — an injury, surgery, a few months out. What it does not cover is permanent disability: after two years the payments stop. Hence the combination many physical professionals use: <strong className="text-foreground">broodfonds for the first two years + an AOV with a two-year waiting period</strong> for everything after. The long wait makes that AOV considerably cheaper, and the broodfonds covers exactly that window.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Just starting out?</h2>
              <p>
                If you are new to freelancing and every euro of premium hurts, three things worth knowing:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Build a buffer of 3-6 months of fixed costs first — that is your own waiting period, and it makes every insurance choice after it cheaper.",
                  "Coming from employment or benefits? Look at the UWV voluntary insurance immediately: you can only join within 13 weeks of starting your business, with no medical screening.",
                  "Arranging nothing is also a choice — but make it a conscious one: calculate what three months of not being able to train clients costs you in revenue, and what happens after.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Further reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Freelance PT in the Netherlands — tax, registration, insurance</p></a>
                  <a href="/en/for-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub freelance-trainer checklist</p></a>
                  <a href="/en/blog/first-10-clients-freelance-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">First 10 clients as a freelance PT</p></a>
                  <a href="/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Cost: studio rental vs opening own gym</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Insurance sorted? Time for a workspace</h3>
                <p className="mb-4">
                  Liability cover live, AOV decision made, ready to train. Check out SculptClub Studio Rental — no fixed costs, no contract, from €12/hour.
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
