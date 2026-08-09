"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Leaf, Recycle, Zap, BarChart3 } from "lucide-react";

const metrics = [
  { icon: Recycle, valueEn: "94%", labelEn: "Products Recyclable", labelAr: "من المنتجات قابلة لإعادة التدوير", color: "text-emerald-500" },
  { icon: Leaf, valueEn: "32%", labelEn: "Recycled Material Used", labelAr: "من المواد المعاد تدويرها مستخدمة", color: "text-green-500" },
  { icon: BarChart3, valueEn: "18%", labelEn: "Material Reduction", labelAr: "تخفيض في المواد", color: "text-cyan-500" },
  { icon: Zap, valueEn: "25%", labelEn: "Energy Efficiency Gain", labelAr: "كسب في كفاءة الطاقة", color: "text-blue-500" },
];

export function SustainabilitySection() {
  const locale = useLocale() as "en" | "ar";

  return (
    <section className="py-20 lg:py-28 bg-graphite relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-400 mb-5">
              <Leaf className="w-3.5 h-3.5" />
              {locale === "en" ? "Sustainability" : "الاستدامة"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-pure-white leading-tight mb-6">
              {locale === "en" ? (
                <>Engineering a <span className="text-emerald-400">Greener</span> Future</>
              ) : (
                <>هندسة مستقبل <span className="text-emerald-400">أكثر خضرة</span></>
              )}
            </h2>
            <p className="text-soft-white/60 leading-relaxed mb-8 text-lg">
              {locale === "en"
                ? "We believe responsible manufacturing and high performance are not mutually exclusive. Our sustainability program drives measurable progress across our entire product range."
                : "نؤمن بأن التصنيع المسؤول والأداء العالي ليسا متناقضين. يحقق برنامج الاستدامة لدينا تقدماً قابلاً للقياس عبر نطاق منتجاتنا الكامل."}
            </p>
            <p className="text-xs text-soft-white/30 italic">
              {locale === "en"
                ? "* Figures are prototype/demo values for illustrative purposes."
                : "* الأرقام قيم نموذجية/تجريبية لأغراض توضيحية."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.labelEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors"
              >
                <m.icon className={`w-6 h-6 ${m.color} mb-3`} />
                <div className={`text-3xl font-black ${m.color} mb-1`}>{m.valueEn}</div>
                <div className="text-xs text-soft-white/50">
                  {locale === "en" ? m.labelEn : m.labelAr}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
