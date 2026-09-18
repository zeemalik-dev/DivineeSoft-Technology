import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DivineeSoft Technology',
    short_name: 'DivineeSoft',
    description: 'Custom web & mobile development, AI solutions, SEO, and cloud infrastructure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#094bf0',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
