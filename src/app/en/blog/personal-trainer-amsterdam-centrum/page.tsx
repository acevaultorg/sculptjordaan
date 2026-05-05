import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Amsterdam Centrum — SculptClub" },
  description:
    "Looking for a personal trainer in Amsterdam Centrum? SculptClub in the Jordaan is just around the corner. Free intro, trainers from €45/session.",
  keywords: [
    "personal trainer amsterdam centrum",
    "personal training centrum amsterdam",
    "gym amsterdam centrum",
    "fitness amsterdam city centre",
    "personal trainer near dam square",
  ],
  alternates: {
    canonical: "/en/blog/personal-trainer-amsterdam-centrum",
    languages: {
      nl: "/nl/blog/personal-trainer-amsterdam-centrum",
      en: "/en/blog/personal-trainer-amsterdam-centrum",
    },
  },
};

export default function PersonalTrainerCentrumEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Personal trainer Amsterdam Centrum", url: "/en/blog/personal-trainer-amsterdam-centrum" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Trainer Amsterdam Centrum"
        description="Find a personal trainer near Amsterdam Centrum. SculptClub in the Jordaan is just around the corner."
        url="/en/blog/personal-trainer-amsterdam-centrum"
        datePublished="2026-04-02"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Personal Trainer in Amsterdam Centrum
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />April 2, 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/sculpt-wall-logo.jpeg" alt="SculptClub logo on the studio wall" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Amsterdam Centrum is the beating heart of the city. Busy, dynamic and full of
                possibilities — but when it comes to training quietly with a personal trainer, options
                are limited. Most gyms in the centre are large, crowded and impersonal. SculptClub in
                the Jordaan offers the alternative: a private studio within walking distance of Dam
                Square, Westermarkt and Leidseplein.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why not train at a big gym?</h2>
              <p>
                In the centre you&apos;ll find Basic-Fit Kalverstraat and TrainMore Leidseplein.
                Advantage: easy to reach. Disadvantage: during rush hours, you queue for every machine.
                Personal training in a big gym means training among dozens of other people — not the
                attention you&apos;re looking for when hiring a trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">A private studio around the corner</h2>
              <p>
                SculptClub is on the Egelantiersgracht in the Jordaan. From Centraal Station it&apos;s
                a 10-minute bike ride. From Dam Square, 5 minutes. Tram 13 and 17 stop at Westermarkt,
                2 minutes walk. You train in a fully equipped private studio — power rack, cable machine,
                dumbbells up to 50 kg — just you and your trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Five trainers, free intro</h2>
              <p>
                SculptClub has five independent trainers specialising in strength training, nutrition
                and physiotherapy. The first introduction is always free. Rates from €45 per session.
                No membership, no contract — book per session and always cancel for free. We charge
                0% commission.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Train independently too</h2>
              <p>
                Prefer to train on your own? Open Gym offers 60-minute sessions in the same private
                studio. From €5.75 per session with the Intensive plan. No contract, stop whenever
                you want.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam</p></a>
                <a href="/en/blog/gym-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym in the Jordaan Amsterdam</p></a>
                <a href="/en/blog/personal-trainer-amsterdam-west" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam West</p></a>
                <a href="/en/blog/personal-trainer-amsterdam-north" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam North</p></a>
                <a href="/en/blog/personal-training-cost-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training cost Amsterdam</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Free introduction?</h3>
              <p className="text-muted-foreground mb-6">5-minute bike ride from Dam Square.</p>
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
