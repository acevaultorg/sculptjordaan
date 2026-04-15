import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Krachttraining voor Vrouwen in Amsterdam — SculptClub",
  description:
    "Krachttraining is de beste investering in je gezondheid. Personal training speciaal voor vrouwen bij SculptClub Amsterdam. Gratis intake.",
  keywords: [
    "krachttraining voor vrouwen",
    "krachttraining vrouwen amsterdam",
    "personal trainer vrouwen amsterdam",
    "gym voor vrouwen amsterdam",
    "fitness vrouwen amsterdam",
    "krachttraining vrouwen beginners",
  ],
  alternates: {
    canonical: "/nl/blog/krachttraining-voor-vrouwen",
    languages: {
      nl: "/nl/blog/krachttraining-voor-vrouwen",
      en: "/en/blog/strength-training-for-women",
    },
  },
};

export default function KrachttrainingVoorVrouwenNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Krachttraining voor vrouwen", url: "/nl/blog/krachttraining-voor-vrouwen" }]} />
      <BlogPostingJsonLd title="Krachttraining voor Vrouwen in Amsterdam" description="Waarom krachttraining de beste investering is voor vrouwen en hoe je begint bij SculptClub." url="/nl/blog/krachttraining-voor-vrouwen" datePublished="2026-04-03" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Krachttraining voor Vrouwen in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />3 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/dumbbell-rack.jpeg" alt="Dumbbell rek bij SculptClub Amsterdam" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Krachttraining is niet alleen voor mannen. Het is de meest onderschatte investering
                in vrouwelijke gezondheid. Sterkere botten, betere houding, meer energie, en een
                lichaam dat functioneel fit is tot op hoge leeftijd. Toch trainen veel vrouwen nog
                steeds alleen cardio. Tijd om dat te veranderen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom krachttraining juist voor vrouwen belangrijk is</h2>
              <p>
                Vrouwen verliezen na hun dertigste gemiddeld 3-5% spiermassa per decennium. Na de
                overgang versnelt dat. Krachttraining keert dit proces om. De voordelen gaan verder
                dan spieropbouw:
              </p>
              <ul>
                <li><strong>Botdichtheid:</strong> Krachttraining stimuleert botaanmaak en vermindert het risico op osteoporose</li>
                <li><strong>Stofwisseling:</strong> Meer spiermassa betekent een hogere rustverbranding, ook op de bank</li>
                <li><strong>Houding:</strong> Sterke rug- en schouderspieren corrigeren een zittende werkhouding</li>
                <li><strong>Mentale gezondheid:</strong> Krachttraining verlaagt stress, angst en depressieve klachten</li>
                <li><strong>Functionele kracht:</strong> Boodschappen tillen, traplopen, kinderen optillen — alles wordt makkelijker</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">&quot;Word ik niet te gespierd?&quot;</h2>
              <p>
                Nee. Vrouwen produceren een fractie van het testosteron dat mannen hebben. Het
                beeld van extreem gespierde vrouwen dat je online ziet is het resultaat van
                jarenlange specifieke training, strikte voeding en soms supplementen. Normale
                krachttraining geeft je een strak, sterk lichaam — geen bodybuildersilhouet.
                Je trainer past je programma aan op jouw doelen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Privé trainen: geen blikken, geen ongemak</h2>
              <p>
                Veel vrouwen voelen zich ongemakkelijk in de krachthoek van een grote sportschool.
                De dominantie van mannen, de blikken, het gevoel bekeken te worden. Bij SculptClub
                train je in een <a href="/nl/studio" className="text-brand hover:underline">privé
                studio</a> — alleen jij en je trainer. De deurcode krijg je via WhatsApp
                de avond tevoren. Geen receptie, geen wachttijden, geen publiek.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Een programma op maat</h2>
              <p>
                Geen standaardschema. Je trainer maakt een programma gebaseerd op jouw doelen,
                je ervaring en je beschikbare tijd. Of je nu wilt afvallen, sterker worden, of
                gewoon fitter voelen — het plan past bij jou. Na elke paar weken evalueert je
                trainer de voortgang en past aan.
              </p>
              <p>
                Bij SculptClub werken vijf trainers met uiteenlopende specialisaties. Van{" "}
                <a href="/nl/blog/voedingscoach-amsterdam" className="text-brand hover:underline">voedingscoaching</a> tot{" "}
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="text-brand hover:underline">fysiotherapie</a> —
                je vindt de expertise die bij je past.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hoe begin je?</h2>
              <p>
                Stap 1: Kies een trainer op onze{" "}
                <a href="/nl/vind-jouw-personal-trainer" className="text-brand hover:underline">trainerspagina</a>.
                Stap 2: Plan je gratis intake. Stap 3: Begin. De eerste kennismaking is
                altijd gratis en vrijblijvend. Personal training begint vanaf €45 per sessie.
                Geen abonnement, geen contract. Je <a href="/nl/faqs" className="text-brand hover:underline">annuleert
                altijd gratis</a>.
              </p>
              <p>
                Liever zelfstandig trainen? Met <a href="/nl/open-gym" className="text-brand hover:underline">Open
                Gym</a> kun je zelfstandig trainen in onze privé studio, vanaf €5,75 per sessie.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/krachttraining-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor beginners</p></a>
                <a href="/nl/blog/afvallen-met-krachttraining" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Afvallen met krachttraining</p></a>
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
                <a href="/nl/blog/personal-trainer-na-blessure-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer na een blessure</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Klaar om sterker te worden?</h3>
              <p className="text-muted-foreground mb-6">Plan een gratis intake en ontdek wat krachttraining voor jou kan doen.</p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Bekijk trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
