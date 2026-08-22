"use client";

import { motion } from "framer-motion";

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

          <div className="relative flex h-[620px] items-center justify-center sm:h-[720px]">
            {/* Background decoration */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-[65%] -translate-y-[60%] rounded-full bg-accent/30 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-[15%] translate-y-[45%] rounded-full bg-navy-soft/50 blur-3xl sm:h-72 sm:w-72" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 translate-x-[55%] -translate-y-[65%] rounded-full bg-amber-500/20 blur-3xl" />

            {/* Floating shadow */}
            <div className="absolute bottom-8 h-8 w-52 rounded-full bg-black/50 blur-2xl sm:w-60" />

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -4, rotateX: 4, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: -4, rotateX: 4, rotateY: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ transformPerspective: 1200 }}
              className="relative w-[21rem] sm:w-[24rem]"
            >
              <div className="relative aspect-[9/16] rounded-[3rem] border-[6px] border-neutral-900 bg-neutral-900 p-2 shadow-2xl">
                {/* Side buttons */}
                <div className="absolute -left-[6px] top-24 h-8 w-[6px] rounded-l-sm bg-neutral-800" />
                <div className="absolute -left-[6px] top-36 h-12 w-[6px] rounded-l-sm bg-neutral-800" />
                <div className="absolute -right-[6px] top-28 h-16 w-[6px] rounded-r-sm bg-neutral-800" />

                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-black">
                  <video
                    src="/video/app-promo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  {/* Notch */}
                  <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-900" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
