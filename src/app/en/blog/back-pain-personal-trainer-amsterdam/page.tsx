import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer for Back Pain Amsterdam — SculptClub" },
  description:
    "Back pain doesn't have to stop you from training. At SculptClub, Hamish (Physiotherapist BSc) builds safe, progressive programmes for back pain clients in Amsterdam.",
  keywords: [
    "personal trainer back pain amsterdam",
    "personal trainer lower back pain amsterdam",
    "physiotherapist personal trainer amsterdam",
    "back pain strength training amsterdam",
    "personal trainer herniated disc amsterdam",
    "physiotherapy personal training amsterdam",
  ],
  alternates: {
    canonical: "/en/blog/back-pain-personal-trainer-amsterdam",
    languages: {
      en: "/en/blog/back-pain-personal-trainer-amsterdam",
      nl: "/nl/blog/personal-trainer-rugklachten-amsterdam",
    },
  },
};

export default function BackPainPersonalTrainerAmsterdam() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Blog", url: "/en/blog" }, { name: "Personal trainer for back pain", url: "/en/blog/back-pain-personal-trainer-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer for Back Pain Amsterdam" description="How a physiotherapist-trained personal trainer addresses back pain and helps you build strength safely." url="/en/blog/back-pain-personal-trainer-amsterdam" datePublished="2026-04-19" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer for Back Pain in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />Hamish — Physiotherapist BSc</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />19 April 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/dumbbell-rack.jpeg" alt="Personal training studio SculptClub Amsterdam" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Back pain is one of the most common reasons people stop exercising — or never start.
                Yet targeted strength training is one of the most powerful tools for lasting back pain
                relief. The difference lies in whether your trainer understands the body well enough
                to distinguish safe loading from harmful loading.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Why back pain and exercise are so often mismatched</h2>
              <p>
                Most people with back pain receive advice to rest and be careful. That&#39;s partially
                correct — the wrong load at the wrong moment makes things worse. But too much rest
                leads to weakening of the stabilising muscles around the spine, which ultimately
                reinforces the pain cycle. The goal is <em>the right movement, at the right time,
                in the right dosage.</em>
              </p>
              <p>
                That is precisely what sets a physiotherapist-trained personal trainer apart. Where
                a standard PT works with general programmes, someone with a physiotherapy background
                starts with analysis: what is the origin of the complaint, which structures are
                involved, and how do you respond to load?
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Hamish: physiotherapist and personal trainer</h2>
              <p>
                At SculptClub,{" "}
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="text-brand hover:underline">
                  Hamish is your trainer
                </a>{" "}
                when you want to train with back pain. Hamish holds a Bachelor of Science in
                Physiotherapy and applies that knowledge daily as a personal trainer. In practice,
                that means:
              </p>
              <ul>
                <li><strong>Movement analysis:</strong> Hamish observes how you move — how you stand, how you lift, how you build tension. He spots compensation patterns most trainers miss.</li>
                <li><strong>Complaint-specific approach:</strong> Lower back pain, disc herniation, pelvic girdle issues, SI joint — each requires a different approach. Hamish knows the difference.</li>
                <li><strong>Progressive loading:</strong> No exercises that provoke your symptoms. A carefully structured programme that trains the muscles supporting your spine.</li>
                <li><strong>Alignment with your care provider:</strong> Are you also seeing a physiotherapist or orthopaedic specialist? Hamish can coordinate or supplement your treatment.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">What a back pain programme looks like</h2>
              <p>
                Every first session begins with a thorough intake. Hamish asks about the history of
                your pain, your daily activities, your sitting posture at work, and any previous
                treatment. This is followed by a movement assessment.
              </p>
              <p>
                From there, he builds a three-phase programme:
              </p>
              <ol>
                <li>
                  <strong>Stabilisation:</strong> Activating and strengthening the deep core and
                  spinal stabilisers. Exercises like dead bugs, Pallof presses, and modified planks —
                  no sit-ups, no high axial loading.
                </li>
                <li>
                  <strong>Strength development:</strong> Once stability is established, Hamish builds
                  functional strength. Deadlift variations, hip hinge patterns, Turkish get-ups —
                  movements that train the back in its natural function.
                </li>
                <li>
                  <strong>Load capacity:</strong> The end goal is a back that <em>can</em> be loaded —
                  at work, in sport, in daily life. Not one that needs permanent protection.
                </li>
              </ol>
              <p>
                Every programme is adjusted based on how you respond. Increased pain after a session
                is a signal, not a goal. Hamish adapts accordingly.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Private training for back pain: why it matters</h2>
              <p>
                In a large gym, you train anonymously. Nobody notices if your compensation pattern
                is worsening, if you&#39;re executing an exercise incorrectly, or if your back is
                tensing when it shouldn&#39;t. At SculptClub you train{" "}
                <a href="/en/studio" className="text-brand hover:underline">one-on-one in a private studio</a>.
                Hamish&#39;s full attention is on you, every session.
              </p>
              <p>
                You receive the studio door code via WhatsApp the evening before. No reception, no
                crowds, no queues. You arrive, you train, you leave. For people with back pain —
                who are sometimes already stressed by the journey to the studio — that calm
                environment is not a luxury, but a necessity.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Who is this right for?</h2>
              <p>
                You don&#39;t need to be in acute pain to train with Hamish. His approach suits:
              </p>
              <ul>
                <li>People with chronic lower back pain who want to move safely</li>
                <li>Recovery after a herniated disc or spinal stenosis</li>
                <li>Preventive training if you know your back is sensitive</li>
                <li>People{" "}
                  <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="text-brand hover:underline">
                    returning to sport after injury
                  </a></li>
                <li>Office workers with persistent back tension from prolonged sitting</li>
              </ul>
              <p>
                Recently had surgery or currently in active physiotherapy? Book an intake so Hamish
                can assess what is achievable and safe at this stage.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">How to get started</h2>
              <p>
                The first step is a free intake with Hamish. No obligation, no cost. You discuss
                your pain history, your goals, and your expectations. Then you decide whether to
                proceed. Personal training starts from €45 per session. Cancellation is always
                free — no restrictions.
              </p>
              <p>
                Book your intake via the{" "}
                <a href="/en/find-personal-trainer" className="text-brand hover:underline">
                  trainer page
                </a>. Prefer to message first? Reach Hamish directly on WhatsApp:{" "}
                <a href="https://wa.me/31683178934" className="text-brand hover:underline" target="_blank" rel="noopener noreferrer">
                  +31 6 83 17 89 34
                </a>.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Further reading</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/en/blog/physiotherapist-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Physiotherapist as personal trainer</p></a>
                <a href="/en/blog/personal-trainer-after-injury-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer after an injury</p></a>
                <a href="/en/blog/strength-training-for-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Strength training for beginners</p></a>
                <a href="/en/blog/staying-consistent-with-exercise" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibent text-sm group-hover:text-brand transition-colors">Staying consistent with exercise</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Train safely, even with back pain</h3>
              <p className="text-muted-foreground mb-6">Book a free intake with Hamish and discover what physiotherapy-informed personal training can do for you.</p>
              <ButtonLink href="/en/find-personal-trainer" size="lg">Book free intake<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
