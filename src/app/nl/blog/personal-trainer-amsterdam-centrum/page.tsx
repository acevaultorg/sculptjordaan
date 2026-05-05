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
    "Op zoek naar een personal trainer in Amsterdam Centrum? SculptClub in de Jordaan is om de hoek. Gratis intake, trainers vanaf €45/sessie.",
  keywords: [
    "personal trainer amsterdam centrum",
    "personal training centrum amsterdam",
    "sportschool amsterdam centrum",
    "gym centrum amsterdam",
    "fitness amsterdam centrum",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-amsterdam-centrum",
    languages: {
      nl: "/nl/blog/personal-trainer-amsterdam-centrum",
      en: "/en/blog/personal-trainer-amsterdam-centrum",
    },
  },
};

export default function PersonalTrainerCentrumNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Personal trainer Amsterdam Centrum", url: "/nl/blog/personal-trainer-amsterdam-centrum" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Trainer Amsterdam Centrum"
        description="Vind een personal trainer nabij Amsterdam Centrum. SculptClub in de Jordaan is om de hoek."
        url="/nl/blog/personal-trainer-amsterdam-centrum"
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
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />2 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/sculpt-wall-logo.jpeg" alt="SculptClub logo op de muur in de studio" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Amsterdam Centrum is het kloppend hart van de stad. Druk, dynamisch en vol mogelijkheden —
                maar als het gaat om rustig trainen met een personal trainer, zijn de opties beperkt. De
                meeste sportscholen in het centrum zijn groot, druk en onpersoonlijk. SculptClub in de
                Jordaan biedt het alternatief: een privé studio op loopafstand van de Dam, Westermarkt
                en Leidseplein.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom niet in een grote gym trainen?</h2>
              <p>
                In het centrum staan sportscholen als Basic-Fit Kalverstraat en TrainMore Leidseplein.
                Voordeel: overal bereikbaar. Nadeel: in de spits is het aanschuiven bij elk apparaat.
                Personal training in een grote sportschool betekent trainen tussen tientallen andere
                sporters — niet de aandacht die je zoekt als je een trainer inhuurt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Een privé studio om de hoek</h2>
              <p>
                SculptClub zit aan de Egelantiersgracht in de Jordaan. Vanaf het Centraal Station fiets
                je in 10 minuten. Vanaf de Dam in 5 minuten. Tram 13 en 17 stoppen op de Westermarkt,
                2 minuten lopen. Je traint in een volledig uitgeruste privé studio — power rack,
                kabelmachine, dumbbells tot 50 kg — alleen jij en je trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Vijf trainers, gratis intake</h2>
              <p>
                Bij SculptClub werken vijf onafhankelijke trainers met specialisaties van krachttraining
                tot voeding en fysiotherapie. De eerste kennismaking is altijd gratis. Tarieven vanaf
                €45 per sessie. Geen abonnement, geen contract — boek per sessie en annuleer altijd
                gratis. Wij rekenen 0% commissie.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Ook zelfstandig trainen</h2>
              <p>
                Liever zelf trainen? Open Gym biedt sessies van 60 minuten in dezelfde privé studio.
                Vanaf €5,75 per sessie met het Intensief plan. Geen contract, stop wanneer je wilt.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam</p></a>
                <a href="/nl/blog/sportschool-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool Jordaan Amsterdam</p></a>
                <a href="/nl/blog/personal-trainer-amsterdam-west" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam West</p></a>
                <a href="/nl/blog/personal-trainer-amsterdam-noord" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam Noord</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training?</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Gratis kennismaken?</h3>
              <p className="text-muted-foreground mb-6">5 minuten fietsen vanaf de Dam.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Bekijk trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <ButtonLink href="/nl/open-gym" size="lg" variant="outline">Open Gym bekijken</ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
