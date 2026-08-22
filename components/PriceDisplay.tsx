const SIZE_STYLES = {
  xs: {
    wrap: "gap-x-1.5 gap-y-0.5",
    real: "text-sm font-bold",
    was: "text-[11px]",
    badge: "px-1.5 py-0.5 text-[9px]",
  },
  sm: {
    wrap: "gap-x-2 gap-y-1",
    real: "text-base font-bold sm:text-lg",
    was: "text-xs sm:text-sm",
    badge: "px-1.5 py-0.5 text-[10px]",
  },
  lg: {
    wrap: "gap-x-2.5 gap-y-1",
    real: "text-2xl font-bold sm:text-3xl",
    was: "text-sm sm:text-base",
    badge: "px-2 py-0.5 text-[11px]",
  },
  xl: {
    wrap: "gap-x-3 gap-y-1",
    real: "text-3xl font-bold",
    was: "text-lg",
    badge: "px-2.5 py-1 text-xs",
  },
} as const;

export type PriceDisplaySize = keyof typeof SIZE_STYLES;

function formatPrice(value: number) {
  return `Rs. ${Math.round(value).toLocaleString()}`;
}

export function PriceDisplay({
  price,
  size = "sm",
  className = "",
}: {
  /** The real, actual price the customer pays — never modified. */
  price: number;
  size?: PriceDisplaySize;
  className?: string;
}) {
  const wasPrice = price * 2;
  const s = SIZE_STYLES[size];

  return (
    <div className={`flex flex-wrap items-baseline ${s.wrap} ${className}`}>
      <span className={`text-muted line-through ${s.was}`}>{formatPrice(wasPrice)}</span>
      <span className={`text-foreground ${s.real}`}>{formatPrice(price)}</span>
      <span className={`inline-flex items-center rounded-full bg-accent-soft font-semibold text-accent ${s.badge}`}>
        50% OFF
      </span>
    </div>
  );
}
