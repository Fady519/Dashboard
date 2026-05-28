"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { Toaster } from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  const isAuthPage = pathname === "/login" || pathname === "/register";

  useEffect(() => {
    // ضبط الـ Dark Mode
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);

    // التحقق من حالة الجلسة الحالية
    const token = sessionStorage.getItem("isLoggedIn"); 

    if (!token && !isAuthPage) {
      router.replace("/login");
    } else if (token && isAuthPage) {
      router.replace("/");
    } else {
      setIsAuthChecking(false);
    }
  }, [pathname, isAuthPage, router]);

  const handleThemeToggle = (newMode: boolean) => {
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        {/* 🔑 الحل السحري: كبستالك الـ Metadata والأيقونة هنا كـ HTML Tags عادية عشان تتوافق مع الـ use client */}
        <title>Dashboard</title>
        <meta name="description" content="Advanced Admin Dashboard Management System" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/1828/1828765.png" />

        {/* حاقن الـ Theme السريع لمنع الـ Flicker الأبيض عند التحميل */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="flex h-full bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-50 antialiased">
        
        <Toaster position="top-center" reverseOrder={false} />

        {isAuthChecking ? (
          <div className="flex-1 flex items-center justify-center bg-slate-50 dark:bg-slate-950">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
          </div>
        ) : isAuthPage ? (
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        ) : (
          <>
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex flex-1 flex-col overflow-hidden">
              <Topbar 
                darkMode={darkMode} 
                setDarkMode={handleThemeToggle} 
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
              />
              
              <main className="flex-1 overflow-y-auto p-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
                {children}
              </main>
            </div>
          </>
        )}

      </body>
    </html>
  );
}