import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { acuityLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import { ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — SculptClub Amsterdam Jordaan",
  description:
    "Answers to frequently asked questions about personal training, Open Gym, studio rental, pricing and bookings at SculptClub Amsterdam.",
  alternates: {
    canonical: "/en/faqs",
    languages: {
      nl: "/nl/faqs",
      en: "/en/faqs",
    },
  },
};

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    title: "General",
    items: [
      {
        q: "How does the SculptClub pricing model work?",
        a: "SculptClub works without subscriptions. Open Gym is purchased per 4-week cycle (from \u20AC5.75/session). Personal training is booked and paid per session, directly to your trainer. Studio rental is per hour or via discount packages.",
      },
      {
        q: "Do I need a membership?",
        a: "No. We work without contracts or obligations. Open Gym runs on 4-week cycles that you can cancel at any time. Personal training is booked per session.",
      },
      {
        q: "How do I cancel a session?",
        a: "You can cancel or reschedule for free up to 24 hours before your session via our booking system. Cancellations within 24 hours will be charged.",
      },
      {
        q: "What should I bring?",
        a: "Sportswear, a towel, a water bottle and indoor sports shoes. A changing area is available in the studio.",
      },
      {
        q: "How does the booking system work?",
        a: "We use Acuity Scheduling. You book online, receive a confirmation email with a door code, and check in yourself upon arrival. No reception, no waiting.",
      },
    ],
  },
  {
    title: "Personal Training",
    items: [
      {
        q: "Is the intro free?",
        a: "Yes, the first consultation with a trainer is always free. During the intro you discuss your goals, experience and wishes, and see if there's a good fit.",
      },
      {
        q: "What do the trainers charge?",
        a: "Trainers set their own rates, starting from \u20AC49 per session. We charge 0% commission \u2014 the price your trainer quotes is what you pay.",
      },
      {
        q: "How do I choose a trainer?",
        a: "On our trainers page you'll find each trainer's profile with their specialisation, experience and rates. You can also reach out via WhatsApp for personal advice.",
      },
      {
        q: "What if the trainer isn't a good fit?",
        a: "No problem. The intro is free and no-obligation. You're not tied to anything. Want to try a different trainer? You always can.",
      },
    ],
  },
  {
    title: "Open Gym",
    items: [
      {
        q: "How does Open Gym work?",
        a: "You book a time slot via our booking system, receive a door code by email, and train independently in our private studio. Maximum 3 people at a time.",
      },
      {
        q: "What are the 4-week cycles?",
        a: "Open Gym works in 4-week cycles. You choose the number of sessions per week (2x, 3x or unlimited), pay upfront, and can cancel after each cycle. No contract, no obligations.",
      },
      {
        q: "What equipment is available?",
        a: "Our studio is fully equipped with professional equipment: squat rack, adjustable bench, dumbbells, cable machine, cardio equipment and accessories. Everything you need for a complete workout.",
      },
      {
        q: "How does the door code work?",
        a: "After booking you receive a unique door code by email that is valid for your time slot. Use it to open the front door and start training right away.",
      },
    ],
  },
  {
    title: "Studio Rental",
    items: [
      {
        q: "How much does it cost to rent the studio?",
        a: "From \u20AC12 per 60 minutes. We also offer discount packages: a 10-hour package with 15% off and a 20-hour package with 23% off.",
      },
      {
        q: "What packages are available?",
        a: "Per hour: \u20AC12/60 min. 10-hour package: \u20AC10.20/60 min (15% off). 20-hour package: \u20AC9.24/60 min (23% off). Packages are valid for 3 months.",
      },
      {
        q: "What's included with studio rental?",
        a: "All equipment, wifi, music, climate control and cleaning. You just need to bring your own clients. The studio is fully private during your rental time.",
      },
      {
        q: "Do I need insurance?",
        a: "Yes, as a freelance trainer or physiotherapist you must have valid professional liability insurance. This is your own responsibility.",
      },
    ],
  },
];

/** Compute the global FAQ index offset for each category */
const categoryOffsets = faqCategories.reduce<number[]>((acc, cat, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + faqCategories[i - 1].items.length);
  return acc;
}, []);

export default function FaqsPageEN() {
  return (
    <PageLayout>
      <Section>
        <SectionHeader
          overline="FAQ"
          title="Everything you need to know"
          description="Find answers to the most common questions here. Can't find what you're looking for? Reach out via WhatsApp."
        />
      </Section>

      {faqCategories.map((category, catIdx) => (
        <Section key={category.title} bg={catIdx % 2 === 0 ? "muted" : "default"}>
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              {category.title}
            </h2>
            <div className="max-w-2xl mx-auto">
              <Accordion className="space-y-2">
                {category.items.map((faq, faqIdx) => {
                  const idx = categoryOffsets[catIdx] + faqIdx;
                  return (
                    <AccordionItem
                      key={idx}
                      value={idx}
                      className="border border-border/50 rounded-xl px-4 data-[open]:bg-secondary/30"
                    >
                      <AccordionTrigger className="text-left text-base font-medium py-4 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </FadeIn>
        </Section>
      ))}

      {/* CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-background">
              Still have questions?
            </h2>
            <p className="mt-4 text-lg text-background/70 max-w-xl mx-auto">
              Reach out via WhatsApp. We usually reply within 1 hour.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <ButtonLink
                href={acuityLinks.generic}
                external
                size="lg"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-brand-foreground rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-[1.015] active:scale-[0.97]"
              >
                Book Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </ButtonLink>
              <ButtonLink
                href={siteConfig.whatsapp}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl px-8 py-6 text-base font-semibold border-background/20 text-background hover:bg-background/10"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
