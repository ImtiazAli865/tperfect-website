const STATS = [
  { value: "50+", label: "Products" },
  { value: "10K+", label: "Happy Customers" },
  { value: "4.9", label: "Avg Rating" },
];

export function StatsBar() {
  return (
    <section className="bg-section-cream text-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-border px-4 py-10 sm:px-6 lg:px-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
