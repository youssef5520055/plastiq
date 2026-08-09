"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { Cog, Wind, Layers, Thermometer, Wrench, CheckCircle } from "lucide-react";

const processes = [
  {
    id: "injection",
    icon: Cog,
    nameEn: "Injection Molding",
    nameAr: "القولبة بالحقن",
    descEn: "High-precision injection molding for complex shapes, tight tolerances, and high-volume production runs up to 10M+ units.",
    descAr: "قولبة حقن عالية الدقة للأشكال المعقدة وإنتاج كميات كبيرة تصل إلى أكثر من 10 ملايين وحدة.",
    materialsEn: ["PP", "HDPE", "ABS", "PC", "PET"],
    materialsAr: ["PP", "HDPE", "ABS", "PC", "PET"],
    color: "from-blue-500/10 to-blue-600/5",
    accent: "text-blue-500",
    border: "border-blue-500/20",
  },
  {
    id: "blow",
    icon: Wind,
    nameEn: "Blow Molding",
    nameAr: "القولبة بالنفخ",
    descEn: "Extrusion and injection blow molding for bottles, containers, and hollow parts with consistent wall thickness.",
    descAr: "قولبة نفخ البثق والحقن للزجاجات والحاويات والأجزاء المجوفة بسماكة جدار متسقة.",
    materialsEn: ["HDPE", "LDPE", "PET", "PP"],
    materialsAr: ["HDPE", "LDPE", "PET", "PP"],
    color: "from-cyan-500/10 to-cyan-600/5",
    accent: "text-cyan-500",
    border: "border-cyan-500/20",
  },
  {
    id: "extrusion",
    icon: Layers,
    nameEn: "Extrusion",
    nameAr: "البثق",
    descEn: "Continuous extrusion for pipes, profiles, sheets, and films. High throughput with precise dimensional control.",
    descAr: "بثق مستمر للأنابيب والمقاطع والصفائح والأفلام. إنتاجية عالية مع تحكم دقيق في الأبعاد.",
    materialsEn: ["PVC", "HDPE", "PP", "ABS"],
    materialsAr: ["PVC", "HDPE", "PP", "ABS"],
    color: "from-violet-500/10 to-violet-600/5",
    accent: "text-violet-500",
    border: "border-violet-500/20",
  },
  {
    id: "thermoforming",
    icon: Thermometer,
    nameEn: "Thermoforming",
    nameAr: "التشكيل الحراري",
    descEn: "Vacuum and pressure thermoforming for trays, packaging, and large-surface components with high aesthetics.",
    descAr: "تشكيل حراري بالتفريغ والضغط للصواني والتغليف والمكونات ذات الأسطح الكبيرة.",
    materialsEn: ["PET", "PP", "ABS", "HIPS"],
    materialsAr: ["PET", "PP", "ABS", "HIPS"],
    color: "from-orange-500/10 to-orange-600/5",
    accent: "text-orange-500",
    border: "border-orange-500/20",
  },
  {
    id: "custom",
    icon: Wrench,
    nameEn: "Custom Manufacturing",
    nameAr: "التصنيع المخصص",
    descEn: "Full OEM & ODM services from concept to production. Engineering support, mold design, prototyping, and mass production.",
    descAr: "خدمات OEM وODM كاملة من المفهوم إلى الإنتاج. دعم هندسي وتصميم القوالب والنماذج الأولية.",
    materialsEn: ["All Plastics"],
    materialsAr: ["جميع البلاستيك"],
    color: "from-emerald-500/10 to-emerald-600/5",
    accent: "text-emerald-500",
    border: "border-emerald-500/20",
  },
  {
    id: "qc",
    icon: CheckCircle,
    nameEn: "Quality Control",
    nameAr: "ضبط الجودة",
    descEn: "ISO 9001-certified quality management. In-line inspection, dimensional verification, and material testing at every stage.",
    descAr: "إدارة جودة معتمدة ISO 9001. فحص مستمر وتحقق من الأبعاد واختبار المواد في كل مرحلة.",
    materialsEn: ["ISO 9001", "FDA", "RoHS"],
    materialsAr: ["ISO 9001", "FDA", "RoHS"],
    color: "from-rose-500/10 to-rose-600/5",
    accent: "text-rose-500",
    border: "border-rose-500/20",
  },
];

export function ManufacturingSection() {
  const locale = useLocale() as "en" | "ar";
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-pure-white dark:bg-carbon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary-blue mb-3 block">
            {locale === "en" ? "Manufacturing Capabilities" : "قدرات التصنيع"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-graphite dark:text-pure-white mb-4">
            {locale === "en" ? "How We Make It" : "كيف نصنعه"}
          </h2>
          <p className="text-industrial-gray max-w-xl mx-auto">
            {locale === "en"
              ? "Six manufacturing processes under one roof, serving customers from prototype to mass production."
              : "ستة عمليات تصنيع تحت سقف واحد، نخدم العملاء من النموذج الأولي إلى الإنتاج الضخم."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {processes.map((process, i) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setActiveId(process.id)}
              onMouseLeave={() => setActiveId(null)}
              className={`rounded-2xl border ${process.border} bg-gradient-to-br ${process.color} p-6 cursor-pointer transition-all duration-300 ${
                activeId === process.id ? "shadow-xl -translate-y-1" : ""
              }`}
            >
              <div className={`w-10 h-10 rounded-xl bg-pure-white dark:bg-graphite shadow flex items-center justify-center mb-4`}>
                <process.icon className={`w-5 h-5 ${process.accent}`} />
              </div>
              <h3 className="font-bold text-base text-graphite dark:text-pure-white mb-2">
                {locale === "en" ? process.nameEn : process.nameAr}
              </h3>
              <p className="text-sm text-industrial-gray leading-relaxed mb-4">
                {locale === "en" ? process.descEn : process.descAr}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(locale === "en" ? process.materialsEn : process.materialsAr).map((m) => (
                  <span key={m} className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-pure-white/60 dark:bg-graphite/60 ${process.accent} border ${process.border}`}>
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
