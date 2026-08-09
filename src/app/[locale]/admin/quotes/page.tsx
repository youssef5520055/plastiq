"use client";

import { useEffect, useState } from "react";

interface Quote {
  id: string;
  company: string;
  quantity: number;
  status: string;
  date: string;
}

const statusColors: Record<string, string> = {
  New: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
  Reviewing: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300",
  Quoted: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
  Accepted: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300",
  Rejected: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300",
};

const statusOptions = ["New", "Reviewing", "Quoted", "Accepted", "Rejected"];

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/quotes");
      if (!response.ok) throw new Error("Failed to fetch quotes");
      const data = await response.json();
      setQuotes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching quotes");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (quoteId: string, newStatus: string) => {
    try {
      setUpdatingId(quoteId);
      const response = await fetch("/api/quotes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: quoteId, status: newStatus }),
      });
      if (!response.ok) throw new Error("Failed to update quote");
      const updated = await response.json();
      setQuotes(quotes.map((q) => (q.id === quoteId ? updated : q)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error updating quote");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-black mb-12 text-graphite dark:text-pure-white">
          Quote Requests
        </h1>

        {error && (
          <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

        <div className="bg-pure-white dark:bg-carbon rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <p className="text-graphite/60 dark:text-soft-white/60">
                Loading quotes...
              </p>
            </div>
          ) : (
            <>
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
                          <select
                            value={quote.status}
                            onChange={(e) =>
                              handleStatusChange(quote.id, e.target.value)
                            }
                            disabled={updatingId === quote.id}
                            className={`px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer ${
                              statusColors[quote.status] ||
                              "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {statusOptions.map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-6 py-4 text-sm text-graphite/60 dark:text-soft-white/60">
                          {quote.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
