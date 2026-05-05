import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Studio Rental for Personal Trainers in Amsterdam — SculptClub" },
  description:
    "Looking for a training space to rent as a personal trainer in Amsterdam? Compare costs, flexibility and benefits of renting your own studio.",
  keywords: [
    "studio rental personal trainer",
    "training space rental amsterdam",
    "freelance trainer studio",
    "personal training studio rental",
    "rent fitness space amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/studio-rental-personal-trainers-amsterdam",
    languages: {
      nl: "/nl/blog/studio-huren-personal-trainer-amsterdam",
      en: "/en/blog/studio-rental-personal-trainers-amsterdam",
    },
  },
};

export default function BlogPostStudioRentalEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Studio Rental for Personal Trainers", url: "/en/blog/studio-rental-personal-trainers-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Studio Rental for Personal Trainers in Amsterdam"
        description="Compare options for renting a training space as a personal trainer in Amsterdam."
        url="/en/blog/studio-rental-personal-trainers-amsterdam"
        datePublished="2026-03-26"
      />
      <FaqJsonLd faqs={[
        { question: "Why not work at a big gym?", answer: "Many trainers start their career at a large chain. The advantage is clear: you get access to equipment and a stream of potential clients. But the downsides often outweigh the benefits. You hand over a significant percentage of your earnings, sometimes 40 to 60 percent. You have little control over scheduling, atmosphere and the client experience. And you are building the gym's brand, not your own." },
        { question: "Costs: what does renting a studio cost?", answer: "Costs vary considerably in Amsterdam. Renting a fully dedicated studio starts at around €1,500 to €3,000 per month, not including equipment and maintenance. A smarter option is renting by the hour or half-day in an existing studio. At SculptClub, you can rent a studio from just €12 per hour. With a multi-session card or fixed schedule, you get up to 23% discount. That makes it financially viable, even when you are just starting out as a freelance trainer." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Studio Rental for Personal Trainers in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  March 26, 2026
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/dumbbell-rack.jpeg"
                alt="Professional dumbbell rack at SculptClub"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                As an independent personal trainer in Amsterdam, you face an important choice: work at a big gym,
                train clients at their homes, or rent your own studio space? More and more trainers are choosing
                the latter. Having your own space gives you control over the experience you offer your clients,
                without the costs and risks of owning a full property. In this article, we explain why renting a
                studio is often the smartest move.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why not work at a big gym?</h2>
              <p>
                Many trainers start their career at a large chain. The advantage is clear: you get access to
                equipment and a stream of potential clients. But the downsides often outweigh the benefits. You
                hand over a significant percentage of your earnings, sometimes 40 to 60 percent. You have
                little control over scheduling, atmosphere and the client experience. And you are building the
                gym&apos;s brand, not your own.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">The benefits of your own studio</h2>
              <p>
                With a rented studio, you get the best of both worlds. You have access to professional equipment
                without the investment of your own property. You set your own rates, your own schedule and how
                the space is arranged. Your clients experience an exclusive, private environment that you simply
                cannot offer in a crowded gym or in their living room.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Costs: what does renting a studio cost?</h2>
              <p>
                Costs vary considerably in Amsterdam. Renting a fully dedicated studio starts at around €1,500
                to €3,000 per month, not including equipment and maintenance. A smarter option is renting by the
                hour or half-day in an existing studio. At SculptClub, you can rent a studio from just €12 per
                hour. With a multi-session card or fixed schedule, you get up to 23% discount. That makes it
                financially viable, even when you are just starting out as a freelance trainer.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Flexibility and scalability</h2>
              <p>
                One of the biggest advantages of renting by the hour is flexibility. You do not pay for hours
                you do not use. Start with a few sessions per week and scale up as your client base grows. If
                you go on holiday or have a quiet month, you pay nothing extra. No long-term lease, no fixed
                costs that continue when business is slow.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Equipment and presentation</h2>
              <p>
                Your clients expect a professional environment. With a rented studio, you get access to equipment
                that would be difficult to purchase as an individual trainer: power racks, cable machines,
                dumbbells up to 50 kg, assault bikes and more. The studio is clean, well-maintained and has the
                right look to give your clients a premium experience.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Client experience as your competitive edge</h2>
              <p>
                The experience you offer your clients determines whether they come back and refer others. In a
                private studio, every session feels exclusive. Your client does not have to walk through a
                crowded gym, wait for equipment or feel self-conscious. They receive the door code via WhatsApp
                the evening before, so they can walk right in. That attention to detail makes all the difference.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Insurance and legal considerations</h2>
              <p>
                As a freelance personal trainer, you need professional liability insurance. Also check that the
                studio you rent has adequate business liability coverage. Ask about the house rules and make
                sure you have a clear agreement about the use of the space and equipment. At SculptClub, the
                studio is fully insured and you receive a clear overview of the terms.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Get started</h2>
              <p>
                Renting a studio does not have to be complicated or expensive. With the right location and a
                flexible rental model, you can offer your clients an experience that sets you apart from the
                competition. From €12 per hour, you get access to a fully equipped private studio in the heart
                of the Jordaan. Get in touch and discover the possibilities.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/gym-rental-per-hour-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym rental per hour Amsterdam</p></a>
                <a href="/en/blog/rent-training-space-freelance-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Training space for freelance trainers</p></a>
                <a href="/en/blog/physiotherapy-studio-rental-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Physiotherapy studio rental</p></a>
                <a href="/en/blog/become-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Become a personal trainer in Amsterdam</p></a>
                <a href="/en/blog/personal-training-amsterdam-jordaan" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training in the Jordaan</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Interested in renting our studio?</h3>
              <p className="text-muted-foreground mb-6">
                Get in touch via WhatsApp and discuss the options.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/en/book" size="lg">
                  Book a viewing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href="https://wa.me/31683178934?text=Hi%2C%20I%27m%20interested%20in%20renting%20the%20studio"
                  size="lg"
                  variant="outline"
                >
                  WhatsApp us
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
