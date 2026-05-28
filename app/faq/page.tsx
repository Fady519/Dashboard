"use client";
import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {

  const [openId, setOpenId] = useState<number | null>(null);


  const faqData: FAQItem[] = [
    {
      id: 1,
      category: "General",
      question: "What is this Dashboard system used for?",
      answer: "This is a commercial-grade, multi-tenant SaaS reservation and management platform designed to help administrators and team leaders track sales, manage team members, schedule events, and monitor business analytics seamlessly.",
    },
    {
      id: 2,
      category: "Security",
      question: "How is my data secured in the Back-end?",
      answer: "When we integrate the ASP.NET Core Back-end, all connection strings and data will be managed through Entity Framework Core and SQL Server. Access to critical endpoints will be fully secured using JWT (JSON Web Tokens) and Role-Based Authorization (Admin, Editor, Reader).",
    },
    {
      id: 3,
      category: "Calendar",
      question: "Can I schedule events in the past on the Calendar?",
      answer: "No, the system has strict business logic implemented to prevent adding or dragging events into past dates. You will receive a toast notification error if you try to modify past schedules.",
    },
    {
      id: 4,
      category: "Theme",
      question: "Does the system remember my Dark/Light mode preference?",
      answer: "Yes! The dashboard features an advanced client-side theme synchronization mechanism that utilizes local storage and an anti-flicker script in the root layout to instantly apply your preferred theme before the page even loads.",
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
     
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Clear and concise answers to the most common questions about the platform, security, and features.
        </p>
      </div>

    
      <div className="space-y-4">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 bg-white dark:bg-slate-900 ${
                isOpen
                  ? "border-indigo-500/50 shadow-md shadow-indigo-500/5 ring-1 ring-indigo-500/30"
                  : "border-slate-200/80 shadow-sm dark:border-slate-800"
              }`}
            >
             
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-900 dark:text-slate-100 gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    {item.category}
                  </span>
                  <span className="text-base sm:text-lg">{item.question}</span>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-indigo-500 shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400 dark:text-slate-500 shrink-0" />
                )}
              </button>

             
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-60 border-t border-slate-100 dark:border-slate-800/60" : "max-h-0"
                }`}
              >
                <p className="p-5 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed bg-slate-50/50 dark:bg-slate-900/50">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}