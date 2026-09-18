import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Services | DivineeSoft Technology",
  description: "Explore DivineeSoft Technology's services, including custom web development, mobile apps, AI solutions, SEO, and cloud infrastructure.",
  keywords: "digital agency services, web development, mobile app solutions, AI services, digital marketing strategies, business growth, innovative solutions",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
