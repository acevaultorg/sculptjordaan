import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book free intro with Eva",
  description: "Book a free intro with Eva — certified dietitian and strength coach at SculptClub Amsterdam Jordaan. Training + nutrition, no commitment.",
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical: "/en/plan-free-intro-with-eva", languages: { nl: "/nl/plan-gratis-intake-met-eva", en: "/en/plan-free-intro-with-eva" } },
};

export default function Page() {
  return <TrainerIntakePage trainerId="eva" locale="en" />;
}
