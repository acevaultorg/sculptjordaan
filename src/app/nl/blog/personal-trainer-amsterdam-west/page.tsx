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
    "Op zoek naar een personal trainer in Amsterdam West of Oud-West? SculptClub in de Jordaan is 5 minuten fietsen. Gratis intake, vanaf €45/sessie.",
  keywords: [
    "personal trainer amsterdam west",
    "personal trainer oud-west amsterdam",
    "personal training amsterdam west",
    "sportschool amsterdam west",
    "personal trainer westerpark",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-amsterdam-west",
    languages: {
      nl: "/nl/blog/personal-trainer-amsterdam-west",
      en: "/en/blog/personal-trainer-amsterdam-west",
    },
  },
};

export default function PersonalTrainerAmsterdamWestNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Personal trainer Amsterdam West", url: "/nl/blog/personal-trainer-amsterdam-west" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Trainer Amsterdam West & Oud-West"
        description="Vind een personal trainer in Amsterdam West. SculptClub in de Jordaan is 5 minuten fietsen."
        url="/nl/blog/personal-trainer-amsterdam-west"
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
                  2 april 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/entrance.jpeg"
                alt="Ingang SculptClub studio aan de Egelantiersgracht"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Woon je in Amsterdam West, Oud-West of rond het Westerpark en zoek je een personal
                trainer? Dan ken je het probleem: de grote sportscholen in de buurt zijn druk, en
                echt persoonlijke begeleiding vind je er zelden. SculptClub in de Jordaan zit op
                5 minuten fietsen van de Kinkerstraat en het Vondelpark — dichterbij dan je denkt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom trainers uit West naar de Jordaan komen</h2>
              <p>
                Amsterdam West en Oud-West zijn geweldige buurten om te wonen, maar het aanbod aan
                serieuze personal training is beperkt. De meeste opties zijn grote ketens (Basic-Fit,
                TrainMore) of kleine yogastudio&apos;s. Voor krachttraining met een gediplomeerde
                personal trainer moet je iets verder kijken. De Jordaan grenst direct aan West — via
                de Rozengracht of het Vondelpark ben je er in een paar minuten.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat is anders aan een privé studio?</h2>
              <p>
                Bij SculptClub train je niet in een volle sportschool. Je krijgt een volledige privé
                studio met professionele apparatuur — power rack, kabelmachine, dumbbells tot 50 kg,
                assault bike. Maximaal 3 personen tegelijk, maar bij personal training ben je alleen
                met je trainer. Geen wachten op apparaten, geen afleiding, geen ongemakkelijke
                situaties. De deurcode ontvang je via WhatsApp de avond tevoren.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Vijf trainers, elk met een eigen specialisatie</h2>
              <p>
                Bij SculptClub werken vijf onafhankelijke trainers. Alex is gespecialiseerd in
                krachttraining en calisthenics. Eva combineert personal training met voedingsadvies
                als gediplomeerd diëtist. Hamish is fysiotherapeut en werkt met klanten die
                revalideren of specifieke klachten hebben. Andrea focust op techniek en houding.
                Dara biedt personal training en small group sessies aan. Elk met eigen tarieven,
                elk met een gratis intake.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Kosten en flexibiliteit</h2>
              <p>
                Personal training bij SculptClub begint vanaf €45 per sessie. De eerste kennismaking
                is altijd gratis. Geen abonnement, geen contract — je boekt per sessie en annuleert
                altijd gratis. Wij rekenen 0% commissie aan onze trainers, dus wat je betaalt gaat
                volledig naar jouw trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Bereikbaarheid vanuit West</h2>
              <p>
                SculptClub zit aan de Egelantiersgracht 424. Vanuit de Kinkerstraat fiets je in
                5 minuten via de Rozengracht. Vanuit het Westerpark rij je in 8 minuten via de
                Haarlemmerstraat. Met de tram (lijn 13 of 17) stap je uit bij de Westermarkt,
                2 minuten lopen. Er is fietsparkeergelegenheid direct voor de deur.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Zelf trainen? Dat kan ook</h2>
              <p>
                Niet iedereen zoekt een personal trainer. Als je zelfstandig wilt trainen in een
                rustige omgeving, biedt SculptClub Open Gym aan. Boek een sessie van 60 minuten
                met toegang tot alle apparatuur. Lidmaatschap vanaf €29 per 4 weken — geen contract,
                stop wanneer je wilt.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer in Amsterdam: zo vind je de beste match</p></a>
                <a href="/nl/blog/sportschool-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool Jordaan Amsterdam</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training?</p></a>
                <a href="/nl/blog/personal-training-afvallen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training voor afvallen</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Gratis kennismaken?</h3>
              <p className="text-muted-foreground mb-6">
                Boek een gratis intake met een van onze trainers. 5 minuten fietsen vanuit West.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">
                  Bekijk trainers
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink href="/nl/open-gym" size="lg" variant="outline">
                  Open Gym bekijken
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
