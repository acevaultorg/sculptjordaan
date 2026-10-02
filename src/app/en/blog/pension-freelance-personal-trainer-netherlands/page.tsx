import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

// ZZP admin cluster #6 (card mukd9flhzntelj), EN twin of /nl/blog/pensioen-zzp-personal-trainer.
// Figures: Belastingdienst "Overzicht cijfers levensverzekeringen per 1-1-2026"
// (art. 3.127 Wet IB 2001) and "Aftrekken lijfrentepremies" (read 2026-09-28).

export const metadata: Metadata = {
  title: { absolute: "Pension for Freelance Personal Trainers in the Netherlands: Lijfrente and Jaarruimte (2026)" },
  description:
    "How much a freelance personal trainer in the Netherlands can put into a tax-deductible pension in 2026: the jaarruimte (30% of income above €19,172, max €35,589), unused room from past years, and a worked example.",
  keywords: [
    "pension freelance netherlands",
    "jaarruimte 2026",
    "lijfrente freelancer",
    "zzp pension netherlands",
    "freelance personal trainer pension",
  ],
  alternates: {
    canonical: "/en/blog/pension-freelance-personal-trainer-netherlands",
    languages: {
      nl: "/nl/blog/pensioen-zzp-personal-trainer",
      en: "/en/blog/pension-freelance-personal-trainer-netherlands",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/pension-freelance-personal-trainer-netherlands",
    title: "Pension for Freelance Personal Trainers in the Netherlands (2026)",
    description:
      "The 2026 jaarruimte in one sum: 30% of your income above €19,172, capped at €35,589. With unused room and a worked example.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pension for Freelance Personal Trainers in the Netherlands (2026)",
    description:
      "The 2026 jaarruimte in one sum: 30% of your income above €19,172, capped at €35,589.",
  },
};

const FIGURES: [string, string][] = [
  ["Annual room (jaarruimte)", "30% of your premium base, up to €35,589"],
  ["AOW offset (franchise)", "€19,172 (this part of your income does not count)"],
  ["Maximum premium base", "€118,628 (€137,800 minus the offset)"],
  ["Maximum unused room (reserveringsruimte)", "€42,753"],
  ["State pension (AOW) age", "67"],
];

export default function BlogPostPensionFreelancePersonalTrainer() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/en/blog" },
          { name: "Pension for freelance personal trainers", url: "/en/blog/pension-freelance-personal-trainer-netherlands" },
        ]}
      />
      <BlogPostingJsonLd
        title="Pension for Freelance Personal Trainers in the Netherlands: Lijfrente and Jaarruimte (2026)"
        description="How much a freelance personal trainer in the Netherlands can put into a tax-deductible pension in 2026: jaarruimte, AOW offset, unused room and a worked example, using the Belastingdienst figures."
        url="/en/blog/pension-freelance-personal-trainer-netherlands"
        datePublished="2026-09-28"
      />
      <FaqJsonLd faqs={[
        { question: "How much can a freelancer deduct for a pension (lijfrente) in 2026?", answer: "Up to your jaarruimte: 30% of your premium base, capped at €35,589 in 2026. Your premium base is your income from work in the previous year (for a freelancer mostly your profit) minus the AOW offset of €19,172. If you build up no pension anywhere else, nothing more is deducted." },
        { question: "Which year counts for my 2026 jaarruimte?", answer: "2025. The Belastingdienst bases the jaarruimte on your situation in the year before, so the 2026 room is calculated from your 2025 profit and income." },
        { question: "What is reserveringsruimte?", answer: "Annual room you did not use. You can still pay it in and deduct it during the next 10 years, up to €42,753 in 2026. If you have both, use the reserveringsruimte first so older room does not expire." },
        { question: "When do I deduct the payment?", answer: "In the year you pay. A deposit in December 2026 goes on your 2026 tax return." },
        { question: "Does a freelance personal trainer have to build a pension?", answer: "No, it is not mandatory. From 67 you receive the state pension (AOW), but no employer pension. Anything on top you arrange yourself, with a lijfrente (tax-deductible) or free saving and investing (not deductible, but you can withdraw it)." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Pension for freelance personal trainers in the Netherlands (2026)
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />September 28, 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                The short answer: in 2026 you can put <strong>30% of your income above €19,172</strong> into a lijfrente and deduct it, up to <strong>€35,589</strong>. The calculation uses your 2025 income.
              </p>
              <p>
                <em>This article is informational, not financial or tax advice. Figures are from the Belastingdienst (as of 1 January 2026, read 28 September 2026). For your own situation, use the Belastingdienst lijfrente calculator or ask your accountant.</em>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Why you have to arrange it yourself</h2>
              <p>
                Employees build a pension through their employer. Freelancers do not. From 67 you get the state pension (AOW), and that is it. If you want more later, you pay in yourself. The tax rules help: what you put into a lijfrente within your <strong className="text-foreground">jaarruimte</strong> is deductible from your income. You pay tax later, on the payout.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">The 2026 figures</h2>
              <div className="rounded-xl border border-border/50 divide-y divide-border/50">
                {FIGURES.map(([label, value]) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-1 p-4">
                    <span className="font-semibold text-foreground">{label}</span>
                    <span className="sm:text-right">{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm">Source: Belastingdienst, overview of life insurance figures as of 1-1-2026.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">How to calculate your jaarruimte</h2>
              <p>
                Take your income from work in <strong className="text-foreground">2025</strong>. For most independent trainers that is your business profit, plus any salary from a job on the side. Subtract the AOW offset of €19,172: that is your premium base. Your jaarruimte is 30% of it.
              </p>
              <p>
                If you also build up a pension elsewhere, for example through a salaried job, you also subtract the pension accrual on your annual pension statement (UPO) times 6.27. If you only train as a freelancer, that does not apply.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">A worked example</h2>
              <p>
                A trainer made a profit of €40,000 in 2025 and builds no pension anywhere.
              </p>
              <div className="rounded-xl border border-border/50 p-4 font-mono text-sm text-foreground">
                <p>Profit 2025 ... €40,000</p>
                <p>Minus AOW offset ... €19,172</p>
                <p>Premium base ... €20,828</p>
                <p>Jaarruimte 2026 (30%) ... €6,248</p>
              </div>
              <p>
                This trainer can deposit up to about €6,248 into a lijfrente in 2026 and deduct it. How much tax that saves depends on your rate. The Belastingdienst lijfrente calculator works it out exactly.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Didn&apos;t use it all? Reserveringsruimte</h2>
              <p>
                Annual room you do not use carries over. You can still pay it in and deduct it during the <strong className="text-foreground">next 10 years</strong>. This is called reserveringsruimte, capped at €42,753 in 2026. Useful for a trainer with an uneven income: a strong year lets you catch up on missed ones.
              </p>
              <p>
                If you have both annual room and reserveringsruimte, use the reserveringsruimte first. That way the oldest room does not expire.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Where to put the money</h2>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Lijfrente savings account (banksparen)", "Fixed return, no market risk. Deductible within your jaarruimte."],
                  ["Lijfrente investment account (beleggingsrecht)", "You invest, for example in index funds. More room to grow, and more risk. Also deductible."],
                  ["Lijfrente insurance", "With an insurer. Often higher fees than the two options above."],
                  ["Free saving or investing", "Not deductible, but you can always get to it. The assets fall in box 3."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}</strong> — {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Note: money in a lijfrente is locked until retirement. Taking it out early usually costs tax plus an extra charge. Keep a normal buffer too, for months with fewer clients.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">When do you deduct it?</h2>
              <p>
                In the year you pay. Deposit in December 2026 and the deduction goes on your 2026 return. Many freelancers deposit at the end of the year, once they know how the year went.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Further reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Freelance PT in the Netherlands: registration, tax, insurance, pension</p></a>
                  <a href="/en/blog/disability-insurance-freelance-personal-trainer-netherlands" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Disability insurance (AOV) for personal trainers</p></a>
                  <a href="/en/blog/first-year-tax-freelance-personal-trainer-netherlands" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">First-year tax: what do you keep?</p></a>
                  <a href="/en/blog/invoice-freelance-personal-trainer-netherlands" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Invoicing as a freelance personal trainer</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Low fixed costs, more room to save</h3>
                <p className="mb-4">
                  Train your clients in a private studio in the Jordaan. Rent by the hour, no fixed costs, no contract.
                </p>
                <ButtonLink href="/en/studio-rental" size="lg">
                  See Studio Rental
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <p className="mt-3 text-sm text-muted-foreground">First time? <a href="/en/studio-rental/free-trial" className="text-brand underline">Try the studio free for 60 minutes</a> with your own client, no contract.</p>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
