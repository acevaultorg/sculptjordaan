"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Mail, Send, ArrowLeft, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { trainers } from "@/config/trainers";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/config/site";

interface TrainerIntakeProps {
  trainerId: string;
  locale: Locale;
}

export function TrainerIntakePage({ trainerId, locale }: TrainerIntakeProps) {
  const trainer = trainers.find((t) => t.id === trainerId)!;

  // WhatsApp base URL — trainer's own number if configured, else studio
  const waBase = trainer.whatsapp ?? siteConfig.whatsapp;
  // WhatsApp button with simple pre-filled greeting
  const trainerWhatsapp = `${waBase}?text=${encodeURIComponent(
    locale === "nl"
      ? `Hoi ${trainer.name}! Ik wil graag een gratis intake boeken.`
      : `Hi ${trainer.name}! I'd like to book a free intro.`
  )}`;

  const trainersUrl = locale === "nl" ? "/nl/vind-jouw-personal-trainer" : "/en/find-personal-trainer";

  const t = locale === "nl" ? {
    overline: "Gratis intake",
    title: `Plan je gratis intake met ${trainer.name}`,
    description: "Vertel ons over je doelen en we plannen een gratis kennismaking.",
    specializations: "Specialisaties",
    languages: "Talen",
    rate: "Tarief",
    onRequest: "Op aanvraag",
    contactTitle: "Neem contact op",
    nameLabel: "Naam",
    namePlaceholder: "Je volledige naam",
    phoneLabel: "Telefoon",
    phonePlaceholder: "+31 6 1234 5678",
    messageLabel: "Bericht (optioneel)",
    messagePlaceholder: "Vertel ons over je doelen...",
    submitLabel: "Verstuur bericht",
    whatsappLabel: `WhatsApp ${trainer.name} direct`,
    emailLabel: "Of stuur een e-mail",
    responseTime: "We reageren meestal binnen 1 uur",
    sent: "Bericht verstuurd! We nemen snel contact op.",
    browseAll: "Bekijk alle trainers",
    otherTrainerCta: "Niet zeker? Bekijk alle trainers en vind je match.",
  } : {
    overline: "Free intro",
    title: `Book your free intro with ${trainer.name}`,
    description: "Tell us about your goals and we'll set up a free intro session.",
    specializations: "Specializations",
    languages: "Languages",
    rate: "Rate",
    onRequest: "On request",
    contactTitle: "Get in touch",
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    phoneLabel: "Phone",
    phonePlaceholder: "+31 6 1234 5678",
    messageLabel: "Message (optional)",
    messagePlaceholder: "Tell us about your goals...",
    submitLabel: "Send message",
    whatsappLabel: `WhatsApp ${trainer.name} directly`,
    emailLabel: "Or send an email",
    responseTime: "We usually respond within 1 hour",
    sent: "Message sent! We'll get back to you soon.",
    browseAll: "View all trainers",
    otherTrainerCta: "Not sure yet? Browse all trainers and find your match.",
  };

  const [formState, setFormState] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const greeting = locale === "nl"
      ? `Hoi ${trainer.name}! Ik wil graag een gratis intake boeken.`
      : `Hi ${trainer.name}! I'd like to book a free intro.`;
    const parts = [
      greeting,
      formState.name ? (locale === "nl" ? `Naam: ${formState.name}` : `Name: ${formState.name}`) : "",
      formState.phone ? (locale === "nl" ? `Tel: ${formState.phone}` : `Phone: ${formState.phone}`) : "",
      formState.message ? formState.message : "",
    ].filter(Boolean);
    window.open(
      `${waBase}?text=${encodeURIComponent(parts.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  }

  return (
    <PageLayout>
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Back to trainers */}
          <a
            href={trainersUrl}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.browseAll}
          </a>

          <SectionHeader as="h1" overline={t.overline} title={t.title} description={t.description} />

          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Trainer info */}
              <div className="space-y-5">
                <div className="relative w-full aspect-[4/5] max-w-xs rounded-2xl overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={`Photo of ${trainer.name}, personal trainer at SculptClub Amsterdam`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
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

              {/* Contact form + WhatsApp */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold">{t.contactTitle}</h3>

                {/* WhatsApp CTA — goes to trainer directly */}
                <ButtonLink
                  href={trainerWhatsapp}
                  external
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl px-6 py-5 text-base font-semibold transition-all"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  {t.whatsappLabel}
                </ButtonLink>

                {/* Contact form */}
                {submitted ? (
                  <div className="rounded-xl border border-brand/30 bg-brand/5 p-6 text-center">
                    <p className="font-semibold text-brand">{t.sent}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="intake-name" className="block text-sm font-semibold mb-1.5">
                        {t.nameLabel} *
                      </label>
                      <input
                        id="intake-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        placeholder={t.namePlaceholder}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                      />
                    </div>

                    <div>
                      <label htmlFor="intake-phone" className="block text-sm font-semibold mb-1.5">
                        {t.phoneLabel} *
                      </label>
                      <input
                        id="intake-phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                        placeholder={t.phonePlaceholder}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                      />
                    </div>

                    <div>
                      <label htmlFor="intake-message" className="block text-sm font-semibold mb-1.5">
                        {t.messageLabel}
                      </label>
                      <textarea
                        id="intake-message"
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        placeholder={t.messagePlaceholder}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-brand hover:bg-brand-dark text-brand-foreground px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.015] active:scale-[0.97] flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {t.submitLabel}
                    </button>
                  </form>
                )}

                {/* Email fallback — contact@sculptclub.nl */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{t.emailLabel}:</span>
                  <a
                    href="mailto:contact@sculptclub.nl"
                    className="font-semibold text-brand hover:text-brand-dark"
                  >
                    contact@sculptclub.nl
                  </a>
                </div>

                {/* Response time */}
                <p className="text-sm text-muted-foreground text-center bg-secondary/50 rounded-xl py-3 px-4">
                  {t.responseTime}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Browse other trainers CTA */}
      <Section bg="muted">
        <FadeIn>
          <div className="text-center max-w-lg mx-auto">
            <p className="text-muted-foreground mb-4">{t.otherTrainerCta}</p>
            <ButtonLink href={trainersUrl} size="lg" variant="outline">
              {t.browseAll}
              <ArrowRight className="ml-2 w-4 h-4" />
            </ButtonLink>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
