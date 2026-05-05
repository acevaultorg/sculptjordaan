import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { CtaBand } from "@/components/marketing/cta-band";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: { absolute: "Boutique Personal Training vs Ketensportschool — SculptClub" },
  description:
    "Eerlijke vergelijking: boutique personal training studio vs grote sportschoolketen in Amsterdam. Prijs, sfeer, begeleiding en resultaat.",
  keywords: [
    "boutique personal training amsterdam",
    "personal trainer vs sportschool",
    "boutique gym vs keten",
    "kleine personal training studio amsterdam",
    "alternatief grote sportschool amsterdam",
  ],
  alternates: {
    canonical: "/nl/boutique-personal-training-vs-keten",
    languages: {
      nl: "/nl/boutique-personal-training-vs-keten",
      en: "/en/boutique-personal-training-vs-chain-gyms",
    },
  },
  openGraph: {
    title: "Boutique Personal Training vs Ketensportschool",
    description:
      "Wat past bij jou: een boutique personal training studio of een grote sportschoolketen? Een eerlijke vergelijking.",
    url: "/nl/boutique-personal-training-vs-keten",
    type: "website",
  },
};

const faqs = [
  {
    question: "Wat is een boutique personal training studio precies?",
    answer:
      "Een kleine, privé trainingsruimte waar je traint met maximaal een handvol mensen tegelijk. Persoonlijke begeleiding staat centraal, niet het volume aan leden. Bij SculptClub trainen er nooit meer dan 3 mensen tegelijk in de studio aan de Egelantiersgracht.",
  },
  {
    question: "Is een boutique studio duurder dan een grote keten?",
    answer:
      "Voor een kaal lidmaatschap: ja. Een keten zit op €20-€40 per maand. Voor wat je krijgt — privé ruimte, persoonlijke begeleiding optioneel, geen wachten — is een boutique studio juist goedkoper per resultaat. Bij SculptClub start Open Gym op €29/4 weken en personal training vanaf €45 per sessie.",
  },
  {
    question: "Moet ik een contract tekenen?",
    answer:
      "Niet bij SculptClub. Open Gym werkt in 4-weken cycli die je op elk moment stopt. Personal training boek je per sessie. Geen jaarcontract, geen opzegboete, gratis annuleren.",
  },
  {
    question: "Kan ik eerst gratis komen kijken?",
    answer:
      "Ja. De eerste intake met een trainer is altijd gratis en vrijblijvend. Je kunt ook een gratis Open Gym proefles boeken om de studio te ervaren voordat je iets afneemt.",
  },
  {
    question: "Wanneer is een grote sportschool eigenlijk de betere keuze?",
    answer:
      "Als prijs het allerbelangrijkste is, je vooral cardio doet en je het niet erg vindt om in de spits te wachten op een toestel. Een keten heeft 24/7 uren en veel vestigingen — handig als je meerdere keren per week op verschillende plekken wilt trainen.",
  },
];

export default function BoutiquePTvsKetenNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          {
            name: "Boutique personal training vs keten",
            url: "/nl/boutique-personal-training-vs-keten",
          },
        ]}
      />
      <ServiceJsonLd
        name="Boutique Personal Training Amsterdam"
        description="Privé personal training studio in Amsterdam Jordaan. Maximaal 3 personen, gratis intake, geen contract. Personal training vanaf €45/sessie."
        url="/nl/boutique-personal-training-vs-keten"
        priceRange="Vanaf €45/sessie"
      />
      <FaqJsonLd faqs={faqs} />

      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Vergelijking"
          title="Boutique Personal Training vs Keten"
          description="Een eerlijke kijk op het verschil tussen een privé personal training studio en een grote sportschoolketen in Amsterdam — zonder marketingpraat."
        />
      </Section>

      {/* Comparison table */}
      <Section bg="muted">
        <SectionHeader
          overline="Naast elkaar"
          title="De Eerlijke Vergelijking"
          description="Geen aanvallen op concurrenten — gewoon de kenmerken naast elkaar."
        />

        <FadeIn>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-4 text-left font-medium"></th>
                    <th className="px-4 py-4 text-left font-semibold text-primary">
                      Boutique studio (SculptClub)
                    </th>
                    <th className="px-4 py-4 text-left font-medium text-muted-foreground">
                      Grote sportschoolketen
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Groepsgrootte</td>
                    <td className="px-4 py-3">Max 3 personen tegelijk</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      50-200+ mensen in de spits
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Aandacht trainer</td>
                    <td className="px-4 py-3">1-op-1, eigen programma</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Niet inbegrepen, los te boeken
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Apparatuur</td>
                    <td className="px-4 py-3">
                      Selectief gekozen, altijd vrij
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Veel toestellen, vaak bezet
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Prijstransparantie</td>
                    <td className="px-4 py-3">
                      Alles inclusief, geen verrassingen
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Inschrijfgeld, kledingkast, extras
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Contract</td>
                    <td className="px-4 py-3">Geen — stop wanneer je wilt</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Vaak 12 maanden vooraf
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Sfeer</td>
                    <td className="px-4 py-3">Rustig, privé, gefocust</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Druk, harde muziek, anoniem
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Geschikt voor</td>
                    <td className="px-4 py-3">
                      Resultaat, techniek, herstel
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Cardio, hoog volume, laag budget
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Body sections */}
      <Section>
        <div className="mx-auto max-w-3xl prose prose-lg prose-invert">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mt-0 mb-4">
              Het verschil zit in de aandacht
            </h2>
            <p>
              Een grote sportschoolketen is gebouwd op volume. Hoe meer leden
              per vierkante meter, hoe beter het verdienmodel werkt. Dat hoeft
              geen probleem te zijn als je weet wat je doet en je traint
              wanneer het rustig is. Maar als je net begint, technisch vooruit
              wilt, of na een blessure terugkomt, is die anonimiteit een
              valkuil. Niemand corrigeert je houding. Niemand merkt op dat je
              al drie weken hetzelfde programma draait. Niemand vraagt of het
              vandaag wel of niet handig is om zwaar te tillen.
            </p>
            <p>
              In een boutique studio is dat het uitgangspunt. Je trainer kent
              je geschiedenis, je doelen en je herstelpatroon. Bij SculptClub
              werken trainers met 0% commissie — dat betekent dat ze hun eigen
              tarieven bepalen en de tijd nemen die nodig is, zonder
              verkoopdruk uit het studio.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              Prijs versus prijs per resultaat
            </h2>
            <p>
              Een keten kost €20-€40 per maand. Een boutique studio kost meer
              per uur, maar je krijgt er een privé ruimte voor terug — soms
              ook persoonlijke begeleiding. De vraag is niet welke optie
              goedkoper is, maar welke optie je goedkoper bij je doel brengt.
              Voor sommigen is dat een keten met een treadmill. Voor anderen
              is dat één goed gestructureerd uur per week met een trainer die
              precies weet waar je staat.
            </p>
            <p>
              Reken eens uit: een jaar lang twee keer per week naar een keten
              met een trainer (los geboekt) kost al snel meer dan een
              boutique studio met dezelfde frequentie — en in de boutique
              studio sta je niet in de rij.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              Apparatuur: minder is vaak meer
            </h2>
            <p>
              Een keten pronkt met &ldquo;200+ toestellen&rdquo;. Klinkt
              indrukwekkend. In de praktijk gebruik je er hooguit acht. Een
              boutique studio kiest die acht zorgvuldig: power rack, halters,
              kabelmachine, een paar kettlebells, ruimte om te bewegen.
              Niets meer, niets minder. Het verschil: je staat niet te
              wachten, en alles wat je nodig hebt is binnen handbereik.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              Sfeer is geen detail
            </h2>
            <p>
              Mensen onderschatten hoeveel invloed sfeer heeft op of je
              überhaupt komt opdagen. Een drukke, lawaaierige hal met
              spiegelwand-selfies trekt sommige mensen aan. Anderen haken
              juist daarop af. Een rustige, kleine ruimte waar je naam wordt
              gekend en de muziek niet schreeuwt is voor veel mensen het
              verschil tussen consistent trainen en weer afhaken na drie
              weken.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              Wanneer een grote keten de juiste keuze is
            </h2>
            <p>
              Eerlijk: een keten is prima als je vooral cardio doet, je
              technisch al goed weet wat je doet, en je waarde hecht aan 24/7
              openingstijden of meerdere vestigingen door de stad. Ook als je
              budget krap is en je geen begeleiding nodig hebt, is een keten
              een logische start. Niemand wordt slechter van een treadmill bij
              een keten.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-4">
              Wanneer een boutique studio de juiste keuze is
            </h2>
            <p>
              Een boutique studio is de juiste keuze als je serieus resultaat
              wilt, je waarde hecht aan rust en privacy, je hulp wilt bij
              techniek of programmering, of als je terugkomt na een blessure.
              Ook als je niet vastzit aan een lang contract of inschrijfgeld,
              en je gewoon wilt kunnen stoppen wanneer het je uitkomt. SculptClub
              is open van 06:30 tot 22:00, dagelijks, op de Egelantiersgracht
              424 in de Jordaan.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="muted">
        <SectionHeader
          overline="Veelgestelde vragen"
          title="Nog Vragen?"
        />
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border/50 py-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <CtaBand locale="nl" />
    </PageLayout>
  );
}
