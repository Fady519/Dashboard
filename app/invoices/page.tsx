"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle2, Clock, DollarSign, Loader2, Receipt } from "lucide-react";

interface Invoice {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  amount: number; 
  status: "paid" | "pending";
  date: string;
}

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/users?limit=25");
        const data = await res.json();

        
        const formattedInvoices = data.users.map((user: any, index: number) => ({
          id: user.id + 1000, 
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          amount: parseFloat((user.weight * 5.5).toFixed(2)), 
          status: index % 3 === 0 ? "pending" : "paid",
          date: `2026-05-${(index % 28) + 1}`,
        }));

        setInvoices(formattedInvoices);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  const filteredInvoices = invoices.filter((invoice) => {
    return statusFilter === "all" || invoice.status === statusFilter;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">Invoices Balances</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          List of Invoice Balances and Payment Statuses.
        </p>
      </div>

   
      <div className="flex items-center rounded-xl bg-slate-100 p-0.5 dark:bg-slate-800 w-fit">
        {(["all", "paid", "pending"] as const).map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`rounded-lg px-4 py-1.5 text-xs font-medium capitalize transition-all ${
              statusFilter === status
                ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400"
            }`}
          >
            {status} Invoices
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600 dark:text-indigo-400" />
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Loading Invoices...</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-slate-500 dark:text-slate-400">
              <thead className="bg-slate-50 font-medium text-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
                <tr>
                  <th className="px-6 py-4">Invoice ID</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Cost</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-mono font-medium text-slate-900 dark:text-slate-300">#{invoice.id}</td>
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                      {invoice.firstName} {invoice.lastName}
                    </td>
                    <td className="px-6 py-4">{invoice.email}</td>
                    <td className="px-6 py-4 font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                      ${invoice.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {invoice.status === "paid" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" /> Paid
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
                          <Clock className="h-3 w-3" /> Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs font-medium">{invoice.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}