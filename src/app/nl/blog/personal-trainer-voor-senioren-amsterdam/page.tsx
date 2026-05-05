import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer voor Senioren in Amsterdam — SculptClub" },
  description:
    "Fit en sterk blijven op latere leeftijd? Een personal trainer helpt senioren veilig trainen. Gratis intake bij SculptClub Amsterdam.",
  keywords: [
    "personal trainer senioren amsterdam",
    "fitness senioren amsterdam",
    "krachttraining ouderen amsterdam",
    "personal training 50+",
    "sporten voor ouderen amsterdam",
    "valpreventie training amsterdam",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-voor-senioren-amsterdam",
    languages: {
      nl: "/nl/blog/personal-trainer-voor-senioren-amsterdam",
      en: "/en/blog/personal-trainer-for-seniors-amsterdam",
    },
  },
};

export default function PTVoorSeniorenNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer voor senioren", url: "/nl/blog/personal-trainer-voor-senioren-amsterdam" }]} />
      <BlogPostingJsonLd title="Personal Trainer voor Senioren in Amsterdam" description="Waarom krachttraining essentieel is voor senioren en hoe SculptClub helpt." url="/nl/blog/personal-trainer-voor-senioren-amsterdam" datePublished="2026-04-03" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer voor Senioren in Amsterdam</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />3 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/studio/studio-interior-1.jpeg" alt="SculptClub privé studio interieur" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Na je vijftigste verandert je lichaam. Spiermassa neemt af, botten worden
                brozer en balans verslechtert geleidelijk. Maar het goede nieuws: met de
                juiste training kun je dit proces vertragen en zelfs omkeren. Krachttraining
                is het meest effectieve middel — en het is nooit te laat om te beginnen.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Waarom krachttraining essentieel is na 50</h2>
              <p>
                Vanaf je dertigste verlies je gemiddeld 3-8% spiermassa per decennium. Na je
                vijftigste versnelt dit. Minder spiermassa betekent minder kracht, een
                trage stofwisseling en meer risico op vallen. Krachttraining keert dit om:
              </p>
              <ul>
                <li><strong>Sterkere botten:</strong> Belasting stimuleert botaanmaak en vermindert osteoporose</li>
                <li><strong>Betere balans:</strong> Sterke benen en een stabiele core verminderen valrisico</li>
                <li><strong>Meer zelfstandigheid:</strong> Boodschappen tillen, traplopen, opstaan uit een stoel</li>
                <li><strong>Hogere stofwisseling:</strong> Meer spiermassa verbrandt meer calorieën in rust</li>
                <li><strong>Beter humeur:</strong> Krachttraining vermindert angst, depressie en slaapproblemen</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">Privé begeleiding maakt het verschil</h2>
              <p>
                Als senior is de juiste techniek nog belangrijker dan bij jongere sporters.
                Gewrichten zijn kwetsbaarder, hersteltijd is langer en het risico op
                overbelasting is groter. Een personal trainer past elke oefening aan op jouw
                lichaam, je beperkingen en je doelen.
              </p>
              <p>
                Bij SculptClub train je in een <a href="/nl/studio" className="text-brand hover:underline">privé
                studio</a> — geen drukte, geen haast, geen ongemak. De deurcode ontvang je
                via WhatsApp de avond tevoren. Het tempo bepaal je zelf.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Fysiotherapeut in het team</h2>
              <p>
                <a href="/nl/blog/fysiotherapeut-personal-trainer-amsterdam" className="text-brand hover:underline">Hamish</a> werkt
                als fysiotherapeut BSc bij SculptClub. Hij heeft ervaring met ouderen,
                revalidatie en chronische klachten. Als je twijfelt of training geschikt is
                voor jou, is hij de aangewezen trainer om mee te beginnen. De{" "}
                <a href="/nl/gratis-intake" className="text-brand hover:underline">eerste intake</a> is
                altijd gratis.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat kun je verwachten?</h2>
              <p>
                Een typisch trainingsprogramma voor senioren bij SculptClub bevat:
              </p>
              <ul>
                <li><strong>Opwarming:</strong> Lichte cardio en mobiliteit om gewrichten voor te bereiden</li>
                <li><strong>Krachttraining:</strong> Functionele oefeningen met machines, dumbbells of eigen lichaamsgewicht</li>
                <li><strong>Balansoefeningen:</strong> Single-leg werk en core stabiliteit voor valpreventie</li>
                <li><strong>Cooling-down:</strong> Stretching en ademhaling voor herstel</li>
              </ul>
              <p>
                De intensiteit bouwt geleidelijk op. Je trainer houdt je voortgang bij en
                past het programma elke paar weken aan.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Kosten en hoe je begint</h2>
              <p>
                Personal training bij SculptClub begint vanaf €45 per sessie. Geen
                abonnement, geen contract. Je <a href="/nl/faqs" className="text-brand hover:underline">annuleert
                altijd gratis</a>. De meeste senioren trainen 1-2 keer per week — genoeg
                voor merkbaar resultaat.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer voor beginners</p></a>
                <a href="/nl/blog/personal-trainer-na-blessure-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer na een blessure</p></a>
                <a href="/nl/blog/krachttraining-voor-vrouwen" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor vrouwen</p></a>
                <a href="/nl/blog/krachttraining-voor-beginners" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Krachttraining voor beginners</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Fit blijven op elke leeftijd</h3>
              <p className="text-muted-foreground mb-6">Plan een gratis intake en ontdek wat personal training voor jou kan doen.</p>
              <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Bekijk trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
