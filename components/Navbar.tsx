"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

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
  const { theme, toggleTheme } = useTheme();

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
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/logo/logo-mark.png"
            alt="T.Perfect logo"
            width={40}
            height={34}
            priority
            className="h-9 w-auto rounded-lg sm:h-10"
          />
          <span className="text-xl font-extrabold italic tracking-tight sm:text-2xl">
            <span className="bg-gradient-to-b from-[#5aa7e0] to-[#1a4d85] bg-clip-text text-transparent">
              T.
            </span>
            <span className="bg-gradient-to-b from-[#c3e07a] to-[#5a8f1e] bg-clip-text text-transparent">
              PERFECT
            </span>
          </span>
        </Link>

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
            aria-label="Search"
            className="hidden rounded-full p-2 text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground sm:inline-flex"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="rounded-full p-2 text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            aria-label="Wishlist"
            className="hidden rounded-full p-2 text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground sm:inline-flex"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            aria-label="Cart"
            className="relative rounded-full p-2 text-foreground/80 transition-colors hover:bg-surface-muted hover:text-foreground"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
              0
            </span>
          </button>
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
            <button className="flex flex-1 items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-medium">
              <Heart className="h-4 w-4" /> Wishlist
            </button>
            <button className="flex-1 rounded-full bg-foreground py-2.5 text-sm font-medium text-background">
              Sign in
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
