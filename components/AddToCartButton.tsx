"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function AddToCartButton({ productId }: { productId: string }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(productId, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="flex flex-1 items-center gap-3">
      <div className="flex shrink-0 items-center rounded-full border border-border">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="flex h-12 w-10 items-center justify-center text-foreground transition-colors hover:bg-surface-muted"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="w-6 text-center text-sm font-semibold text-foreground">{qty}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQty((q) => q + 1)}
          className="flex h-12 w-10 items-center justify-center text-foreground transition-colors hover:bg-surface-muted"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02]"
      >
        {added ? (
          <>
            <Check className="h-4 w-4" /> Added to Cart
          </>
        ) : (
          <>
            <ShoppingBag className="h-4 w-4" /> Add to Cart
          </>
        )}
      </button>
    </div>
  );
}
