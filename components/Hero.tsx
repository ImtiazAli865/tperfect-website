"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, BadgeCheck, Flame } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,123,63,0.18),transparent_55%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> NEW COLLECTION
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            THE ONLY
            <br />
            <span className="bg-gradient-to-r from-accent via-orange-300 to-amber-200 bg-clip-text text-transparent">
              T. PERFECT
            </span>
            <br />
            STORE.
          </h1>

          <p className="mt-6 max-w-md text-base text-white/70 sm:text-lg">
            Premium pillows, towels &amp; home essentials. Curated for comfort. Built for every
            home.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-amber-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
            >
              Shop Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-white/80 underline underline-offset-4 transition-colors hover:text-white"
            >
              Browse Categories
            </Link>
          </div>
        </motion.div>

        {/* Right: floating images */}
        <div className="relative h-[420px] sm:h-[480px] lg:h-[520px]">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            animate={{ opacity: 1, y: [0, -14, 0], rotate: -6 }}
            transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.6 } }}
            className="absolute left-2 top-4 w-40 sm:w-52 lg:w-60"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/images/bed-pillows/elite-bed-pillow-1.png"
                alt="Elite Bed Pillow"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 5 }}
            animate={{ opacity: 1, y: [0, 16, 0], rotate: 5 }}
            transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }, opacity: { duration: 0.6, delay: 0.1 } }}
            className="absolute right-4 top-0 w-36 sm:w-48 lg:w-56"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/images/bath-towels/hanging-towel-pack-of-5-1.png"
                alt="Hanging Towel Set"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -3 }}
            animate={{ opacity: 1, y: [0, -10, 0], rotate: -3 }}
            transition={{ y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }, opacity: { duration: 0.6, delay: 0.2 } }}
            className="absolute bottom-4 left-16 w-32 sm:w-44 lg:w-52"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/images/wash-cloths/wash-cloth-6pack-pack-of-2-1.png"
                alt="Microfiber Wash Cloth Set"
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute right-0 top-24 flex items-center gap-2 rounded-2xl border border-white/10 bg-navy-soft/90 px-4 py-3 shadow-xl backdrop-blur"
          >
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium text-white/90">4.9 — 10K+ Reviews</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute bottom-24 right-2 flex items-center gap-2 rounded-2xl border border-white/10 bg-navy-soft/90 px-4 py-3 shadow-xl backdrop-blur sm:right-6"
          >
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-white/90">100% Cotton · Premium Quality</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-0 left-0 flex items-center gap-2 rounded-2xl border border-white/10 bg-navy-soft/90 px-4 py-3 shadow-xl backdrop-blur"
          >
            <Flame className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-white/90">Just Launched — New Season</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
