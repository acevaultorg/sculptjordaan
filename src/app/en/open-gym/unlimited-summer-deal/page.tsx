import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { LandingVideo } from "@/components/marketing/landing-video";
import { PhotoGalleryLightbox } from "@/components/marketing/photo-gallery-lightbox";
import { GoogleMap } from "@/components/marketing/google-map";
import { ReviewsPreview } from "@/components/marketing/reviews-preview";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { acuityFreeTrials, openGymSummerDeal, whatsappLinks } from "@/config/acuity";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  MessageCircle,
  Lock,
  Users,
  Clock,
  Ban,
  KeyRound,
  Check,
} from "lucide-react";

/**
 * Open Gym — Unlimited Summer Deal. EN parity of
 * src/app/nl/open-gym/onbeperkt-zomerdeal/page.tsx — see that file for the
 * full rationale (why a separate page, why nested, why the free tryout is the
 * primary CTA, and the honest-urgency rule). Keep the two in sync.
 *
 * Slug is the operator's own wording (2026-07-21). The NL twin uses a Dutch
 * slug because Dutch searchers type "onbeperkt sporten", not "unlimited".
 */

const deal = openGymSummerDeal;
const savings = deal.priceRegular - deal.priceDeal;

// Real training photos — shared with the Open Gym hub page. Instagram
// visitors decide on vibe: show the actual room + actual people training.
const galleryImages = [
  { src: "/images/studio/studio-overview.jpeg", alt: "Overview of the private gym in the Jordaan — SCULPT wall and equipment" },
  { src: "/images/studio/training-chest-press.jpg", alt: "Dumbbell chest press on the bench at SculptClub" },
  { src: "/images/studio/training-dead-hang.jpg", alt: "Dead hang on the pull-up bar at SculptClub" },
  { src: "/images/studio/canal-view-doors.jpg", alt: "Open doors overlooking the Egelantiersgracht canal" },
];


