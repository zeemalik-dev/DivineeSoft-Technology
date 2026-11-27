import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeaderSpacer from "@/components/layout/HeaderSpacer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ChatBot from "@/components/ChatBot";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.divineesoft.com"),
  title: {
    default: "DivineeSoft Technologies | Product & Software Partner",
    template: "%s | DivineeSoft Technologies",
  },
  description:
    "We build the product. Then we run it with you. DivineeSoft Technologies — mobile apps, SaaS platforms, AI agents, and cloud infrastructure. 14 live products, 40+ countries.",
  keywords: [
    "product development",
    "mobile app development",
    "SaaS platform",
    "AI solutions",
    "Flutter development",
    "Next.js development",
    "cloud infrastructure",
    "technical partner",
    "Lahore Pakistan",
    "DivineeSoft Technologies",
  ],
  authors: [{ name: "DivineeSoft Technologies" }],
  creator: "DivineeSoft Technologies",
  publisher: "DivineeSoft Technologies",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "DivineeSoft Technologies | Product & Software Partner",
    description:
      "We build the product. Then we run it with you. 14 live products, 40+ countries, 5+ years.",
    url: "https://www.divineesoft.com",
    siteName: "DivineeSoft Technologies",
    images: [
      {
        url: "/icons/icon-512x512.png",
        width: 1200,
        height: 630,
        alt: "DivineeSoft Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DivineeSoft Technologies | Product & Software Partner",
    description:
      "We build real platforms — then run them with you. Mobile apps, SaaS, AI, Cloud.",
    images: ["/icons/icon-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-6FVL9X6RKP"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6FVL9X6RKP');
            `,
          }}
        />
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DivineeSoft Technologies",
              url: "https://www.divineesoft.com",
              logo: "https://www.divineesoft.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-314-6256754",
                contactType: "customer support",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
              sameAs: [
                "https://www.linkedin.com/company/divineesoft-technologies/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased flex flex-col min-h-screen w-screen overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />
          <Header />
          <HeaderSpacer />
          <main className="flex-grow">{children}</main>
          <Footer />
          {/* Floating widgets */}
          <WhatsAppFloat />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
