import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Amsterdam South — SculptClub in the Jordaan" },
  description:
    "Live in Amsterdam South and looking for a personal trainer? SculptClub in the Jordaan is a 10-minute bike ride. Free intro, no membership.",
  keywords: [
    "personal trainer amsterdam south",
    "personal training amsterdam south",
    "gym amsterdam south",
    "fitness amsterdam south",
    "personal trainer oud-zuid",
    "personal trainer zuidas",
  ],
  alternates: {
    canonical: "/en/blog/personal-trainer-amsterdam-south",
    languages: {
      nl: "/nl/blog/personal-trainer-amsterdam-zuid",
      en: "/en/blog/personal-trainer-amsterdam-south",
    },
  },
};

export default function PTAmsterdamSouthEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Personal trainer Amsterdam South", url: "/en/blog/personal-trainer-amsterdam-south" }]} />
      <BlogPostingJsonLd title="Personal Trainer Amsterdam South" description="SculptClub in the Jordaan: personal training within cycling distance of Amsterdam South." url="/en/blog/personal-trainer-amsterdam-south" datePublished="2026-04-03" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer Amsterdam South</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />3 April 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/facade.jpeg" alt="SculptClub facade on the Egelantiersgracht" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Amsterdam South — home to the Vondelpark, Beethovenstraat and the Zuidas
                business district. One of the city&apos;s most popular residential areas. But
                when it comes to personal training, you don&apos;t need to look far. SculptClub
                in the Jordaan is a 10-minute bike ride and offers something hard to find in
                South: a private studio with no membership required.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why come to the Jordaan for personal training?</h2>
              <p>
                Amsterdam South has plenty of gyms, but few private studios. At SculptClub
                you train in a fully equipped studio — just you and your trainer. No waiting
                for equipment, no crowds, no stares. The studio is on the{" "}
                <a href="/en/location-hours" className="text-brand hover:underline">Egelantiersgracht</a>,
                a quiet canal in the heart of the Jordaan.
              </p>
              <p>
                From the Vondelpark or Overtoom, cycle via the Nassaukade and you&apos;re there
                in 10 minutes. From the Zuidas it&apos;s 15 minutes by bike or a quick tram ride
                (lines 2 or 12 towards Centraal, get off at Elandsgracht).
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What makes SculptClub different?</h2>
              <ul>
                <li><strong>Private studio:</strong> Train alone with your trainer — no other clients at the same time</li>
                <li><strong>No membership:</strong> Book per session, cancel any time for free</li>
                <li><strong>Free intro:</strong> The first session costs nothing</li>
                <li><strong>Five trainers:</strong> From strength training to nutrition to physiotherapy</li>
                <li><strong>Door code via WhatsApp:</strong> The evening before, no reception needed</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Our trainers</h2>
              <p>
                At SculptClub, trainers set their own specialisation and rates. You&apos;ll find
                the full profile of each trainer on our{" "}
                <a href="/en/find-personal-trainer" className="text-brand hover:underline">trainers page</a>.
                Personal training starts from €45 per session.
              </p>
              <p>
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="text-brand hover:underline">Hamish</a> works
                as a physiotherapist BSc — ideal if you need rehabilitation alongside training.{" "}
                <a href="/en/blog/nutrition-coach-amsterdam" className="text-brand hover:underline">Eva</a> combines
                strength training with nutrition coaching.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Open Gym for independent training</h2>
              <p>
                Prefer to train on your own? With <a href="/en/open-gym" className="text-brand hover:underline">Open
                Gym</a> you get access to the same private studio, without a trainer. From
                €5.75 per session, in 4-week cycles. Maximum 3 people at a time, so there&apos;s
                always space.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">How to reach SculptClub from Amsterdam South</h2>
              <p>
                <strong>By bike:</strong> 10-15 minutes via the Nassaukade or Singelgracht.
                Bike parking directly outside the door.
              </p>
              <p>
                <strong>By public transport:</strong> Tram 13 or 17 to Elandsgracht, then a
                3-minute walk. Or tram 2/12 to Marnixstraat.
              </p>
              <p>
                <strong>By car:</strong> Marnix parking garage or paid street parking on the
                canal. But cycling is faster.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Free intro — no obligations</h2>
              <p>
                The first step is a <a href="/en/free-intro" className="text-brand hover:underline">free
                intro session</a>. You discuss your goals, your trainer assesses your level
                and together you make a plan. No contract, no membership. Not for you? Just
                stop, no cost.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-de-pijp-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer De Pijp</p></a>
                <a href="/en/blog/personal-trainer-amsterdam-centrum" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam Centrum</p></a>
                <a href="/en/blog/personal-training-amsterdam-jordaan" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training in the Jordaan</p></a>
                <a href="/en/blog/personal-training-cost-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training cost Amsterdam</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Live in South? Come visit!</h3>
              <p className="text-muted-foreground mb-6">Book a free intro and discover our studio in the Jordaan.</p>
              <ButtonLink href="/en/find-personal-trainer" size="lg">View trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
