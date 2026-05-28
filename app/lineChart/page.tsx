"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";


const weeklyData = [
  { day: "Sat", Bookings: 120, Completed: 95 },
  { day: "Sun", Bookings: 210, Completed: 180 },
  { day: "Mon", Bookings: 180, Completed: 160 },
  { day: "Tue", Bookings: 240, Completed: 210 },
  { day: "Wed", Bookings: 300, Completed: 280 },
  { day: "Thu", Bookings: 350, Completed: 310 },
  { day: "Fri", Bookings: 150, Completed: 140 },
];

export default function LineChartPage() {
  return (
    <div className="space-y-6">
  
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          Growth & Performance Analytics
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Interactive line chart tracking daily reservation metrics and workflow completion rates.
        </p>
      </div>

      
      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Weekly Traffic</h2>
          <p className="text-xs text-slate-400 dark:text-slate-500">Comparison between total incoming bookings and actual completed sessions.</p>
        </div>

        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={weeklyData}
              margin={{ top: 20, right: 30, left: -10, bottom: 5 }}
            >
             
              <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-800" />
              
              
              <XAxis 
                dataKey="day" 
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
                  backgroundColor: "var(--tooltip-bg, #ffffff)",
                  borderColor: "var(--tooltip-border, #e2e8f0)",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
                className="dark:[--tooltip-bg:#1e293b] dark:[--tooltip-border:#334155]"
              />
              
            
              <Legend wrapperStyle={{ paddingTop: "20px", fontSize: "14px" }} />
              
              
              <Line 
                type="monotone" 
                dataKey="Bookings" 
                stroke="#4f46e5" 
                strokeWidth={3}
                dot={{ r: 5, strokeWidth: 2 }}
                activeDot={{ r: 8 }}
              />
              
              
              <Line 
                type="monotone" 
                dataKey="Completed" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ r: 5, strokeWidth: 2 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}