import { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore DivineeSoft Technologies' core engineering services: Mobile Apps, Web & SaaS Platforms, AI & Automation, and Cloud & DevOps.",
  path: "/services",
  keywords:
    "software engineering services, mobile app development, SaaS development, AI solutions, cloud infrastructure",
});

export default function ServicesPage() {
  return <ServicesClient />;
}
