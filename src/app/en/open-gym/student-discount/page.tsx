import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { LandingVideo } from "@/components/marketing/landing-video";
import { PhotoGalleryLightbox } from "@/components/marketing/photo-gallery-lightbox";
import { GoogleMap } from "@/components/marketing/google-map";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, openGymStudentDeal, whatsappLinks } from "@/config/acuity";
import {
  ArrowRight,
  MessageCircle,
  GraduationCap,
  Users,
  Clock,
  Ban,
  KeyRound,
  Check,
} from "lucide-react";

/**
 * Open Gym — Student discount. EN parity of
 * src/app/nl/open-gym/studentenkorting/page.tsx — see that file for the full
 * rationale (why a dedicated page instead of a row on the pricing page, why
 * €39, why eligibility is deliberately wide). Keep the two in sync.
 *
 * The EN page is NOT an afterthought here: Amsterdam's international student
 * cohort (UvA / VU / HvA exchange + masters) searches in English, and the
 * first real enquiry that prompted this rate came from an international
 * student writing in English.
 */

const student = openGymStudentDeal;
const savings = student.priceRegular - student.priceStudent;

const galleryImages = [
  { src: "/images/studio/studio-overview.jpeg", alt: "Overview of the private gym in the Jordaan — SCULPT wall and equipment" },
  { src: "/images/studio/training-chest-press.jpg", alt: "Dumbbell chest press on the bench at SculptClub" },
  { src: "/images/studio/training-dead-hang.jpg", alt: "Dead hang on the pull-up bar at SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Open doors overlooking the Egelantiersgracht canal" },
];

