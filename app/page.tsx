import Hero from "@/components/home/Hero";
import LiveProductsStrip from "@/components/home/LiveProductsStrip";
import IndustriesSection from "@/components/home/IndustriesSection";
import SelectedWork from "@/components/home/SelectedWork";
import HowWeWork from "@/components/home/HowWeWork";
import PartnershipSection from "@/components/home/PartnershipSection";
import ServicesSection from "@/components/home/Services";
import TechTrust from "@/components/home/TechTrust";
import FAQ from "@/components/home/FAQ";
import BlogPreview from "@/components/home/BlogPreview";
import CalInline from "@/components/CalInline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DivineeSoft Technologies | Product & Software Partner",
  description:
    "We build the product. Then we run it with you. DivineeSoft Technologies — mobile apps, SaaS platforms, AI agents, and cloud infrastructure for founders and businesses in the US, UK, Pakistan, and the Middle East.",
  keywords:
    "product development, mobile app development, SaaS development, AI solutions, software partner, Flutter, Next.js, Lahore Pakistan",
  openGraph: {
    title: "DivineeSoft Technologies | Product & Software Partner",
    description:
      "14 live products shipped. 40+ countries reached. We build real platforms — then run them with you.",
    url: "https://www.divineesoft.com",
    siteName: "DivineeSoft Technologies",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <LiveProductsStrip />
      <IndustriesSection />
      <SelectedWork />
      <HowWeWork />
      <ServicesSection />
      <PartnershipSection />
      <TechTrust />
      <FAQ />
      <BlogPreview />
      <CalInline />
    </div>
  );
}
