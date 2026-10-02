import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Globe, MapPin } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Section } from "@/components/sections/section";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { siteConfig, type Locale } from "@/config/site";
import {
  directoryPaths,
  directoryTrainers,
  getDirectoryTrainer,
  languageNames,
  type DirectoryTrainer,
} from "@/lib/trainer-directory";
import { publicTrainers, TAGS, AREAS, areaLabel, tagsFromText, type PublicTrainer } from "@/lib/public-trainers";
import { DirectoryFilter } from "@/components/marketing/directory-filter";

/**
 * Trainer directory (list + profile). Server components only: no client JS, no
 * analytics events, no WhatsApp/Acuity links, so nothing here can fire an ad
 * conversion. All data comes from src/lib/trainer-directory.ts.
 */

const COPY = {
  nl: {
    home: "Home",
    listTitle: "Personal trainers in Amsterdam",
    listSub: "Kies op specialiteit, wijk en taal. Je boekt direct bij de trainer zelf.",
    note: "Trainers zijn zelfstandig. Tarief en voorwaarden spreek je af met de trainer.",
    count: (n: number) => (n === 1 ? "1 trainer" : `${n} trainers`),
    viewProfile: "Bekijk profiel",
    ariaProfile: (name: string) => `Bekijk het profiel van ${name}`,
    photoAlt: (name: string) => `Foto van ${name}, personal trainer in Amsterdam`,
    emptyTitle: "De gids wordt gevuld",
    emptyBody: "Er staan nog geen trainers in de gids. Ben je personal trainer in Amsterdam? Zet je profiel erbij.",
    addTitle: "Personal trainer in Amsterdam?",
    addBody: "Zet je profiel in de gids, zodat nieuwe klanten je kunnen vinden. We tonen je profiel alleen met jouw toestemming.",
    addCta: "Profiel toevoegen",
    rentLead: "Op zoek naar een plek om te trainen?",
    rentCta: "Bekijk de studio in de Jordaan",
    back: "Alle trainers",
    specialties: "Specialiteiten",
    area: "Wijk",
    languages: "Talen",
    bookStudio: "Plan een gratis intake",
    bookExternal: "Naar de boekpagina",
    website: "Website",
    instagram: "Instagram",
    about: "Over",
    profileTitle: (name: string) => `${name}, personal trainer Amsterdam | SculptClub`,
    profileH1: (name: string) => `${name}, personal trainer`,
    profileDescription: (name: string, area: string, specs: string, langs: string) =>
      `${name} is personal trainer in ${area}, Amsterdam. Specialiteiten: ${specs}. Talen: ${langs}.`,
    jobTitle: "Personal trainer",
    listName: "Personal trainers in Amsterdam",
    studioBadge: "Traint bij SculptClub",
    studioHeading: "Trainers bij SculptClub in de Jordaan",
    publicHeading: "Meer personal trainers in Amsterdam",
    publicIntro:
      "Zelfstandige trainers en kleine studio's door de hele stad, met wat ze zelf op hun website zetten. Ze zijn niet aangesloten bij SculptClub: je neemt contact op via hun eigen site.",
    studioKind: "Studio",
    source: "Bron",
    checked: (d: string) => `gecontroleerd ${d}`,
    edit: "Aanpassen of verwijderen",
    claim: "Ben jij dit? Maak er een profiel van",
    editSubject: (name: string) => `Vermelding aanpassen: ${name}`,
    privacy:
      "Deze vermeldingen bevatten alleen openbare zakelijke gegevens van de eigen website van de trainer: naam, specialiteit, wijk, talen, een prijs als die er staat, en links naar de website en Instagram. Geen foto's, telefoonnummers of e-mailadressen. Sta je hier en wil je iets aanpassen of eruit? Mail contact@sculptclub.nl, dan passen we het aan.",
    rentTitle: "Ben je personal trainer?",
    rentBody: "Huur SculptClub per uur: een privé studio in de Jordaan, halve studio vanaf \u20ac12 per uur. Je houdt 100% van je tarief.",
    rentBandCta: "Bekijk studio huren",
    fArea: "Wijk",
    fTag: "Specialiteit",
    fLang: "Taal",
    fAll: "Alle",
    fEmpty: "Geen trainers met deze filters",
    fReset: "Wis filters",
    countAll: (studio: number, pub: number) => `${studio} bij SculptClub · ${pub} in de rest van Amsterdam`,
    date: (iso: string) => new Date(iso + "T12:00:00Z").toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric", timeZone: "Europe/Amsterdam" }),
  },
  en: {
    home: "Home",
    listTitle: "Personal trainers in Amsterdam",
    listSub: "Choose by specialty, neighbourhood and language. You book directly with the trainer.",
    note: "Trainers are self-employed. You agree rates and terms with the trainer.",
    count: (n: number) => (n === 1 ? "1 trainer" : `${n} trainers`),
    viewProfile: "View profile",
    ariaProfile: (name: string) => `View ${name}'s profile`,
    photoAlt: (name: string) => `Photo of ${name}, personal trainer in Amsterdam`,
    emptyTitle: "The directory is filling up",
    emptyBody: "No trainers are listed yet. Are you a personal trainer in Amsterdam? Add your profile.",
    addTitle: "Personal trainer in Amsterdam?",
    addBody: "Add your profile to the directory so new clients can find you. We only show your profile with your consent.",
    addCta: "Add your profile",
    rentLead: "Looking for a place to train clients?",
    rentCta: "See the studio in the Jordaan",
    back: "All trainers",
    specialties: "Specialties",
    area: "Neighbourhood",
    languages: "Languages",
    bookStudio: "Book a free intro",
    bookExternal: "Go to booking page",
    website: "Website",
    instagram: "Instagram",
    about: "About",
    profileTitle: (name: string) => `${name}, personal trainer Amsterdam | SculptClub`,
    profileH1: (name: string) => `${name}, personal trainer`,
    profileDescription: (name: string, area: string, specs: string, langs: string) =>
      `${name} is a personal trainer in ${area}, Amsterdam. Specialties: ${specs}. Languages: ${langs}.`,
    jobTitle: "Personal trainer",
    listName: "Personal trainers in Amsterdam",
    studioBadge: "Trains at SculptClub",
    studioHeading: "Trainers at SculptClub in the Jordaan",
    publicHeading: "More personal trainers in Amsterdam",
    publicIntro:
      "Independent trainers and small studios across the city, with what they publish on their own website. They are not part of SculptClub: you contact them through their own site.",
    studioKind: "Studio",
    source: "Source",
    checked: (d: string) => `checked ${d}`,
    edit: "Edit or remove",
    claim: "Is this you? Turn it into a profile",
    editSubject: (name: string) => `Edit listing: ${name}`,
    privacy:
      "These listings hold only public business details from the trainer's own website: name, specialty, neighbourhood, languages, a price if one is published, and links to the website and Instagram. No photos, phone numbers or e-mail addresses. Listed here and want something changed or removed? E-mail contact@sculptclub.nl and we will change it.",
    rentTitle: "Are you a personal trainer?",
    rentBody: "Rent SculptClub by the hour: a private studio in the Jordaan, half studio from \u20ac12 per hour. You keep 100% of your rate.",
    rentBandCta: "See studio rental",
    fArea: "Neighbourhood",
    fTag: "Specialty",
    fLang: "Language",
    fAll: "All",
    fEmpty: "No trainers match these filters",
    fReset: "Clear filters",
    countAll: (studio: number, pub: number) => `${studio} at SculptClub · ${pub} elsewhere in Amsterdam`,
    date: (iso: string) => new Date(iso + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "Europe/Amsterdam" }),
  },
} as const;

