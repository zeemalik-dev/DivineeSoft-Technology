"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Terminal,
  Star,
  Globe,
} from "lucide-react";
import { useEffect, useState } from "react";
import { openCalModal } from "@/lib/cal";

function TypingText({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (!isDeleting && text === currentWord) {
      const t = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (isDeleting && text === "") {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((p) => (p + 1) % words.length);
      }, 40);
      return () => clearTimeout(t);
    }
    const speed = isDeleting ? 28 : 52;
    const t = setTimeout(() => {
      const next = isDeleting ? text.length - 1 : text.length + 1;
      setText(currentWord.slice(0, next));
    }, speed);
    return () => clearTimeout(t);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className="inline-flex items-center font-semibold text-[#34E3A0]">
      {text}
      <span
        className="ml-0.5 inline-block h-[1.05em] w-0.5 bg-[#34E3A0]"
        style={{ opacity: showCursor ? 1 : 0 }}
      />
    </span>
  );
}

const PROOF = [
  { label: "Live Products", value: "14+", sub: "iOS, Android & Web" },
  { label: "Countries Reached", value: "40+", sub: "US, UK, PK & MENA" },
  { label: "App Store Rating", value: "5.0/5", sub: "Verified on Sariea" },
  { label: "Years Delivering", value: "5+", sub: "Long-term partners" },
];

const SHOWCASE_SLIDES = [
  {
    id: "barberzhub",
    title: "BarberzHub",
    subtitle: "Own Product · Global Barber Network",
    tag: "Own Product · 40+ Countries",
    metric: "barberzhub.com",
    image: "/projects/barberzhub_featured.png",
    href: "/products",
  },
  {
    id: "gym-pro",
    title: "GYM Pro",
    subtitle: "Own Product · Gym Management SaaS & App",
    tag: "Own Product · Live SaaS",
    metric: "gym.divineesoft.com",
    image: "/projects/GYM Pro App SS/feature-graphic-1024x500.png",
    href: "/products",
  },
  {
    id: "barberz-link",
    title: "Barberz Link",
    subtitle: "Client Partner · US 50-State Platform",
    tag: "iOS + Android",
    metric: "50 US States",
    image: "/projects/barberzlink.png",
    href: "/work/barberz-link",
  },
  {
    id: "cosmo-link",
    title: "CosmoLink",
    subtitle: "Client Partner · Beauty & Salon Ecosystem",
    tag: "Mobile + Stripe",
    metric: "Nationwide Hub",
    image: "/projects/cosmolink.png",
    href: "/work/cosmo-link",
  },
  {
    id: "sariea",
    title: "Sariea",
    subtitle: "On-Demand Home Services",
    tag: "5.0 ★ App Store",
    metric: "5.0 / 5.0 Rating",
    image: "/projects/sariea-cover.jpg",
    href: "/work/sariea",
  },
  {
    id: "beauty-spot",
    title: "Beauty Spot",
    subtitle: "UK Beauty Marketplace",
    tag: "Marketplace App",
    metric: "Live in UK",
    image: "/projects/beautyspot.png",
    href: "/work/beauty-spot-app",
  },
];

const TYPEWRITER_WORDS = [
  "marketplaces",
  "SaaS platforms",
  "mobile apps",
  "AI agents",
  "booking systems",
];

const TERMINAL_STEPS = [
  "business requirements gathered",
  "architecture & APIs finalized",
  "weekly staging builds shipped",
];

const TECH_BADGES = [
  "Flutter",
  "Next.js",
  "Node.js",
  "Supabase",
  "AWS / GCP",
  "Stripe",
  "OpenAI / Vapi",
  "Agora",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay: custom * 0.08,
    },
  }),
};

