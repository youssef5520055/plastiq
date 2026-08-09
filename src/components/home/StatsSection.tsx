"use client";

import { useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { valueEn: 500, suffixEn: "+", labelEn: "Products", labelAr: "منتج" },
  { valueEn: 50, suffixEn: "+", labelEn: "Industries Served", labelAr: "صناعة نخدمها" },
  { valueEn: 99, suffixEn: "%", labelEn: "On-Time Delivery", labelAr: "تسليم في الوقت المحدد" },
  { valueEn: 15, suffixEn: "+", labelEn: "Years of Excellence", labelAr: "سنة من التميز" },
];

export function StatsSection() {
  const locale = useLocale() as "en" | "ar";

  return (
    <section className="py-16 lg:py-20 bg-graphite text-pure-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-black text-electric-blue mb-2">
                <CountUp target={stat.valueEn} suffix={stat.suffixEn} />
              </div>
              <div className="text-sm text-soft-white/60 font-medium">
                {locale === "en" ? stat.labelEn : stat.labelAr}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
