"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, Star } from "lucide-react";
import { products } from "@/lib/products";

const MAX_RESULTS = 8;

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 50);
    return () => {
      clearTimeout(timer);
      setQuery("");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 6);
    return products
      .filter((p) => {
        const haystack = [p.name, p.category, p.type, ...p.tags].join(" ").toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, MAX_RESULTS);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="search-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-black/40"
          />
          <motion.div
            key="search-panel"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-label="Search products"
            className="fixed left-1/2 top-20 z-[71] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-muted" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pillows, towels, wash cloths..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
              />
              <button
                type="button"
                aria-label="Close search"
                onClick={onClose}
                className="shrink-0 rounded-full p-1.5 text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {!query.trim() && (
                <p className="px-3 pb-2 pt-1 text-xs font-medium uppercase tracking-wide text-muted">
                  Popular products
                </p>
              )}

              {results.length === 0 ? (
                <p className="px-3 py-8 text-center text-sm text-muted">
                  No products found for &ldquo;{query}&rdquo;.
                </p>
              ) : (
                <ul className="space-y-1">
                  {results.map((product) => (
                    <li key={product.id}>
                      <Link
                        href={`/product/${product.id}`}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-surface-muted"
                      >
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-surface-muted">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="48px"
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="line-clamp-1 text-sm font-medium text-foreground">{product.name}</p>
                          <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted">
                            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                            {product.rating}
                            <span>·</span>
                            {product.category}
                          </div>
                        </div>
                        <span className="shrink-0 text-sm font-semibold text-foreground">
                          Rs. {product.price.toLocaleString()}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
