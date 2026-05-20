import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Plan gratis intake met Joey";
const description = "Gratis intake met Joey — The Ascend Method: kracht, ademwerk en zelfonderzoek bij SculptClub Amsterdam Jordaan. Voor high-performers die vastzitten of burn-out ervaren.";
const canonical = "/nl/plan-gratis-intake-met-joey";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-joey", en: "/en/plan-free-intro-with-joey" } },
  ...trainerIntakeOg("joey", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="joey" locale="nl" />;
}
