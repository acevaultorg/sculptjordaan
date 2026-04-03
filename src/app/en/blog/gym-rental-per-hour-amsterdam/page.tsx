import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Gym Rental Per Hour Amsterdam: Flexible Studio for Freelance Trainers — SculptClub",
  description:
    "Looking for a gym or training studio to rent per hour in Amsterdam? Everything about flexible studio hire for freelance personal trainers and physiotherapists.",
  keywords: [
    "gym rental per hour amsterdam",
    "private studio hire amsterdam",
    "training room rental amsterdam",
    "freelance personal trainer studio amsterdam",
    "private gym hire amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/gym-rental-per-hour-amsterdam",
    languages: {
      nl: "/nl/blog/gym-huren-per-uur-amsterdam",
      en: "/en/blog/gym-rental-per-hour-amsterdam",
    },
  },
};

export default function BlogPostGymRentalPerHour() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Gym rental per hour Amsterdam", url: "/en/blog/gym-rental-per-hour-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Gym Rental Per Hour Amsterdam: Flexible Studio for Freelance Trainers"
        description="Looking for a gym or training studio to rent per hour in Amsterdam? Everything about flexible studio hire for freelance personal trainers and physiotherapists."
        url="/en/blog/gym-rental-per-hour-amsterdam"
        datePublished="2026-04-01"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Gym rental per hour in Amsterdam: flexible studio for freelance trainers
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" />April 1, 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />SculptClub
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                As a freelance personal trainer or physiotherapist in Amsterdam, you face one major challenge: you need a professional space, but you don&apos;t want fixed monthly costs for a gym you only use part of the time. The solution? Renting a gym or training studio by the hour.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Why hourly rental beats a fixed gym</h2>
              <p>
                Many freelance trainers start by working in regular gyms — either as hired staff or by taking out an expensive monthly membership. But that model has significant downsides:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Fixed monthly costs, even during slow weeks",
                  "No personal brand: clients see you working in a public gym",
                  "No control over music, temperature or other people in the space",
                  "Commission on your revenue under some arrangements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Renting a private studio by the hour solves all of this. You only pay for time you actually use. At SculptClub, that starts at <strong className="text-foreground">€12 for a 60-minute session</strong> — a fraction of what a monthly gym membership costs.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">What does gym rental per hour cost in Amsterdam?</h2>
              <p>
                Prices for renting a training space by the hour in Amsterdam vary widely. Here&apos;s an overview:
              </p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Type of space</th>
                      <th className="px-4 py-3 text-center font-semibold text-foreground">Price/hour (est.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Large gym (shared floor)", "€0 – but clients see you working"],
                      ["Gym space with revenue share", "€0 + 20–30% commission"],
                      ["Generic rental studio Amsterdam centre", "€25 – €60/hour"],
                      ["SculptClub — half studio (1:1)", "from €12/60 min"],
                      ["SculptClub — full studio (max 6 people)", "from €17/60 min"],
                    ].map(([type, price]) => (
                      <tr key={type} className="border-b last:border-0">
                        <td className="px-4 py-3">{type}</td>
                        <td className="px-4 py-3 text-center font-medium">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                At SculptClub there are no additional fees for equipment, wifi, or cleaning. Book online, receive your door code via WhatsApp the evening before your session, and walk straight in.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">What do you need to rent the studio?</h2>
              <p>
                Renting as a freelance trainer or physiotherapist is straightforward. You need:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Valid professional liability insurance",
                  "Your own clients and rate structure",
                  "A registered business (sole trader, Ltd., or equivalent)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                There&apos;s no lengthy selection process or waiting list. Book a trial session, see the space, and start reserving slots from there.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">What equipment is in the studio?</h2>
              <p>
                For freelance trainers and physiotherapists, the equipment in the rental studio is crucial. SculptClub offers:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Barbell & squat rack with platform",
                  "Adjustable benches",
                  "Dumbbells 4–40 kg",
                  "Cable machines",
                  "Echo Bike (assault bike)",
                  "Push/pull sled + track",
                  "Kettlebells, medicine balls, resistance bands",
                  "Vinyl record player + Bluetooth speaker",
                  "Showers and changing area",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Flexible booking: when it suits you</h2>
              <p>
                The main advantage of renting a studio by the hour is flexibility. There are no fixed time slots. You book online via our system and choose exactly the times that work for your schedule and your clients. Busy week? Book more slots. Holiday? No costs.
              </p>
              <p>
                For trainers working with regular clients, discount packages are also available: save up to 23% on your hourly rate with a credit package valid for one year.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Location: private studio in Amsterdam Jordaan</h2>
              <p>
                SculptClub is located on the Egelantiersgracht in the Jordaan, one of Amsterdam&apos;s most central and well-connected neighbourhoods. Easy to reach by bike, public transport, or car. The quiet canal-side setting of the Jordaan suits the private, boutique feel of the studio perfectly.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Read more</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/en/blog/studio-rental-personal-trainers-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio rental for personal trainers</p></a>
                  <a href="/en/blog/rent-training-space-freelance-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Training space for freelance trainers</p></a>
                  <a href="/en/blog/physiotherapy-studio-rental-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Physiotherapy studio rental</p></a>
                  <a href="/en/blog/gym-jordaan-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym in the Jordaan</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Ready to get started?</h3>
                <p className="mb-4">
                  Book a free trial session and come see the studio. No obligations — just see if it fits.
                </p>
                <ButtonLink href="/en/studio-rental" size="lg">
                  View rates & book a trial session
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
