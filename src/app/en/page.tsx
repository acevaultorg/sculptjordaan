import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/marketing/hero";
import { TrainerPreviewGrid } from "@/components/marketing/trainer-preview-grid";
import { TrainerSignalBand } from "@/components/marketing/trainer-signal-band";
import { ServicesOverview } from "@/components/marketing/services-overview";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { InstagramFeed } from "@/components/marketing/instagram-feed";
import { GoogleMap } from "@/components/marketing/google-map";
import { FaqPreview } from "@/components/marketing/faq-preview";
import { WhyWeExist } from "@/components/marketing/why-we-exist";
import { CtaBand } from "@/components/marketing/cta-band";
import { StudioVideoBand } from "@/components/marketing/studio-video-band";
import { FaqJsonLd, DefinedTermJsonLd } from "@/components/seo/json-ld";
import type { Metadata } from "next";

const homeFaqs = [
  { question: "How much does personal training cost at SculptClub?", answer: "Trainers set their own rates, starting from \u20AC45 per session. The intro is always free. We charge 0% commission \u2014 the price you see is what you pay." },
  { question: "How does Open Gym work?", answer: "You train independently in our private studio with professional equipment. Schedule your sessions via our booking system, receive a door code and train on your time. From \u20AC5.75 per session." },
  { question: "Do I need a subscription?", answer: "No. Open Gym works on a 4-week cycle with no contract \u2014 cancel anytime. Personal training is booked per session. Studio rental is per hour or via discount packages." },
  { question: "Can I rent the studio for my own clients?", answer: "Yes! As a freelance trainer or physiotherapist, you can rent our studio from \u20AC12 per 60 minutes. We also offer discount packages up to 23% off." },
  { question: "How do I cancel a session?", answer: "For Open Gym and studio sessions, you can always cancel or reschedule for free via our booking system (Acuity). For Personal Training, contact your trainer directly — also always free." },
];

export const metadata: Metadata = {
  title: { absolute: "SculptClub — Personal Training Studio Amsterdam Jordaan" },
  description:
    "Rent your own studio in the Jordaan from €12/hour — 0% commission, no contract. Also personal training from €45 with free intro session.",
  alternates: {
    canonical: "/en",
    languages: {
      nl: "/",
      en: "/en",
    },
  },
};

export default function HomePageEN() {
  return (
    <PageLayout>
      <FaqJsonLd faqs={homeFaqs} />
      {/* DefinedTerm schema — GEO leverage for "what is X in Amsterdam"
          definitional queries. AI engines + Knowledge Graph extract +
          cite. EN mirror of NL homepage. */}
      <DefinedTermJsonLd
        termSetName="SculptClub Personal Training — Glossary"
        termSetUrl="/en"
        terms={[
          {
            name: "Private studio",
            description: "A training space exclusively available to you (and your trainer) during your session. At SculptClub in Amsterdam Jordaan this means no crowds, no equipment queues, and full privacy — unlike commercial gyms where you share with dozens of others.",
            url: "/en/studio",
          },
          {
            name: "Personal Training",
            description: "1-on-1 training with a certified personal trainer who designs your session around your goals, level, and body. At SculptClub in the Jordaan from €45/session, first intro free, no contract, no membership. Trainers work as freelancers (ZZP) with 0% commission to SculptClub.",
            url: "/en/find-personal-trainer",
          },
          {
            name: "Open Gym",
            description: "Independent training in a quiet, fully-equipped private studio with max 3 people per slot. At SculptClub in Amsterdam Jordaan from €29 per 4 weeks (Starter, 4 sessions). Includes all equipment, free coffee/tea, and door-code access via WhatsApp.",
            url: "/en/open-gym",
          },
          {
            name: "Studio rental",
            description: "Private training space rental for freelance personal trainers or physiotherapists. At SculptClub from €12/hour (half studio) or €17/hour (full studio). No commission, no contract, free cancellation anytime. Includes all equipment, wifi, music and cleaning.",
            url: "/en/studio-rental",
          },
          {
            name: "Calisthenics",
            description: "Training methodology using only bodyweight for resistance — push-ups, pull-ups, dips, planks, muscle-ups. Some SculptClub trainers (Alex, Joey) specialize in calisthenics progressions from beginner to advanced level.",
            url: "/en/find-personal-trainer",
          },
          {
            name: "Freelance personal trainer",
            description: "A self-employed personal trainer running their own practice, setting their own rates, and invoicing clients directly. At SculptClub freelance trainers rent the studio per hour or per package, with 0% commission on their training sessions.",
            url: "/en/for-trainers",
          },
          {
            name: "Free intro",
            description: "An open-ended intro session with a personal trainer where you discuss goals, get to know the approach, and feel out the fit — with no obligation and no cost. At SculptClub the first intro is always 100% free, with no credit card required. Duration is up to you and your trainer.",
            url: "/en/free-intro",
          },
        ]}
      />
      <Hero locale="en" />
      {/* Trainer preview surfaces faces + names + free-intro CTA directly after
          hero (operator directive 2026-05-16). Full filterable roster lives
          at /en/find-personal-trainer. */}
      <TrainerPreviewGrid locale="en" />
      <TrainerSignalBand locale="en" />
      <ServicesOverview locale="en" />
      <HowItWorks locale="en" />
      <WhyWeExist locale="en" />
      <StudioVideoBand locale="en" />
      <CtaBand locale="en" />
      <ReviewsPreview locale="en" />
      <InstagramFeed locale="en" />
      <GoogleMap locale="en" />
      <FaqPreview locale="en" />
    </PageLayout>
  );
}
