import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Gym Huren per Uur Amsterdam: Flexibele Trainingsruimte voor ZZP-trainers — SculptClub",
  description:
    "Op zoek naar een gym of trainingsruimte huren per uur in Amsterdam? Alles over flexibele studio verhuur voor freelance personal trainers en fysiotherapeuten.",
  keywords: [
    "gym huren per uur amsterdam",
    "trainingsruimte huren per uur",
    "studio huren zzp trainer amsterdam",
    "privé gym huren amsterdam",
    "sportzaal huren per sessie amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/gym-huren-per-uur-amsterdam",
    languages: {
      nl: "/nl/blog/gym-huren-per-uur-amsterdam",
      en: "/en/blog/gym-rental-per-hour-amsterdam",
    },
  },
};

export default function BlogPostGymHurenPerUur() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Gym huren per uur Amsterdam", url: "/nl/blog/gym-huren-per-uur-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Gym Huren per Uur Amsterdam: Flexibele Trainingsruimte voor ZZP-trainers"
        description="Op zoek naar een gym of trainingsruimte huren per uur in Amsterdam? Alles over flexibele studio verhuur voor freelance personal trainers en fysiotherapeuten."
        url="/nl/blog/gym-huren-per-uur-amsterdam"
        datePublished="2026-04-01"
      />
      <FaqJsonLd faqs={[
        { question: "Wat zijn de kosten van gym huren per uur in Amsterdam?", answer: "De prijzen voor het huren van een trainingsruimte per uur in Amsterdam variëren sterk. Een overzicht:" },
        { question: "Wat heb je nodig om de studio te huren?", answer: "Huren als ZZP-trainer of fysiotherapeut is eenvoudig. Je hebt nodig:" },
        { question: "Welke apparatuur is er in de studio?", answer: "Voor freelance trainers en fysiotherapeuten is de uitrusting van de huurstudio cruciaal. SculptClub biedt:" },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Gym huren per uur Amsterdam: flexibele trainingsruimte voor ZZP-trainers
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" />1 april 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />SculptClub
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Als freelance personal trainer of fysiotherapeut in Amsterdam heb je één groot probleem: je hebt een professionele ruimte nodig, maar wil geen vaste maandkosten betalen voor een gym die je maar deels gebruikt. De oplossing? Een gym of trainingsruimte huren per uur.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Waarom per uur huren beter is dan een vaste gym</h2>
              <p>
                Veel ZZP-trainers beginnen door sessies te geven in gewone sportscholen — als ingehuurde kracht, of door een duur maandabonnement te nemen. Maar dat model heeft grote nadelen:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Vaste maandkosten, ook als je minder klanten hebt",
                  "Geen eigen uitstraling: je bent zichtbaar als trainer in een openbare gym",
                  "Geen controle over muziek, temperatuur of andere aanwezigen",
                  "Commissie op je omzet bij sommige constructies",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Een privé studio huren per uur lost dit op. Je betaalt alleen voor de tijd die je daadwerkelijk gebruikt. Bij SculptClub betaal je <strong className="text-foreground">vanaf €12 per sessie van 60 minuten</strong> — een fractie van wat een maandabonnement bij een grote sportschool kost.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wat zijn de kosten van gym huren per uur in Amsterdam?</h2>
              <p>
                De prijzen voor het huren van een trainingsruimte per uur in Amsterdam variëren sterk. Een overzicht:
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Type ruimte</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Prijs/uur (schatting)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Grote sportschool (gedeeld)", "€0 – maar klanten zien je werken"],
                      ["Ruimte bij sportschool incl. commissie", "€0 + 20–30% commissie"],
                      ["Huurstudio generiek Amsterdam centrum", "€25 – €60/uur"],
                      ["SculptClub — halve studio (1:1)", "vanaf €12/60 min"],
                      ["SculptClub — hele studio (max 6 pers)", "vanaf €17/60 min"],
                    ].map(([type, price]) => (
                      <tr key={type} className="border-b last:border-0">
                        <td className="px-4 py-3">{type}</td>
                        <td className="px-4 py-3 text-center font-medium">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Bij SculptClub zijn geen extra kosten verbonden aan het gebruik van apparatuur, wifi of schoonmaak. Je boekt online, je ontvangt de avond voor je sessie een deurcode via WhatsApp en je kunt direct starten.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wat heb je nodig om de studio te huren?</h2>
              <p>
                Huren als ZZP-trainer of fysiotherapeut is eenvoudig. Je hebt nodig:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Een geldige beroepsaansprakelijkheidsverzekering (BA-verzekering)",
                  "Een actief KvK-nummer (als ZZP)",
                  "Je klanten en eigen tariefstructuur",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Er is geen selectieproces of lange wachtlijst. Je boekt een proefsessie, bekijkt de ruimte, en kunt daarna direct reserveren.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Welke apparatuur is er in de studio?</h2>
              <p>
                Voor freelance trainers en fysiotherapeuten is de uitrusting van de huurstudio cruciaal. SculptClub biedt:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Barbell & squat rack met platform",
                  "Verstelbare banken",
                  "Dumbbells 4–40 kg",
                  "Cable machines",
                  "Echo Bike (assault bike)",
                  "Push/pull slee + track",
                  "Kettlebells, medicine balls, resistance bands",
                  "Vinyl platenspeler + Bluetooth speaker",
                  "Douches en kleedruimte",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Flexibel boeken: wanneer het jou uitkomt</h2>
              <p>
                Het grote voordeel van een studio huren per uur is de flexibiliteit. Je hebt geen vaste tijdslots. Je boekt online via ons systeem en kiest precies de tijden die bij jouw agenda en je klanten passen. Heb je een drukke week? Boek meer. Vakantie? Geen kosten.
              </p>
              <p>
                Voor trainers die met regelmatige klanten werken, zijn er ook voordeelpakketten beschikbaar: bespaar tot 23% op je uurtarief met een strippenkaart die een jaar geldig is.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Locatie: privé studio in Amsterdam Jordaan</h2>
              <p>
                De studio van SculptClub bevindt zich aan de Egelantiersgracht in de Jordaan, een van de meest centrale en goed bereikbare wijken van Amsterdam. Goed te bereiken met fiets, OV en auto. De rustige omgeving van de Jordaan past goed bij de privé sfeer van een boutique studio.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/word-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Word trainer bij SculptClub</p></a>
                  <a href="/nl/blog/studio-huren-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio huren als personal trainer</p></a>
                  <a href="/nl/blog/trainingsruimte-huren-zzp-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Trainingsruimte huren als ZZP-trainer</p></a>
                  <a href="/nl/blog/fysiotherapie-studio-huren-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Fysiotherapie studio huren</p></a>
                  <a href="/nl/blog/zakelijk-personal-training-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Zakelijk personal training</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Klaar om te beginnen?</h3>
                <p className="mb-4">
                  Boek een gratis proefsessie en kom de studio bekijken. Geen verplichtingen — alleen kijken of het bij je past.
                </p>
                <ButtonLink href="/nl/studio-huren" size="lg">
                  Bekijk tarieven & boek een proefsessie
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