export const metadata: Metadata = {
  title: { absolute: `Student Discount — Unlimited Gym €${student.priceStudent}/4 weeks | SculptClub Jordaan` },
  description: `Student discount in Amsterdam: train as often as you like in our private gym in the Jordaan for €${student.priceStudent} per 4 weeks instead of €${student.priceRegular}. Just show your student card, no contract, first session free.`,
  keywords: [
    "student gym amsterdam",
    "student discount gym amsterdam",
    "cheap gym amsterdam student",
    "gym for students amsterdam",
    "student membership gym jordaan",
    "gym without contract amsterdam student",
    "international student gym amsterdam",
  ],
  alternates: {
    canonical: "/en/open-gym/student-discount",
    languages: {
      nl: "/nl/open-gym/studentenkorting",
      en: "/en/open-gym/student-discount",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/open-gym/student-discount",
    title: `Student discount — unlimited training for €${student.priceStudent}/4 weeks`,
    description: `Normally €${student.priceRegular}. With a student card it is €${student.priceStudent} per 4 weeks. Private gym in the Jordaan, max 4 people, no contract.`,
  },
};

const included = [
  { icon: Users, text: "Max 4 people in the studio — never wait for equipment" },
  { icon: Clock, text: "Open every day from 06:00 to 22:00 — including between lectures" },
  { icon: KeyRound, text: "Door code via WhatsApp — you can start straight away" },
  { icon: Ban, text: "No contract, no notice period — cancelling is always free" },
];

const faqs = [
  {
    question: "Who qualifies for the student price?",
    answer:
      "Anyone with a valid student card. Dutch or international, full-time or part-time, university, HBO or MBO — it does not matter. You show your card once, on your first visit.",
  },
  {
    question: "How do I prove I am a student?",
    answer:
      "Just show your student card when you are here the first time. That is all — no forms, nothing to email over.",
  },
  {
    question: "What does it cost exactly?",
    answer: `€${student.priceStudent} per 4 weeks for unlimited Open Gym, instead of €${student.priceRegular}. That is €${savings} less every 4 weeks. You pay per 4 weeks and you can always cancel for free.`,
  },
  {
    question: "Can I try it for free first?",
    answer:
      "Yes. Your first session is free and there is no obligation, even if you do not join afterwards. You get the door code via WhatsApp and you simply come and train once.",
  },
  {
    question: "Am I tied into anything?",
    answer:
      "No. It runs per 4 weeks and you can cancel for free at any time, with no notice period and no explanation. Useful if you are away for exams or the summer.",
  },
  {
    question: "How busy is it?",
    answer:
      "There are never more than 4 people in the studio at once. That is the whole point of a private gym — you never wait, and you are not training in a crowded room.",
  },
  {
    question: "Is there something cheaper if I train rarely?",
    answer:
      "Yes. The Instapplan is €29 per 4 weeks for 4 sessions (€7.25 each). Handy if you train once a week. Unlimited is better value as soon as you go more than once a week.",
  },
];

export default function StudentDiscountPage() {
  const on = student.active;

  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Open Gym", url: "/en/open-gym" },
          { name: "Student Discount", url: "/en/open-gym/student-discount" },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {/* ── Offer ─────────────────────────────────────────────────────── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            {on && (
              <span className="inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-brand-foreground">
                Student price
              </span>
            )}

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Unlimited training for students in the Jordaan
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Private gym on the Egelantiersgracht. Max 4 people. Train as often
              as you like, between lectures.
            </p>

            <div className="mt-8 flex items-baseline justify-center gap-3">
              {on && (
                <span className="sc-price-old text-2xl text-muted-foreground">
                  €{student.priceRegular}
                </span>
              )}
              <span className="text-6xl font-bold text-foreground">
                €{on ? student.priceStudent : student.priceRegular}
              </span>
              <span className="text-lg text-muted-foreground">/ 4 weeks</span>
            </div>

            {on && (
              <>
                <p className="mt-3 text-lg font-semibold text-brand">
                  €{savings} less every 4 weeks with your student card
                </p>
                <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
                  Show your student card on your first visit. That is all you
                  need to do.
                </p>
              </>
            )}

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={acuityFreeTrials.openGymTryout}
                external
                size="lg"
                className="w-full sm:w-auto"
              >
                Book a free trial session
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              {on && (
                <ButtonLink
                  href={student.url}
                  external
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Join now
                </ButtonLink>
              )}
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              First session free, no obligation — even if you do not join
              afterwards.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ── Eligibility ───────────────────────────────────────────────── */}
      {on && (
        <Section bg="muted">
          <FadeIn>
            <div className="mx-auto flex max-w-2xl items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <GraduationCap className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Show your student card once, that is it
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Any valid student card counts — Dutch or international,
                  full-time or part-time, UvA, VU, HvA, an exchange programme or
                  somewhere else entirely. No forms, nothing to send in, no
                  waiting. You show your card when you are here the first time
                  and you pay €{student.priceStudent} per 4 weeks for as long as
                  you stay a member.
                </p>
              </div>
            </div>
          </FadeIn>
        </Section>
      )}

      {/* ── What you get ──────────────────────────────────────────────── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground">What you get</h2>
            <ul className="mt-6 space-y-4">
              {included.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-muted-foreground">
              Want to see all the plans and photos first?{" "}
              <a
                href="/en/open-gym"
                className="font-medium text-brand underline underline-offset-4 hover:text-brand-dark"
              >
                See the full Open Gym page
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ── See for yourself ──────────────────────────────────────────── */}
      <Section bg="muted">
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <p className="overline">The Jordaan</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground">
                Train where Amsterdam is at its best
              </h2>
              <p className="mt-2 text-muted-foreground">
                Your gym on the Egelantiersgracht — boats going past, doors
                open, never crowded.
              </p>
            </div>
            <div className="mx-auto max-w-xs">
              <LandingVideo
                src="/videos/opengym-canal.mp4"
                poster="/videos/_rs/opengym-canal-poster-full.webp"
                label="The Egelantiersgracht canal, right outside SculptClub"
                aspectClassName="aspect-[9/16]"
              />
            </div>
            <div className="mt-8">
              <PhotoGalleryLightbox images={galleryImages} locale="en" />
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <Section bg="muted">
        <FadeIn>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground">
              Frequently asked questions
            </h2>
            <dl className="mt-8 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="flex items-start gap-2 font-semibold text-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {faq.question}
                  </dt>
                  <dd className="mt-2 pl-6 text-muted-foreground">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </Section>

      <ReviewsPreview locale="en" />
      <GoogleMap locale="en" />

      {/* ── Questions ─────────────────────────────────────────────────── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Still have a question?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Send a message, you will get an answer from an actual person.
            </p>
            <div className="mt-6 flex justify-center">
              <ButtonLink
                href={whatsappLinks.openGymEn}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto plausible-event-name=WhatsApp+Click"
              >
                <MessageCircle className="h-4 w-4" />
                Ask your question
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
