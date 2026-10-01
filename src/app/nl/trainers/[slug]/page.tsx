import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrainerProfilePage, profileMetadataFor } from "@/components/marketing/trainer-directory";
import { directoryTrainers } from "@/lib/trainer-directory";

// Static export: only the slugs in the directory data exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return directoryTrainers.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return profileMetadataFor(slug, "nl");
}

export default async function TrainerProfileNl({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!directoryTrainers.some((t) => t.slug === slug)) notFound();
  return <TrainerProfilePage locale="nl" slug={slug} />;
}
