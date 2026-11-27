import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/data/industries";
import { projects } from "@/lib/data/projects";
import ProjectEstimator from "@/components/ProjectEstimator";

export async function generateStaticParams() {
  return industries.map((ind) => ({ industry: ind.slug }));
}

import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const ind = industries.find((i) => i.slug === industry);
  if (!ind) return {};
  return buildMetadata({
    title: `${ind.name} Software & App Development`,
    description: ind.subheadline,
    path: `/for/${ind.slug}`,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const ind = industries.find((i) => i.slug === industry);
  if (!ind) notFound();

  const caseStudy = projects.find((p) => p.id === ind.caseStudySlug);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container mx-auto px-5 max-w-7xl max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            {ind.name}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            {ind.headline}
          </h1>
          <p className="text-muted-foreground text-lg mb-8">{ind.subheadline}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-colors"
          >
            Start a project in {ind.name} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-foreground mb-6">
                The problems we hear from {ind.name} businesses
              </h2>
              <ul className="space-y-4">
                {ind.painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full border-2 border-destructive/60 flex items-center justify-center shrink-0 text-xs text-destructive font-bold">
                      ✕
                    </span>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-foreground mb-6">
                What we build for {ind.name}
              </h2>
              <ul className="space-y-4">
                {ind.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-[#34E3A0]/15 border border-[#34E3A0]/30 flex items-center justify-center shrink-0 text-xs text-[#34E3A0] font-bold">
                      ✓
                    </span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case study proof */}
      {caseStudy && (
        <section className="py-16 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-5 max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Proof we know this industry
            </p>
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.categories.slice(0, 2).map((cat) => (
                  <span key={cat} className="text-[10px] font-semibold bg-primary/8 text-primary border border-primary/20 rounded-full px-2.5 py-0.5">
                    {cat}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-3">{caseStudy.meta.title}</h3>
              <p className="text-muted-foreground mb-5">{caseStudy.overview.outcome}</p>
              <Link
                href={`/work/${caseStudy.meta.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                See full case study <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Pre-filled estimator */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-5 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-foreground mb-3">
              How much would it cost for your {ind.name} project?
            </h2>
            <p className="text-muted-foreground">
              Get an instant estimate — takes 60 seconds.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-xl">
            <ProjectEstimator />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-foreground mb-4">
            Ready to build for {ind.name}?
          </h2>
          <p className="text-muted-foreground mb-6">
            Tell us about your project and we reply within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-colors"
          >
            Start the conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
