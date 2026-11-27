// ============================================================
// src/data/stats.ts
// All [CONFIRM] placeholders are clearly marked.
// Replace values in this file — no component edits needed.
// ============================================================

export const STATS = {
  /** Live apps shipped & currently running */
  liveApps: 14,
  /** Countries where our products / clients are active */
  countries: 40,
  /** App Store rating for Sariea */
  appStoreRating: "5.0",
  /** Years of continuous operation — [CONFIRM year founded] */
  yearsActive: 5,
  /** Satisfied clients */
  satisfiedClients: 50,
  /** Team members */
  teamSize: 10,
  /** Problems solved / tickets closed */
  problemsSolved: 500,
  /** BarberzHub active-country count */
  barberzHubCountries: 40,
};

/** Animated counter cards shown in the Hero proof strip */
export const PROOF_STRIP = [
  { label: "Live Products", value: STATS.liveApps, suffix: "+" },
  { label: "Countries Reached", value: STATS.countries, suffix: "+" },
  { label: "App Store Rating", value: 5.0, suffix: "/5", decimals: 1 },
  { label: "Years of Delivery", value: STATS.yearsActive, suffix: "+" },
];
