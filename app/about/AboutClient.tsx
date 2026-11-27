"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, Calendar, Moon, Plus, Sun } from "lucide-react";
import { team } from "@/lib/data";
import { STATS } from "@/lib/data/stats";
import { ABOUT_FAQS } from "@/lib/data/about";
import { openCalModal } from "@/lib/cal";

/* Display face: set --font-display via next/font (see fonts.ts). Falls back to a system serif. */
const DISPLAY = "font-[family-name:var(--font-display),Georgia,serif]";
const FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

/* ───────────────────────── content ───────────────────────── */

const METRICS = [
  { label: "live products shipped", value: Number(STATS.liveApps), suffix: "+", decimals: 0 },
  { label: "countries reached", value: Number(STATS.countries), suffix: "+", decimals: 0 },
  { label: "App Store rating", value: Number(STATS.appStoreRating), suffix: "/5", decimals: 1 },
  { label: "years of delivery", value: Number(STATS.yearsActive), suffix: "+", decimals: 0 },
];

const PROOF = [
  {
    name: "BarberzHub",
    kind: "Our own platform",
    text: "A booking and business platform for barbers, active in 40+ countries and run by our team end to end.",
  },
  {
    name: "Gym Management System",
    kind: "Our own platform",
    text: "Memberships, scheduling and operations for gyms, built and operated in-house.",
  },
  {
    name: "BarberzLink LLC",
    kind: "US partnership, 4+ years",
    text: "Long-term technical partner in the United States: architecture, releases, scaling and 24/7 monitoring.",
  },
];

const VALUES = [
  {
    title: "Transparency",
    desc: "Weekly live demos, shared project boards, and direct Slack or WhatsApp access to the engineers building your product. No black boxes, no surprise invoices.",
  },
  {
    title: "Agility",
    desc: "We ship focused MVPs in 6–10 weeks with weekly staging builds, so you test real software early and adapt quickly to user feedback.",
  },
  {
    title: "100% ownership",
    desc: "You own the source code, Git repositories, cloud accounts, App Store listings and intellectual property from day one.",
  },
  {
    title: "Long-term evolution",
    desc: "Go-live is the start. Like our 4+ year partnership with BarberzLink LLC, we stay on for monitoring, scaling and new releases.",
  },
];

// Mon–Fri. `ritual: false` days are build days.
const WEEK = [
  {
    day: "Mon",
    ritual: true,
    title: "We plan the week with you",
    desc: "Sprint planning on the shared board. You see which tickets are in, who owns them, and what ships by Friday.",
  },
  {
    day: "Tue",
    ritual: false,
    title: "Heads-down build day",
    desc: "Engineers are building. If you need them, they are on Slack or WhatsApp.",
  },
  {
    day: "Wed",
    ritual: true,
    title: "You get a mid-week preview",
    desc: "A short async Loom walkthrough and a staging link, so feedback lands while the work is still easy to change.",
  },
  {
    day: "Thu",
    ritual: false,
    title: "Heads-down build day",
    desc: "Final polish and fixes ahead of the demo. Same direct line to the engineers.",
  },
  {
    day: "Fri",
    ritual: true,
    title: "Live demo and sign-off",
    desc: "Working features on a live staging environment: clickable, testable. We agree next week's priorities before the call ends.",
  },
];

const CLOCKS = [
  { city: "Lahore", tz: "Asia/Karachi", note: "Our studio" },
  { city: "Dubai", tz: "Asia/Dubai", note: "Middle East (GST)" },
  { city: "London", tz: "Europe/London", note: "UK (GMT)" },
  { city: "New York", tz: "America/New_York", note: "US East (EST)" },
  { city: "Los Angeles", tz: "America/Los_Angeles", note: "US West (PST)" },
];

const LEADER = {
  name: "Zeeshan Malik",
  role: "Chief Executive Officer and Technical Partner",
  image: "/team/zeeshan.png",
  bio: "Senior technical lead and international partner at BarberzLink LLC in the United States. Zeeshan architects mobile apps, SaaS platforms, AI systems and 24/7 cloud infrastructure, and works directly with every client team.",
  highlights: [
    "Founder, BarberzHub LLC",
    "Founder, GYM Pro",
    "System architecture",
    "BarberzLink LLC partner",
    "Product engineering",
  ],
};

/* ───────────────────────── helpers ───────────────────────── */

const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const heroItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Weekday index (0 = Sun) in Lahore right now. */
function lahoreWeekday(now: Date) {
  const short = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Asia/Karachi" }).format(now);
  return WEEKDAYS.indexOf(short);
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(value); // real value first, so crawlers and no-JS see it

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, { duration: 1.4, ease: "easeOut", onUpdate: setN });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary"
    />
  );
}

