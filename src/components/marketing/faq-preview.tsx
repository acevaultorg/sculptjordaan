"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { whatsappLinks } from "@/config/acuity";
import type { Locale } from "@/config/site";

const faqs = {
  nl: [
    {
      q: "Wat kost personal training bij SculptClub?",
      a: "Trainers bepalen hun eigen tarieven, vanaf €45 per sessie. De intake is altijd gratis. De prijs die je ziet betaal je direct aan je trainer — geen tussenpersoon.",
    },
    {
      q: "Hoe werkt Open Gym?",
      a: "Je traint zelfstandig in onze privé studio met professionele apparatuur. Plan je sessies via ons boekingssysteem, ontvang een deurcode en train op jouw tijd. Vanaf €5,75 per sessie.",
    },
    {
      q: "Moet ik een abonnement afsluiten?",
      a: "Nee. Open Gym werkt met een 4-weken cyclus zonder contract — opzeggen kan op elk moment. Personal training boek je per sessie. Studio huur betaal je per uur of via kortingspakketten.",
    },
    {
      q: "Kan ik de studio huren voor mijn eigen klanten?",
      a: "Ja! Als ZZP-trainer of fysiotherapeut kun je onze studio huren vanaf €12 per 60 minuten. We bieden ook kortingspakketten tot 23% korting.",
    },
    {
      q: "Hoe annuleer ik een sessie?",
      a: "Voor Open Gym en studio-sessies via ons boekingssysteem (Acuity); voor Personal Training direct met je trainer. Beide altijd gratis.",
    },
  ],
  en: [
    {
      q: "How much does personal training cost at SculptClub?",
      a: "Trainers set their own rates, starting from €45 per session. The intro is always free. The price you see you pay directly to your trainer — no middleman.",
    },
    {
      q: "How does Open Gym work?",
      a: "You train independently in our private studio with professional equipment. Schedule your sessions via our booking system, receive a door code and train on your time. From €5.75 per session.",
    },
    {
      q: "Do I need a subscription?",
      a: "No. Open Gym works on a 4-week cycle with no contract — cancel anytime. Personal training is booked per session. Studio rental is per hour or via discount packages.",
    },
    {
      q: "Can I rent the studio for my own clients?",
      a: "Yes! As a freelance trainer or physiotherapist, you can rent our studio from €12 per 60 minutes. We also offer discount packages up to 23% off.",
    },
    {
      q: "How do I cancel a session?",
      a: "For Open Gym and studio sessions via our booking system (Acuity); for Personal Training contact your trainer directly. Both always free.",
    },
  ],
};

export function FaqPreview({ locale }: { locale: Locale }) {
  const items = faqs[locale];
  const t =
    locale === "nl"
      ? {
          overline: "Veelgestelde vragen",
          title: "Heb je een vraag?",
          stillHaveQuestion: "Staat je vraag er niet tussen?",
          whatsappCta: "Stuur ons een berichtje op WhatsApp",
          cta: "Bekijk alle FAQ's",
          ctaHref: "/nl/faqs",
        }
      : {
          overline: "FAQ",
          title: "Have a question?",
          stillHaveQuestion: "Question not answered?",
          whatsappCta: "Send us a WhatsApp message",
          cta: "View all FAQs",
          ctaHref: "/en/faqs",
        };

  return (
    <Section>
      <SectionHeader overline={t.overline} title={t.title} />
      <FadeIn>
        <div className="max-w-2xl mx-auto">
          <Accordion className="space-y-2">
            {items.map((faq, i) => (
              <AccordionItem key={i} value={i} className="border border-border/50 rounded-xl px-4 data-[open]:bg-secondary/30">
                <AccordionTrigger className="text-left text-base font-medium py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeIn>
      {/*
        Closing CTA — added 2026-05-08. The FAQ section is the last content
        block on the homepage; high-intent visitors who scroll through
        Hero → Services → Steps → Differentiators → CtaBand → Reviews →
        Instagram → Map → FAQ have consumed everything and need a clear
        next action. Previously the only post-FAQ CTA was a low-impact
        "View all FAQs →" link, which sent answer-hunting visitors deeper
        into static content rather than to a booking/contact path. Per
        CLAUDE.md the operator's preferred informal channel is WhatsApp
        ("Door code: Sent via WhatsApp the night before") and tracked
        conversion goals include WhatsApp clicks. Primary CTA is now
        WhatsApp; "View all FAQs" remains as a tertiary link below.
      */}
      <FadeIn>
        <div className="mt-12 text-center max-w-md mx-auto">
          <p className="text-base text-muted-foreground mb-4">
            {t.stillHaveQuestion}
          </p>
          <a
            href={whatsappLinks.generic}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand hover:bg-brand-dark text-brand-foreground px-6 py-3 text-sm font-semibold shadow-brand-md hover:shadow-brand-lg transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            {t.whatsappCta}
          </a>
          <div className="mt-5">
            <Link
              href={t.ctaHref}
              className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              {t.cta}
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
