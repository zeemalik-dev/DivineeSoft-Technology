import { Metadata } from 'next';
import { projects } from '@/lib/data/projects';
import CaseStudyDetailClient from './CaseStudyDetailClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.meta?.slug || project.id,
  }));
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.meta.slug === slug || p.id === slug);

  if (!project) {
    return {
      title: 'Project Not Found | DivineeSoft',
      description: 'The requested case study could not be found.',
    };
  }

  const title = project.seo?.title || `${project.meta.title} Case Study | DivineeSoft`;
  const description =
    project.seo?.description ||
    (project.overview.summary.length > 155
      ? `${project.overview.summary.slice(0, 152)}...`
      : project.overview.summary);

  return {
    title,
    description,
    keywords: project.seo?.keywords,
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  return <CaseStudyDetailClient params={params} />;
}
