"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Category } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, Package, Home, Factory, Building, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  c1: Package,
  c2: Home,
  c3: Factory,
  c4: Building,
};

const categoryColors: Record<string, { bg: string; accent: string; border: string }> = {
  c1: { bg: "bg-sky-50 dark:bg-sky-950/30", accent: "text-sky-600 dark:text-sky-400", border: "border-sky-200 dark:border-sky-800" },
  c2: { bg: "bg-emerald-50 dark:bg-emerald-950/30", accent: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800" },
  c3: { bg: "bg-orange-50 dark:bg-orange-950/30", accent: "text-orange-600 dark:text-orange-400", border: "border-orange-200 dark:border-orange-800" },
  c4: { bg: "bg-slate-50 dark:bg-slate-900/30", accent: "text-slate-600 dark:text-slate-400", border: "border-slate-200 dark:border-slate-800" },
};

interface CategoriesSectionProps {
  categories: Category[];
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  const locale = useLocale() as "en" | "ar";

  return (
    <section className="py-20 lg:py-28 bg-pure-white dark:bg-carbon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary-blue mb-3 block">
            {locale === "en" ? "Product Categories" : "فئات المنتجات"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-graphite dark:text-pure-white mb-4">
            {locale === "en" ? "Built for Every Industry" : "مصمم لكل صناعة"}
          </h2>
          <p className="text-industrial-gray max-w-xl mx-auto">
            {locale === "en"
              ? "From food-grade packaging to heavy industrial containers — we engineer plastics that perform."
              : "من التغليف الغذائي إلى الحاويات الصناعية الثقيلة — نصنع البلاستيك الذي يؤدي الغرض."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, i) => {
            const Icon = categoryIcons[category.id] || Wrench;
            const colors = categoryColors[category.id] || categoryColors["c4"];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/products?category=${category.id}`} className="group block h-full">
                  <div className={`h-full rounded-2xl border ${colors.bg} ${colors.border} p-6 lg:p-8 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}>
                    <div className={`w-12 h-12 rounded-xl bg-pure-white dark:bg-graphite shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${colors.accent}`} />
                    </div>
                    <h3 className="text-lg font-bold text-graphite dark:text-pure-white mb-2">
                      {category.name[locale]}
                    </h3>
                    <p className="text-sm text-industrial-gray leading-relaxed mb-5">
                      {category.description[locale]}
                    </p>
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold ${colors.accent}`}>
                      {locale === "en" ? "Browse Products" : "تصفح المنتجات"}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Custom Manufacturing card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="sm:col-span-2 lg:col-span-4"
          >
            <Link href="/manufacturing" className="group block">
              <div className="rounded-2xl border border-primary-blue/20 bg-gradient-to-r from-primary-blue/5 to-electric-blue/5 p-6 flex flex-col sm:flex-row items-center gap-4 transition-all duration-300 hover:shadow-xl hover:border-primary-blue/40">
                <div className="w-12 h-12 rounded-xl bg-primary-blue flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-pure-white" />
                </div>
                <div className="flex-1 text-center sm:text-start">
                  <h3 className="text-lg font-bold text-graphite dark:text-pure-white mb-1">
                    {locale === "en" ? "Custom Manufacturing" : "التصنيع المخصص"}
                  </h3>
                  <p className="text-sm text-industrial-gray">
                    {locale === "en"
                      ? "Need a custom solution? Our engineers work directly with your specifications for injection molding, blow molding, and more."
                      : "تحتاج إلى حل مخصص؟ يعمل مهندسونا مباشرة مع مواصفاتك للقولبة بالحقن والنفخ وغيرها."}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-blue flex-shrink-0 group-hover:gap-2 transition-all">
                  {locale === "en" ? "Learn More" : "اعرف المزيد"}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
