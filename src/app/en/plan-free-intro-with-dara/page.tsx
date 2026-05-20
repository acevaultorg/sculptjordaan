import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book free intro with Dara";
const description = "Book a free intro with Dara — personal training and small group specialist at SculptClub Amsterdam Jordaan. No commitment.";
const canonical = "/en/plan-free-intro-with-dara";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-dara", en: "/en/plan-free-intro-with-dara" } },
  ...trainerIntakeOg("dara", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="dara" locale="en" />;
}
