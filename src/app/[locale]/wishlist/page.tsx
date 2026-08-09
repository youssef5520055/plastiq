"use client";

import { useLocale } from "next-intl";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCartStore } from "@/store/useCartStore";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WishlistPage() {
  const locale = useLocale() as "en" | "ar";
  const { items, removeItem, clearWishlist } = useWishlistStore();
  const { addItem } = useCartStore();

  const handleAddToCart = (product: any) => {
    addItem(product, product.minOrderQuantity);
    removeItem(product.id);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-soft-white dark:bg-graphite flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-sm mx-auto"
          >
            <Heart className="w-20 h-20 mx-auto text-light-gray dark:text-industrial-gray mb-6" />
            <h1 className="text-3xl font-black mb-4 text-graphite dark:text-pure-white">
              {locale === "en" ? "Your wishlist is empty" : "قائمتك المفضلة فارغة"}
            </h1>
            <p className="text-graphite/60 dark:text-soft-white/60 mb-8">
              {locale === "en"
                ? "Add products to your wishlist to save them for later."
                : "أضف منتجات إلى قائمتك المفضلة لحفظها لاحقاً."}
            </p>
            <Button asChild variant="electric" size="lg">
              <Link href="/products">
                {locale === "en" ? "Browse Products" : "استكشف المنتجات"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-black text-graphite dark:text-pure-white">
            {locale === "en" ? "Wishlist" : "المفضلة"}
          </h1>
          <Button
            variant="ghost"
            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
            onClick={() => clearWishlist()}
          >
            {locale === "en" ? "Clear All" : "مسح الكل"}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-pure-white dark:bg-carbon rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <Link href={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-light-gray dark:bg-graphite/50">
                <Image
                  src={product.images[0]}
                  alt={product.name.en}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </Link>

              <div className="p-4 flex flex-col gap-3">
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-semibold text-graphite dark:text-pure-white hover:text-primary-blue transition-colors line-clamp-2">
                    {locale === "en" ? product.name.en : product.name.ar}
                  </h3>
                </Link>

                <div className="flex items-center justify-between">
                  <span className="text-primary-blue font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className={`text-xs font-medium ${product.inStock ? "text-success-green" : "text-red-400"}`}>
                    {product.inStock ? (locale === "en" ? "In Stock" : "متوفر") : (locale === "en" ? "Out of Stock" : "غير متوفر")}
                  </span>
                </div>

                <div className="flex gap-2 pt-2 border-t border-light-gray dark:border-industrial-gray/20">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {locale === "en" ? "Add" : "أضف"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                    onClick={() => removeItem(product.id)}
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
