"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { UserPlus, Mail, Lock, User, ShieldAlert } from "lucide-react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Reader");
  
  const router = useRouter(); 

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!name || !email || !password) {
    toast.error("Please fill in all fields");
    return;
  }


  localStorage.setItem("registeredName", name);
  localStorage.setItem("registeredEmail", email);
  localStorage.setItem("registeredPassword", password);
  localStorage.setItem("registeredRole", role);

  toast.success("Account created successfully! Redirecting to Login...", {
    duration: 2000,
  });


  setTimeout(() => {
    router.push("/login");
  }, 2000);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
      <div className="w-full max-w-md space-y-6 p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xl">
        <div className="text-center space-y-2">
          <div className="mx-auto h-12 w-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
            <UserPlus className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">Create Enterprise Account</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Get started by creating your secure platform identity.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Fady Kaiser" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="fady@example.com" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Account Type (Role)</label>
            <div className="relative">
              <ShieldAlert className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
              <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 focus:outline-none focus:border-emerald-500 appearance-none cursor-pointer font-medium">
                <option value="Reader">Reader (Regular User)</option>
                <option value="Editor">Editor (Articles Writer)</option>
                <option value="Admin">System Administrator</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md shadow-emerald-500/10 transition-colors mt-6">
            Create Account
          </button>
        </form>

        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  );
}