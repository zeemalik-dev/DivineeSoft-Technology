"use client";

import { motion } from "framer-motion";
import {
  SiFlutter,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiStripe,
  SiFastapi,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiSwift,
  SiKotlin,
  SiAgora,
  SiPytorch,
  SiLangchain,
  SiVercel,
  SiRedis,
  SiCloudflare,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Bot, AudioWaveform } from "lucide-react";
import type { ComponentType } from "react";

interface TechItem {
  name: string;
  category: string;
  color: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
}

const ROW_ONE: TechItem[] = [
  { name: "Flutter", category: "Mobile", color: "group-hover:text-[#02569B]", Icon: SiFlutter },
  { name: "React", category: "Frontend", color: "group-hover:text-[#61DAFB]", Icon: SiReact },
  { name: "Next.js", category: "Web", color: "group-hover:text-foreground", Icon: SiNextdotjs },
  { name: "TypeScript", category: "Language", color: "group-hover:text-[#3178C6]", Icon: SiTypescript },
  { name: "Tailwind CSS", category: "UI", color: "group-hover:text-[#06B6D4]", Icon: SiTailwindcss },
  { name: "Swift", category: "iOS", color: "group-hover:text-[#F05138]", Icon: SiSwift },
  { name: "Kotlin", category: "Android", color: "group-hover:text-[#7F52FF]", Icon: SiKotlin },
  { name: "Node.js", category: "Backend", color: "group-hover:text-[#339933]", Icon: SiNodedotjs },
  { name: "FastAPI", category: "API", color: "group-hover:text-[#009688]", Icon: SiFastapi },
  { name: "Python", category: "AI / ML", color: "group-hover:text-[#3776AB]", Icon: SiPython },
  { name: "OpenAI", category: "AI", color: "group-hover:text-[#34E3A0]", Icon: Bot },
  { name: "Vapi", category: "Voice AI", color: "group-hover:text-[#34E3A0]", Icon: AudioWaveform },
];

const ROW_TWO: TechItem[] = [
  { name: "Firebase", category: "Backend", color: "group-hover:text-[#FFCA28]", Icon: SiFirebase },
  { name: "Supabase", category: "Database", color: "group-hover:text-[#3ECF8E]", Icon: SiSupabase },
  { name: "PostgreSQL", category: "Database", color: "group-hover:text-[#4169E1]", Icon: SiPostgresql },
  { name: "Redis", category: "Cache", color: "group-hover:text-[#DC382D]", Icon: SiRedis },
  { name: "AWS", category: "Cloud", color: "group-hover:text-[#FF9900]", Icon: FaAws },
  { name: "Google Cloud", category: "Cloud", color: "group-hover:text-[#4285F4]", Icon: SiGooglecloud },
  { name: "Docker", category: "DevOps", color: "group-hover:text-[#2496ED]", Icon: SiDocker },
  { name: "Kubernetes", category: "DevOps", color: "group-hover:text-[#326CE5]", Icon: SiKubernetes },
  { name: "Stripe", category: "Payments", color: "group-hover:text-[#635BFF]", Icon: SiStripe },
  { name: "Agora", category: "Real-Time", color: "group-hover:text-[#099DFD]", Icon: SiAgora },
  { name: "PyTorch", category: "AI / ML", color: "group-hover:text-[#EE4C2C]", Icon: SiPytorch },
  { name: "LangChain", category: "AI Agents", color: "group-hover:text-[#1C3C3C] dark:group-hover:text-[#34E3A0]", Icon: SiLangchain },
  { name: "Cloudflare", category: "Edge", color: "group-hover:text-[#F38020]", Icon: SiCloudflare },
  { name: "Vercel", category: "Hosting", color: "group-hover:text-foreground", Icon: SiVercel },
];

const TRUST_BADGES = [
  "You own 100% of the code",
  "IP protection included",
  "NDA on request",
  "GDPR-aware architecture",
  "24/7 support available",
];

function MarqueeRow({
  items,
  direction = "left",
  duration = 32,
}: {
  items: TechItem[];
  direction?: "left" | "right";
  duration?: number;
}) {
  // Duplicate items for seamless infinite loop
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2 group/marquee">
      {/* Left & right gradient fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-muted/30 dark:from-[#0A0B10] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-muted/30 dark:from-[#0A0B10] to-transparent" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {track.map((item, idx) => {
          const Icon = item.Icon;
          return (
            <div
              key={`${item.name}-${idx}`}
              className="group flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-200 cursor-default shrink-0"
            >
              <div
                className={`text-muted-foreground transition-colors duration-200 ${item.color}`}
              >
                <Icon size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest whitespace-nowrap">
                  {item.category}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function TechTrust() {
  return (
    <section className="py-20 bg-muted/20 dark:bg-[#0A0B10] border-y border-border overflow-hidden">
      <div className="container mx-auto px-5 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Tech &amp; Trust
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Battle-tested stack. Zero vendor lock-in.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Every logo below powers our live client &amp; internal platforms in production.
          </p>
        </motion.div>
      </div>

      {/* Full-width non-stop dual marquee */}
      <div className="space-y-3 mb-12">
        <MarqueeRow items={ROW_ONE} direction="left" duration={34} />
        <MarqueeRow items={ROW_TWO} direction="right" duration={38} />
      </div>

      {/* Trust badges */}
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-3">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-xs font-semibold border border-border rounded-full px-4 py-2 bg-card/60 text-muted-foreground hover:border-[#34E3A0]/40 hover:text-foreground transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#34E3A0]" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
