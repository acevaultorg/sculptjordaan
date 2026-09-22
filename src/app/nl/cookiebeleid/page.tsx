import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/sections/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description: "SculptClub cookiebeleid. Welke cookies we gebruiken, waarom, en hoe je je voorkeuren kunt beheren op onze website.",
  alternates: { canonical: "/nl/cookiebeleid", languages: { nl: "/nl/cookiebeleid", en: "/en/cookie-policy" } },
  openGraph: {
    type: "website",
    url: "/nl/cookiebeleid",
    title: "Cookiebeleid",
    description:
      "SculptClub cookiebeleid. Welke cookies we gebruiken, waarom, en hoe je je voorkeuren kunt beheren op onze website.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookiebeleid",
    description:
      "SculptClub cookiebeleid. Welke cookies we gebruiken, waarom, en hoe je je voorkeuren kunt beheren op onze website.",
  },
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
          {/* Added 2026-09-22. Clarity and Bing UET demonstrably run on every
              page and set cookies, and stonden hier niet in — Clarity is
              bovendien het meest privacygevoelige dat de site laadt, want het
              maakt sessieopnamen. Cookienamen en doel komen letterlijk uit
              Microsofts eigen documentatie (learn.microsoft.com/clarity/
              setup-and-installation/clarity-cookies); bewaartermijnen staan
              daar niet en worden hier dus ook niet genoemd in plaats van
              geraden. */}
          <p>
            Microsoft Clarity maakt heatmaps en sessieopnamen: we zien
            geanonimiseerd terug waar bezoekers klikken, scrollen en vastlopen,
            zodat we de site kunnen verbeteren. Clarity plaatst hiervoor de
            first-party cookies <code>_clck</code> (een pseudonieme Clarity
            gebruikers-ID) en <code>_clsk</code> (koppelt meerdere paginaweergaven
            aan één sessieopname), en kan daarnaast cookies van Microsoft zelf
            plaatsen (CLID, ANONCHK, MR, MUID en SM). Microsoft is hiervoor
            verwerker; hun eigen cookieoverzicht staat in de Clarity-documentatie.
          </p>
          <p>
            Microsoft Advertising (Bing UET) laadt mee om te meten of een bezoek
            uit Bing tot een boeking leidt. We tonen zelf geen advertenties op
            Bing; de tag dient uitsluitend voor meting.
          </p>

          <h3>Marketing cookies</h3>
          <p>Facebook Pixel, TikTok Pixel en Google Ads helpen ons relevante advertenties te tonen. Deze cookies worden alleen geplaatst met je toestemming.</p>

          <h2>Je cookies beheren</h2>
          <p>Je kunt je cookievoorkeuren wijzigen via de cookiebanner onderaan de pagina, of via je browserinstellingen.</p>

          <h2>Contact</h2>
          <p>SculptClub<br />Egelantiersgracht 424, 1015 RR Amsterdam<br />contact@sculptclub.nl</p>
        </div>
      </Section>
    </PageLayout>
  );
}
