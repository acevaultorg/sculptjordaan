import type { Metadata } from "next";
import { trainers } from "@/config/trainers";
import type { Locale } from "@/config/site";

/**
 * trainerIntakeOg — returns Metadata.openGraph + Metadata.twitter blocks for
 * a per-trainer intake page. Spread into each /<locale>/plan-(gratis-)intake-
 * <trainer> route's `export const metadata`.
 *
 * Why this exists: each per-trainer route already has a carefully hand-
 * written title + description. Before this helper, none of the 18 routes
 * had openGraph/twitter blocks → every WhatsApp/iMessage/Slack/Discord
 * share rendered the site-default OG image (studio facade) instead of the
 * trainer's photo + name. Friends pasting "check out Bryan: <url>" got
 * a generic preview; recipients had no idea the link was about Bryan.
 *
 * The helper takes (id, locale, {title, description, canonical}) and
 * returns OG + Twitter Card blocks pre-filled with the trainer's image +
 * alt + locale + brand. The route's `Metadata` object spreads this in:
 *
 *   ...trainerIntakeOg("bryan", "nl", { title, description, canonical }),
 *
 * Type-narrow return so Next.js typechecks the metadata shape correctly.
 */
export function trainerIntakeOg(
  trainerId: string,
  locale: Locale,
  opts: { title: string; description: string; canonical: string }
): Pick<Metadata, "openGraph" | "twitter"> {
  const trainer = trainers.find((t) => t.id === trainerId);
  if (!trainer) {
    // Surface as build-time error rather than ship silent fallback OG.
    // Caller misuse should fail loud per `rules/status-report-honesty`.
    throw new Error(`trainerIntakeOg: unknown trainerId "${trainerId}"`);
  }

  const imgAlt =
    locale === "nl"
      ? `${trainer.name}, personal trainer bij SculptClub Amsterdam Jordaan`
      : `${trainer.name}, personal trainer at SculptClub Amsterdam Jordaan`;

  return {
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.canonical,
      type: "profile",
      locale: locale === "nl" ? "nl_NL" : "en_US",
      siteName: "SculptClub",
      images: [{ url: trainer.image, alt: imgAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [trainer.image],
    },
  };
}
