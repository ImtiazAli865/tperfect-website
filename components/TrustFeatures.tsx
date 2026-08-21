import { Truck, RotateCcw, ShieldCheck, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "Orders over Rs.3000",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "7-day hassle-free",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    desc: "Every piece checked",
  },
  {
    icon: Zap,
    title: "Fast Dispatch",
    desc: "Ships within 24 hours",
  },
];

export function TrustFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md sm:items-start sm:text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <feature.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground">{feature.title}</p>
              <p className="mt-0.5 text-sm text-muted">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
