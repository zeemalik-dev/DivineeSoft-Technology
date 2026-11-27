import { Metadata } from "next";
import WorkClient from "./WorkClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Work",
  description:
    "Case studies from DivineeSoft Technologies — mobile apps, SaaS platforms, AI tools, and SEO campaigns for clients worldwide.",
  path: "/work",
  keywords:
    "case studies, mobile apps, SaaS platforms, AI engineering, DivineeSoft Technologies",
});

export default function WorkPage() {
  return <WorkClient />;
}
