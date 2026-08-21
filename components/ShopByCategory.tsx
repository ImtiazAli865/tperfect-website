import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/categories";

export function ShopByCategory() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Explore</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Shop by Category</h2>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-muted"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-semibold text-white">{category.name}</p>
              {category.note && <p className="mt-0.5 text-xs text-white/70">{category.note}</p>}
              <p className="mt-1 text-xs font-medium text-white/60">{category.count} items</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
