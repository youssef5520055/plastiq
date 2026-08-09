"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Edit2, Trash2 } from "lucide-react";

interface Product {
  id: number;
  sku: string;
  name: { en: string; ar: string };
  price: number;
  inStock: boolean;
  featured: boolean;
  new: boolean;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data.slice(0, 10));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const response = await fetch(`/api/products?id=${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete product");
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error deleting product");
    }
  };

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-black mb-2 text-graphite dark:text-pure-white">
              Products
            </h1>
            <p className="text-graphite/60 dark:text-soft-white/60">
              Manage your product catalog ({products.length} products)
            </p>
          </div>
          <Button variant="electric" size="lg" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-pure-white dark:bg-carbon rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <p className="text-graphite/60 dark:text-soft-white/60">
                Loading products...
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-light-gray dark:border-industrial-gray/20">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                        SKU
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                        Price
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                        Stock
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                        Status
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-graphite dark:text-pure-white">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-light-gray dark:border-industrial-gray/20 hover:bg-light-gray/50 dark:hover:bg-graphite/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-mono text-primary-blue">
                          {product.sku}
                        </td>
                        <td className="px-6 py-4 text-sm text-graphite dark:text-pure-white max-w-xs truncate">
                          {product.name.en}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-graphite dark:text-pure-white">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                              product.inStock
                                ? "bg-success-green/20 text-success-green"
                                : "bg-red-500/20 text-red-500"
                            }`}
                          >
                            {product.inStock
                              ? "In Stock"
                              : "Out of Stock"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex gap-2">
                            {product.featured && (
                              <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-electric-blue/20 text-electric-blue">
                                Featured
                              </span>
                            )}
                            {product.new && (
                              <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-primary-blue/20 text-primary-blue">
                                New
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 hover:bg-light-gray dark:hover:bg-graphite rounded transition-colors">
                              <Edit2 className="w-4 h-4 text-graphite dark:text-soft-white" />
                            </button>
                            <button
                              onClick={() => handleDelete(product.id)}
                              className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-light-gray dark:border-industrial-gray/20 flex items-center justify-between">
                <div className="text-sm text-graphite/60 dark:text-soft-white/60">
                  Showing {products.length} products
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
