import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { acuityLinks, whatsappLinks } from "@/config/acuity";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { CheckCircle, MessageCircle, ArrowRight, Clock, Key, Dumbbell } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Open Gym — Train Independently in a Private Studio | SculptClub Amsterdam",
  description: "Book an Open Gym session at SculptClub in the Jordaan. Single session €10 or membership from €29/4 weeks. Private studio, daily 06:30–22:00.",
  alternates: { canonical: "/en/book-gym", languages: { nl: "/nl/boek-gym", en: "/en/book-gym" } },
};

const steps = [
  { icon: Clock, title: "Book a session", description: "Choose a time slot through the booking system." },
  { icon: Key, title: "Get your door code", description: "Unique code via WhatsApp to enter the studio." },
  { icon: Dumbbell, title: "Train on your time", description: "The full studio with professional equipment, all to yourself." },
];

const plans = [
  {
    name: "Single Session",
    sessions: "1 session",
    tagline: "No membership needed",
    price: "€10",
    period: "",
    perSession: null,
    badge: null,
    link: acuityLinks.openGymBook,
  },
  {
    name: "Starter Plan",
    sessions: "4 sessions",
    tagline: "Ideal to get started",
    price: "€29",
    period: "/ 4 weeks",
    perSession: "€7.25 / session",
    badge: null,
    link: acuityLinks.openGymPlans.instapplan,
  },
  {
    name: "Popular",
    sessions: "8 sessions",
    tagline: "Train 2x / week",
    price: "€49",
    period: "/ 4 weeks",
    perSession: "€6.13 / session",
    badge: "Most popular",
    link: acuityLinks.openGymPlans.populair,
  },
  {
    name: "Intensive",
    sessions: "12 sessions",
    tagline: "Train 3x / week",
    price: "€69",
    period: "/ 4 weeks",
    perSession: "€5.75 / session",
    badge: null,
    link: acuityLinks.openGymPlans.intensief,
  },
  {
    name: "Unlimited",
    sessions: "Unlimited",
    tagline: "Maximum freedom",
    price: "€89",
    period: "/ 4 weeks",
    perSession: null,
    badge: null,
    link: acuityLinks.openGymPlans.onbeperkt,
  },
];

