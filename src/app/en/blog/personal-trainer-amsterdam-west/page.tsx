import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Trainer Amsterdam West & Oud-West — SculptClub",
  description:
    "Looking for a personal trainer in Amsterdam West or Oud-West? SculptClub in the Jordaan is a 5-minute bike ride. Free intro, from €45/session.",
  keywords: [
    "personal trainer amsterdam west",
    "personal trainer oud-west amsterdam",
    "personal training amsterdam west",
    "gym amsterdam west",
    "personal trainer westerpark",
  ],
  alternates: {
    canonical: "/en/blog/personal-trainer-amsterdam-west",
    languages: {
      nl: "/nl/blog/personal-trainer-amsterdam-west",
      en: "/en/blog/personal-trainer-amsterdam-west",
    },
  },
};

export default function PersonalTrainerAmsterdamWestEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Personal trainer Amsterdam West", url: "/en/blog/personal-trainer-amsterdam-west" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Trainer Amsterdam West & Oud-West"
        description="Find a personal trainer near Amsterdam West. SculptClub in the Jordaan is a 5-minute bike ride."
        url="/en/blog/personal-trainer-amsterdam-west"
        datePublished="2026-04-02"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Personal Trainer in Amsterdam West &amp; Oud-West
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
                src="/images/studio/entrance.jpeg"
                alt="Entrance to SculptClub studio on the Egelantiersgracht"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Living in Amsterdam West, Oud-West or near Westerpark and looking for a personal
                trainer? You probably know the problem: big gyms in the area are crowded, and truly
                personal guidance is hard to find. SculptClub in the Jordaan is a 5-minute bike ride
                from Kinkerstraat and the Vondelpark — closer than you think.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why people from West train in the Jordaan</h2>
              <p>
                Amsterdam West and Oud-West are great neighbourhoods to live in, but options for
                serious personal training are limited. Most options are big chains (Basic-Fit,
                TrainMore) or small yoga studios. For strength training with a qualified personal
                trainer, you need to look a bit further. The Jordaan borders directly on West — via
                Rozengracht or the Vondelpark, you&apos;re there in minutes.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What makes a private studio different?</h2>
              <p>
                At SculptClub you don&apos;t train in a busy gym. You get a full private studio with
                professional equipment — power rack, cable machine, dumbbells up to 50 kg, assault
                bike. Maximum 3 people at a time, but during personal training it&apos;s just you and
                your trainer. No waiting for equipment, no distractions. Door code via WhatsApp the
                evening before.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Five trainers, each with their own specialisation</h2>
              <p>
                SculptClub has five independent trainers. Alex specialises in strength and
                calisthenics. Eva combines personal training with nutritional advice as a certified
                dietitian. Hamish is a physiotherapist working with rehab and specific conditions.
                Andrea focuses on technique and posture. Dara offers personal training and small
                group sessions. Each with their own rates, each with a free intro.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Cost and flexibility</h2>
              <p>
                Personal training at SculptClub starts from €45 per session. The first introduction
                is always free. No membership, no contract — you book per session and always cancel
                for free. We charge 0% commission to our trainers, so what you pay goes entirely to
                your trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">How to get here from West</h2>
              <p>
                SculptClub is at Egelantiersgracht 424. From Kinkerstraat it&apos;s a 5-minute bike
                ride via Rozengracht. From Westerpark it&apos;s 8 minutes via Haarlemmerstraat. By
                tram (line 13 or 17) get off at Westermarkt, 2 minutes walk. Bike parking directly
                in front of the door.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Train independently? That&apos;s possible too</h2>
              <p>
                Not everyone needs a personal trainer. If you want to train independently in a quiet
                setting, SculptClub offers Open Gym. Book a 60-minute session with access to all
                equipment. Membership from €29 per 4 weeks — no contract, stop whenever you want.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer in Amsterdam: find the best match</p></a>
                <a href="/en/blog/gym-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym in the Jordaan Amsterdam</p></a>
                <a href="/en/blog/personal-training-cost-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training cost Amsterdam</p></a>
                <a href="/en/blog/personal-training-weight-loss-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training for weight loss</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Free introduction?</h3>
              <p className="text-muted-foreground mb-6">
                Book a free intro with one of our trainers. 5-minute bike ride from West.
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
