import { TrainerIntakePage } from "@/components/marketing/trainer-intake";
import type { Metadata } from "next";
import { trainerIntakeOg } from "@/lib/trainer-intake-meta";

const title = "Book a free intro with Tom";
const description = "Free intro with Tom — personal trainer with 12 years' experience (Mayfair & Soho, London). Strength & conditioning, sustainable training and Brazilian Jiu-Jitsu at SculptClub Amsterdam Jordaan.";
const canonical = "/en/plan-free-intro-with-tom";

export const metadata: Metadata = {
  title,
  description,
  // Noindex: conversion-funnel route, not editorial. Templated trainer-intake pages = doorway-pattern risk.
  robots: { index: false, follow: true },
  alternates: { canonical, languages: { nl: "/nl/plan-gratis-intake-met-tom", en: "/en/plan-free-intro-with-tom" } },
  ...trainerIntakeOg("tom", "en", { title, description, canonical }),
};

export default function Page() {
  return <TrainerIntakePage trainerId="tom" locale="en" />;
}