export const metadata: Metadata = {
  title: { absolute: `Intro Offer — Unlimited Open Gym €${deal.priceDeal}/4 weeks | SculptClub Jordaan` },
  description: `Train as often as you like in our private gym in Amsterdam Jordaan for €${deal.priceDeal} per 4 weeks (normally €${deal.priceRegular}). Join now and keep that price for as long as you stay a member. Max 4 people, no contract, first session free.`,
  keywords: [
    "gym deal amsterdam",
    "unlimited gym amsterdam",
    "cheap gym jordaan",
    "open gym amsterdam",
    "gym without contract amsterdam",
    "gym intro offer amsterdam",
  ],
  alternates: {
    canonical: "/en/open-gym/unlimited-summer-deal",
    languages: {
      nl: "/nl/open-gym/onbeperkt-zomerdeal",
      en: "/en/open-gym/unlimited-summer-deal",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/open-gym/unlimited-summer-deal",
    title: `Intro Offer — train unlimited for €${deal.priceDeal}/4 weeks`,
    description: `Normally €${deal.priceRegular}. Join now and keep €${deal.priceDeal} for as long as you stay a member. Private gym in the Jordaan, max 4 people.`,
  },
};

const included = [
  { icon: Users, text: "Max 4 people in the studio — never wait for equipment" },
  { icon: Clock, text: "Open every day from 06:00 to 22:00" },
  { icon: KeyRound, text: "Door code via WhatsApp — you can start right away" },
  { icon: Ban, text: "No contract, no notice period — cancelling is always free" },
];

const faqs = [
  {
    question: `How long do I keep the €${deal.priceDeal} price?`,
    answer: `For as long as you stay a member. Join Unlimited now and you pay €${deal.priceDeal} per 4 weeks, and that price stays while your membership runs. If you stop and come back later, you get whatever rate applies to new members at that time.`,
  },
  {
    question: "What happens when the intro offer ends?",
    answer: `Unlimited goes back to €${deal.priceRegular} per 4 weeks for new members. Nothing changes for you — you keep €${deal.priceDeal}.`,
  },
  {
    question: "Can I try it for free first?",
    answer: "Yes. Your first session is free with no obligation, even if you don't become a member afterwards. You get the door code via WhatsApp and simply come train once.",
  },
  {
    question: "Am I tied into anything?",
    answer: "No. Open Gym runs in 4-week cycles and you can always cancel for free — no notice period, no explanation needed.",
  },
  {
    question: "How busy is it?",
    answer: "There are never more than 4 people in the studio at once. That's the whole point of a private gym — you never queue for equipment and you don't train in a crowded room.",
  },
];

export default function UnlimitedSummerDealPage() {
  const dealOn = deal.active;

  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Open Gym", url: "/en/open-gym" },
          { name: "Unlimited Intro Offer", url: "/en/open-gym/unlimited-summer-deal" },
        ]}
      />
      <FaqJsonLd faqs={faqs} />

      {/* ── Offer ─────────────────────────────────────────────────────── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            {dealOn && (
              <span className="inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-brand-foreground">
                Intro offer
              </span>
            )}

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Train unlimited in the Jordaan
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Private gym on the Egelantiersgracht. Max 4 people. Train as often
              as you like.
            </p>

            <div className="mt-8 flex items-baseline justify-center gap-3">
              {dealOn && (
                <span className="sc-price-old text-2xl text-muted-foreground">
                  €{deal.priceRegular}
                </span>
              )}
              <span className="text-6xl font-bold text-foreground">
                €{dealOn ? deal.priceDeal : deal.priceRegular}
              </span>
              <span className="text-lg text-muted-foreground">/ 4 weeks</span>
            </div>

            {dealOn && (
              <>
                <p className="mt-3 text-lg font-semibold text-brand">
                  Save €{savings} every 4 weeks
                </p>
                <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
                  Join now and you keep this price{" "}
                  <strong className="text-foreground">
                    for as long as you stay a member
                  </strong>
                  . After that, Unlimited is €{deal.priceRegular} for new
                  members.
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
                Book free trial
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={deal.dealUrl}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Join now
              </ButtonLink>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              First session free and no obligation — even if you don&apos;t join
              afterwards.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ── Price lock ────────────────────────────────────────────────── */}
      {dealOn && (
        <Section bg="muted">
          <FadeIn>
            <div className="mx-auto flex max-w-2xl items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <Lock className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Your price is locked for as long as you stay
                </h2>
                <p className="mt-2 text-muted-foreground">
                  This isn&apos;t a four-week discount. Join now and you pay €
                  {deal.priceDeal} per 4 weeks, and it stays that way — even
                  once the rate for new members is €{deal.priceRegular} again.
                  What closes is the{" "}
                  <strong className="text-foreground">joining window</strong>,
                  not your price.
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
            <h2 className="text-2xl font-bold text-foreground">
              What you get
            </h2>
            <ul className="mt-6 space-y-4">
              {included.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-muted-foreground">
              Want to see all plans and photos first?{" "}
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

      {/* ── See it — Instagram visitors live in vertical video; give them the
          vibe they came for: the canal clip + real training photos. Emotion
          first (summer on the Egelantiersgracht), proof second (the room). */}
      <Section bg="muted">
        <FadeIn>
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <p className="overline">Right in the Jordaan</p>
              <h2 className="mt-2 text-2xl font-bold text-foreground">Train where Amsterdam is at its best</h2>
              <p className="mt-2 text-muted-foreground">
                Your gym on the Egelantiersgracht — boats going by, doors open, never crowded.
              </p>
            </div>
            <div className="mx-auto max-w-xs">
              <LandingVideo
                src="/videos/opengym-canal.mp4"
                poster="/videos/opengym-canal-poster.jpg"
                label="The Egelantiersgracht, right outside SculptClub"
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

      {/* ── Social proof + location — real Google reviews (5.0), then the
          practical answer to "where is this?": address, map, route, hours. */}
      <ReviewsPreview locale="en" />
      <GoogleMap locale="en" />

      {/* ── Close ─────────────────────────────────────────────────────── */}
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">Come have a look</h2>
            <p className="mt-3 text-muted-foreground">
              {siteConfig.address.street} — a few minutes&apos; walk from the
              Westermarkt. Book a free session or ask your question first.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={acuityFreeTrials.openGymTryout}
                external
                size="lg"
                className="w-full sm:w-auto"
              >
                Book free trial
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.openGymEn}
                external
                variant="outline"
                size="lg"
                className="w-full sm:w-auto plausible-event-name=WhatsApp+Click"
              >
                <MessageCircle className="h-4 w-4" />
                Ask a question
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
