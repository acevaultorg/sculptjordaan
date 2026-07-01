import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Plan gratis intake met Tom";
const description = "Gratis intake met Tom — personal trainer met 12 jaar ervaring (Mayfair & Soho, Londen). Kracht & conditie, duurzame training en Brazilian Jiu-Jitsu bij SculptClub Amsterdam Jordaan.";
const canonical = "/nl/plan-gratis-intake-met-tom";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-tom", en: "/en/plan-free-intro-with-tom" } },
  ...trainerIntakeOg("tom", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="tom" locale="nl" />;
}
