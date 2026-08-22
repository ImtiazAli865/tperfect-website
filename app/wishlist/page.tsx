"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, X } from "lucide-react";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/lib/products";
import { PriceDisplay } from "@/components/PriceDisplay";

export default function WishlistPage() {
  const { ids, toggle } = useWishlist();
  const { addItem } = useCart();

  const products = ids
    .map((id) => getProductById(id))
    .filter((product): product is NonNullable<ReturnType<typeof getProductById>> => product !== undefined);

  if (products.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-muted">
          <Heart className="h-7 w-7 text-muted" />
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-foreground">Your wishlist is empty</h1>
        <p className="mt-2 text-sm text-muted">Save products you love to find them here later.</p>
        <Link
          href="/shop"
          className="mt-8 rounded-full bg-gradient-to-r from-accent to-amber-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02]"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Your Wishlist</h1>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
            <Link href={`/product/${product.id}`} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-surface-muted">
              <Image src={product.image} alt={product.name} fill sizes="80px" className="object-contain p-1.5" />
            </Link>

            <div className="min-w-0 flex-1">
              <Link
                href={`/product/${product.id}`}
                className="line-clamp-1 text-sm font-semibold text-foreground hover:underline"
              >
                {product.name}
              </Link>
              <PriceDisplay price={product.price} size="xs" className="mt-1" />
              <button
                type="button"
                onClick={() => addItem(product.id)}
                className="mt-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Add to Cart
              </button>
            </div>

            <button
              type="button"
              aria-label="Remove from wishlist"
              onClick={() => toggle(product.id)}
              className="shrink-0 self-start rounded-full p-2 text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
