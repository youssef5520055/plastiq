"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Truck, UtensilsCrossed, Building2, HeartPulse, Tractor, ShoppingBag, Cog, Layers } from "lucide-react";

const industries = [
  { id: "food", icon: UtensilsCrossed, nameEn: "Food & Beverage", nameAr: "الأغذية والمشروبات", color: "from-green-400 to-emerald-500", bg: "bg-green-50 dark:bg-green-950/20" },
  { id: "logistics", icon: Truck, nameEn: "Logistics", nameAr: "الخدمات اللوجستية", color: "from-blue-400 to-blue-500", bg: "bg-blue-50 dark:bg-blue-950/20" },
  { id: "construction", icon: Building2, nameEn: "Construction", nameAr: "البناء والتشييد", color: "from-orange-400 to-amber-500", bg: "bg-orange-50 dark:bg-orange-950/20" },
  { id: "healthcare", icon: HeartPulse, nameEn: "Healthcare", nameAr: "الرعاية الصحية", color: "from-rose-400 to-pink-500", bg: "bg-rose-50 dark:bg-rose-950/20" },
  { id: "agriculture", icon: Tractor, nameEn: "Agriculture", nameAr: "الزراعة", color: "from-lime-400 to-green-500", bg: "bg-lime-50 dark:bg-lime-950/20" },
  { id: "retail", icon: ShoppingBag, nameEn: "Retail", nameAr: "التجزئة", color: "from-violet-400 to-purple-500", bg: "bg-violet-50 dark:bg-violet-950/20" },
  { id: "automotive", icon: Cog, nameEn: "Automotive", nameAr: "السيارات", color: "from-slate-400 to-gray-500", bg: "bg-slate-50 dark:bg-slate-950/20" },
  { id: "industrial", icon: Layers, nameEn: "Industrial Mfg.", nameAr: "التصنيع الصناعي", color: "from-cyan-400 to-sky-500", bg: "bg-cyan-50 dark:bg-cyan-950/20" },
];

export function IndustriesSection() {
  const locale = useLocale() as "en" | "ar";

  return (
    <section className="py-20 lg:py-28 bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary-blue mb-3 block">
            {locale === "en" ? "Industries We Serve" : "الصناعات التي نخدمها"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-graphite dark:text-pure-white mb-4">
            {locale === "en" ? "Wherever Plastic Works Hard" : "أينما يعمل البلاستيك بجد"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`${industry.bg} rounded-2xl p-5 border border-transparent hover:shadow-lg transition-all cursor-pointer`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 shadow-md`}>
                <industry.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-sm text-graphite dark:text-pure-white">
                {locale === "en" ? industry.nameEn : industry.nameAr}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
