import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Physiotherapy Studio Rental in Amsterdam — SculptClub",
  description:
    "Looking for a space for physiotherapy or rehab training in Amsterdam? Rent a fully equipped private studio by the hour. Ideal for freelance physiotherapists.",
  keywords: [
    "physiotherapy studio rental amsterdam",
    "rent space physiotherapist amsterdam",
    "rehab training studio amsterdam",
    "freelance physiotherapist studio",
    "physical therapy gym rental amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/physiotherapy-studio-rental-amsterdam",
    languages: {
      nl: "/nl/blog/fysiotherapie-studio-huren-amsterdam",
      en: "/en/blog/physiotherapy-studio-rental-amsterdam",
    },
  },
};

export default function BlogPostPhysioStudioEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Physiotherapy studio rental Amsterdam", url: "/en/blog/physiotherapy-studio-rental-amsterdam" },
        ]}
      />
      <BlogPostingJsonLd
        title="Physiotherapy Studio Rental in Amsterdam"
        description="Practical guide for physiotherapists looking for training space in Amsterdam."
        url="/en/blog/physiotherapy-studio-rental-amsterdam"
        datePublished="2026-04-02"
      />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Physiotherapy Studio Rental in Amsterdam
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  SculptClub
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  April 2, 2026
                </span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image
                src="/images/studio/power-rack.jpeg"
                alt="Power rack and training equipment at SculptClub studio"
                fill
                className="object-cover"
                preload
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                As a physiotherapist in Amsterdam, you know that rehabilitation doesn&apos;t end at the
                treatment table. More and more patients need strength training as part of their recovery.
                But not every physiotherapy practice has the space or equipment for serious training
                guidance. Renting a training studio offers the solution — professional equipment, privacy
                for your patient and flexibility for you as a practitioner.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why a separate training space for physiotherapy?</h2>
              <p>
                The trend in physiotherapy is clear: from passive treatment to active rehabilitation.
                Patients with back pain, shoulder injuries or knee problems benefit enormously from
                structured strength training under guidance. But a typical physiotherapy practice often
                lacks the space and equipment for functional exercises. A treatment table, a few loose
                weights and a TRX aren&apos;t enough for serious rehabilitation.
              </p>
              <p>
                By renting a training space you get access to a power rack, cable machine, dumbbells
                up to 50 kg and more. That opens the door to more effective treatments and faster
                recovery for your patients.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Privacy and focus</h2>
              <p>
                Rehabilitation training demands concentration. Your patient needs to feel safe,
                especially when they&apos;re getting back to heavier exercises after an injury. In a big
                gym that&apos;s difficult — there are distractions, loud music and other people watching.
                In a private studio, your patient can fully concentrate on the exercise. Maximum 3
                people at a time, no waiting for equipment, no uncomfortable situations.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Costs and business model</h2>
              <p>
                As a freelance physiotherapist, you can pass studio costs directly into your session
                rate. Most patients already expect that specialised training costs more than a standard
                physiotherapy session. Renting a studio at SculptClub starts at €12 per 60 minutes
                (half studio) or €17 per hour (full studio). With packages you save up to 23%.
              </p>
              <p>
                You can also combine approaches: use your own practice for intake and manual therapy,
                and book the studio for active rehabilitation sessions. That way you only rent the space
                for the hours you actually need it.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Equipment you need</h2>
              <p>
                For most rehabilitation programmes you need a limited but specific set of equipment:
              </p>
              <ul>
                <li><strong>Power rack with safety pins:</strong> For guided squats, deadlifts and presses</li>
                <li><strong>Cable machine:</strong> Essential for shoulder rehabilitation and controlled movements</li>
                <li><strong>Dumbbells (light to heavy):</strong> From 2 kg rehab exercises to 40+ kg strength work</li>
                <li><strong>Adjustable bench:</strong> For varied angles on chest, shoulder and back exercises</li>
                <li><strong>Resistance bands:</strong> Complementary to free weights</li>
              </ul>
              <p>
                All of this equipment is available at SculptClub. You don&apos;t need to bring anything
                except your expertise.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Collaboration with personal trainers</h2>
              <p>
                SculptClub isn&apos;t just a studio — it&apos;s a place where physiotherapists and personal
                trainers work together. When your patient completes their rehabilitation programme, you
                can refer them to one of the resident trainers. Your patient gets continuity in the same
                trusted environment. And you build a professional network.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Get started</h2>
              <p>
                Get in touch for a studio viewing. We&apos;re happy to discuss how the space fits your
                practice. Bookable by the hour, no long-term contract and always free cancellation.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/gym-rental-per-hour-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Gym rental per hour Amsterdam</p></a>
                <a href="/en/blog/studio-rental-personal-trainers-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio rental for personal trainers</p></a>
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Physiotherapist as personal trainer</p></a>
                <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer after an injury</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Interested in the studio for your practice?</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a viewing or get in touch via WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/en/studio-rental" size="lg">
                  View studio & rates
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ButtonLink>
                <ButtonLink
                  href="https://wa.me/31683178934?text=Hi%2C%20I%27m%20a%20physiotherapist%20interested%20in%20renting%20the%20studio"
                  size="lg"
                  variant="outline"
                  external
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
