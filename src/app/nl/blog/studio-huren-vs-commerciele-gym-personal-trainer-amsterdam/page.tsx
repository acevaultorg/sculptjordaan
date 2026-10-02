import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Studio huren of commerciële gym als personal trainer?" },
  description:
    "Twijfel je tussen werken in een commerciële gym (Optimum, Sportcity, David Lloyd) of een privé studio huren?",
  keywords: ["personal trainer commerciële gym vs huren", "fitnesscentrum trainer worden", "personal trainer studio huren amsterdam", "zzp pt commerciële gym", "trainer commissie commerciële sportschool"],
  alternates: {
    canonical: "/nl/blog/studio-huren-vs-commerciele-gym-personal-trainer-amsterdam",
    languages: { nl: "/nl/blog/studio-huren-vs-commerciele-gym-personal-trainer-amsterdam", en: "/en/blog/studio-rental-vs-commercial-gym-personal-trainer-amsterdam" },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/studio-huren-vs-commerciele-gym-personal-trainer-amsterdam",
    title: "Studio huren of commerciële gym als personal trainer?",
    description:
      "Twijfel je tussen werken in een commerciële gym (Optimum, Sportcity, David Lloyd) of een privé studio huren?",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio huren of commerciële gym als personal trainer?",
    description:
      "Twijfel je tussen werken in een commerciële gym (Optimum, Sportcity, David Lloyd) of een privé studio huren?",
  },
};

