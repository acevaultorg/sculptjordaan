import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a free intro with Sergei",
  description: "Free intro with Sergei — certified personal trainer with 10+ years of experience. Body recomposition, posture correction, strength & recovery at SculptClub Amsterdam Jordaan.",
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical: "/en/plan-free-intro-with-sergei", languages: { nl: "/nl/plan-gratis-intake-met-sergei", en: "/en/plan-free-intro-with-sergei" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="sergei" locale="en" />;
}
