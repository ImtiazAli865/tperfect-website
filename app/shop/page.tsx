"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { categories } from "@/lib/categories";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(
    () => (activeCategory ? products.filter((p) => p.categorySlug === activeCategory) : products),
    [activeCategory]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Shop</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">All Products</h1>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted sm:text-base">
          Browse our full range of premium home textiles — pillows, towels, kitchen essentials and more.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === null
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border text-foreground hover:bg-surface-muted"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => setActiveCategory(category.slug)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category.slug
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-foreground hover:bg-surface-muted"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted">No products found in this category yet.</p>
      )}
    </div>
  );
}
