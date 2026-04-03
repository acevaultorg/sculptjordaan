import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Personal Trainer Worden in Amsterdam — Zo Begin Je | SculptClub",
  description:
    "Wil je personal trainer worden in Amsterdam? Alles over starten als ZZP-trainer: studio, klanten, tarieven en hoe SculptClub je helpt groeien.",
  keywords: [
    "personal trainer worden amsterdam",
    "zzp personal trainer amsterdam",
    "freelance trainer amsterdam",
    "personal trainer starten",
    "eigen praktijk personal trainer",
    "studio huren trainer amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-worden-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-worden-amsterdam",
      en: "/en/blog/become-personal-trainer-amsterdam",
    },
  },
};

export default function PTWordenAmsterdamNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer worden", url: "/nl/blog/personal-trainer-worden-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer Worden in Amsterdam" description="Hoe start je als freelance personal trainer in Amsterdam? Studio, klanten, tarieven." url="/nl/blog/personal-trainer-worden-amsterdam" datePublished="2026-04-03" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer Worden in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />3 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-overview.jpeg" alt="SculptClub privé studio voor personal trainers" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Amsterdam is een van de beste steden om als personal trainer te werken. De
                vraag is groot, de markt groeit en steeds meer mensen investeren in
                persoonlijke begeleiding. Maar hoe begin je? En hoe vind je een studio
                zonder meteen hoge vaste lasten?
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat heb je nodig om te starten?</h2>
              <ul>
                <li><strong>Certificering:</strong> Een erkend diploma (NASM, EREPS, ALO, CIOS of vergelijkbaar). Zonder certificering kun je geen verzekering afsluiten.</li>
                <li><strong>KvK-inschrijving:</strong> Als ZZP&apos;er schrijf je je in bij de Kamer van Koophandel. Dit is binnen een dag geregeld.</li>
                <li><strong>Verzekering:</strong> Beroepsaansprakelijkheidsverzekering is verplicht. Kost circa €15-30/maand.</li>
                <li><strong>Trainingslocatie:</strong> Dit is het grootste obstakel. Een eigen studio huren kost €1.500-3.000/maand in Amsterdam. Of je huurt per uur.</li>
                <li><strong>Klanten:</strong> Instagram, mond-tot-mond, Google en platforms zijn de belangrijkste kanalen.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Het probleem: een studio vinden</h2>
              <p>
                De meeste startende trainers lopen vast op de locatie. Een eigen studio is
                te duur. Trainen in een park is weersafhankelijk. En grote sportscholen eisen
                vaak exclusiviteit of hoge commissies (30-50% van je omzet).
              </p>
              <p>
                De oplossing: huur een studio per uur. Geen vaste lasten, geen commissie,
                maximale flexibiliteit. Je betaalt alleen voor de uren die je gebruikt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">SculptClub: studio huren zonder gedoe</h2>
              <p>
                Bij <a href="/nl/word-trainer" className="text-brand hover:underline">SculptClub</a> huur
                je een volledig uitgeruste privé studio in Amsterdam Jordaan. Vanaf €12 per uur,
                zonder commissie. Wat je krijgt:
              </p>
              <ul>
                <li><strong>Professionele apparatuur:</strong> Powerrack, kabelmachine, dumbbells, cardio</li>
                <li><strong>Eigen profiel op de website:</strong> Met foto, bio en directe boekingslink</li>
                <li><strong>Klanten via de website:</strong> Honderden bezoekers per maand zoeken een trainer</li>
                <li><strong>0% commissie:</strong> Je houdt 100% van je inkomsten</li>
                <li><strong>Flexibel:</strong> Boek per uur, geen contract, stop wanneer je wilt</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Tarieven: wat kun je verdienen?</h2>
              <p>
                De meeste personal trainers in Amsterdam rekenen €45-90 per sessie. Bij
                SculptClub betaal je €12/uur voor de studio. Dat betekent dat je bij een
                tarief van €60 per sessie netto €48 overhoudt — zonder commissie, zonder
                vaste lasten.
              </p>
              <p>
                Met 4 sessies per dag, 5 dagen per week, is dat €960 netto per week aan
                studiohuur. Vergelijk dat met een eigen studio van €2.000/maand + apparatuur
                + onderhoud.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Klanten vinden in Amsterdam</h2>
              <p>
                De belangrijkste kanalen voor personal trainers in Amsterdam:
              </p>
              <ul>
                <li><strong>Google:</strong> Zorg dat je vindbaar bent. Een profiel op de SculptClub website helpt — we ranken hoog op &quot;personal trainer amsterdam&quot;</li>
                <li><strong>Instagram:</strong> Deel workouts, resultaten en behind-the-scenes content</li>
                <li><strong>Mond-tot-mond:</strong> Tevreden klanten zijn je beste marketing</li>
                <li><strong>Gratis intake:</strong> Bied een gratis kennismaking aan. De drempel verlagen is de beste conversietactiek</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Gratis kennismaking bij SculptClub</h2>
              <p>
                Benieuwd? <a href="/nl/word-trainer" className="text-brand hover:underline">Bekijk
                de volledige informatie</a> of stuur direct een WhatsApp. We plannen een
                gratis rondleiding in — kijk of de studio bij je past. Geen verplichtingen.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/studio-huren-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio huren als personal trainer</p></a>
                <a href="/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Trainingsruimte huren als ZZP-trainer</p></a>
                <a href="/nl/blog/gym-huren-per-uur-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym huren per uur</p></a>
                <a href="/nl/blog/fysiotherapie-studio-huren-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Fysiotherapie studio huren</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Klaar om te starten als trainer?</h3>
              <p className="text-muted-foreground mb-6">Bekijk de studio, de tarieven en wat we je bieden.</p>
              <ButtonLink href="/nl/word-trainer" size="lg">Word trainer bij SculptClub<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
