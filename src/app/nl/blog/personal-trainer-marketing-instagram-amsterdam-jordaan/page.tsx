import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { Section, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { ArrowRight, CalendarDays, User } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Personal Trainer Marketing op Instagram — Wat werkt in Amsterdam (Jordaan) — SculptClub" },
  description:
    "Welke Instagram-content levert echt PT-klanten op in Amsterdam? Reels-lengte, hashtags, post-tijden, DM-strategie — alles wat werkt in 2026 voor ZZP personal trainers.",
  keywords: ["personal trainer instagram marketing", "klanten via instagram personal trainer", "pt content instagram amsterdam", "reels personal trainer", "instagram strategie ZZP trainer"],
  alternates: {
    canonical: "/nl/blog/personal-trainer-marketing-instagram-amsterdam-jordaan",
    languages: { nl: "/nl/blog/personal-trainer-marketing-instagram-amsterdam-jordaan", en: "/en/blog/personal-trainer-marketing-instagram-amsterdam-jordaan" },
  },
  openGraph: {
    type: "website",
    url: "/nl/blog/personal-trainer-marketing-instagram-amsterdam-jordaan",
    title: "Personal Trainer Marketing op Instagram — Wat werkt in Amsterdam (Jordaan) — SculptClub",
    description:
      "Welke Instagram-content levert echt PT-klanten op in Amsterdam? Reels-lengte, hashtags, post-tijden, DM-strategie — alles wat werkt in 2026 voor ZZP personal trainers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer Marketing op Instagram — Wat werkt in Amsterdam (Jordaan) — SculptClub",
    description:
      "Welke Instagram-content levert echt PT-klanten op in Amsterdam? Reels-lengte, hashtags, post-tijden, DM-strategie — alles wat werkt in 2026 voor ZZP personal trainers.",
  },
};

