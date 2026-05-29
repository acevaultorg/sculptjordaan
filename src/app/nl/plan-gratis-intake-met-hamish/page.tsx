import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Plan gratis intake met Hamish";
const description = "Gratis intake met Hamish — personal trainer gespecialiseerd in kracht, high performance en afvallen bij SculptClub Amsterdam Jordaan. Geen verplichtingen.";
const canonical = "/nl/plan-gratis-intake-met-hamish";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-hamish", en: "/en/plan-free-intro-with-hamish" } },
  ...trainerIntakeOg("hamish", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="hamish" locale="nl" />;
}
