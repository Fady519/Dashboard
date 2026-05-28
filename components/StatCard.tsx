import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  iconColor: string;
}

export default function StatCard({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
  iconColor,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {value}
          </h3>
        </div>
        
       
        <div className={`rounded-xl p-3 bg-slate-50 dark:bg-slate-800/50 ${iconColor}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>

     
      <div className="mt-4 flex items-center gap-1.5">
        <span
          className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
            isPositive
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400"
          }`}
        >
          {change}
        </span>
        <span className="text-xs text-slate-400 dark:text-slate-500">vs last month</span>
      </div>
    </div>
  );
}