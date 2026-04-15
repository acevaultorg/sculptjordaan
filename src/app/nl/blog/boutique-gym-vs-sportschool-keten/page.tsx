import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Boutique Gym vs Sportschool Keten: Wat Past bij Jou? — SculptClub",
  description:
    "Twijfel je tussen een boutique gym en een grote sportschool? Vergelijk prijs, sfeer, apparatuur en begeleiding. Ontdek wat het beste werkt voor jouw doelen.",
  keywords: [
    "boutique gym amsterdam",
    "boutique gym vs sportschool",
    "kleine sportschool amsterdam",
    "basic-fit alternatief amsterdam",
    "personal training studio vs sportschool",
  ],
  alternates: {
    canonical: "/nl/blog/boutique-gym-vs-sportschool-keten",
    languages: {
      nl: "/nl/blog/boutique-gym-vs-sportschool-keten",
      en: "/en/blog/boutique-gym-vs-big-chain-gym",
    },
  },
};

export default function BoutiqueGymVsKetenNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Boutique gym vs sportschool keten", url: "/nl/blog/boutique-gym-vs-sportschool-keten" }]} />
      <BlogPostingJsonLd title="Boutique Gym vs Sportschool Keten" description="Vergelijk boutique gyms en grote sportschoolketens op prijs, sfeer en resultaat." url="/nl/blog/boutique-gym-vs-sportschool-keten" datePublished="2026-04-02" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Boutique Gym vs Sportschool Keten: Wat Past bij Jou?</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />2 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-3.jpeg" alt="SculptClub boutique gym interieur" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Je wilt gaan sporten. Of je sport al bij een grote keten en overweegt iets anders. De
                keuze tussen een boutique gym en een grote sportschoolketen is niet alleen een kwestie
                van prijs — het gaat om wat je nodig hebt om daadwerkelijk resultaat te boeken.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Grote keten: het bekende model</h2>
              <p>
                Basic-Fit, TrainMore, Fit For Free — je kent ze. Voordelen: laag maandtarief (€20-€40),
                veel vestigingen, 24/7 open. Maar er is een keerzijde. In de spits sta je in de rij voor
                de leg press. De muziek is hard. Je traint tussen 50 anderen. En persoonlijke begeleiding?
                Die zit niet bij de prijs in.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Boutique gym: de andere aanpak</h2>
              <p>
                Een boutique gym is kleiner, gerichter en persoonlijker. Je deelt de ruimte met een
                handvol mensen in plaats van tientallen. De apparatuur is specifiek gekozen, niet voor
                volume maar voor kwaliteit. En de sfeer is anders — rustiger, meer gericht op jouw
                training in plaats van op achtergrondmuziek.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">De eerlijke vergelijking</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4"></th>
                      <th className="text-left py-3 pr-4">Grote keten</th>
                      <th className="text-left py-3">Boutique gym</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Prijs</td><td className="py-2 pr-4">€20-€40/maand</td><td className="py-2">€29-€89/4 weken</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Drukte</td><td className="py-2 pr-4">Hoog (spitsuren)</td><td className="py-2">Max 3 personen</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Begeleiding</td><td className="py-2 pr-4">Niet inbegrepen</td><td className="py-2">Optioneel (PT vanaf €45)</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Apparatuur</td><td className="py-2 pr-4">Veel, vaak bezet</td><td className="py-2">Minder, altijd beschikbaar</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-medium">Contract</td><td className="py-2 pr-4">Vaak 12 maanden</td><td className="py-2">Geen — stop wanneer je wilt</td></tr>
                    <tr><td className="py-2 pr-4 font-medium">Sfeer</td><td className="py-2 pr-4">Druk, muziek, anoniem</td><td className="py-2">Rustig, privé, persoonlijk</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">Voor wie is een boutique gym?</h2>
              <p>
                Een boutique gym past bij je als je waarde hecht aan rust, kwaliteit boven kwantiteit en
                een omgeving waar je daadwerkelijk resultaat boekt. Het is niet voor iedereen — als je
                alleen een loopband nodig hebt en prijs je enige criterium is, dan is een keten prima.
                Maar als je serieus wilt trainen, met of zonder trainer, en je wilt niet wachten of
                afgeleid worden, dan is een boutique gym de betere investering.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">SculptClub: boutique gym in de Jordaan</h2>
              <p>
                SculptClub is een privé studio aan de Egelantiersgracht in Amsterdam. Open Gym vanaf
                €5,75 per sessie. Personal training vanaf €45. Geen contract, gratis annuleren. Je kunt
                gratis komen proberen — boek een proefles of plan een intake.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/prive-sportschool-vs-grote-sportschool" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Privé sportschool vs grote sportschool</p></a>
                <a href="/nl/blog/sportschool-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool Jordaan Amsterdam</p></a>
                <a href="/nl/blog/open-gym-vs-sportschool" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Open Gym vs sportschool</p></a>
                <a href="/nl/blog/sportschool-zonder-abonnement-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Sportschool zonder abonnement</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Gratis proberen?</h3>
              <p className="text-muted-foreground mb-6">Kom kijken of een boutique gym bij je past.</p>
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
