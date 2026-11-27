"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ownProducts } from "@/lib/data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

function ProductMiniSlider({
  slides,
  name,
}: {
  slides: string[];
  name: string;
}) {
  const [idx, setIdx] = useState(0);
  const current = slides[idx % slides.length];

  return (
    <div className="relative aspect-[16/9] bg-[#0A0B10] overflow-hidden group/img">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0.4, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.4 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={current}
            alt={name}
            fill
            className={idx === 0 ? "object-cover" : "object-contain p-2 bg-[#080A12]"}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.preventDefault();
              setIdx((p) => (p - 1 + slides.length) % slides.length);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 hover:bg-primary transition-all"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.preventDefault();
              setIdx((p) => (p + 1) % slides.length);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 hover:bg-primary transition-all"
          >
            <ChevronRight size={15} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 rounded-full bg-black/55 px-2.5 py-1 backdrop-blur-sm">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIdx(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-5 bg-[#34E3A0]" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function LiveProductsStrip() {
  return (
    <section className="py-20 bg-[#06070F] border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#34E3A0] mb-3">
            Our Own Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            We don&apos;t just build for clients.{" "}
            <span className="text-primary">We run these two platforms.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            BarberzHub and GYM Pro are owned, operated, and scaled by our in-house team every single day.
          </p>
        </motion.div>

        {/* 2 Own Product Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {ownProducts.map((product, i) => {
            const sliderImages = [
              ...product.featuredImages,
              ...product.screens.slice(0, 4),
            ];
            return (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={i}
                variants={fadeUp}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col shadow-2xl"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-black/70 backdrop-blur-md text-[#34E3A0] border border-[#34E3A0]/40 rounded-full px-3 py-1">
                    {product.badge}
                  </span>
                </div>

                {/* Interactive Image / Screenshot Slider */}
                <ProductMiniSlider slides={sliderImages} name={product.name} />

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-white font-extrabold text-2xl mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#34E3A0] text-xs font-semibold uppercase tracking-wider mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                    {product.description}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] font-medium bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/80"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs font-semibold py-3 px-5 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink size={13} />
                      Open Live Product
                    </a>
                    <Link
                      href="/products"
                      className="flex-1 text-center text-xs font-semibold py-3 px-5 rounded-full border border-white/15 text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-1.5"
                    >
                      Inspect All Screens <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
