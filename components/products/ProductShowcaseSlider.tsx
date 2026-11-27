"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Monitor, Smartphone } from "lucide-react";

export default function ProductShowcaseSlider({
  name,
  featuredImages,
  screens,
}: {
  name: string;
  featuredImages: string[];
  screens: string[];
}) {
  const [mode, setMode] = useState<"featured" | "app">("featured");
  const [index, setIndex] = useState(0);

  const activeList = mode === "featured" ? featuredImages : screens;
  const safeIndex = index % activeList.length;

  const switchMode = (newMode: "featured" | "app") => {
    setMode(newMode);
    setIndex(0);
  };

  return (
    <div className="rounded-3xl border border-border bg-card/80 p-4 shadow-2xl">
      {/* Top toggle */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-1 rounded-full bg-muted p-1 border border-border">
          <button
            type="button"
            onClick={() => switchMode("featured")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
              mode === "featured"
                ? "bg-primary text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Monitor size={12} /> Overview
          </button>
          <button
            type="button"
            onClick={() => switchMode("app")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
              mode === "app"
                ? "bg-primary text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Smartphone size={12} /> App Screens ({screens.length})
          </button>
        </div>

        <span className="text-xs font-mono text-muted-foreground">
          {safeIndex + 1} / {activeList.length}
        </span>
      </div>

      {/* Main Viewport */}
      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border bg-[#06070F]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${mode}-${safeIndex}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={activeList[safeIndex]}
              alt={`${name} screenshot ${safeIndex + 1}`}
              fill
              className={mode === "app" ? "object-contain p-2" : "object-cover"}
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </motion.div>
        </AnimatePresence>

        {activeList.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={() =>
                setIndex((p) => (p - 1 + activeList.length) % activeList.length)
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-primary transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={() => setIndex((p) => (p + 1) % activeList.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:bg-primary transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {activeList.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            className={`relative h-12 w-20 shrink-0 rounded-lg overflow-hidden border transition-all ${
              i === safeIndex
                ? "border-primary ring-2 ring-primary/30"
                : "border-border opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={src}
              alt={`${name} thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
