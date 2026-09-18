import { Metadata } from 'next';
import FAQsClient from './FAQsClient';

export const metadata: Metadata = {
  title: "FAQs | DivineeSoft Technology",
  description: "Find answers to frequently asked questions about DivineeSoft Technology's web development, app engineering, AI, and pricing.",
  keywords: "FAQs, DivineeSoft Technology questions, web development FAQs, app development FAQs, AI services answers, digital marketing questions, business solutions",
};

export default function FAQsPage() {
  return <FAQsClient />;
}
