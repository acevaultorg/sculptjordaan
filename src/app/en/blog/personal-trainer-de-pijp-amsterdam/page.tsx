import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Trainer De Pijp Amsterdam — SculptClub",
  description:
    "Looking for a personal trainer in De Pijp, Amsterdam? SculptClub in the Jordaan is a 10-minute bike ride. Free intro, trainers from €45.",
  keywords: [
    "personal trainer de pijp",
    "personal trainer de pijp amsterdam",
    "gym de pijp amsterdam",
    "fitness de pijp",
    "personal training amsterdam south",
  ],
  alternates: {
    canonical: "/en/blog/personal-trainer-de-pijp-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-de-pijp-amsterdam",
      en: "/en/blog/personal-trainer-de-pijp-amsterdam",
    },
  },
};

export default function PersonalTrainerDePijpEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Personal trainer De Pijp", url: "/en/blog/personal-trainer-de-pijp-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer De Pijp Amsterdam" description="Find a personal trainer near De Pijp. SculptClub in the Jordaan is a 10-minute bike ride." url="/en/blog/personal-trainer-de-pijp-amsterdam" datePublished="2026-04-02" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer in De Pijp, Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />April 2, 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-2.jpeg" alt="SculptClub studio interior" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                De Pijp is one of Amsterdam&apos;s liveliest neighbourhoods. Known for the Albert Cuyp
                market, cozy terraces and a young, active population. But if you want serious personal
                training, options in De Pijp itself are limited. Most gyms are big chains without
                personal attention. SculptClub in the Jordaan offers the alternative — a private studio
                just 10 minutes by bike through the Vondelpark.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">From De Pijp to the Jordaan</h2>
              <p>
                The distance feels bigger than it is. Through the Vondelpark, you cycle from Ferdinand
                Bolstraat to Egelantiersgracht in about 10 minutes. Tram 2 to Leidseplein plus a
                5-minute walk also works. And when you arrive, there&apos;s no waiting — the studio is
                yours.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why a private studio?</h2>
              <p>
                In De Pijp you&apos;ll find Basic-Fit and TrainMore on Ceintuurbaan and Ferdinand
                Bolstraat. Crowded, impersonal, and you share every machine. At SculptClub you train
                in a fully equipped private studio — power rack, cable machine, dumbbells up to 50 kg.
                Maximum 3 people at a time. During personal training, just you and your trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Trainers and rates</h2>
              <p>
                Five independent trainers. Specialisations: strength, nutrition, physiotherapy, posture,
                small group. Rates from €45 per session. First intro always free. 0% commission — you
                pay your trainer directly. No membership, no contract.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Open Gym for independent training</h2>
              <p>
                Prefer to train on your own? Open Gym offers 60-minute sessions from €5.75 per visit.
                Book a slot, receive your door code via WhatsApp and train in peace. No contract, stop
                whenever you want.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam</p></a>
                <a href="/en/blog/personal-trainer-amsterdam-west" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam West</p></a>
                <a href="/en/blog/personal-trainer-amsterdam-centrum" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam Centrum</p></a>
                <a href="/en/blog/personal-training-cost-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training cost Amsterdam</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Free introduction?</h3>
              <p className="text-muted-foreground mb-6">10-minute bike ride through the Vondelpark.</p>
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
