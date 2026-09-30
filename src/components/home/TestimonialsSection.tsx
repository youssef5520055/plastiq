"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    nameEn: "Ahmed Al-Rashidi", nameAr: "أحمد الراشدي",
    roleEn: "Procurement Director", roleAr: "مدير المشتريات",
    companyEn: "Gulf Logistics Co.", companyAr: "شركة الخليج للخدمات اللوجستية",
    quoteEn: "PLASTIQ's industrial crates withstand our toughest warehouse environments. Consistent quality, on-time delivery, and a team that understands B2B scale.",
    quoteAr: "صناديق PLASTIQ الصناعية تتحمل أقسى بيئات المستودعات لدينا. جودة ثابتة وتسليم في الوقت المحدد وفريق يفهم حجم B2B.",
    rating: 5,
  },
  {
    nameEn: "Sarah Mitchell", nameAr: "سارة ميتشل",
    roleEn: "Supply Chain Manager", roleAr: "مديرة سلسلة الإمداد",
    companyEn: "FreshPack Foods", companyAr: "فريش باك للأغذية",
    quoteEn: "We switched our entire packaging line to PLASTIQ food-grade containers. FDA compliance, excellent moisture barriers, and the MOQs work perfectly for our volumes.",
    quoteAr: "قمنا بتحويل خط التغليف بالكامل إلى حاويات PLASTIQ الغذائية. امتثال FDA وحواجز رطوبة ممتازة والحد الأدنى للطلبات يناسب حجمنا تماماً.",
    rating: 5,
  },
  {
    nameEn: "Khalid Mansoor", nameAr: "خالد منصور",
    roleEn: "Operations Head", roleAr: "رئيس العمليات",
    companyEn: "BuildRight Construction", companyAr: "بيلد رايت للإنشاءات",
    quoteEn: "The protective plastic panels have cut our on-site damage rate by 40%. Custom sizes, fast lead times, and the quote system makes procurement effortless.",
    quoteAr: "الألواح الواقية خفّضت معدل الأضرار الميدانية بنسبة 40%. مقاسات مخصصة وأوقات تسليم سريعة ونظام عروض الأسعار يجعل الشراء سهلاً.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const locale = useLocale() as "en" | "ar";

  return (
    <section className="py-20 lg:py-28 bg-soft-white dark:bg-carbon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary-blue mb-3 block">
            {locale === "en" ? "Client Testimonials" : "آراء العملاء"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-graphite dark:text-pure-white">
            {locale === "en" ? "Trusted by Industry Leaders" : "موثوق به من قادة الصناعة"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.nameEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="block-card p-6 flex flex-col"
            >
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-graphite dark:text-soft-white/80 text-sm leading-relaxed flex-1 mb-6 italic">
                "{locale === "en" ? t.quoteEn : t.quoteAr}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-blue to-electric-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {(locale === "en" ? t.nameEn : t.nameAr).charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-graphite dark:text-pure-white">
                    {locale === "en" ? t.nameEn : t.nameAr}
                  </div>
                  <div className="text-xs text-industrial-gray">
                    {locale === "en" ? t.roleEn : t.roleAr} — {locale === "en" ? t.companyEn : t.companyAr}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
