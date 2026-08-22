"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { getProductById } from "@/lib/products";

export function CartDrawer() {
  const { isDrawerOpen, closeDrawer, lastAdded, lines, itemCount } = useCart();
  const product = lastAdded ? getProductById(lastAdded.id) : undefined;

  useEffect(() => {
    if (!isDrawerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDrawerOpen, closeDrawer]);

  const subtotal = lines.reduce((sum, line) => {
    const lineProduct = getProductById(line.id);
    return sum + (lineProduct ? lineProduct.price * line.qty : 0);
  }, 0);

  return (
    <AnimatePresence>
      {isDrawerOpen && product && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-[60] bg-black/40"
          />
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            role="dialog"
            aria-label="Item added to cart"
            className="fixed right-0 top-0 z-[61] flex h-full w-full max-w-sm flex-col bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent" /> Item added!
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={closeDrawer}
                className="rounded-full p-1.5 text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-surface-muted">
                  <Image src={product.image} alt={product.name} fill sizes="64px" className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-1 text-sm font-semibold text-foreground">{product.name}</p>
                  <p className="mt-1 text-xs text-muted">Qty added: {lastAdded?.qty}</p>
                  <p className="mt-1 text-sm font-bold text-foreground">Rs. {product.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted">
                  Cart subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
                </span>
                <span className="font-semibold text-foreground">Rs. {subtotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-3 border-t border-border px-5 py-4">
              <Link
                href="/checkout"
                onClick={closeDrawer}
                className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-accent to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02]"
              >
                Checkout Now
              </Link>
              <button
                type="button"
                onClick={closeDrawer}
                className="flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