/** Shared "now" that ticks every 30s, null until mounted (avoids hydration mismatch). */
function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function formatTime(now: Date | null, tz: string) {
  if (!now) return "--:--";
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: tz,
  }).format(now);
}

/** Live studio strip: Lahore time + next Friday demo. */
function StudioStatus({ now }: { now: Date | null }) {
  let demo = "Demos every Friday";
  if (now) {
    const diff = (5 - lahoreWeekday(now) + 7) % 7;
    demo =
      diff === 0 ? "Demo day is today" : diff === 1 ? "Next demo: tomorrow, Friday" : `Next demo: Friday, in ${diff} days`;
  }
  return (
    <p className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
      <span className="inline-flex items-center gap-2">
        <span className="relative flex h-2 w-2" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34E3A0] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34E3A0]" />
        </span>
        Lahore studio, <span className="font-terminal tabular-nums text-foreground">{formatTime(now, "Asia/Karachi")}</span>{" "}
        local time
      </span>
      <span>{demo}</span>
    </p>
  );
}

/* ───────────────────────── sections ───────────────────────── */

function Principles() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  const jump = (i: number) =>
    refs.current[i]?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });

  return (
    <section className="bg-foreground text-background">
      <div className="container mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* pinned side */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <h2 className={`${DISPLAY} text-4xl leading-tight tracking-tight sm:text-5xl`}>
            Four commitments we put in writing.
          </h2>
          <ul className="mt-10 hidden border-l border-background/20 lg:block">
            {VALUES.map((v, i) => (
              <li key={v.title}>
                <button
                  type="button"
                  onClick={() => jump(i)}
                  aria-current={i === active}
                  className={`relative -ml-px block w-full border-l-2 py-2 pl-5 text-left text-base transition-colors ${FOCUS} ${i === active
                      ? "border-[#34E3A0] text-background"
                      : "border-transparent text-background/50 hover:text-background/80"
                    }`}
                >
                  {v.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* scrolling side */}
        <ul>
          {VALUES.map((v, i) => (
            <PrincipleItem
              key={v.title}
              index={i}
              onActive={setActive}
              setRef={(el) => (refs.current[i] = el)}
            >
              <h3 className={`${DISPLAY} text-3xl tracking-tight sm:text-4xl`}>{v.title}</h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-background/70">{v.desc}</p>
            </PrincipleItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PrincipleItem({
  children,
  index,
  onActive,
  setRef,
}: {
  children: ReactNode;
  index: number;
  onActive: (i: number) => void;
  setRef: (el: HTMLLIElement | null) => void;
}) {
  const ref = useRef<HTMLLIElement | null>(null);
  const inMiddle = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inMiddle) onActive(index);
  }, [inMiddle, index, onActive]);

  return (
    <li
      ref={(el) => {
        ref.current = el;
        setRef(el);
      }}
      className="flex min-h-0 items-center border-t border-background/15 py-10 lg:min-h-[55vh]"
    >
      <div>{children}</div>
    </li>
  );
}

function WeekRhythm({ now }: { now: Date | null }) {
  const reduce = useReducedMotion();
  const [day, setDay] = useState(0);
  const [today, setToday] = useState<number | null>(null);

  // Open on the next ritual (Mon / Wed / Fri) once we know the day in Lahore.
  useEffect(() => {
    if (!now) return;
    const d = lahoreWeekday(now); // 0 Sun … 6 Sat
    setToday(d >= 1 && d <= 5 ? d - 1 : null);
    const next = WEEK.findIndex((w, i) => w.ritual && i >= d - 1);
    setDay(d >= 1 && d <= 5 && next !== -1 ? next : 0);
    // only on first mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now === null]);

  return (
    <div>
      <div role="tablist" aria-label="A week with DivineeSoft" className="grid grid-cols-5 border-t border-border">
        {WEEK.map((w, i) => (
          <button
            key={w.day}
            role="tab"
            type="button"
            id={`week-tab-${i}`}
            aria-selected={i === day}
            aria-controls="week-panel"
            onClick={() => setDay(i)}
            className={`relative px-2 pb-4 pt-5 text-left transition-colors sm:px-4 ${FOCUS} ${i === day ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {i === day && (
              <motion.span
                layoutId="week-bar"
                className="absolute inset-x-0 -top-px h-[3px] bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
            <span className={`${DISPLAY} block text-2xl sm:text-3xl`}>{w.day}</span>
            <span className="mt-1 block text-xs">
              {today === i ? "Today" : w.ritual ? "Check-in" : "Build day"}
            </span>
          </button>
        ))}
      </div>

      <div id="week-panel" role="tabpanel" aria-labelledby={`week-tab-${day}`} className="min-h-[140px] border-t border-border pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={day}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            <h3 className={`${DISPLAY} text-2xl sm:text-3xl`}>{WEEK[day].title}</h3>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">{WEEK[day].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Clocks({ now }: { now: Date | null }) {
  return (
    <ul className="grid grid-cols-2 divide-x divide-y divide-border border-y border-l border-border sm:grid-cols-5 sm:divide-y-0">
      {CLOCKS.map((c) => {
        const time = formatTime(now, c.tz);
        const hr = now ? Number(time.slice(0, 2)) : 12;
        const day = hr >= 7 && hr < 19;
        return (
          <li key={c.city} className="border-r border-border p-4">
            <p className="flex items-center gap-2 font-terminal text-2xl tabular-nums text-foreground">
              {time}
              {now &&
                (day ? (
                  <Sun size={14} className="text-amber-400" aria-label="Daytime" />
                ) : (
                  <Moon size={14} className="text-muted-foreground" aria-label="Night" />
                ))}
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">{c.city}</p>
            <p className="text-xs text-muted-foreground">{c.note}</p>
          </li>
        );
      })}
    </ul>
  );
}

/* ───────────────────────── page ───────────────────────── */

export default function AboutClient() {
  const reduce = useReducedMotion();
  const now = useNow();

  const heroImgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroImgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-24, 24]);

  const roster = team.filter((m) => m.name !== LEADER.name);

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <ScrollProgress />

      {/* ── 1. HERO ── */}
      <section className="border-b border-border pt-32">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <motion.div variants={heroContainer} initial="hidden" animate="show" className="pb-4">
              <motion.div variants={heroItem} className="mb-8">
                <StudioStatus now={now} />
              </motion.div>

              <motion.h1
                variants={heroItem}
                className={`${DISPLAY} text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl`}
              >
                We build it.
                <span className="block text-muted-foreground">Then we run it.</span>
              </motion.h1>

              <motion.p variants={heroItem} className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                DivineeSoft Technologies is a product studio in Lahore, Pakistan. Founders don&apos;t need an agency
                that hands over a zip file and disappears. They need a technical partner that builds, launches and
                operates alongside them.
              </motion.p>

              <motion.div variants={heroItem} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <button
                  type="button"
                  onClick={() => openCalModal()}
                  className={`inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${FOCUS}`}
                >
                  <Calendar size={15} aria-hidden />
                  Book a free strategy call
                </button>
                <Link
                  href="/products"
                  className={`group inline-flex items-center gap-2 text-sm font-semibold underline decoration-border underline-offset-[6px] transition-colors hover:decoration-primary ${FOCUS}`}
                >
                  See our live products
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </motion.div>
            </motion.div>

            <motion.figure
              ref={heroImgRef}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-muted">
                <motion.div style={{ y: imgY }} className="absolute inset-[-28px]">
                  <Image
                    src="/about/office.png"
                    alt="DivineeSoft Technologies engineering studio in Lahore, Pakistan"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                </motion.div>
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                The studio, Lahore, Punjab. Full-stack mobile, web, SaaS and AI engineering.
              </figcaption>
            </motion.figure>
          </div>

          {/* metrics ledger */}
          <dl className="mt-16 grid grid-cols-2 divide-x divide-border border-t border-border lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <div key={m.label} className={`py-8 ${i % 2 === 0 ? "pr-5" : "px-5"} lg:px-6 lg:first:pl-0`}>
                <dd className={`${DISPLAY} text-5xl tabular-nums tracking-tight sm:text-6xl`}>
                  <CountUp value={m.value} decimals={m.decimals} suffix={m.suffix} />
                </dd>
                <dt className="mt-2 text-sm text-muted-foreground">{m.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 2. PROOF LEDGER ── */}
      <section className="border-b border-border py-24">
        <div className="container mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className={`${DISPLAY} mb-4 max-w-2xl text-4xl leading-tight tracking-tight sm:text-5xl`}>
              We operate what we build.
            </h2>
            <p className="mb-14 max-w-xl text-lg text-muted-foreground">
              Two platforms we own, and one client partnership that has run for more than four years.
            </p>
          </Reveal>

          <ul className="border-t border-border">
            {PROOF.map((p) => (
              <li
                key={p.name}
                className="group grid gap-3 border-b border-border py-8 transition-colors hover:bg-muted/30 md:grid-cols-[1fr_1.1fr_auto] md:items-baseline md:gap-10 md:px-4"
              >
                <h3 className={`${DISPLAY} text-3xl tracking-tight sm:text-4xl`}>{p.name}</h3>
                <p className="max-w-lg text-muted-foreground">{p.text}</p>
                <p className="text-sm font-medium text-primary">{p.kind}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. PRINCIPLES (pinned, scroll-driven) ── */}
      <Principles />

      {/* ── 4. THE WEEK + TIME ZONES ── */}
      <section className="border-b border-border py-24">
        <div className="container mx-auto max-w-5xl px-5">
          <Reveal>
            <h2 className={`${DISPLAY} mb-4 max-w-2xl text-4xl leading-tight tracking-tight sm:text-5xl`}>
              A week with us, day by day.
            </h2>
            <p className="mb-12 max-w-xl text-lg text-muted-foreground">
              Real software you can click and test every week, instead of vague status updates. Select a day.
            </p>
          </Reveal>

          <WeekRhythm now={now} />

          <Reveal className="mt-20">
            <h3 className={`${DISPLAY} mb-2 text-2xl sm:text-3xl`}>Your hours, our hours</h3>
            <p className="mb-6 max-w-xl text-muted-foreground">
              We work from Lahore with scheduled overlap hours for US, UK and Middle East teams. Here is the time
              in each place right now.
            </p>
            <Clocks now={now} />
          </Reveal>
        </div>
      </section>

      {/* ── 5. LEADERSHIP ── */}
      <section className="border-b border-border py-24">
        <div className="container mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <div className="relative aspect-[4/5] max-w-sm overflow-hidden rounded-md bg-muted">
              <Image
                src={LEADER.image}
                alt={`${LEADER.name}, ${LEADER.role}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
          </Reveal>
          <Reveal>
            <h2 className={`${DISPLAY} text-4xl leading-tight tracking-tight sm:text-5xl`}>{LEADER.name}</h2>
            <p className="mt-2 text-base font-semibold text-primary">{LEADER.role}</p>
            <p className={`${DISPLAY} mt-8 max-w-2xl text-xl leading-relaxed text-foreground/90 sm:text-2xl`}>
              {LEADER.bio}
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {LEADER.highlights.map((h) => (
                <li key={h} className="border-l border-border pl-3">
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── 6. TEAM ROSTER ── */}
      <section className="border-b border-border py-24">
        <div className="container mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <h2 className={`${DISPLAY} text-4xl leading-tight tracking-tight sm:text-5xl`}>The people building it.</h2>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Engineers, AI specialists, designers and growth experts working together under one roof in Lahore.
            </p>
          </Reveal>

          <ul className="border-t border-border">
            {roster.map((m, i) => {
              const hasPhoto = m.image && !m.image.includes("placeholder");
              const initials = m.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();
              return (
                <motion.li
                  key={m.name}
                  initial={reduce ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="flex items-center gap-4 border-b border-border py-4 transition-colors hover:bg-muted/30 sm:px-3"
                >
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted">
                    {hasPhoto ? (
                      <Image src={m.image} alt={m.name} fill className="object-cover" sizes="48px" />
                    ) : (
                      <span aria-hidden className="text-sm font-bold text-primary">
                        {initials}
                      </span>
                    )}
                  </div>
                  <h3 className="flex-1 text-base font-semibold">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── 7. FAQ (native <details>: works without JS, fully indexable) ── */}
      <section className="border-b border-border py-24">
        <div className="container mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className={`${DISPLAY} text-4xl leading-tight tracking-tight sm:text-5xl md:sticky md:top-28 md:h-fit`}>
            What founders ask first.
          </h2>
          <div className="border-t border-border">
            {ABOUT_FAQS.map((f, i) => (
              <details key={f.question} open={i === 0} className="group border-b border-border">
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden ${FOCUS}`}
                >
                  {f.question}
                  <Plus
                    size={20}
                    className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ── */}
      <section className="bg-foreground py-28 text-background">
        <div className="container mx-auto max-w-5xl px-5">
          <Reveal>
            <h2 className={`${DISPLAY} text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl`}>
              Ready to build with a team that stays?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-background/70">
              Book a free 30-minute strategy call, or get a price and timeline estimate in 60 seconds. We reply
              within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <button
                type="button"
                onClick={() => openCalModal()}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
              >
                <Calendar size={16} aria-hidden />
                Book a free strategy call
              </button>
              <Link
                href="/estimate"
                className="group inline-flex items-center gap-2 text-sm font-semibold underline decoration-background/30 underline-offset-[6px] transition-colors hover:decoration-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
              >
                60-second project estimator
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}