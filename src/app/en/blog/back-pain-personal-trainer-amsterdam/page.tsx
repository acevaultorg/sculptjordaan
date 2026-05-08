import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User, Info } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer for Back Pain Amsterdam — SculptClub" },
  description:
    "Back pain? Targeted strength training focused on technique, posture and progression can reduce back pain long-term — alongside (not instead of) your physiotherapist. Free intro in Amsterdam Jordaan.",
  keywords: [
    "back pain personal trainer amsterdam",
    "low back pain personal trainer amsterdam",
    "strength training back pain amsterdam",
    "training back injury amsterdam",
    "back pain training amsterdam jordaan",
  ],
  alternates: {
    canonical: "/en/blog/back-pain-personal-trainer-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-rugklachten-amsterdam",
      en: "/en/blog/back-pain-personal-trainer-amsterdam",
    },
  },
};

export default function BackPainPersonalTrainerAmsterdam() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Personal trainer for back pain", url: "/en/blog/back-pain-personal-trainer-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer for Back Pain Amsterdam" description="How targeted strength training can reduce back pain long-term — alongside your physiotherapist." url="/en/blog/back-pain-personal-trainer-amsterdam" datePublished="2026-04-19" dateModified="2026-05-08" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer for Back Pain in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />Updated 8 May 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/dumbbell-rack.jpeg" alt="Personal training studio SculptClub Amsterdam" fill className="object-cover" loading="eager" fetchPriority="high" sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="not-prose mb-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 mt-0.5 flex-shrink-0 text-amber-500" />
                  <div className="text-sm leading-relaxed">
                    <strong className="block mb-1">Medical side first.</strong>
                    <span className="text-muted-foreground">
                      We don&apos;t have a physiotherapist on staff. If you have acute
                      back pain, a herniated disc, recent surgery, or no diagnosis yet —
                      start with a licensed physiotherapist or doctor. Our trainers take
                      over once they give the green light.
                    </span>
                  </div>
                </div>
              </div>

              <p>
                Back pain is one of the most common reasons people stop exercising — or
                never start. Yet targeted movement is often the strongest tool for
                reducing back pain long-term. The key is <em>the right movement, at the
                right moment, in the right dose</em> — and in coordination with your
                treating clinician.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why back pain and exercise are tricky</h2>
              <p>
                Most people with back pain are told: rest and be careful. That&apos;s
                partly right — wrong loading at the wrong moment makes it worse. But too
                much rest weakens the stabilising muscles around the spine, which
                amplifies pain over time.
              </p>
              <p>
                Once your clinician gives the green light for progressive loading, the
                role shifts. The physiotherapist treats and sets load tolerance; a good
                personal trainer takes it from there with technique and progression.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">What our trainers can do</h2>
              <ul>
                <li><strong>Watch your technique:</strong> Compensation patterns — how you lift, stand up, load a leg — creep in unconsciously. Your trainer corrects them session after session.</li>
                <li><strong>Progressive loading:</strong> No exercises that provoke your symptoms — but a programme that strengthens the muscles supporting your back.</li>
                <li><strong>Posture and movement quality:</strong> Andrea at SculptClub specialises in technique, posture and strength — a logical match if back pain stems from prolonged sitting or movement-pattern issues.</li>
                <li><strong>Coordination with your clinician:</strong> Still in active treatment? Your trainer coordinates with your physiotherapist so the programmes reinforce, not conflict.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">What a build can look like</h2>
              <p>
                A first session always begins with an extensive intake. You walk through
                the history of your symptoms, your daily activities, your sitting posture
                at work, and any previous treatment. After that comes a movement
                assessment.
              </p>
              <p>
                Based on that, your trainer builds a programme that develops in roughly
                three phases:
              </p>
              <ol>
                <li>
                  <strong>Stabilisation:</strong> Activating and strengthening deep core
                  and back stabilisers. Think dead bugs, pallof press, modified planks
                  — no situps, no high axial load in this phase.
                </li>
                <li>
                  <strong>Strength development:</strong> Once stability is there, you
                  build functional strength. Modified deadlifts, hip-hinge variations,
                  Turkish get-ups. Movements that train the back in its natural function.
                </li>
                <li>
                  <strong>Load capacity:</strong> The endpoint is a back that <em>can</em>{" "}
                  be loaded — at work, in sport, in daily life. Not one that needs to
                  be protected.
                </li>
              </ol>
              <p>
                Every programme is adjusted based on how you respond. More pain after a
                session is a signal, not a goal — and we adjust.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why a private studio matters for back pain</h2>
              <p>
                In a busy gym you train anonymously. Nobody sees your compensation
                pattern getting worse, your form on a lift, or your back bracing at the
                wrong moment. At SculptClub you train{" "}
                <a href="/en/studio-rental" className="text-brand hover:underline">one-on-one in a private studio</a>.
                Full attention on your movement, every session.
              </p>
              <p>
                Your trainer also handles studio access. No reception, no crowds, no
                wait time. For people with back pain — sometimes already taxed by the
                journey to the gym — that calm is a real comfort.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Who is this suited for?</h2>
              <p>
                Our approach works best for:
              </p>
              <ul>
                <li>People with chronic low back pain who — with green light from their clinician — want to move safely</li>
                <li>Recovery after a herniated disc or spinal stenosis, after the active physiotherapy phase</li>
                <li>Preventive training if you know your back is sensitive</li>
                <li>People returning to sport after an{" "}
                  <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="text-brand hover:underline">
                    injury
                  </a></li>
                <li>Office workers with persistent back tension from long hours sitting</li>
              </ul>
              <p>
                Acute pain, recent surgery, or no diagnosis yet? See a physiotherapist
                first. Our trainers are a complement to that treatment, not a replacement.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">How to start</h2>
              <p>
                The first step is a free intro. No obligations, no cost. You discuss
                your symptoms, your goals and your expectations. Then you decide whether
                you want to begin. Personal training starts from €45 per session.
                Cancellation is always free — no restrictions.
              </p>
              <p>
                Book your intro via the{" "}
                <a href="/en/find-personal-trainer" className="text-brand hover:underline">
                  trainers page
                </a>. Prefer to call or message first? Reach us via WhatsApp:{" "}
                <a href="https://wa.me/31683178934" className="text-brand hover:underline" target="_blank" rel="noopener noreferrer">
                  +31 6 83 17 89 34
                </a>.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Read more</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Training with an injury</p></a>
                <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer after an injury</p></a>
                <a href="/en/blog/strength-training-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for beginners</p></a>
                <a href="/en/blog/consistency-with-exercise" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Staying consistent with exercise</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Train safely, even with back pain</h3>
              <p className="text-muted-foreground mb-6">With clearance from your clinician, we&apos;ll build you up. Book a free intro and we&apos;ll discuss what&apos;s achievable.</p>
              <ButtonLink href="/en/find-personal-trainer" size="lg">Book free intro<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
