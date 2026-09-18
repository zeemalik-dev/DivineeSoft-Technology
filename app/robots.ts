import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.divineesoft.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cgi-bin/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
