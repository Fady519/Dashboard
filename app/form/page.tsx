"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Mail, Phone, Briefcase, Shield, CheckCircle2, Loader2 } from "lucide-react";


const profileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  jobTitle: z.string().min(2, "Job title is required"),
  role: z.enum(["admin", "manager", "user"]),
  bio: z.string().max(200, "Bio cannot exceed 200 characters").optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      role: "user",
    },
  });

  
  const onSubmit = async (data: ProfileFormValues) => {
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Form Submitted Successfully:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    
    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">User Profile</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Create or update user profile information with real-time validation.
        </p>
      </div>

      
      {isSuccess && (
        <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 animate-in fade-in zoom-in duration-300">
          <CheckCircle2 className="h-5 w-5" />
          <p className="text-sm font-medium">User profile has been created successfully!</p>
        </div>
      )}

      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* First Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <User className="h-4 w-4 text-slate-400" /> First Name
            </label>
            <input
              {...register("firstName")}
              className={`h-11 w-full rounded-xl border px-4 text-sm transition-all outline-none bg-slate-50 dark:bg-slate-800 dark:text-slate-100 ${
                errors.firstName ? "border-rose-500" : "border-slate-200 dark:border-slate-700 focus:border-indigo-500"
              }`}
              placeholder="e.g. Fady"
            />
            {errors.firstName && <p className="text-xs text-rose-500">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
            <input
              {...register("lastName")}
              className={`h-11 w-full rounded-xl border px-4 text-sm transition-all outline-none bg-slate-50 dark:bg-slate-800 dark:text-slate-100 ${
                errors.lastName ? "border-rose-500" : "border-slate-200 dark:border-slate-700 focus:border-indigo-500"
              }`}
              placeholder="e.g. Mohamed"
            />
            {errors.lastName && <p className="text-xs text-rose-500">{errors.lastName.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Mail className="h-4 w-4 text-slate-400" /> Email Address
            </label>
            <input
              {...register("email")}
              className={`h-11 w-full rounded-xl border px-4 text-sm transition-all outline-none bg-slate-50 dark:bg-slate-800 dark:text-slate-100 ${
                errors.email ? "border-rose-500" : "border-slate-200 dark:border-slate-700 focus:border-indigo-500"
              }`}
              placeholder="fady@example.com"
            />
            {errors.email && <p className="text-xs text-rose-500">{errors.email.message}</p>}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Phone className="h-4 w-4 text-slate-400" /> Phone Number
            </label>
            <input
              {...register("phone")}
              className={`h-11 w-full rounded-xl border px-4 text-sm transition-all outline-none bg-slate-50 dark:bg-slate-800 dark:text-slate-100 ${
                errors.phone ? "border-rose-500" : "border-slate-200 dark:border-slate-700 focus:border-indigo-500"
              }`}
              placeholder="+20 1234567890"
            />
            {errors.phone && <p className="text-xs text-rose-500">{errors.phone.message}</p>}
          </div>

          {/* Job Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-slate-400" /> Job Title
            </label>
            <input
              {...register("jobTitle")}
              className={`h-11 w-full rounded-xl border px-4 text-sm transition-all outline-none bg-slate-50 dark:bg-slate-800 dark:text-slate-100 ${
                errors.jobTitle ? "border-rose-500" : "border-slate-200 dark:border-slate-700 focus:border-indigo-500"
              }`}
              placeholder="e.g. Front-end Developer"
            />
            {errors.jobTitle && <p className="text-xs text-rose-500">{errors.jobTitle.message}</p>}
          </div>

          {/* Role Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Shield className="h-4 w-4 text-slate-400" /> User Role
            </label>
            <select
              {...register("role")}
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option value="user">User</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Bio - Full Width */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Bio (Short Description)</label>
            <textarea
              {...register("bio")}
              rows={4}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none transition-all focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              placeholder="Tell us about the user..."
            ></textarea>
            {errors.bio && <p className="text-xs text-rose-500">{errors.bio.message}</p>}
          </div>
        </div>

    
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 text-sm font-semibold text-white transition-all hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/20"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Creating Profile...
              </>
            ) : (
              "Create Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}