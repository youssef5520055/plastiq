"use client";

import { Link } from "@/i18n/routing";
import { Globe, Mail, Phone, MapPin, Rss } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-blue/20 border border-white/10 hover:border-primary-blue/40 flex items-center justify-center text-industrial-gray hover:text-electric-blue transition-all duration-200"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const locale = useLocale() as "en" | "ar";
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <footer className="bg-graphite text-soft-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="text-2xl font-black tracking-tighter text-pure-white">
                PLASTI<span className="text-primary-blue">Q</span>
              </span>
            </Link>
            <p className="text-industrial-gray text-sm leading-relaxed max-w-xs mb-6">
              {locale === "en"
                ? "High-performance plastic products engineered for manufacturing, packaging, construction, logistics and everyday applications."
                : "منتجات بلاستيكية عالية الأداء مصممة للتصنيع والتغليف والبناء والخدمات اللوجستية والتطبيقات اليومية."}
            </p>
            {/* Social */}
            <div className="flex gap-2">
              <SocialIcon label="X (Twitter)">
                <span className="text-xs font-black">𝕏</span>
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <span className="text-xs font-black">in</span>
              </SocialIcon>
              <SocialIcon label="YouTube">
                <span className="text-xs font-black">▶</span>
              </SocialIcon>
              <SocialIcon label="RSS">
                <Rss className="w-3.5 h-3.5" />
              </SocialIcon>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-industrial-gray mb-5">
              {locale === "en" ? "Products" : "المنتجات"}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { en: "Packaging", ar: "التغليف", href: "/products?category=c1" },
                { en: "Household", ar: "المنزلية", href: "/products?category=c2" },
                { en: "Industrial", ar: "الصناعية", href: "/products?category=c3" },
                { en: "Construction", ar: "البناء", href: "/products?category=c4" },
                { en: "Custom Manufacturing", ar: "التصنيع المخصص", href: "/manufacturing" },
              ].map((item) => (
                <li key={item.en}>
                  <Link href={item.href} className="text-industrial-gray hover:text-pure-white transition-colors">
                    {locale === "en" ? item.en : item.ar}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-industrial-gray mb-5">
              {locale === "en" ? "Company" : "الشركة"}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { en: "About Us", ar: "من نحن", href: "/about" },
                { en: "Sustainability", ar: "الاستدامة", href: "/sustainability" },
                { en: "Manufacturing", ar: "التصنيع", href: "/manufacturing" },
                { en: "Careers", ar: "التوظيف", href: "#" },
                { en: "News", ar: "الأخبار", href: "#" },
              ].map((item) => (
                <li key={item.en}>
                  <Link href={item.href} className="text-industrial-gray hover:text-pure-white transition-colors">
                    {locale === "en" ? item.en : item.ar}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-industrial-gray mb-5">
              {locale === "en" ? "Resources" : "الموارد"}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { en: "Materials Guide", ar: "دليل المواد", href: "/materials" },
                { en: "Industries", ar: "الصناعات", href: "/industries" },
                { en: "Catalog PDF", ar: "كتالوج PDF", href: "#" },
                { en: "FAQ", ar: "الأسئلة الشائعة", href: "#" },
                { en: "Support", ar: "الدعم", href: "#" },
              ].map((item) => (
                <li key={item.en}>
                  <Link href={item.href} className="text-industrial-gray hover:text-pure-white transition-colors">
                    {locale === "en" ? item.en : item.ar}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-industrial-gray mb-5">
              {locale === "en" ? "Contact" : "تواصل معنا"}
            </h4>
            <ul className="space-y-3 text-sm text-industrial-gray">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-blue" />
                <span>Industrial Zone, Riyadh, KSA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary-blue" />
                <span>+966 11 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary-blue" />
                <span>info@plastiq.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-industrial-gray text-xs">
            © 2026 PLASTIQ. {locale === "en" ? "All rights reserved. (Prototype — Demo Data)" : "جميع الحقوق محفوظة. (نموذج أولي — بيانات تجريبية)"}
          </p>
          <div className="flex items-center gap-5">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs text-industrial-gray hover:text-pure-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              {locale === "en" ? "العربية" : "English"}
            </button>
            <Link href="/privacy" className="text-xs text-industrial-gray hover:text-pure-white transition-colors">
              {locale === "en" ? "Privacy" : "الخصوصية"}
            </Link>
            <Link href="/terms" className="text-xs text-industrial-gray hover:text-pure-white transition-colors">
              {locale === "en" ? "Terms" : "الشروط"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
