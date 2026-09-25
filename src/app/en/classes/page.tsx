import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { trainers } from "@/config/trainers";
import { Globe, CalendarCheck } from "lucide-react";

/**
 * /en/classes — a DIRECTORY, deliberately not a timetable.
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
  title: "Classes & trainers in the Jordaan — SculptClub",
  description:
    "The self-employed personal trainers and coaches who teach in our private studio on the Egelantiersgracht.",
  alternates: { canonical: "/en/classes", languages: { nl: "/en/classes", en: "/en/classes" } },
  openGraph: {
    type: "website",
    url: "/en/classes",
    title: "Classes & trainers in the Jordaan — SculptClub",
    description:
      "The self-employed trainers and coaches who teach in our private studio in Amsterdam Jordaan.",
  },
};

// Anyone with a public surface of their own. Sorted so the page is stable
// across builds rather than following config order.
const listed = trainers
  .filter((t) => t.website?.url || t.instagram || t.bookingUrl)
  .sort((a, b) => a.name.localeCompare(b.name, "en"));

export default function ClassesPage() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Lessen & trainers", url: "/en/classes" },
        ]}
      />

      <Section>
        <SectionHeader
          as="h1"
          overline="Classes in the Jordaan"
          title="Classes & trainers at SculptClub"
          description="Our studio on the Egelantiersgracht is used by self-employed personal trainers and coaches. They decide what they offer, when they teach and what it costs — here they are, each linking to their own page."
        />

        <FadeIn>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground">
            We deliberately do not keep a timetable here. Every trainer publishes
            their own schedule; theirs is always current, a copy on our site
            would not be.
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
                  {t.specialization?.en?.length ? (
                    <div className="flex flex-wrap gap-1.5">
                      {t.specialization.en.map((s) => (
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
                        Their own schedule
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
            Want to teach in the studio yourself? See{" "}
            <a href="/en/studio-rental" className="font-medium text-brand hover:underline underline-offset-4">
              studio rental
            </a>
            .
          </p>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
