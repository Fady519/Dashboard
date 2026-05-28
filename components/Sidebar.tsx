"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Users, Contact, FileText, 
  UserPlus, Calendar, HelpCircle, BarChart3, 
  PieChart, LineChart, Globe, X, ShieldAlert 
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Manage Team", href: "/team", icon: Users },
    { name: "Contacts Info", href: "/contacts", icon: Contact },
    { name: "Invoices Balances", href: "/invoices", icon: FileText },
    { name: "Profile Form", href: "/form", icon: UserPlus },
    { name: "Calendar", href: "/calendar", icon: Calendar },
    { name: "FAQ Page", href: "/faq", icon: HelpCircle },
    { name: "Bar Chart", href: "/barChart", icon: BarChart3 },
    { name: "Pie Chart", href: "/pieCharts", icon: PieChart },
    { name: "Line Chart", href: "/lineChart", icon: LineChart },
    { name: "Geography Chart", href: "/geography", icon: Globe },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm md:hidden transition-opacity duration-300"
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed bottom-0 top-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 ease-in-out dark:border-slate-800/70 dark:bg-slate-900
        md:sticky md:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        {/* Logo Section */}
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-100 dark:border-slate-800/60">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r Birds from-indigo-600 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
              NEXUS PRO
            </span>
          </div>
          <button 
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Links List */}
        <nav className="flex-1 space-y-1 px-3 py-6 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? "bg-indigo-50/80 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 shadow-sm" 
                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/40 dark:hover:text-slate-200"
                }`}
              >
                {/* Active Left Indicator Line */}
                {isActive && (
                  <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-indigo-600 dark:bg-indigo-400" />
                )}

                <Icon className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                  isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                }`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}