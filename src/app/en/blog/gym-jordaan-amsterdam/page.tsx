import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Gym in the Jordaan Amsterdam: Your Options Compared — SculptClub" },
  description:
    "Looking for a gym in the Jordaan, Amsterdam? Compare big chains, boutique studios and private gyms. Find what fits your training style.",
  keywords: [
    "gym jordaan amsterdam",
    "gym jordaan",
    "fitness jordaan amsterdam",
    "workout jordaan",
    "sports in jordaan amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/gym-jordaan-amsterdam",
    languages: {
      nl: "/nl/blog/sportschool-jordaan-amsterdam",
      en: "/en/blog/gym-jordaan-amsterdam",
    },
  },
};

export default function GymJordaanEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Gym Jordaan Amsterdam", url: "/en/blog/gym-jordaan-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Gym in the Jordaan Amsterdam: Your Options Compared"
        description="Compare gyms in the Jordaan — from big chains to boutique private studios."
        url="/en/blog/gym-jordaan-amsterdam"
        datePublished="2026-04-02"
      />
      <FaqJsonLd faqs={[
        { question: "What types of gyms are in the Jordaan?", answer: "In the Jordaan, you'll mainly find three types of places to train:" },
        { question: "Why are more people choosing a private studio?", answer: "The trend is clear: people don't want to stand in a crowded gym anymore. They want to train at their own pace, without waiting, without busy changing rooms and without the social pressure that many beginners feel. A private studio offers exactly that. You book a time slot, receive a door code and train in peace." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Gym in the Jordaan Amsterdam: Your Options Compared
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  April 2, 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/facade.jpeg"
                alt="SculptClub studio on the Egelantiersgracht in the Jordaan, Amsterdam"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                The Jordaan is one of Amsterdam&apos;s most popular neighbourhoods to live and work.
                But if you&apos;re looking for a gym here, you&apos;ll quickly notice the options are
                different from areas like Zuid or Oost. The neighbourhood is compact, buildings are
                small, and big fitness chains simply don&apos;t fit. That makes the Jordaan interesting
                for anyone looking for a more personal training experience.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What types of gyms are in the Jordaan?</h2>
              <p>
                In the Jordaan, you&apos;ll mainly find three types of places to train:
              </p>
              <ul>
                <li><strong>Big chains nearby:</strong> Basic-Fit and TrainMore have locations within
                  walking distance (Haarlemmerstraat, Rozengracht). Advantage: low entry price.
                  Disadvantage: crowded, impersonal, waiting for equipment.</li>
                <li><strong>Yoga and pilates studios:</strong> The Jordaan has several yoga and pilates
                  studios. Great for flexibility and relaxation, but not an option if you want serious
                  strength training.</li>
                <li><strong>Private and boutique studios:</strong> Small, fully equipped training spaces
                  where you train alone or in a small group. More expensive per session, but you share
                  the space with nobody.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why are more people choosing a private studio?</h2>
              <p>
                The trend is clear: people don&apos;t want to stand in a crowded gym anymore. They want
                to train at their own pace, without waiting, without busy changing rooms and without the
                social pressure that many beginners feel. A private studio offers exactly that. You book
                a time slot, receive a door code and train in peace.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Strength training in the Jordaan</h2>
              <p>
                For serious strength training you need more than a treadmill and a few dumbbells. You
                need a power rack, cable machine, adjustable benches and enough free weights. Most big
                gyms have this equipment, but you share it with dozens of others. In a boutique studio
                you have all the equipment to yourself — or share with at most two other people.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Comparing costs</h2>
              <p>
                A membership at a big chain costs between €20 and €40 per month. A boutique studio
                like SculptClub works differently: you pay per session or via a flexible membership.
                Open Gym sessions start at €5.75 per visit with the Intensive plan (12 sessions per
                4 weeks for €69). The Starter plan offers 4 sessions for €29 per 4 weeks. No
                contract, no annual membership — stop whenever you want.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Personal training in the Jordaan</h2>
              <p>
                If you&apos;re looking for guidance, several trainers in the Jordaan offer personal
                training. At SculptClub, <Link href="/en/find-personal-trainer" className="text-brand underline-offset-2 hover:underline">five independent trainers</Link> work with rates from €45 per
                session. The first intro is always free with no obligation. Each trainer sets their
                own rate — we charge 0% commission, so what you pay goes entirely to your trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">SculptClub: private studio on the canal</h2>
              <p>
                SculptClub is located at Egelantiersgracht 424, in the heart of the Jordaan. A fully
                equipped private studio at ground level, directly from the street. Professional
                equipment from Rogue and Concept2, open daily from 06:30 to 22:00. You can train
                independently via Open Gym, choose a personal trainer or <Link href="/en/studio-rental" className="text-brand underline-offset-2 hover:underline">rent the studio</Link> as a
                freelance trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Try it yourself</h2>
              <p>
                Curious if a private studio is right for you? Book a free trial at Open Gym or
                schedule a free intro with a personal trainer. No obligations, no membership — just
                come and see if it&apos;s for you.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/gym-without-membership-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym without membership Amsterdam</p></a>
                <a href="/en/blog/private-gym-vs-big-box-gym" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Private gym vs big box gym</p></a>
                <a href="/en/blog/open-gym-vs-regular-gym" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Open Gym vs regular gym</p></a>
                <a href="/en/blog/personal-training-amsterdam-jordaan" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training Amsterdam Jordaan</p></a>
              </div>
            </div>
            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Try for free?</h3>
              <p className="text-muted-foreground mb-6">
                Book a free trial or schedule an intro with a trainer.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/en/find-personal-trainer" size="lg">
                  Meet our trainers
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink href="/en/open-gym" size="lg" variant="outline">
                  View Open Gym
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
