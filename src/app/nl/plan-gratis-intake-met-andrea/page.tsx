import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Plan gratis intake met Andrea";
const description = "Gratis intake met Andrea — specialist in houding, techniek en kracht bij SculptClub Amsterdam Jordaan. Vanaf €45/sessie.";
const canonical = "/nl/plan-gratis-intake-met-andrea";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-andrea", en: "/en/plan-free-intro-with-andrea" } },
  ...trainerIntakeOg("andrea", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="andrea" locale="nl" />;
}
