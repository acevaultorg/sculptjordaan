import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Vrouwelijke Personal Trainer in Amsterdam — SculptClub" },
  description:
    "Op zoek naar een vrouwelijke personal trainer in Amsterdam? Bij SculptClub train je met Gezina, Eva of Andrea in een privé studio. Gratis intake.",
  keywords: [
    "vrouwelijke personal trainer amsterdam",
    "vrouw personal trainer amsterdam",
    "personal trainer vrouwen amsterdam",
    "vrouwelijke coach amsterdam",
    "prive studio vrouwen amsterdam",
    "personal trainer jordaan vrouw",
  ],
  alternates: {
    canonical: "/nl/blog/vrouwelijke-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/vrouwelijke-personal-trainer-amsterdam",
      en: "/en/blog/female-personal-trainer-amsterdam",
    },
  },
};

export default function VrouwelijkePTAmsterdamNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Vrouwelijke personal trainer", url: "/nl/blog/vrouwelijke-personal-trainer-amsterdam" }]} />
      <BlogPostingJsonLd title="Vrouwelijke Personal Trainer in Amsterdam" description="Waarom veel vrouwen liever trainen met een vrouwelijke personal trainer en welke opties je hebt bij SculptClub." url="/nl/blog/vrouwelijke-personal-trainer-amsterdam" datePublished="2026-04-15" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Vrouwelijke Personal Trainer in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />15 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/dumbbell-rack.jpeg" alt="Dumbbell rek in de privé studio van SculptClub Amsterdam" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Steeds meer vrouwen in Amsterdam kiezen voor een vrouwelijke personal trainer.
                Niet uit principe, maar uit praktische overwegingen: technische coaching van
                iemand die hetzelfde lichaam heeft, vragen over hormonen en menstruatiecyclus
                zonder ongemak, en een trainingsruimte die aanvoelt als jouw ruimte in plaats
                van de sportschool van iemand anders. Bij SculptClub in de Jordaan werken
                drie vrouwelijke trainers. Geen drukke sportschool, geen opdringerige blikken —
                alleen jij, je trainer en de privé studio.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom kiezen voor een vrouwelijke trainer?</h2>
              <p>
                Er is geen enkel wetenschappelijk bewijs dat vrouwelijke trainers beter zijn
                dan mannelijke. Kwaliteit hangt af van de persoon, niet van het geslacht. Maar
                voor veel vrouwen maakt het verschil op een aantal concrete punten:
              </p>
              <ul>
                <li><strong>Lichaamsbegrip:</strong> Technieken uitleggen voor heupen, core en onderrug vanuit eigen ervaring landen soms direct</li>
                <li><strong>Hormonale context:</strong> Trainen rond je cyclus, zwangerschap, postpartum of menopauze bespreek je makkelijker met een vrouw die het heeft meegemaakt</li>
                <li><strong>Comfort bij krachttraining:</strong> Niet iedereen vindt het prettig om een zware squat of deadlift voor het eerst te doen met een mannelijke trainer kijkend</li>
                <li><strong>Rolmodel:</strong> Zien dat een vrouw zwaar kan tillen, sterker is dan je denkt en moeiteloos door het gewichtenrek navigeert — dat verandert hoe je jezelf ziet</li>
              </ul>
              <p>
                Deze punten gelden niet voor elke vrouw. Voor sommigen maakt het werkelijk geen
                verschil en trainen ze net zo fijn met een mannelijke trainer. Dat is ook prima.
                Maar als het voor jou wél uitmaakt, is het goed om te weten dat je niet hoeft te
                schipperen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">De drie vrouwelijke trainers bij SculptClub</h2>
              <p>
                SculptClub heeft drie vrouwelijke trainers. Elke trainer is zelfstandig en
                bepaalt haar eigen aanpak. Kies op basis van wat jij zoekt, niet op wie het
                eerst beschikbaar is.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Gezina — Vrouwentraining, kracht, prestatie</h3>
              <p>
                Gezina is specifiek gespecialiseerd in vrouwentraining. Ze werkt met vrouwen
                die serieus willen worden in krachttraining, prestatiegericht trainen of
                samen een langetermijnpad willen uitstippelen. Haar aanpak is technisch,
                gestructureerd en uitdagend zonder performatief te zijn. Boek een{" "}
                <a href="/nl/plan-gratis-intake-met-gezina" className="text-brand hover:underline">gratis intake met Gezina</a>{" "}
                als je klaar bent om écht sterker te worden.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Eva — Kracht en voeding</h3>
              <p>
                Eva is diëtist én personal trainer. Een unieke combinatie: ze coacht je niet
                alleen in de studio, maar kijkt ook naar wat je eet en hoe dat je training en
                herstel beïnvloedt. Handig als je doelen rond afvallen, aankomen, energie of
                lichaamssamenstelling liggen. Meer lezen over de voedingskant? Zie{" "}
                <a href="/nl/blog/voedingscoach-amsterdam" className="text-brand hover:underline">voedingscoach in Amsterdam</a>.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Andrea — Kracht, houding, techniek</h3>
              <p>
                Andrea werkt met sessies van 45 minuten voor €45. Haar focus ligt op houding,
                techniek en het opbouwen van een sterke basis. Fijn als je pas begint met
                krachttraining, een zittend beroep hebt of eerst goed wil leren bewegen voordat
                je zwaarder gaat trainen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Privé studio — waarom dat voor veel vrouwen de doorslag geeft</h2>
              <p>
                Een grote sportschool is voor veel vrouwen geen comfortabele omgeving om
                krachttraining te leren. De bench press area is bezet door mannen die elkaar
                aanmoedigen, de squat rack-wachtrij voelt als een examen en advies uit onverwachte
                hoek is soms irritanter dan nuttig. Een{" "}
                <a href="/nl/blog/prive-sportschool-vs-grote-sportschool" className="text-brand hover:underline">privé studio versus grote sportschool</a>{" "}
                is een ander universum: je krijgt de deurcode via WhatsApp, je bent er alleen
                met je trainer of alleen als je in{" "}
                <a href="/nl/open-gym" className="text-brand hover:underline">Open Gym</a> zit,
                en niemand bekijkt jou of je techniek.
              </p>
              <p>
                De studio is dagelijks open van 06:30 tot 22:00. Vroege ochtend, lunchpauze,
                na het werk — je plant op het moment dat jou past, niet op wanneer de
                sportschool het minst druk is.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat kost een vrouwelijke personal trainer in Amsterdam?</h2>
              <p>
                Bij SculptClub bepalen trainers zelf hun tarief. Andrea werkt met 45-minuten
                sessies vanaf €45. Bij Gezina en Eva vraag je het tarief op tijdens de gratis
                intake. In Amsterdam liggen tarieven voor personal training typisch tussen €45
                en €85 per sessie. Zie onze{" "}
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="text-brand hover:underline">eerlijke uitleg over wat personal training in Amsterdam kost</a>{" "}
                voor meer context.
              </p>
              <p>
                Geen abonnement, geen contract, geen opzegtermijn. Je annuleert altijd gratis —
                ook 10 minuten voor de sessie. Dat ontspant veel meer dan je denkt: je boekt
                wanneer je kunt en trekt terug zonder rekening houden met een beleid.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Zo begin je</h2>
              <ol>
                <li><strong>Kies een trainer die bij je past.</strong> Lees de{" "}
                  <a href="/nl/vind-jouw-personal-trainer" className="text-brand hover:underline">trainerpagina</a> of
                  doe de korte matching-quiz.</li>
                <li><strong>Plan een gratis intake.</strong> Eerste sessie is altijd gratis.
                  Je bespreekt je doel, laat je techniek zien en bekijkt of de samenwerking klikt.</li>
                <li><strong>Beslis daarna.</strong> Geen druk. Past het niet, dan probeer je
                  een andere trainer of je begint met{" "}
                  <a href="/nl/blog/krachttraining-voor-beginners" className="text-brand hover:underline">krachttraining voor beginners</a>{" "}
                  op eigen tempo in Open Gym.</li>
              </ol>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/krachttraining-voor-vrouwen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor vrouwen</p></a>
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
                <a href="/nl/blog/personal-training-afvallen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training voor afvallen</p></a>
                <a href="/nl/blog/voedingscoach-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Voedingscoach in Amsterdam</p></a>
                <a href="/nl/blog/personal-trainer-na-blessure-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer na een blessure</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training?</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Plan je gratis intake met een vrouwelijke trainer</h3>
              <p className="text-muted-foreground mb-6">Kies Gezina, Eva of Andrea. Eerste sessie is gratis, geen verplichtingen.</p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Bekijk trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
