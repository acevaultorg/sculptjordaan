import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Boutique Gym vs Big Chain Gym: What's Right for You? — SculptClub",
  description:
    "Deciding between a boutique gym and a big chain? Compare price, atmosphere, equipment and results. Find what works best for your goals.",
  keywords: [
    "boutique gym amsterdam",
    "boutique gym vs big gym",
    "small gym amsterdam",
    "basic-fit alternative amsterdam",
    "personal training studio vs gym",
  ],
  alternates: {
    canonical: "/en/blog/boutique-gym-vs-big-chain-gym",
    languages: {
      nl: "/nl/blog/boutique-gym-vs-sportschool-keten",
      en: "/en/blog/boutique-gym-vs-big-chain-gym",
    },
  },
};

export default function BoutiqueGymVsChainEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Boutique gym vs big chain", url: "/en/blog/boutique-gym-vs-big-chain-gym" }]} />
      <BlogPostingJsonLd title="Boutique Gym vs Big Chain Gym" description="Compare boutique gyms and big chain gyms on price, atmosphere and results." url="/en/blog/boutique-gym-vs-big-chain-gym" datePublished="2026-04-02" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Boutique Gym vs Big Chain Gym: What&apos;s Right for You?</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />April 2, 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-3.jpeg" alt="SculptClub boutique gym interior" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                You want to start working out. Or you already train at a big chain and are considering
                something different. The choice between a boutique gym and a big chain isn&apos;t just
                about price — it&apos;s about what you need to actually get results.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Big chain: the familiar model</h2>
              <p>
                Basic-Fit, TrainMore, Fit For Free — you know them. Advantages: low monthly fee
                (€20-€40), many locations, 24/7 access. But there&apos;s a flip side. During peak hours
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

              <h2 className="text-2xl font-bold mt-10 mb-4">The honest comparison</h2>
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
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Price</td><td className="py-2 pr-4">€20-€40/month</td><td className="py-2">€29-€89/4 weeks</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Crowding</td><td className="py-2 pr-4">High (peak hours)</td><td className="py-2">Max 3 people</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Guidance</td><td className="py-2 pr-4">Not included</td><td className="py-2">Optional (PT from €45)</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Equipment</td><td className="py-2 pr-4">Many, often occupied</td><td className="py-2">Fewer, always available</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Contract</td><td className="py-2 pr-4">Often 12 months</td><td className="py-2">None — stop whenever</td></tr>
                    <tr><td className="py-2 pr-4 font-medium">Atmosphere</td><td className="py-2 pr-4">Busy, loud, anonymous</td><td className="py-2">Quiet, private, personal</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">Who is a boutique gym for?</h2>
              <p>
                A boutique gym fits you if you value quiet, quality over quantity and an environment
                where you actually get results. If you just need a treadmill and price is your only
                criterion, a chain is fine. But if you want to train seriously, with or without a
                trainer, and don&apos;t want to wait or be distracted, a boutique gym is the better
                investment.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">SculptClub: boutique gym in the Jordaan</h2>
              <p>
                SculptClub is a private studio on the Egelantiersgracht in Amsterdam. Open Gym from
                €5.75 per session. Personal training from €45. No contract, free cancellation. Try
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
