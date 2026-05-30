<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366F1,50:8B5CF6,100:A855F7&height=220&section=header&text=Admin%20Dashboard&fontSize=60&fontColor=ffffff&fontAlignY=38&desc=Fady%20Kaiser%20%E2%80%94%20Next.js%2014%20%7C%20TypeScript%20%7C%20Tailwind%20CSS&descSize=20&descAlignY=58&descColor=ffffff" width="100%"/>

</div>

<div align="center">

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Now-6366F1?style=for-the-badge)](https://dashboard-flax-two-20.vercel.app/login)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Source%20Code-181717?style=for-the-badge&logo=github)](https://github.com/Fady519/Dashboard)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)

</div>

---

<div align="center">

## 🖥️ A full-featured, mobile-first Admin Dashboard.

RBAC Authentication. Dark / Light Mode. Interactive Calendar. Analytics Modules.  
Built with Next.js 14 App Router. Designed for real-world admin workflows.

</div>

---

## 🌐 Live Preview

<div align="center">

> 🔗 **[dashboard-flax-two-20.vercel.app](https://dashboard-flax-two-20.vercel.app/login)**

> 🔐 **Demo credentials:** `admin@admin.com` / `admin`

> _Add a screenshot or GIF here_

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Auth & RBAC** | Session-based login with role-based protected routes |
| 🌗 **Dark / Light Mode** | Hydration-safe theme toggle — no flash on reload |
| 📅 **Interactive Calendar** | FullCalendar with date validation & session-persisted state |
| 📊 **Analytics Charts** | Revenue, traffic, and KPI visualizations |
| 🧾 **Invoice Management** | Filterable table with status tracking |
| 👥 **Team Management** | Member list with roles and status indicators |
| 🗺️ **Geography Module** | Country-level interactive data visualization |
| 📝 **Validated Forms** | Real-time form validation with inline error feedback |
| 📱 **Fully Responsive** | Mobile-first layout with collapsible sidebar across all screen sizes |

---

## ⚡ Technical Highlights

```
✦ Next.js 14 App Router  → file-based routing with layout-level route guards
✦ Hydration-safe theming → inline script in <head> prevents FOUC on SSR
✦ No backend required    → auth & calendar state via localStorage / sessionStorage
✦ TypeScript throughout  → fully typed components, hooks, and utilities
✦ RBAC route protection  → unauthenticated users redirected before render
```

---

## 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![FullCalendar](https://img.shields.io/badge/FullCalendar-4285F4?style=for-the-badge&logo=googlecalendar&logoColor=white)
![React Hot Toast](https://img.shields.io/badge/React%20Hot%20Toast-FF4154?style=for-the-badge&logo=react&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on%20Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🗂️ Dashboard Modules

```
📊 Overview        → Charts, KPIs, and summary stats
🧾 Invoices        → Table view with filter and status tracking
👥 Team            → Member management with role indicators
📝 Form            → Multi-field validated forms
🗺️ Geography       → Country-level data visualization
📅 Calendar        → FullCalendar scheduling with date validation
```

---

## 📁 Project Structure

```
Dashboard/
│
├── app/
│   ├── (auth)/
│   │   └── login/              # Login page with session auth
│   ├── (dashboard)/
│   │   ├── layout.tsx           # Protected layout with route guard
│   │   ├── page.tsx             # Overview / home
│   │   ├── calendar/            # FullCalendar scheduling module
│   │   ├── invoices/            # Invoice management table
│   │   ├── team/                # Team member management
│   │   ├── form/                # Validated forms module
│   │   └── geography/           # Country data visualization
│   └── layout.tsx               # Root layout with theme provider
│
├── components/
│   ├── Sidebar.tsx              # Collapsible responsive sidebar
│   ├── Topbar.tsx               # Header with theme toggle
│   ├── charts/                  # Reusable chart components
│   └── ui/                      # Shared UI primitives
│
├── hooks/
│   └── useAuth.ts               # Session-based auth hook
│
├── lib/
│   └── theme.ts                 # Dark / light mode utilities
│
└── types/                       # Global TypeScript definitions
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Fady519/Dashboard.git
cd Dashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and log in with:

```
Email:    admin@admin.com
Password: admin
```

### Build & Deploy

```bash
npm run build
# or deploy directly via Vercel
vercel --prod
```

---

## 🔑 Key Technical Decisions

**Hydration-Safe Dark Mode**  
The theme is injected via an inline `<script>` in `<head>` before React hydrates, completely eliminating the flash of unstyled content (FOUC) that affects most SSR dark-mode implementations.

**Route Protection Without an Auth Library**  
Protected routes are handled at the layout level using a custom `useAuth` hook that reads from `sessionStorage`. Unauthenticated users are redirected to `/login` before any protected component renders — no NextAuth, no third-party dependency.

**Client-Side Persistence Without a Backend**  
All authentication state and calendar data are stored in `localStorage` and `sessionStorage`, demonstrating how to build persistent, stateful UX in a frontend-only project.

---

## 📈 What I Learned

- Implementing **protected routing** with Next.js 14 App Router at the layout level
- Solving **SSR hydration mismatch** for dark mode in a server-rendered environment
- Managing **persistent client-side state** across route changes with Web Storage APIs
- Integrating **FullCalendar** in TypeScript with custom date validation
- Structuring a scalable Next.js project with **clean separation of concerns**

---

## 📬 Contact

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)
[![GitHub](https://img.shields.io/badge/GitHub-Fady519-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Fady519)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live%20Now-6366F1?style=for-the-badge)](https://fady519.github.io/Portfolio-Fady/)

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366F1,50:8B5CF6,100:A855F7&height=100&section=footer" width="100%"/>

**⭐ Found it useful? Drop a star — it means a lot!**

</div>
