import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Globe, MapPin } from "lucide-react";
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
    <li className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <Link href={href} aria-label={c.ariaProfile(tr.name)} className="relative block aspect-[4/5] w-full bg-secondary">
        <Photo tr={tr} locale={locale} priority={priority} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
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
            <p className="mt-10 text-sm font-semibold text-muted-foreground">{c.count(list.length)}</p>
            <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((tr, i) => (
                <TrainerCard key={tr.slug} tr={tr} locale={locale} priority={i < 2} />
              ))}
            </ul>
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
