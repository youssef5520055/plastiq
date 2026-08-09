import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { ManufacturingSection } from "@/components/home/ManufacturingSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { QuoteCtaSection } from "@/components/home/QuoteCtaSection";
import { products } from "@/mock-data/products";
import { categories } from "@/mock-data/categories";

export const metadata: Metadata = {
  title: "PLASTIQ — Engineered Plastic. Built for What's Next.",
  description: "High-performance plastic products engineered for manufacturing, packaging, construction, logistics and everyday applications.",
};

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);
  const newProducts = products.filter((p) => p.new).slice(0, 4);

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <CategoriesSection categories={categories} />
      <FeaturedProductsSection products={featuredProducts} />
      <ManufacturingSection />
      <IndustriesSection />
      <StatsSection />
      <SustainabilitySection />
      <TestimonialsSection />
      <QuoteCtaSection />
    </div>
  );
}
