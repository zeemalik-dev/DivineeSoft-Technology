import type { Metadata } from "next";

const SITE_URL = "https://www.divineesoft.com";
const SITE_NAME = "DivineeSoft Technologies";
const DEFAULT_IMAGE = "/icons/icon-512x512.png";

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  image = DEFAULT_IMAGE,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string | string[];
  image?: string;
}): Metadata {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}
