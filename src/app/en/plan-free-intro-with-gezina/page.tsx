import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book free intro with Gezina";
const description = "Book a free intro with Gezina — certified personal trainer specializing in women's training, strength and performance at SculptClub Amsterdam Jordaan. No commitment.";
const canonical = "/en/plan-free-intro-with-gezina";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-gezina", en: "/en/plan-free-intro-with-gezina" } },
  ...trainerIntakeOg("gezina", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="gezina" locale="en" />;
}
