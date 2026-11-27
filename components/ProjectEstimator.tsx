"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Calculator } from "lucide-react";
import {
  BUILD_TYPES,
  FEATURES,
  TIMELINE_LABELS,
  PRICE_BAND_MARGIN,
  type BuildType,
  type Platform,
  type Timeline,
} from "@/lib/data/estimator";
import { openCalModal } from "@/lib/cal";

const STEPS_TOTAL = 5;

export default function ProjectEstimator() {
  const [step, setStep] = useState(1);
  const [buildType, setBuildType] = useState<BuildType | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const [contact, setContact] = useState({ email: "", whatsapp: "", name: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleFeature = (id: string) =>
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

  const togglePlatform = (p: Platform) =>
    setPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );

  // Calculate estimate
  const calcEstimate = () => {
    if (!buildType || !timeline) return null;
    const base = BUILD_TYPES[buildType];
    const featureTotals = FEATURES.filter((f) =>
      selectedFeatures.includes(f.id)
    ).reduce(
      (acc, f) => ({ weeks: acc.weeks + f.weeks, price: acc.price + f.priceUSD }),
      { weeks: 0, price: 0 }
    );
    const platformCount = Math.max(1, platforms.length);
    const surge = { asap: 0.3, "1-3months": 0.1, "3-6months": 0, "6months+": 0 }[timeline];
    const totalWeeks = Math.round((base.baseWeeks + featureTotals.weeks) * (platformCount > 1 ? 1.3 : 1));
    const basePrice = (base.basePrice + featureTotals.price) * (platformCount > 1 ? 1.3 : 1);
    const totalPrice = Math.round(basePrice * (1 + surge));
    const low = Math.round(totalPrice * (1 - PRICE_BAND_MARGIN));
    const high = Math.round(totalPrice * (1 + PRICE_BAND_MARGIN));
    return { weeks: totalWeeks, low, high };
  };

  const estimate = calcEstimate();

  const handleSubmit = async () => {
    setSubmitted(true);
  };

  const canNext = () => {
    if (step === 1) return !!buildType;
    if (step === 2) return selectedFeatures.length > 0;
    if (step === 3) return platforms.length > 0;
    if (step === 4) return !!timeline;
    if (step === 5) return !!contact.email || !!contact.whatsapp;
    return false;
  };

  if (submitted && estimate) {
    return (
      <div className="text-center py-10">
        <CheckCircle2 className="mx-auto text-[#34E3A0] mb-5" size={52} />
        <h3 className="text-2xl font-extrabold text-foreground mb-2">
          Your estimate is ready
        </h3>
        <p className="text-muted-foreground mb-6">
          Based on your inputs, here&apos;s what your project could look like:
        </p>
        <div className="inline-block rounded-2xl border border-primary/30 bg-primary/5 px-10 py-6 mb-6">
          <div className="text-4xl font-black text-primary mb-1">
            ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">
            Estimated range · {estimate.weeks} weeks
          </div>
        </div>
        <p className="text-xs text-muted-foreground mb-6">
          These are estimates based on typical projects. Book a free call to get a precise quote.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => openCalModal()}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
          >
            Book a free call to lock this in <ArrowRight size={14} />
          </button>
          <button
            onClick={() => { setStep(1); setSubmitted(false); setBuildType(null); setSelectedFeatures([]); setPlatforms([]); setTimeline(null); setContact({ email: "", whatsapp: "", name: "" }); }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold hover:bg-muted transition-colors"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex gap-1.5 mb-8">
        {Array.from({ length: STEPS_TOTAL }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${i < step ? "bg-primary" : "bg-border"}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h3 className="text-lg font-bold text-foreground mb-5">
                What are you building?
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {(Object.entries(BUILD_TYPES) as [BuildType, { label: string; baseWeeks: number; basePrice: number }][]).map(([id, type]) => (
                  <button
                    key={id}
                    onClick={() => setBuildType(id)}
                    className={`rounded-xl border p-4 text-left transition-all ${buildType === id
                      ? "border-primary bg-primary/8 shadow-sm shadow-primary/10"
                      : "border-border hover:border-primary/40 hover:bg-muted/50"
                      }`}
                  >
                    <div className="font-semibold text-foreground mb-1">{type.label}</div>
                    <div className="text-xs text-muted-foreground">
                      From {type.baseWeeks} wks · from ${type.basePrice.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h3 className="text-lg font-bold text-foreground mb-5">
                Pick your features <span className="text-muted-foreground font-normal text-sm">(select all that apply)</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {FEATURES.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${selectedFeatures.includes(feature.id)
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/40 text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {feature.label}
                    {selectedFeatures.includes(feature.id) && (
                      <span className="ml-1.5 text-[10px] text-primary/60">+{feature.weeks}wks</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <h3 className="text-lg font-bold text-foreground mb-5">
                What platforms?
              </h3>
              <div className="flex flex-wrap gap-3">
                {(["ios", "android", "web"] as Platform[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => togglePlatform(p)}
                    className={`rounded-xl border px-6 py-4 font-semibold transition-all capitalize ${platforms.includes(p)
                      ? "border-primary bg-primary/8 text-primary"
                      : "border-border hover:border-primary/40 text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {p === "ios" ? "iOS" : p === "android" ? "Android" : "Web"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div>
              <h3 className="text-lg font-bold text-foreground mb-5">
                What&apos;s your timeline?
              </h3>
              <div className="flex flex-col gap-3">
                {(Object.entries(TIMELINE_LABELS) as [Timeline, string][]).map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => setTimeline(id)}
                    className={`rounded-xl border p-4 text-left font-medium transition-all ${timeline === id
                      ? "border-primary bg-primary/8 text-primary"
                      : "border-border hover:border-primary/40 text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5 */}
          {step === 5 && (
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Where should we send the breakdown?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                We&apos;ll also reach out within 24 hours to discuss your project.
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-1.5">Your name</label>
                  <input
                    type="text"
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    placeholder="Zeeshan Malik"
                    className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-1.5">Email</label>
                  <input
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest block mb-1.5">WhatsApp (optional)</label>
                  <input
                    type="tel"
                    value={contact.whatsapp}
                    onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Live estimate preview */}
              {estimate && (
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Your estimate</div>
                  <div className="text-2xl font-black text-foreground">
                    ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{estimate.weeks} weeks estimated</div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Nav */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
        <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {step < STEPS_TOTAL ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canNext()}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 disabled:opacity-40 transition-colors"
          >
            Next <ArrowRight size={16} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canNext()}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 disabled:opacity-40 transition-colors"
          >
            <Calculator size={16} /> Get my estimate
          </button>
        )}
      </div>
    </div>
  );
}
