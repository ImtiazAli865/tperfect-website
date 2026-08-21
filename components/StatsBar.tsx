const STATS = [
  { value: "50+", label: "Products" },
  { value: "10K+", label: "Happy Customers" },
  { value: "4.9", label: "Avg Rating" },
];

export function StatsBar() {
  return (
    <section className="bg-navy-soft text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/10 px-4 py-10 sm:px-6 lg:px-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
