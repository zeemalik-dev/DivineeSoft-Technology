import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { FadeIn } from "@/components/ui/MotionPrimitives";

export const metadata: Metadata = buildMetadata({
  title: "Technical Partnership",
  description:
    "DivineeSoft Technologies becomes your long-term technical partner. Strategy, design, engineering, cloud, and 24/7 support.",
  path: "/partnership",
  keywords:
    "technical partner, dedicated engineering team, MVP development, BarberzLink LLC, DivineeSoft Technologies",
});

const PARTNERSHIP_FEATURES = [
  { icon: "🧭", title: "Product Strategy", desc: "We define your roadmap, feature priorities, and go-to-market together." },
  { icon: "🎨", title: "Design", desc: "High-fidelity UI/UX that your users will love." },
  { icon: "⚙️", title: "Engineering", desc: "Full-stack development: mobile, web, backend, and AI." },
  { icon: "☁️", title: "Cloud & Infrastructure", desc: "AWS/GCP, CI/CD, monitoring, 24/7 uptime management." },
  { icon: "🔄", title: "Long-Term Support", desc: "We iterate, improve, and scale with you — not just hand off and disappear." },
];

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                Partnership Program
              </p>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Your idea deserves a{" "}
                <span className="text-primary">technical co-founder team.</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8 leading-relaxed">
                Most founders get a freelancer who builds an MVP, then disappears. No documentation, no handover, no one to maintain it. We&apos;re the alternative: a full technical partner that ships and stays.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-colors"
                >
                  Pitch your idea <ArrowRight size={14} />
                </Link>
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold hover:bg-muted transition-colors"
                >
                  Get an estimate first
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BarberzLink proof */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#34E3A0] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#34E3A0]">
                  Live Partnership — Active 4+ Years
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">
                The BarberzLink LLC story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Since 2021 we have been the full technical backbone of BarberzLink LLC — a US-based company building professional platforms for the barber industry. We manage 4+ live systems, 24/7 infrastructure, two mobile apps in the US App Stores, two marketing websites, and an admin platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                That&apos;s what a true technical partnership looks like. Not a one-time project. A long-term relationship.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {[
                  { label: "Live systems managed", value: "4+" },
                  { label: "Years active", value: "4+" },
                  { label: "Uptime monitoring", value: "24/7" },
                  { label: "US states reached", value: "50" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl font-black text-primary">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture visual */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-bold text-foreground text-sm mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Systems we manage for BarberzLink LLC
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Barberz Link App", sub: "iOS + Android" },
                  { label: "CosmoLink App", sub: "iOS + Android" },
                  { label: "BarberzLink Web", sub: "Next.js marketing site" },
                  { label: "CosmoLink Web", sub: "Next.js marketing site" },
                  { label: "Admin Dashboard", sub: "Internal management" },
                  { label: "Cloud Infrastructure", sub: "AWS + Firebase" },
                ].map((sys) => (
                  <div
                    key={sys.label}
                    className="rounded-xl border border-border bg-muted/30 p-3"
                  >
                    <div className="text-sm font-semibold text-foreground">{sys.label}</div>
                    <div className="text-xs text-muted-foreground">{sys.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership model */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">
              What we cover, end to end
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PARTNERSHIP_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">
              Three ways to work together
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Fixed-Price MVP",
                price: "[CONFIRM]",
                timeline: "6–10 weeks",
                desc: "Defined scope, defined price, defined deadline. Best for founders with a validated idea who want to launch fast and learn.",
                highlight: false,
              },
              {
                title: "Dedicated Team",
                price: "[CONFIRM]",
                timeline: "Monthly retainer",
                desc: "A full dedicated squad — engineers, designer, QA. You set the sprint priorities. We deliver every two weeks.",
                highlight: true,
              },
              {
                title: "Product Partnership",
                price: "[CONFIRM]",
                timeline: "Long-term",
                desc: "We become your co-founder tech team. Full ownership of tech strategy, build, and operations. As with BarberzLink LLC.",
                highlight: false,
              },
            ].map((model) => (
              <div
                key={model.title}
                className={`rounded-2xl border p-7 ${model.highlight ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/5" : "border-border bg-card"}`}
              >
                {model.highlight && (
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">Most popular</div>
                )}
                <h3 className="text-xl font-extrabold text-foreground mb-2">{model.title}</h3>
                <div className="text-muted-foreground text-xs mb-4">{model.timeline}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{model.desc}</p>
                <div className="text-sm font-semibold text-muted-foreground">
                  Pricing: <span className="text-foreground">{model.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you own */}
      <section className="py-16 border-b border-border bg-muted/20">
        <div className="container mx-auto px-5 max-w-7xl text-center">
          <h2 className="text-2xl font-extrabold text-foreground mb-6">
            What you own — always, from day one
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "100% of the source code",
              "All cloud accounts",
              "App Store accounts",
              "Domain & DNS",
              "Database & data",
              "IP protection",
              "Full documentation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-semibold border border-border rounded-full px-4 py-2 bg-card"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#34E3A0]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch form CTA */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground mb-4">
            Ready to pitch your idea?
          </h2>
          <p className="text-muted-foreground mb-6">
            Tell us what you&apos;re building. We reply within 24 hours with an honest assessment and next steps.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-colors"
            >
              Pitch your idea <ArrowRight size={16} />
            </Link>
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-base font-semibold hover:bg-muted transition-colors"
            >
              Get an estimate first
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
