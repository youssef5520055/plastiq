"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { Heart, ShoppingCart, Check, AlertCircle, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const locale = useLocale() as "en" | "ar";
  const isRtl = locale === "ar";

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const { addItem } = useCartStore();
  const { addItem: addToWishlist, items: wishlistItems } = useWishlistStore();

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);
  const moqNotMet = quantity < product.minOrderQuantity;

  const handleAddToCart = () => {
    if (moqNotMet) return;
    addItem(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      addToWishlist(product);
      setAddedToWishlist(true);
      setTimeout(() => setAddedToWishlist(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="bg-light-gray dark:bg-carbon rounded-lg overflow-hidden aspect-square flex items-center justify-center relative">
              <Image
                src={product.images[selectedImage]}
                alt={product.name.en}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl font-black mb-2">Out of Stock</div>
                  </div>
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={cn(
                      "w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors",
                      selectedImage === idx
                        ? "border-primary-blue"
                        : "border-light-gray dark:border-white/10 hover:border-primary-blue"
                    )}
                  >
                    <Image
                      src={img}
                      alt=""
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                {product.featured && (
                  <Badge className="bg-electric-blue text-graphite">Featured</Badge>
                )}
                {product.new && (
                  <Badge className="bg-primary-blue text-white">New</Badge>
                )}
                {!product.inStock && (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-black mb-2 text-graphite dark:text-pure-white">
                {locale === "en" ? product.name.en : product.name.ar}
              </h1>

              <div className="text-sm text-graphite/60 dark:text-soft-white/60 mb-6">
                {locale === "en" ? "SKU:" : "رقم المنتج:"} <span className="font-mono text-primary-blue">{product.sku}</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-5xl font-black text-primary-blue">
                  ${product.price.toFixed(2)}
                </div>
                <div className="text-sm text-graphite/60 dark:text-soft-white/60 mt-1">
                  {product.currency}
                </div>
              </div>

              {/* Description */}
              <p className="text-graphite/70 dark:text-soft-white/70 mb-6 leading-relaxed">
                {locale === "en" ? product.description.en : product.description.ar}
              </p>

              {/* Specifications */}
              <div className="mb-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-graphite/60 dark:text-soft-white/60">
                    {locale === "en" ? "Dimensions:" : "الأبعاد:"}
                  </span>
                  <span className="font-medium">{product.dimensions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-graphite/60 dark:text-soft-white/60">
                    {locale === "en" ? "Weight:" : "الوزن:"}
                  </span>
                  <span className="font-medium">{product.weight}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-graphite/60 dark:text-soft-white/60">
                    {locale === "en" ? "MOQ:" : "الحد الأدنى للطلب:"}
                  </span>
                  <span className="font-medium">{product.minOrderQuantity} units</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              {/* MOQ Warning */}
              {moqNotMet && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800 dark:text-yellow-200">
                    {locale === "en"
                      ? `Minimum order quantity is ${product.minOrderQuantity} units`
                      : `الحد الأدنى للطلب ${product.minOrderQuantity} وحدة`}
                  </div>
                </motion.div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-graphite/70 dark:text-soft-white/70">
                  {locale === "en" ? "Quantity:" : "الكمية:"}
                </span>
                <div className="flex items-center border border-industrial-gray rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-light-gray dark:hover:bg-graphite/60 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 border-0 text-center focus-visible:ring-0"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-light-gray dark:hover:bg-graphite/60 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart & Wishlist */}
              <div className="flex gap-3">
                <Button
                  variant="electric"
                  size="lg"
                  className="flex-1 gap-2"
                  onClick={handleAddToCart}
                  disabled={!product.inStock || moqNotMet}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {addedToCart ? (
                    <>
                      <Check className="w-4 h-4" />
                      {locale === "en" ? "Added to Cart" : "تم الإضافة"}
                    </>
                  ) : locale === "en" ? (
                    "Add to Cart"
                  ) : (
                    "أضف إلى السلة"
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2"
                  onClick={handleAddToWishlist}
                >
                  <Heart
                    className={cn("w-4 h-4", isInWishlist && "fill-current text-red-500")}
                  />
                </Button>
              </div>

              {/* Request Quote */}
              <Button variant="secondary" size="lg" className="w-full">
                {locale === "en" ? "Request Quote" : "اطلب عرض سعر"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
