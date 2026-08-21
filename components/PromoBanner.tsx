import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(224,123,63,0.2),transparent_55%)]" />
        <div className="relative">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
            Limited Time
          </span>
          <h2 className="mx-auto mt-6 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            New Season. New Comfort.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/70 sm:text-base">
            Explore the latest home essentials from T.perfect. New arrivals every week.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-amber-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
            >
              Shop New Arrivals <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
