"use client";

import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Play, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const floatingItems = [
  { label: "ISO 9001", sub: "Certified", x: "8%", y: "25%", delay: 0 },
  { label: "32%", sub: "Recycled Material", x: "82%", y: "20%", delay: 0.2 },
  { label: "500+", sub: "Products", x: "85%", y: "65%", delay: 0.4 },
  { label: "24h", sub: "Quote Response", x: "5%", y: "70%", delay: 0.6 },
];

export function HeroSection() {
  const locale = useLocale() as "en" | "ar";
  const isRtl = locale === "ar";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-soft-white dark:bg-graphite pt-20 border-b-4 border-graphite dark:border-soft-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-transparent" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#38BDF8 1px, transparent 1px), linear-gradient(90deg, #38BDF8 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Glowing orb */}
        <motion.div
          animate={{
            x: mousePos.x * 2,
            y: mousePos.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-primary-blue/10 blur-[120px] pointer-events-none"
        />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-cyan/5 blur-[100px] pointer-events-none" />
      </div>

      {/* Floating stat cards */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: item.delay + 1.2, duration: 0.6 }}
          className="absolute hidden lg:block"
          style={{ left: item.x, top: item.y }}
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: item.delay }}
            className="block-card px-6 py-4 bg-pure-white dark:bg-carbon"
          >
            <div className="text-2xl font-black text-primary-blue dark:text-electric-blue">{item.label}</div>
            <div className="text-sm font-bold text-graphite/60 dark:text-soft-white/60 mt-1 uppercase tracking-wider">{item.sub}</div>
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-electric-blue border-3 border-graphite dark:border-soft-white px-5 py-2 text-sm font-black text-graphite dark:text-graphite uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(248,250,252,1)] mb-8"
          >
            <Zap className="w-3 h-3" />
            {locale === "en"
              ? "Precision Engineering × Premium Plastic"
              : "هندسة دقيقة × بلاستيك فاخر"}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tight mb-8 text-graphite dark:text-soft-white uppercase"
          >
            {locale === "en" ? (
              <>
                Engineered Plastic.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-electric-blue">
                  Built for What's Next.
                </span>
              </>
            ) : (
              <>
                بلاستيك هندسي.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-electric-blue">
                  مبني للمستقبل.
                </span>
              </>
            )}
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-industrial-gray dark:text-light-gray leading-relaxed mb-12 max-w-3xl mx-auto font-medium"
          >
            {locale === "en"
              ? "High-performance plastic products engineered for manufacturing, packaging, construction, logistics and everyday applications."
              : "منتجات بلاستيكية عالية الأداء مصممة للتصنيع والتغليف والبناء والخدمات اللوجستية والتطبيقات اليومية."}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/products" className="block-btn-primary px-8 py-4 flex items-center justify-center w-full sm:w-auto text-lg">
                {locale === "en" ? "Explore Products" : "استكشف المنتجات"}
                <ArrowRight className={`ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? "rotate-180 mr-2 ml-0" : ""}`} />
              </Link>
            <Link href="/quote" className="px-8 py-4 flex items-center justify-center w-full sm:w-auto text-lg font-black text-graphite dark:text-soft-white border-4 border-graphite dark:border-soft-white uppercase tracking-wider hover:bg-graphite hover:text-soft-white dark:hover:bg-soft-white dark:hover:text-graphite transition-colors">
                {locale === "en" ? "Request a Quote" : "اطلب عرض سعر"}
              </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-soft-white/30 tracking-widest uppercase">
            {locale === "en" ? "Scroll" : "انتقل"}
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-soft-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
