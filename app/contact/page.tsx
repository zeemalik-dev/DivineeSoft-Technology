import { Metadata } from "next";
import ContactClient from "./ContactClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with DivineeSoft Technologies to discuss your web, mobile, AI, or SaaS project. Reply within 24 hours.",
  path: "/contact",
  keywords:
    "contact DivineeSoft Technologies, software partner inquiry, web development, app development, AI solutions",
});

export default function ContactPage() {
  return <ContactClient />;
}
