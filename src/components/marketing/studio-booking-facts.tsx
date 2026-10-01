import { CalendarCheck, CreditCard, KeyRound, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WeekendAvailability } from "@/components/marketing/weekend-availability";
import { cn } from "@/lib/utils";

/**
 * StudioBookingFacts — sits directly under the studio rate table
 * (/nl/studio-huren, /en/studio-rental, /nl/prijzen, /en/pricing).
 *
 * 2026-09-30 mobile booking-path pass: at 375px a visitor looking at the
 * €12/€17 rows had no answer to the three questions that stop a first tap on
 * "Boek": is it free when I want it, what happens after I tap, and is this a
 * real place. Each line below is a fact that already lives elsewhere in the
 * repo (Acuity shows open times before payment; payment methods and the
 * 00:00 WhatsApp door code per CLAUDE.md; rating/address/hours from
 * siteConfig), so nothing here can drift from the rest of the site.
 */

const COPY = {
  nl: {
    title: "Na je tik op Boek",
    steps: [
      "Je ziet meteen welke tijden vrij zijn, nog voordat je iets betaalt.",
      "Je betaalt met creditcard, Apple Pay, Google Pay of op factuur. Annuleren is altijd gratis.",
      "Je deurcode krijg je via WhatsApp, om 00:00 in de nacht voor je sessie.",
    ],
    quiet: "Het rustigst is het op zondag, en op zaterdagmiddag en -avond.",
    rating: (v: string, n: number) => `${v} op Google · ${n} reviews`,
    area: "Jordaan",
    hours: "Dagelijks 06:00–22:00",
  },
  en: {
    title: "After you tap Book",
    steps: [
      "You see which times are free straight away, before you pay anything.",
      "You pay by credit card, Apple Pay, Google Pay or invoice. Cancelling is always free.",
      "Your door code arrives on WhatsApp at midnight before your session.",
    ],
    quiet: "It is quietest on Sunday, and on Saturday afternoon and evening.",
    rating: (v: string, n: number) => `${v} on Google · ${n} reviews`,
    area: "Jordaan",
    hours: "Daily 06:00–22:00",
  },
} as const;

const STEP_ICONS = [CalendarCheck, CreditCard, KeyRound];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.9l-5.25 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  );
}

export function StudioBookingFacts({
  locale,
  showQuietHours = true,
  className,
}: {
  locale: "nl" | "en";
  /** The live weekend line + quiet-day note; off where the page already says it. */
  showQuietHours?: boolean;
  className?: string;
}) {
  const t = COPY[locale];
  const ratingValue =
    locale === "nl"
      ? siteConfig.rating.value.toFixed(1).replace(".", ",")
      : siteConfig.rating.value.toFixed(1);
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `SculptClub ${siteConfig.address.street} ${siteConfig.address.city}`,
  )}`;

  return (
    <div className={cn("mx-auto max-w-2xl rounded-2xl border border-border bg-card p-5 text-left", className)}>
      <p className="text-sm font-semibold">{t.title}</p>
      <ol className="mt-3 space-y-3">
        {t.steps.map((step, i) => {
          const Icon = STEP_ICONS[i];
          return (
            <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="pt-1">{step}</span>
            </li>
          );
        })}
      </ol>

      {showQuietHours ? (
        <div className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
          <p>{t.quiet}</p>
          <WeekendAvailability locale={locale} kind="studio" className="mt-1 text-sm text-muted-foreground" />
        </div>
      ) : null}

      {/* Trust row: real rating, real address, real hours. Links are text-
          coloured (not brand orange) so the Boek rows above stay the only
          orange on screen. Each link carries a 44px tap area. */}
      <ul className="mt-4 flex flex-col gap-1 border-t border-border pt-3 text-sm">
        <li>
          <a
            href={siteConfig.google}
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=studio_facts_reviews inline-flex min-h-11 items-center gap-2 font-medium text-foreground underline-offset-4 hover:underline"
          >
            <StarIcon className="h-4 w-4 text-amber-500" />
            {t.rating(ratingValue, siteConfig.rating.count)}
          </a>
        </li>
        <li>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="plausible-event-name=studio_facts_map inline-flex min-h-11 items-center gap-2 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {siteConfig.address.street}, {t.area}
          </a>
        </li>
        <li className="inline-flex min-h-11 items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4 shrink-0" aria-hidden />
          {t.hours}
        </li>
      </ul>
    </div>
  );
}
