"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { WishlistButton } from "@/components/WishlistButton";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(100 - (product.price / product.originalPrice) * 100)
      : null;

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-surface-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />

        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-background">
            New
          </span>
        )}
        {discount && (
          <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold text-accent-foreground">
            -{discount}%
          </span>
        )}
        <WishlistButton
          productId={product.id}
          onClick={(e) => e.preventDefault()}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100"
          activeClassName="opacity-100 text-accent"
          iconClassName="h-4 w-4"
        />
      </div>

      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">{product.category}</p>
        <h3 className="mt-1 truncate text-sm font-semibold text-foreground sm:text-base">{product.name}</h3>

        <div className="mt-1.5 flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-foreground">{product.rating}</span>
          <span className="text-xs text-muted">({product.reviews})</span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-base font-bold text-foreground sm:text-lg">Rs. {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted line-through">Rs. {product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
