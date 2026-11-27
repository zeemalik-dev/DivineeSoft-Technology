"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    duration: "1–2 weeks",
    desc: "We map your problem, audience, and existing tech. Output: a clear product brief and project scope.",
    deliverable: "Product brief & roadmap",
    color: "text-blue-400",
  },
  {
    num: "02",
    title: "Design",
    duration: "1–2 weeks",
    desc: "High-fidelity UI/UX in Figma. You review and approve before a single line of code is written.",
    deliverable: "Figma prototype",
    color: "text-purple-400",
  },
  {
    num: "03",
    title: "Build",
    duration: "4–10 weeks",
    desc: "Weekly deployments to a staging environment. You test it at every stage — no black-box surprises.",
    deliverable: "Working software",
    color: "text-primary",
  },
  {
    num: "04",
    title: "Launch",
    duration: "1 week",
    desc: "App Store submission, production deployment, DNS, monitoring, analytics. We handle the full launch.",
    deliverable: "Live product",
    color: "text-[#34E3A0]",
  },
  {
    num: "05",
    title: "Grow",
    duration: "Ongoing",
    desc: "24/7 uptime monitoring, feature iterations, and long-term partnership. We stay as your tech team.",
    deliverable: "Dedicated partner",
    color: "text-amber-400",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            How we work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Transparent. Predictable. No surprises.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Our 5-step process keeps you in control from first call to launch day and beyond.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                {/* Step number node */}
                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-3 mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl border-2 border-current ${step.color} flex items-center justify-center font-terminal font-black text-lg bg-card shrink-0 group-hover:scale-110 transition-transform duration-200`}
                  >
                    {step.num}
                  </div>
                  <div className="lg:text-center">
                    <div className={`font-bold text-base ${step.color}`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {step.duration}
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="rounded-xl border border-border bg-card p-4 group-hover:border-primary/30 transition-colors">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {step.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {step.deliverable}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Terminal accent */}
        <div className="mt-10 mx-auto max-w-lg text-center">
          <span className="font-terminal text-xs text-muted-foreground">
            ~/divineesoft — Every step, you have direct access to the engineers building your product.
          </span>
        </div>
      </div>
    </section>
  );
}
