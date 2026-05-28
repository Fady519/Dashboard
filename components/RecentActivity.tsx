import React from "react";
import { ArrowRight } from "lucide-react";


export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  avatarUrl?: string; 
  initials: string;   
}

interface RecentActivityProps {
  activities: ActivityItem[];
  onViewAllClick: () => void; 
}

export default function RecentActivity({ activities, onViewAllClick }: RecentActivityProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 h-full">
      
      
      <div className="flex items-center justify-between border-b border-slate-100 p-6 dark:border-slate-800/60">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">Recent Activity</h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Latest actions across the app</p>
        </div>
        <button
          onClick={onViewAllClick}
          className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-500 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          View all
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>

      
      <div className="divide-y divide-slate-100 p-6 dark:divide-slate-800/40 flex-1 overflow-y-auto">
        {activities.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
           
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {item.avatarUrl ? (
                <img src={item.avatarUrl} alt={item.user} className="h-full w-full rounded-full object-cover" />
              ) : (
                item.initials
              )}
            </div>

           
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-600 dark:text-slate-300 truncate">
                <span className="font-semibold text-slate-900 dark:text-slate-100">{item.user}</span>{" "}
                {item.action}{" "}
                <span className="font-medium text-slate-800 dark:text-slate-200">{item.target}</span>
              </p>
              <span className="text-xs text-slate-400 dark:text-slate-500">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}