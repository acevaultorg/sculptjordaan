import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Marketing on Instagram — What Works in Amsterdam (Jordaan) — SculptClub" },
  description:
    "Which Instagram content actually brings PT clients in Amsterdam? Reel length, hashtags, post times, DM strategy — everything that works in 2026 for freelance personal trainers.",
  keywords: ["personal trainer instagram marketing", "clients via instagram personal trainer", "pt content instagram amsterdam", "reels personal trainer", "instagram strategy freelance trainer"],
  alternates: {
    canonical: "/en/blog/personal-trainer-marketing-instagram-amsterdam-jordaan",
    languages: { nl: "/nl/blog/personal-trainer-marketing-instagram-amsterdam-jordaan", en: "/en/blog/personal-trainer-marketing-instagram-amsterdam-jordaan" },
  },
};

export default function BlogPostInstagramMarketingEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Personal trainer Instagram marketing", url: "/en/blog/personal-trainer-marketing-instagram-amsterdam-jordaan" }]} />
      <BlogPostingJsonLd title="Personal trainer marketing on Instagram — what works in Amsterdam (Jordaan)" description="Which Instagram content actually brings PT clients in Amsterdam? Reel length, hashtags, post times, DM strategy — everything that works in 2026 for freelance personal trainers." url="/en/blog/personal-trainer-marketing-instagram-amsterdam-jordaan" datePublished="2026-05-20" />
      <FaqJsonLd faqs={[
        { question: "What Instagram content works for personal trainers in 2026?", answer: "Reels of 7-15 seconds with a strong hook in the first 2 seconds convert best. Form-correction videos, hyper-specific tips, and behind-the-scenes moments. No generic motivational quotes." },
        { question: "How many hashtags should I use on Instagram?", answer: "5 to 7 niche-specific hashtags in 2026 (vs the 20+ tactic of years ago). Algorithm rewards content, not hashtag-stuffing. Prefer #personaltrainerjordaan over #fitness." },
        { question: "When is the best time to post in Amsterdam?", answer: "19:00 to 21:00 for max local reach. Lunch (12:30) also works (especially cross-platform with TikTok)." },
      ]} />
      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Personal trainer marketing on Instagram — what works in Amsterdam (Jordaan)</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />20 May 2026</span><span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span></div>
            </div>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">95% of SculptClub bookings start via Instagram (Clarity 30d data, 2026). For Amsterdam PTs, Instagram is THE acquisition engine. But the algorithm has shifted heavily in 2025-2026 — what worked 2 years ago (long videos, motivational quotes, 30 hashtags) now does nothing. Here&apos;s what actually works in 2026.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">What changed in 2026 — Reels dominant, long posts dead</h2>
              <p>Major shifts:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Reels > posts > stories", "Instagram pushes Reels to new eyes. Plain photo posts get 30-50% less reach than in 2024."],
                  ["Shorter is better", "7-15 second Reels outperform 30-60s. Algorithm rewards complete-watches."],
                  ["Hashtag-stuffing dead", "20+ hashtags get penalized. 5-7 niche-specific now."],
                  ["Saves > likes", "Algorithm weighs &ldquo;saves&rdquo; and &ldquo;shares&rdquo; heavier than likes. Content people want to return to performs."],
                  ["DMs are the conversion layer", "Likes don&apos;t become clients. DMs become clients. Optimize for DMs."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">The 4 content pillars that work for Amsterdam PTs</h2>
              <p>Spread content across 4 pillars in a 4-week rotation:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Workouts (40%)", "Short form demos or correction Reels. &ldquo;Here&apos;s what you do wrong; here&apos;s how to do it right.&rdquo; Specific > generic."],
                  ["Tips (25%)", "One concrete, technical tip per Reel. &ldquo;5-second cue that fixes your deadlift.&rdquo;"],
                  ["Behind-the-scenes (20%)", "You in the studio, a client who just hit something, a conversation about what a session contains. Builds trust."],
                  ["Transformations (15%)", "With real consent. Subtle before-and-after, honest timeline. &ldquo;6 months, 1×/week, this is what happened.&rdquo; No fake claims."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Reels — length, hook, captions</h2>
              <p>Anatomy of a working Reel for an Amsterdam PT:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Length 7-15 seconds", "Sweet spot for PT content. Algorithm rewards complete-watches; shorter = higher completion rate."],
                  ["Hook in seconds 0-2", "First frame: wrong form, shocking stat, or specific question. &ldquo;Doing your squat like this? Stop.&rdquo;"],
                  ["Visual on-screen text", "People scroll without sound. Captions in the Reel itself, not only in the description."],
                  ["Caption with 1 tip + 1 CTA", "&ldquo;This 5-second cue fixes your squat. Want an intro? DM me.&rdquo; No story, no 200 words."],
                  ["Post time 19:00-21:00 Amsterdam", "Local reach peak. Lunch (12:30) also ok as secondary slot."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Hashtags 2026 — what works, what doesn&apos;t</h2>
              <p>5-7 niche-specific hashtags. Example for an Amsterdam PT:</p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead><tr className="border-b bg-muted/50"><th className="px-4 py-3 text-left font-semibold text-foreground">Works (2026)</th><th className="px-4 py-3 text-left font-semibold text-foreground">No longer works</th></tr></thead>
                  <tbody>{[["#personaltrainerjordaan", "#fitness"], ["#personaltrainingamsterdam", "#gymlife"], ["#strengthtrainingamsterdam", "#motivation"], ["#trainerjordaan", "#instafit"], ["#sculptclubjordaan (brand)", "#abs #shred"]].map(([w, nw]) => (<tr key={w} className="border-b last:border-0"><td className="px-4 py-3 text-foreground">{w}</td><td className="px-4 py-3 line-through opacity-60">{nw}</td></tr>))}</tbody>
                </table>
              </div>
              <p>Hashtags are topic signals, not reach multipliers. The algorithm reads your content; hashtags only help categorize your content to the right niche.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">DM strategy — convert followers to clients</h2>
              <p>Likes don&apos;t become clients. DMs become clients. Three DM conversation types:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Inbound DM from warm audience", "Someone DMs after a Reel. Reply within 1 hour. Answer their specific question, not generically. End with: &ldquo;Want a free intro? No obligation.&rdquo;"],
                  ["Cold DM after engagement", "Someone likes multiple posts. After 7-14 days, send a personal message: &ldquo;Hey, I see you follow my content. Are you training yourself now, or considering a PT?&rdquo; No pitch, just a question."],
                  ["Post-intake follow-up", "After a free intro: 24 hours later a DM with &ldquo;Thanks for the intro. Here are the 3 things we&apos;d start with.&rdquo; Concrete, personalized. Don&apos;t sell — repeat the value."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>DM strategy doesn&apos;t scale automatically. Plan 30-45 min per day for DMs. Many don&apos;t convert — but of the 2-3 real DM conversations per week, on average 1 becomes a client.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Cross-posting to TikTok — yes or no?</h2>
              <p>Short version: <strong className="text-foreground">yes, do it</strong>. Long version:</p>
              <p>TikTok pushes new creators faster than Instagram in 2026. Same 7-15s Reel cross-posts to TikTok without rework. Lunch (12:30) and evening (19:00) are TikTok sweet spots.</p>
              <p>Caveat: TikTok audience is younger on average. Amsterdam PT clients willing to pay €60-90/session sit more on Instagram. TikTok is good for brand awareness + new reach, Instagram is good for conversion.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">SculptClub social tool — ready-made 4-week calendar</h2>
              <p>At SculptClub we have a tool at <a href="/nl/social" className="text-brand hover:underline">sculptclub.nl/nl/social</a> with 4 posts ready every week: hook, script, hashtags, visuals. 16 posts/month, all schedulable. Brain provides the brief in English — you write the Dutch caption in your own voice.</p>
              <p>Works for all SculptClub trainers, even if you don&apos;t rent at our studio. Free to use without membership. Goal: save 3-5 hours per week on content planning.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">What absolutely does NOT work</h2>
              <p>List of content forms wasting your time:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Generic motivational quotes (&ldquo;No pain no gain&rdquo;-style)", "Zero engagement from people actually considering a trainer."],
                  ["Fake before-and-after with overdone claims", "Algorithm penalizes + clients see through it immediately."],
                  ["Long 60+ second videos without a hook", "Completion rate drops below 20%, algorithm doesn&apos;t distribute further."],
                  ["20+ hashtags under every post", "2024 tactic. Now counterproductive."],
                  ["Cold DMs without context", "&ldquo;Hey wanna train with me?&rdquo; doesn&apos;t work. Always respond to a specific trigger (recent post, engagement, intake)."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Further reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/en/blog/first-10-clients-freelance-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">First 10 clients as a freelance PT</p></a>
                  <a href="/en/blog/studio-rental-vs-commercial-gym-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio rental vs commercial gym</p></a>
                  <a href="/nl/social" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub Social Content Tool</p></a>
                  <a href="/en/for-trainers" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">For trainers — overview</p></a>
                </div>
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Ready to start?</h3>
                <p className="mb-4">Check our 4-week content calendar with ready-made briefs for 16 posts/month. Free to use, no membership required.</p>
                <ButtonLink href="/nl/social" size="lg">Open Social Content Tool<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
