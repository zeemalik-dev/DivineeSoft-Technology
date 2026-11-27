import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.divineesoft.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cgi-bin/", "/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "anthropic-ai",
        ],
        allow: "/",
        disallow: ["/cgi-bin/", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