export default function Hero() {
  const [viewMode, setViewMode] = useState<"showcase" | "terminal">("showcase");
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (viewMode !== "showcase" || isPaused) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [viewMode, isPaused]);

  const currentSlide = SHOWCASE_SLIDES[slideIndex];

  const openCalendar = async () => {
    await openCalModal();
  };

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-background py-20 pt-28 md:pt-32 flex items-center">
      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 dark:opacity-100 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(9,75,240,0.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(9,75,240,0.05) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 85% 85% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 85% at 50% 50%, black, transparent)",
        }}
      />

      {/* Ambient animated glows */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -right-32 bottom-12 h-[380px] w-[380px] rounded-full bg-[#34E3A0]/8 blur-3xl"
      />

      <div className="container relative mx-auto px-5 z-10 max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] xl:gap-16">
          {/* ── Left Column: Positioning & CTAs ── */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="mb-6 self-start inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34E3A0] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34E3A0]" />
              </span>
              Product &amp; Software Partner · US · UK · PK · MENA
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-[clamp(2.2rem,4.4vw,3.85rem)] font-extrabold leading-[1.06] tracking-tight text-foreground mb-5"
            >
              We build the product.{" "}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-[#34E3A0] bg-clip-text text-transparent">
                Then we run it
              </span>{" "}
              with you.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base sm:text-xl text-muted-foreground leading-relaxed mb-3"
            >
              From idea to design to App Store — we ship production{" "}
              <TypingText words={TYPEWRITER_WORDS} />
              <br className="hidden sm:block" />
              and stay as your long-term technical partner.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl"
            >
              We don&apos;t just build for clients — we{" "}
              <strong className="text-foreground">run our own live platforms</strong>{" "}
              across 40+ countries. Zero vendor lock-in. 100% code ownership.
            </motion.p>

            {/* Primary & Secondary CTA */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <motion.button
                type="button"
                onClick={openCalendar}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex h-13 items-center gap-2.5 rounded-full bg-gradient-to-r from-primary to-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-200"
              >
                <Calendar className="size-4" />
                Book a Free Strategy Call
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <Link
                href="/products"
                className="inline-flex h-13 items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur-sm hover:bg-muted hover:border-primary/40 text-foreground font-semibold transition-all duration-200 hover:-translate-y-0.5 px-7 text-sm"
              >
                See Live Products
              </Link>
            </motion.div>

            {/* Proof strip (Static SEO-friendly values + hover lift) */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-border/70"
            >
              {PROOF.map((p) => (
                <div
                  key={p.label}
                  className="rounded-xl border border-border/60 bg-card/50 p-3 backdrop-blur-sm hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl font-black text-foreground tabular-nums">
                    {p.value}
                  </div>
                  <div className="text-xs font-semibold text-foreground/90 mt-0.5">
                    {p.label}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">
                    {p.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column: Interactive Product Slider + Terminal Switcher ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full"
          >
            {/* Ambient hover glow */}
            <div className="pointer-events-none -inset-3 absolute rounded-[30px] bg-gradient-to-tr from-primary/20 via-transparent to-[#34E3A0]/15 blur-2xl opacity-60" />

            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl">
              {/* Top Mode Switcher Bar */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-muted/40">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 font-terminal text-[11px] text-muted-foreground hidden sm:inline">
                    ~/divineesoft/live-proof
                  </span>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-background/80 p-1 border border-border">
                  <button
                    type="button"
                    onClick={() => setViewMode("showcase")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold transition-all ${
                      viewMode === "showcase"
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Smartphone size={12} />
                    Live Apps
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("terminal")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold transition-all ${
                      viewMode === "terminal"
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Terminal size={12} />
                    Stack
                  </button>
                </div>
              </div>

              {/* Body */}
              <AnimatePresence mode="wait">
                {viewMode === "showcase" ? (
                  <motion.div
                    key="showcase"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="p-5"
                  >
                    {/* Active Slide Preview */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border bg-muted mb-4">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSlide.id}
                          initial={{ opacity: 0, scale: 1.03 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={currentSlide.image}
                            alt={currentSlide.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 520px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                          {/* Top floating pills */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-semibold text-white">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#34E3A0] animate-pulse" />
                              {currentSlide.tag}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-bold text-white shadow">
                              {currentSlide.id === "sariea" ? (
                                <Star size={11} className="fill-amber-400 text-amber-400" />
                              ) : (
                                <Globe size={11} />
                              )}
                              {currentSlide.metric}
                            </span>
                          </div>

                          {/* Bottom caption */}
                          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-2">
                            <div>
                              <h3 className="text-lg font-extrabold text-white leading-tight">
                                {currentSlide.title}
                              </h3>
                              <p className="text-xs text-white/80">
                                {currentSlide.subtitle}
                              </p>
                            </div>
                            <Link
                              href={currentSlide.href}
                              className="shrink-0 inline-flex items-center gap-1 rounded-full bg-white text-black px-3 py-1.5 text-xs font-bold hover:bg-[#34E3A0] transition-colors"
                            >
                              Inspect <ArrowRight size={12} />
                            </Link>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Slider Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {SHOWCASE_SLIDES.map((s, idx) => (
                          <button
                            key={s.id}
                            type="button"
                            aria-label={`Show ${s.title}`}
                            onClick={() => setSlideIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx === slideIndex
                                ? "w-7 bg-primary"
                                : "w-2 bg-border hover:bg-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Previous product"
                          onClick={() =>
                            setSlideIndex(
                              (p) =>
                                (p - 1 + SHOWCASE_SLIDES.length) %
                                SHOWCASE_SLIDES.length
                            )
                          }
                          className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                        >
                          <ChevronLeft size={15} />
                        </button>
                        <button
                          type="button"
                          aria-label="Next product"
                          onClick={() =>
                            setSlideIndex((p) => (p + 1) % SHOWCASE_SLIDES.length)
                          }
                          className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                        >
                          <ChevronRight size={15} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 space-y-3 font-terminal text-sm"
                  >
                    <p className="flex flex-wrap items-center gap-2">
                      <span className="text-[#34E3A0]">→</span>
                      <span className="text-muted-foreground">discovery</span>
                      <span className="text-blue-400">
                        ./understand-your-problem
                      </span>
                    </p>

                    {TERMINAL_STEPS.map((step) => (
                      <p
                        key={step}
                        className="flex items-center gap-2 pl-5 text-blue-400/90"
                      >
                        <span className="text-[#34E3A0]">✓</span>
                        {step}
                      </p>
                    ))}

                    <div className="flex items-center gap-2">
                      <span className="text-[#34E3A0]">→</span>
                      <span className="text-muted-foreground">build</span>
                      <TypingText
                        words={[
                          "--mobile-app",
                          "--web-platform",
                          "--ai-agent",
                          "--saas",
                        ]}
                      />
                    </div>

                    <div className="flex flex-wrap gap-1.5 pl-5 pt-1">
                      {TECH_BADGES.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    <p className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-[#34E3A0]">→</span>
                      <span className="text-muted-foreground">deploy</span>
                      <span className="text-blue-400">
                        --partner-mode on --24-7-support
                      </span>
                    </p>

                    <p className="flex items-center gap-2 text-[#34E3A0]">
                      <span>✓</span>
                      shipped &amp; scaling
                      <motion.span
                        className="ml-1 h-2 w-2 rounded-full bg-[#34E3A0]"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      />
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom action strip */}
              <div className="border-t border-border px-5 py-3.5 bg-muted/20 flex items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground">
                  Want a cost &amp; timeline breakdown?
                </span>
                <Link
                  href="/estimate"
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  Try 60-sec Estimator <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
