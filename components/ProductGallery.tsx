"use client";

import { useState } from "react";
import Image from "next/image";

export function ProductGallery({ name, images }: { name: string; images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-surface-muted">
        <Image
          src={active}
          alt={name}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain p-4"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`${name} — image ${i + 1}`}
              aria-current={i === activeIndex}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-surface-muted transition-colors ${
                i === activeIndex ? "border-accent" : "border-border hover:border-accent/50"
              }`}
            >
              <Image src={img} alt={`${name} — image ${i + 1}`} fill sizes="80px" className="object-contain p-1" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
