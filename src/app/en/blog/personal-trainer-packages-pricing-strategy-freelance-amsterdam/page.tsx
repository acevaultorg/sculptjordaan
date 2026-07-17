import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Packages — Pricing Strategy for Freelancers in Amsterdam — SculptClub" },
  description:
    "How do you build PT packages as a freelance trainer? What discount works, what pricing psychology in Amsterdam 2026? Concrete pricing strategy with numbers.",
  keywords: ["personal trainer package pricing", "pt session pack", "personal trainer pricing strategy", "freelance trainer pricing", "pt session bundle amsterdam"],
  alternates: {
    canonical: "/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam",
      en: "/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam",
    title: "Personal Trainer Packages — Pricing Strategy for Freelancers in Amsterdam — SculptClub",
    description:
      "How do you build PT packages as a freelance trainer? What discount works, what pricing psychology in Amsterdam 2026? Concrete pricing strategy with numbers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Packages — Pricing Strategy for Freelancers in Amsterdam — SculptClub",
    description:
      "How do you build PT packages as a freelance trainer? What discount works, what pricing psychology in Amsterdam 2026? Concrete pricing strategy with numbers.",
  },
};

export default function BlogPostPackagesPricing() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Personal trainer packages + pricing strategy", url: "/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal trainer packages — pricing strategy for freelance trainers in Amsterdam" description="How do you build PT packages as a freelance trainer? What discount works, what pricing psychology in Amsterdam 2026? Concrete pricing strategy with numbers." url="/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam" datePublished="2026-05-20" />
      <FaqJsonLd faqs={[
        { question: "What discount works on a PT session pack?", answer: "Netherlands standard: 4-pack 5%, 10-pack 10-15%, 20-pack 20-25%. Below that no incentive; above that you lose margin without retention gain." },
        { question: "How long should packs stay valid?", answer: "Three months is the sweet spot. Longer creates scope creep; shorter feels like pressure and hurts retention." },
        { question: "Is a membership model better than session packs?", answer: "Better for cashflow, worse for cancel risk. Membership works from 15+ regular clients with proven retention. Packs work from client 1." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Personal trainer packages — pricing strategy for freelance trainers in Amsterdam</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />20 May 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">Almost every starting PT only sells single sessions at first. Then comes the moment you notice: clients booking every week cost you the same admin as occasional clients. Packs solve that. But which packs, what discounts, how long valid?</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Why packs beat single sessions</h2>
              <p>Three concrete reasons:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Anchor pricing", "A €349 pack looks reasonable next to a €120 single intake. Three pack options help clients decide — not whether to pay, but how much."],
                  ["Predictable revenue", "A sold pack is cash in hand. No per-session admin, no payment-chase conversations."],
                  ["Lower churn", "A client who paid €349 upfront returns faster than one who decides every time."],
                ].map(([type, desc]) => (<li key={type} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{type}:</strong> {desc}</span></li>))}
              </ul>
              <p>Margin per session drops — but margin per client per year rises. That’s the right optimization.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">The three standard packs</h2>
              <p>Simplest pack structure: a 3-option stack. Amsterdam 2026 standard:</p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead><tr className="border-b bg-muted/50"><th className="px-4 py-3 text-left font-semibold text-foreground">Pack</th><th className="px-4 py-3 text-center font-semibold text-foreground">Count</th><th className="px-4 py-3 text-center font-semibold text-foreground">Discount</th><th className="px-4 py-3 text-center font-semibold text-foreground">Valid</th></tr></thead>
                  <tbody>
                    {[["Starter", "4 sessions", "5%", "2 months"], ["Routine", "10 sessions", "12-15%", "3 months"], ["Pro / Volume", "20 sessions", "20-23%", "6 months"]].map(([p, c, d, v]) => (<tr key={p} className="border-b last:border-0"><td className="px-4 py-3 font-medium">{p}</td><td className="px-4 py-3 text-center">{c}</td><td className="px-4 py-3 text-center">{d}</td><td className="px-4 py-3 text-center">{v}</td></tr>))}
                  </tbody>
                </table>
              </div>
              <p><strong className="text-foreground">Pro-tip:</strong> make the Routine pack visually slightly prominent (badge: “popular”). Clients pick the middle option in 50-60% of cases — this is the decoy effect.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">What discount works — and why not higher</h2>
              <p>Many starting PTs think: the higher the discount, the faster the sale. Nonsense. Too-high discounts devalue your service.</p>
              <p>The incentive curve in Amsterdam:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["0-5% discount", "No incentive. Client just buys single sessions."],
                  ["10-15% (sweet spot)", "Feels like a “deal” without seeming cheap."],
                  ["20-25% (large packs only)", "Works for 20+ sessions. On smaller packs it signals cheap."],
                  ["30%+ discount", "Feels desperate. Premium clients walk away."],
                ].map(([r, d]) => (<li key={r} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{r}:</strong> {d}</span></li>))}
              </ul>
              <p>Amsterdam PT market rates 2026 sit between €45 and €90 per session. Premium clients expect to pay — they’re not hunting jackpot deals.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Validity period — 3 months is the sweet spot</h2>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["1 month", "Too short. Clients feel pressured, plan poorly, book multiple sessions in 1 week to avoid losing anything — bad for recovery."],
                  ["3 months (recommended)", "10 sessions in 3 months = ~1 session per 9 days. Fits realistic training frequency. Long enough to feel pressure-free."],
                  ["6 months", "Fits 20-session packs (~1 session per 9 days too). Longer becomes scope creep."],
                  ["12 months", "Too long. Client pays upfront but uses 60% — eventually asks for refund. Better: monthly refresh."],
                ].map(([d, desc]) => (<li key={d} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{d}:</strong> {desc}</span></li>))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Membership model — when yes, when no</h2>
              <p>Monthly subscription (€X/month for unlimited or fixed sessions) is a different structure from session packs. Pros and cons:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["For you (PT)", "Predictable monthly revenue. Easier planning. Lower admin pressure."],
                  ["For the client", "No more single decisions. But: lock-in feeling can demotivate."],
                  ["Your downside", "Monthly cancel risk. Vacation periods (summer, Christmas) trigger cancellation waves."],
                  ["Client downside", "Pays for sessions they forget to book. Can feel like waste."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Membership works from 15+ regular clients with proven retention. Until then: stick with session packs — more flexible for both sides.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Pricing psychology — what numbers work</h2>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Threshold prices", "€45 or €49 not €50. €99 not €100. Saves 1 euro but feels 5-10% cheaper."],
                  ["Show bundle economics", "Always show per-session price within the pack: “€199 / 10 sessions = €19.90 per session”. Client sees the savings."],
                  ["Decoy pricing", "Three options with middle-as-best-deal position. Starter (low) · Routine (best value) · Pro (premium). 50-60% pick middle."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">The anchor effect — don’t skip the €120 session</h2>
              <p>Common mistake: a PT with a €45 single-session rate compares only with other €45 trainers. But clients compare you with luxury brands (Equinox €150/session, hotel-spa PT €120). By NOT showing a premium anchor in your menu, you position yourself low.</p>
              <p>Concrete fix: add a “Premium 1-on-1 intensive” option to your menu (~€95-120/session). Not many clients pick this — but your middle pack now feels like a “deal” by comparison. Anchor effect = +15-25% conversion on your middle pack.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">SculptClub as a case study</h2>
              <p>Our own studio rental packs follow this exact logic:</p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead><tr className="border-b bg-muted/50"><th className="px-4 py-3 text-left font-semibold text-foreground">Pack</th><th className="px-4 py-3 text-center font-semibold text-foreground">Price</th><th className="px-4 py-3 text-center font-semibold text-foreground">Discount</th><th className="px-4 py-3 text-center font-semibold text-foreground">Per hour</th></tr></thead>
                  <tbody>{[["Starter", "€89", "~10%", "€10.80"], ["Routine (popular)", "€179", "~15%", "€10.20"], ["Pro", "€299", "~20%", "€9.60"], ["Volume", "€499", "~23%", "€9.24"]].map(([p, pr, d, h]) => (<tr key={p} className="border-b last:border-0"><td className="px-4 py-3 font-medium">{p}</td><td className="px-4 py-3 text-center">{pr}</td><td className="px-4 py-3 text-center">{d}</td><td className="px-4 py-3 text-center">{h}</td></tr>))}</tbody>
                </table>
              </div>
              <p>The Per-hour column steps down deliberately: €12 single → €10.80 → €10.18 → €9.60 → €9.24. Each step feels like a better deal. The Routine sits visually slightly more prominent — not accidental.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">How to communicate a price increase</h2>
              <p>Every 12-18 months you should raise prices. Clients expect it. Trainers who never adjust feel untrustworthy (“what is he doing for himself then?”).</p>
              <ol className="space-y-2 list-decimal pl-6">
                {["Give existing clients minimum 30 days notice. Personal, not bulk-mail.", "Offer existing clients a chance to buy one more pack at the old rate before the increase. “If you book a Pro before June 1, old rate applies.”", "New clients pay the new rate immediately. No exceptions — otherwise your new price devalues from day 1."].map((line) => (<li key={line} className="leading-relaxed">{line}</li>))}
              </ol>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Further reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/en/blog/first-10-clients-freelance-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">First 10 clients as a freelance PT</p></a>
                  <a href="/en/blog/how-many-clients-personal-trainer-amsterdam-living-wage" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">How many clients to make a living</p></a>
                  <a href="/en/studio-rental" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub Studio Rental rates</p></a>
                  <a href="/en/for-trainers" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">For trainers — overview</p></a>
                </div>
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">100% of your rate</h3>
                <p className="mb-4">At SculptClub we charge 0% commission. Whatever packs and prices you build — everything you charge, you keep. Schedule a free tour at our studio.</p>
                <ButtonLink href="/en/studio-rental" size="lg">See Studio Rental<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
