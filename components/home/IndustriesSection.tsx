"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { industries } from "@/lib/data/industries";
import { projects } from "@/lib/data/projects";

const ICONS: Record<string, string> = {
  "salons-and-barbers": "✂️",
  gyms: "🏋️",
  "home-services": "🔧",
  startups: "🚀",
};

export default function IndustriesSection() {
  const [activeSlug, setActiveSlug] = useState(industries[0].slug);
  const activeIndustry =
    industries.find((i) => i.slug === activeSlug) || industries[0];
  const proofProject = projects.find(
    (p) => p.id === activeIndustry.caseStudySlug
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-5 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Industries we know deeply
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            We speak your industry&apos;s language.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Select your vertical to see the exact problems we solve, features we ship, and live proof.
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {industries.map((industry) => {
            const active = industry.slug === activeSlug;
            return (
              <button
                key={industry.slug}
                type="button"
                onClick={() => setActiveSlug(industry.slug)}
                className={`relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 border ${
                  active
                    ? "border-primary bg-primary text-white shadow-md shadow-primary/25"
                    : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                <span>{ICONS[industry.slug] ?? "💡"}</span>
                <span>{industry.name}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Tab Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xl"
          >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
              {/* Left: Pain points + Solutions */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                  {activeIndustry.headline}
                </h3>
                <p className="text-muted-foreground mb-7 leading-relaxed">
                  {activeIndustry.subheadline}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="rounded-2xl border border-border/80 bg-muted/30 p-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-destructive mb-3 flex items-center gap-1.5">
                      <AlertCircle size={13} /> Common Pain Points
                    </div>
                    <ul className="space-y-2.5">
                      {activeIndustry.painPoints.slice(0, 3).map((pt) => (
                        <li
                          key={pt}
                          className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-destructive font-bold mt-0.5">
                            •
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#34E3A0] mb-3 flex items-center gap-1.5">
                      <CheckCircle2 size={13} /> What We Ship
                    </div>
                    <ul className="space-y-2.5">
                      {activeIndustry.features.slice(0, 4).map((feat) => (
                        <li
                          key={feat}
                          className="text-xs sm:text-sm text-foreground flex items-start gap-2"
                        >
                          <span className="text-[#34E3A0] font-bold mt-0.5">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/for/${activeIndustry.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors shadow-md shadow-primary/20"
                  >
                    Explore {activeIndustry.name} solution{" "}
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/estimate"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
                  >
                    Estimate cost
                  </Link>
                </div>
              </div>

              {/* Right: Proof Case Study Card */}
              {proofProject && (
                <Link
                  href={`/work/${proofProject.meta.slug}`}
                  className="group block rounded-2xl border border-border bg-muted/20 overflow-hidden hover:border-primary/40 transition-all"
                >
                  <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                    <Image
                      src={proofProject.images.thumbnail}
                      alt={proofProject.meta.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#34E3A0] border border-white/10">
                        Live Proof
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                      {proofProject.meta.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                      {proofProject.overview.outcome}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Read case study{" "}
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
