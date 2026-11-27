"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";
import { openCalModal } from "@/lib/cal";

const SERVICES_REDESIGNED = [
  {
    id: "app-development",
    title: "Mobile Apps",
    desc: "iOS & Android, Flutter, React Native. Live in both App Stores.",
    icon: "📱",
    tech: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    id: "saas-development",
    title: "Web & SaaS Platforms",
    desc: "Multi-tenant SaaS, marketplaces, and production-grade web platforms.",
    icon: "🌐",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: "ai-services",
    title: "AI & Automation",
    desc: "Voice agents, chatbots, document processors, and AI integrations.",
    icon: "🤖",
    tech: ["OpenAI", "Vapi", "LangChain", "FastAPI"],
  },
  {
    id: "cloud-solutions",
    title: "Cloud & DevOps",
    desc: "AWS / GCP infrastructure, CI/CD pipelines, 24/7 monitoring.",
    icon: "☁️",
    tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
];

const GROWTH_ADDONS = ["SEO", "Digital Marketing", "Analytics", "Content Strategy"];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            What we build
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            4 core capabilities. No dilution.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            We focus on what we&apos;re genuinely great at. Growth add-ons are available but never the main pitch.
          </p>
        </div>

        {/* 4 service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {SERVICES_REDESIGNED.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/services/${svc.id}`}
                className="group block rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 p-6 h-full transition-all duration-300"
              >
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {svc.desc}
                </p>
                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                  {svc.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium bg-primary/8 border border-primary/15 text-primary rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary">
                  Learn more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Growth add-ons row */}
        <div className="flex flex-wrap items-center gap-3 justify-center mb-12">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Growth add-ons:
          </span>
          {GROWTH_ADDONS.map((addon) => (
            <span
              key={addon}
              className="text-xs font-medium border border-border rounded-full px-3 py-1.5 text-muted-foreground"
            >
              {addon}
            </span>
          ))}
        </div>

        {/* Estimator CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-10 text-center"
        >
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 30% 50%, #094BF0 0%, transparent 60%), radial-gradient(circle at 70% 50%, #34E3A0 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <Calculator className="mx-auto mb-4 text-primary" size={36} />
            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-2">
              Not sure what to build or what it costs?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Our 60-second Project Estimator gives you an instant price range and timeline based on your features.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-colors"
              >
                <Calculator size={16} />
                Try the estimator — it&apos;s free
              </Link>
              <button
                onClick={() => openCalModal()}
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold hover:bg-muted transition-colors"
              >
                Or book a call directly
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
