"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Order {
  id: string;
  customer: string;
  amount: number;
  status: string;
  date: string;
}

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300",
  Confirmed: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
  Processing: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300",
  Shipped: "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300",
  Delivered: "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300",
  Cancelled: "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300",
};

const statusOptions = [
  "Pending",
  "Confirmed",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/orders");
      if (!response.ok) throw new Error("Failed to fetch orders");
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching orders");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      setUpdatingId(orderId);
      const response = await fetch("/api/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: orderId, status: newStatus }),
      });
      if (!response.ok) throw new Error("Failed to update order");
      const updated = await response.json();
      setOrders(orders.map((o) => (o.id === orderId ? updated : o)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error updating order");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-black mb-12 text-graphite dark:text-pure-white">
          Orders
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
                Loading orders...
              </p>
            </div>
          ) : (
            <>
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
                          <select
                            value={order.status}
                            onChange={(e) =>
                              handleStatusChange(order.id, e.target.value)
                            }
                            disabled={updatingId === order.id}
                            className={`px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer ${
                              statusColors[order.status] ||
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
                          {order.date}
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
