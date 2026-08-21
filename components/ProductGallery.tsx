"use client";

import Image from "next/image";

export function ProductGallery({ name, image }: { name: string; image: string }) {
  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-surface-muted">
        <Image src={image} alt={name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
    </div>
  );
}
