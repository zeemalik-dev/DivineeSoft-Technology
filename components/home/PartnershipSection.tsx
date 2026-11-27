"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, Handshake } from "lucide-react";
import { openCalModal } from "@/lib/cal";

const ENGAGEMENT_MODELS = [
  {
    icon: Building2,
    title: "Fixed-Price MVP",
    description:
      "Clear scope, fixed price, defined timeline. Best for founders with a validated idea who want to launch fast.",
    price: "[CONFIRM]",
    timeline: "6–10 weeks",
    ideal: "Startups & founders",
    color: "text-blue-400",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "A dedicated squad of engineers, designers and QA working exclusively on your product. You set the pace.",
    price: "[CONFIRM]",
    timeline: "Monthly",
    ideal: "Scale-ups & enterprises",
    color: "text-primary",
    highlight: true,
  },
  {
    icon: Handshake,
    title: "Product Partnership",
    description:
      "We become your technical co-founder team. Strategy, design, build, cloud, support — the full stack, long-term.",
    price: "[CONFIRM]",
    timeline: "Long-term",
    ideal: "Visionary founders",
    color: "text-[#34E3A0]",
  },
];

export default function PartnershipSection() {
  return (
    <section className="py-20 bg-muted/20 dark:bg-[#0A0B10]">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Partnership Program
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-5">
              Your idea deserves a{" "}
              <span className="text-primary">technical co-founder team.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              Most founders get a freelancer who builds an MVP, then disappears. No documentation, no handover, no one to maintain it. That&apos;s why they come to us.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              We&apos;ve been the technical backbone of{" "}
              <strong className="text-foreground">BarberzLink LLC (United States)</strong>{" "}
              for 4+ years — managing their mobile apps, web platforms, admin systems and cloud infrastructure with 24/7 continuity.
            </p>

            {/* BarberzLink proof block */}
            <div className="rounded-xl border border-border bg-card p-5 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#34E3A0] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#34E3A0]">
                  Live Partnership — BarberzLink LLC, United States
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Systems managed", value: "4+" },
                  { label: "Uptime", value: "24/7" },
                  { label: "Years active", value: "4+" },
                  { label: "Countries", value: "50 US states" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-xl font-black text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/partnership"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                See how it works <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => openCalModal()}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
              >
                Pitch your idea
              </button>
            </div>
          </motion.div>

          {/* Right: Engagement model cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.title}
                className={`rounded-xl border p-5 transition-all duration-200 ${model.highlight
                  ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/5"
                  : "border-border bg-card hover:border-primary/20"
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`mt-0.5 ${model.color}`}>
                    <model.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                      <h3 className="font-bold text-foreground">{model.title}</h3>
                      <span className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
                        {model.timeline}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {model.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-muted-foreground">
                        Ideal for:{" "}
                        <strong className="text-foreground">{model.ideal}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
