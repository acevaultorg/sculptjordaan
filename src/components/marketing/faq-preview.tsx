"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Locale } from "@/config/site";

const faqs = {
  nl: [
    {
      q: "Wat kost personal training bij SculptClub?",
      a: "Trainers bepalen hun eigen tarieven, vanaf €49 per sessie. De intake is altijd gratis. Wij rekenen 0% commissie — de prijs die je ziet is wat je betaalt.",
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
      a: "Tot 24 uur voor je sessie kun je gratis annuleren of verzetten via ons boekingssysteem.",
    },
  ],
  en: [
    {
      q: "How much does personal training cost at SculptClub?",
      a: "Trainers set their own rates, starting from €49 per session. The intro is always free. We charge 0% commission — the price you see is what you pay.",
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
      a: "You can cancel or reschedule for free up to 24 hours before your session via our booking system.",
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
          cta: "Bekijk alle FAQ's",
          ctaHref: "/nl/faqs",
        }
      : {
          overline: "FAQ",
          title: "Have a question?",
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
      <div className="mt-8 text-center">
        <Link
          href={t.ctaHref}
          className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
        >
          {t.cta}
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
