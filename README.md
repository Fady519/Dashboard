<div align="center">

# 🖥️ Advanced Admin Dashboard

### A full-featured, responsive admin panel built with Next.js 14, TypeScript, and Tailwind CSS

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Available-22c55e?style=for-the-badge)](https://dashboard-flax-two-20.vercel.app/login)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Fady519/Dashboard)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

</div>

---

## 📌 Overview

**Advanced Admin Dashboard** is a production-ready, mobile-first admin panel that demonstrates modern full stack frontend engineering skills. Built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**, the dashboard features a complete authentication flow, dynamic theming, interactive scheduling, and multiple analytics and management modules — all in a clean, fully responsive layout.

> 🔐 **Demo Credentials:** Email: `admin@admin.com` &nbsp;|&nbsp; Password: `admin`

---

## ✨ Features

### 🔐 Authentication & Access Control
- Session-based login with protected route guards
- Role-based access control (RBAC) using `localStorage` and `sessionStorage`
- Automatic redirect to login on unauthorized access
- Session persistence across page refreshes

### 🌗 Dynamic Theming
- Full dark / light mode toggle with system preference detection
- Theme persisted in `localStorage` — no flickering on reload
- Hydration-safe implementation preventing layout shifts (no FOUC)

### 📅 Interactive Scheduling
- Integrated **FullCalendar** with drag-and-drop event management
- Date validation logic blocking bookings on past dates
- Calendar state persisted in `sessionStorage` across navigation

### 📊 Analytics & Management Modules

| Module | Description |
|---|---|
| 📈 **Overview Charts** | Revenue, traffic, and performance visualizations |
| 🧾 **Invoices** | Filterable invoice table with status tracking |
| 👥 **Team Management** | Member list with role and status indicators |
| 📝 **Forms** | Validated forms with real-time error feedback |
| 🗺️ **Geography** | Interactive country-level data visualization |
| 📅 **Calendar** | Event scheduling with FullCalendar integration |

### 📱 Responsive Design
- Mobile-first layout with collapsible sidebar
- Fully responsive across all screen sizes (mobile, tablet, desktop)
- Consistent UI behavior on all major browsers

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Scheduling** | FullCalendar |
| **Notifications** | React Hot Toast |
| **State** | localStorage / sessionStorage |
| **Deployment** | Vercel |

---

## 🗂️ Project Structure

```
Dashboard/
├── app/
│   ├── (auth)/
│   │   └── login/          # Login page with auth logic
│   ├── (dashboard)/
│   │   ├── layout.tsx       # Protected dashboard layout
│   │   ├── page.tsx         # Overview / home
│   │   ├── calendar/        # FullCalendar scheduling module
│   │   ├── invoices/        # Invoice management table
│   │   ├── team/            # Team member management
│   │   ├── form/            # Validated forms module
│   │   └── geography/       # Country data visualization
│   └── layout.tsx           # Root layout with theme provider
├── components/
│   ├── Sidebar.tsx          # Collapsible responsive sidebar
│   ├── Topbar.tsx           # Header with theme toggle
│   ├── charts/              # Reusable chart components
│   └── ui/                  # Shared UI components
├── hooks/
│   └── useAuth.ts           # Session-based auth hook
├── lib/
│   └── theme.ts             # Dark/light mode utilities
└── types/                   # TypeScript type definitions
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Fady519/Dashboard.git

# 2. Navigate to the project directory
cd Dashboard

# 3. Install dependencies
npm install
# or
yarn install

# 4. Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Login with:** `admin@admin.com` / `admin`

---

## 🔑 Key Technical Decisions

### ✅ Hydration-Safe Dark Mode
The theme toggle is implemented to prevent the "flash of unstyled content" (FOUC) — a common issue with SSR apps. Theme is read before hydration using an inline script injected into `<head>`, ensuring the correct class is applied before React mounts.

### ✅ Session Persistence Without a Backend
All authentication state and calendar data are managed via `localStorage` and `sessionStorage`, demonstrating how to build stateful, persistent UX without a backend dependency.

### ✅ Route Protection with Next.js App Router
Protected routes are implemented using a layout-level auth check. Unauthenticated users are redirected to `/login` before any protected component renders.

### ✅ TypeScript Throughout
All components, hooks, and utilities are fully typed, making the codebase scalable and safe to extend.

---

## 📸 Screenshots

> 🔗 [View the live demo →](https://dashboard-flax-two-20.vercel.app/login)

| Login Page | Dashboard Overview |
|---|---|
| Authentication with session guard | Charts, stats, and analytics |

| Calendar | Team Management |
|---|---|
| FullCalendar with date validation | Member roles and status |

---

## 🌐 Deployment

This project is deployed on **Vercel** with zero-config Next.js support.

To deploy your own instance:

```bash
npm run build
# or deploy directly via Vercel CLI
vercel --prod
```

---

## 📈 What I Learned

- Building **protected routing** with Next.js 14 App Router without an external auth library
- Implementing **hydration-safe dark mode** in a server-rendered environment
- Managing **persistent client-side state** using Web Storage APIs across route changes
- Integrating **FullCalendar** in a TypeScript/Next.js project with custom validation logic
- Structuring a scalable Next.js project with clear separation of concerns

---

## 🤝 Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady_Kaiser-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/fady-kaiser/)
[![GitHub](https://img.shields.io/badge/GitHub-Fady519-181717?style=for-the-badge&logo=github)](https://github.com/Fady519)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-22c55e?style=for-the-badge&logo=vercel)](https://fady519.github.io/Portfolio-Fady/)

</div>

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Fady519">Fady Kaiser</a> — 2025</sub>
</div>
