import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "blogs.divineesoft.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/:path*",
        destination: "/services/:path*",
        permanent: true,
      },
      {
        source: "/services/search-engine-optimization",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/services/ai-development-services",
        destination: "/services/ai-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
