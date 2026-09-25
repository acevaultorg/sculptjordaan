import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "How Many Clients Does a Personal Trainer in Amsterdam Need?" },
  description:
    "Honest math: how many paying clients does a freelance personal trainer in Amsterdam need to live, earn a median income, or support a family?",
  keywords: ["how much does a personal trainer earn", "minimum clients personal trainer", "personal trainer income amsterdam", "freelance trainer salary", "living wage personal trainer"],
  alternates: {
    canonical: "/en/blog/how-many-clients-personal-trainer-amsterdam-living-wage",
    languages: { nl: "/nl/blog/hoeveel-klanten-personal-trainer-amsterdam-rondkomen", en: "/en/blog/how-many-clients-personal-trainer-amsterdam-living-wage" },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/how-many-clients-personal-trainer-amsterdam-living-wage",
    title: "How Many Clients Does a Personal Trainer in Amsterdam Need?",
    description:
      "Honest math: how many paying clients does a freelance personal trainer in Amsterdam need to live, earn a median income, or support a family?",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Clients Does a Personal Trainer in Amsterdam Need?",
    description:
      "Honest math: how many paying clients does a freelance personal trainer in Amsterdam need to live, earn a median income, or support a family?",
  },
};

export default function BlogPostHowManyClients() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "How many clients does a PT need", url: "/en/blog/how-many-clients-personal-trainer-amsterdam-living-wage" }]} />
      <BlogPostingJsonLd title="How many clients does a personal trainer in Amsterdam need?" description="Honest math: how many paying clients does a freelance personal trainer in Amsterdam need to live, earn a median income, or support a family?" url="/en/blog/how-many-clients-personal-trainer-amsterdam-living-wage" datePublished="2026-05-20" />
      <FaqJsonLd faqs={[
        { question: "How many sessions per week to earn a median income?", answer: "At a €60 average session rate, you need ~18-22 sessions/week to reach a Dutch median net income (€3,000). At €45/session: ~25 sessions/week. At €80/session: ~14 sessions/week." },
        { question: "What are the fixed monthly costs of a freelance PT in Amsterdam?", answer: "Realistically €200-€600/month: studio rental (€100-400), insurance (€50-100), KvK + bookkeeping (~€20), phone/website (~€30-50)." },
        { question: "How long until a freelance trainer is financially stable?", answer: "12 to 24 months at average growth. Faster with a strong network or existing audience. Slower in saturated neighborhoods or without a differentiated profile." },
      ]} />
      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">How many clients does a personal trainer in Amsterdam need?</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />20 May 2026</span><span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span></div>
            </div>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">Every starting freelance PT asks themselves: how many clients do I need to be financially independent? No abstract percentages — concrete math with Amsterdam 2026 numbers. Three scenarios: median income, supporting a family, or deliberately choosing part-time.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">The math — gross vs net vs household budget</h2>
              <p>Before you can calculate what you need, understand what “median” means in 2026:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Median gross income NL", "~€44,000/year (CBS 2026 estimate)"],
                  ["Median net per month (employee)", "~€3,000 after taxes"],
                  ["Median net freelancer (ZZP)", "~€3,100-3,300 thanks to zelfstandigenaftrek + MKB exemption"],
                  ["Amsterdam household budget", "Median alone is tight; with kids = even tighter"],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Below median Amsterdam in 2026 means: tight. A 1-bed apartment on Egelantiersgracht or De Pijp rents from €1,400/month. Groceries, transport and social life on top. €3,000 net/month is a realistic minimum for an unattached lifestyle.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Scenario A — making median (~€3,000 net/month)</h2>
              <p>Imagine these monthly costs as a freelance PT:</p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead><tr className="border-b bg-muted/50"><th className="px-4 py-3 text-left font-semibold text-foreground">Cost line</th><th className="px-4 py-3 text-right font-semibold text-foreground">Per month</th></tr></thead>
                  <tbody>{[["Apartment rent Amsterdam", "€1,400"], ["Groceries", "€400"], ["Transport (OV + bike)", "€80"], ["Phone + internet + Netflix", "€90"], ["Health insurance", "€140"], ["Professional liability", "€40"], ["MoneyMonk bookkeeping", "€15"], ["Social life + clothing", "€350"], ["Savings (10% of net)", "€300"], ["TOTAL net needed", "€2,815"]].map(([k, v], idx, arr) => (<tr key={k} className={`border-b last:border-0 ${idx === arr.length - 1 ? "bg-brand/5 font-semibold text-foreground" : ""}`}><td className="px-4 py-3">{k}</td><td className="px-4 py-3 text-right">{v}</td></tr>))}</tbody>
                </table>
              </div>
              <p>For €2,815 net you need gross profit of ~€4,200/month (after zelfstandigenaftrek + MKB-vrijstelling). Add SculptClub studio rental (~€200/month at 8 sessions/week with Routine pack) and you’re at €4,400 gross revenue/month.</p>
              <p>At €60/session: <strong className="text-foreground">~73 sessions/month = ~18 sessions/week</strong>.</p>
              <p>At €45/session (starter rate): <strong className="text-foreground">~98 sessions/month = ~24 sessions/week</strong>.</p>
              <p>At €80/session (premium): <strong className="text-foreground">~55 sessions/month = ~14 sessions/week</strong>.</p>
              <p>Conclusion: <strong className="text-foreground">your rate matters almost more than your session count</strong>. A trainer at €80 with 12 clients earns as much as a trainer at €45 with 22 clients — but works 40% fewer hours.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Scenario B — supporting a family (~€4,500 net/month)</h2>
              <p>Two kids, owned home with mortgage (~€1,800/month), pension contributions, AOV, higher medical costs. Realistic need:</p>
              <p>Net: €4,500/month. Gross profit: ~€6,300/month. With €200 studio rental on top: <strong className="text-foreground">€6,500 revenue/month</strong>.</p>
              <ul className="space-y-2 list-none pl-0">
                {[["€60/session", "~108 sessions/month = 27 sessions/week"], ["€75/session", "~87 sessions/month = 22 sessions/week"], ["€90/session", "~72 sessions/month = 18 sessions/week"]].map(([r, n]) => (<li key={r} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{r}:</strong> {n}</span></li>))}
              </ul>
              <p>27 sessions/week is hard work. 5 workdays × 5-6 sessions/day means early morning (06:00) until late evening (21:00). Not impossible but intense — and eats 3-5 sessions/week for yourself and your family.</p>
              <p>Smarter route: grow your rate instead of your hours. €60 → €75 in year 2 → €90 in year 4. Then a family can run on 18-22 sessions/week.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Scenario C — deliberately choosing part-time</h2>
              <p>Not everyone needs 25 sessions/week. Hybrid paths are often smarter:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["PT + part-time employment", "10-12 sessions/week + 24h employment = stable income + growing client book. Low-risk for year 1."],
                  ["PT + online coaching", "8 sessions/week 1-on-1 + 15 online clients at €99/month = comparable monthly income without trading every euro for time."],
                  ["PT + nutrition plans or group classes", "Diversify revenue per hour. A group class of 6 at €15 each = €90/hour — same as a premium 1-on-1."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Part-time is not failure. For people with other priorities (family, other passion, health) a 12-15 sessions/week practice + side income streams is often more sustainable than 25+ sessions all-in.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Fixed costs of a freelance PT in Amsterdam</h2>
              <p>Realistic monthly overview:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Per-hour studio (SculptClub, 8 sessions/week Routine pack)", "~€200"],
                  ["Per-hour studio (SculptClub, 12 sessions/week Pro pack)", "~€280"],
                  ["Own space rental (see cost-of-own-gym blog)", "€3,500-5,000"],
                  ["Professional liability insurance", "€40-50"],
                  ["AOV (Broodfonds)", "€60-90"],
                  ["AOV (commercial)", "€200-300"],
                  ["KvK + bookkeeping", "€15-25"],
                  ["Pension contributions (from year 2)", "€200-500"],
                  ["Phone + website + marketing", "€50-100"],
                ].map(([k, v]) => (<li key={k} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{k}:</strong> {v}</span></li>))}
              </ul>
              <p>With SculptClub as your studio: ~€350-500/month total fixed costs. With own space: €4,200-5,500. That difference is why 95% of Amsterdam freelance trainers rent per-hour until they have 25+ stable sessions/week. Rates, packs and how per-hour rental works are on our <a href="/en/for-trainers" className="text-brand hover:underline">for-trainers page</a>.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">What if you can’t hit your session target?</h2>
              <p>Reality: not every PT hits 18-22 sessions/week. Average Amsterdam freelance PT sits at 10-15/week. Four solutions:</p>
              <ol className="space-y-2 list-decimal pl-6">
                {["Raise your rate — €60 → €75 = 25% more income at same session count", "Add online coaching — nutrition plans or video feedback for €49-99/month", "Specialize — niche expertise (back pain, prenatal, calisthenics) attracts paying premium clients", "Group classes — 4-6 people at €15-20 each = €60-120/hour, same margin as a premium 1-on-1"].map((line) => (<li key={line} className="leading-relaxed">{line}</li>))}
              </ol>
              <p>And for the acquisition side, read our <a href="/en/blog/personal-trainer-marketing-instagram-amsterdam-jordaan" className="text-brand hover:underline">Instagram marketing guide for Amsterdam PTs</a> — it covers the channel most Amsterdam trainers actually get clients from.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">The honest timeline to stability</h2>
              <p>Nobody hits 20 sessions/week in month 3. Honest expectations:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Month 1-6", "0-5 sessions/week. Need a buffer or part-time employment to top up."],
                  ["Month 7-12", "5-12 sessions/week. Beginning of financial independence if fixed costs are low."],
                  ["Month 13-18", "12-18 sessions/week. Median income reachable."],
                  ["Month 19-24", "18-25 sessions/week. Supporting a family possible."],
                  ["Year 3+", "Stable 20-30 sessions/week + scale paths active."],
                ].map(([p, d]) => (<li key={p} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{p}:</strong> {d}</span></li>))}
              </ul>
              <p>Some PTs hit this faster (strong existing network, sport celebrity). Some slower (oversaturated neighborhood, no differentiation). 12-24 months to stability is the median.</p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Further reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/en/blog/first-10-clients-freelance-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">First 10 clients as a freelance PT</p></a>
                  <a href="/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Packages + pricing strategy</p></a>
                  <a href="/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Cost of studio rental vs own gym</p></a>
                  <a href="/en/studio-rental" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub Studio Rental</p></a>
                </div>
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Lower fixed costs = lower break-even</h3>
                <p className="mb-4">At SculptClub you only pay for hours you use — no membership, no contract. From €12/hour. See rates and schedule a free tour.</p>
                <ButtonLink href="/en/studio-rental" size="lg">See Studio Rental<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
