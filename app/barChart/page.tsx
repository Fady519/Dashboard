"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BarChart3 } from "lucide-react";


const salesData = [
  { month: "Jan", Sales: 4000, Revenue: 2400 },
  { month: "Feb", Sales: 3000, Revenue: 1398 },
  { month: "Mar", Sales: 2000, Revenue: 9800 },
  { month: "Apr", Sales: 2780, Revenue: 3908 },
  { month: "May", Sales: 1890, Revenue: 4800 },
  { month: "Jun", Sales: 2390, Revenue: 3800 },
];

export default function BarChartPage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          Sales & Revenue Chart
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Detailed performance breakdown showing monthly sales volume against net revenue.
        </p>
      </div>


      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Monthly Overview</h2>
          <p className="text-xs text-slate-400 dark:text-slate-500">Data reflects the first half of the fiscal year.</p>
        </div>


        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={salesData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >

              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />


              <XAxis
                dataKey="month"
                tick={{ fill: "currentColor" }}
                className="text-xs font-medium text-slate-400 dark:text-slate-500"
                tickLine={false}
              />


              <YAxis
                tick={{ fill: "currentColor" }}
                className="text-xs font-medium text-slate-400 dark:text-slate-500"
                tickLine={false}
                axisLine={false}
              />


              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  borderColor: "#334155",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
                itemStyle={{
                  fontSize: "14px",
                  color: "#f8fafc"
                }}
              />


              <Legend
                wrapperStyle={{ paddingTop: "20px", fontSize: "14px" }}
              />


              <Bar
                dataKey="Sales"
                fill="#4f46e5"
                radius={[4, 4, 0, 0]}
                maxBarSize={50}
              />


              <Bar
                dataKey="Revenue"
                fill="#10b981"
                radius={[4, 4, 0, 0]}
                maxBarSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}