export default function BlogPostInstagramMarketing() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/nl/blog" }, { name: "Personal trainer Instagram marketing", url: "/nl/blog/personal-trainer-marketing-instagram-amsterdam-jordaan" }]} />
      <BlogPostingJsonLd title="Personal trainer marketing op Instagram — wat werkt in Amsterdam (Jordaan)" description="Welke Instagram-content levert echt PT-klanten op in Amsterdam? Reels-lengte, hashtags, post-tijden, DM-strategie — alles wat werkt in 2026 voor ZZP personal trainers." url="/nl/blog/personal-trainer-marketing-instagram-amsterdam-jordaan" datePublished="2026-05-20" />
      <FaqJsonLd faqs={[
        { question: "Welke Instagram-content werkt voor personal trainers in 2026?", answer: "Reels van 7-15 seconden met een sterke hook in de eerste 2 seconden converteren het beste. Form-correction video's, hyper-specifieke tips, en behind-the-scenes momenten. Geen generieke motivational quotes." },
        { question: "Hoeveel hashtags moet ik gebruiken op Instagram?", answer: "5 tot 7 niche-specifieke hashtags in 2026 (anders dan vroeger 20+). Algorithm pusht inhoud, niet hashtag-stuffing. Liever #personaltrainerjordaan dan #fitness." },
        { question: "Wanneer is de beste tijd om te posten in Amsterdam?", answer: "19:00 tot 21:00 voor maximaal lokaal bereik. Lunchtijd 12:30 werkt ook (vooral cross-platform met TikTok)." },
      ]} />
      <Section>
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="overline mb-3">Blog</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Personal trainer marketing op Instagram — wat werkt in Amsterdam (Jordaan)</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" />20 mei 2026</span><span className="flex items-center gap-1.5"><User className="w-4 h-4" />SculptClub</span></div>
            </div>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">95% van de SculptClub-boekingen begint via Instagram (Clarity 30d data, 2026). Voor Amsterdam-PT’s is Instagram dé acquisitie-engine. Maar het algoritme is in 2025-2026 fors verschoven — wat 2 jaar geleden werkte (lange video’s, motivational quotes, 30 hashtags) doet nu zero. Hier is wat in 2026 daadwerkelijk werkt.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wat veranderd is in 2026 — Reels dominant, lange posts dood</h2>
              <p>De grote shifts:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Reels > posts > stories", "Instagram pusht Reels naar nieuwe ogen. Gewone foto-posts krijgen 30-50% minder bereik dan in 2024."],
                  ["Korter is beter", "7-15 seconden Reels presteren beter dan 30-60s. Algoritme rewards complete-watches."],
                  ["Hashtag-stuffing dood", "20+ hashtags worden gestraft. 5-7 niche-specifiek werkt nu."],
                  ["Saves > likes", "Algoritme weegt “saves” en “shares” zwaarder dan likes. Content waar mensen later op terug willen komen presteert."],
                  ["DMs zijn de conversie-laag", "Likes worden geen klanten. DMs worden klanten. Optimaliseer voor DMs."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">De 4 content pillars die werken voor Amsterdam PT’s</h2>
              <p>Verspreid je content over 4 pillars in een 4-weken rotatie:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Workouts (40%)", "Korte form-demonstraties of correction-Reels. “Hier doe je het verkeerd; hier is hoe het wel moet.” Specifiek > generiek."],
                  ["Tips (25%)", "Een concrete, technische tip per Reel. “5 seconden positie-correctie die je deadlift omhoog brengt.”"],
                  ["Behind-the-scenes (20%)", "Jij in de studio, een klant die net iets bereikt heeft, een gesprek over wat een sessie inhoudt. Bouwt vertrouwen."],
                  ["Transformations (15%)", "Met écht consent. Subtiele voor-en-na shots, eerlijke timeline. “6 maanden, 1× per week, dit is wat er gebeurde.” Geen fake claims."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Reels — lengte, hook, captions</h2>
              <p>De anatomie van een werkende Reel voor een Amsterdam PT:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Lengte 7-15 seconden", "Sweet spot voor PT-content. Algoritme rewards complete-watches; korter = hogere completion rate."],
                  ["Hook in seconde 0-2", "Eerste frame: een verkeerde vorm, een schokkende stat, of een specifieke vraag. “Doe jij je squat zo? Stop.”"],
                  ["Visual on-screen tekst", "Mensen scrollen vaak zonder geluid. Captions in de Reel zelf, niet alleen in de beschrijving."],
                  ["Caption met 1 tip + 1 CTA", "“Dit is 5-seconden cue die je squat fixt. Wil je intake? DM me.” Geen verhaal, geen 200 woorden."],
                  ["Posttijd 19:00-21:00 Amsterdam", "Lokaal bereik piek. Lunch (12:30) ook ok als secundaire slot."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8">Hashtags 2026 — wat werkt, wat niet</h2>
              <p>5 tot 7 niche-specifieke hashtags. Voorbeeld voor een Amsterdam-PT:</p>
              <div className="overflow-hidden rounded-xl border border-border bg-card my-6">
                <table className="w-full text-sm">
                  <thead><tr className="border-b bg-muted/50"><th className="px-4 py-3 text-left font-semibold text-foreground">Werkt (in 2026)</th><th className="px-4 py-3 text-left font-semibold text-foreground">Werkt niet meer</th></tr></thead>
                  <tbody>
                    {[["#personaltrainerjordaan", "#fitness"], ["#personaltrainingamsterdam", "#gymlife"], ["#krachttrainingamsterdam", "#motivation"], ["#trainerjordaan", "#instafit"], ["#sculptclubjordaan (brand)", "#abs #shred"]].map(([w, nw]) => (<tr key={w} className="border-b last:border-0"><td className="px-4 py-3 text-foreground">{w}</td><td className="px-4 py-3 line-through opacity-60">{nw}</td></tr>))}
                  </tbody>
                </table>
              </div>
              <p>De hashtag is een topic-signaal, geen reach-multiplier. Algoritme leest je content; hashtags helpen alleen om je content te categoriseren naar de juiste niche.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">DM-strategie — hoe converteer je volgers naar klanten</h2>
              <p>Likes worden geen klanten. DMs worden klanten. Drie types DM-conversaties:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Inbound DM van warm publiek", "Iemand stuurt je een DM na een Reel. Reageer binnen 1 uur. Beantwoord hun vraag specifiek, niet generiek. Eindig met: “Wil je een gratis intake? Geen verplichtingen.”"],
                  ["Cold DM na engagement", "Iemand liket meerdere posts. Stuur na 7-14 dagen een persoonlijk berichtje: “Hé, ik zie dat je mijn content volgt. Train je nu zelf, of overweeg je een PT?” Geen pitch, gewoon vraag."],
                  ["Post-intake follow-up", "Na een gratis intake-sessie: 24 uur later een DM met “Dank voor de intake. Hier zijn de 3 dingen waar we mee zouden beginnen.” Concreet, gepersonaliseerd. Verkoop niet — herhaal de waarde."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>
              <p>DM-strategie schaalt niet automatisch. Plan 30-45 min per dag voor DMs. Veel converteren niet — maar van de 2-3 echte DM-gesprekken per week wordt er gemiddeld 1 een klant.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Cross-posting naar TikTok — wel of niet?</h2>
              <p>Korte versie: <strong className="text-foreground">ja, doe het</strong>. Lange versie:</p>
              <p>TikTok pusht nieuwe creators sneller dan Instagram in 2026. Zelfde 7-15s Reel kun je cross-posten naar TikTok zonder herwerken. Lunchtijd (12:30) en avond (19:00) zijn TikTok-sweet-spots.</p>
              <p>Caveat: TikTok-publiek is gemiddeld jonger dan Instagram. Amsterdam PT-klanten die €60-90/sessie willen betalen, zitten meer op Instagram. TikTok is goed voor brand-awareness + nieuwe reach, Instagram is goed voor conversie.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">SculptClub social-tool — kant-en-klare 4-weken kalender</h2>
              <p>Bij SculptClub hebben we een tool op <a href="/nl/social" className="text-brand hover:underline">sculptclub.nl/nl/social</a> die elke week 4 posts klaar heeft: hook, script, hashtags, visuals. 16 posts per maand, alles in te plannen. Brain geeft de brief in het Engels — jij schrijft de Dutch caption in je eigen stem.</p>
              <p>Werkt voor alle SculptClub-trainers, ook als je niet bij ons in de studio huurt. Gratis te gebruiken zonder lidmaatschap. Bedoeling: je bespaart 3-5 uur per week aan content-planning.</p>

              <h2 className="text-2xl font-bold text-foreground mt-8">Wat absoluut NIET werkt</h2>
              <p>Lijst van content-vormen die je tijd verspillen:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  ["Generieke motivational quotes (“No pain no gain”-stijl)", "Krijgt zero engagement van mensen die écht een trainer overwegen."],
                  ["Fake before-and-after met overdreven claims", "Algorithm penaliseert + klanten doorzien het direct."],
                  ["Lange video’s van 60+ seconden zonder hook", "Completion rate gaat onder 20%, algorithm distribueert niet verder."],
                  ["20+ hashtags onder elke post", "2024-tactiek. Werkt nu averechts."],
                  ["Cold DMs zonder context", "“Hey willen je sporten met mij?” werkt niet. Reageer altijd op een specifieke trigger (recente post, engagement, intake)."],
                ].map(([t, d]) => (<li key={t} className="flex items-start gap-2"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" /><span><strong className="text-foreground">{t}:</strong> {d}</span></li>))}
              </ul>

              <div className="mt-12 border-t border-border/50 pt-8">
                <h3 className="text-lg font-bold mb-4">Meer lezen</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a href="/nl/blog/eerste-10-klanten-zzp-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Eerste 10 klanten krijgen</p></a>
                  <a href="/nl/blog/studio-huren-vs-commerciele-gym-personal-trainer-amsterdam" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Studio huren vs commerciële gym</p></a>
                  <a href="/nl/social" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">SculptClub Social Content Tool</p></a>
                  <a href="/nl/voor-trainers" className="group block rounded-xl border border-white/10 p-4 transition-colors hover:bg-muted"><p className="font-semibold text-sm group-hover:text-brand transition-colors">Voor trainers — overzichtspagina</p></a>
                </div>
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Klaar om te starten?</h3>
                <p className="mb-4">Bekijk onze 4-weken content-kalender met kant-en-klare briefs voor 16 posts per maand. Gratis te gebruiken, geen lidmaatschap vereist.</p>
                <ButtonLink href="/nl/social" size="lg">Open Social Content Tool<ArrowRight className="ml-2 w-4 h-4" /></ButtonLink>
              </div>
            </div>
          </article>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
