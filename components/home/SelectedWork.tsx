"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data/projects";

const FEATURED_SLUGS = [
  "kutagjej",
  "ai-dispatching-app",
  "petroqwiq",
  "wilan-learn",
  "escroc-app",
  "yopii-app",
  "barberz-link",
  "cosmo-link",
  "sariea",
];

const featured = FEATURED_SLUGS.map((slug) =>
  projects.find((p) => p.id === slug)
).filter(Boolean) as (typeof projects)[0][];

const CATEGORY_COLORS: Record<string, string> = {
  "App Development": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Web Development": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "AI Development and Services": "bg-[#34E3A0]/10 text-[#34E3A0] border-[#34E3A0]/20",
  "Search Engine Optimization": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "SaaS Product Development": "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

export default function SelectedWork() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4200, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setScrollSnaps(emblaApi.scrollSnapList());
    };
    const initTimer = setTimeout(onSelect, 0);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      clearTimeout(initTimer);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-muted/30 dark:bg-[#0A0B10] border-y border-border overflow-hidden">
      <div className="container mx-auto px-5 max-w-7xl">
        {/* Header + Carousel Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Selected work
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Real platforms. Live in the App Stores.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous case study"
                className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next case study"
                className="h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-semibold text-primary hover:border-primary/40 transition-colors"
            >
              See all work <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Embla Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5">
            {featured.map((project) => (
              <div
                key={project.id}
                className="pl-5 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <Link
                  href={`/work/${project.meta.slug}`}
                  className="group rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden h-full flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="aspect-[16/10] relative bg-muted overflow-hidden">
                    <Image
                      src={project.images.thumbnail}
                      alt={project.meta.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw,(max-width:1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.categories.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className={`text-[10px] font-semibold rounded-full px-2.5 py-0.5 border ${
                            CATEGORY_COLORS[cat] ??
                            "bg-primary/10 text-primary border-primary/20"
                          }`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.meta.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                      {project.overview.outcome}
                    </p>

                    {project.links && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.links.appStore && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider border border-border rounded px-2 py-1 text-muted-foreground">
                            <ExternalLink size={10} /> App Store
                          </span>
                        )}
                        {project.links.playStore && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider border border-border rounded px-2 py-1 text-muted-foreground">
                            <ExternalLink size={10} /> Play Store
                          </span>
                        )}
                        {project.links.website && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider border border-border rounded px-2 py-1 text-muted-foreground">
                            <ExternalLink size={10} /> Live Site
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center gap-1 text-xs font-semibold text-primary mt-auto pt-2 border-t border-border/60">
                      View case study
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === selectedIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
