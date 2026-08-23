"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, BadgeCheck, Flame } from "lucide-react";
import { ProductImageStack, type StackImage } from "./ProductImageStack";
import { FloatingGapImage, type FloatingGapImageItem } from "./FloatingGapImage";

const HERO_STACK_IMAGES: StackImage[] = [
  { src: "/images/hero-stack/bed-pillow.png", alt: "Gold Bed Pillow" },
  { src: "/images/hero-stack/neck-pillow.png", alt: "Travel Neck Pillow" },
  { src: "/images/hero-stack/bean-bag.png", alt: "Bean Bag Chair" },
  { src: "/images/hero-stack/kitchen-apron.png", alt: "Kitchen Apron" },
  { src: "/images/hero-stack/hair-cap.png", alt: "Hair Drying Cap" },
  { src: "/images/hero-stack/bath-slippers.png", alt: "Bath Slippers" },
];

const GAP_FLOAT_IMAGES: FloatingGapImageItem[] = [
  { src: "/images/hero-stack/hanging-towel-pack-of-4.jpeg", alt: "Hanging Towel Pack of 4" },
  { src: "/images/hero-stack/wash-cloth.png", alt: "Microfiber Wash Cloth Pack" },
  { src: "/images/hero-stack/ball-fiber.png", alt: "Ball Fiber Filling" },
];

const headingContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const headingLine = {
  hidden: { opacity: 0, y: 60, rotateX: -70 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-soft),transparent_55%)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-section-sky),transparent_50%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Floating gap image — cycles through a few products, sits between the text and the product stack */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <FloatingGapImage images={GAP_FLOAT_IMAGES} />
          </motion.div>
        </div>

        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> NEW COLLECTION
          </span>

          <motion.h1
            variants={headingContainer}
            initial="hidden"
            animate="show"
            style={{ perspective: 1000 }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <motion.span
              variants={headingLine}
              style={{ transformOrigin: "50% 100%" }}
              className="text-3d block"
            >
              THE ONLY
            </motion.span>
            <motion.span variants={headingLine} style={{ transformOrigin: "50% 100%" }} className="block">
              <span className="text-3d-blue">T.</span> <span className="text-3d-green">PERFECT</span>
            </motion.span>
            <motion.span
              variants={headingLine}
              style={{ transformOrigin: "50% 100%" }}
              className="text-3d block"
            >
              STORE.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            className="mt-6 max-w-md text-base text-muted sm:text-lg"
          >
            Premium pillows, towels &amp; home essentials. Curated for comfort. Built for every
            home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
            >
              Shop Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-foreground/80 underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Browse Categories
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: stacked product image animation */}
        <div className="relative h-[420px] sm:h-[480px] lg:h-[520px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <ProductImageStack images={HERO_STACK_IMAGES} />
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute right-0 top-0 flex items-center gap-2 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-lg backdrop-blur"
          >
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium text-foreground/90">4.9 — 10K+ Reviews</span>
          </motion.div>

          <div className="absolute bottom-0 right-2 sm:right-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="animate-float-badge-a flex items-center gap-2 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-lg backdrop-blur">
                <BadgeCheck className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-foreground/90">100% Cotton · Premium Quality</span>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="animate-float-badge-b flex items-center gap-2 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-lg backdrop-blur">
                <Flame className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-foreground/90">Just Launched — New Season</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