const studioImages = [
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack in SculptClub studio" },
  { src: "/images/studio/assault-bike.jpeg", alt: "Assault bike in SculptClub studio" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Dumbbell rack in SculptClub studio" },
  { src: "/images/studio/studio-overview.jpeg", alt: "SculptClub studio overview" },
];

const faqs = [
  { q: "How much does an Open Gym session cost?", a: "Single session €10. Or get a membership from €29/4 weeks (€7.25/session). Most popular: 2x/week for €49. You can always upgrade or downgrade." },
  { q: "Do I need a membership?", a: "No, you can book a single session for €10. Or get a 4-week membership for better value. Cancel anytime." },
  { q: "Is it really just for me?", a: "Yes. The entire studio to yourself during your booked 60-minute slot. No other gym-goers." },
  { q: "Can I bring a friend?", a: "Up to 3 people can train together. Want to train together? Check our studio rental options." },
  { q: "What if I need to cancel?", a: "Cancelling or rescheduling is always free through the booking system." },
  { q: "What equipment is available?", a: "Power rack, cable machine, Concept2 rower, dumbbells, adjustable bench, kettlebells, resistance bands and more." },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function BookGymPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/en" }, { name: "Book Open Gym", url: "/en/book-gym" }]} />
      <ServiceJsonLd name="Open Gym" description="Train independently in a private studio in the Jordaan, Amsterdam." url="/en/book-gym" priceRange="€29 - €89 per 4 weeks" />
      <FaqJsonLd faqs={faqJsonLdData} />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="overline text-primary">Open Gym · Jordaan, Amsterdam</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Book an Open Gym Session</h1>
          <p className="mt-3 text-muted-foreground">Train independently in a private studio. Single session or membership — cancel anytime.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href={acuityLinks.openGymBook} size="xl" className="w-full sm:w-auto">Book a session<ArrowRight className="ml-2 h-4 w-4" /></ButtonLink>
            <ButtonLink href="#plans" size="lg" variant="outline" className="w-full sm:w-auto">Choose a plan</ButtonLink>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Single session €10 · Membership from €7.25/session · Daily 06:30–22:00</p>
          <div className="mt-6 pt-4 border-t border-border/50">
            <ButtonLink href={acuityLinks.openGymTrial} size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground">
              New here? Try a free trial first →
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* Pricing — Open Gym plans */}
      <Section id="plans">
        <SectionHeader
          overline="Open Gym"
          title="Choose Your Plan"
          description="Single session or membership per 4 weeks. Cancel anytime."
        />
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <Card className={`h-full text-center flex flex-col ${plan.badge ? "ring-2 ring-primary" : ""}`}>
                <CardHeader>
                  {plan.badge ? (
                    <Badge className="mx-auto mb-2">{plan.badge}</Badge>
                  ) : (
                    <Badge className="mx-auto mb-2 invisible" aria-hidden="true">—</Badge>
                  )}
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription>{plan.sessions}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground"> {plan.period}</span>
                  </p>
                  <p className={`mt-1 text-sm text-muted-foreground ${plan.perSession ? "" : "invisible"}`} aria-hidden={!plan.perSession}>
                    {plan.perSession ?? "—"}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{plan.tagline}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <ButtonLink href={plan.link} size="lg" className="w-full">
                    {plan.period ? "Choose plan" : "Book now"}
                  </ButtonLink>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="How it works" title="Get Started in 3 Steps" />
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"><step.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="mb-1 font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader overline="What you get" title="Train Independently in a Private Studio" />
        <FadeIn>
          <div className="mx-auto max-w-lg">
            <ul className="space-y-3">
              {["Free trial session — try it with no obligation", "Single session €10 — no membership needed", "Private studio all to yourself — no waiting, no crowds", "Membership from €29/4 weeks (€7.25/session)", "Most popular: 2x/week for €49/4 weeks", "Door code via WhatsApp, start right away"].map((b, i) => (
                <li key={i} className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="text-sm">{b}</span></li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="The Studio" title="Fully Equipped" />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {studioImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.1}><div className="relative aspect-square overflow-hidden rounded-lg"><Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" /></div></FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader overline="Members" title="What Members Say" />
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <FadeIn><div className="rounded-xl border bg-card p-5"><p className="text-sm leading-relaxed">&ldquo;No crowds, no waiting. I book an hour, do my workout and I&apos;m done. Exactly what I was looking for.&rdquo;</p><p className="mt-2 text-xs text-muted-foreground">— Google Review, ★★★★★</p></div></FadeIn>
          <FadeIn delay={0.1}><div className="rounded-xl border bg-card p-5"><p className="text-sm leading-relaxed">&ldquo;The focus and calm in a private studio is a real game changer. Never going back to a regular gym.&rdquo;</p><p className="mt-2 text-xs text-muted-foreground">— Google Review, ★★★★★</p></div></FadeIn>
        </div>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="Common questions" title="Got a Question?" />
        <FadeIn><Accordion className="mx-auto max-w-2xl">{faqs.map((faq, i) => (<AccordionItem key={i} value={i}><AccordionTrigger>{faq.q}</AccordionTrigger><AccordionContent><p>{faq.a}</p></AccordionContent></AccordionItem>))}</Accordion></FadeIn>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to train?</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">Book your session — you could start tomorrow.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.openGymBook} size="lg">Book a session<ArrowRight className="ml-2 h-4 w-4" /></ButtonLink>
              <ButtonLink href={whatsappLinks.openGymEn} variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white/10 dark:bg-transparent" external><MessageCircle className="mr-2 h-4 w-4" />WhatsApp us</ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
