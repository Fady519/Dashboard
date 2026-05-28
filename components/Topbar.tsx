"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon, Bell, Menu, Search, User, Settings, LogOut, ChevronDown, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface TopbarProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
    toggleSidebar: () => void;
}

export default function Topbar({ darkMode, setDarkMode, toggleSidebar }: TopbarProps) {
    const [profileOpen, setProfileOpen] = useState(false);
    const router = useRouter();

    
    const [userEmail, setUserEmail] = useState("admin@enterprise.com");
    const [userName, setUserName] = useState("Fady Shahin");
    const [userRole, setUserRole] = useState("Admin");

    useEffect(() => {
       
        const savedEmail = localStorage.getItem("registeredEmail");
        const savedName = localStorage.getItem("registeredName"); 
        
       
        const savedRole = localStorage.getItem("registeredRole") || "System Administrator";

        if (savedEmail) setUserEmail(savedEmail);
        if (savedName) setUserName(savedName);
        setUserRole(savedRole);
    }, []);

   
    const firstLetter = userName.charAt(0).toUpperCase();

    
    const handleLogout = () => {
        
        sessionStorage.removeItem("isLoggedIn");
        
        toast.success("Logged out successfully", { duration: 1500 });
        
        setProfileOpen(false);
        
        
        setTimeout(() => {
            router.push("/login");
        }, 1000);
    };

    return (
        <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/80 backdrop-blur-md px-6 transition-colors dark:border-slate-800/60 dark:bg-slate-900/80">
            {/* Left Side */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 md:hidden transition-colors"
                >
                    <Menu className="h-5 w-5" />
                </button>

                {/* Search Input Container */}
                <div className="relative flex flex-1 max-w-xs sm:max-w-sm items-center">
                    <Search className="absolute left-3 h-4 w-4 text-slate-400 pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all 
                        focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/10
                        dark:border-slate-700/80 dark:bg-slate-800/50 dark:text-slate-100 dark:focus:border-indigo-500 dark:focus:bg-slate-800"
                    />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2.5">
                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="rounded-xl p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-all active:scale-95"
                >
                    {darkMode ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5" />}
                </button>

                {/* Notifications */}
                <button className="relative rounded-xl p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-all">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-white dark:ring-slate-900"></span>
                </button>

                <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>

                {/* Profile Dropdown Component */}
                <div className="relative">
                    <button
                        onClick={() => setProfileOpen(!profileOpen)}
                        className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        {/* Dynamic Avatar */}
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold text-sm shadow-md shadow-indigo-500/20 uppercase">
                            {firstLetter}
                        </div>
                        <span className="hidden text-sm font-medium text-slate-700 dark:text-slate-300 sm:block truncate max-w-[80px]">
                            {userName.split(" ")[0]} 
                        </span>
                        <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Actual Dropdown Menu */}
                    {profileOpen && (
                        <>
                            <div onClick={() => setProfileOpen(false)} className="fixed inset-0 z-10" />
                            <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-slate-200 bg-white p-1 shadow-lg ring-1 ring-black/5 outline-none dark:border-slate-800 dark:bg-slate-900 z-20 animate-in fade-in slide-in-from-top-2 duration-150">
                                
                                
                                <div className="px-3 py-2.5 border-b border-slate-100 dark:border-slate-800/60 mb-1">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">Signed in as</p>
                                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">{userName}</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate mb-2">{userEmail}</p>
                                    
                                    
                                    <div className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-1.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30">
                                        <Shield className="h-3 w-3" />
                                        {userRole}
                                    </div>
                                </div>

                                <button 
                                    onClick={() => { setProfileOpen(false); toast.success("My Profile feature coming soon!"); }}
                                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60 transition-colors"
                                >
                                    <User className="h-4 w-4 text-slate-400" /> My Profile
                                </button>
                                
                                <button 
                                    onClick={() => { setProfileOpen(false); toast.success("Settings feature coming soon!"); }}
                                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60 transition-colors"
                                >
                                    <Settings className="h-4 w-4 text-slate-400" /> Settings
                                </button>
                                
                                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
                                
                             
                                <button 
                                    onClick={handleLogout}
                                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/30 transition-colors font-medium"
                                >
                                    <LogOut className="h-4 w-4" /> Log out
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}