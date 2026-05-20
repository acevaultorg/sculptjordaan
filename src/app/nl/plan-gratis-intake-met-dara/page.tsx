import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Plan gratis intake met Dara";
const description = "Gratis intake met Dara — personal training en small group specialist bij SculptClub Amsterdam Jordaan. Geen verplichtingen.";
const canonical = "/nl/plan-gratis-intake-met-dara";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-dara", en: "/en/plan-free-intro-with-dara" } },
  ...trainerIntakeOg("dara", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="dara" locale="nl" />;
}
