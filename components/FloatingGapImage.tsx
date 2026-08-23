"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

export type FloatingGapImageItem = {
  src: string | StaticImageData;
  alt: string;
};

type FloatingGapImageProps = {
  images: FloatingGapImageItem[];
  /** Milliseconds between image changes. */
  intervalMs?: number;
  className?: string;
};

export function FloatingGapImage({ images, intervalMs = 2600, className = "" }: FloatingGapImageProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div className={`animate-float-towel w-[200px] rounded-2xl border border-border bg-white p-3 shadow-xl ${className}`}>
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        {images.map((image, i) => (
          <Image
            key={typeof image.src === "string" ? image.src : i}
            src={image.src}
            alt={image.alt}
            fill
            sizes="200px"
            className={`object-contain transition-opacity duration-700 ease-in-out ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
      </div>
    </div>
  );
}
