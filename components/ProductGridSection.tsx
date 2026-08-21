import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/products";

export function ProductGridSection({
  label,
  heading,
  products,
}: {
  label: string;
  heading: string;
  products: Product[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{label}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{heading}</h2>
        </div>
        <Link
          href="/shop"
          className="hidden text-sm font-medium text-foreground underline underline-offset-4 sm:inline-block"
        >
          View All
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link href="/shop" className="text-sm font-medium text-foreground underline underline-offset-4">
          View All
        </Link>
      </div>
    </section>
  );
}
