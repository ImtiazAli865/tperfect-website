const ITEMS = [
  "Free Shipping Over Rs.3000",
  "Premium Cotton Quality",
  "10K+ Happy Customers",
  "Returns Within 7 Days",
  "Latest Arrivals Weekly",
  "100% Authentic",
  "Cash on Delivery",
];

export function Marquee() {
  const content = ITEMS.join(" • ") + " • ";

  return (
    <section className="overflow-hidden border-y border-border bg-accent py-3">
      <div className="flex w-max whitespace-nowrap">
        <span className="animate-marquee flex shrink-0">
          <span className="px-3 text-sm font-medium text-accent-foreground">{content}</span>
          <span className="px-3 text-sm font-medium text-accent-foreground">{content}</span>
        </span>
      </div>
    </section>
  );
}
