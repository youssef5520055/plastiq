"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Product } from "@/types";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeaturedProductsSectionProps {
  products: Product[];
}

export function FeaturedProductsSection({ products }: FeaturedProductsSectionProps) {
  const locale = useLocale() as "en" | "ar";

  return (
    <section className="py-20 lg:py-28 bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-primary-blue mb-3 block">
              {locale === "en" ? "Featured Products" : "المنتجات المميزة"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-graphite dark:text-pure-white">
              {locale === "en" ? "Our Best Sellers" : "الأكثر مبيعاً"}
            </h2>
          </div>
          <Button variant="outline" asChild className="flex-shrink-0">
            <Link href="/products" className="flex items-center gap-2">
              {locale === "en" ? "View All Products" : "عرض جميع المنتجات"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="primary" size="lg" asChild>
            <Link href="/products">
              {locale === "en" ? "View Full Catalog" : "عرض الكتالوج الكامل"}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
