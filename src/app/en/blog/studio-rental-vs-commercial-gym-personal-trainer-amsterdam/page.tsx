import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Studio Rental vs Commercial Gym for Trainers, Amsterdam" },
  description:
    "Choosing between working in a commercial gym (Optimum, Sportcity, David Lloyd) or renting a private studio?",
  keywords: ["personal trainer commercial gym vs rental", "fitness center trainer", "personal trainer studio rental amsterdam", "freelance pt commercial gym", "trainer commission commercial gym"],
  alternates: {
    canonical: "/en/blog/studio-rental-vs-commercial-gym-personal-trainer-amsterdam",
    languages: { nl: "/nl/blog/studio-huren-vs-commerciele-gym-personal-trainer-amsterdam", en: "/en/blog/studio-rental-vs-commercial-gym-personal-trainer-amsterdam" },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/studio-rental-vs-commercial-gym-personal-trainer-amsterdam",
    title: "Studio Rental vs Commercial Gym for Trainers, Amsterdam",
    description:
      "Choosing between working in a commercial gym (Optimum, Sportcity, David Lloyd) or renting a private studio?",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Rental vs Commercial Gym for Trainers, Amsterdam",
    description:
      "Choosing between working in a commercial gym (Optimum, Sportcity, David Lloyd) or renting a private studio?",
  },
};

