import { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
  title: "Case Studies | DivineeSoft Technology",
  description: "Explore case studies and success stories from DivineeSoft Technology across mobile apps, web platforms, and AI engineering.",
  keywords: "case studies, success stories, DivineeSoft Technology projects, web development results, app development case studies, AI solutions, marketing success",
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