export function directoryCopy(locale: Locale) {
  return COPY[locale];
}

export function profileMetadataFor(slug: string, locale: Locale) {
  const tr = getDirectoryTrainer(slug);
  if (!tr) return {};
  const c = COPY[locale];
  const area = tr.neighbourhood[locale];
  const specs = tr.specialties[locale].join(", ");
  const langs = languageNames(tr.languages, locale);
  const title = c.profileTitle(tr.name);
  const description = c.profileDescription(tr.name, area, specs, langs);
  const path = directoryPaths[locale].profile(slug);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      languages: { nl: directoryPaths.nl.profile(slug), en: directoryPaths.en.profile(slug) },
    },
    openGraph: { type: "profile" as const, url: path, title, description },
    twitter: { card: "summary_large_image" as const, title, description },
  };
}

const btnPrimary =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-base font-bold text-brand-foreground transition-colors hover:bg-brand-dark";
const btnOutline =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-base font-semibold text-foreground transition-colors hover:border-brand hover:text-brand";

function Photo({ tr, locale, priority, sizes }: { tr: DirectoryTrainer; locale: Locale; priority?: boolean; sizes: string }) {
  const c = COPY[locale];
  if (!tr.photo) {
    // Branded placeholder: never a scraped photo.
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-brand/10" aria-hidden="true">
        <span className="font-heading text-6xl font-bold text-foreground/40">{tr.name.charAt(0)}</span>
      </div>
    );
  }
  return (
    <Image
      src={tr.photo}
      alt={c.photoAlt(tr.name)}
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover object-top"
      style={tr.imagePosition ? { objectPosition: tr.imagePosition } : undefined}
    />
  );
}

