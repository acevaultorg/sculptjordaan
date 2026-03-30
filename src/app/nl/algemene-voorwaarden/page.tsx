import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden — SculptClub Amsterdam Jordaan",
  description:
    "Algemene voorwaarden van SculptClub. Informatie over boekingen, annulering, betaling, huisregels en aansprakelijkheid.",
  alternates: {
    canonical: "/nl/algemene-voorwaarden",
    languages: {
      nl: "/nl/algemene-voorwaarden",
      en: "/en/terms-conditions",
    },
  },
};

export default function TermsPageNL() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          as="h1"
          overline="Juridisch"
          title="Algemene Voorwaarden"
          description="Versie: 23 februari 2026"
        />
      </Section>

      {/* 1. Definities */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">1. Definities</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>&quot;SculptClub&quot;</strong> (ook: &quot;wij&quot;,
                &quot;ons&quot;, &quot;onze&quot;): de onderneming SculptClub,
                gevestigd aan Egelantiersgracht 424, 1015 RR Amsterdam.
              </li>
              <li>
                <strong>&quot;Klant&quot;</strong> (ook: &quot;je&quot;,
                &quot;jij&quot;, &quot;jouw&quot;): iedere natuurlijke of
                rechtspersoon die een dienst afneemt bij SculptClub.
              </li>
              <li>
                <strong>&quot;Diensten&quot;</strong>: personal training sessies,
                Open Gym toegang, studio verhuur en overige diensten aangeboden
                door SculptClub.
              </li>
              <li>
                <strong>&quot;Trainer&quot;</strong>: een zelfstandig personal
                trainer die gebruik maakt van de faciliteiten van SculptClub.
              </li>
              <li>
                <strong>&quot;Boekingssysteem&quot;</strong>: het online
                reserveringssysteem (Acuity Scheduling) waarmee klanten sessies
                boeken.
              </li>
              <li>
                <strong>&quot;Studio&quot;</strong>: de trainingsruimte van
                SculptClub aan het bovengenoemde adres.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* 2. Toepasselijkheid */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">2. Toepasselijkheid</h2>
            <p className="text-muted-foreground">
              Deze algemene voorwaarden zijn van toepassing op alle diensten,
              aanbiedingen, overeenkomsten en boekingen van SculptClub. Door
              gebruik te maken van onze diensten ga je akkoord met deze
              voorwaarden. Afwijkingen van deze voorwaarden zijn alleen geldig
              indien schriftelijk overeengekomen. SculptClub behoudt zich het
              recht voor deze voorwaarden te wijzigen. Wijzigingen worden
              gecommuniceerd via onze website en treden 30 dagen na publicatie in
              werking.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 3. Diensten */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">3. Diensten</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              3.1 Personal Training
            </h3>
            <p className="text-muted-foreground">
              Personal training sessies worden uitgevoerd door zelfstandige
              trainers die de studio van SculptClub huren. De overeenkomst voor
              personal training is tussen jou en de trainer. SculptClub
              faciliteert de ruimte en apparatuur maar is geen partij in de
              overeenkomst tussen klant en trainer. Trainers bepalen hun eigen
              tarieven en voorwaarden.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Open Gym</h3>
            <p className="text-muted-foreground">
              Open Gym biedt je toegang tot de studio om zelfstandig te trainen
              tijdens geboekte tijdsloten. Open Gym werkt in cycli van 4 weken.
              Je kiest het aantal sessies per week en betaalt vooraf. Na elke
              cyclus kun je opzeggen zonder verplichtingen. Maximaal 3 personen
              mogen tegelijkertijd in de studio trainen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              3.3 Studio Verhuur
            </h3>
            <p className="text-muted-foreground">
              De studio kan worden gehuurd door zelfstandige trainers,
              fysiotherapeuten en andere fitnessprofessionals. Verhuur is per uur
              of via kortingspakketten (10 of 20 uur). Huurders dienen over een
              geldige beroepsaansprakelijkheidsverzekering te beschikken. Alle
              apparatuur, wifi en basisvoorzieningen zijn inbegrepen.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 4. Boekingen & Betaling */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              4. Boekingen &amp; Betaling
            </h2>
            <p className="text-muted-foreground">
              Boekingen worden gemaakt via ons online boekingssysteem (Acuity
              Scheduling). Na het boeken ontvang je een bevestiging via het boekingssysteem.
              De avond voor je sessie ontvang je een unieke deurcode via
              WhatsApp. Betaling voor Open Gym geschiedt vooraf
              per cyclus via het boekingssysteem. Betaling voor personal training
              geschiedt rechtstreeks aan de trainer volgens diens voorwaarden.
              Betaling voor studio verhuur geschiedt vooraf per uur of per
              pakket. Alle genoemde prijzen zijn inclusief btw, tenzij anders
              vermeld.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 5. Annulering */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">5. Annulering</h2>
            <p className="text-muted-foreground">
              Je kunt een boeking altijd kosteloos annuleren of verzetten via
              het boekingssysteem. Niet-verschijnen (no-show) zonder
              voorafgaande annulering kan wel in rekening worden gebracht.
              SculptClub behoudt zich het
              recht voor sessies te annuleren bij overmacht (zoals
              noodsituaties, defecte apparatuur of extreme weersomstandigheden).
              In dat geval ontvang je een volledig alternatief tijdslot of
              restitutie.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 6. Huisregels */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">6. Huisregels</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                Maximaal <strong>3 personen</strong> tegelijkertijd in de studio.
              </li>
              <li>
                Respecteer de apparatuur: gebruik handdoeken, plaats gewichten
                terug en meld schade direct.
              </li>
              <li>Draag schone indoor sportschoenen in de studio.</li>
              <li>
                Laat de studio achter zoals je hem wilt aantreffen: schoon en
                opgeruimd.
              </li>
              <li>
                Roken, alcohol en drugs zijn niet toegestaan in de studio.
              </li>
              <li>
                Respecteer de boekingstijden: verlaat de studio op tijd zodat de
                volgende gebruiker kan beginnen.
              </li>
              <li>
                Huisdieren zijn niet toegestaan in de studio (met uitzondering
                van hulphonden).
              </li>
              <li>
                Geluidsoverlast dient te worden beperkt uit respect voor
                omwonenden. Het pand bevindt zich in een woonwijk.
              </li>
              <li>
                SculptClub behoudt zich het recht voor de toegang te ontzeggen
                bij herhaaldelijke overtreding van de huisregels.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* 7. Aansprakelijkheid */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">7. Aansprakelijkheid</h2>
            <p className="text-muted-foreground">
              Het gebruik van de studio en apparatuur is geheel op eigen risico.
              SculptClub is niet aansprakelijk voor letsel, schade aan
              eigendommen of verlies van persoonlijke bezittingen, tenzij dit het
              directe gevolg is van grove nalatigheid of opzet van SculptClub.
              SculptClub is niet aansprakelijk voor de diensten van zelfstandige
              trainers. De overeenkomst voor personal training is tussen jou en
              de trainer. Klanten en huurders zijn zelf verantwoordelijk voor het
              inwinnen van medisch advies voordat zij beginnen met een
              trainingsprogramma. SculptClub raadt aan om altijd een arts te
              raadplegen bij twijfel over je fysieke geschiktheid.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 8. Privacy */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">8. Privacy</h2>
            <p className="text-muted-foreground">
              SculptClub verwerkt persoonsgegevens in overeenstemming met de
              Algemene Verordening Gegevensbescherming (AVG). Voor meer
              informatie over hoe wij jouw gegevens verzamelen, gebruiken en
              beschermen, verwijzen wij naar ons{" "}
              <Link
                href="/nl/privacybeleid"
                className="text-brand hover:text-brand-dark underline"
              >
                Privacybeleid
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 9. Cameratoezicht */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">9. Cameratoezicht</h2>
            <p className="text-muted-foreground">
              In de gemeenschappelijke ruimtes van het pand kan cameratoezicht
              aanwezig zijn ten behoeve van de veiligheid. Er zijn geen
              camera&apos;s in de trainingsruimte zelf. Camerabeelden worden
              maximaal 4 weken bewaard en zijn alleen toegankelijk voor
              geautoriseerd personeel. Het cameratoezicht is aangegeven met
              borden bij de ingang. Voor meer informatie, zie ons{" "}
              <Link
                href="/nl/privacybeleid"
                className="text-brand hover:text-brand-dark underline"
              >
                Privacybeleid
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 10. Intellectueel eigendom */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              10. Intellectueel Eigendom
            </h2>
            <p className="text-muted-foreground">
              Alle intellectuele eigendomsrechten met betrekking tot de
              SculptClub website, branding, logo&apos;s, content en
              marketingmaterialen berusten bij SculptClub. Het is niet
              toegestaan om zonder voorafgaande schriftelijke toestemming
              materialen van SculptClub te kopiëren, verspreiden of te
              gebruiken voor commerciële doeleinden. Trainers mogen het
              SculptClub logo en de naam gebruiken voor het promoten van hun
              diensten bij SculptClub, mits dit in overeenstemming is met onze
              merkrichtlijnen.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 11. Toepasselijk recht */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              11. Toepasselijk Recht &amp; Geschillen
            </h2>
            <p className="text-muted-foreground">
              Op deze algemene voorwaarden en alle overeenkomsten met SculptClub
              is Nederlands recht van toepassing. Geschillen die voortvloeien
              uit of verband houden met deze voorwaarden worden voorgelegd aan de
              bevoegde rechter te Amsterdam. Voordat een geschil wordt
              voorgelegd aan de rechter, zullen partijen zich inspannen om het
              geschil in onderling overleg op te lossen.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* 12. Contact */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
            <p className="text-muted-foreground">
              Heb je vragen over deze voorwaarden? Neem contact met ons op:
            </p>
            <div className="mt-4 text-muted-foreground space-y-1">
              <p>
                <strong>SculptClub</strong>
              </p>
              <p>Egelantiersgracht 424</p>
              <p>1015 RR Amsterdam</p>
              <p>
                E-mail:{" "}
                <a
                  href="mailto:info@sculptclub.nl"
                  className="text-brand hover:text-brand-dark underline"
                >
                  info@sculptclub.nl
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
