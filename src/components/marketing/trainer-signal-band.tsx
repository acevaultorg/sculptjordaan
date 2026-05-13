import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";

type Locale = "nl" | "en";

const COPY = {
  nl: {
    badge: "Voor personal trainers",
    line: "Huur onze privé studio vanaf €12/uur — 0% commissie, gratis annuleren, eigen profiel op onze site.",
    cta: "Bekijk studio",
    href: "/nl/studio-huren",
    secondaryLabel: "Of word trainer →",
    secondaryHref: "/nl/word-trainer",
  },
  en: {
    badge: "For personal trainers",
    line: "Rent our private studio from €12/hour — 0% commission, free cancellation, your own profile on our site.",
    cta: "See studio",
    href: "/en/studio-rental",
    secondaryLabel: "Or join as a trainer →",
    secondaryHref: "/en/become-trainer",
  },
} as const;

export function TrainerSignalBand({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <section className="border-y border-primary/20 bg-primary/5">
      <div className="container mx-auto flex flex-col items-start gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 md:py-7">
        <div className="flex items-start gap-3 md:items-center">
          <Building2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary md:mt-0" aria-hidden />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {c.badge}
            </span>
            <p className="text-sm leading-relaxed text-foreground md:text-base">
              {c.line}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center md:flex-shrink-0">
          <Link
            href={c.href}
            className="plausible-event-name=trainer_band_studio_click inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            {c.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={c.secondaryHref}
            className="plausible-event-name=trainer_band_member_click inline-flex items-center justify-center text-sm font-medium text-primary hover:underline"
          >
            {c.secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