function TrainerCard({ tr, locale, priority }: { tr: DirectoryTrainer; locale: Locale; priority: boolean }) {
  const c = COPY[locale];
  const href = directoryPaths[locale].profile(tr.slug);
  return (
    <li
      data-dir-card=""
      data-area={tr.source === "studio" ? "Jordaan" : tr.neighbourhood.en}
      data-tags={tagsFromText(tr.specialties.en).join("|")}
      data-langs={tr.languages.join("|")}
      className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      <Link href={href} aria-label={c.ariaProfile(tr.name)} className="relative block aspect-[4/5] w-full bg-secondary">
        <Photo tr={tr} locale={locale} priority={priority} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        {tr.source === "studio" && (
          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
            {c.studioBadge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h2 className="text-xl font-bold leading-tight">{tr.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{tr.specialties[locale].slice(0, 3).join(" · ")}</p>
        </div>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{tr.neighbourhood[locale]}</span>
          </li>
          <li className="flex items-center gap-2">
            <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{languageNames(tr.languages, locale)}</span>
          </li>
        </ul>
        <Link href={href} className={`${btnPrimary} mt-auto w-full`}>
          {c.viewProfile}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </li>
  );
}

function PublicCard({ tr, locale }: { tr: PublicTrainer; locale: Locale }) {
  const c = COPY[locale];
  const mail = `mailto:contact@sculptclub.nl?subject=${encodeURIComponent(c.editSubject(tr.name))}`;
  const ext = "inline-flex min-h-11 items-center gap-1.5 font-semibold text-foreground underline underline-offset-4";
  return (
    <li
      data-dir-card=""
      data-area={tr.area}
      data-tags={tr.tags.join("|")}
      data-langs={tr.languages.join("|")}
      className="flex flex-col rounded-2xl border border-border bg-card p-4"
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground/5 font-heading text-xl font-bold text-foreground/60"
          aria-hidden="true"
        >
          {tr.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold leading-tight">
            {tr.name}
            {tr.kind === "studio" && (
              <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.studioKind}</span>
            )}
          </h3>
          {tr.tags.length > 0 && (
            <p className="mt-1 text-sm text-muted-foreground">{tr.tags.map((t) => TAGS[t][locale]).join(" · ")}</p>
          )}
        </div>
      </div>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{areaLabel(tr.area, locale)}</span>
        </li>
        {tr.languages.length > 0 && (
          <li className="flex items-center gap-2">
            <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{languageNames(tr.languages, locale)}</span>
          </li>
        )}
        {tr.price && <li className="pl-6 font-medium text-foreground">{tr.price[locale]}</li>}
      </ul>
      <div className="mt-3 flex flex-wrap gap-x-5 text-sm">
        <a href={tr.website} target="_blank" rel="nofollow noopener noreferrer" className={ext}>
          {tr.websiteLabel}
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
        {tr.instagram && (
          <a href={tr.instagram} target="_blank" rel="nofollow noopener noreferrer" className={ext}>
            {c.instagram}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
      <p className="mt-auto border-t border-border pt-3 text-xs text-muted-foreground">
        {c.source}:{" "}
        <a href={tr.sourceUrl} target="_blank" rel="nofollow noopener noreferrer" className="underline underline-offset-2">
          {tr.websiteLabel}
        </a>
        , {c.checked(c.date(tr.checked))} ·{" "}
        <a href={mail} className="inline-flex min-h-11 items-center underline underline-offset-2">
          {c.edit}
        </a>
      </p>
    </li>
  );
}

function RentBand({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  return (
    <div className="mt-12 flex flex-col gap-4 rounded-2xl bg-foreground p-6 text-background sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <p className="text-xl font-bold">{c.rentTitle}</p>
        <p className="mt-1 text-background/80">{c.rentBody}</p>
      </div>
      <Link href={locale === "nl" ? "/nl/studio-huren" : "/en/studio-rental"} className={`${btnPrimary} shrink-0`}>
        {c.rentBandCta}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

function AddBand({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const paths = directoryPaths[locale];
  return (
    <Section bg="muted">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{c.addTitle}</h2>
        <p className="mt-3 text-muted-foreground">{c.addBody}</p>
        <div className="mt-6 flex justify-center">
          <Link href={paths.add} className={btnPrimary}>
            {c.addCta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          {c.rentLead}{" "}
          <Link href={locale === "nl" ? "/nl/studio-huren" : "/en/studio-rental"} className="inline-flex min-h-11 items-center font-semibold text-foreground underline underline-offset-4">
            {c.rentCta}
          </Link>
        </p>
      </div>
    </Section>
  );
}

export function TrainerDirectoryPage({ locale }: { locale: Locale }) {
  const c = COPY[locale];
  const paths = directoryPaths[locale];
  const list = directoryTrainers;
  const pub = publicTrainers;
  // Filter options: only values that actually occur, in a fixed order.
  const allAreas = new Set<string>([...(list.length ? ["Jordaan"] : []), ...pub.map((p) => p.area)]);
  const areaOpts = AREAS.filter((a) => allAreas.has(a)).map((a) => ({ value: a, label: areaLabel(a, locale) }));
  const allTags = new Set<string>([...list.flatMap((t) => tagsFromText(t.specialties.en)), ...pub.flatMap((p) => p.tags)]);
  const tagOpts = Object.keys(TAGS).filter((t) => allTags.has(t)).map((t) => ({ value: t, label: TAGS[t][locale] }));
  const langCount = new Map<string, number>();
  for (const l of [...list.flatMap((t) => t.languages), ...pub.flatMap((p) => p.languages)]) langCount.set(l, (langCount.get(l) ?? 0) + 1);
  const langOpts = [...langCount.entries()]
    .filter(([, n]) => n >= 2)
    .sort((a, b) => b[1] - a[1])
    .map(([l]) => ({ value: l, label: languageNames([l], locale) }));
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: c.listName,
    itemListElement: list.map((tr, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: tr.name,
        jobTitle: c.jobTitle,
        url: `${siteConfig.url}${paths.profile(tr.slug)}`,
        ...(tr.photo ? { image: `${siteConfig.url}${tr.photo}` } : {}),
      },
    })),
  };
  return (
    <PageLayout>
      <BreadcrumbJsonLd items={[{ name: c.home, url: locale === "nl" ? "/" : "/en" }, { name: c.listTitle, url: paths.list }]} />
      {list.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      )}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-balance sm:text-5xl">{c.listTitle}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{c.listSub}</p>
          <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
        </div>
        {list.length > 0 ? (
          <>
            {pub.length > 0 && (
              <DirectoryFilter
                areas={areaOpts}
                tags={tagOpts}
                langs={langOpts}
                labels={{ area: c.fArea, tag: c.fTag, lang: c.fLang, all: c.fAll, one: c.count(1), many: c.count(999).replace("999", "{n}"), empty: c.fEmpty, reset: c.fReset }}
              />
            )}
            <div data-dir-group="">
              <h2 className="mt-10 text-2xl font-bold sm:text-3xl">{c.studioHeading}</h2>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">
                {pub.length > 0 ? c.countAll(list.length, pub.length) : c.count(list.length)}
              </p>
              <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((tr, i) => (
                  <TrainerCard key={tr.slug} tr={tr} locale={locale} priority={i < 2} />
                ))}
              </ul>
            </div>
            <RentBand locale={locale} />
            {pub.length > 0 && (
              <div data-dir-group="">
                <h2 className="mt-12 text-2xl font-bold sm:text-3xl">{c.publicHeading}</h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">{c.publicIntro}</p>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {pub.map((tr) => (
                    <PublicCard key={tr.id} tr={tr} locale={locale} />
                  ))}
                </ul>
                <p className="mt-6 max-w-3xl text-xs text-muted-foreground">
                  {c.privacy}{" "}
                  <Link href={paths.add} className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2">
                    {c.claim}
                  </Link>
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-card p-8 text-center">
            <h2 className="text-xl font-bold">{c.emptyTitle}</h2>
            <p className="mt-2 text-muted-foreground">{c.emptyBody}</p>
            <div className="mt-5 flex justify-center">
              <Link href={paths.add} className={btnPrimary}>
                {c.addCta}
              </Link>
            </div>
          </div>
        )}
      </Section>
      <AddBand locale={locale} />
    </PageLayout>
  );
}

export function TrainerProfilePage({ locale, slug }: { locale: Locale; slug: string }) {
  const tr = getDirectoryTrainer(slug);
  if (!tr) return null;
  const c = COPY[locale];
  const paths = directoryPaths[locale];
  const area = tr.neighbourhood[locale];
  const sameAs = [tr.instagram, tr.website?.url].filter((u): u is string => Boolean(u));
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: tr.name,
    jobTitle: c.jobTitle,
    url: `${siteConfig.url}${paths.profile(tr.slug)}`,
    ...(tr.bio ? { description: tr.bio[locale] } : {}),
    ...(tr.photo ? { image: `${siteConfig.url}${tr.photo}` } : {}),
    knowsLanguage: tr.languages,
    knowsAbout: tr.specialties[locale],
    areaServed: { "@type": "Place", name: `${area}, Amsterdam` },
    ...(sameAs.length ? { sameAs } : {}),
    ...(tr.source === "studio"
      ? { worksFor: { "@type": "LocalBusiness", name: siteConfig.name, url: siteConfig.url } }
      : {}),
  };
  const booking = tr.booking;
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: c.home, url: locale === "nl" ? "/" : "/en" },
          { name: c.listTitle, url: paths.list },
          { name: tr.name, url: paths.profile(tr.slug) },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <Section>
        <div className="mx-auto max-w-4xl">
          <Link href={paths.list} className="mb-6 inline-flex min-h-11 items-center gap-1.5 py-2 text-sm text-muted-foreground transition-colors hover:text-brand">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {c.back}
          </Link>
          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-secondary md:max-w-none">
              <Photo tr={tr} locale={locale} priority sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight text-balance sm:text-4xl">{c.profileH1(tr.name)}</h1>
              {tr.credentials && <p className="mt-2 text-muted-foreground">{tr.credentials[locale]}</p>}
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{c.specialties}</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {tr.specialties[locale].map((s) => (
                      <span key={s} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="flex gap-8">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{c.area}</dt>
                    <dd className="mt-1 flex items-center gap-2">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {area}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{c.languages}</dt>
                    <dd className="mt-1 flex items-center gap-2">
                      <Globe className="h-4 w-4" aria-hidden="true" />
                      {languageNames(tr.languages, locale)}
                    </dd>
                  </div>
                </div>
              </dl>
              {tr.bio && <p className="mt-6 leading-relaxed text-muted-foreground">{tr.bio[locale]}</p>}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {booking &&
                  (booking.external ? (
                    <a href={booking.href[locale]} target="_blank" rel="noopener noreferrer nofollow" className={btnPrimary}>
                      {c.bookExternal}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link href={booking.href[locale]} className={btnPrimary}>
                      {c.bookStudio}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ))}
                {tr.website && (
                  <a href={tr.website.url} target="_blank" rel="noopener noreferrer" className={btnOutline}>
                    {c.website}
                  </a>
                )}
                {tr.instagram && (
                  <a href={tr.instagram} target="_blank" rel="noopener noreferrer" className={btnOutline}>
                    {c.instagram}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <AddBand locale={locale} />
    </PageLayout>
  );
}
