"use client";

import { Link } from "@/i18n/routing";
import { Product } from "@/types";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<string, string> = {
  c1: "from-sky-100 to-blue-50 dark:from-sky-900/30 dark:to-blue-900/20",
  c2: "from-emerald-100 to-green-50 dark:from-emerald-900/30 dark:to-green-900/20",
  c3: "from-orange-100 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/20",
  c4: "from-slate-100 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/20",
};

export function ProductCard({ product }: ProductCardProps) {
  const locale = useLocale() as "en" | "ar";
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const { addItem: addWishlist, removeItem: removeWishlist, hasItem } = useWishlistStore();

  const isWishlisted = hasItem(product.id);
  const bgGradient = categoryColors[product.categoryId] || categoryColors["c4"];

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeWishlist(product.id);
    } else {
      addWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.minOrderQuantity);
  };

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card
        className="group relative h-full flex flex-col border-light-gray dark:border-industrial-gray/20 hover:border-primary-blue/40 hover:shadow-2xl hover:shadow-primary-blue/5 transition-all duration-500 bg-pure-white dark:bg-carbon cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Status Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.new && (
            <Badge className="bg-electric-blue text-graphite text-[10px] font-bold px-2 py-0.5 shadow-md">
              {locale === "en" ? "NEW" : "جديد"}
            </Badge>
          )}
          {product.featured && (
            <Badge variant="success" className="text-[10px] font-bold px-2 py-0.5 shadow-md">
              {locale === "en" ? "FEATURED" : "مميز"}
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="destructive" className="text-[10px] font-bold px-2 py-0.5">
              {locale === "en" ? "OUT OF STOCK" : "نفد المخزون"}
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <motion.button
          onClick={handleWishlist}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-pure-white/90 dark:bg-graphite/90 backdrop-blur-sm shadow-md"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-industrial-gray hover:text-red-400"
            }`}
          />
        </motion.button>

        {/* Product Visual */}
        <div className={`relative aspect-[4/3] w-full bg-gradient-to-br ${bgGradient} overflow-hidden`}>
          {/* Decorative circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/20 dark:bg-black/10 blur-xl" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <motion.div
              animate={{ scale: isHovered ? 1.08 : 1, rotate: isHovered ? 2 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-20 h-20 rounded-2xl bg-pure-white/60 dark:bg-graphite/60 backdrop-blur-sm border border-pure-white/80 dark:border-white/10 shadow-xl flex items-center justify-center"
            >
              <span className="text-3xl font-black text-industrial-gray/30 select-none">
                {product.materialId.toUpperCase().replace("M", "M")}
              </span>
            </motion.div>
          </div>

          {/* Hover Quick Actions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full shadow-lg bg-pure-white/95 dark:bg-carbon/95 text-graphite dark:text-pure-white text-xs gap-1.5 px-3"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                >
                  <Eye className="w-3.5 h-3.5" />
                  {locale === "en" ? "Quick View" : "عرض سريع"}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-full shadow-lg text-xs gap-1.5 px-3"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  {locale === "en" ? "Add to Cart" : "أضف للسلة"}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <CardContent className="p-4 flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold tracking-widest text-industrial-gray uppercase">
              {product.sku}
            </span>
            <span className={`text-[10px] font-medium ${product.inStock ? "text-success-green" : "text-red-400"}`}>
              {product.inStock
                ? (locale === "en" ? "In Stock" : "متوفر")
                : (locale === "en" ? "Out of Stock" : "غير متوفر")}
            </span>
          </div>

          <h3 className="font-semibold text-sm leading-snug text-graphite dark:text-pure-white line-clamp-2 group-hover:text-primary-blue transition-colors">
            {product.name[locale]}
          </h3>

          <p className="text-xs text-industrial-gray line-clamp-2 flex-1">
            {product.description[locale]}
          </p>

          <div className="flex items-end justify-between pt-2 border-t border-light-gray dark:border-industrial-gray/20 mt-auto">
            <div>
              <span className="text-xl font-bold text-primary-blue">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xs text-industrial-gray ml-1">/ unit</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-industrial-gray block">
                {locale === "en" ? "Min. Order" : "الحد الأدنى"}
              </span>
              <span className="text-xs font-semibold text-graphite dark:text-soft-white">
                {product.minOrderQuantity.toLocaleString()}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
