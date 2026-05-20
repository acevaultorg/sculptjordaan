import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Plan gratis intake met Jearmey";
const description = "Gratis intake met Jearmey — specialist in kracht, afvallen en atletische prestaties bij SculptClub Amsterdam Jordaan. Geen verplichtingen.";
const canonical = "/nl/plan-gratis-intake-met-jearmey";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-jearmey", en: "/en/plan-free-intro-with-jearmey" } },
  ...trainerIntakeOg("jearmey", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="jearmey" locale="nl" />;
}
