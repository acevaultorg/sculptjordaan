import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Private Studio Rental vs Your Own Gym: Costs Amsterdam" },
  description:
    "Freelance personal trainer in Amsterdam? The full cost comparison between renting a private studio per hour, leasing space, or opening your own gym.",
  keywords: [
    "cost open own gym amsterdam",
    "private studio rental cost amsterdam",
    "personal trainer own space amsterdam",
    "freelance trainer studio investment",
    "personal training studio amsterdam rental",
  ],
  alternates: {
    canonical: "/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam",
    languages: {
      nl: "/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam",
      en: "/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam",
    title: "Private Studio Rental vs Your Own Gym: Costs Amsterdam",
    description:
      "Freelance personal trainer in Amsterdam? The full cost comparison between renting a private studio per hour, leasing space, or opening your own gym.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Studio Rental vs Your Own Gym: Costs Amsterdam",
    description:
      "Freelance personal trainer in Amsterdam? The full cost comparison between renting a private studio per hour, leasing space, or opening your own gym.",
  },
};

export default function BlogPostCostStudioVsOwnGym() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Cost: private studio rental vs opening own gym", url: "/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Cost of private studio rental vs opening your own gym in Amsterdam"
        description="Freelance personal trainer in Amsterdam? The full cost comparison between renting a private studio per hour, leasing space, or opening your own gym."
        url="/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam"
        datePublished="2026-05-20"
      />
      <FaqJsonLd faqs={[
        { question: "What does it cost to open your own gym in Amsterdam?", answer: "An 80 m² gym in Amsterdam runs at minimum €40,000 to €60,000 per year in fixed costs (rent, utilities, insurance), plus a startup investment of €15,000 to €40,000 for equipment." },
        { question: "What is the difference with renting a studio per hour?", answer: "When you rent per hour you only pay for time actually used. At SculptClub that's from €12 per 60 minutes, with no fixed costs and zero commission on your rate." },
        { question: "When does opening your own gym make financial sense?", answer: "Roughly from 25 to 35 PT sessions per week — below that, per-hour studio rental stays cheaper and more flexible." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Cost of private studio rental vs opening your own gym in Amsterdam
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" />20 May 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />SculptClub
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                You have three choices as a personal trainer in Amsterdam: rent a studio by the hour, lease a space, or open your own gym. Each path has completely different costs, different risks and a different break-even point. No sales pitch — pure math with real 2026 Amsterdam numbers.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">The three options at a glance</h2>
              <p>
                Before we look at the numbers, the definitions. These are the three models most freelance trainers in Amsterdam consider:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Rent per hour", "You book a private studio per session (like SculptClub). No fixed costs."],
                  ["Lease space", "You rent your own space for a year or longer. Fixed monthly costs, your fit-out."],
                  ["Open your own gym", "You buy or commercially lease, do your own fit-out and investment. Full control."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                In practice 95% of Amsterdam freelance trainers weigh the choice between <strong className="text-foreground">renting per hour</strong> and <strong className="text-foreground">opening their own gym</strong>. Leasing commercial space just for your own clients tends to be too expensive as a middle option. So we focus on those two extremes.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Renting a private studio at SculptClub — what €12/hour gets you</h2>
              <p>
                At SculptClub on Egelantiersgracht in the Jordaan you rent a private studio per session. You only pay for the time you actually use. No membership, no contract, free cancellation anytime.
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">What you rent</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Price (60 min)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Half studio (1-on-1)", "€12"],
                      ["Full studio (small group)", "€17"],
                    ].map(([type, p60]) => (
                      <tr key={type} className="border-b last:border-0">
                        <td className="px-4 py-3">{type}</td>
                        <td className="px-4 py-3 text-center font-medium">{p60}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                With a session pack you save up to 23%:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Starter — €89", "10 sessions, ~10% off"],
                  ["Routine — €179", "~15% off, most popular pack"],
                  ["Pro — €299", "~20% off"],
                  ["Volume — €499", "~23% off for trainers running 3+ sessions/week"],
                ].map(([pkg, desc]) => (
                  <li key={pkg} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{pkg}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                Included: all equipment (Rogue power rack, cable machine, dumbbells, sled, Echo Bike, kettlebells), wifi, music, cleaning and door code via WhatsApp. No add-ons.
              </p>
              <p>
                <strong className="text-foreground">Monthly cost at 8 sessions/week:</strong> 8 × 4 weeks × €12 = €384/month. With Routine pack: ~€326/month.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Leasing space in Amsterdam — what it really costs</h2>
              <p>
                Opening your own gym starts with a commercial ground-floor unit. In Amsterdam Jordaan and centre you pay around <strong className="text-foreground">€500 to €700 per square metre per year</strong> in 2026. A workable PT studio is at least 60 to 80 m².
              </p>
              <p>
                Rough cost calculation for a 70 m² gym in central Amsterdam:
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Cost line</th>
                      <th className="px-4 py-3 text-right font-semibold text-foreground">Per year</th>
                      <th className="px-4 py-3 text-right font-semibold text-foreground">Per month</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Rent (70 m² × €600/m²)", "€42,000", "€3,500"],
                      ["Service charges (~10% of rent)", "€4,200", "€350"],
                      ["Utilities + internet", "€4,800", "€400"],
                      ["Liability + property + contents insurance", "€2,400", "€200"],
                      ["KvK + accounting (MoneyMonk + accountant)", "€1,200", "€100"],
                      ["Maintenance + cleaning", "€2,400", "€200"],
                      ["Marketing + website + IG content", "€3,600", "€300"],
                      ["Total fixed costs", "€60,600", "€5,050"],
                    ].map(([type, year, month], idx, arr) => (
                      <tr key={type} className={`border-b last:border-0 ${idx === arr.length - 1 ? "bg-brand/5 font-semibold text-foreground" : ""}`}>
                        <td className="px-4 py-3">{type}</td>
                        <td className="px-4 py-3 text-right">{year}</td>
                        <td className="px-4 py-3 text-right">{month}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Plus the startup investment: equipment (power rack, benches, dumbbells, cable machine, flooring) runs €15,000 to €40,000 depending on how serious you go. Build-out and acoustics another €5,000 to €25,000. Realistically you’re <strong className="text-foreground">€30,000 to €60,000 in before you take your first client</strong>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Opening your own gym — investment math + payback time</h2>
              <p>
                Say you open a gym with €5,050 in monthly fixed costs and a €45,000 startup investment. What do you need to break even?
              </p>
              <p>
                Break-even on fixed costs first: at €65 per session you need <strong className="text-foreground">78 sessions per month</strong> just to cover fixed costs. That’s ~18 sessions per week — five workdays, three-plus sessions per day. Zero room for your own income.
              </p>
              <p>
                To also pay yourself a Dutch median income (≈€3,000 net/month, so ≈€4,500 gross profit/month), add ~70 sessions per month on top. Total: <strong className="text-foreground">~148 sessions/month, ~34 sessions/week</strong>.
              </p>
              <p>
                Add depreciation on your investment (€45,000 over 5 years = €750/month) and that’s another ~12 sessions per month. <strong className="text-foreground">Realistic break-even for a healthy own gym: 38-40 sessions per week.</strong>
              </p>
              <p>
                That’s achievable for established trainers with a full client book and a waitlist. For starters or mid-career trainers it’s an aggressive target with serious risk.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Which option fits which trainer</h2>
              <p>
                The choice isn’t really about what you want — it’s about where you currently are. An honest matrix:
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Sessions/week</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">What fits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1-5 sessions", "Studio per hour (SculptClub). Fixed costs are dead weight here."],
                      ["6-15 sessions", "Studio per hour with a session pack. Pro/Volume packs give 20-23% off."],
                      ["16-25 sessions", "Sweet spot for per-hour rental. Own space doesn’t pencil yet."],
                      ["26-35 sessions", "Grey zone. Run the math yourself — sometimes leasing works, often not."],
                      ["36+ sessions", "Own gym becomes attractive, assuming your client book is stable."],
                    ].map(([range, advice]) => (
                      <tr key={range} className="border-b last:border-0">
                        <td className="px-4 py-3 font-medium">{range}</td>
                        <td className="px-4 py-3">{advice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                The mistake a lot of starting trainers make: they want their own gym before they have 20 paying clients. The result is fixed costs eating your net, stress about utilization, and burnout within 18 months.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Tax breaks + deductions per option</h2>
              <p>
                <em>This is not tax advice — for your situation go to a tax advisor or the Belastingdienst. The below is informational.</em>
              </p>
              <p>
                Both models share that costs are deductible from your profit. But the structure differs:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Per-hour studio rental", "Direct expenses, no inventory or depreciation. Simple: invoice in, expense out."],
                  ["Own gym", "Equipment depreciates (3-5 years), rent is directly deductible. KIA (small-scale investment deduction) kicks in above €2,601 in qualifying investments."],
                  ["Both", "Zelfstandigenaftrek (€2,123 in 2026) and MKB-winstvrijstelling 14% — identical in both models."],
                ].map(([type, desc]) => (
                  <li key={type} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span><strong className="text-foreground">{type}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
              <p>
                The full breakdown of KvK, VAT, insurance and pension is in our <a href="/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension" className="text-brand hover:underline">freelance PT registration and tax guide</a>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">What Jordaan trainers actually do in 2026</h2>
              <p>
                A short round-up of trainers we know — anonymous:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Trainer A (3 years in, ~12 sessions/week): rents at SculptClub per hour. Took the Pro pack. Saves ~€200/month vs renting their own space.",
                  "Trainer B (8 years in, ~30 sessions/week): opened their own 60 m² studio in West last year. Fixed costs €4,200/month. It works — but it’s hard.",
                  "Trainer C (5 years in, ~22 sessions/week): keeps renting per hour, even though they could afford their own space. Reason: \"With no fixed costs I sleep better. No client = no expense.\"",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                The thread: an own gym is not a status symbol — it’s an operational decision with immediate cashflow consequences. Those who can carry it, do. Those who hesitate rent per hour and build their book first.
              </p>
              <p>
                Curious what renting at SculptClub looks like in practice? Rates, equipment and how per-hour booking works are on our <a href="/en/for-trainers" className="text-brand hover:underline">for-trainers page</a>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Three concrete scenarios</h2>
              <p>
                Three concrete situations:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "You have 4 regular clients and run 8 sessions/week. → Studio per hour with Starter pack (€89 for 10 sessions). Your fixed costs stay at zero.",
                  "You have 12 regular clients and run 22 sessions/week. → Studio per hour with Pro or Volume pack (~€10/hour). Own space doesn’t pencil yet.",
                  "You have 25 regular clients + waitlist and run 38 sessions/week. → Own gym is mathematically interesting. Investment pays back within 2-3 years with stable utilization.",
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
                  <a href="/en/studio-rental" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub Studio Rental — rates + packs</p></a>
                  <a href="/en/for-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Freelance trainer checklist — KvK to first client</p></a>
                  <a href="/en/blog/first-10-clients-freelance-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">First 10 clients as a freelance PT</p></a>
                  <a href="/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Own studio vs at-home vs outdoor</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Run the numbers yourself</h3>
                <p className="mb-4">
                  Schedule a free tour at our studio on Egelantiersgracht. Check the space, ask anything, no obligations.
                </p>
                <ButtonLink href="/en/studio-rental" size="lg">
                  See rates + schedule tour
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
