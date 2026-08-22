"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

export type StackImage = {
  src: string | StaticImageData;
  alt: string;
};

type ProductImageStackProps = {
  images: StackImage[];
  /** Milliseconds between auto-advances. */
  intervalMs?: number;
  className?: string;
};

const LAYER_STYLES = [
  { scale: 1, y: 0, opacity: 1, z: 30, blur: 0 },
  { scale: 0.92, y: -16, opacity: 0.55, z: 20, blur: 0 },
  { scale: 0.85, y: -28, opacity: 0.28, z: 10, blur: 0 },
] as const;

export function ProductImageStack({ images, intervalMs = 2300, className = "" }: ProductImageStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [paused, images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div
      className={`relative mx-auto h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((image, i) => {
        const offset = (i - activeIndex + images.length) % images.length;
        if (offset >= LAYER_STYLES.length) {
          return null;
        }
        const layer = LAYER_STYLES[offset];
        return (
          <div
            key={typeof image.src === "string" ? image.src : i}
            className="absolute inset-0 rounded-3xl border border-white/10 bg-white shadow-2xl transition-[transform,opacity] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateY(${layer.y}px) scale(${layer.scale})`,
              opacity: layer.opacity,
              zIndex: layer.z,
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl p-4 sm:p-6">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 320px, 280px"
                className="object-contain"
                priority={offset === 0}
              />
            </div>
          </div>
        );
      })}

      {/* Dot indicators */}
      <div className="absolute -bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2">
        {images.map((image, i) => (
          <button
            key={typeof image.src === "string" ? image.src : i}
            type="button"
            aria-label={`Show ${image.alt}`}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-5 bg-accent" : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
