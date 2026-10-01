"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, Settings, ShoppingCart, Briefcase, FileText } from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Basic route protection check
    if (!localStorage.getItem("plastiq_token")) {
      router.push("/en/signin");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("plastiq_token");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <Link href="/" className="text-2xl font-black text-blue-900">
            Plastiq
          </Link>
        </div>
        <div className="flex-1 py-6 px-4 space-y-2">
          <Link href="/en/dashboard" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-md font-medium">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/en/admin/orders" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors">
            <Briefcase className="w-5 h-5" /> Orders
          </Link>
          <Link href="/en/admin/quotes" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors">
            <FileText className="w-5 h-5" /> Quotes
          </Link>
          <Link href="/en/admin/products" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors">
            <ShoppingCart className="w-5 h-5" /> Products
          </Link>
        </div>
        <div className="p-4 border-t border-gray-200 space-y-2">
          <Link href="/en/settings" className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-md font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 py-4 px-8 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Corporate Overview</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              CA
            </div>
          </div>
        </header>

        <main className="p-8">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Corporate Account Balance</h3>
              <p className="text-3xl font-bold text-gray-900">$5,000.00</p>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full mt-2 inline-block">Active Wallet</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Active Orders</h3>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Pending Quotes</h3>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">Recent Transactions</h2>
              <button className="text-sm text-blue-600 font-medium hover:underline">View All</button>
            </div>
            <div className="p-6 text-center py-12">
              <p className="text-gray-500 mb-4">No recent transactions to display.</p>
              <Link href="/en/products" className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Browse Materials
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
