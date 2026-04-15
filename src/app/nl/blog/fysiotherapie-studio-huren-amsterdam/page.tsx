import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Fysiotherapie Studio Huren in Amsterdam — SculptClub",
  description:
    "Op zoek naar een ruimte voor fysiotherapie of revalidatietraining in Amsterdam? Huur een volledig uitgeruste studio per uur. Ideaal voor ZZP-fysiotherapeuten.",
  keywords: [
    "fysiotherapie studio huren amsterdam",
    "ruimte huren fysiotherapeut",
    "trainingsruimte fysiotherapie amsterdam",
    "zzp fysiotherapeut studio",
    "revalidatie studio huren amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/fysiotherapie-studio-huren-amsterdam",
    languages: {
      nl: "/nl/blog/fysiotherapie-studio-huren-amsterdam",
      en: "/en/blog/physiotherapy-studio-rental-amsterdam",
    },
  },
};

export default function BlogPostFysioStudioNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Fysiotherapie studio huren Amsterdam", url: "/nl/blog/fysiotherapie-studio-huren-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Fysiotherapie Studio Huren in Amsterdam"
        description="Praktische gids voor fysiotherapeuten die een trainingsruimte zoeken in Amsterdam."
        url="/nl/blog/fysiotherapie-studio-huren-amsterdam"
        datePublished="2026-04-02"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Fysiotherapie Studio Huren in Amsterdam
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

            {/* Hero image */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/power-rack.jpeg"
                alt="Power rack en trainingsapparatuur in studio SculptClub"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Als fysiotherapeut in Amsterdam weet je dat revalidatie niet stopt bij de behandeltafel.
                Steeds meer patiënten hebben behoefte aan krachttraining als onderdeel van hun herstel.
                Maar niet elke fysiotherapiepraktijk heeft de ruimte of apparatuur voor serieuze
                trainingsbegeleiding. Het huren van een trainingsruimte biedt de oplossing — professionele
                apparatuur, privacy voor je patiënt en flexibiliteit voor jou als behandelaar.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom een aparte trainingsruimte voor fysiotherapie?</h2>
              <p>
                De trend in de fysiotherapie is duidelijk: van passieve behandeling naar actieve
                revalidatie. Patiënten met rugklachten, schouderletsel of knieproblemen profiteren enorm
                van gestructureerde krachttraining onder begeleiding. Maar in een reguliere
                fysiotherapiepraktijk ontbreekt vaak de ruimte en apparatuur voor functionele oefeningen.
                Een bank, een paar losse gewichten en een TRX zijn niet genoeg voor serieuze revalidatie.
              </p>
              <p>
                Door een trainingsruimte te huren heb je toegang tot een power rack, kabelmachine,
                dumbbells tot 50 kg en meer. Dat opent de deur naar effectievere behandelingen en
                sneller herstel voor je patiënten.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Privacy en concentratie</h2>
              <p>
                Revalidatietraining vraagt om focus. Je patiënt moet zich veilig voelen, zeker als ze
                na een blessure weer beginnen met zwaardere oefeningen. In een grote sportschool is dat
                lastig — er zijn afleiders, er staat muziek op en andere sporters kijken mee. In een
                privé studio kan je patiënt zich volledig concentreren op de oefening. Maximaal 3
                personen tegelijk, geen wachten op apparaten, geen ongemakkelijke situaties.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Kosten en businessmodel</h2>
              <p>
                Als ZZP-fysiotherapeut kun je de kosten direct doorberekenen in je sessietarief. De
                meeste patiënten verwachten al dat een gespecialiseerde training meer kost dan een
                standaard fysiotherapie-behandeling. Een studio huren bij SculptClub kost vanaf €12 per
                60 minuten (halve studio) of €17 per uur (volledige studio). Met pakketten bespaar je
                tot 23%.
              </p>
              <p>
                Je kunt het ook combineren: gebruik je eigen praktijk voor de intake en manuele therapie,
                en boek de studio voor de actieve revalidatiesessies. Zo hoef je niet de hele dag een
                ruimte te huren, maar alleen voor de uren dat je trainingsbegeleiding geeft.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Vergoeding en declaratie</h2>
              <p>
                Fysiotherapie wordt deels vergoed via de aanvullende zorgverzekering. De trainingskosten
                zijn voor jou als ZZP-fysiotherapeut volledig aftrekbaar als bedrijfskosten. Sommige
                therapeuten kiezen ervoor om de trainingssessie apart in rekening te brengen als
                &quot;medisch fitness&quot; of &quot;revalidatietraining&quot;. Bespreek dit met je boekhouder voor de
                optimale structuur.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Apparatuur die je nodig hebt</h2>
              <p>
                Voor de meeste revalidatietrajecten heb je een beperkt maar specifiek arsenaal nodig:
              </p>
              <ul>
                <li><strong>Power rack met safety pins:</strong> Voor squats, deadlifts en presses met begeleiding</li>
                <li><strong>Kabelmachine:</strong> Onmisbaar voor schouder-revalidatie en gecontroleerde bewegingen</li>
                <li><strong>Dumbbells (licht tot zwaar):</strong> Van 2 kg revalidatie-oefeningen tot 40+ kg kracht</li>
                <li><strong>Verstelbare bank:</strong> Voor variatie in hoeken bij borst-, schouder- en rugoefeningen</li>
                <li><strong>Resistance bands:</strong> Complementair aan de vrije gewichten</li>
              </ul>
              <p>
                Bij SculptClub is al deze apparatuur aanwezig. Je hoeft niets mee te nemen behalve je
                expertise.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Samenwerken met personal trainers</h2>
              <p>
                SculptClub is niet alleen een studio — het is een plek waar fysiotherapeuten en personal
                trainers samenwerken. Als je patiënt klaar is met het revalidatietraject, kun je
                doorverwijzen naar een van de vaste trainers. Zo krijgt je patiënt continuïteit in
                dezelfde vertrouwde omgeving. En jij bouwt een professioneel netwerk op.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Aan de slag</h2>
              <p>
                Neem contact op voor een bezichtiging van de studio. We bespreken graag hoe de ruimte
                het beste past bij jouw praktijk. Flexibel te boeken per uur, geen langlopend contract
                en altijd gratis annuleren.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/word-trainer" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Word trainer bij SculptClub</p></a>
                <a href="/nl/blog/studio-huren-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio huren als personal trainer</p></a>
                <a href="/nl/blog/gym-huren-per-uur-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym huren per uur Amsterdam</p></a>
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Fysiotherapeut als personal trainer</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Interesse in de studio voor je praktijk?</h3>
              <p className="text-muted-foreground mb-6">
                Plan een bezichtiging of neem contact op via WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/nl/studio-huren" size="lg">
                  Bekijk studio & tarieven
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href="https://wa.me/31683178934?text=Hoi%2C%20ik%20ben%20fysiotherapeut%20en%20ge%C3%AFnteresseerd%20in%20het%20huren%20van%20de%20studio"
                  size="lg"
                  variant="outline"
                  external
                >
                  WhatsApp ons
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
