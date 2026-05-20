import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Plan gratis intake met Eva";
const description = "Gratis intake met Eva — gediplomeerd diëtist en personal trainer bij SculptClub Amsterdam Jordaan. Kracht + voeding, geen verplichtingen.";
const canonical = "/nl/plan-gratis-intake-met-eva";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-eva", en: "/en/plan-free-intro-with-eva" } },
  ...trainerIntakeOg("eva", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="eva" locale="nl" />;
}
