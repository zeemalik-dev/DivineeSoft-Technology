import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Us | DivineeSoft Technology",
  description: "Get in touch with DivineeSoft Technology to discuss your web, mobile, AI, or marketing project. Request a free quote today.",
  keywords: "contact DivineeSoft Technology, digital agency contact, web development inquiry, app development contact, AI solutions inquiry, marketing services contact",
};

export default function ContactPage() {
  return <ContactClient />;
}
