"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "@/lib/wishlist-context";

export function WishlistButton({
  productId,
  className = "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-muted",
  activeClassName = "border-accent text-accent",
  iconClassName = "h-4 w-4",
  onClick,
}: {
  productId: string;
  className?: string;
  activeClassName?: string;
  iconClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const { isWishlisted, toggle } = useWishlist();
  const active = isWishlisted(productId);

  return (
    <button
      type="button"
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      onClick={(event) => {
        onClick?.(event);
        toggle(productId);
      }}
      className={`${className} ${active ? activeClassName : ""}`}
    >
      <Heart className={`${iconClassName} ${active ? "fill-current" : ""}`} />
    </button>
  );
}
