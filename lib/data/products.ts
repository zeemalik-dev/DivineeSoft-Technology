// ============================================================
// lib/data/products.ts
// Own live products — the "Product Lab" (2 flagship products)
// BarberzLink LLC is a Client / Technical Partnership project.
// ============================================================

export interface OwnProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  whoItsFor: string;
  features: string[];
  liveUrl: string;
  thumbnail: string;
  featuredImages: string[];
  screens: string[];
  countries?: string;
  badge: string;
}

export const ownProducts: OwnProduct[] = [
  {
    id: "barberzhub",
    name: "BarberzHub",
    tagline: "Global barber career network — active in 40+ countries",
    description:
      "BarberzHub is our flagship own-product: a worldwide professional network for barbers covering global job listings, booth rentals, gear & shop discovery, barber schools, multi-language support, and 4K video portfolios. Active in 40+ countries.",
    whoItsFor: "Barbers, barbershop owners, barber schools & industry recruiters",
    features: [
      "Global barber network & community feed",
      "Job board & booth rental marketplace",
      "Discover shops, schools & barber gear",
      "Multi-language global onboarding",
      "4K video portfolios & verified licensing",
      "Active in 40+ countries (Web & Mobile)",
    ],
    liveUrl: "https://www.barberzhub.com",
    thumbnail: "/projects/barberzhub_featured.png",
    featuredImages: [
      "/projects/barberzhub_featured.png",
      "/projects/barberzhub_featured2.png",
    ],
    screens: [
      "/projects/BarberzHub App SS/01-network.png",
      "/projects/BarberzHub App SS/02-jobs.png",
      "/projects/BarberzHub App SS/03-discover.png",
      "/projects/BarberzHub App SS/04-gear.png",
      "/projects/BarberzHub App SS/05-schools.png",
      "/projects/BarberzHub App SS/06-language.png",
      "/projects/BarberzHub App SS/07-join.png",
    ],
    countries: "40+",
    badge: "OWN PRODUCT · LIVE",
  },
  {
    id: "gym-management",
    name: "GYM Pro — Gym Management System",
    tagline: "SaaS & Mobile App that runs your gym 24/7",
    description:
      "Our live SaaS & mobile platform at gym.divineesoft.com helps gym owners manage fast member check-ins, new member onboarding, fee payments, daily cash closing, attendance tracking, automated WhatsApp reminders, and real-time revenue reports.",
    whoItsFor: "Independent gyms, fitness studios & multi-branch gym chains",
    features: [
      "Fast member check-in desk",
      "New member onboarding & plans",
      "Payments, dues & daily cash closing",
      "Attendance tracking & analytics",
      "Automated WhatsApp & fee reminders",
      "Real-time financial & growth reports",
    ],
    liveUrl: "https://www.gym.divineesoft.com",
    thumbnail: "/projects/GYM Pro App SS/feature-graphic-1024x500.png",
    featuredImages: [
      "/projects/GYM Pro App SS/feature-graphic-1024x500.png",
      "/projects/GYM Pro App SS/social-07-whatsapp.png",
      "/projects/GYM Pro App SS/social-08-reports.png",
    ],
    screens: [
      "/projects/GYM Pro App SS/screenshot-01-fast-checkin.png",
      "/projects/GYM Pro App SS/screenshot-02-new-member.png",
      "/projects/GYM Pro App SS/screenshot-03-payments.png",
      "/projects/GYM Pro App SS/screenshot-04-cash-closing.png",
      "/projects/GYM Pro App SS/screenshot-05-attendance.png",
      "/projects/GYM Pro App SS/screenshot-06-reminders.png",
      "/projects/GYM Pro App SS/screenshot-07-reports.png",
    ],
    badge: "OWN PRODUCT · LIVE SAAS",
  },
];
