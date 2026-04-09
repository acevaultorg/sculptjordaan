import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { Section, FadeIn } from "@/components/sections/section";
import type { Locale } from "@/config/site";

export function ComparisonTeaser({ locale }: { locale: Locale }) {
  const t =
    locale === "nl"
      ? {
          eyebrow: "Boutique vs keten",
          title: "Waarom een privé studio wint",
          subtitle:
            "Je traint in een kleine privé studio aan de gracht — niet in een overvolle keten met wachttijden, drukte en vaste contracten.",
          boutique: "SculptClub",
          chain: "Keten sportschool",
          rows: [
            { label: "Privé studio", boutique: true, chain: false },
            { label: "Gratis kennismaking", boutique: true, chain: false },
            { label: "Kies je eigen trainer", boutique: true, chain: false },
            { label: "Geen vaste contracten", boutique: true, chain: false },
            { label: "Drukte in de spits", boutique: false, chain: true },
          ],
          cta: "Lees de volledige vergelijking",
          href: "/nl/boutique-personal-training-vs-keten",
        }
      : {
          eyebrow: "Boutique vs chain",
          title: "Why a private studio wins",
          subtitle:
            "You train in a small private studio on the canal — not in a packed chain gym with wait times, crowds and long contracts.",
          boutique: "SculptClub",
          chain: "Chain gym",
          rows: [
            { label: "Private studio", boutique: true, chain: false },
            { label: "Free intro session", boutique: true, chain: false },
            { label: "Pick your own trainer", boutique: true, chain: false },
            { label: "No lock-in contracts", boutique: true, chain: false },
            { label: "Crowded at peak hours", boutique: false, chain: true },
          ],
          cta: "Read the full comparison",
          href: "/en/boutique-personal-training-vs-chain-gyms",
        };

  return (
    <Section>
      <FadeIn>
        <div className="text-center mb-10">
          <p className="overline mb-3 text-brand tracking-[0.18em]">{t.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 sm:gap-x-6 px-4 sm:px-6 py-4 border-b border-border/60 bg-background/40">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {locale === "nl" ? "Wat krijg je" : "What you get"}
              </span>
              <span className="text-xs font-semibold text-center text-brand w-16 sm:w-24">
                {t.boutique}
              </span>
              <span className="text-xs font-semibold text-center text-muted-foreground w-16 sm:w-24">
                {t.chain}
              </span>
            </div>
            {t.rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto_auto] gap-x-4 sm:gap-x-6 px-4 sm:px-6 py-3 border-b border-border/30 last:border-b-0 items-center"
              >
                <span className="text-sm">{row.label}</span>
                <span className="flex justify-center w-16 sm:w-24">
                  {row.boutique ? (
                    <Check className="w-5 h-5 text-brand" aria-label="Yes" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/50" aria-label="No" />
                  )}
                </span>
                <span className="flex justify-center w-16 sm:w-24">
                  {row.chain ? (
                    <Check className="w-5 h-5 text-muted-foreground" aria-label="Yes" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/50" aria-label="No" />
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href={t.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              {t.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
