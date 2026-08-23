"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X, Sun, Moon, Palette as PaletteIcon } from "lucide-react";
import { useTheme, PALETTES } from "@/components/ThemeProvider";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { Logo } from "@/components/Logo";
import { SearchModal } from "@/components/SearchModal";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { theme, toggleTheme, palette, setPalette } = useTheme();
  const { itemCount } = useCart();
  const { count: wishlistCount } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-shadow ${
        scrolled
          ? "border-border bg-background/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="md" priority />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="hidden rounded-full p-2 text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground sm:inline-flex"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="rounded-full p-2 text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground sm:hidden"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="hidden rounded-full p-2 text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground sm:inline-flex"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <div className="relative hidden sm:block">
            <button
              aria-label="Choose color theme"
              onClick={() => setPaletteOpen((v) => !v)}
              className="rounded-full p-2 text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground"
            >
              <PaletteIcon className="h-5 w-5" />
            </button>
            {paletteOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setPaletteOpen(false)} />
                <div className="absolute right-0 top-full z-50 mt-2 w-44 rounded-xl border border-border bg-surface p-2 shadow-lg">
                  <p className="px-2 pb-1.5 pt-1 text-xs font-medium text-muted">Color theme</p>
                  {PALETTES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setPalette(p.id);
                        setPaletteOpen(false);
                      }}
                      className={`flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-surface-muted ${
                        palette === p.id ? "font-semibold text-foreground" : "text-foreground/80"
                      }`}
                    >
                      <span
                        className="h-3.5 w-3.5 shrink-0 rounded-full border border-black/10"
                        style={{ backgroundColor: p.swatch }}
                      />
                      {p.label}
                      {palette === p.id && <span className="ml-auto text-accent">✓</span>}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="relative hidden rounded-full p-2 text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground sm:inline-flex"
          >
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
                {wishlistCount > 9 ? "9+" : wishlistCount}
              </span>
            )}
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative rounded-full p-2 text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </Link>
          <button className="ml-1 hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex">
            Sign in
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full p-2 text-foreground/80 hover:bg-surface-muted lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-surface-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-3 px-3">
            <Link
              href="/wishlist"
              onClick={() => setMobileOpen(false)}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-medium"
            >
              <Heart className="h-4 w-4" /> Wishlist{wishlistCount > 0 ? ` (${wishlistCount})` : ""}
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-medium"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <button className="mt-3 w-full rounded-full bg-foreground py-2.5 text-sm font-medium text-background">
            Sign in
          </button>
        </div>
      )}

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
