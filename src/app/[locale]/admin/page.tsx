import type { Metadata } from "next";
import { products } from "@/mock-data/products";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { BarChart3, Package, ShoppingCart, MessageSquare, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard — PLASTIQ",
  description: "PLASTIQ admin dashboard",
};

export default async function AdminDashboard() {
  const totalProducts = products.length;
  const inStockProducts = products.filter((p) => p.inStock).length;

  const stats = [
    {
      icon: Package,
      label: "Total Products",
      value: totalProducts,
      color: "text-blue-500",
    },
    {
      icon: ShoppingCart,
      label: "In Stock",
      value: inStockProducts,
      color: "text-green-500",
    },
    {
      icon: MessageSquare,
      label: "Pending Quotes",
      value: 12,
      color: "text-orange-500",
    },
    {
      icon: Users,
      label: "Active Customers",
      value: 248,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-soft-white dark:bg-graphite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black mb-2 text-graphite dark:text-pure-white">
            Admin Dashboard
          </h1>
          <p className="text-graphite/60 dark:text-soft-white/60">
            Welcome back! Here's your business overview.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-pure-white dark:bg-carbon rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                  <TrendingUp className="w-4 h-4 text-success-green" />
                </div>
                <div className="text-3xl font-black text-graphite dark:text-pure-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-graphite/60 dark:text-soft-white/60">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-black mb-6 text-graphite dark:text-pure-white">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Manage Products", href: "/admin/products" },
              { label: "View Orders", href: "/admin/orders" },
              { label: "Review Quotes", href: "/admin/quotes" },
              { label: "Analytics", href: "/admin/analytics" },
            ].map((action) => (
              <Button key={action.label} variant="outline" asChild className="w-full">
                <Link href={action.href}>{action.label}</Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-pure-white dark:bg-carbon rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-black mb-6 text-graphite dark:text-pure-white">
              Recent Orders
            </h3>
            <div className="space-y-4">
              {[
                { id: "ORD-001", customer: "Acme Corp", status: "Processing", amount: "$2,450.00" },
                { id: "ORD-002", customer: "Tech Solutions", status: "Shipped", amount: "$1,820.00" },
                { id: "ORD-003", customer: "Global Industries", status: "Pending", amount: "$3,120.00" },
              ].map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border border-light-gray dark:border-industrial-gray/20 rounded-lg"
                >
                  <div>
                    <p className="font-semibold text-graphite dark:text-pure-white">
                      {order.id}
                    </p>
                    <p className="text-sm text-graphite/60 dark:text-soft-white/60">
                      {order.customer}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-graphite dark:text-pure-white">
                      {order.amount}
                    </p>
                    <p className="text-xs text-graphite/60 dark:text-soft-white/60">
                      {order.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Summary */}
          <div className="bg-pure-white dark:bg-carbon rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-black mb-6 text-graphite dark:text-pure-white">
              Inventory Summary
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-graphite dark:text-pure-white">
                    In Stock
                  </span>
                  <span className="text-sm font-bold text-success-green">
                    {inStockProducts}/{totalProducts}
                  </span>
                </div>
                <div className="w-full bg-light-gray dark:bg-graphite rounded-full h-2">
                  <div
                    className="bg-success-green h-2 rounded-full"
                    style={{ width: `${(inStockProducts / totalProducts) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-graphite dark:text-pure-white">
                    Low Stock
                  </span>
                  <span className="text-sm font-bold text-orange-500">
                    {Math.ceil(totalProducts * 0.15)}
                  </span>
                </div>
                <div className="w-full bg-light-gray dark:bg-graphite rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: "15%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-graphite dark:text-pure-white">
                    Out of Stock
                  </span>
                  <span className="text-sm font-bold text-red-500">
                    {totalProducts - inStockProducts}
                  </span>
                </div>
                <div className="w-full bg-light-gray dark:bg-graphite rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: `${((totalProducts - inStockProducts) / totalProducts) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
