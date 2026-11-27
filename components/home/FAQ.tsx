"use client";

import FAQSection from "@/components/ui/FAQSection";

const HOME_FAQS = [
  {
    question: "Who owns the source code and intellectual property?",
    answer:
      "You do — 100% from day one. All repositories, cloud accounts, App Store accounts, domains, and databases belong to your company with zero vendor lock-in.",
  },
  {
    question: "How long does it take to build an MVP or mobile app?",
    answer:
      "A focused MVP typically ships in 6–10 weeks, with weekly staging builds so you can test progress at every step. Larger marketplaces or SaaS platforms take 10–16 weeks.",
  },
  {
    question: "What does a typical project cost?",
    answer:
      "Projects depend on scope, platforms (iOS, Android, Web), and integrations like payments or AI. Use our 60-second Project Estimator (/estimate) for an instant range and timeline.",
  },
  {
    question: "Do you provide support and maintenance after launch?",
    answer:
      "Yes. Unlike freelancers who disappear after handover, we offer 24/7 uptime monitoring, OS/security updates, and dedicated product iteration — just like our 4+ year partnership with BarberzLink LLC.",
  },
  {
    question: "Can you work in US, UK, or Middle East time zones?",
    answer:
      "Yes. Our Lahore engineering team works with overlapping hours for US, UK, and MENA clients, with weekly live demos, shared project boards, and direct Slack/WhatsApp access.",
  },
  {
    question: "Do you sign NDAs before we share our idea?",
    answer:
      "Always. We sign a mutual NDA on request before discovery calls or reviewing any product brief.",
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((faq) => ({
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
      <FAQSection
        title="Frequently Asked"
        titleHighlight="Questions"
        description="Clear answers on code ownership, timelines, pricing, and how we partner with you long-term."
        items={HOME_FAQS}
        showLink={true}
      />
    </>
  );
}