export default function BlogPostStudioVsCommercieleGym() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Studio huren vs commerciële gym", url: "/nl/blog/studio-huren-vs-commerciele-gym-personal-trainer-amsterdam" }]} />
      <BlogPostingJsonLd title="Studio huren vs commerciële gym als personal trainer in Amsterdam" description="Twijfel je tussen werken in een commerciële gym (Optimum, Sportcity, David Lloyd) of een privé studio huren?" url="/nl/blog/studio-huren-vs-commerciele-gym-personal-trainer-amsterdam" datePublished="2026-05-20" />
      <FaqJsonLd faqs={[
        { question: "Wat is de commissie bij commerciële gyms voor personal trainers?", answer: "30 tot 50% in Amsterdam — afhankelijk van de keten. Sportcity en David Lloyd zitten typisch rond 40%, Optimum richting 30-35%. Onder de bovengrens van 30% kom je vrijwel nooit." },
        { question: "Wie is de klant — de PT of de gym?", answer: "Bij commerciële gyms is de klant van de gym, niet van jou. Als je weggaat, blijven ze. Bij studio-huur (zoals SculptClub) is de klant van jou — jullie gaan samen mee." },
        { question: "Voor wie is een commerciële gym tóch beter?", answer: "Beginners zonder netwerk die snel klant-volume willen, of trainers die niets willen regelen (administratie, marketing, intake-flow). De gym verzorgt dat, in ruil voor commissie." },
      ]} />
      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Studio huren vs commerciële gym als personal trainer in Amsterdam</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />20 mei 2026</span><span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span></div>
            </div>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">Je hebt twee hoofdpaden als ZZP personal trainer in Amsterdam: werken in een commerciële sportschool (Optimum, Sportcity, David Lloyd) of een privé studio huren (SculptClub-model). Allebei levert je klanten op — maar de structurele verschillen bepalen of je over 5 jaar nog steeds 100% van wat je rekent in je zak houdt, of dat de helft naar iemand anders gaat.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">De twee modellen op een rij</h2>
              <p>Commerciële gym = je werkt onder hun dak, met hun leden, in hun systeem. Studio-huur = je huurt een ruimte per uur, met jouw klanten, in jouw systeem.</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Commerciële gym", "Voorbeelden: Optimum, Sportcity, David Lloyd, SportCity Plus, USC. Vaak een vast tarief per maand of een commissie per sessie."],
                  ["Privé studio huur", "Voorbeeld: SculptClub. Je huurt per uur, met al je eigen klanten. Geen lidmaatschap, geen commissie."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Commerciële gym — wat krijg je, wat lever je in</h2>
              <p>Werken bij een commerciële gym in Amsterdam betekent meestal:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Toegang tot ledenbestand", "Direct potentiële klanten in de zaal. Je hoeft niet zelf aan acquisitie."],
                  ["Gym-uniform / branding", "Je draagt vaak een gym-shirt; je communiceert namens de gym, niet namens jezelf."],
                  ["Verplichte uren", "Een aantal “floor hours” per week waarin je beschikbaar bent voor leden (vaak onbetaald of laag betaald)."],
                  ["Commissie 30-50%", "De gym pakt 30-50% van je sessietarief. €60 sessie → €30-42 voor jou."],
                  ["Geen klantcontact buiten sessie", "Communicatie buiten de gym (DMs, planning) loopt vaak via het gym-systeem."],
                  ["Lock-in via klantbestand", "Klanten zijn van de gym. Als je vertrekt, mag je ze niet meenemen (contractueel)."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Effectief netto: €30-42 per sessie i.p.v. je full rate van €60. Bij 20 sessies/week = €600-840/week, vs €1.200 op eigen huur. Verschil: €360-600/week = €1.500-2.500/maand.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Privé studio huren — wat krijg je, wat moet je zelf doen</h2>
              <p>Bij SculptClub:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Per uur huren vanaf €12", "Geen lidmaatschap. Geen contract. Vaste lasten = nul."],
                  ["Alleen uurhuur", "Wat jij rekent, hou je. Geen aftrek, geen percentage."],
                  ["Eigen profiel op de website", "Sinds 2026: trainers krijgen een profielpagina op sculptclub.nl met foto, bio, specialisaties + WhatsApp-CTA. We zijn jouw distribution-partner."],
                  ["Eigen klantcontact", "DMs, planning, WhatsApp — alles loopt via jou. Klant is van jou."],
                  ["Eigen branding", "Geen verplicht uniform. Je presenteert jezelf onder eigen naam + brand."],
                  ["Jij doet je eigen acquisitie", "We brengen wel inbound (gratis intake-aanvragen via de site), maar de meeste klanten breng je zelf."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Effectief netto: €60 (jouw tarief) − €12 huur = €48 per sessie. Bij 20 sessies/week = €960/week vs €600-840 in commerciële gym.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Commissies vergeleken in cijfers</h2>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead><tr className="border-b bg-muted/50"><th className="px-4 py-3 text-left font-semibold text-foreground">Model</th><th className="px-4 py-3 text-center font-semibold text-foreground">Trainer-tarief</th><th className="px-4 py-3 text-center font-semibold text-foreground">Commissie/huur</th><th className="px-4 py-3 text-center font-semibold text-foreground">Netto per sessie</th></tr></thead>
                  <tbody>
                    {[
                      ["Commerciële gym (30% commissie)", "€60", "−€18", "€42"],
                      ["Commerciële gym (40% commissie)", "€60", "−€24", "€36"],
                      ["Commerciële gym (50% commissie)", "€60", "−€30", "€30"],
                      ["SculptClub per uur", "€60", "−€12 huur", "€48"],
                      ["SculptClub met Routine pakket", "€60", "−€10 huur", "€50"],
                    ].map(([m, r, c, n]) => (<tr key={m} className="border-b last:border-0"><td className="px-4 py-3">{m}</td><td className="px-4 py-3 text-center">{r}</td><td className="px-4 py-3 text-center">{c}</td><td className="px-4 py-3 text-center font-medium">{n}</td></tr>))}
                  </tbody>
                </table>
              </div>
              <p>Over een jaar van 20 sessies/week (~864 sessies): het verschil tussen SculptClub (€48 netto) en commerciële gym aan 40% (€36 netto) = €12 × 864 = <strong className="text-foreground">€10.368 per jaar in jouw zak</strong>.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Klantenbinding — wie behoort de klant toe?</h2>
              <p>Dit is de échte juridische + emotionele verdeling:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Commerciële gym", "Klanten zijn lid van de gym. Hun contract is met de gym, niet met jou. Wettelijk + contractueel mag je ze niet meenemen als je vertrekt. Sommige gyms zelfs een non-compete-clausule (~3-12 maanden) waarin je niet binnen X km een eigen klant van hen mag benaderen."],
                  ["Privé studio huur", "Klanten zijn jouw klanten. Jullie hebben de relatie. Als je weggaat van SculptClub naar elders — je klanten gaan mee. Wij hebben geen contract met hen, alleen met jou (en zelfs dat is per uur, geen lock-in)."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Dit is de meest onderschatte structurele verschil. Bouw 5 jaar lang aan een klantenbestand in een commerciële gym, en alles wat je hebt opgebouwd blijft daar als je vertrekt.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Brand-positionering — hoe presenteer je jezelf?</h2>
              <p>Een commerciële gym branding doet je merk vaak meer kwaad dan goed:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["In commerciële gym", "“Trainer bij Optimum Vondelpark” — je bent onderdeel van een merk waar mensen ook een 5-euro maand-abonnement nemen. Je premium-status verdunt automatisch."],
                  ["Bij privé studio", "“Trainer bij SculptClub Jordaan” OF gewoon “Personal Trainer in Jordaan” — je bent een onafhankelijke professional, niet een gym-werknemer."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Voor wie premium-tarieven wil rekenen (€75+/sessie), is brand-positionering kritiek. Premium klanten betalen voor een onafhankelijk expert, niet voor “de PT van de gym waar ik traint”.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wanneer commerciële gym tóch beter is</h2>
              <p>Dit blog doet niet alsof er nul rationale is om voor commerciële gym te kiezen. Voor sommige profielen werkt het:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Beginners zonder netwerk", "Je hebt zero bestaande klanten en wil snel volume. De gym geeft je de ledenbestand-toegang. Eerste 6 maanden ervaring opdoen kan zinvol zijn."],
                  ["Trainers die niets willen regelen", "Geen administratie, geen marketing, geen intake-flow. De gym verzorgt het in ruil voor commissie. Past bij mensen die puur willen trainen."],
                  ["Niche-trainers met specifieke apparatuur", "Een gym met cryotherapie, EMS, of een hyperbaric kamer biedt apparatuur die je zelf nooit zou kopen. Specifieke niche kan dat waard zijn."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Voor de meeste mid-career trainers (12+ klanten, €55+ tarief, willen autonomie) is studio-huur de financieel én strategisch betere keuze.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Hybride: het beste van beide werelden</h2>
              <p>Sommige trainers doen allebei tegelijk:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["50/50 split", "12 sessies/week eigen klanten in SculptClub + 12 sessies/week gym-leden in commerciële gym."],
                  ["Brand opbouwen", "Begin in commerciële gym voor klant-acquisitie. Na 12 maanden migreer je je beste klanten naar studio-huur — pak je marge terug."],
                  ["Specifieke niches", "Voor algemene PT in commerciële gym, voor premium 1-op-1 in privé studio. Twee tariefniveaus, twee soorten klanten."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>Het hybride model werkt — let alleen op contractuele non-compete clausules en consistente klant-relatie. Vermeng niet je SculptClub-klanten met je gym-klanten.</p>
              <p>Meer gidsen over werken als zelfstandige trainer — van eerste klanten tot pakketten — vind je op de pagina <a href="/nl/voor-trainers" className="text-brand hover:underline">voor trainers</a>.</p>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/blog/kosten-prive-studio-huren-vs-eigen-gym-openen-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Kosten privé studio vs eigen gym</p></a>
                  <a href="/nl/blog/personal-trainer-pakketten-prijsstrategie-zzp-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Pakketten + prijsstrategie</p></a>
                  <a href="/nl/voor-trainers/personal-trainer-eigen-studio-vs-thuis-vs-buiten" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eigen studio vs thuis vs buiten</p></a>
                  <a href="/nl/studio-huren" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub Studio Rental</p></a>
                </div>
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Wil je 100% van je tarief?</h3>
                <p className="mb-4">Bij SculptClub alleen uurhuur — geen lidmaatschap, geen gedeelde klantenbinding. Vanaf €12/uur. Plan een gratis rondleiding.</p>
                <ButtonLink href="/nl/studio-huren" size="lg">Bekijk Studio Rental<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
                <p className="mt-3 text-sm text-muted-foreground">Eerste keer? <a href="/nl/studio-huren/gratis-test" className="text-brand underline">Probeer de studio 60 minuten gratis</a> met je eigen klant, zonder contract.</p>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
