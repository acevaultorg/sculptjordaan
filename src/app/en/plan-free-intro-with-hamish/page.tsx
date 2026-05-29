import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book free intro with Hamish";
const description = "Book a free intro with Hamish — personal trainer specializing in strength, high performance and fat loss at SculptClub Amsterdam Jordaan. No commitment.";
const canonical = "/en/plan-free-intro-with-hamish";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-hamish", en: "/en/plan-free-intro-with-hamish" } },
  ...trainerIntakeOg("hamish", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="hamish" locale="en" />;
}
