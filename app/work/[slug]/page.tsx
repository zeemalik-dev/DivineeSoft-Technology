import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";

export async function generateStaticParams() {
  return projects
    .filter((p) => p.status !== "draft")
    .map((p) => ({ slug: p.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.meta.slug === slug);
  if (!project) return {};
  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.meta.slug === slug);
  if (!project || project.status === "draft") notFound();

  const otherProjects = projects
    .filter((p) => p.id !== project.id && p.status !== "draft")
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            <div>
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] font-semibold rounded-full px-3 py-1 border bg-primary/8 text-primary border-primary/20"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
                {project.meta.title}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mb-6">
                {project.overview.summary}
              </p>
              {/* Store links */}
              {project.links && (
                <div className="flex flex-wrap gap-3">
                  {project.links.appStore && (
                    <a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={14} /> App Store
                    </a>
                  )}
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
                    >
                      <ExternalLink size={14} /> Play Store
                    </a>
                  )}
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
                    >
                      <ExternalLink size={14} /> Live site
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
                    >
                      <ExternalLink size={14} /> GitHub Repo
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* At-a-glance sidebar */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold text-foreground text-sm uppercase tracking-widest mb-4">
                At a Glance
              </h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Client</dt>
                  <dd className="font-medium text-foreground">{project.client.name}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Services</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {project.services.map((s) => (
                      <span key={s} className="text-[10px] font-medium bg-muted border border-border rounded px-2 py-0.5 text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="aspect-[16/7] relative rounded-2xl overflow-hidden border border-border bg-muted">
            <Image
              src={project.images.cover}
              alt={project.meta.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Case study body */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-4xl space-y-14">
          {/* Problem */}
          <div>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed text-base">{project.overview.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">What We Built</h2>
            <p className="text-muted-foreground leading-relaxed text-base">{project.overview.solution}</p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">Results</h2>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-foreground leading-relaxed">{project.overview.outcome}</p>
            </div>
          </div>

          {/* Value */}
          <div>
            <h2 className="text-2xl font-extrabold text-foreground mb-4">The Takeaway</h2>
            <p className="text-muted-foreground leading-relaxed">{project.value}</p>
          </div>

          {/* Screenshot Gallery (if available) */}
          {project.images.gallery && project.images.gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-extrabold text-foreground mb-6">Product Screenshots</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {project.images.gallery.map((src, idx) => (
                  <div
                    key={src}
                    className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-border bg-[#06070F] shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`${project.meta.title} screen ${idx + 1}`}
                      fill
                      className="object-contain p-1.5"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-5 max-w-3xl text-center">
          <h3 className="text-2xl font-extrabold text-foreground mb-3">
            Build something like this
          </h3>
          <p className="text-muted-foreground mb-6">
            Tell us about your project and we&apos;ll get back within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-colors"
          >
            Start the conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* More work */}
      {otherProjects.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-5 max-w-7xl">
            <h3 className="text-xl font-extrabold text-foreground mb-8">More work</h3>
            <div className="grid sm:grid-cols-3 gap-5">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/work/${p.meta.slug}`}
                  className="group rounded-xl border border-border bg-card hover:border-primary/40 overflow-hidden transition-all"
                >
                  <div className="aspect-[16/9] relative bg-muted">
                    <Image
                      src={p.images.thumbnail}
                      alt={p.meta.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                      {p.meta.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
