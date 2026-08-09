import type { Metadata } from "next";
import { products } from "@/mock-data/products";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Plus, Edit2, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Products — PLASTIQ",
  description: "PLASTIQ admin product management",
};

export default async function AdminProductsPage() {
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

        {/* Products Table */}
        <div className="bg-pure-white dark:bg-carbon rounded-lg shadow-sm overflow-hidden">
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
                {products.slice(0, 10).map((product) => (
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
                        {product.inStock ? "In Stock" : "Out of Stock"}
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
                        <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors">
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
              Showing 1-10 of {products.length} products
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
        </div>
      </div>
    </div>
  );
}
