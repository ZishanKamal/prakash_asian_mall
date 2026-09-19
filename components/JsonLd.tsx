import { siteConfig } from "@/lib/site";

/** Organisation + ShoppingCenter structured data for rich search results. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ShoppingCenter",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/brand/cover.png`,
    logo: `${siteConfig.url}/brand/cover.png`,
    slogan: siteConfig.tagline,
    telephone: siteConfig.contact.phones[0],
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.street,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.lat,
      longitude: siteConfig.location.lng,
    },
    areaServed: "Gulbarga (Kalaburagi), Karnataka",
    knowsAbout: [
      "Commercial real estate",
      "Retail leasing",
      "Shopping mall shops",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Reusable breadcrumb structured data for inner pages. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
