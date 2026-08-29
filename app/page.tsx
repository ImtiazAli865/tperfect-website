import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Marquee } from "@/components/Marquee";
import { TrustFeatures } from "@/components/TrustFeatures";
import { ProductSpotlight } from "@/components/ProductSpotlight";
import { ProductGridSection } from "@/components/ProductGridSection";
import { PromoBanner } from "@/components/PromoBanner";
import { ShopByCategory } from "@/components/ShopByCategory";
import { AppPromo } from "@/components/AppPromo";
import Testimonials from "@/components/Testimonials";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 4);
  const newArrivals = [...products].filter((p) => p.isNew).concat(products.slice(4, 8)).slice(0, 4);

  return (
    <>
      <Hero />
      <StatsBar />
      <Marquee />
      <TrustFeatures />
      <ProductSpotlight />
      <ProductGridSection label="Our Picks" heading="Featured Collection" products={featured} />
      <PromoBanner />
      <ProductGridSection label="Just Launched" heading="New Arrivals" products={newArrivals} />
      <ShopByCategory />
      <AppPromo />
      <Testimonials />
    </>
  );
}
