import { siteConfig } from "@/config/site";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthClub", "SportsActivityLocation"],
    name: siteConfig.name,
    description: siteConfig.description.en,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.zip,
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
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
    },
    priceRange: "€€",
    paymentAccepted: ["Credit Card", "Apple Pay", "Google Pay"],
    currenciesAccepted: "EUR",
    areaServed: [
      { "@type": "City", name: "Amsterdam" },
      { "@type": "AdministrativeArea", name: "Noord-Holland" },
    ],
    image: `${siteConfig.url}/images/og-default.jpg`,
    sameAs: [siteConfig.instagram, siteConfig.tiktok],
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    sameAs: [siteConfig.instagram, siteConfig.tiktok],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      availableLanguage: ["Dutch", "English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
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
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${siteConfig.url}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
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
