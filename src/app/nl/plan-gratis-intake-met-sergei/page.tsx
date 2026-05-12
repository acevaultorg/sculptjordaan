import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan gratis intake met Sergei",
  description: "Gratis intake met Sergei — gecertificeerd personal trainer met 10+ jaar ervaring. Lichaamsrecompositie, houdingscorrectie, kracht & herstel bij SculptClub Amsterdam Jordaan.",
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical: "/nl/plan-gratis-intake-met-sergei", languages: { nl: "/nl/plan-gratis-intake-met-sergei", en: "/en/plan-free-intro-with-sergei" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="sergei" locale="nl" />;
}
