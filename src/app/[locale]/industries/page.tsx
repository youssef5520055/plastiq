import type { Metadata } from "next";
import { industries } from "@/mock-data/industries";

export const metadata: Metadata = {
  title: "Industries — PLASTIQ",
  description: "Explore the diverse industries served by PLASTIQ plastic products.",
};

export default async function IndustriesPage() {
  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      {/* Hero */}
      <section className="bg-graphite text-pure-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-black mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-soft-white/70 max-w-2xl mx-auto">
            From food & beverage to automotive, construction to healthcare
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-pure-white dark:bg-carbon rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-blue/20 to-cyan/20 flex items-center justify-center">
                <span className="text-6xl">{industry.icon}</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-3 text-graphite dark:text-pure-white">
                  {industry.name.en}
                </h3>
                <p className="text-graphite/60 dark:text-soft-white/60 leading-relaxed">
                  {industry.description.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
