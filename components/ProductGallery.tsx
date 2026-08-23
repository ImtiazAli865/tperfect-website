"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/products";

export function ProductGallery({
  name,
  images,
  gallery,
}: {
  name: string;
  images: string[];
  gallery?: GalleryItem[];
}) {
  const items: GalleryItem[] = gallery ?? images.map((src) => ({ type: "image", src }));
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-surface-muted">
        {active.type === "animation" ? (
          <iframe
            src={active.src}
            title={name}
            loading="lazy"
            scrolling="no"
            className="h-full w-full border-0"
          />
        ) : (
          <Image
            src={active.src}
            alt={name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-4"
            priority
          />
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {items.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`${name} — image ${i + 1}`}
              aria-current={i === activeIndex}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-surface-muted transition-colors ${
                i === activeIndex ? "border-accent" : "border-border hover:border-accent/50"
              }`}
            >
              <Image
                src={item.type === "animation" ? item.poster : item.src}
                alt={`${name} — image ${i + 1}`}
                fill
                sizes="80px"
                className="object-contain p-1"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
