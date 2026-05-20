import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Plan gratis intake met Gezina";
const description = "Gratis intake met Gezina — gecertificeerde personal trainer gespecialiseerd in vrouwentraining, kracht en prestatie bij SculptClub Amsterdam Jordaan. Geen verplichtingen.";
const canonical = "/nl/plan-gratis-intake-met-gezina";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-gezina", en: "/en/plan-free-intro-with-gezina" } },
  ...trainerIntakeOg("gezina", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="gezina" locale="nl" />;
}
