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
    "Op zoek naar een personal trainer in De Pijp, Amsterdam? SculptClub in de Jordaan is 10 minuten fietsen. Gratis intake, trainers vanaf €45.",
  keywords: [
    "personal trainer de pijp",
    "personal trainer de pijp amsterdam",
    "sportschool de pijp amsterdam",
    "fitness de pijp",
    "personal training amsterdam zuid",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-de-pijp-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-de-pijp-amsterdam",
      en: "/en/blog/personal-trainer-de-pijp-amsterdam",
    },
  },
};

export default function PersonalTrainerDePijpNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer De Pijp", url: "/nl/blog/personal-trainer-de-pijp-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer De Pijp Amsterdam" description="Vind een personal trainer nabij De Pijp. SculptClub in de Jordaan is 10 minuten fietsen." url="/nl/blog/personal-trainer-de-pijp-amsterdam" datePublished="2026-04-02" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer in De Pijp, Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />2 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-2.jpeg" alt="SculptClub studio interieur" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                De Pijp is een van de levendigste buurten van Amsterdam. Bekend om de Albert Cuypmarkt,
                de gezellige terrassen en de jonge, actieve bevolking. Maar als je serieus wilt trainen
                met een personal trainer, zijn de opties in De Pijp zelf beperkt. De meeste sportscholen
                zijn grote ketens zonder persoonlijke aandacht. SculptClub in de Jordaan biedt het
                alternatief — een privé studio op 10 minuten fietsen via het Vondelpark.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Van De Pijp naar de Jordaan</h2>
              <p>
                De afstand voelt groter dan hij is. Via het Vondelpark fiets je van de Ferdinand
                Bolstraat naar de Egelantiersgracht in ongeveer 10 minuten. Met tram 2 naar
                Leidseplein en 5 minuten lopen ben je er ook. En zodra je aankomt, hoef je niet
                te wachten — je hebt de studio voor jezelf.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom een privé studio?</h2>
              <p>
                In De Pijp zitten Basic-Fit en TrainMore op de Ceintuurbaan en Ferdinand Bolstraat.
                Druk, onpersoonlijk, en je deelt elk apparaat. Bij SculptClub train je in een volledig
                uitgeruste privé studio — power rack, kabelmachine, dumbbells tot 50 kg. Maximaal 3
                personen tegelijk. Bij personal training alleen jij en je trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Trainers en tarieven</h2>
              <p>
                Vijf onafhankelijke trainers. Specialisaties: kracht, voeding, fysiotherapie, posture,
                small group. Tarieven vanaf €45 per sessie. Eerste intake altijd gratis. 0% commissie —
                je betaalt je trainer direct. Geen abonnement, geen contract.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Open Gym voor zelfstandige sporters</h2>
              <p>
                Liever zelf trainen? Open Gym biedt sessies van 60 minuten vanaf €5,75 per bezoek.
                Boek een slot, ontvang je deurcode via WhatsApp en train in alle rust. Geen contract,
                stop wanneer je wilt.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam</p></a>
                <a href="/nl/blog/personal-trainer-amsterdam-west" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam West</p></a>
                <a href="/nl/blog/personal-trainer-amsterdam-centrum" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam Centrum</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training?</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Gratis kennismaken?</h3>
              <p className="text-muted-foreground mb-6">10 minuten fietsen via het Vondelpark.</p>
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
