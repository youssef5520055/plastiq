import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Orders — PLASTIQ",
  description: "PLASTIQ admin order management",
};

export default async function AdminOrdersPage() {
  const orders = [
    { id: "ORD-001", customer: "Acme Corp", amount: 2450, status: "Processing", date: "2025-01-15" },
    { id: "ORD-002", customer: "Tech Solutions", amount: 1820, status: "Shipped", date: "2025-01-14" },
    { id: "ORD-003", customer: "Global Industries", amount: 3120, status: "Pending", date: "2025-01-13" },
    { id: "ORD-004", customer: "Manufacturing Co", amount: 5680, status: "Confirmed", date: "2025-01-12" },
    { id: "ORD-005", customer: "Logistics Plus", amount: 1250, status: "Delivered", date: "2025-01-11" },
  ];

  const statusColors: Record<string, string> = {
    Pending: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300",
    Confirmed: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
    Processing: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300",
    Shipped: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
    Delivered: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300",
    Cancelled: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300",
  };

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-black mb-12 text-graphite dark:text-pure-white">
          Orders
        </h1>

        <div className="bg-pure-white dark:bg-carbon rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-light-gray dark:border-industrial-gray/20">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-graphite dark:text-pure-white">
                    Amount
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
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-light-gray dark:border-industrial-gray/20 hover:bg-light-gray/50 dark:hover:bg-graphite/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-graphite dark:text-pure-white">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-graphite dark:text-pure-white">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-graphite dark:text-pure-white">
                      ${order.amount.toLocaleString()}.00
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          statusColors[order.status] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-graphite/60 dark:text-soft-white/60">
                      {order.date}
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
