import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/sections/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toegankelijkheid",
  description: "SculptClub toegankelijkheidsverklaring. Onze inzet voor digitale en fysieke toegankelijkheid.",
  alternates: { canonical: "/nl/toegankelijkheid", languages: { nl: "/nl/toegankelijkheid", en: "/en/accessibility-statement" } },
};

export default function AccessibilityNL() {
  return (
    <PageLayout>
      <Section>
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h1>Toegankelijkheidsverklaring</h1>

          <p>SculptClub streeft ernaar onze website en studio toegankelijk te maken voor iedereen. We richten ons op WCAG 2.1 Level AA.</p>

          <h2>Digitale toegankelijkheid</h2>
          <ul>
            <li>Toetsenbordnavigatie op alle pagina&apos;s</li>
            <li>Ondersteuning voor schermlezers</li>
            <li>Voldoende kleurcontrast (WCAG AA)</li>
            <li>Alt-teksten op alle afbeeldingen</li>
            <li>Duidelijke koppenstructuur</li>
            <li>Aanraakdoelen van minimaal 44px</li>
          </ul>

          <h2>Fysieke toegankelijkheid</h2>
          <p>Onze studio bevindt zich in een historisch pand in de Jordaan. Hierdoor zijn er beperkingen in de fysieke toegankelijkheid. Neem contact met ons op als je specifieke behoeften hebt — we denken graag mee.</p>

          <h2>Feedback</h2>
          <p>Ervaar je problemen met de toegankelijkheid? Laat het ons weten via info@sculptclub.nl of WhatsApp. We nemen je feedback serieus en werken continu aan verbeteringen.</p>
        </div>
      </Section>
    </PageLayout>
  );
}
