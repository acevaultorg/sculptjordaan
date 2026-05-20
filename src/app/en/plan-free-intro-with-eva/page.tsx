import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book free intro with Eva";
const description = "Book a free intro with Eva — certified dietitian and strength coach at SculptClub Amsterdam Jordaan. Training + nutrition, no commitment.";
const canonical = "/en/plan-free-intro-with-eva";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-eva", en: "/en/plan-free-intro-with-eva" } },
  ...trainerIntakeOg("eva", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="eva" locale="en" />;
}
