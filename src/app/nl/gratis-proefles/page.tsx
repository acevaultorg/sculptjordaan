import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { AcuityEmbed } from "@/components/marketing/acuity-embed";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, whatsappLinks } from "@/config/acuity";
import { MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Gratis Open Gym proefles boeken — Privé Studio Jordaan | SculptClub Amsterdam",
  },
  description:
    "Boek je gratis Open Gym proefles bij SculptClub in de Jordaan. Kom vrijblijvend langs en train één sessie gratis — geen abonnement, geen verplichting.",
  alternates: {
    canonical: "/nl/gratis-proefles",
    languages: { nl: "/nl/gratis-proefles", en: "/en/free-trial" },
  },
  openGraph: {
    type: "website",
    url: "/nl/gratis-proefles",
    title:
      "Gratis Open Gym proefles boeken — Privé Studio Jordaan | SculptClub Amsterdam",
    description:
      "Boek je gratis Open Gym proefles bij SculptClub in de Jordaan. Kom vrijblijvend langs en train één sessie gratis — geen abonnement, geen verplichting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratis Open Gym proefles boeken | SculptClub Amsterdam",
    description:
      "Boek je gratis Open Gym proefles bij SculptClub in de Jordaan. Vrijblijvend, geen abonnement.",
  },
};

export default function GratisProeflesPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Open Gym", url: "/nl/open-gym" },
          { name: "Gratis proefles", url: "/nl/gratis-proefles" },
        ]}
      />
      <Section>
        <SectionHeader
          overline="Gratis proefles"
          title="Plan je gratis proefles"
          description="Kies een tijd en kom langs. Geen verplichting, geen abonnement — ervaar eerst zelf hoe rustig en compleet onze privé studio in de Jordaan is."
        />
        <AcuityEmbed
          url={acuityFreeTrials.openGymTryout}
          title="Boek je gratis Open Gym proefles bij SculptClub"
          intent="open_gym"
          pricing="free"
          height={900}
          className="-mx-4 rounded-none overflow-hidden bg-white sm:mx-auto sm:max-w-3xl sm:rounded-2xl"
        />
        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            Past geen enkel moment of heb je een vraag? Stuur ons even een
            berichtje — we denken graag met je mee.
          </p>
          <ButtonLink
            href={whatsappLinks.openGymNl}
            variant="outline"
            size="lg"
            external
          >
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
            Stel je vraag via WhatsApp
          </ButtonLink>
        </div>
      </Section>
    </PageLayout>
  );
}
