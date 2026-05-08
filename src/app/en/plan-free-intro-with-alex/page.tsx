import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book free intro with Alex",
  description: "Book a free intro with Alex — strength, calisthenics and recovery specialist at SculptClub Amsterdam Jordaan. No commitment.",
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical: "/en/plan-free-intro-with-alex", languages: { nl: "/nl/plan-gratis-intake-met-alex", en: "/en/plan-free-intro-with-alex" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="alex" locale="en" />;
}
