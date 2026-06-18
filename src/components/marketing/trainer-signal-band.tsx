import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { whatsappLinks } from "@/config/acuity";

type Locale = "nl" | "en";

const COPY = {
  nl: {
    badge: "Voor trainers & fysiotherapeuten",
    heading: "Studio huren? WhatsApp ons voor meer informatie",
    line: "Privé studio vanaf €12/uur — eigen klanten, eigen tarief, gratis annuleren. Meestal antwoord binnen 1 uur.",
    whatsapp: "WhatsApp ons",
    secondary: "Bekijk studio & tarieven",
    whatsappHref: whatsappLinks.studioNl,
    pageHref: "/nl/studio-huren",
    waEvent: "home_studio_huren_whatsapp",
  },
  en: {
    badge: "For trainers & physios",
    heading: "Renting the studio? WhatsApp us for info",
    line: "Private studio from €12/hour — your clients, your rates, free cancellation. Usually a reply within 1 hour.",
    whatsapp: "WhatsApp us",
    secondary: "See studio & rates",
    whatsappHref: whatsappLinks.studioEn,
    pageHref: "/en/studio-rental",
    waEvent: "home_studio_rental_whatsapp",
  },
} as const;

export function TrainerSignalBand({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto flex flex-col items-start gap-4 px-4 py-7 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 md:py-8">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {c.badge}
          </span>
          {/* Operator copy 2026-06-18: lead the homepage studio-rental call
              straight into WhatsApp — renters message FIRST (ask availability /
              rate before committing). Was a quiet "Bekijk studio" link to the
              page; now WhatsApp is the primary action. */}
          <p className="text-lg font-bold leading-tight text-foreground md:text-xl">
            {c.heading}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {c.line}
          </p>
        </div>
        <div className="flex w-full flex-shrink-0 flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center">
          {/* Primary: WhatsApp. Filled-orange brand button is the single orange
              focal element on this now-neutral (bg-card) band — keeps the action
              emphasis without the orange-on-orange overload the prior primary/5
              panel had. White text on the orange brand button is allowed per
              the brand contract. */}
          <ButtonLink
            href={c.whatsappHref}
            external
            size="lg"
            className={`w-full justify-center sm:w-auto plausible-event-name=${c.waEvent}`}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            {c.whatsapp}
          </ButtonLink>
          {/* Secondary: full studio page (pricing, photos, self-serve booking). */}
          <Link
            href={c.pageHref}
            className={`plausible-event-name=trainer_band_studio_click inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground transition hover:text-primary`}
          >
            {c.secondary}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
