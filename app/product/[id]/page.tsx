import { notFound } from "next/navigation";
import { Star, Repeat, CheckCircle2 } from "lucide-react";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductGridSection } from "@/components/ProductGridSection";
import { AddToCartButton } from "@/components/AddToCartButton";
import { WishlistButton } from "@/components/WishlistButton";
import { ShareButton } from "@/components/ShareButton";
import { PriceDisplay } from "@/components/PriceDisplay";
import { getProductById, getRelatedProducts } from "@/lib/products";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ProductGallery name={product.name} images={product.images} />

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
            <CheckCircle2 className="h-3.5 w-3.5" /> In Stock · Ready to Ship
          </span>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent">{product.category}</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{product.name}</h1>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-border"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <PriceDisplay price={product.price} size="xl" className="mt-4" />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <AddToCartButton productId={product.id} />
            <WishlistButton productId={product.id} />
            <button
              aria-label="Compare"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-muted"
            >
              <Repeat className="h-4 w-4" />
            </button>
            <ShareButton title={product.name} />
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {["100% Cotton", "Free Shipping", "7-Day Returns"].map((badge) => (
              <div
                key={badge}
                className="rounded-xl border border-border bg-surface px-3 py-3 text-center text-xs font-medium text-foreground"
              >
                {badge}
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted sm:text-base">{product.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface-muted px-3 py-1 text-xs font-medium text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">SKU</p>
              <p className="mt-1 text-sm font-medium text-foreground">{product.sku}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Type</p>
              <p className="mt-1 text-sm font-medium text-foreground">{product.type}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Category</p>
              <p className="mt-1 text-sm font-medium text-foreground">{product.category}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted">Added</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {new Date(product.addedDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-8">
          <ProductGridSection label="You May Also Like" heading="Related Products" products={related} />
        </div>
      )}
    </div>
  );
}
