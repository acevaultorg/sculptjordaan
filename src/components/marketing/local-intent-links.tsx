import Link from "next/link";
import { Section, SectionHeader } from "@/components/sections/section";
import { siteConfig } from "@/config/site";
import { openGymSinglePrice } from "@/config/acuity";
import {
  KeyRound,
  Briefcase,
  Users,
  Dumbbell,
  Warehouse,
  MapPin,
  ArrowRight,
} from "lucide-react";

/**
 * Cross-links between the pages that each answer ONE local search intent
 * (renting the room by the hour, the room as a base for trainers, small-group
 * training, training on your own, the equipment, the address). Before
 * 2026-09-30 these pages barely linked to each other: /nl/studio and
 * /nl/locatie-uren had no link to /nl/studio-huren at all. Every line below is
 * a fact already published elsewhere on the site (CLAUDE.md "Business Facts").
 * The current page is left out, so each page links to the other five.
 */
type Key = "rental" | "trainers" | "smallGroup" | "openGym" | "studio" | "location";

const ITEMS: Record<
  "nl" | "en",
  { key: Key; href: string; title: string; text: string; icon: typeof KeyRound }[]
> = {
  nl: [
    {
      key: "rental",
      href: "/nl/studio-huren",
      title: "Trainingsruimte huren per uur",
      text: "Halve studio vanaf €12, hele studio vanaf €17 per uur. Voor 1-op-1 of je eigen groep tot 8 personen.",
      icon: KeyRound,
    },
    {
      key: "trainers",
      href: "/nl/voor-trainers",
      title: "Voor personal trainers",
      text: "Je eigen klanten en je eigen tarief. Je huurt alleen de ruimte, zonder contract.",
      icon: Briefcase,
    },
    {
      key: "smallGroup",
      href: "/nl/small-group",
      title: "Small group training",
      text: "Trainen in een kleine groep van 2 tot 4, met een coach erbij.",
      icon: Users,
    },
    {
      key: "openGym",
      href: "/nl/open-gym",
      title: "Zelf trainen: Open Gym",
      text: `Maximaal 4 mensen tegelijk. Een losse sessie is €${openGymSinglePrice}, zonder abonnement.`,
      icon: Dumbbell,
    },
    {
      key: "studio",
      href: "/nl/studio",
      title: "De studio en apparatuur",
      text: "Squat rack, kabelmachine, dumbbells van 4 tot 40 kg en een Echo Bike.",
      icon: Warehouse,
    },
    {
      key: "location",
      href: "/nl/locatie-uren",
      title: "Locatie en openingstijden",
      text: `${siteConfig.address.street}, ${siteConfig.address.zip} Amsterdam. Elke dag open van 06:00 tot 22:00.`,
      icon: MapPin,
    },
  ],
  en: [
    {
      key: "rental",
      href: "/en/studio-rental",
      title: "Rent a training space by the hour",
      text: "Half studio from €12, full studio from €17 an hour. For 1-on-1 or your own group of up to 8.",
      icon: KeyRound,
    },
    {
      key: "trainers",
      href: "/en/for-trainers",
      title: "For personal trainers",
      text: "Your own clients and your own rates. You only rent the room, with no contract.",
      icon: Briefcase,
    },
    {
      key: "smallGroup",
      href: "/en/small-group",
      title: "Small group training",
      text: "Train in a small group of 2 to 4, with a coach.",
      icon: Users,
    },
    {
      key: "openGym",
      href: "/en/open-gym",
      title: "Train on your own: Open Gym",
      text: `Four people at most at a time. A single session is €${openGymSinglePrice}, no membership needed.`,
      icon: Dumbbell,
    },
    {
      key: "studio",
      href: "/en/studio",
      title: "The studio and equipment",
      text: "Squat rack, cable machine, dumbbells from 4 to 40 kg and an Echo Bike.",
      icon: Warehouse,
    },
    {
      key: "location",
      href: "/en/location-hours",
      title: "Location and opening hours",
      text: `${siteConfig.address.street}, ${siteConfig.address.zip} Amsterdam. Open every day from 06:00 to 22:00.`,
      icon: MapPin,
    },
  ],
};

export function LocalIntentLinks({
  locale,
  current,
  bg,
}: {
  locale: "nl" | "en";
  current: Key;
  bg?: "default" | "muted";
}) {
  const items = ITEMS[locale].filter((i) => i.key !== current);
  return (
    <Section bg={bg}>
      <SectionHeader
        overline={locale === "nl" ? "Trainen in de Jordaan" : "Training in the Jordaan"}
        title={locale === "nl" ? "Meer bij SculptClub" : "More at SculptClub"}
      />
      <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.key}>
            <Link
              href={item.href}
              className="group flex h-full min-h-11 items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted"
            >
              <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-foreground group-hover:text-primary">
                  {item.title.slice(0, item.title.lastIndexOf(" ") + 1)}
                  {/* Last word + arrow never split, so the arrow can't wrap onto a line alone. */}
                  <span className="whitespace-nowrap">
                    {item.title.slice(item.title.lastIndexOf(" ") + 1)}
                    <ArrowRight className="ml-1.5 inline-block h-4 w-4 align-[-2px] transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{item.text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
