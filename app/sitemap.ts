import type { MetadataRoute } from "next";
import { services } from "@/lib/data";
import { projects } from "@/lib/data/projects";
import { industries } from "@/lib/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.divineesoft.com";
  const currentDate = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: currentDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/products`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/work`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/partnership`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/estimate`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: "daily", priority: 0.75 },
    { url: `${baseUrl}/faqs`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/case-studies`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const workPages: MetadataRoute.Sitemap = projects
    .filter((p) => p.status !== "draft")
    .map((project) => ({
      url: `${baseUrl}/work/${project.meta.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    }));

  const caseStudyPages: MetadataRoute.Sitemap = projects
    .filter((p) => p.status !== "draft")
    .map((project) => ({
      url: `${baseUrl}/case-studies/${project.meta.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const industryPages: MetadataRoute.Sitemap = industries.map((ind) => ({
    url: `${baseUrl}/for/${ind.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...workPages, ...caseStudyPages, ...industryPages];
}
