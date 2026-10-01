import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/sections/section";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { TrainerProfileForm } from "@/components/marketing/trainer-profile-form";

export const metadata: Metadata = {
  title: { absolute: "Add your trainer profile | SculptClub" },
  description:
    "Personal trainer in Amsterdam? Add your profile to the SculptClub trainer directory. We only show your profile with your consent.",
  alternates: {
    canonical: "/en/trainers/add-your-profile",
    languages: { nl: "/nl/trainers/profiel-toevoegen", en: "/en/trainers/add-your-profile" },
  },
};

export default function AddProfileEn() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Personal trainers", url: "/en/trainers" },
          { name: "Add your profile", url: "/en/trainers/add-your-profile" },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-xl">
          <h1 className="text-3xl font-bold text-balance sm:text-4xl">Add your profile</h1>
          <p className="mt-3 text-lg text-muted-foreground">Personal trainer in Amsterdam? Let new clients find you.</p>
          <p className="mb-8 mt-2 text-sm text-muted-foreground">
            We show your name, specialties, neighbourhood, languages and a link. Nothing goes online without your consent.
          </p>
          <TrainerProfileForm locale="en" />
        </div>
      </Section>
    </PageLayout>
  );
}
