import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Gym Without Membership in Amsterdam: Your Options — SculptClub",
  description:
    "Don't want a long-term gym membership? Discover your options in Amsterdam: pay-per-session, Open Gym, punch cards and more. Compare flexible fitness.",
  keywords: [
    "gym without membership amsterdam",
    "no contract gym amsterdam",
    "flexible gym amsterdam",
    "pay per session gym amsterdam",
    "open gym amsterdam",
    "gym no commitment amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/gym-without-membership-amsterdam",
    languages: {
      nl: "/nl/blog/sportschool-zonder-abonnement-amsterdam",
      en: "/en/blog/gym-without-membership-amsterdam",
    },
  },
};

export default function GymWithoutMembershipEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Gym Without Membership", url: "/en/blog/gym-without-membership-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Gym Without Membership in Amsterdam: Your Options"
        description="Don't want a long-term membership? Discover flexible fitness options in Amsterdam, from pay-per-session to Open Gym."
        url="/en/blog/gym-without-membership-amsterdam"
        datePublished="2026-03-24"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Gym Without Membership in Amsterdam: Your Options
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  March 24, 2026
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/studio-overview.jpeg"
                alt="Open Gym at SculptClub Amsterdam — gym without membership"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                You want to work out in Amsterdam, but you don&apos;t want to commit to a yearly membership at a
                crowded gym costing 30 to 50 euros per month. Sound familiar? You&apos;re not alone. More and more
                people in Amsterdam are looking for flexible fitness options without long-term contracts. In this
                article, we break down the best alternatives.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why skip the membership?</h2>
              <p>
                There are plenty of valid reasons to avoid a fixed membership. Maybe you travel frequently for
                work, have an irregular schedule, or want to explore different types of exercise before committing.
                Or perhaps you&apos;ve experienced paying for months at a gym you barely visited.
              </p>
              <p>
                The good news: Amsterdam offers an increasing number of ways to work out flexibly. From day passes
                at major chains to specialized concepts without contract obligations.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Option 1: Day passes at regular gyms</h2>
              <p>
                Most large gyms in Amsterdam offer day passes. Prices range from 8 to 20 euros per visit, depending
                on the location and facilities. This works well for occasional workouts but becomes expensive
                quickly if you train regularly. Plus, you still deal with crowds, wait times, and limited privacy.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Option 2: Punch cards and session packages</h2>
              <p>
                Some studios and gyms work with punch cards. You buy a bundle of 10 or 20 sessions and use them
                whenever you want. The advantage: you only pay for what you actually use. The downside: punch cards
                often have an expiration date and the per-session price can be higher than a membership.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Option 3: Pay-per-session apps</h2>
              <p>
                Apps like OneFit and ClassPass offer access to multiple gyms and studios in Amsterdam through a
                flexible credits system. You pay per session or class and get access to a wide variety. This is
                great if you enjoy variety. But keep in mind: popular classes fill up quickly and costs can add
                up if you train frequently.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Option 4: Open Gym — private training without a contract</h2>
              <p>
                A relatively new concept in Amsterdam is Open Gym: you book a private gym space for a set time
                and train independently with professional equipment. No crowds, no waiting, no distractions.
                At SculptClub, Open Gym operates on a 4-week cycle with no contract. You can cancel anytime and
                pay from just 5.75 euros per session.
              </p>
              <p>
                What makes Open Gym unique compared to regular gyms:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Complete privacy</strong> — you train alone or with your training partner in a private studio.</li>
                <li><strong>Professional equipment</strong> — power rack, cable machine, dumbbells, assault bike and more.</li>
                <li><strong>Flexible hours</strong> — book sessions from 06:30 to 22:00, 7 days a week.</li>
                <li><strong>No contract</strong> — 4-week cycle, cancel whenever you want.</li>
                <li><strong>Door code access</strong> — book, receive your code, and train on your schedule.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Cost comparison per month</h2>
              <p>
                Let&apos;s compare costs for someone who wants to train 3 times per week (12 sessions per month):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Large gym membership</strong> — 30 to 50 euros per month (limited flexibility)</li>
                <li><strong>Day passes</strong> — 96 to 240 euros per month (12 x 8 to 20 euros)</li>
                <li><strong>Pay-per-session app</strong> — 60 to 120 euros per month (depending on credits)</li>
                <li><strong>Open Gym at SculptClub</strong> — 69 euros per month for 3x per week (popular plan)</li>
              </ul>
              <p>
                Open Gym offers a private experience at a comparable price to a large gym membership, but without
                the crowds, wait times, and contract obligations.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Which option is right for you?</h2>
              <p>
                The best choice depends on your situation. Training irregularly and want maximum flexibility?
                A day pass or pay-per-session app is a solid choice. Training regularly and want privacy and
                quality? Open Gym offers the best value. And if you want guidance? Personal training without a
                membership is the answer.
              </p>
              <p>
                At SculptClub, you can combine all these options. Train independently with Open Gym, book a
                personal trainer for guidance, or rent the studio for your own sessions. Everything without
                a contract.
              </p>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Try Open Gym for free</h3>
              <p className="text-muted-foreground mb-6">
                Experience what it&apos;s like to train in a private studio. First session free.
              </p>
              <ButtonLink href="/en/open-gym" size="lg">
                More about Open Gym
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
