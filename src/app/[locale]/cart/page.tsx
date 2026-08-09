"use client";

import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { useCartStore } from "@/store/useCartStore";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, Trash2, ArrowRight, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CartPage() {
  const locale = useLocale() as "en" | "ar";
  const isRtl = locale === "ar";

  const { items, removeItem, updateQuantity, clearCart, getSubtotal, getTotalItems } = useCartStore();

  const subtotal = getSubtotal();
  const shipping = items.length > 0 ? 25 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-soft-white dark:bg-graphite flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-sm mx-auto"
          >
            <ShoppingCart className="w-20 h-20 mx-auto text-light-gray dark:text-industrial-gray mb-6" />
            <h1 className="text-3xl font-black mb-4 text-graphite dark:text-pure-white">
              {locale === "en" ? "Your cart is empty" : "سلتك فارغة"}
            </h1>
            <p className="text-graphite/60 dark:text-soft-white/60 mb-8">
              {locale === "en"
                ? "Explore our products and add them to your cart."
                : "استكشف منتجاتنا وأضفها إلى سلتك."}
            </p>
            <Button asChild variant="electric" size="lg">
              <Link href="/products">
                {locale === "en" ? "Continue Shopping" : "متابعة التسوق"}
                <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180 mr-2 ml-0" : "ml-2"}`} />
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
        <h1 className="text-4xl font-black mb-12 text-graphite dark:text-pure-white">
          {locale === "en" ? "Shopping Cart" : "سلة التسوق"}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-pure-white dark:bg-carbon rounded-lg shadow-sm overflow-hidden">
              {items.map((item, idx) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={cn(
                    "flex gap-4 p-6",
                    idx !== items.length - 1 && "border-b border-light-gray dark:border-industrial-gray/20"
                  )}
                >
                  {/* Image */}
                  <Link
                    href={`/products/${item.product.id}`}
                    className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name.en}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1">
                    <Link href={`/products/${item.product.id}`}>
                      <h3 className="font-semibold text-graphite dark:text-pure-white hover:text-primary-blue transition-colors">
                        {locale === "en" ? item.product.name.en : item.product.name.ar}
                      </h3>
                    </Link>
                    <p className="text-sm text-graphite/60 dark:text-soft-white/60">
                      {item.product.sku}
                    </p>
                    <div className="text-primary-blue font-bold mt-2">
                      ${item.product.price.toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center border border-industrial-gray rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="p-1.5 hover:bg-light-gray dark:hover:bg-graphite/60"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                        className="w-12 border-0 text-center focus-visible:ring-0"
                        min="1"
                      />
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-light-gray dark:hover:bg-graphite/60"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Button variant="ghost" asChild>
                <Link href="/products">
                  <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180 mr-2 ml-0" : "ml-2"}`} />
                  {locale === "en" ? "Continue Shopping" : "متابعة التسوق"}
                </Link>
              </Button>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-pure-white dark:bg-carbon rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-graphite dark:text-pure-white">
                {locale === "en" ? "Order Summary" : "ملخص الطلب"}
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-light-gray dark:border-industrial-gray/20">
                <div className="flex justify-between text-sm">
                  <span className="text-graphite/60 dark:text-soft-white/60">
                    {locale === "en" ? "Subtotal" : "المجموع الفرعي"}
                  </span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-graphite/60 dark:text-soft-white/60">
                    {locale === "en" ? "Shipping" : "الشحن"}
                  </span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-graphite/60 dark:text-soft-white/60">
                    {locale === "en" ? "Tax" : "الضريبة"}
                  </span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg font-bold">
                <span>{locale === "en" ? "Total" : "الإجمالي"}</span>
                <span className="text-primary-blue">${total.toFixed(2)}</span>
              </div>

              <Button variant="electric" size="lg" className="w-full mb-3" asChild>
                <Link href="/checkout">
                  {locale === "en" ? "Proceed to Checkout" : "انتقل للدفع"}
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-full text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                onClick={() => clearCart()}
              >
                {locale === "en" ? "Clear Cart" : "مسح السلة"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