export default function BlogPostStudioVsCommercialGym() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Studio rental vs commercial gym", url: "/en/blog/studio-rental-vs-commercial-gym-personal-trainer-amsterdam" }]} />
      <BlogPostingJsonLd title="Studio rental vs commercial gym as a personal trainer in Amsterdam" description="Choosing between working in a commercial gym (Optimum, Sportcity, David Lloyd) or renting a private studio?" url="/en/blog/studio-rental-vs-commercial-gym-personal-trainer-amsterdam" datePublished="2026-05-20" />
      <FaqJsonLd faqs={[
        { question: "What commission do commercial gyms take from personal trainers?", answer: "30 to 50% in Amsterdam — depending on the chain. Sportcity and David Lloyd typically around 40%, Optimum towards 30-35%. Below 30% you basically never get." },
        { question: "Whose client is it — the PT's or the gym's?", answer: "At commercial gyms the client belongs to the gym, not you. If you leave, they stay. At studio rental (like SculptClub) the client is yours — you move together." },
        { question: "When is a commercial gym better?", answer: "Beginners without a network who need volume fast, or trainers who don't want to handle anything (admin, marketing, intake flow). The gym does that, in exchange for commission." },
      ]} />
      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Studio rental vs commercial gym as a personal trainer in Amsterdam</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />20 May 2026</span><span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span></div>
            </div>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">As a freelance PT in Amsterdam you have two main paths: work in a commercial gym (Optimum, Sportcity, David Lloyd) or rent a private studio (SculptClub model). Both bring clients — but structural differences determine whether in 5 years you still keep 100% of what you charge, or half goes to someone else.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">The two models</h2>
              <p>Commercial gym = you work under their roof, with their members, in their system. Studio rental = you rent space per hour, with your clients, in your system.</p>
              <ul className="space-y-2 list-none pl-0">
                {[["Commercial gym", "Examples: Optimum, Sportcity, David Lloyd, SportCity Plus, USC. Usually a fixed monthly fee or per-session commission."], ["Private studio rental", "Example: SculptClub. You rent per hour, with all your own clients. No membership, no commission."]].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Commercial gym — what you get, what you give up</h2>
              <p>Working at a commercial gym in Amsterdam typically means:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Access to member base", "Direct potential clients on the floor. You don't have to do all acquisition yourself."],
                  ["Gym uniform / branding", "You often wear a gym shirt; you communicate on behalf of the gym, not yourself."],
                  ["Mandatory hours", "A number of “floor hours” per week you're available for members (often unpaid or low-paid)."],
                  ["30-50% commission", "The gym takes 30-50% of your session rate. €60 session → €30-42 for you."],
                  ["No client contact outside session", "Communication outside the gym (DMs, planning) often runs via the gym system."],
                  ["Lock-in via client base", "Clients belong to the gym. When you leave, you can't take them (contractually)."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Net effective: €30-42 per session instead of your full €60. At 20 sessions/week = €600-840/week vs €1,200 on own rental. Difference: €360-600/week = €1,500-2,500/month.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Private studio rental — what you get, what you do yourself</h2>
              <p>At SculptClub:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Rent per hour from €12", "No membership. No contract. Fixed costs = zero."],
                  ["Rent only", "What you charge, you keep. No cut, no percentage."],
                  ["Own profile on the website", "Since 2026: trainers get a profile page on sculptclub.nl with photo, bio, specializations + WhatsApp CTA. We're your distribution partner."],
                  ["Own client contact", "DMs, planning, WhatsApp — all via you. The client is yours."],
                  ["Own branding", "No mandatory uniform. You present yourself under your own name + brand."],
                  ["You handle your own acquisition", "We do bring inbound (free intro requests via the site), but most clients you bring yourself."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Net effective: €60 (your rate) − €12 rental = €48 per session. At 20 sessions/week = €960/week vs €600-840 at a commercial gym.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Commissions compared in numbers</h2>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead><tr className="border-b bg-muted/50"><th className="px-4 py-3 text-left font-semibold text-foreground">Model</th><th className="px-4 py-3 text-center font-semibold text-foreground">Trainer rate</th><th className="px-4 py-3 text-center font-semibold text-foreground">Commission/rent</th><th className="px-4 py-3 text-center font-semibold text-foreground">Net per session</th></tr></thead>
                  <tbody>{[
                    ["Commercial gym (30% commission)", "€60", "−€18", "€42"],
                    ["Commercial gym (40% commission)", "€60", "−€24", "€36"],
                    ["Commercial gym (50% commission)", "€60", "−€30", "€30"],
                    ["SculptClub per hour", "€60", "−€12 rent", "€48"],
                    ["SculptClub with Routine pack", "€60", "−€10 rent", "€50"],
                  ].map(([m, r, c, n]) => (<tr key={m} className="border-b last:border-0"><td className="px-4 py-3">{m}</td><td className="px-4 py-3 text-center">{r}</td><td className="px-4 py-3 text-center">{c}</td><td className="px-4 py-3 text-center font-medium">{n}</td></tr>))}</tbody>
                </table>
              </div>
              <p>Over a year of 20 sessions/week (~864 sessions): the difference between SculptClub (€48 net) and commercial gym at 40% (€36 net) = €12 × 864 = <strong className="text-foreground">€10,368 per year in your pocket</strong>.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Client ownership — who does the client belong to?</h2>
              <p>The real legal + emotional split:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Commercial gym", "Clients are members of the gym. Their contract is with the gym, not you. Legally + contractually you cannot take them when you leave. Some gyms even include non-compete clauses (~3-12 months) where you cannot approach their clients within X km."],
                  ["Private studio rental", "Clients are your clients. You have the relationship. If you leave SculptClub for somewhere else — your clients come along. We have no contract with them, only with you (and that's per hour, no lock-in)."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>This is the most underestimated structural difference. Build 5 years of client book at a commercial gym, and everything you built stays there when you leave.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Brand positioning</h2>
              <p>Commercial gym branding often hurts your brand more than helps:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["In commercial gym", "“Trainer at Optimum Vondelpark” — you're part of a brand where people also take €5/month memberships. Your premium status dilutes automatically."],
                  ["At private studio", "“Trainer at SculptClub Jordaan” OR simply “Personal Trainer in Jordaan” — you're an independent professional, not a gym employee."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>For trainers who want to charge premium rates (€75+/session), brand positioning is critical. Premium clients pay for an independent expert, not for “the PT at the gym where I work out”.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">When commercial gym IS still better</h2>
              <p>This blog doesn't pretend there's zero rationale for commercial gym. For some profiles it works:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Beginners without a network", "You have zero existing clients and want volume fast. The gym gives you access to their member base. First 6 months of experience can be valuable."],
                  ["Trainers who don't want to handle anything", "No admin, no marketing, no intake flow. The gym handles it in exchange for commission. Fits people who just want to train."],
                  ["Niche trainers with specific equipment", "A gym with cryotherapy, EMS, or a hyperbaric chamber offers equipment you'd never buy yourself. Specific niche can be worth it."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>For most mid-career trainers (12+ clients, €55+ rate, want autonomy), studio rental is financially AND strategically the better choice.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Hybrid: best of both worlds</h2>
              <p>Some trainers do both at once:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["50/50 split", "12 sessions/week own clients at SculptClub + 12 sessions/week gym members at commercial gym."],
                  ["Build a brand", "Start in commercial gym for client acquisition. After 12 months migrate your best clients to studio rental — take back your margin."],
                  ["Specific niches", "General PT in commercial gym, premium 1-on-1 in private studio. Two rate tiers, two client types."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>The hybrid model works — just watch out for contractual non-compete clauses and consistent client relations. Don't mix your SculptClub clients with gym clients.</p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Further reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Cost: studio rental vs own gym</p></a>
                  <a href="/en/blog/personal-trainer-packages-pricing-strategy-freelance-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Packages + pricing strategy</p></a>
                  <a href="/en/for-trainers/personal-trainer-own-studio-vs-home-vs-outdoor" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Own studio vs at-home vs outdoor</p></a>
                  <a href="/en/studio-rental" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub Studio Rental</p></a>
                </div>
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Want 100% of your rate?</h3>
                <p className="mb-4">At SculptClub rent only — no membership, no shared client ownership. From €12/hour. Schedule a free tour.</p>
                <ButtonLink href="/en/studio-rental" size="lg">See Studio Rental<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <p className="mt-3 text-sm text-muted-foreground">First time? <a href="/en/studio-rental/free-trial" className="text-brand underline">Try the studio free for 60 minutes</a> with your own client, no contract.</p>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
