import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/sections/section";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { TrainerProfileForm } from "@/components/marketing/trainer-profile-form";

export const metadata: Metadata = {
  title: { absolute: "Profiel toevoegen voor trainers | SculptClub" },
  description:
    "Personal trainer in Amsterdam? Zet je profiel in de trainergids van SculptClub. We tonen je profiel alleen met jouw toestemming.",
  alternates: {
    canonical: "/nl/trainers/profiel-toevoegen",
    languages: { nl: "/nl/trainers/profiel-toevoegen", en: "/en/trainers/add-your-profile" },
  },
};

export default function AddProfileNl() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Personal trainers", url: "/nl/trainers" },
          { name: "Profiel toevoegen", url: "/nl/trainers/profiel-toevoegen" },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-xl">
          <h1 className="text-3xl font-bold text-balance sm:text-4xl">Zet je profiel in de gids</h1>
          <p className="mt-3 text-lg text-muted-foreground">Personal trainer in Amsterdam? Laat nieuwe klanten je vinden.</p>
          <p className="mb-8 mt-2 text-sm text-muted-foreground">
            We tonen je naam, specialiteiten, wijk, talen en een link. Niets komt online zonder jouw toestemming.
          </p>
          <TrainerProfileForm locale="nl" />
        </div>
      </Section>
    </PageLayout>
  );
}
