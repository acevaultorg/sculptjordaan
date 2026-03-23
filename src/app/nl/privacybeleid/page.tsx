import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacybeleid — SculptClub Amsterdam Jordaan",
  description:
    "Privacybeleid van SculptClub. Hoe wij jouw persoonsgegevens verzamelen, gebruiken en beschermen conform de AVG.",
  alternates: {
    canonical: "/nl/privacybeleid",
    languages: {
      nl: "/nl/privacybeleid",
      en: "/en/privacy-policy",
    },
  },
};

export default function PrivacyPageNL() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          overline="Juridisch"
          title="Privacybeleid"
          description="Laatst bijgewerkt: 23 februari 2026"
        />
      </Section>

      {/* Intro */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Inleiding</h2>
            <p className="text-muted-foreground">
              SculptClub (&quot;wij&quot;, &quot;ons&quot;, &quot;onze&quot;),
              gevestigd aan Egelantiersgracht 424, 1015 RR Amsterdam, is
              verantwoordelijk voor de verwerking van persoonsgegevens zoals
              beschreven in dit privacybeleid. Wij respecteren jouw privacy en
              verwerken persoonsgegevens in overeenstemming met de Algemene
              Verordening Gegevensbescherming (AVG/GDPR). Dit beleid legt uit
              welke gegevens wij verzamelen, waarom, hoe wij ze gebruiken en
              welke rechten je hebt.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Welke gegevens */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              1. Welke Gegevens Verzamelen Wij?
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              1.1 Contactgegevens
            </h3>
            <p className="text-muted-foreground">
              Naam, e-mailadres, telefoonnummer — wanneer je een boeking maakt,
              contact met ons opneemt of je aanmeldt voor onze diensten.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              1.2 Boekingsgegevens
            </h3>
            <p className="text-muted-foreground">
              Datum, tijd en type van geboekte sessies, annuleringshistorie en
              voorkeuren — via ons boekingssysteem (Acuity Scheduling).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              1.3 Betalingsgegevens
            </h3>
            <p className="text-muted-foreground">
              Transactie-informatie en betalingsbevestigingen. Wij slaan geen
              creditcard- of bankgegevens op. Betalingen worden verwerkt door
              onze betalingsverwerkers (Stripe/iDEAL).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              1.4 Websitegebruik
            </h3>
            <p className="text-muted-foreground">
              IP-adres, browsertype, bezochte pagina&apos;s, verwijzende
              websites en sessieduur — via cookies en analysetools. Zie ons{" "}
              <Link
                href="/nl/cookiebeleid"
                className="text-brand hover:text-brand-dark underline"
              >
                Cookiebeleid
              </Link>{" "}
              voor meer informatie.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              1.5 Communicatie
            </h3>
            <p className="text-muted-foreground">
              Inhoud van berichten die je ons stuurt via e-mail, WhatsApp of
              contactformulieren.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Hoe gebruiken */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              2. Hoe Gebruiken Wij Jouw Gegevens?
            </h2>
            <p className="text-muted-foreground mb-4">
              Wij verwerken jouw gegevens voor de volgende doeleinden:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Dienstverlening:</strong> het verwerken van boekingen,
                versturen van bevestigingen en deurcodes, en het leveren van onze
                diensten.
              </li>
              <li>
                <strong>Communicatie:</strong> het beantwoorden van vragen en het
                versturen van relevante informatie over je boekingen.
              </li>
              <li>
                <strong>Verbetering:</strong> het analyseren van websitegebruik
                om onze diensten en gebruikerservaring te verbeteren.
              </li>
              <li>
                <strong>Marketing:</strong> het versturen van promotionele
                berichten, alleen met jouw uitdrukkelijke toestemming. Je kunt je
                op elk moment afmelden.
              </li>
              <li>
                <strong>Wettelijke verplichtingen:</strong> het voldoen aan
                fiscale en administratieve verplichtingen.
              </li>
              <li>
                <strong>Veiligheid:</strong> het waarborgen van de veiligheid van
                onze studio en bezoekers.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* Grondslagen */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              3. Rechtsgronden voor Verwerking
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Uitvoering van een overeenkomst:</strong> voor het
                verwerken van boekingen en leveren van diensten.
              </li>
              <li>
                <strong>Gerechtvaardigd belang:</strong> voor het verbeteren van
                onze diensten en het waarborgen van veiligheid.
              </li>
              <li>
                <strong>Toestemming:</strong> voor het versturen van
                marketingberichten en het plaatsen van analytische cookies.
              </li>
              <li>
                <strong>Wettelijke verplichting:</strong> voor het voldoen aan
                fiscale en administratieve verplichtingen.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* Delen */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              4. Delen met Derden
            </h2>
            <p className="text-muted-foreground mb-4">
              Wij delen jouw gegevens alleen met dienstverleners die noodzakelijk
              zijn voor onze bedrijfsvoering:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Acuity Scheduling:</strong> boekingsbeheer (VS,
                EU-standaardcontractbepalingen).
              </li>
              <li>
                <strong>Stripe:</strong> betalingsverwerking (PCI DSS compliant).
              </li>
              <li>
                <strong>Google Analytics:</strong> websiteanalyse
                (geanonimiseerde gegevens).
              </li>
              <li>
                <strong>Meta (Facebook):</strong> advertentie-effectiviteit (via
                Pixel, geanonimiseerd).
              </li>
              <li>
                <strong>Hostingproviders:</strong> voor het hosten van onze
                website.
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Wij verkopen nooit jouw persoonsgegevens aan derden. Alle
              dienstverleners zijn contractueel verplicht jouw gegevens te
              beschermen.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Cookies */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
            <p className="text-muted-foreground">
              Onze website maakt gebruik van cookies. Voor gedetailleerde
              informatie over welke cookies wij gebruiken en hoe je ze kunt
              beheren, verwijzen wij naar ons{" "}
              <Link
                href="/nl/cookiebeleid"
                className="text-brand hover:text-brand-dark underline"
              >
                Cookiebeleid
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Rechten */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">6. Jouw Rechten</h2>
            <p className="text-muted-foreground mb-4">
              Op grond van de AVG heb je de volgende rechten:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Recht op inzage:</strong> je kunt opvragen welke
                gegevens wij van je verwerken.
              </li>
              <li>
                <strong>Recht op rectificatie:</strong> je kunt onjuiste
                gegevens laten corrigeren.
              </li>
              <li>
                <strong>Recht op verwijdering:</strong> je kunt verzoeken om
                verwijdering van je gegevens (&quot;recht om vergeten te
                worden&quot;).
              </li>
              <li>
                <strong>Recht op gegevensoverdraagbaarheid:</strong> je kunt
                verzoeken om je gegevens in een gestructureerd, gangbaar formaat
                te ontvangen.
              </li>
              <li>
                <strong>Recht op beperking:</strong> je kunt verzoeken om
                beperking van de verwerking van je gegevens.
              </li>
              <li>
                <strong>Recht van bezwaar:</strong> je kunt bezwaar maken tegen
                de verwerking van je gegevens.
              </li>
              <li>
                <strong>Recht op intrekking toestemming:</strong> als de
                verwerking is gebaseerd op toestemming, kun je deze op elk moment
                intrekken.
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Om gebruik te maken van je rechten, neem contact met ons op via{" "}
              <a
                href="mailto:info@sculptclub.nl"
                className="text-brand hover:text-brand-dark underline"
              >
                info@sculptclub.nl
              </a>
              . Wij reageren binnen 30 dagen op je verzoek.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Bewaartermijnen */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">7. Bewaartermijnen</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Boekingsgegevens:</strong> 2 jaar na laatste boeking.
              </li>
              <li>
                <strong>Financiële administratie:</strong> 7 jaar (wettelijke
                verplichting).
              </li>
              <li>
                <strong>Marketingvoorkeuren:</strong> tot intrekking van
                toestemming.
              </li>
              <li>
                <strong>Website-analysegegevens:</strong> 26 maanden (Google
                Analytics standaard).
              </li>
              <li>
                <strong>Camerabeelden:</strong> maximaal 4 weken.
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* Cameratoezicht */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">8. Cameratoezicht</h2>
            <p className="text-muted-foreground">
              In de gemeenschappelijke ruimtes van het pand kan cameratoezicht
              aanwezig zijn. Dit is noodzakelijk voor de beveiliging van het pand
              en de veiligheid van onze bezoekers. Er zijn geen camera&apos;s in
              de trainingsruimte. Beelden worden maximaal 4 weken bewaard en
              zijn uitsluitend toegankelijk voor geautoriseerd personeel. De
              rechtsgrond hiervoor is ons gerechtvaardigd belang (beveiliging).
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Beveiliging */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              9. Beveiliging van Gegevens
            </h2>
            <p className="text-muted-foreground">
              Wij nemen passende technische en organisatorische maatregelen om
              jouw persoonsgegevens te beschermen tegen onbevoegde toegang,
              verlies of misbruik. Dit omvat onder meer SSL-versleuteling,
              beveiligde servers en beperkte toegang tot gegevens.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Klachten */}
      <Section bg="muted">
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">10. Klachten</h2>
            <p className="text-muted-foreground">
              Heb je een klacht over de verwerking van je persoonsgegevens?
              Neem dan eerst contact met ons op. Mochten wij er samen niet
              uitkomen, dan heb je het recht om een klacht in te dienen bij de
              Autoriteit Persoonsgegevens (
              <a
                href="https://autoriteitpersoonsgegevens.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark underline"
              >
                autoriteitpersoonsgegevens.nl
              </a>
              ).
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Contact */}
      <Section>
        <FadeIn>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">11. Contact</h2>
            <p className="text-muted-foreground">
              Voor vragen over dit privacybeleid of om gebruik te maken van je
              rechten:
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
