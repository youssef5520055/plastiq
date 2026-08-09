import type { Metadata } from "next";
import { materials } from "@/mock-data/materials";

export const metadata: Metadata = {
  title: "Materials — PLASTIQ",
  description: "Explore the range of plastic materials and their properties.",
};

export default async function MaterialsPage() {
  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      {/* Hero */}
      <section className="bg-graphite text-pure-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-black mb-6">
            Materials We Use
          </h1>
          <p className="text-xl text-soft-white/70 max-w-2xl mx-auto">
            Premium plastics engineered for performance and durability
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {materials.map((material) => (
            <div
              key={material.id}
              className="bg-pure-white dark:bg-carbon rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h2 className="text-3xl font-black mb-4 text-graphite dark:text-pure-white">
                    {material.name.en}
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-graphite/60 dark:text-soft-white/60 mb-1">
                        Durability
                      </p>
                      <p className="font-semibold text-graphite dark:text-pure-white">
                        {material.durability.en}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-graphite/60 dark:text-soft-white/60 mb-1">
                        Temperature Resistance
                      </p>
                      <p className="font-semibold text-graphite dark:text-pure-white">
                        {material.temperatureResistance}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-graphite/60 dark:text-soft-white/60 mb-1">
                        Recyclability
                      </p>
                      <p className="font-semibold text-graphite dark:text-pure-white">
                        {material.recyclability}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-graphite dark:text-pure-white">
                    Properties
                  </h3>
                  <ul className="space-y-2">
                    {material.properties.map((prop, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-graphite/60 dark:text-soft-white/60 flex items-start gap-2"
                      >
                        <span className="text-primary-blue font-bold mt-0.5">•</span>
                        {prop.en}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-graphite dark:text-pure-white">
                    Applications
                  </h3>
                  <ul className="space-y-2">
                    {material.applications.map((app, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-graphite/60 dark:text-soft-white/60 flex items-start gap-2"
                      >
                        <span className="text-primary-blue font-bold mt-0.5">•</span>
                        {app.en}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
