import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeaderSpacer from "@/components/layout/HeaderSpacer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Preloader from "@/components/ui/Preloader";
import ChatBot from "@/components/ChatBot";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.divineesoft.com"),
  title: {
    default: "DivineeSoft Technology | Digital Product Agency",
    template: "%s | DivineeSoft Technology",
  },
  description:
    "DivineeSoft Technology builds scalable web platforms, mobile apps, custom AI solutions, and data-driven digital marketing to accelerate your growth.",
  keywords: [
    "digital agency",
    "web development",
    "mobile app development",
    "AI solutions",
    "SEO services",
    "cloud infrastructure",
    "SaaS product development",
  ],
  authors: [{ name: "DivineeSoft Technology" }],
  creator: "DivineeSoft Technology",
  publisher: "DivineeSoft Technology",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "DivineeSoft Technology | Digital Product Agency",
    description:
      "Transforming real problems into digital reality with custom web, mobile, AI, and cloud solutions.",
    url: "https://www.divineesoft.com",
    siteName: "DivineeSoft Technology",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "DivineeSoft Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DivineeSoft Technology | Digital Product Agency",
    description:
      "Scale your business with expert web development, mobile apps, AI solutions, and digital growth strategies.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
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
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased flex flex-col min-h-screen w-screen overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <ScrollToTop />
          <Header />

          {/* Header Spacer (Conditional) */}
          <HeaderSpacer />

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
