"use client";

import { createContext, useContext, useEffect, useState } from "react";

type WishlistContextValue = {
  ids: string[];
  count: number;
  isWishlisted: (id: string) => boolean;
  toggle: (id: string) => void;
};

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

const STORAGE_KEY = "tperfect-wishlist";

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  // Always starts empty to match the server-rendered markup exactly; the
  // real wishlist (localStorage) is only known on the client, so it's
  // loaded after mount to avoid a hydration mismatch.
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, not a derived-state loop
        setIds(JSON.parse(stored));
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids, hydrated]);

  const toggle = (id: string) => {
    setIds((prev) => (prev.includes(id) ? prev.filter((existing) => existing !== id) : [...prev, id]));
  };

  const isWishlisted = (id: string) => ids.includes(id);

  return (
    <WishlistContext.Provider value={{ ids, count: ids.length, isWishlisted, toggle }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
