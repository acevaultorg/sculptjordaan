import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Engels-sprekende Personal Trainer in Amsterdam — SculptClub" },
  description:
    "Internationaal team, expat-collega's of zelf liever in het Engels trainen? Alle trainers bij SculptClub coachen vloeiend in het Engels. Gratis intake.",
  keywords: [
    "engels sprekende personal trainer amsterdam",
    "english personal trainer amsterdam",
    "expat personal trainer amsterdam",
    "internationale personal trainer amsterdam",
    "engels personal trainer jordaan",
    "tweetalige personal trainer amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/engels-sprekende-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/engels-sprekende-personal-trainer-amsterdam",
      en: "/en/blog/english-speaking-personal-trainer-amsterdam",
    },
  },
};

export default function EngelsSprekendePTAmsterdamNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Engels-sprekende personal trainer", url: "/nl/blog/engels-sprekende-personal-trainer-amsterdam" }]} />
      <BlogPostingJsonLd title="Engels-sprekende Personal Trainer in Amsterdam" description="Waarom alle trainers bij SculptClub vloeiend coachen in het Engels, en wat dat betekent voor expats, internationale werknemers en Nederlanders met een voorkeur voor Engels." url="/nl/blog/engels-sprekende-personal-trainer-amsterdam" datePublished="2026-04-15" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Engels-sprekende Personal Trainer in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />15 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-1.jpeg" alt="SculptClub privé studio in de Jordaan, Amsterdam" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Ongeveer één op de vijf Amsterdammers is niet-Nederlandstalig. Veel mensen
                werken in internationale teams, studeren in het Engels of wonen hier tijdelijk
                voor een project. Grote sportscholen zeggen meestal "sommige trainers spreken
                Engels" — en overhandigen vervolgens een contract in het Nederlands. Voor
                effectief personal training-coaching is dat niet genoeg. Cues, vragen,
                progressie en voedingsgesprekken werken het beste in de taal die je het beste
                beheerst.
              </p>
              <p>
                Bij SculptClub in de Jordaan coacht elke trainer vloeiend in het Engels — niet
                "genoeg om te overleven," maar daadwerkelijk coaching-fluent. Geschikt voor
                expats, internationale professionals én Nederlanders die liever in het Engels
                trainen (bijvoorbeeld omdat ze in een Engelstalig team werken).
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom taal in de studio er echt toe doet</h2>
              <p>
                Als een squat scheef gaat, geeft een goede trainer drie cues in vijf seconden:
                "heupen naar achter," "borst omhoog," "druk door je hiel." In je tweede taal
                wordt diezelfde cue-stream gokken. Je verliest het tempo van de sessie en kleine
                technische fouten stapelen zich op. Over maanden verschilt dat tussen gestage
                vooruitgang en stagnatie.
              </p>
              <p>
                Nog belangrijker zijn de gesprekken eromheen: slaap, stress, voeding,
                menstruatiecyclus, blessuregeschiedenis. Die bepalen het programma meer dan de
                oefeningen zelf. Als je een rugklacht niet precies in je tweede taal kunt
                uitleggen, beschrijf je hem onder en plant de trainer de volgende sessie zonder
                het volledige beeld.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Elke trainer, tweetalig</h2>
              <ul>
                <li><strong>Alex</strong> — Kracht, calisthenics, herstel. NL/EN/PT. €69/60 min.</li>
                <li><strong>Eva</strong> — Diëtist én personal trainer. Kracht en voeding. NL/EN.</li>
                <li><strong>Hamish</strong> — Fysiotherapeut BSc. Revalidatie, blessurepreventie. NL/EN.</li>
                <li><strong>Gezina</strong> — Vrouwentraining, kracht, prestatie. NL/EN. Zie ook de{" "}
                  <a href="/nl/blog/vrouwelijke-personal-trainer-amsterdam" className="text-brand hover:underline">gids voor een vrouwelijke trainer</a>.</li>
                <li><strong>Andrea</strong> — Kracht, houding, techniek. NL/EN. €45/45 min.</li>
                <li><strong>Dara</strong> — Personal training + small group. NL/EN.</li>
                <li><strong>Jearmey</strong> — Kracht, vetverlies, atletische prestatie. NL/EN.</li>
              </ul>
              <p>
                Bekijk de volledige <a href="/nl/vind-jouw-personal-trainer" className="text-brand hover:underline">trainerpagina</a> voor
                bios, specialisaties en Instagram-profielen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Veelgestelde vragen van expats</h2>

              <h3 className="text-xl font-bold mt-8 mb-3">"Moet ik Nederlands spreken?"</h3>
              <p>
                Nee. Intake, sessies, WhatsApp-communicatie (deurcode, herplannen), facturen en
                studiobewegwijzering werken in het Engels. De{" "}
                <a href="/nl/gratis-intake" className="text-brand hover:underline">gratis intake</a> en{" "}
                <a href="/nl/prijzen" className="text-brand hover:underline">prijzenpagina</a> zijn
                beide beschikbaar in het Engels.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">"Factuur op bedrijfsnaam mogelijk?"</h3>
              <p>
                Voor <a href="/nl/blog/studio-huren-personal-trainer-amsterdam" className="text-brand hover:underline">studio-huur</a> standaard.
                Voor personal training stuurt elke trainer zelf een factuur — de meesten kunnen
                deze op bedrijfsnaam met btw-nummer uitsturen. Of het fiscaal aftrekbaar is,
                bespreek je met je accountant. Zie ook de{" "}
                <a href="/nl/blog/zakelijk-personal-training-amsterdam" className="text-brand hover:underline">zakelijke personal training-gids</a>.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">"Ik woon in Zuidas / Oost / Noord. Is de Jordaan praktisch?"</h3>
              <p>
                De Jordaan ligt centraal: lopend vanuit Centrum, 10 minuten fietsen vanuit
                Zuidas en bereikbaar vanaf Noord met de gratis IJ-pont. Dagelijks geopend van
                06:30 tot 22:00. Zie de wijkspecifieke gidsen:{" "}
                <a href="/nl/blog/personal-trainer-amsterdam-centrum" className="text-brand hover:underline">Centrum</a>,{" "}
                <a href="/nl/blog/personal-trainer-amsterdam-zuid" className="text-brand hover:underline">Zuid</a>,{" "}
                <a href="/nl/blog/personal-trainer-amsterdam-noord" className="text-brand hover:underline">Noord</a>,{" "}
                <a href="/nl/blog/personal-trainer-amsterdam-oost" className="text-brand hover:underline">Oost</a>,{" "}
                <a href="/nl/blog/personal-trainer-amsterdam-west" className="text-brand hover:underline">West</a>.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">"Ik ben maar 3 maanden in Amsterdam."</h3>
              <p>
                Prima. Geen contract, geen opzegtermijn. Je betaalt per sessie (of een kleine
                bundel) en stopt wanneer je weg bent. Zie de{" "}
                <a href="/nl/blog/sportschool-zonder-abonnement-amsterdam" className="text-brand hover:underline">sportschool zonder abonnement-gids</a>{" "}
                voor uitleg over het pay-as-you-go model.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Praktisch</h2>
              <ul>
                <li><strong>Boeken:</strong> Acuity online scheduler in het Engels — één klik herplannen, e-mailbevestiging.</li>
                <li><strong>Deurcode:</strong> Via WhatsApp de avond tevoren (niet per e-mail).</li>
                <li><strong>Annuleren:</strong> Altijd gratis. Geen 24-uursregel, geen 12-uursregel.</li>
                <li><strong>Betalen:</strong> Creditcard, Apple Pay, Google Pay. Studio-huur ook op factuur.</li>
                <li><strong>Faciliteiten:</strong> Privé studio in de Jordaan. Douche en kleedruimte aanwezig.</li>
              </ul>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
                <a href="/nl/blog/vrouwelijke-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Vrouwelijke personal trainer</p></a>
                <a href="/nl/blog/wat-kost-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Wat kost personal training?</p></a>
                <a href="/nl/blog/sportschool-zonder-abonnement-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool zonder abonnement</p></a>
                <a href="/nl/blog/zakelijk-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Zakelijk personal training</p></a>
                <a href="/nl/blog/voedingscoach-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Voedingscoach in Amsterdam</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Plan een gratis intake in het Engels</h3>
              <p className="text-muted-foreground mb-6">Ontmoet de trainer, bespreek je doel, probeer de studio. Geen verplichting.</p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Bekijk trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
