import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DrJacket — Dé (k)Leermaker voor Uw beste Leren Jas | Amsterdam",
    template: "%s | DrJacket Amsterdam",
  },
  description:
    "Premium leren jas reparatie, restyling & maatwerk in Amsterdam. 35+ jaar vakmanschap door Maurice Eduard Verlinden. Rits vervanging, scheurherstel, redesign & custom couture.",
  keywords: [
    "leren jas reparatie Amsterdam",
    "leather jacket repair",
    "leer restyling",
    "maatwerk leren kleding",
    "DrJacket",
    "Maurice Verlinden",
    "leerbewerking",
    "custom leather jacket",
    "Amsterdam kleermaker leer",
    "rits vervanging leren jas",
  ],
  authors: [{ name: "Maurice Eduard Verlinden" }],
  creator: "DrJacket by Maurice Eduard Verlinden",
  metadataBase: new URL("https://www.drjacket.nl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    alternateLocale: "en_US",
    url: "https://www.drjacket.nl",
    title: "DrJacket — Premium Leren Jas Reparatie & Restyling Amsterdam",
    description:
      "35+ jaar vakmanschap in leren jassen. Reparatie, restyling, redesign & custom couture door meester-leerbewerker Maurice Verlinden.",
    siteName: "DrJacket",
    images: [
      {
        url: "/images/hero-atelier.png",
        width: 1200,
        height: 630,
        alt: "DrJacket Atelier Amsterdam — Maurice Verlinden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DrJacket — Premium Leren Jas Reparatie Amsterdam",
    description:
      "35+ jaar vakmanschap. Reparatie, restyling & custom couture voor leren jassen.",
    images: ["/images/hero-atelier.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.drjacket.nl",
  name: "DrJacket by Maurice Eduard Verlinden",
  alternateName: "DrJacket",
  description:
    "Premium leren jas reparatie, restyling, redesign en maatwerk couture in Amsterdam. 35+ jaar vakmanschap.",
  url: "https://www.drjacket.nl",
  telephone: "+31633588993",
  email: "info@drjacket.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Overtoom 336",
    addressLocality: "Amsterdam",
    postalCode: "1054 JH",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.3602,
    longitude: 4.8668,
  },
  image: "https://www.drjacket.nl/images/hero-atelier.png",
  priceRange: "€€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
    bestRating: "5",
  },
  founder: {
    "@type": "Person",
    name: "Maurice Eduard Verlinden",
    jobTitle: "Master Leather Craftsman",
  },
  foundingDate: "1990",
  areaServed: {
    "@type": "City",
    name: "Amsterdam",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leather Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rits Vervanging",
          description: "Professionele ritsvervanging met YKK/Riri ritsen",
        },
        price: "95",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Onzichtbare Scheurherstel",
          description: "Onzichtbare reparatie van scheuren en beschadigingen",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "149",
          priceCurrency: "EUR",
          minPrice: "149",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Moderne Fit Restyling",
          description: "Moderne pasvorm aanpassing van uw leren jas",
        },
        price: "295",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Volledige Revival & Redesign",
          description: "Complete transformatie en redesign van uw leren jas",
        },
        price: "495",
        priceCurrency: "EUR",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
