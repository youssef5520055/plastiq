import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Quotes — PLASTIQ",
  description: "PLASTIQ admin quote management",
};

export default async function AdminQuotesPage() {
  const quotes = [
    { id: "QUOTE-001", company: "TechFlow Inc", quantity: 5000, status: "New", date: "2025-01-15" },
    { id: "QUOTE-002", company: "PackageCo", quantity: 10000, status: "Reviewing", date: "2025-01-14" },
    { id: "QUOTE-003", company: "Industrial Labs", quantity: 2500, status: "Quoted", date: "2025-01-13" },
    { id: "QUOTE-004", company: "BioMed Solutions", quantity: 7500, status: "Accepted", date: "2025-01-12" },
    { id: "QUOTE-005", company: "Logistics Hub", quantity: 15000, status: "Rejected", date: "2025-01-11" },
  ];

  const statusColors: Record<string, string> = {
    New: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
    Reviewing: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300",
    Quoted: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
    Accepted: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300",
    Rejected: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300",
  };

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-black mb-12 text-graphite dark:text-pure-white">
          Quote Requests
        </h1>

        <div className="bg-pure-white dark:bg-carbon rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-light-gray dark:border-industrial-gray/20">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                    Quote ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                    Company
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((quote) => (
                  <tr
                    key={quote.id}
                    className="border-b border-light-gray dark:border-industrial-gray/20 hover:bg-light-gray/50 dark:hover:bg-graphite/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-graphite dark:text-pure-white">
                      {quote.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-graphite dark:text-pure-white">
                      {quote.company}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-graphite dark:text-pure-white">
                      {quote.quantity.toLocaleString()} units
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          statusColors[quote.status] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {quote.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-graphite/60 dark:text-soft-white/60">
                      {quote.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
