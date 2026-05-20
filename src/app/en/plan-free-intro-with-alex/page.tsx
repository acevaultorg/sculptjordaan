import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book free intro with Alex";
const description = "Book a free intro with Alex — strength, calisthenics and recovery specialist at SculptClub Amsterdam Jordaan. No commitment.";
const canonical = "/en/plan-free-intro-with-alex";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-alex", en: "/en/plan-free-intro-with-alex" } },
  ...trainerIntakeOg("alex", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="alex" locale="en" />;
}
