// ============================================================
// src/data/estimator.ts
// Project Estimator configuration.
// All price / week figures are [CONFIRM] placeholders.
// ============================================================

export type BuildType =
  | "mobile-app"
  | "web-platform"
  | "saas"
  | "ai-agent"
  | "marketplace";

export type Platform = "ios" | "android" | "web";

export type Timeline = "asap" | "1-3months" | "3-6months" | "6months+";

export interface EstimatorFeature {
  id: string;
  label: string;
  weeks: number; // additive weeks
  priceUSD: number; // additive USD
}

// Step 1 — Build type base costs [CONFIRM]
export const BUILD_TYPES: Record<
  BuildType,
  { label: string; baseWeeks: number; basePrice: number }
> = {
  "mobile-app": { label: "Mobile App", baseWeeks: 8, basePrice: 8000 },
  "web-platform": { label: "Web Platform", baseWeeks: 6, basePrice: 6000 },
  saas: { label: "SaaS Platform", baseWeeks: 10, basePrice: 12000 },
  "ai-agent": { label: "AI Agent / Chatbot", baseWeeks: 5, basePrice: 5000 },
  marketplace: { label: "Marketplace", baseWeeks: 12, basePrice: 15000 },
};

// Step 2 — Feature chips [CONFIRM prices]
export const FEATURES: EstimatorFeature[] = [
  { id: "auth", label: "Authentication", weeks: 1, priceUSD: 500 },
  { id: "payments", label: "Payments / Stripe", weeks: 2, priceUSD: 1500 },
  { id: "chat", label: "In-app Chat", weeks: 2, priceUSD: 1200 },
  { id: "maps", label: "Maps & Location", weeks: 1, priceUSD: 800 },
  { id: "admin", label: "Admin Dashboard", weeks: 2, priceUSD: 1500 },
  { id: "ai", label: "AI Integration", weeks: 3, priceUSD: 3000 },
  { id: "subscriptions", label: "Subscriptions", weeks: 2, priceUSD: 1200 },
  { id: "video", label: "Video Calling", weeks: 2, priceUSD: 2000 },
  { id: "notifications", label: "Push Notifications", weeks: 1, priceUSD: 500 },
  { id: "analytics", label: "Analytics", weeks: 1, priceUSD: 600 },
];

// Step 3 — Platform multiplier [CONFIRM]
export const PLATFORM_MULTIPLIERS: Record<Platform, number> = {
  ios: 1,
  android: 1,
  web: 0.9,
};

// Step 4 — Timeline urgency surcharge [CONFIRM]
export const TIMELINE_SURCHARGE: Record<Timeline, number> = {
  asap: 0.3,
  "1-3months": 0.1,
  "3-6months": 0,
  "6months+": 0,
};

export const TIMELINE_LABELS: Record<Timeline, string> = {
  asap: "ASAP (rush)",
  "1-3months": "1–3 months",
  "3-6months": "3–6 months",
  "6months+": "No rush (6 months+)",
};

// Output price band
export const PRICE_BAND_MARGIN = 0.2; // ±20% around estimate [CONFIRM]
