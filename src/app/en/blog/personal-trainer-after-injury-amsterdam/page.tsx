import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer After an Injury in Amsterdam — SculptClub" },
  description:
    "Returning to exercise after an injury? A personal trainer builds you back safely. Free intro session at SculptClub Amsterdam.",
  keywords: [
    "personal trainer after injury amsterdam",
    "injury recovery training amsterdam",
    "rehabilitation personal training",
    "return to sport after injury",
    "post injury personal trainer",
    "exercise after injury amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/personal-trainer-after-injury-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-na-blessure-amsterdam",
      en: "/en/blog/personal-trainer-after-injury-amsterdam",
    },
  },
};

export default function PTAfterInjuryEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Personal trainer after an injury", url: "/en/blog/personal-trainer-after-injury-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer After an Injury in Amsterdam" description="How a personal trainer helps you safely return to exercise after an injury." url="/en/blog/personal-trainer-after-injury-amsterdam" datePublished="2026-04-03" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer After an Injury in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />3 April 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/power-rack.jpeg" alt="Strength training equipment at SculptClub Amsterdam" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                An injury changes everything. Months without training. Muscle loss. And then
                the uncertainty: will I move like I used to? The road back doesn&apos;t start with
                training harder — it starts with training smarter. That&apos;s exactly where a
                personal trainer makes the difference.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why you can&apos;t just pick up where you left off</h2>
              <p>
                After a knee injury, back problem or shoulder surgery, your body has changed.
                Muscles have weakened, movement patterns have shifted, and compensations have
                set in. Going straight back to your old routine leads to overload or re-injury.
                A trainer rebuilds you gradually — with exercises that match your recovery stage.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What does a trainer do during recovery training?</h2>
              <ul>
                <li><strong>Restore mobility:</strong> Regain range of motion without pain first</li>
                <li><strong>Build stability:</strong> Strengthen joints and core as a foundation</li>
                <li><strong>Rebuild strength:</strong> Progressive loading — from light to your previous level</li>
                <li><strong>Correct compensations:</strong> Unlearn imbalances and avoidance patterns</li>
                <li><strong>Rebuild confidence:</strong> Overcome the fear of moving with expert guidance</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Physiotherapist and personal trainer</h2>
              <p>
                At SculptClub, <a href="/en/find-personal-trainer" className="text-brand hover:underline">Hamish</a> works
                as a physiotherapist BSc. He combines rehabilitation knowledge with strength
                training. This means you can make the transition from physiotherapy to
                independent training under the same guidance. No more gap between rehab and sport.
              </p>
              <p>
                Other trainers at SculptClub also have experience with clients returning
                after injuries. During the <a href="/en/free-intro" className="text-brand hover:underline">free
                intro session</a> you discuss your situation and find the best match.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Private studio: no pressure, no rush</h2>
              <p>
                Recovery training requires focus and patience. In a busy gym, you feel rushed.
                At SculptClub you train in a private studio — just you and your trainer. Our
                <a href="/en/location-hours" className="text-brand hover:underline"> studio on the
                Egelantiersgracht</a> is fully equipped and you receive your door code via
                WhatsApp the evening before.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Common injuries and how training helps</h2>
              <p>
                <strong>Knee (ACL, meniscus):</strong> Strengthen quadriceps and hamstrings, restore
                balance, gradually rebuild the squat pattern.
              </p>
              <p>
                <strong>Back (herniated disc, lower back pain):</strong> Core stability, hip mobility,
                build up deadlift with correct technique.
              </p>
              <p>
                <strong>Shoulder (impingement, rotator cuff):</strong> Stabilise the shoulder blade,
                gradually introduce overhead movements.
              </p>
              <p>
                <strong>Ankle (sprain, fracture):</strong> Proprioception training, build calf strength,
                resume sport-specific movements.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Pricing and how to start</h2>
              <p>
                Personal training at SculptClub starts from €45 per session. The first intro
                session is always free. No membership, no contract. You book per session and
                <a href="/en/faqs" className="text-brand hover:underline"> cancellation is always
                free</a>.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Physiotherapist as personal trainer</p></a>
                <a href="/en/blog/personal-trainer-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer for beginners</p></a>
                <a href="/en/blog/strength-training-beginners-guide" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for beginners</p></a>
                <a href="/en/blog/personal-training-cost-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal training cost Amsterdam</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Returning to sport after an injury?</h3>
              <p className="text-muted-foreground mb-6">Book a free intro session and discuss your situation with a trainer.</p>
              <ButtonLink href="/en/find-personal-trainer" size="lg">View trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
