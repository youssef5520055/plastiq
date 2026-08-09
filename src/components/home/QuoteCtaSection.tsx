"use client";

import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";

const benefits = [
  { en: "Custom Manufacturing Solutions", ar: "حلول تصنيع مخصصة" },
  { en: "Expert Consultation", ar: "استشارة متخصصة" },
  { en: "Competitive Pricing", ar: "أسعار تنافسية" },
  { en: "Fast Turnaround", ar: "تسليم سريع" },
];

export function QuoteCtaSection() {
  const locale = useLocale() as "en" | "ar";
  const isRtl = locale === "ar";

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-carbon to-graphite text-pure-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary-blue/5 blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-cyan/5 blur-[100px]"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              {locale === "en"
                ? "Need Custom Solutions?"
                : "هل تحتاج حلولاً مخصصة؟"}
            </h2>
            <p className="text-lg text-soft-white/70 max-w-2xl mx-auto">
              {locale === "en"
                ? "Get in touch with our experts for personalized manufacturing solutions tailored to your unique requirements."
                : "تواصل مع خبرائنا للحصول على حلول تصنيع مخصصة تناسب احتياجاتك الفريدة."}
            </p>
          </motion.div>

          {/* Benefits grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 mb-12 lg:mb-16"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.en}
                initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-soft-white/80">
                  {locale === "en" ? benefit.en : benefit.ar}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="electric" size="lg" asChild className="w-full sm:w-auto group min-w-[200px]">
              <Link href="/quote">
                {locale === "en" ? "Request a Quote" : "اطلب عرض سعر"}
                <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? "rotate-180 mr-2 ml-0" : "ml-2"}`} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto border-white/20 text-pure-white hover:bg-white/10 hover:border-white/40 min-w-[200px] group"
            >
              <Link href="/contact">
                {locale === "en" ? "Contact Us" : "اتصل بنا"}
                <Phone className={`w-4 h-4 group-hover:scale-110 transition-transform ${isRtl ? "mr-2 ml-0" : "ml-2"}`} />
              </Link>
            </Button>
          </motion.div>

          {/* Support info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-soft-white/60"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-electric-blue" />
                <span>sales@plastiq.com</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-electric-blue" />
                <span>+1 (555) 000-0000</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
