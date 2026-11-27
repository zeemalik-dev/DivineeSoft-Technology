import { Metadata } from "next";
import FAQsClient from "./FAQsClient";
import { faqs, services } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQs",
  description:
    "Find answers to frequently asked questions about DivineeSoft Technologies' web development, mobile apps, AI engineering, and pricing.",
  path: "/faqs",
  keywords:
    "FAQs, DivineeSoft Technologies questions, web development FAQs, app development FAQs, AI services answers",
});

export default function FAQsPage() {
  const allFaqs = [
    ...faqs,
    ...services.flatMap((s) => s.faqs || []),
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQsClient />
    </>
  );
}
