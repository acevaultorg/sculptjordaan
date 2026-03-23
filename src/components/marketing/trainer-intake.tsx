import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { trainers } from "@/config/trainers";
import type { Locale } from "@/config/site";

interface TrainerIntakeProps {
  trainerId: string;
  locale: Locale;
}

export function TrainerIntakePage({ trainerId, locale }: TrainerIntakeProps) {
  const trainer = trainers.find((t) => t.id === trainerId)!;

  const t = locale === "nl" ? {
    overline: "Gratis intake",
    title: `Plan je gratis intake met ${trainer.name}`,
    description: "Vertel ons over je doelen en we plannen een vrijblijvend kennismakingsgesprek.",
    specializations: "Specialisaties",
    languages: "Talen",
    rate: "Tarief",
    onRequest: "Op aanvraag",
    bookTitle: "Boek je intake",
    nameLabel: "Naam",
    phoneLabel: "Telefoon",
    messageLabel: "Bericht (optioneel)",
    messagePlaceholder: "Vertel ons over je doelen...",
    submitLabel: "Verstuur",
    orWhatsapp: "Of neem contact op via",
  } : {
    overline: "Free intro",
    title: `Book your free intro with ${trainer.name}`,
    description: "Tell us about your goals and we'll schedule a no-obligation introductory session.",
    specializations: "Specializations",
    languages: "Languages",
    rate: "Rate",
    onRequest: "On request",
    bookTitle: "Book your intro",
    nameLabel: "Name",
    phoneLabel: "Phone",
    messageLabel: "Message (optional)",
    messagePlaceholder: "Tell us about your goals...",
    submitLabel: "Submit",
    orWhatsapp: "Or reach out via",
  };

  return (
    <PageLayout>
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader overline={t.overline} title={t.title} description={t.description} />

          <FadeIn>
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Trainer info */}
              <div className="space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center text-2xl font-heading font-bold text-muted-foreground">
                  {trainer.name[0]}
                </div>
                <h3 className="text-xl font-bold">
                  {trainer.name}
                  {trainer.credentials && (
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      {trainer.credentials}
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{trainer.bio[locale]}</p>

                <div>
                  <p className="text-sm font-semibold mb-1.5">{t.specializations}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.specialization[locale].map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="font-semibold">{t.languages}</p>
                    <p className="text-muted-foreground">{trainer.languages.join(", ")}</p>
                  </div>
                  <div>
                    <p className="font-semibold">{t.rate}</p>
                    <p className="text-muted-foreground">{trainer.rate || t.onRequest}</p>
                  </div>
                </div>
              </div>

              {/* Booking iframe */}
              <div>
                <h3 className="text-lg font-bold mb-4">{t.bookTitle}</h3>
                <iframe
                  src={`https://app.acuityscheduling.com/schedule.php?owner=${siteConfig.acuity.owner}`}
                  title={t.bookTitle}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  className="rounded-xl border border-border/50"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                  {t.orWhatsapp}{" "}
                  <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:text-brand-dark">
                    WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </PageLayout>
  );
}
