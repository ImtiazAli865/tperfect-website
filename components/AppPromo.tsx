"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function AppPromo() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-section-sky to-white py-20 text-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                transformPerspective: 600,
                textShadow: "0 2px 16px rgba(28,35,49,0.12)",
              }}
              className="text-shimmer animate-float-slow inline-block text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Shop Comfort, Anytime.
            </motion.h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted sm:text-base lg:mx-0">
              Shop premium bedding, towels &amp; home essentials — all in one place. Fast delivery
              across Pakistan, with Cash on Delivery on every order.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-accent to-accent-hover px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
            >
              Shop Now
            </Link>
          </div>

          <div className="relative flex h-[560px] items-center justify-center sm:h-[680px]">
            {/* Background decoration */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-[65%] -translate-y-[60%] rounded-full bg-accent/25 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-[15%] translate-y-[45%] rounded-full bg-section-sage blur-3xl sm:h-72 sm:w-72" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 translate-x-[55%] -translate-y-[65%] rounded-full bg-section-sky blur-3xl" />

            {/* Floating shadow */}
            <div className="absolute bottom-6 h-8 w-56 rounded-full bg-foreground/15 blur-2xl sm:w-72" />

            {/* Phone mockup — the video already renders a complete phone-frame product shot,
                so this wraps it in a single rounded card instead of a second device bezel. */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -4, rotateX: 4, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4, rotateX: 4, rotateY: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ transformPerspective: 1200 }}
              className="relative aspect-[4/5] w-[240px] overflow-hidden rounded-[2.5rem] shadow-2xl min-[400px]:w-[280px] sm:w-[440px]"
            >
              <video
                src="/video/shopping-journey.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
