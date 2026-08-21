import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) notFound();

  const items = products.filter((p) => p.categorySlug === slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Category</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{category.name}</h1>
        {category.note && <p className="mt-2 text-sm text-muted">{category.note}</p>}
        <p className="mt-1 text-sm text-muted">{category.count} items</p>
      </div>

      {items.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-sm text-muted">
          New products for this category are on the way — check back soon.
        </p>
      )}
    </div>
  );
}
