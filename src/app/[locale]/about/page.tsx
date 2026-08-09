import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "About PLASTIQ — Premium Plastic Products",
  description: "Learn about PLASTIQ's mission, values, and commitment to quality.",
};

export default async function AboutPage() {
  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      {/* Hero */}
      <section className="bg-graphite text-pure-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-black mb-6">
            About PLASTIQ
          </h1>
          <p className="text-xl text-soft-white/70 max-w-2xl mx-auto">
            Engineered Excellence in Plastic Solutions
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* Mission */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 text-graphite dark:text-pure-white">
              Our Mission
            </h2>
            <p className="text-lg text-graphite/70 dark:text-soft-white/70 mb-6 leading-relaxed">
              At PLASTIQ, we're committed to delivering premium plastic products that set industry standards. Our mission is to provide innovative solutions that meet the complex needs of modern manufacturing, packaging, and construction industries.
            </p>
            <p className="text-lg text-graphite/70 dark:text-soft-white/70 leading-relaxed">
              We believe that quality, innovation, and sustainability go hand in hand. Every product we create reflects our dedication to excellence and our responsibility to the planet.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-blue/20 to-cyan/20 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-6xl font-black text-primary-blue opacity-20">
              PLASTIQ
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="text-4xl font-black mb-12 text-graphite dark:text-pure-white text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "Uncompromising commitment to product excellence and performance.",
              },
              {
                title: "Innovation",
                description: "Continuous improvement and adoption of cutting-edge manufacturing technologies.",
              },
              {
                title: "Sustainability",
                description: "Environmental responsibility and commitment to recyclable materials.",
              },
              {
                title: "Reliability",
                description: "Consistent delivery of products and services that exceed expectations.",
              },
              {
                title: "Partnership",
                description: "Building long-term relationships with customers and suppliers.",
              },
              {
                title: "Excellence",
                description: "Pursuing the highest standards in every aspect of our business.",
              },
            ].map((value, idx) => (
              <div
                key={value.title}
                className="bg-pure-white dark:bg-carbon p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-graphite dark:text-pure-white">
                  {value.title}
                </h3>
                <p className="text-graphite/60 dark:text-soft-white/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* History */}
        <section className="bg-pure-white dark:bg-carbon rounded-lg p-12">
          <h2 className="text-4xl font-black mb-8 text-graphite dark:text-pure-white">
            Our Story
          </h2>
          <div className="space-y-6 text-graphite/70 dark:text-soft-white/70 text-lg leading-relaxed">
            <p>
              Founded in 2009, PLASTIQ has grown to become a trusted leader in the premium plastic products industry. What started as a small manufacturing operation has evolved into a comprehensive supplier serving over 50 industries globally.
            </p>
            <p>
              Our journey is one of continuous innovation and commitment to customer success. We've invested heavily in state-of-the-art manufacturing facilities, quality control systems, and R&D capabilities to ensure we remain at the forefront of the industry.
            </p>
            <p>
              Today, PLASTIQ operates multiple manufacturing facilities across North America and serves thousands of customers with reliable, high-quality plastic products. Our team of over 500 professionals is dedicated to delivering excellence every single day.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-black mb-6 text-graphite dark:text-pure-white">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-graphite/60 dark:text-soft-white/60 mb-8 max-w-2xl mx-auto">
            Explore our product catalog or get in touch with our team to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="electric" size="lg" asChild>
              <Link href="/products">
                Browse Products
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
