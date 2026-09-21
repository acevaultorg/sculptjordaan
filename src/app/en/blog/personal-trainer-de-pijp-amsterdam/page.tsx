import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer De Pijp Amsterdam — SculptClub" },
  description:
    "Looking for a personal trainer in De Pijp, Amsterdam? SculptClub in the Jordaan is a 10-minute bike ride. Free intro, transformations from €299 per 4 weeks.",
  keywords: [
    "personal trainer de pijp",
    "personal trainer de pijp amsterdam",
    "gym de pijp amsterdam",
    "fitness de pijp",
    "personal training amsterdam south",
  ],
  // Noindex: ~350 prose words; doorway-template pattern. See
  // rules/adsense-thin-content-prevention.md Gates 2 + 3. Stays live; substantive
  // location pages remain indexed.
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/en/blog/personal-trainer-de-pijp-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-de-pijp-amsterdam",
      en: "/en/blog/personal-trainer-de-pijp-amsterdam",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/personal-trainer-de-pijp-amsterdam",
    title: "Personal Trainer De Pijp Amsterdam — SculptClub",
    description:
      "Looking for a personal trainer in De Pijp, Amsterdam? SculptClub in the Jordaan is a 10-minute bike ride. Free intro, transformations from €299 per 4 weeks.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer De Pijp Amsterdam — SculptClub",
    description:
      "Looking for a personal trainer in De Pijp, Amsterdam? SculptClub in the Jordaan is a 10-minute bike ride. Free intro, transformations from €299 per 4 weeks.",
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
              <Image src="/images/studio/studio-interior-2.jpeg" alt="SculptClub studio interior" fill className="object-cover" loading="eager" fetchPriority="high" sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                De Pijp is one of Amsterdam’s liveliest neighbourhoods. Known for the Albert Cuyp
                market, cozy terraces and a young, active population. But if you want serious personal
                training, options in De Pijp itself are limited. Most gyms are big chains without
                personal attention. SculptClub in the Jordaan offers the alternative — a private studio
                just 10 minutes by bike through the Vondelpark.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">From De Pijp to the Jordaan</h2>
              <p>
                The distance feels bigger than it is. Through the Vondelpark, you cycle from Ferdinand
                Bolstraat to Egelantiersgracht in about 10 minutes. Tram 2 to Leidseplein plus a
                5-minute walk also works. And when you arrive, there’s no waiting — the studio is
                yours.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why a private studio?</h2>
              <p>
                In De Pijp you’ll find Basic-Fit and TrainMore on Ceintuurbaan and Ferdinand
                Bolstraat. Crowded, impersonal, and you share every machine. At SculptClub you train
                in a fully equipped private studio — power rack, cable machine, dumbbells up to 40 kg.
                Maximum 4 people at a time. During personal training, just you and your trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Trainers and rates</h2>
              <p>
                Seven independent trainers. Specialisations: strength, nutrition, women’s training,
                posture, technique and small group. Rates from €299 per 4 weeks. First intro always free.
                You pay your trainer directly. No membership, no contract. For
                rehabilitation or physiotherapy we’ll refer you out — we don’t have a
                physiotherapist on staff.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Open Gym for independent training</h2>
              <p>
                Prefer to train on your own? Open Gym offers 60-minute sessions from €7.25 per visit.
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
