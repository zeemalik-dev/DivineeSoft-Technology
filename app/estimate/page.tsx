import { Metadata } from "next";
import ProjectEstimator from "@/components/ProjectEstimator";
import { buildMetadata } from "@/lib/seo";
import { FadeIn } from "@/components/ui/MotionPrimitives";

export const metadata: Metadata = buildMetadata({
  title: "60-Second Project Estimator",
  description:
    "Tell us what you're building and get an instant price range and timeline estimate in 60 seconds. No sign-up required.",
  path: "/estimate",
  keywords:
    "project cost estimator, app development cost, SaaS pricing, DivineeSoft Technologies",
});

export default function EstimatePage() {
  return (
    <main className="min-h-screen bg-background py-20 pt-32">
      <div className="container mx-auto px-5 max-w-3xl">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Free · No sign-up · 60 seconds
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              Project Estimator
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Answer 5 quick questions and get an instant price range and timeline for your project.
            </p>
          </div>
        </FadeIn>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-xl">
          <ProjectEstimator />
        </div>
      </div>
    </main>
  );
}
