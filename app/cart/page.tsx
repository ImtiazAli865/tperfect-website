"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/lib/products";

export default function CartPage() {
  const { lines, setQty, removeItem } = useCart();

  const items = lines
    .map((line) => {
      const product = getProductById(line.id);
      if (!product) return null;
      return { product, qty: line.qty };
    })
    .filter((item): item is { product: NonNullable<ReturnType<typeof getProductById>>; qty: number } => item !== null);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-muted">
          <ShoppingBag className="h-7 w-7 text-muted" />
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-foreground">Your cart is empty</h1>
        <p className="mt-2 text-sm text-muted">Browse our collection and add something you love.</p>
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
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Your Cart</h1>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map(({ product, qty }) => (
            <div
              key={product.id}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4"
            >
              <Link href={`/product/${product.id}`} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-surface-muted">
                <Image src={product.image} alt={product.name} fill sizes="80px" className="object-contain p-1.5" />
              </Link>

              <div className="min-w-0 flex-1">
                <Link
                  href={`/product/${product.id}`}
                  className="line-clamp-1 text-sm font-semibold text-foreground hover:underline sm:text-base"
                >
                  {product.name}
                </Link>
                <p className="mt-1 text-xs text-muted">{product.category}</p>
                <p className="mt-1 text-sm font-bold text-foreground">Rs. {product.price.toLocaleString()}</p>
              </div>

              <div className="flex shrink-0 items-center rounded-full border border-border">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty(product.id, qty - 1)}
                  className="flex h-9 w-8 items-center justify-center text-foreground transition-colors hover:bg-surface-muted"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-6 text-center text-sm font-semibold text-foreground">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty(product.id, qty + 1)}
                  className="flex h-9 w-8 items-center justify-center text-foreground transition-colors hover:bg-surface-muted"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>

              <p className="hidden w-24 shrink-0 text-right text-sm font-bold text-foreground sm:block">
                Rs. {(product.price * qty).toLocaleString()}
              </p>

              <button
                type="button"
                aria-label="Remove item"
                onClick={() => removeItem(product.id)}
                className="shrink-0 rounded-full p-2 text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-bold text-foreground">Order Summary</h2>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-muted">Subtotal</span>
            <span className="font-semibold text-foreground">Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-muted">Shipping</span>
            <span className="font-semibold text-accent">Free</span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="font-semibold text-foreground">Total</span>
            <span className="text-lg font-bold text-foreground">Rs. {subtotal.toLocaleString()}</span>
          </div>
          <Link
            href="/checkout"
            className="mt-6 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-accent to-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02]"
          >
            Proceed to Checkout
          </Link>
          <p className="mt-4 text-center text-xs text-muted">Cash on Delivery available across Pakistan.</p>
        </div>
      </div>
    </div>
  );
}
