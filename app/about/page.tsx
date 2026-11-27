import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { ABOUT_FAQS, FOUNDED_YEAR, SITE_URL } from "@/lib/data/about";

const TITLE = "About DivineeSoft Technologies | Product Studio in Lahore, Pakistan";
const DESCRIPTION =
  "DivineeSoft Technologies is a Lahore-based product studio building and running mobile apps, SaaS platforms and AI systems for clients in the US, UK and MENA. Direct engineer access, weekly demos, 100% code ownership.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "DivineeSoft Technologies",
    "software company Lahore",
    "mobile app development Pakistan",
    "SaaS development company",
    "AI development services",
    "offshore development team Pakistan",
    "BarberzHub",
    "Gym Pro",
    "Gym App"
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "DivineeSoft Technologies",
    images: [{ url: `${SITE_URL}/about/office.png`, width: 1200, height: 900, alt: "DivineeSoft engineering studio in Lahore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/about/office.png`],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "DivineeSoft Technologies",
      url: SITE_URL,
      foundingDate: String(FOUNDED_YEAR),
      description: DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      founder: { "@type": "Person", name: "Zeeshan Malik", jobTitle: "Chief Executive Officer" },
      areaServed: ["US", "GB", "PK", "AE"],
      sameAs: [
        "https://www.linkedin.com/company/divineesoft-technologies/",
        "https://pin.it/2d1I6sTmY",
      ],
    },
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: TITLE,
      description: DESCRIPTION,
      about: { "@id": `${SITE_URL}/#organization` },
      primaryImageOfPage: `${SITE_URL}/about/office.png`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: ABOUT_FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}