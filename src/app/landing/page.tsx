import type { Metadata } from "next";
import { SplitLanding, type SplitLandingCopy } from "@/components/marketing/split-landing";
import { studioRentalFromPrice } from "@/config/acuity";

/**
 * /landing — campaign split page (Instagram bio, TikTok, QR codes). Dutch, like
 * every un-prefixed page on this site; English twin at /en/landing.
 * noindex,follow while it is a campaign page: it must not compete with / for
 * brand search, and follow keeps the links it points at crawlable.
 */

const title = "SculptClub: studio huren of trainen in de Jordaan";
const description =
  "Personal trainer? Huur de studio per uur. Wil je trainen? Vind je trainer, groepsles of Open Gym. Jordaan, Amsterdam.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: { index: false, follow: true },
  alternates: {
    canonical: "/landing",
    languages: { nl: "/landing", en: "/en/landing" },
  },
  openGraph: { type: "website", url: "/landing", title, description },
  twitter: { card: "summary_large_image", title, description },
};

const copy: SplitLandingCopy = {
  locale: "nl",
  homeHref: "/",
  homeLabel: "SculptClub, naar de homepage",
  langLabel: "Taal",
  switchLang: { label: "EN", href: "/en/landing", hrefLang: "en", ariaLabel: "English" },
  trainer: {
    eyebrow: "Ik ben trainer",
    headline: "Jouw klanten, jouw studio.",
    support: `Studio per uur, vanaf €${studioRentalFromPrice}.`,
    // Paulo 2026-10-04 (muu5d6dn1ypv53): "Huur studio" first, "Bekijk de studio" underneath.
    cta: { label: "Huur studio", href: "/nl/boek-studio" },
    pills: [{ label: "Bekijk de studio", href: "/nl/studio-huren" }],
    menuHref: "/nl/studio-huren",
    image: {
      picture: "landing-trainer",
      alt: "Personal trainer coacht een cliënt bij schouderdrukken met dumbbells in de studio van SculptClub",
      position: { base: "50% 45%", md: "50% 30%" },
    },
  },
  client: {
    eyebrow: "Ik wil trainen",
    headline: "Sterker worden?",
    support: "Begin met een gratis intake.",
    cta: { label: "Kies je trainer", href: "/nl/vind-jouw-personal-trainer" },
    pills: [
      { label: "Groepsles", href: "/nl/small-group" },
      { label: "Open Gym", href: "/nl/open-gym" },
    ],
    image: {
      picture: "landing-client",
      alt: "Een vrouw traint met dumbbells in de SculptClub studio",
      position: { base: "50% 30%", md: "50% 0%" },
    },
  },
};

export default function LandingPageNL() {
  return <SplitLanding copy={copy} />;
}
