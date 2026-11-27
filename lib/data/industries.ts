// ============================================================
// src/data/industries.ts
// Industry landing page data for /for/:industry
// ============================================================

export interface IndustryPage {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  painPoints: string[];
  features: string[];
  caseStudySlug: string; // links to /work/:slug
  estimatorPreset: {
    buildType: string;
    features: string[];
  };
}

export const industries: IndustryPage[] = [
  {
    slug: "salons-and-barbers",
    name: "Salons & Barbers",
    headline: "The digital backbone for barbers, salons & beauty pros",
    subheadline:
      "From booth rentals and job boards to state licensing lookup and event hosting — we've shipped two live nationwide platforms for this industry.",
    painPoints: [
      "No industry-specific job board for licensed barbers",
      "Shop owners spend hours chasing unverified freelancers",
      "State licensing rules are scattered and hard to track",
      "No digital portfolio tool built for barber & beauty work",
    ],
    features: [
      "Job board with licensing verification",
      "Booth rental marketplace",
      "Portfolio & video showcase",
      "Event & trade show hub",
      "Subscription billing (Stripe)",
      "Direct messaging with SMS alerts",
      "State licensing directory (all 50 states)",
    ],
    caseStudySlug: "barberz-link",
    estimatorPreset: {
      buildType: "marketplace",
      features: ["auth", "payments", "chat", "admin", "subscriptions", "notifications"],
    },
  },
  {
    slug: "gyms",
    name: "Gyms & Fitness",
    headline: "Gym management software that actually runs itself",
    subheadline:
      "Fast member check-ins, fee payments, daily cash closing, attendance tracking, and automated WhatsApp reminders — running live at gym.divineesoft.com.",
    painPoints: [
      "Paper registers slow down front-desk check-ins during peak hours",
      "Manual fee tracking leads to missed renewals and revenue leaks",
      "No daily cash closing or real-time attendance & revenue reports",
      "Staff spend hours messaging members manually for overdue fees",
    ],
    features: [
      "Fast member check-in desk",
      "New member onboarding & plans",
      "Fee payments & daily cash closing",
      "Attendance tracking & history",
      "Automated WhatsApp fee reminders",
      "Real-time revenue & growth reports",
      "Mobile app + web SaaS dashboard",
    ],
    caseStudySlug: "gym-pro",
    estimatorPreset: {
      buildType: "saas",
      features: ["auth", "payments", "admin", "subscriptions", "notifications"],
    },
  },
  {
    slug: "home-services",
    name: "Home Services",
    headline: "On-demand home services — built and proven in the market",
    subheadline:
      "Sariea earned a 5.0/5 App Store rating connecting homeowners with vetted service pros across Pakistan.",
    painPoints: [
      "Customers can't find vetted, reliable service providers",
      "Service pros have no digital presence or booking system",
      "Pricing is opaque and inconsistent",
      "No real-time tracking or status updates",
    ],
    features: [
      "Service provider onboarding & vetting",
      "Real-time booking & scheduling",
      "Transparent pricing engine",
      "GPS tracking for service visits",
      "In-app payments & invoicing",
      "Rating & review system",
      "Admin dashboard for ops team",
    ],
    caseStudySlug: "sariea",
    estimatorPreset: {
      buildType: "marketplace",
      features: ["auth", "payments", "maps", "chat", "notifications", "admin"],
    },
  },
  {
    slug: "startups",
    name: "Startups & MVPs",
    headline: "From validated idea to App Store in 10 weeks",
    subheadline:
      "We've taken 14+ products from whiteboard to live production. We become your technical co-founder team, not a vendor.",
    painPoints: [
      "Founding team has no in-house engineering",
      "Freelancers build the MVP, then disappear",
      "No clear path from MVP to scalable architecture",
      "Investors want traction, not just a landing page",
    ],
    features: [
      "Product strategy & scoping",
      "Design sprint (1 week to clickable prototype)",
      "Lean MVP (6–10 week delivery)",
      "App Store submission & launch",
      "Post-launch iteration & growth",
      "Shared board & weekly demos",
      "Long-term partnership option",
    ],
    caseStudySlug: "tegal-app",
    estimatorPreset: {
      buildType: "mobile-app",
      features: ["auth", "admin", "notifications"],
    },
  },
];
