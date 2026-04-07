import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Voedingscoach Amsterdam: Wat doet een diëtist en wanneer heb je er een nodig? — SculptClub",
  description:
    "Wat is het verschil tussen een voedingscoach en diëtist in Amsterdam? Wanneer heb je een voedingsconsult nodig? Ontdek hoe voeding en training samenkomen bij SculptClub.",
  keywords: [
    "voedingscoach amsterdam",
    "diëtist amsterdam",
    "voedingsconsult amsterdam",
    "voedingsadvies amsterdam",
    "personal trainer met voedingsadvies amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/voedingscoach-amsterdam",
    languages: {
      nl: "/nl/blog/voedingscoach-amsterdam",
      en: "/en/blog/nutrition-coach-amsterdam",
    },
  },
};

export default function VoedingscoachAmsterdamNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/nl/blog" },
          { name: "Voedingscoach Amsterdam", url: "/nl/blog/voedingscoach-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Voedingscoach Amsterdam: Wat doet een diëtist en wanneer heb je er een nodig?"
        description="Wat is het verschil tussen een voedingscoach en diëtist in Amsterdam? Wanneer heb je een voedingsconsult nodig?"
        url="/nl/blog/voedingscoach-amsterdam"
        datePublished="2026-03-30"
      />
      <FaqJsonLd faqs={[
        { question: "Voedingscoach of diëtist: wat is het verschil?", answer: "In Nederland is de titel diëtist een beschermde beroepstitel. Een diëtist heeft een HBO-opleiding gevolgd en is BIG-geregistreerd. Ze werken ook met medische voedingsvraagstukken — denk aan diabetes, nierziekten, of darmproblemen — en hun consult wordt soms (deels) vergoed door de zorgverzekeraar." },
        { question: "Wanneer heb je een voedingscoach nodig?", answer: "Niet iedereen heeft meteen een diëtist nodig. Maar in de volgende situaties maakt professioneel voedingsadvies een groot verschil:" },
        { question: "Wat kost een voedingsconsult in Amsterdam?", answer: "Een losse sessie bij een zelfstandige diëtist in Amsterdam kost gemiddeld €70–€110 per uur. Sommige zorgverzekeraars vergoeden dit deels via de aanvullende verzekering — check je polis." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Voedingscoach Amsterdam: Wat doet een diëtist en wanneer heb je er een nodig?
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  30 maart 2026
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/trainers/eva.jpg"
                alt="Eva, diëtist en personal trainer bij SculptClub Amsterdam"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Je traint regelmatig, eet &ldquo;redelijk gezond&rdquo; — maar resultaten blijven uit. Of je wilt afvallen maar weet niet hoe je voeding en training op elkaar afstemt. Dit is precies het moment dat een voedingscoach of diëtist in Amsterdam het verschil maakt.
              </p>

              <h2>Voedingscoach of diëtist: wat is het verschil?</h2>
              <p>
                In Nederland is de titel <strong>diëtist</strong> een beschermde beroepstitel. Een diëtist heeft een HBO-opleiding gevolgd en is BIG-geregistreerd. Ze werken ook met medische voedingsvraagstukken — denk aan diabetes, nierziekten, of darmproblemen — en hun consult wordt soms (deels) vergoed door de zorgverzekeraar.
              </p>
              <p>
                Een <strong>voedingscoach</strong> heeft geen wettelijk beschermde titel. De kwaliteit verschilt enorm: van gecertificeerde coaches met een gedegen achtergrond tot mensen met een weekendcursus. Let altijd op de opleiding en specialisatie van degene die je raadpleegt.
              </p>
              <p>
                Bij SculptClub werkt <strong>Eva</strong> als gecertificeerd diëtist én personal trainer. Ze combineert wetenschappelijk onderbouwd voedingsadvies met een praktisch trainingsprogramma — iets wat de meeste losse voedingsconsulten niet bieden.
              </p>

              <h2>Wanneer heb je een voedingscoach nodig?</h2>
              <p>
                Niet iedereen heeft meteen een diëtist nodig. Maar in de volgende situaties maakt professioneel voedingsadvies een groot verschil:
              </p>
              <ul>
                <li><strong>Je traint al maanden maar ziet geen resultaat.</strong> De kans is groot dat voeding de ontbrekende schakel is.</li>
                <li><strong>Je wilt afvallen maar krijgt je gewicht niet omlaag.</strong> Calorietekorten werken — maar alleen als je weet hoe je ze realistisch inzet.</li>
                <li><strong>Je wilt spiermassa opbouwen.</strong> Voldoende eiwitten op de juiste momenten is net zo belangrijk als het trainingsschema zelf.</li>
                <li><strong>Je hebt energieproblemen of herstelklachten.</strong> Slechte voeding vertraagt herstel na training aanzienlijk.</li>
                <li><strong>Je hebt een specifieke aandoening.</strong> Bij PCOS, schildklierproblematiek of spijsverteringsproblemen is een BIG-geregistreerde diëtist de aangewezen persoon.</li>
              </ul>

              <h2>Voeding en training samen: waarom het beter werkt</h2>
              <p>
                De meeste mensen werken met een personal trainer óf met een diëtist. Zelden met beide. Het probleem: training en voeding zijn onlosmakelijk verbonden. Wat je eet bepaalt mede hoe je presteert, hoe je herstelt en hoe snel je resultaat ziet.
              </p>
              <p>
                Als je trainer ook je voeding begrijpt — of beter nog, ook diëtist is — hoef je niet twee aparte programma&apos;s te laten aansluiten. Alles wordt op elkaar afgestemd: je trainingsbelasting, je caloriebehoefte, je eiwitinname, je herstelplan.
              </p>

              <h2>Wat kost een voedingsconsult in Amsterdam?</h2>
              <p>
                Een losse sessie bij een zelfstandige diëtist in Amsterdam kost gemiddeld €70–€110 per uur. Sommige zorgverzekeraars vergoeden dit deels via de aanvullende verzekering — check je polis.
              </p>
              <p>
                Bij SculptClub zijn voedingssessies onderdeel van de personal training. Je betaalt niet apart voor een voedingsconsult als je met Eva traint — alles zit in één sessie. Haar tarief is op aanvraag.
              </p>

              <h2>Voedingscoach Amsterdam Jordaan: bij ons in de studio</h2>
              <p>
                SculptClub ligt aan de Egelantiersgracht 424 in de Jordaan — een van de rustigste en mooiste buurten van Amsterdam. Geen drukke fitnesshal, geen rijen voor apparaten. Alleen jij, je trainer en een volledig uitgeruste privé studio.
              </p>
              <p>
                Eva helpt je met krachtraining én voeding. Je eerste kennismaking is altijd gratis. Geen contract, geen abonnement.
              </p>
            </div>

            {/* Related articles */}
            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-training-afvallen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training voor afvallen</p></a>
                <a href="/nl/blog/afvallen-met-krachttraining" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Afvallen met krachttraining</p></a>
                <a href="/nl/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam</p></a>
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Fysiotherapeut personal trainer</p></a>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-secondary border border-border/50">
              <h2 className="text-xl font-bold mb-2">Intake met Eva — gratis</h2>
              <p className="text-muted-foreground mb-6">
                Wil je jouw training en voeding laten aansluiten? Plan een gratis kennismaking met Eva en ontdek wat er mogelijk is.
              </p>
              <ButtonLink href="/nl/gratis-intake">
                Plan gratis intake <ArrowRight className="w-4 h-4" />
              </ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
