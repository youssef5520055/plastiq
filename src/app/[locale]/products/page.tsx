import type { Metadata } from "next";
import { products } from "@/mock-data/products";
import { categories } from "@/mock-data/categories";
import { materials } from "@/mock-data/materials";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Products — PLASTIQ",
  description: "Browse our comprehensive catalog of high-performance plastic products.",
};

interface ProductsPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    material?: string;
    sort?: string;
    view?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  
  let filteredProducts = [...products];

  // Search
  if (params.search) {
    const q = params.search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.en.toLowerCase().includes(q) ||
        p.name.ar.includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.description.en.toLowerCase().includes(q)
    );
  }

  // Category filter
  if (params.category) {
    filteredProducts = filteredProducts.filter(
      (p) => p.categoryId === params.category
    );
  }

  // Material filter
  if (params.material) {
    filteredProducts = filteredProducts.filter(
      (p) => p.materialId === params.material
    );
  }

  // Sorting
  if (params.sort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (params.sort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (params.sort === "newest") {
    filteredProducts.sort((a, b) => parseInt(b.id.slice(1)) - parseInt(a.id.slice(1)));
  } else if (params.sort === "popular") {
    filteredProducts.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
  }

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-4 text-graphite dark:text-pure-white">
            Products
          </h1>
          <p className="text-lg text-graphite/60 dark:text-soft-white/60">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-bold text-graphite dark:text-pure-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={params.category === cat.id}
                        className="rounded"
                      />
                      <span className="text-sm text-graphite/70 dark:text-soft-white/70">
                        {cat.name.en}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-bold text-graphite dark:text-pure-white mb-4">Materials</h3>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <label key={mat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={params.material === mat.id}
                        className="rounded"
                      />
                      <span className="text-sm text-graphite/70 dark:text-soft-white/70">
                        {mat.name.en}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-bold text-graphite dark:text-pure-white mb-4">Price Range</h3>
                <div className="space-y-2">
                  {["$0 - $10", "$10 - $50", "$50 - $200", "$200+"].map((range) => (
                    <label key={range} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded"
                      />
                      <span className="text-sm text-graphite/70 dark:text-soft-white/70">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold text-graphite dark:text-pure-white mb-2">
                  No products found
                </h2>
                <p className="text-graphite/60 dark:text-soft-white/60">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
