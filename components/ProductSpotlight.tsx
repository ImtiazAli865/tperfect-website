"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { products } from "@/lib/products";
import { PriceDisplay } from "@/components/PriceDisplay";

const spotlightItems = products.slice(0, 6);

export function ProductSpotlight() {
  const [index, setIndex] = useState(0);
  const product = spotlightItems[index];

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + spotlightItems.length) % spotlightItems.length);
  };

  return (
    <section className="bg-surface-muted py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Trending Now</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Hottest Picks This Week
        </h2>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-surface-muted shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-6"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">{product.category}</span>
            <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">{product.name}</h3>
            <p className="mt-3 max-w-md text-sm text-muted sm:text-base">
              {product.description.slice(0, 130)}...
            </p>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-border"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <PriceDisplay price={product.price} size="lg" className="mt-4" />

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={`/product/${product.id}`}
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Shop Now
              </Link>
              <Link href="/shop" className="text-sm font-medium text-foreground underline underline-offset-4">
                View All
              </Link>
            </div>

            {/* Thumbnails */}
            <div className="-mx-1 mt-8 flex items-center gap-3 overflow-x-auto px-1 pb-1">
              {spotlightItems.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => setIndex(i)}
                  aria-label={item.name}
                  className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 bg-surface-muted transition-colors ${
                    i === index ? "border-accent" : "border-transparent"
                  }`}
                >
                  <Image src={item.image} alt={item.name} fill sizes="56px" className="object-contain p-1" />
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-medium text-muted">
                {String(index + 1).padStart(2, "0")}——{String(spotlightItems.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
