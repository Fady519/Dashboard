"use client";
import React, { useState } from "react";
import { DollarSign, Users, ShoppingBag, ArrowUpRight } from "lucide-react";
import StatCard from "@/components/StatCard";
import RecentActivity, { ActivityItem } from "@/components/RecentActivity";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function HomePage() {
  const [timeFilter, setTimeFilter] = useState<"daily" | "weekly" | "monthly">("weekly");


  const chartDataBundle = {
    daily: [
      { name: "Sat", revenue: 4000, uv: 2400 },
      { name: "Sun", revenue: 3000, uv: 1398 },
      { name: "Mon", revenue: 2000, uv: 9800 },
      { name: "Tue", revenue: 2780, uv: 3908 },
      { name: "Wed", revenue: 1890, uv: 4800 },
      { name: "Thu", revenue: 2390, uv: 3800 },
      { name: "Fri", revenue: 3490, uv: 4300 },
    ],
    weekly: [
      { name: "Week 1", revenue: 12000, uv: 8000 },
      { name: "Week 2", revenue: 19000, uv: 12000 },
      { name: "Week 3", revenue: 15000, uv: 10000 },
      { name: "Week 4", revenue: 28000, uv: 18000 },
    ],
    monthly: [
      { name: "Jan", revenue: 35000, uv: 21000 },
      { name: "Feb", revenue: 48000, uv: 26000 },
      { name: "Mar", revenue: 42000, uv: 30000 },
      { name: "Apr", revenue: 55000, uv: 40000 },
      { name: "May", revenue: 68000, uv: 45000 },
      { name: "Jun", revenue: 74000, uv: 50000 },
    ],
  };

  const [activities] = useState<ActivityItem[]>([
    { id: "1", user: "Ahmed Ali", action: "purchased", target: "Premium Plan", time: "5 mins ago", initials: "AA" },
    { id: "2", user: "Sarah Mohamed", action: "opened a ticket", target: "#2409 - Payment fail", time: "12 mins ago", initials: "SM" },
    { id: "3", user: "Omar Hassan", action: "left a review on", target: "Product X", time: "1 hour ago", initials: "OH" },
    { id: "4", user: "Fatima Sayed", action: "upgraded account to", target: "Pro Tier", time: "2 hours ago", initials: "FS" },
  ]);

  const stats = [
    { title: "Total Revenue", value: "$48,259.45", change: "+12.5%", isPositive: true, icon: DollarSign, iconColor: "text-indigo-600 dark:text-indigo-400" },
    { title: "Active Users", value: "10,482", change: "+8.2%", isPositive: true, icon: Users, iconColor: "text-sky-600 dark:text-sky-400" },
    { title: "New Orders", value: "1,248", change: "-3.1%", isPositive: false, icon: ShoppingBag, iconColor: "text-amber-600 dark:text-amber-400" },
    { title: "Conversion Rate", value: "2.42%", change: "+4.8%", isPositive: true, icon: ArrowUpRight, iconColor: "text-emerald-600 dark:text-emerald-400" },
  ];

  const handleViewAllActivities = () => {
    alert("Navigating to all activities...");
  };

  return (
    <div className="space-y-8">
  
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          Welcome back, Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Here is what is happening with your business today.
        </p>
      </div>

      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

     
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        
        
        <div className="lg:col-span-2 flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">Analytics Overview</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Track your business growth</p>
            </div>
            
           
            <div className="flex items-center rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800">
              {(["daily", "weekly", "monthly"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTimeFilter(filter)}
                  className={`rounded-md px-3 py-1 text-xs font-medium capitalize transition-all ${
                    timeFilter === filter
                      ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50"
                      : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

         
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartDataBundle[timeFilter]} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:hidden" />
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" className="hidden dark:block" opacity={0.3} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                    borderRadius: '12px', 
                    border: 'none',
                    color: '#fff' 
                  }} 
                />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

     
        <div className="lg:col-span-1">
          <RecentActivity activities={activities} onViewAllClick={handleViewAllActivities} />
        </div>

      </div>
    </div>
  );
}