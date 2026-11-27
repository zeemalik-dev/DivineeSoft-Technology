import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ownProducts } from "@/lib/data/products";
import { buildMetadata } from "@/lib/seo";
import { FadeIn } from "@/components/ui/MotionPrimitives";
import ProductShowcaseSlider from "@/components/products/ProductShowcaseSlider";

export const metadata: Metadata = buildMetadata({
  title: "Product Lab",
  description:
    "BarberzHub (barberzhub.com) and GYM Pro (gym.divineesoft.com) — our two live in-house platforms built and operated by DivineeSoft Technologies.",
  path: "/products",
  keywords:
    "BarberzHub, GYM Pro, Gym Management System, live SaaS products, DivineeSoft Technologies",
});

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#06070F] border-b border-border">
        <div className="container mx-auto px-5 max-w-7xl text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-widest text-[#34E3A0] mb-3">
              Product Lab · Our 2 Own Platforms
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
              We run these products every day.
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              BarberzHub and GYM Pro are built, owned, and operated by DivineeSoft Technologies. Browse every live screen below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-5 max-w-7xl space-y-24">
          {ownProducts.map((product, i) => (
            <FadeIn key={product.id} delay={0.05}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Interactive Slider */}
                <div className={`${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <ProductShowcaseSlider
                    name={product.name}
                    featuredImages={product.featuredImages}
                    screens={product.screens}
                  />
                </div>

                {/* Content */}
                <div
                  className={`${
                    i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest bg-[#34E3A0]/10 text-[#34E3A0] border border-[#34E3A0]/20 rounded-full px-3 py-1 inline-block mb-4">
                    {product.badge}
                  </span>
                  <h2 className="text-3xl font-extrabold text-foreground mb-2">
                    {product.name}
                  </h2>
                  <p className="text-primary font-semibold mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <ul className="space-y-2.5 mb-7">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-muted-foreground mb-6">
                    <strong className="text-foreground">
                      Who it&apos;s for:
                    </strong>{" "}
                    {product.whoItsFor}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 shadow-md shadow-primary/20 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Open Live Product
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
                    >
                      Build something like this <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Demo request CTA */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <FadeIn>
          <div className="container mx-auto px-5 max-w-3xl text-center">
            <h3 className="text-2xl font-extrabold text-foreground mb-3">
              Want to try a live demo account?
            </h3>
            <p className="text-muted-foreground mb-6">
              Request access to GYM Pro or BarberzHub and test the full platform firsthand.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-colors"
            >
              Request a demo account
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
