import type { Metadata } from "next";
import { materials } from "@/mock-data/materials";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities — PLASTIQ",
  description: "Explore PLASTIQ's advanced manufacturing processes and capabilities.",
};

export default async function ManufacturingPage() {
  const processes = [
    {
      name: "Injection Molding",
      descriptionEn: "High-precision injection molding for complex plastic parts with tight tolerances.",
      descriptionAr: "قولبة بالضخ عالية الدقة لقطع بلاستيكية معقدة بتفاوتات ضيقة.",
      icon: "🏭",
    },
    {
      name: "Blow Molding",
      descriptionEn: "Specialized blow molding for hollow products like bottles and containers.",
      descriptionAr: "قولبة النفخ المتخصصة للمنتجات المجوفة مثل الزجاجات والحاويات.",
      icon: "💨",
    },
    {
      name: "Extrusion",
      descriptionEn: "Continuous extrusion processes for profiles, tubes, and sheets.",
      descriptionAr: "عمليات البثق المستمرة للملفات الشخصية والأنابيب والأوراق.",
      icon: "🔄",
    },
    {
      name: "Thermoforming",
      descriptionEn: "Thermoforming for custom packaging and structural components.",
      descriptionAr: "التشكيل الحراري للعبوات المخصصة والمكونات الهيكلية.",
      icon: "♨️",
    },
    {
      name: "Custom Manufacturing",
      descriptionEn: "Bespoke manufacturing solutions tailored to your unique specifications.",
      descriptionAr: "حلول التصنيع المخصصة المصممة حسب مواصفاتك الفريدة.",
      icon: "⚙️",
    },
    {
      name: "Quality Control",
      descriptionEn: "Rigorous quality assurance at every stage of production.",
      descriptionAr: "ضمان الجودة الصارم في كل مرحلة من مراحل الإنتاج.",
      icon: "✓",
    },
  ];

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      {/* Hero */}
      <section className="bg-graphite text-pure-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-black mb-6">
            Manufacturing Capabilities
          </h1>
          <p className="text-xl text-soft-white/70 max-w-2xl mx-auto">
            State-of-the-art facilities and processes delivering precision plastic solutions
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Processes */}
        <div className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-graphite dark:text-pure-white">
            Our Manufacturing Processes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, idx) => (
              <div
                key={process.name}
                className="bg-pure-white dark:bg-carbon p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{process.icon}</div>
                <h3 className="text-2xl font-black mb-3 text-graphite dark:text-pure-white">
                  {process.name}
                </h3>
                <p className="text-graphite/60 dark:text-soft-white/60">
                  {process.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-graphite dark:text-pure-white">
            World-Class Facilities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-blue/20 to-cyan/20 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-black text-primary-blue opacity-20 mb-4">
                  🏭
                </div>
                <p className="text-graphite dark:text-soft-white font-bold">
                  State-of-the-Art Facilities
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  titleEn: "Advanced Equipment",
                  descEn: "Latest injection molding machines, extrusion lines, and blow molding equipment with CNC precision controls.",
                },
                {
                  titleEn: "Quality Testing Lab",
                  descEn: "Comprehensive testing facilities for tensile strength, durability, chemical resistance, and dimensional accuracy.",
                },
                {
                  titleEn: "Environmental Controls",
                  descEn: "Climate-controlled manufacturing environments ensuring consistent product quality and material handling.",
                },
                {
                  titleEn: "ISO Certifications",
                  descEn: "ISO 9001:2015 certified processes ensuring international quality standards compliance.",
                },
              ].map((item) => (
                <div key={item.titleEn}>
                  <h3 className="font-bold text-graphite dark:text-pure-white mb-2">
                    {item.titleEn}
                  </h3>
                  <p className="text-graphite/60 dark:text-soft-white/60">
                    {item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capacity */}
        <div className="mb-20 bg-pure-white dark:bg-carbon rounded-lg p-12">
          <h2 className="text-3xl font-black mb-8 text-graphite dark:text-pure-white text-center">
            Production Capacity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: "500+", label: "Daily Production Runs" },
              { stat: "10M+", label: "Units Per Year" },
              { stat: "50+", label: "Industries Served" },
              { stat: "24/7", label: "Production Schedule" },
            ].map((item) => (
              <div key={item.stat} className="text-center">
                <div className="text-4xl font-black text-primary-blue mb-2">
                  {item.stat}
                </div>
                <p className="text-graphite/60 dark:text-soft-white/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-black mb-6 text-graphite dark:text-pure-white">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-graphite/60 dark:text-soft-white/60 mb-8 max-w-2xl mx-auto">
            Let's discuss your manufacturing needs and custom solutions.
          </p>
          <Button variant="electric" size="lg" asChild>
            <Link href="/quote">
              Request a Quote
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
