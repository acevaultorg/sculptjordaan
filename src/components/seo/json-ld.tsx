import { siteConfig } from "@/config/site";

// Stable @id refs so other schemas on the page can reference this entity
// without redeclaring fields (@id linking — Aleyda Solis LLM-citation chr #3).
const ORG_ID = `${siteConfig.url}#organization`;
const PLACE_ID = `${siteConfig.url}#localbusiness`;
const WEBSITE_ID = `${siteConfig.url}#website`;

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/images/logo.png`,
          width: 512,
          height: 512,
        },
        sameAs: [siteConfig.instagram, siteConfig.tiktok],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          contactType: "customer service",
          availableLanguage: ["Dutch", "English"],
          areaServed: "NL",
        },
        knowsAbout: [
          "Personal Training",
          "Open Gym",
          "Studio Rental",
          "Strength Training",
          "Boutique Fitness",
          "Amsterdam Jordaan",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": ORG_ID },
        inLanguage: ["nl-NL", "en"],
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${siteConfig.url}/nl/blog?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        // Speakable: voice assistants (Google Assistant, Alexa) and AI Overview
        // spoken-answer extraction prefer pages with explicit speakable hints.
        // Targets H1, H2, and the first paragraph of the main content.
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "main p:first-of-type"],
        },
      },
      {
        "@type": ["LocalBusiness", "HealthClub", "SportsActivityLocation"],
        "@id": PLACE_ID,
        name: siteConfig.name,
        description: siteConfig.description.en,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        parentOrganization: { "@id": ORG_ID },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          postalCode: siteConfig.address.zip,
          addressCountry: "NL",
          addressRegion: "Noord-Holland",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.lat,
          longitude: siteConfig.geo.lng,
        },
        hasMap: siteConfig.google,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "06:30",
          closes: "22:00",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.rating.value,
          reviewCount: siteConfig.rating.count,
          bestRating: 5,
          worstRating: 1,
        },
        priceRange: "€€",
        paymentAccepted: ["Credit Card", "Apple Pay", "Google Pay"],
        currenciesAccepted: "EUR",
        areaServed: [
          { "@type": "City", name: "Amsterdam" },
          { "@type": "AdministrativeArea", name: "Noord-Holland" },
        ],
        image: [
          `${siteConfig.url}/images/og-default.jpg`,
          `${siteConfig.url}/images/logo-sculptclub.png`,
        ],
        logo: { "@id": `${siteConfig.url}#logo` },
        sameAs: [siteConfig.instagram, siteConfig.tiktok, siteConfig.google],
        foundingDate: siteConfig.founded,
        slogan: "Boutique personal training studio in Amsterdam Jordaan",
        knowsLanguage: ["nl", "en"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SculptClub Services",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Personal Training",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Personal Training Session" },
                  price: 45,
                  priceCurrency: "EUR",
                  description: "1-on-1 personal training, trainers set own rates from €45. Free intro session.",
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Open Gym",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instapplan — 4 sessions/4 weeks" }, price: 29, priceCurrency: "EUR" },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Populair — 8 sessions/4 weeks" }, price: 49, priceCurrency: "EUR" },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intensief — 12 sessions/4 weeks" }, price: 69, priceCurrency: "EUR" },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Onbeperkt — unlimited/4 weeks" }, price: 89, priceCurrency: "EUR" },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Studio Rental",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Half Studio — 60 min" }, price: 12, priceCurrency: "EUR" },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Half Studio — 90 min" }, price: 17, priceCurrency: "EUR" },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Studio — 60 min" }, price: 17, priceCurrency: "EUR" },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Studio — 90 min" }, price: 24, priceCurrency: "EUR" },
              ],
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// OrganizationJsonLd is now a no-op — its content folded into the @graph in
// LocalBusinessJsonLd above. Kept exported so existing imports don't break.
// Will be removed in a follow-up after grep confirms zero non-layout callers.
export function OrganizationJsonLd() {
  return null;
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ReviewsJsonLd({
  reviews,
}: {
  reviews: {
    name: string;
    text: string;
    rating: number;
    date: string;
  }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonJsonLd({
  name,
  description,
  image,
  url,
  jobTitle,
  languages,
  sameAs,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
  jobTitle: string;
  languages: string[];
  sameAs?: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    image: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
    url: url.startsWith("http") ? url : `${siteConfig.url}${url}`,
    worksFor: {
      "@type": ["LocalBusiness", "HealthClub"],
      name: siteConfig.name,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        postalCode: siteConfig.address.zip,
        addressCountry: "NL",
      },
    },
    knowsLanguage: languages.map((l) =>
      l === "NL" ? "Dutch" : l === "EN" ? "English" : l === "PT" ? "Portuguese" : l
    ),
    ...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  wordCount,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  wordCount?: number;
  image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${siteConfig.url}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: url.startsWith("/en") ? "en-US" : "nl-NL",
    ...(wordCount ? { wordCount } : {}),
    ...(image ? { image: image.startsWith("http") ? image : `${siteConfig.url}${image}` } : {}),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}${url}`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "article p"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OfferCatalogJsonLd({
  catalogName,
  description,
  url,
  recurring,
  offers,
}: {
  catalogName: string;
  description: string;
  url: string;
  recurring?: boolean;
  offers: {
    name: string;
    description: string;
    price: number;
    priceCurrency?: string;
    url?: string;
  }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${siteConfig.url}${url}#${catalogName.toLowerCase().replace(/\s+/g, "-")}`,
    name: catalogName,
    description,
    url: `${siteConfig.url}${url}`,
    itemListElement: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: offer.priceCurrency || "EUR",
      ...(recurring
        ? { eligibleDuration: { "@type": "QuantitativeValue", value: 4, unitCode: "WEE" } }
        : {}),
      ...(offer.url ? { url: `${siteConfig.url}${offer.url}` } : {}),
      seller: {
        "@type": "LocalBusiness",
        name: siteConfig.name,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  priceRange,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  priceRange: string;
  areaServed?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        postalCode: siteConfig.address.zip,
        addressCountry: "NL",
      },
    },
    areaServed: {
      "@type": "City",
      name: areaServed || "Amsterdam",
    },
    priceRange,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
