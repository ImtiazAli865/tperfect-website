"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type CartLine = {
  id: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  addItem: (id: string, qty?: number) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "tperfect-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Always starts empty to match the server-rendered markup exactly; the
  // real cart (localStorage) is only known on the client, so it's loaded
  // after mount to avoid a hydration mismatch.
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, not a derived-state loop
        setLines(JSON.parse(stored));
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addItem = (id: string, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((line) => line.id === id);
      if (existing) {
        return prev.map((line) => (line.id === id ? { ...line, qty: line.qty + qty } : line));
      }
      return [...prev, { id, qty }];
    });
  };

  const removeItem = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  const setQty = (id: string, qty: number) => {
    if (qty < 1) {
      removeItem(id);
      return;
    }
    setLines((prev) => prev.map((line) => (line.id === id ? { ...line, qty } : line)));
  };

  const clearCart = () => setLines([]);

  const itemCount = lines.reduce((sum, line) => sum + line.qty, 0);

  return (
    <CartContext.Provider value={{ lines, itemCount, addItem, removeItem, setQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
