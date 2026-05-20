import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Plan gratis intake met Sergei";
const description = "Gratis intake met Sergei — gecertificeerd personal trainer met 10+ jaar ervaring. Lichaamsrecompositie, houdingscorrectie, kracht & herstel bij SculptClub Amsterdam Jordaan.";
const canonical = "/nl/plan-gratis-intake-met-sergei";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-sergei", en: "/en/plan-free-intro-with-sergei" } },
  ...trainerIntakeOg("sergei", "nl", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="sergei" locale="nl" />;
}
