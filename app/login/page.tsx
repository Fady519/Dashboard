"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { LogIn, Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); 

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!email || !password) {
    toast.error("Please fill in all fields");
    return;
  }

  
  const savedEmail = localStorage.getItem("registeredEmail");
  const savedPassword = localStorage.getItem("registeredPassword");

  
  if (email !== savedEmail || password !== savedPassword) {
    toast.error("Invalid email or password! Please check your credentials.");
    return;
  }

  
  sessionStorage.setItem("isLoggedIn", "true");
  
  toast.success("Welcome to Dashboard!", { duration: 1500 });

  
  setTimeout(() => {
    router.push("/");
  }, 1000);
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
      <div className="w-full max-w-md space-y-8 p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xl">
        <div className="text-center space-y-2">
          <div className="mx-auto h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <LogIn className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">Welcome Back</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Enter your credentials to access the control panel.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@enterprise.com" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
          </div>
          
          <button type="submit" className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md shadow-indigo-500/10 transition-colors mt-6">
            Sign In
          </button>
        </form>
        
        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Create account</Link>
        </div>
      </div>
    </div>
  );
}