import { Heart, Leaf, ShieldCheck } from "lucide-react";

const VALUES = [
  {
    icon: Leaf,
    title: "Premium Materials",
    desc: "100% cotton and carefully sourced fabrics in every product we make.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Checked",
    desc: "Every piece is inspected before it reaches your door.",
  },
  {
    icon: Heart,
    title: "Built for Comfort",
    desc: "Designed around real homes and real everyday routines.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Our Story</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Perfect Clean, Better Living.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              T.perfect started with a simple idea: home textiles should feel as good as they
              look. From bed pillows to bath towels, kitchen essentials to baby care, we curate
              every product for comfort, durability, and everyday reliability — so your home
              always feels a little more perfect.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              We work directly with trusted mills to bring premium cotton textiles to homes across
              Pakistan, with Cash on Delivery and fast dispatch on every order.
            </p>
          </div>
          <video
            src="/video/about-story.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="aspect-[4/3] w-full rounded-3xl border border-border object-cover"
          />
        </div>
      </section>

      <section className="bg-surface-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <value.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-semibold text-foreground">{value.title}</p>
                <p className="mt-1.5 text-sm text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
