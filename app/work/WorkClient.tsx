"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Search } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { FadeIn } from "@/components/ui/MotionPrimitives";

const CATEGORIES = [
  "All",
  "App Development",
  "Web Development",
  "SaaS Product Development",
  "AI Development and Services",
  "Search Engine Optimization",
];

export default function WorkClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const publicProjects = projects.filter((p) => p.status !== "draft");

  const filtered = publicProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      project.categories.includes(selectedCategory);
    const matchesSearch =
      !searchQuery.trim() ||
      project.meta.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.overview.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-14 border-b border-border">
        <div className="container mx-auto px-5 max-w-7xl">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Our work
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-5 max-w-2xl">
              Real platforms. Live in the App Store and Play Store.
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              {publicProjects.length} shipped case studies across mobile apps,
              SaaS platforms, AI systems, and SEO campaigns.
            </p>
          </FadeIn>

          {/* Sticky / Interactive Filter Bar */}
          <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold border transition-all duration-200 ${
                      active
                        ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                        : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-64">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full rounded-full border border-border bg-card pl-9 pr-4 py-2 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animated Grid */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-7xl">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.25) }}
                  whileHover={{ y: -5 }}
                >
                  <Link
                    href={`/work/${project.meta.slug}`}
                    className="group block rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden h-full flex flex-col"
                  >
                    <div className="aspect-[16/10] relative bg-muted overflow-hidden">
                      <Image
                        src={project.images.thumbnail}
                        alt={project.meta.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw,(max-width:1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.categories.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="text-[10px] font-semibold rounded-full px-2.5 py-0.5 border bg-primary/8 text-primary border-primary/20"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h2 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                        {project.meta.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                        {project.overview.outcome}
                      </p>
                      {project.links && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.links.appStore && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold border border-border rounded px-2 py-0.5 text-muted-foreground">
                              <ExternalLink size={10} /> App Store
                            </span>
                          )}
                          {project.links.playStore && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold border border-border rounded px-2 py-0.5 text-muted-foreground">
                              <ExternalLink size={10} /> Play Store
                            </span>
                          )}
                          {project.links.website && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold border border-border rounded px-2 py-0.5 text-muted-foreground">
                              <ExternalLink size={10} /> Live Site
                            </span>
                          )}
                          {project.links.github && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold border border-border rounded px-2 py-0.5 text-muted-foreground">
                              <ExternalLink size={10} /> GitHub
                            </span>
                          )}
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-xs font-semibold text-primary mt-auto pt-2 border-t border-border/50">
                        View case study{" "}
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
