"use client";

import { motion } from "framer-motion";
import { Heart, Plus, ShoppingBag } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";

function PhoneMock({
  className = "",
  rotate = 0,
  delay = 0,
  children,
}: {
  className?: string;
  rotate?: number;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`w-48 rounded-[2rem] border-4 border-navy-soft bg-surface p-3 shadow-2xl sm:w-56 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function AppPromo() {
  return (
    <section className="overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Shop Comfort, Anytime.</h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-white/70 sm:text-base lg:mx-0">
              The T.perfect mobile app is coming soon. Get early access to new drops, exclusive
              deals, and seamless shopping.
            </p>
            <button className="mt-8 rounded-full bg-gradient-to-r from-accent to-amber-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]">
              Notify Me at Launch
            </button>
          </div>

          <div className="relative flex h-[380px] items-center justify-center sm:h-[440px]">
            <PhoneMock rotate={-8} delay={0.1} className="absolute left-1/2 -translate-x-[125%]">
              <PlaceholderImage label="Product" className="aspect-[3/5] w-full rounded-2xl" />
            </PhoneMock>

            <PhoneMock rotate={0} delay={0} className="relative z-10">
              <div className="space-y-3">
                <PlaceholderImage label="Elite Bed Pillow" className="aspect-square w-full rounded-2xl" />
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs font-semibold text-navy">Rs. 2,200</span>
                  <Heart className="h-4 w-4 text-navy" />
                </div>
                <button className="flex w-full items-center justify-center gap-1.5 rounded-full bg-accent py-2 text-xs font-semibold text-accent-foreground">
                  <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
                </button>
              </div>
            </PhoneMock>

            <PhoneMock rotate={8} delay={0.2} className="absolute left-1/2 translate-x-[25%]">
              <div className="space-y-2">
                <p className="px-1 text-xs font-semibold text-navy">Select Pack Size</p>
                {["Pack of 1", "Pack of 2", "Pack of 4"].map((size, i) => (
                  <div
                    key={size}
                    className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-[11px] ${
                      i === 1 ? "border-accent bg-accent-soft text-accent" : "border-border text-navy/70"
                    }`}
                  >
                    {size}
                    {i === 1 && <Plus className="h-3 w-3" />}
                  </div>
                ))}
              </div>
            </PhoneMock>
          </div>
        </div>
      </div>
    </section>
  );
}
