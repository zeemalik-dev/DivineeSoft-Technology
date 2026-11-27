import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-5 max-w-lg">
        {/* Terminal 404 */}
        <div className="inline-block rounded-2xl border border-border bg-card p-6 mb-10 font-terminal text-sm text-left w-full">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-xs text-muted-foreground">~/divineesoft</span>
          </div>
          <p className="text-muted-foreground">
            <span className="text-[#34E3A0]">→</span> cd{" "}
            <span className="text-blue-400">this-page</span>
          </p>
          <p className="text-red-400 mt-1">
            bash: this-page: No such file or directory
          </p>
          <p className="text-muted-foreground mt-2">
            <span className="text-[#34E3A0]">→</span> echo $?
          </p>
          <p className="text-foreground">404</p>
        </div>

        <h1 className="text-5xl font-extrabold text-foreground mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Try one of these instead.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
          >
            See our work <ArrowRight size={14} />
          </Link>
          <Link
            href="/estimate"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
          >
            <Calculator size={14} /> Project Estimator
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-muted transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
