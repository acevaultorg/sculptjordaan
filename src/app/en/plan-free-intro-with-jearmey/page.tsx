import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book free intro with Jearmey";
const description = "Free intro with Jearmey — strength, fat loss and athletic performance specialist at SculptClub Amsterdam Jordaan. No commitment.";
const canonical = "/en/plan-free-intro-with-jearmey";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-jearmey", en: "/en/plan-free-intro-with-jearmey" } },
  ...trainerIntakeOg("jearmey", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="jearmey" locale="en" />;
}
