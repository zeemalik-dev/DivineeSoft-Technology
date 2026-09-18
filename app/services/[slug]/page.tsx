import { Metadata } from 'next';
import { services } from '@/lib/data';
import ServiceDetailClient from './ServiceDetailClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: 'Service Not Found | DivineeSoft',
      description: 'The requested service could not be found.',
    };
  }

  const title = service.seo?.title || `${service.title} | DivineeSoft`;
  const description = service.seo?.description || service.desc;

  return {
    title,
    description,
    keywords: service.seo?.keywords,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  return <ServiceDetailClient params={params} />;
}
