import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "VAT for personal trainers in the Netherlands: 21% or 9%?" },
  description:
    "Dutch VAT on personal training: standalone PT sessions are 21%. The 9% rate only applies with use of a sports facility. Plus the KOR under €20,000.",
  keywords: [
    "vat personal trainer netherlands",
    "btw personal training 9 or 21",
    "dutch vat freelance trainer",
    "kor small business scheme netherlands",
    "sports facility vat rate netherlands",
  ],
  alternates: {
    canonical: "/en/blog/vat-personal-trainer-netherlands",
    languages: {
      nl: "/nl/blog/btw-personal-trainer",
      en: "/en/blog/vat-personal-trainer-netherlands",
    },
  },
  openGraph: {
    type: "website",
    url: "/en/blog/vat-personal-trainer-netherlands",
    title: "VAT for personal trainers in the Netherlands: 21% or 9%?",
    description:
      "Standalone PT sessions: 21%. The reduced 9% rate only applies with a sports facility included. And under €20,000 revenue there is the KOR exemption.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAT for personal trainers in the Netherlands: 21% or 9%?",
    description:
      "Standalone PT sessions: 21%. The reduced 9% rate only applies with a sports facility included. And under €20,000 revenue there is the KOR exemption.",
  },
};

export default function BlogPostVatPersonalTrainer() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Blog", url: "/en/blog" },
          { name: "VAT for personal trainers", url: "/en/blog/vat-personal-trainer-netherlands" },
        ]}
      />
      <BlogPostingJsonLd
        title="VAT for personal trainers in the Netherlands — 21% or 9%?"
        description="Standalone PT sessions are 21% VAT. The reduced 9% rate only applies when training is combined with providing a sports facility. Plus the KOR exemption under €20,000 revenue."
        url="/en/blog/vat-personal-trainer-netherlands"
        datePublished="2026-08-28"
      />
      <FaqJsonLd faqs={[
        { question: "Which VAT rate applies to personal training in the Netherlands?", answer: "Standalone personal training — instruction or coaching without you providing a sports facility — falls under the standard 21% rate. That includes training outdoors or at the client's home." },
        { question: "When can a personal trainer charge 9% VAT?", answer: "Only when the training is part of 'providing the opportunity to practise sport': you make a sports facility available for the duration of the session, you handle its maintenance, security or cleaning, and you supply the necessary equipment. Pure instruction without a facility is 21%. If you are unsure whether your setup qualifies, put it to your accountant or the tax office once, then apply it consistently." },
        { question: "Is the reduced 9% sports rate staying?", answer: "Yes. The Dutch government planned to raise the reduced rate for sports facilities to 21% from 2026, but that increase was withdrawn after a parliamentary motion. The 9% rate remains in force." },
        { question: "What is the KOR and when does it make sense for a trainer?", answer: "The small business scheme (Kleine Ondernemersregeling): stay under €20,000 revenue per year and you can opt for a full VAT exemption — no VAT on invoices, no returns. The flip side: you cannot deduct VAT on your own costs, such as studio rent. Often attractive for part-time trainers with private clients; usually a deliberate stepping stone for anyone planning to grow past €20,000." },
      ]} />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                VAT for personal trainers in the Netherlands — 21% or 9%?
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />August 28, 2026</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                The short answer: standalone personal training carries <strong>21% Dutch VAT (btw)</strong>. The reduced 9% sports rate does exist, but only applies when training is combined with providing a sports facility. And below €20,000 in annual revenue, the KOR scheme can take you out of VAT entirely.
              </p>
              <p>
                <em>Important: this article is informational, not tax advice. The criteria below come from the Dutch tax office (Belastingdienst), as of August 2026; for your own situation, talk to your accountant or the Belastingdienst directly.</em>
              </p>

              <div className="overflow-x-auto rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Your situation</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">VAT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["You train a client outdoors, at the client's home, or in a gym where the client is a member", "21%", "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/tarieven_en_vrijstellingen/diensten_9_btw/sportbeoefening_waaronder_zwembaden_en_sauna/gelegenheid_geven_om_te_sporten/gelegenheid_geven_om_te_sporten"],
                      ["You provide the sports facility yourself, take care of maintenance or cleaning and supply the equipment, and the training is part of that", "9%", "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/tarieven_en_vrijstellingen/diensten_9_btw/sportbeoefening_waaronder_zwembaden_en_sauna/gelegenheid_geven_om_te_sporten/gelegenheid_geven_om_te_sporten"],
                      ["Your turnover is no more than €20,000 per calendar year and you opt into the KOR", "No VAT (exempt)", "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw/kleineondernemersregeling/"],
                    ].map(([situation, rate, source]) => (
                      <tr key={situation} className="border-b last:border-0 align-top">
                        <td className="px-4 py-3">{situation}</td>
                        <td className="px-4 py-3">
                          <span className="block font-medium text-foreground">{rate}</span>
                          <a href={source} target="_blank" rel="noopener noreferrer" className="text-xs text-brand underline">Source: Belastingdienst</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8">Which VAT rate applies to personal training?</h2>
              <p>
                The Belastingdienst&apos;s main rule is clear: sports lessons, instruction or coaching <em>not</em> given in combination with making a sports facility available fall under the <strong className="text-foreground">21% rate</strong>. That is the situation of most personal trainers: you sell your expertise and coaching as a service.
              </p>
              <p>
                Concretely: training a client outdoors in the park, at their home, or in a gym where the client holds the membership — that is coaching without a facility, so you charge 21%. Example: at €60 per session excluding VAT you invoice €72.60, and pay the €12.60 to the tax office.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">So when does the 9% rate apply?</h2>
              <p>
                The reduced rate belongs to <strong className="text-foreground">&ldquo;providing the opportunity to practise sport&rdquo;</strong> — and the Belastingdienst attaches three conditions to your offer:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "You make a sports facility available, which the client can use for the duration of the session.",
                  "You handle the maintenance, security or cleaning of that facility.",
                  "You supply the equipment the sport requires (for strength training: the racks, weights and machines).",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <p>
                Only when the training and such a facility together form one service can the whole fall under 9%. Whether your specific setup — say, a rented private studio you offer to your client including use of the space — qualifies is exactly the kind of question you settle once with your accountant, then apply consistently.
              </p>
              <p>
                Also worth knowing: the government planned to raise this 9% rate to 21% from 2026, but that increase was <strong className="text-foreground">withdrawn</strong> after a parliamentary motion. The reduced sports rate stays.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Under €20,000 revenue: the KOR</h2>
              <p>
                The <strong className="text-foreground">small business scheme (KOR)</strong> is the third route: stay under €20,000 revenue per year and you can opt for a full VAT exemption. No VAT on your invoices, no quarterly returns.
              </p>
              <p>
                The flip side matters just as much: under the KOR you also <strong className="text-foreground">cannot deduct VAT</strong> on your business costs — including VAT on studio rent, equipment or software. For a part-time trainer with private clients (who cannot deduct VAT anyway) the KOR is often favourable; for anyone planning to grow past €20,000 it is usually a stepping stone you plan deliberately.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Invoicing and returns in practice</h2>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Put your KvK number and VAT ID on every invoice, and state the applied rate explicitly.",
                  "VAT returns are filed quarterly via Mijn Belastingdienst Zakelijk.",
                  "VAT you pay on business costs is deductible as input tax — except under the KOR.",
                  "Set the VAT you owe aside immediately; it is the tax office's money that happens to sit in your account.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>

              <p>
                Not sure whether a studio where you arrange the space yourself fits the way you work? You can <a href="/en/studio-rental/free-trial" className="text-brand underline">try the SculptClub studio free for 60 minutes</a>, no contract.
              </p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Further reading</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/en/blog/freelance-personal-trainer-netherlands-tax-registration-insurance-pension" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Freelance PT in the Netherlands — tax, registration, insurance</p></a>
                  <a href="/en/blog/disability-insurance-freelance-personal-trainer-netherlands" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Disability insurance (AOV) for personal trainers</p></a>
                  <a href="/en/for-trainers/zzp-personal-trainer-checklist" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub freelance-trainer checklist</p></a>
                  <a href="/en/blog/cost-private-studio-rental-vs-opening-own-gym-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Cost: studio rental vs opening own gym</p></a>
                  <a href="/en/blog/invoice-freelance-personal-trainer-netherlands" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Invoicing: what must be on it?</p></a>
                  <a href="/en/blog/first-year-tax-freelance-personal-trainer-netherlands" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">First-year tax — what do you actually keep?</p></a>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Admin sorted? Time for a workspace</h3>
                <p className="mb-4">
                  VAT rate clear, invoices correct. Check out SculptClub Studio Rental — no fixed costs, no contract, from €12/hour.
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
