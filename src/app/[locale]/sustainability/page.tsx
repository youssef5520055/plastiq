import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Sustainability — PLASTIQ",
  description: "PLASTIQ's commitment to environmental sustainability and responsible manufacturing.",
};

export default async function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      {/* Hero */}
      <section className="bg-graphite text-pure-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-black mb-6">
            Sustainability
          </h1>
          <p className="text-xl text-soft-white/70 max-w-2xl mx-auto">
            Our commitment to environmental responsibility and sustainable manufacturing
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* Intro */}
        <section>
          <p className="text-lg text-graphite/70 dark:text-soft-white/70 leading-relaxed max-w-3xl mx-auto text-center mb-12">
            At PLASTIQ, sustainability isn't just a compliance requirement—it's core to our business philosophy. We're committed to reducing our environmental footprint while delivering premium plastic products that our customers can rely on.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titleEn: "Recycled Materials",
                statEn: "32%",
                descEn: "Average recycled content in our products",
              },
              {
                titleEn: "Waste Reduction",
                statEn: "95%",
                descEn: "Manufacturing waste recovered and recycled",
              },
              {
                titleEn: "Carbon Neutral",
                statEn: "2025",
                descEn: "Target year for carbon-neutral operations",
              },
            ].map((item) => (
              <div
                key={item.titleEn}
                className="bg-pure-white dark:bg-carbon rounded-lg p-8 text-center shadow-sm"
              >
                <div className="text-5xl font-black text-primary-blue mb-3">
                  {item.statEn}
                </div>
                <h3 className="font-bold text-graphite dark:text-pure-white mb-2">
                  {item.titleEn}
                </h3>
                <p className="text-sm text-graphite/60 dark:text-soft-white/60">
                  {item.descEn}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Initiatives */}
        <section>
          <h2 className="text-4xl font-black mb-12 text-graphite dark:text-pure-white">
            Our Sustainability Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                titleEn: "Renewable Energy",
                descEn: "Over 60% of our manufacturing facilities are powered by renewable energy sources including solar and wind.",
              },
              {
                titleEn: "Circular Economy",
                descEn: "We've implemented take-back programs allowing customers to return used products for recycling.",
              },
              {
                titleEn: "Material Innovation",
                descEn: "Continuous R&D into biodegradable and eco-friendly plastic alternatives and compounds.",
              },
              {
                titleEn: "Water Conservation",
                descEn: "Advanced water treatment and recycling systems reduce consumption by 40% compared to industry average.",
              },
              {
                titleEn: "Supply Chain Transparency",
                descEn: "Full transparency and sustainability audits across our entire supply chain.",
              },
              {
                titleEn: "Community Programs",
                descEn: "Annual investments in environmental education and local sustainability projects.",
              },
            ].map((item) => (
              <div
                key={item.titleEn}
                className="bg-pure-white dark:bg-carbon rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-black mb-3 text-graphite dark:text-pure-white">
                  {item.titleEn}
                </h3>
                <p className="text-graphite/60 dark:text-soft-white/60">
                  {item.descEn}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-pure-white dark:bg-carbon rounded-lg p-12">
          <h2 className="text-3xl font-black mb-8 text-graphite dark:text-pure-white text-center">
            Environmental Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["ISO 14001", "FSC Certified", "LEED Partner", "Carbon Trust"].map(
              (cert) => (
                <div key={cert} className="text-center">
                  <div className="text-4xl font-black text-primary-blue/30 mb-3">
                    ✓
                  </div>
                  <p className="font-semibold text-graphite dark:text-pure-white">
                    {cert}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Commitment */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-black mb-6 text-graphite dark:text-pure-white">
            Our 2030 Sustainability Goals
          </h2>
          <div className="max-w-2xl mx-auto bg-primary-blue/5 border border-primary-blue/20 rounded-lg p-8 mb-8">
            <ul className="text-left space-y-3 text-graphite/70 dark:text-soft-white/70">
              <li className="flex items-start gap-3">
                <span className="text-primary-blue font-bold mt-1">→</span>
                <span>100% renewable energy across all facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-blue font-bold mt-1">→</span>
                <span>50% average recycled content in all products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-blue font-bold mt-1">→</span>
                <span>Zero plastic waste to landfills</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-blue font-bold mt-1">→</span>
                <span>Net-positive impact on local communities</span>
              </li>
            </ul>
          </div>
          <p className="text-graphite/60 dark:text-soft-white/60 mb-8 max-w-2xl mx-auto">
            We're committed to being a leader in environmental responsibility while maintaining the quality and performance our customers expect.
          </p>
          <Button variant="electric" size="lg" asChild>
            <Link href="/contact">
              Join Our Sustainability Mission
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
