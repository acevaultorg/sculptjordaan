import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { trainers } from "@/config/trainers";
import { Globe, CalendarCheck } from "lucide-react";

/**
 * /nl/lessen — a DIRECTORY, deliberately not a timetable.
 *
 * WHY A DIRECTORY AND NOT A SCHEDULE (decided 2026-09-22 with the chief):
 * every trainer here is self-employed and publishes their own classes on their
 * own site, Gymcatch page or Instagram. `src/config/trainers.ts` holds 9 public
 * websites, 11 Instagram handles and exactly ONE booking URL (Roberta's
 * Calendly) — and ZERO class times for anyone. So a timetable on this page
 * would have to be transcribed by hand and kept fresh by hand, and **a class
 * timetable that silently goes stale is worse than none**: someone who turns up
 * for a class that moved is a worse outcome than someone who never saw it.
 * Linking out to the trainer's own page is current by construction.
 *
 * ZERO FABRICATION: every name, discipline and link on this page comes from
 * trainers.ts. No class, day, time or price is stated anywhere, because we do
 * not hold one. A later enrichment can add confirmed schedules per trainer.
 *
 * NO SCULPTCLUB CTA BY DESIGN: every link leaves to the trainer's own surface.
 * The page exists to route our own search traffic into the trainers' classes —
 * which fills the room, which is the lease lever — not into our funnel.
 */

export const metadata: Metadata = {
  title: "Lessen & trainers in de Jordaan — SculptClub",
  description:
    "De zelfstandige personal trainers en coaches die lesgeven in onze privé studio aan de Egelantiersgracht. Elk met hun eigen aanbod, eigen site en eigen agenda.",
  alternates: { canonical: "/nl/lessen", languages: { nl: "/nl/lessen", en: "/en/classes" } },
  openGraph: {
    type: "website",
    url: "/nl/lessen",
    title: "Lessen & trainers in de Jordaan — SculptClub",
    description:
      "De zelfstandige trainers en coaches die lesgeven in onze privé studio in Amsterdam Jordaan.",
  },
};

// Anyone with a public surface of their own. Sorted so the page is stable
// across builds rather than following config order.
const listed = trainers
  .filter((t) => t.website?.url || t.instagram || t.bookingUrl)
  .sort((a, b) => a.name.localeCompare(b.name, "nl"));

export default function LessenPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Lessen & trainers", url: "/nl/lessen" },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Lessen in de Jordaan"
          title="Lessen & trainers bij SculptClub"
          description="Onze studio aan de Egelantiersgracht wordt gebruikt door zelfstandige personal trainers en coaches. Ze bepalen zelf wat ze aanbieden, wanneer ze lesgeven en wat het kost — hieronder vind je ze, met een link naar hun eigen pagina."
        />

        <FadeIn>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground">
            We houden hier bewust geen lesrooster bij. Iedere trainer publiceert
            zijn of haar eigen agenda; die is altijd actueel, een overzicht op
            onze site zou dat niet zijn.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listed.map((t) => (
            <FadeIn key={t.id}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{t.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {t.specialization?.nl?.length ? (
                    <div className="flex flex-wrap gap-1.5">
                      {t.specialization.nl.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-1">
                    {t.website?.url && (
                      <a
                        href={t.website.url}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex min-h-11 items-center gap-1.5 py-2 text-sm font-medium text-brand hover:underline underline-offset-4"
                      >
                        <Globe className="h-4 w-4" aria-hidden="true" />
                        {t.website.label}
                      </a>
                    )}
                    {t.bookingUrl && (
                      <a
                        href={t.bookingUrl}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex min-h-11 items-center gap-1.5 py-2 text-sm font-medium text-brand hover:underline underline-offset-4"
                      >
                        <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                        Eigen agenda
                      </a>
                    )}
                    {t.instagram && (
                      <a
                        href={t.instagram}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex min-h-11 items-center gap-1.5 py-2 text-sm font-medium text-muted-foreground hover:text-brand"
                      >
                        {t.instagramHandle ?? "Instagram"}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">
            Zelf lesgeven in de studio? Kijk bij{" "}
            <a href="/nl/studio-huren" className="font-medium text-brand hover:underline underline-offset-4">
              studio huren
            </a>
            .
          </p>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
