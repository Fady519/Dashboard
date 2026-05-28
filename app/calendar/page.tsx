"use client";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { EventDropArg } from "@fullcalendar/interaction";
import { Plus, Calendar as CalendarIcon } from "lucide-react";
import toast from "react-hot-toast";

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  allDay: boolean;
  backgroundColor?: string;
  borderColor?: string;
}

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  // 1. جلب المواعيد المحفوظة أول ما الصفحة تفتح على المتصفح
  useEffect(() => {
    const savedEvents = localStorage.getItem("calendarEvents");
    if (savedEvents) {
      try {
        setEvents(JSON.parse(savedEvents));
      } catch (e) {
        console.error("Error parsing saved events", e);
      }
    }
  }, []);

  // دالة مساعدة لحفظ التغييرات في الـ localStorage تلقائياً عند أي تعديل
  const saveEventsToStorage = (newEvents: CalendarEvent[]) => {
    setEvents(newEvents);
    localStorage.setItem("calendarEvents", JSON.stringify(newEvents));
  };

  const isPastDate = (dateStr: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    const targetDate = new Date(dateStr);
    targetDate.setHours(0, 0, 0, 0);
    return targetDate < today;
  };

  // 2. إضافة حدث جديد وحفظه
  const handleDateClick = (arg: { dateStr: string }) => {
    if (isPastDate(arg.dateStr)) {
      toast.error("Cannot add events to past dates!", {
        style: { borderRadius: "12px", background: "#334155", color: "#fff" },
      });
      return;
    }

    const title = prompt("Enter Event Title:");
    if (title) {
      const newEvent: CalendarEvent = {
        id: String(Date.now()),
        title,
        start: arg.dateStr,
        allDay: !arg.dateStr.includes("T"),
        backgroundColor: "#4f46e5",
        borderColor: "#4f46e5",
      };
      
      const updatedEvents = [...events, newEvent];
      saveEventsToStorage(updatedEvents); // حفظ في الـ State والـ LocalStorage

      toast.success("Event added successfully!", {
        style: { borderRadius: "12px", background: "#334155", color: "#fff" },
      });
    }
  };

  // 3. حفظ المكان الجديد للحدث عند السحب والإفلات (Drag & Drop)
  const handleEventDrop = (info: EventDropArg) => {
    if (info.event.startStr && isPastDate(info.event.startStr)) {
      toast.error("Cannot move events to past dates!", {
        style: { borderRadius: "12px", background: "#334155", color: "#fff" },
      });
      info.revert(); 
      return;
    }

    const updatedEvents = events.map((event) => {
      if (event.id === info.event.id) {
        return {
          ...event,
          start: info.event.startStr,
          end: info.event.endStr || undefined,
        };
      }
      return event;
    });

    saveEventsToStorage(updatedEvents); // تحديث الحفظ فوراً بعد النقل

    toast.success(`Moved to ${info.event.startStr.split("T")[0]}`, {
      icon: "🎉",
      style: { borderRadius: "12px", background: "#334155", color: "#fff" },
    });
  };

  // 4. حذف الحدث وحذفه من الـ Storage برضه
  const handleEventClick = (clickInfo: { event: { id: string; title: string; remove: () => void } }) => {
    if (confirm(`Are you sure you want to delete '${clickInfo.event.title}'?`)) {
      const filteredEvents = events.filter((e) => e.id !== clickInfo.event.id);
      saveEventsToStorage(filteredEvents); // مسح من الـ Storage
      
      clickInfo.event.remove();
      toast.success("Event deleted successfully.", {
        style: { borderRadius: "12px", background: "#334155", color: "#fff" },
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight flex items-center gap-2">
            <CalendarIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            Calendar & Schedule
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage your team schedule, deadlines, and events interactively.
          </p>
        </div>
        
        <button
          onClick={() => handleDateClick({ dateStr: new Date().toISOString().split("T")[0] })}
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 w-fit"
        >
          <Plus className="h-4 w-4" /> Add New Event
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-x-auto">
        <div className="min-w-[700px] text-slate-900 dark:text-slate-100 fc-theme-custom">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={events}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            eventDrop={handleEventDrop}
          />
        </div>
      </div>

      <style jsx global>{`
        .fc .fc-toolbar-title { font-size: 1.25rem !important; font-weight: 600; }
        .fc .fc-button-primary { background-color: #f1f5f9 !important; border-color: #e2e8f0 !important; color: #334155 !important; font-size: 0.875rem !important; font-weight: 500 !important; border-radius: 0.75rem !important; text-transform: capitalize !important; }
        .dark .fc .fc-button-primary { background-color: #1e293b !important; border-color: #334155 !important; color: #f8fafc !important; }
        .fc .fc-button-primary:hover { background-color: #cbd5e1 !important; }
        .dark .fc .fc-button-primary:hover { background-color: #475569 !important; }
        .fc .fc-button-active { background-color: #6366f1 !important; color: white !important; }
        .fc td, .fc th { border-color: #e2e8f0 !important; }
        .dark .fc td, .dark .fc th { border-color: #334155 !important; }
        .fc .fc-day-today { background-color: #f1f5f9 !important; }
        .dark .fc .fc-day-today { background-color: #1e293b !important; }
      `}</style>
    </div>
  );
}