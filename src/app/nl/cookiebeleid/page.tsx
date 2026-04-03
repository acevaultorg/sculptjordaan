import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/sections/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description: "SculptClub cookiebeleid. Welke cookies we gebruiken, waarom, en hoe je je voorkeuren kunt beheren op onze website.",
  alternates: { canonical: "/nl/cookiebeleid", languages: { nl: "/nl/cookiebeleid", en: "/en/cookie-policy" } },
};

export default function CookiePolicyNL() {
  return (
    <PageLayout>
      <Section>
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          <h1>Cookiebeleid</h1>
          <p className="text-sm text-muted-foreground">Laatst bijgewerkt: 23 februari 2026</p>

          <h2>Wat zijn cookies?</h2>
          <p>Cookies zijn kleine tekstbestanden die op je apparaat worden opgeslagen wanneer je onze website bezoekt.</p>

          <h2>Welke cookies gebruiken wij?</h2>

          <h3>Noodzakelijke cookies</h3>
          <p>Vereist voor de werking van de website. Kunnen niet worden uitgeschakeld.</p>

          <h3>Functionele cookies</h3>
          <p>Onthouden je voorkeuren zoals taalinstelling en cookiekeuze.</p>

          <h3>Analytische cookies</h3>
          <p>Google Analytics 4 (GA4) helpt ons begrijpen hoe bezoekers de website gebruiken. Deze data is geanonimiseerd.</p>

          <h3>Marketing cookies</h3>
          <p>Facebook Pixel en Google Ads helpen ons relevante advertenties te tonen. Deze cookies worden alleen geplaatst met je toestemming.</p>

          <h2>Je cookies beheren</h2>
          <p>Je kunt je cookievoorkeuren wijzigen via de cookiebanner onderaan de pagina, of via je browserinstellingen.</p>

          <h2>Contact</h2>
          <p>SculptClub<br />Egelantiersgracht 424, 1015 RR Amsterdam<br />contact@sculptclub.nl</p>
        </div>
      </Section>
    </PageLayout>
  );
}
