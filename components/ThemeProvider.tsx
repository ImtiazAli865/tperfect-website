"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
export type Palette = "gold" | "ocean" | "sage" | "burgundy" | "slate";

export const PALETTES: { id: Palette; label: string; swatch: string }[] = [
  { id: "gold", label: "Gold", swatch: "#a5813c" },
  { id: "ocean", label: "Ocean", swatch: "#2f7a78" },
  { id: "slate", label: "Slate", swatch: "#3a5a8c" },
  { id: "sage", label: "Sage", swatch: "#5f7a52" },
  { id: "burgundy", label: "Burgundy", swatch: "#7c2d3a" },
];

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  palette: Palette;
  setPalette: (palette: Palette) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always starts "light"/"gold" to match the server-rendered markup exactly; the
  // real preference (localStorage / OS setting) is only known on the client,
  // so it's applied after mount to avoid a hydration mismatch.
  const [theme, setTheme] = useState<Theme>("light");
  const [palette, setPalette] = useState<Palette>("gold");

  useEffect(() => {
    const stored = window.localStorage.getItem("tperfect-theme") as Theme | null;
    const preferred = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (preferred !== "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage/matchMedia on mount, not a derived-state loop
      setTheme(preferred);
    }

    const storedPalette = window.localStorage.getItem("tperfect-palette") as Palette | null;
    if (storedPalette && PALETTES.some((p) => p.id === storedPalette)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount
      setPalette(storedPalette);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("tperfect-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-palette", palette);
    window.localStorage.setItem("tperfect-palette", palette);
  }, [palette]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, palette, setPalette }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
