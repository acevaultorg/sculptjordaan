import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Trainer Amsterdam Noord — SculptClub",
  description:
    "Wonen of werken in Amsterdam Noord en op zoek naar een personal trainer? Eerlijk overzicht van het aanbod, plus een rustig alternatief in de Jordaan.",
  keywords: [
    "personal trainer amsterdam noord",
    "personal training amsterdam noord",
    "sportschool amsterdam noord",
    "ndsm personal trainer",
    "boutique gym amsterdam noord",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-amsterdam-noord",
    languages: {
      nl: "/nl/blog/personal-trainer-amsterdam-noord",
      en: "/en/blog/personal-trainer-amsterdam-north",
    },
  },
  openGraph: {
    title: "Personal Trainer Amsterdam Noord — SculptClub",
    description:
      "Eerlijk overzicht van personal training in Amsterdam Noord, plus een privé studio op 10 minuten via de pont.",
    url: "/nl/blog/personal-trainer-amsterdam-noord",
    type: "article",
  },
};

const faqs = [
  {
    question: "Hoe lang doe je vanaf Noord over de reis naar de Jordaan?",
    answer:
      "Vanaf NDSM met de pont en daarna fietsen ben je in 10 tot 15 minuten op de Egelantiersgracht. Vanaf Buiksloterweg via Centraal en de Westermarkt is het 12 tot 15 minuten. Met de auto reken op 20 minuten plus parkeren in een Jordaan-garage.",
  },
  {
    question: "Zijn er goede personal trainers in Amsterdam Noord zelf?",
    answer:
      "Ja, maar het aanbod is overzichtelijk. De meeste opties zijn grote chain-gyms met PT als bijproduct, of trainers die een uurtje in een sportschool huren. Een complete privé studio met meerdere zelfstandige trainers is in Noord nog zeldzaam.",
  },
  {
    question: "Kan ik op proef komen voordat ik kies?",
    answer:
      "Zeker. Elke trainer bij SculptClub biedt een gratis intakegesprek aan. Je ervaart de studio, de trainer en het beweegplan voordat je iets boekt.",
  },
  {
    question: "Wat kost personal training bij SculptClub?",
    answer:
      "Trainers stellen hun eigen tarief in. Vanaf €45 per sessie. Er is geen abonnement, geen contract en de eerste intake is gratis. Je rekent direct met je trainer af.",
  },
  {
    question: "En als ik liever zelf train zonder trainer?",
    answer:
      "Open Gym geeft je toegang tot dezelfde privé studio voor solo trainingen. Vanaf €29 per 4 weken voor 4 sessies, opzeggen kan altijd. Handig als je in Noord woont en af en toe in het centrum bent.",
  },
];

export default function PersonalTrainerAmsterdamNoordNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Personal trainer Amsterdam Noord", url: "/nl/blog/personal-trainer-amsterdam-noord" },
        ]}
      />
      <BlogPostingJsonLd
        title="Personal Trainer Amsterdam Noord"
        description="Eerlijk overzicht van personal training in Amsterdam Noord en een rustig alternatief in de Jordaan."
        url="/nl/blog/personal-trainer-amsterdam-noord"
        datePublished="2026-04-08"
        dateModified="2026-04-08"
      />
      <FaqJsonLd faqs={faqs} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Personal Trainer in Amsterdam Noord
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />8 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/sculpt-wall-logo.jpeg" alt="SculptClub privé studio in de Jordaan, dichtbij Amsterdam Noord via de pont" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Amsterdam Noord is in tien jaar tijd veranderd van industrie­gebied naar een van de meest
                geliefde plekken om te wonen. NDSM, Overhoeks, Buiksloterham — overal nieuwe lofts,
                kantoren en koffiezaken. Maar vraag een Noorderling waar hij of zij rustig met een
                personal trainer kan trainen, en het wordt stiller. Het aanbod aan boutique studios is
                in Noord nog beperkt. Dit artikel kijkt eerlijk naar wat er is, en waarom een korte rit
                naar de Jordaan vaak de prettigste oplossing blijkt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat heeft Noord lokaal te bieden?</h2>
              <p>
                In Noord vind je vooral grote ketens. Basic-Fit zit op meerdere plekken, TrainMore is in
                opmars, en daarnaast zijn er een paar CrossFit-boxen en bootcamp-aanbieders. Allemaal
                prima als je houdt van groepstraining, drukte en flexibele openingstijden tegen een lage
                prijs. Voor iemand die juist één-op-één wil trainen, in een rustige omgeving en met een
                vaste trainer, is het aanbod beperkter. Een aantal zelfstandige trainers werkt in Noord
                vanuit huurplekken in grotere gyms — dat betekent dat je sessies tussen tientallen
                anderen plaatsvinden, op apparaten die je deelt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom een trainer aan de overkant van het IJ overwegen?</h2>
              <p>
                Noord en de Jordaan voelen ver, maar de kaart liegt. Vanaf NDSM ben je met de pont in
                vijf minuten op het Centraal Station. Daarna is het tien minuten fietsen naar de
                Egelantiersgracht. Vanaf Buiksloterweg is het zelfs sneller — twee minuten pont, daarna
                via de Haarlemmerstraat zo de Jordaan in. Dat is in totaal niet veel langer dan vanaf
                veel adressen in Noord naar een sportschool aan de andere kant van het stadsdeel. En
                anders dan een kettingweg-locatie kom je terecht in een privé studio waar alleen jij en
                je trainer zijn.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat Noord-klanten zeggen over de Jordaan-studio</h2>
              <p>
                Een terugkerend compliment van klanten die uit Noord komen: de transitie van pont naar
                studio voelt als een kleine reset. Je laat de drukte van het Centraal-perron achter je,
                de Jordaan ontvouwt zich met grachten en kleine straatjes, en binnen vijftien minuten
                til je gewichten in een ruimte zonder spiegelende ogen of wachtrijen. Voor wie thuis of
                op kantoor de hele dag op een scherm zit is dat fysieke schakelmoment vaak waardevoller
                dan een gym op vijf minuten lopen waar het altijd vol is.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Reistijden, parkeren en pont</h2>
              <p>
                De ponten varen 24/7 en zijn gratis. Vanaf NDSM-werf vertrekt de pont naar Centraal elke
                tien minuten overdag. Vanaf Buiksloterweg en IJplein is de frequentie nog hoger. Zet je
                fiets op de pont en je hebt geen vervoer-stress. Wil je toch met de auto? In de Jordaan
                geldt betaald parkeren, maar de garage onder Markthal of op het Marnixplein zit op
                loopafstand. Voor een uur trainen met twee uur parkeren is de Jordaan goed te doen,
                zeker buiten kantooruren.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Vijf trainers, één studio, geen contract</h2>
              <p>
                Bij SculptClub werken vijf onafhankelijke trainers met verschillende specialisaties:
                krachttraining, voeding, fysiotherapie, houding en techniek. Je kiest de trainer die
                bij jouw doel past — niet andersom. Tarieven beginnen bij €45 per sessie, de eerste
                kennismaking is altijd gratis. Geen abonnement, geen lange contracten, geen verborgen
                kosten. Annuleren is altijd gratis. De studio is dagelijks open van 06:30 tot 22:00,
                dus voor of na je werk in Centrum of Zuidas past het meestal moeiteloos in je dag.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Open Gym voor zelfstandige trainingen</h2>
              <p>
                Niet elke training hoeft begeleid te zijn. Open Gym geeft je toegang tot dezelfde privé
                studio voor solo sessies van 60 minuten. Vier sessies per maand beginnen bij €29.
                Onbeperkt traint vanaf €89 per vier weken. Geen contract, geen opzegtermijn — een
                praktische tussenoplossing voor wie in Noord woont en af en toe in het centrum is voor
                werk of afspraken.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Veelgestelde vragen</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/vind-jouw-personal-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Vind jouw personal trainer</p></a>
                <a href="/nl/gratis-intake" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Plan een gratis intake</p></a>
                <a href="/nl/blog/personal-trainer-amsterdam-centrum" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam Centrum</p></a>
                <a href="/nl/prijzen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Bekijk onze prijzen</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Kom een keer kennismaken</h3>
              <p className="text-muted-foreground mb-6">Pak de pont, fiets de Jordaan in, en train in een rustige privé studio. Eerste intake gratis.</p>
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
