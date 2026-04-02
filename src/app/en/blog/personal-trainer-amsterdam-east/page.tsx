import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Trainer Amsterdam East — SculptClub",
  description:
    "Looking for a personal trainer in Amsterdam East? SculptClub in the Jordaan is a 15-minute bike ride. Free intro, trainers from €45.",
  keywords: [
    "personal trainer amsterdam east",
    "personal training oost amsterdam",
    "gym amsterdam east",
    "fitness amsterdam east",
    "personal trainer oosterpark",
  ],
  alternates: {
    canonical: "/en/blog/personal-trainer-amsterdam-east",
    languages: {
      nl: "/nl/blog/personal-trainer-amsterdam-oost",
      en: "/en/blog/personal-trainer-amsterdam-east",
    },
  },
};

export default function PersonalTrainerEastEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Personal trainer Amsterdam East", url: "/en/blog/personal-trainer-amsterdam-east" }]} />
      <BlogPostingJsonLd title="Personal Trainer Amsterdam East" description="Find a personal trainer near Amsterdam East." url="/en/blog/personal-trainer-amsterdam-east" datePublished="2026-04-02" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer in Amsterdam East</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />April 2, 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/hero/gym-entrance.jpeg" alt="SculptClub private gym entrance" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Amsterdam East is one of the city&apos;s fastest growing neighbourhoods. Young, active
                and full of new residents looking for a good place to train. But serious personal training
                in East itself is scarce. SculptClub in the Jordaan offers the alternative — a private
                studio 15 minutes by bike through the centre.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">From East to the Jordaan</h2>
              <p>
                Via Plantage Middenlaan and the Amstel, you cycle from Oosterpark to Egelantiersgracht
                in about 15 minutes. By metro to Centraal Station plus 10 minutes walking also works.
                Many of our clients come from East because they prefer the quiet and quality of a private
                studio over the crowded gyms nearby.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What do you get at SculptClub?</h2>
              <p>
                A fully equipped private studio with professional equipment. Five independent trainers
                each with their own specialisation. Free intro. Rates from €45 per session. No
                membership. Also Open Gym for independent training from €5.75 per session.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Studio rental for trainers from East</h2>
              <p>
                Are you a trainer in Amsterdam East? SculptClub offers studio rental from €12 per hour.
                Train your clients in a professional environment without the investment of your own space.
                Discount packages up to 23% off.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam</p></a>
                <a href="/en/blog/personal-trainer-amsterdam-centrum" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam Centrum</p></a>
                <a href="/en/blog/personal-trainer-amsterdam-west" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam West</p></a>
                <a href="/en/blog/personal-trainer-de-pijp-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer De Pijp</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Free introduction?</h3>
              <p className="text-muted-foreground mb-6">15-minute bike ride from East.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/en/find-personal-trainer" size="lg">Meet our trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <ButtonLink href="/en/studio-rental" size="lg" variant="outline">Rent studio</ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
