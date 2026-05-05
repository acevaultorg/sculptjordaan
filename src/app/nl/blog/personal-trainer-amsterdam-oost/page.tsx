import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Amsterdam Oost — SculptClub" },
  description:
    "Op zoek naar een personal trainer in Amsterdam Oost? SculptClub in de Jordaan is 15 minuten fietsen. Gratis intake, trainers vanaf €45.",
  keywords: [
    "personal trainer amsterdam oost",
    "personal training oost amsterdam",
    "sportschool amsterdam oost",
    "fitness amsterdam oost",
    "personal trainer oosterpark",
  ],
  alternates: {
    canonical: "/nl/blog/personal-trainer-amsterdam-oost",
    languages: {
      nl: "/nl/blog/personal-trainer-amsterdam-oost",
      en: "/en/blog/personal-trainer-amsterdam-east",
    },
  },
};

export default function PersonalTrainerOostNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer Amsterdam Oost", url: "/nl/blog/personal-trainer-amsterdam-oost" }]} />
      <BlogPostingJsonLd title="Personal Trainer Amsterdam Oost" description="Vind een personal trainer nabij Amsterdam Oost." url="/nl/blog/personal-trainer-amsterdam-oost" datePublished="2026-04-02" />

      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Personal Trainer in Amsterdam Oost</h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><User className="w-4 h-4" />SculptClub</span>
                <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" />2 april 2026</span>
              </div>
            </div>

            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-10">
              <Image src="/images/hero/gym-entrance.jpeg" alt="Ingang SculptClub privé gym" fill className="object-cover" preload sizes="(max-width: 768px) 100vw, 800px" />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Amsterdam Oost is een van de snelst groeiende buurten van de stad. Jong, actief en vol
                nieuwe bewoners die op zoek zijn naar een goede plek om te trainen. Maar serieuze
                personal training in Oost zelf is schaars. SculptClub in de Jordaan biedt het alternatief —
                een privé studio op 15 minuten fietsen via het centrum.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Van Oost naar de Jordaan</h2>
              <p>
                Via de Plantage Middenlaan en de Amstel fiets je van het Oosterpark naar de
                Egelantiersgracht in ongeveer 15 minuten. Met de metro (lijn 51/53/54) naar Centraal
                Station en 10 minuten lopen ben je er ook. Veel van onze klanten komen uit Oost
                omdat ze de rust en kwaliteit van een privé studio verkiezen boven de drukke
                sportscholen in de buurt.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Wat krijg je bij SculptClub?</h2>
              <p>
                Een volledig uitgeruste privé studio met professionele apparatuur. Vijf onafhankelijke
                trainers met elk hun eigen specialisatie. Gratis intake. Tarieven vanaf €45 per sessie.
                Geen abonnement. Ook Open Gym voor zelfstandig trainen vanaf €5,75 per sessie.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">Studio huren voor trainers uit Oost</h2>
              <p>
                Ben je zelf trainer in Amsterdam Oost? SculptClub biedt studio verhuur vanaf €12 per
                uur. Train je klanten in een professionele omgeving zonder de investering van een eigen
                pand. Kortingspakketten tot 23% korting.
              </p>
            </div>

            <div className="mt-12 border-t border-border/50 pt-8">
              <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="/nl/blog/personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam</p></a>
                <a href="/nl/blog/personal-trainer-amsterdam-centrum" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam Centrum</p></a>
                <a href="/nl/blog/personal-trainer-amsterdam-west" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam West</p></a>
                <a href="/nl/blog/personal-trainer-de-pijp-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer De Pijp</p></a>
                <a href="/nl/blog/personal-trainer-amsterdam-noord" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Personal trainer Amsterdam Noord</p></a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Gratis kennismaken?</h3>
              <p className="text-muted-foreground mb-6">15 minuten fietsen vanuit Oost.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink href="/nl/vind-jouw-personal-trainer" size="lg">Bekijk trainers<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <ButtonLink href="/nl/studio-huren" size="lg" variant="outline">Studio huren</ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
