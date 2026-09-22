/*
 * TITLE measured, not guessed — 2026-09-23.
 *
 * GSC 30d: 100 impressions, position 8.6, ZERO clicks, against this site's own
 * 7-10 band CTR of 9.17% (expected ~9.2 clicks). One of only TWO genuine
 * title/snippet levers on the whole site; everything else sits past position 20
 * where no title change moves anything.
 *
 * Checked the SERP before touching it, because inferring a SERP is how this
 * fleet keeps manufacturing fake title defects. For "boutique gym vs big chain
 * gym": no institution owns the answer, no on-topic Wikipedia, no dominant
 * destination — nine results, all vendor blogs, franchises and studios. A
 * winnable wedge. And not ONE ranking title leads with cost.
 *
 * The old title promised only COST. The article has four sections — the big-chain
 * model, the boutique model, a cost comparison, and who it is for — so the title
 * was narrowing a broad comparison query to one quarter of the page. New title
 * leads with the query phrase and keeps cost, which is what the page delivers.
 *
 * If this does not move CTR within ~30 days, the next honest read is that the
 * query is zero-click, NOT that the title needs another rewrite.
 */
import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Boutique Gym vs Big Chain Gym: What You Get, and What It Costs — SculptClub" },
  description:
    "What does it cost to train at a boutique gym vs a big chain gym? Price, contract terms and what you actually get for your money — compared.",
  keywords: [
    "boutique gym amsterdam",
    "boutique gym price vs gym",
    "gym cost vs boutique gym",
    "basic-fit alternative amsterdam",
    "gym without contract amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/boutique-gym-vs-big-chain-gym",
    languages: {
      nl: "/nl/blog/boutique-gym-vs-sportschool-keten",
      en: "/en/blog/boutique-gym-vs-big-chain-gym",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/boutique-gym-vs-big-chain-gym",
    title: "Boutique Gym vs Big Chain Gym: What You Get, and What It Costs — SculptClub",
    description:
      "What does it cost to train at a boutique gym vs a big chain gym? Price, contract terms and what you actually get for your money — compared.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boutique Gym vs Big Chain Gym: What You Get, and What It Costs — SculptClub",
    description:
      "What does it cost to train at a boutique gym vs a big chain gym? Price, contract terms and what you actually get for your money — compared.",
  },
};

export default function BoutiqueGymVsChainEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "What does a boutique gym cost vs a big chain", url: "/en/blog/boutique-gym-vs-big-chain-gym" }]} />
      <BlogPostingJsonLd title="Boutique Gym vs Big Chain Gym: What You Get, and What It Costs" description="What does it cost to train at a boutique gym vs a big chain gym? Price and contract terms compared." url="/en/blog/boutique-gym-vs-big-chain-gym" datePublished="2026-04-02" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Boutique Gym vs Big Chain Gym: What You Get, and What It Costs</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />April 2, 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-3.jpeg" alt="SculptClub boutique gym interior" fill className="object-cover" loading="eager" fetchPriority="high" sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                You want to start working out. Or you already train at a big chain and are considering
                something different. The first question is almost always: what does it cost? Here's the
                price, contract terms and what you actually get for your money at both.
              </p>
              <p>
                Want a fuller comparison of guidance, equipment and atmosphere — including personal
                training? Read the full{" "}
                <a href="/en/boutique-personal-training-vs-chain-gyms" className="text-brand underline underline-offset-2 hover:no-underline">
                  boutique personal training vs chain gyms comparison →
                </a>
                .
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Big chain: the familiar model</h2>
              <p>
                Basic-Fit, TrainMore, Fit For Free — you know them. Advantages: low monthly fee
                (€20-€40), many locations, 24/7 access. But there’s a flip side. During peak hours
                you queue for the leg press. The music is loud. You train among 50 others. And personal
                guidance? Not included.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Boutique gym: the different approach</h2>
              <p>
                A boutique gym is smaller, more focused and more personal. You share the space with a
                handful of people instead of dozens. The equipment is specifically chosen — not for
                volume but for quality. And the atmosphere is different — quieter, more focused on your
                training instead of background music.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Cost comparison at a glance</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4"></th>
                      <th className="text-left py-3 pr-4">Big chain</th>
                      <th className="text-left py-3">Boutique gym</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Price</td><td className="py-2 pr-4">€20-€40/month</td><td className="py-2">€29-€79/4 weeks</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Contract</td><td className="py-2 pr-4">Often 12 months</td><td className="py-2">None — stop whenever</td></tr>
                    <tr><td className="py-2 pr-4 font-medium">Crowding</td><td className="py-2 pr-4">High (peak hours)</td><td className="py-2">Max 4 people</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                For a fuller comparison of guidance, equipment and atmosphere, see the{" "}
                <a href="/en/boutique-personal-training-vs-chain-gyms" className="text-brand underline underline-offset-2 hover:no-underline">
                  full personal training comparison
                </a>.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Who is a boutique gym for?</h2>
              <p>
                A boutique gym fits you if you value quiet, quality over quantity and an environment
                where you actually get results. If you just need a treadmill and price is your only
                criterion, a chain is fine. But if you want to train seriously, with or without a
                trainer, and don’t want to wait or be distracted, a boutique gym is the better
                investment.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">SculptClub: boutique gym in the Jordaan</h2>
              <p>
                SculptClub is a private studio on the Egelantiersgracht in Amsterdam. Open Gym from
                €7.25 per session. Personal training from €299 per 4 weeks. No contract, free cancellation. Try
                for free — book a trial or schedule an intro.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/private-gym-vs-big-box-gym" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Private gym vs big box gym</p></a>
                <a href="/en/blog/gym-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym in the Jordaan Amsterdam</p></a>
                <a href="/en/blog/open-gym-vs-regular-gym" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Open Gym vs regular gym</p></a>
                <a href="/en/blog/gym-without-membership-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym without membership Amsterdam</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Try for free?</h3>
              <p className="text-muted-foreground mb-6">See if a boutique gym is right for you.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/en/find-personal-trainer" size="lg">Meet our trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <ButtonLink href="/en/open-gym" size="lg" variant="outline">View Open Gym</ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
