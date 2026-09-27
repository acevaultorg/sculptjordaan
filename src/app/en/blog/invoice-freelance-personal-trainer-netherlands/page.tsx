import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

// ZZP admin cluster #5 (card mtcsqlru2m9r63). The cluster earns most of this
// site's AI citations; invoicing was the one admin question it did not answer.
// Facts: Belastingdienst "factuureisen", "facturen maken" and "u maakt gebruik
// van de kleineondernemersregeling" (read 2026-09-27).

export const metadata: Metadata = {
  title: { absolute: "Invoicing as a freelance personal trainer in the Netherlands (2026)" },
  description:
    "What a Dutch invoice must show, why private clients do not need one, how to invoice under the small business scheme (KOR) and how long to keep invoices.",
  keywords: [
    "invoice personal trainer netherlands",
    "freelance personal trainer invoice requirements",
    "dutch invoice requirements zzp",
    "kor invoice vat exempt",
    "invoice private clients netherlands",
  ],
  alternates: {
    canonical: "/en/blog/invoice-freelance-personal-trainer-netherlands",
    languages: {
      nl: "/nl/blog/factuur-personal-trainer-zzp",
      en: "/en/blog/invoice-freelance-personal-trainer-netherlands",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/invoice-freelance-personal-trainer-netherlands",
    title: "Invoicing as a freelance personal trainer in the Netherlands (2026)",
    description:
      "The required details per the Dutch Tax Administration, the rules under €100, invoicing under the KOR and the retention period. With a worked example.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoicing as a freelance personal trainer in the Netherlands (2026)",
    description:
      "The required details per the Dutch Tax Administration, the rules under €100, invoicing under the KOR and the retention period.",
  },
};

const REQUIRED = [
  "Your full name and your client's (for a company: the company name).",
  "Your address and your client's.",
  "Your VAT identification number (starts with NL) and your KVK number.",
  "The invoice date and a unique invoice number from a consecutive series.",
  "What you delivered, for example \"10 personal training sessions of 60 minutes\".",
  "The date or period of the sessions (or the date of prepayment).",
  "The amount excluding VAT, the VAT rate and the VAT amount.",
];

export default function BlogPostInvoiceFreelancePersonalTrainer() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "Invoicing as a freelance personal trainer", url: "/en/blog/invoice-freelance-personal-trainer-netherlands" },
        ]}
      />
      <BlogPostingJsonLd
        title="Invoicing as a freelance personal trainer in the Netherlands (2026)"
        description="The details a Dutch invoice must show per the Tax Administration, when private clients need no invoice, invoicing under the KOR and the 7-year retention period."
        url="/en/blog/invoice-freelance-personal-trainer-netherlands"
        datePublished="2026-09-27"
      />
      <FaqJsonLd faqs={[
        { question: "What must a personal trainer's invoice show in the Netherlands?", answer: "Your name and your client's, both addresses, your VAT identification number and KVK number, the invoice date, a unique consecutive invoice number, a description of the sessions, the date or period of delivery, the amount excluding VAT, the VAT rate and the VAT amount." },
        { question: "Do I have to invoice private clients?", answer: "No. The Dutch invoicing obligation applies to supplies to other businesses. For personal training sold to private individuals you do not have to issue an invoice, although a payment receipt is good practice and useful for your own records. If you train for a company, you must invoice." },
        { question: "How do I invoice under the KOR?", answer: "Under the small business scheme (kleineondernemersregeling) you do not have to issue invoices. If you do, you show no VAT rate or VAT amount and state that you are exempt from VAT under the small business scheme." },
        { question: "When must an invoice be sent?", answer: "By the 15th of the month after the month in which you delivered the service. Train a company in March and the invoice must go out by 15 April." },
        { question: "How long must I keep invoices?", answer: "7 years. That is the Dutch tax retention period for your records, including the invoices you send and the ones you receive, such as studio rent." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Invoicing as a freelance personal trainer in the Netherlands
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />September 27, 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                The short answer: <strong>companies</strong> always get an invoice, with a fixed list of details. <strong>Private clients</strong> do not need one. And if you use the KOR, you never put VAT on an invoice.
              </p>
              <p>
                <em>This article is general information, not tax advice. The rules come from the Dutch Tax Administration (Belastingdienst), as of September 2026. For your own situation, ask your accountant or the Belastingdienst.</em>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">When do you have to invoice?</h2>
              <p>
                The invoicing obligation covers everything you supply to <strong className="text-foreground">other businesses</strong>. For a personal trainer that is, for example, a company buying sessions for its staff, or a client who pays through their own company.
              </p>
              <p>
                Most PT clients are private individuals. They do <strong className="text-foreground">not need an invoice</strong>. A receipt, or a proper invoice on request, still looks professional, and you need the record for your own books anyway.
              </p>
              <p>
                When you do invoice a company, the invoice must go out by the <strong className="text-foreground">15th of the month after delivery</strong>. Sessions in March mean an invoice by 15 April.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">What must be on the invoice?</h2>
              <ul className="space-y-2 list-none pl-0">
                {REQUIRED.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                If one invoice uses more than one VAT rate, list the amounts per rate separately. Which rate applies to personal training (usually 21%, sometimes 9%) is covered in <a href="/en/blog/vat-personal-trainer-netherlands" className="text-brand underline">our article on VAT for personal trainers</a>.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">A worked example</h2>
              <p>
                A company buys 8 sessions in October at €60 excluding VAT, at 21%. The invoice then shows:
              </p>
              <div className="rounded-xl border border-border/50 p-4 font-mono text-sm text-foreground">
                <p>8 x personal training 60 min (1 to 29 October 2026) ... €480.00</p>
                <p>VAT 21% ... €100.80</p>
                <p>Total ... €580.80</p>
              </div>
              <p>
                Add your name and address and theirs, your VAT ID, KVK number, invoice date and invoice number, and the invoice is complete.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Invoices up to €100: fewer details</h2>
              <p>
                If the total is <strong className="text-foreground">€100 or less including VAT</strong>, for example a single session, you may send a simplified invoice with fewer required details. The Belastingdienst lists these as the adjusted rules for small invoices.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Invoicing under the KOR</h2>
              <p>
                If you use the <strong className="text-foreground">small business scheme</strong> (kleineondernemersregeling, under €20,000 turnover a year), you do not have to issue invoices. If you issue one anyway, for example because a client asks:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "show no VAT rate and no VAT amount;",
                  "state that you are exempt from VAT under the small business scheme.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                Careful: if you put VAT on an invoice while under the KOR, you still owe that VAT.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Keep them for 7 years</h2>
              <p>
                Keep the invoices you send and the ones you receive, such as studio rent, equipment and software, for <strong className="text-foreground">7 years</strong>. Digital is fine as long as they stay readable. Accounting software that numbers and stores invoices for you prevents most mistakes on this list.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Further reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/en/blog/vat-personal-trainer-netherlands" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">VAT for personal trainers: 21% or 9%?</p></a>
                  <a href="/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Freelance PT in the Netherlands: registration, tax, insurance, pension</p></a>
                  <a href="/en/blog/first-year-tax-freelance-personal-trainer-netherlands" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">First-year tax: what do you keep?</p></a>
                  <a href="/en/for-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub freelance trainer checklist</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Invoices sorted? Time for a workspace</h3>
                <p className="mb-4">
                  Train your clients in a private studio in the Jordaan. Rent by the hour, no fixed costs, no contract.
                </p>
                <ButtonLink href="/en/studio-rental" size="lg">
                  See Studio Rental
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
