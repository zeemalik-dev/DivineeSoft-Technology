import HeroSection2 from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import CalInline from "@/components/CalInline";
import { Metadata } from "next";
import ServicesTicker from "@/components/home/ServicesTicker";
import PartnershipSection from "@/components/home/PartnershipSection";
import BlogPreview from "@/components/home/BlogPreview";
import InternationalPartners from "@/components/home/InternationalPartners";
// import WeSolveIt from "@/components/home/WeSolveIt";
import BusinessChallenges from "@/components/home/BusinessChallenges";

export const metadata: Metadata = {
  title: "DivineeSoft Technology | Web, Mobile & AI Solutions",
  description:
    "Grow your business with DivineeSoft Technology. Expert web, mobile, AI, and marketing solutions built for real results and long-term scale.",
  keywords:
    "digital agency, web development, app development, AI solutions, marketing strategies, business growth",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection2 />
      <ServicesTicker />
      <About />
      <Services />
      <Stats />
      {/* <WeSolveIt /> */}
      <InternationalPartners />
      <BusinessChallenges />
      <PartnershipSection />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <CalInline />
    </div>
  );
}
