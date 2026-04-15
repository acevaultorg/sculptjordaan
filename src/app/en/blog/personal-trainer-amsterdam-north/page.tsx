import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Trainer Amsterdam North — SculptClub",
  description:
    "Living or working in Amsterdam Noord and looking for a personal trainer? Honest local overview, plus a quiet alternative in the Jordaan via the ferry.",
  keywords: [
    "personal trainer amsterdam north",
    "personal trainer amsterdam noord",
    "ndsm personal training",
    "boutique gym amsterdam noord",
    "private gym amsterdam north",
  ],
  alternates: {
    canonical: "/en/blog/personal-trainer-amsterdam-north",
    languages: {
      nl: "/nl/blog/personal-trainer-amsterdam-noord",
      en: "/en/blog/personal-trainer-amsterdam-north",
    },
  },
  openGraph: {
    title: "Personal Trainer Amsterdam North — SculptClub",
    description:
      "Honest overview of personal training in Amsterdam Noord, plus a private studio just 10 minutes away via the ferry.",
    url: "/en/blog/personal-trainer-amsterdam-north",
    type: "article",
  },
};

const faqs = [
  {
    question: "How long is the trip from Noord to the Jordaan?",
    answer:
      "From NDSM, take the ferry and bike from there: 10 to 15 minutes door-to-door. From Buiksloterweg via Centraal and Westermarkt it's 12 to 15 minutes. By car, count on 20 minutes plus parking in a Jordaan garage.",
  },
  {
    question: "Are there good personal trainers in Amsterdam Noord itself?",
    answer:
      "Yes, but the boutique scene is limited. Most options are big chain gyms with PT as a side product, or independent trainers renting an hour inside a larger facility. A complete private studio with several independent trainers is still rare in Noord.",
  },
  {
    question: "Can I try before committing?",
    answer:
      "Yes. Every trainer at SculptClub offers a free intro session. You see the studio, meet the trainer and discuss your goals before booking anything.",
  },
  {
    question: "What does personal training cost at SculptClub?",
    answer:
      "Trainers set their own rates, starting at €45 per session. No membership, no contract, and the first intro is free. You pay your trainer directly.",
  },
  {
    question: "What if I prefer to train solo?",
    answer:
      "Open Gym gives you access to the same private studio for unguided sessions. From €29 per 4 weeks for 4 sessions, cancel anytime. Handy if you live in Noord and want a quiet city-centre spot for solo training days.",
  },
];

export default function PersonalTrainerAmsterdamNorthEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Personal trainer Amsterdam North", url: "/en/blog/personal-trainer-amsterdam-north" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Trainer Amsterdam North"
        description="Honest overview of personal training in Amsterdam Noord and a quiet alternative in the Jordaan."
        url="/en/blog/personal-trainer-amsterdam-north"
        datePublished="2026-04-08"
        dateModified="2026-04-08"
      />
      <FaqJsonLd faqs={faqs} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Personal Trainer in Amsterdam North
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />April 8, 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/sculpt-wall-logo.jpeg" alt="SculptClub private studio in the Jordaan, a short ferry ride from Amsterdam Noord" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Amsterdam Noord has transformed in a decade — from industrial wasteland to one of the
                most desirable neighbourhoods in the city. NDSM, Overhoeks, Buiksloterham — new lofts,
                offices and coffee bars everywhere. But ask anyone living there where they go for a
                quiet personal training session and the room gets quiet. Boutique studio options in
                Noord are still limited. This piece looks honestly at what exists, and why a short trip
                across the IJ often turns out to be the calmest answer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What does Noord actually offer locally?</h2>
              <p>
                You&apos;ll mostly find <a href="/en/blog/private-gym-vs-big-box-gym" className="text-brand hover:underline">chain gyms</a> in
                Noord. Basic-Fit operates several locations, TrainMore is expanding, and there are a
                handful of CrossFit boxes and bootcamp groups. Great if you like group energy, busy
                floors and flexible opening hours at low prices. For someone who wants one-on-one
                coaching in a calm room with a fixed trainer, the menu is shorter. A few independent
                trainers operate in Noord by renting hours inside larger gyms — which means your
                sessions still happen among dozens of strangers on shared equipment.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why consider a trainer across the IJ?</h2>
              <p>
                Noord and the Jordaan feel far apart, but the map lies. From NDSM the ferry drops you
                at Centraal in five minutes. Bike from there and you&apos;re at the Egelantiersgracht in
                ten. From Buiksloterweg it&apos;s even quicker — two minutes on the ferry, then straight
                into the Jordaan via Haarlemmerstraat. That&apos;s often no longer than driving from one
                end of Noord to the other to reach a strip-mall gym. And instead of a chain location,
                you arrive at a private studio where it&apos;s just you and your trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What Noord-based clients say about the Jordaan studio</h2>
              <p>
                A recurring compliment from clients commuting from Noord: the ferry-to-studio transition
                feels like a small reset. You leave the Centraal Station crowds behind, the Jordaan
                opens up with canals and quiet side streets, and within fifteen minutes you&apos;re lifting
                in a room with no mirrored eyes and no waiting lists. For people who spend the workday
                staring at a screen, that physical switch is often more valuable than a five-minute
                walk to a packed gym near home.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Travel time, parking and ferries</h2>
              <p>
                The IJ ferries run 24/7 and they&apos;re free. From NDSM the ferry to Centraal departs every
                ten minutes during daytime hours. From Buiksloterweg and IJplein the frequency is higher
                still. Bring your bike on board and you have zero transit stress. Prefer to drive? The
                Jordaan is a paid-parking zone, but the Markthal garage and the Marnixstraat garage are
                walking distance from the studio. For a one-hour session plus two hours of parking, the
                Jordaan works comfortably, especially outside office hours.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Five trainers, one studio, no contract</h2>
              <p>
                SculptClub has five independent trainers covering strength, nutrition, physiotherapy,
                posture and movement technique. You pick the trainer that fits your goal — not the
                other way round. Rates start at €45 per session and we keep an{" "}
                <a href="/en/blog/personal-training-cost-amsterdam" className="text-brand hover:underline">honest breakdown of what personal training costs in Amsterdam</a>.
                The first intro is always free. No membership, no long contracts, no hidden fees.
                Cancellation is always free. The studio is open daily 06:30 to 22:00, so squeezing a
                session in before or after work in <a href="/en/blog/personal-trainer-amsterdam-centrum" className="text-brand hover:underline">Centrum</a>{" "}
                or <a href="/en/blog/personal-trainer-amsterdam-south" className="text-brand hover:underline">Zuidas</a> is usually
                straightforward.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Open Gym for solo days</h2>
              <p>
                Not every workout needs a coach.{" "}
                <a href="/en/blog/open-gym-vs-regular-gym" className="text-brand hover:underline">Open Gym</a> gives you access to the
                same private studio for 60-minute solo sessions. Four sessions per month start at €29.
                Unlimited access runs from €89 per four weeks. No contract, no notice period — a
                practical middle ground for people who live in Noord and pass through the centre
                regularly for work or appointments. If you&apos;re commuting from further afield,
                our <a href="/en/blog/gym-without-membership-amsterdam" className="text-brand hover:underline">no-membership gym guide</a>{" "}
                explains how the pricing compares.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Frequently asked questions</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-amsterdam-centrum" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam Centrum</p></a>
                <a href="/en/blog/personal-trainer-amsterdam-east" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam East</p></a>
                <a href="/en/blog/personal-trainer-amsterdam-west" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam West</p></a>
                <a href="/en/blog/personal-trainer-amsterdam-south" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam South</p></a>
                <a href="/en/blog/private-gym-vs-big-box-gym" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Private gym vs big-box gym</p></a>
                <a href="/en/blog/boutique-gym-vs-big-chain-gym" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Boutique gym vs big chain</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Come and meet a trainer</h3>
              <p className="text-muted-foreground mb-6">Hop on the ferry, bike into the Jordaan, and train in a quiet private studio. First intro is free.</p>
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
