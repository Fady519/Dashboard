<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366F1,50:8B5CF6,100:A855F7&height=220&section=header&text=NexusPro%20Admin%20Dashboard&fontSize=48&fontColor=ffffff&fontAlignY=38&desc=Next.js%2014%20App%20Router%20%7C%20TypeScript%20%7C%20Tailwind%20CSS%20%7C%20FullCalendar&descSize=16&descAlignY=58&descColor=e0e7ff" width="100%"/>

</div>

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Now-6366F1?style=for-the-badge&logo=vercel&logoColor=white)](https://dashboard-flax-two-20.vercel.app/login)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Source%20Code-181717?style=for-the-badge&logo=github)](https://github.com/Fady519/Dashboard)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Now-8B5CF6?style=for-the-badge)](https://fady519.github.io/MyPortfolio2/)

</div>

---

<div align="center">

## 🖥️ A production-ready commercial Admin Dashboard — not just static UI.
**Next.js 14 App Router · TypeScript · Tailwind CSS · FullCalendar · Interactive Multi-Series Analytics · Hydration-Safe Dark/Light Mode · Session-Guarded RBAC**  
Engineered for enterprise administration workflows, high-frequency analytical monitoring, and zero-flicker visual performance.

</div>

---

## 🌐 Live Preview

<div align="center">

> 🔗 **Live URL:** [dashboard-flax-two-20.vercel.app](https://dashboard-flax-two-20.vercel.app/login)  
> 🔐 **Demo Credentials:** `admin@admin.com` / `admin`

</div>

### 1. Executive Analytics Overview & KPI Cards
![Dashboard Overview](docs/screenshots/01_dashboard_overview.png)

### 2. Interactive FullCalendar Resource Scheduler
![Interactive Calendar](docs/screenshots/02_calendar.png)

### 3. Filterable Invoices & Financial Tracking
![Invoices Management](docs/screenshots/03_invoices.png)

### 4. Modern Glassmorphic Login & Route Guard
![Login Portal](docs/screenshots/04_login.png)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Auth & RBAC Route Protection** | Session-based login with layout-level route guards intercepting unauthenticated access before render |
| 🌗 **Zero-Flicker Dark / Light Mode** | Anti-FOUC inline hydration script preventing theme layout flashes on initial page load |
| 📅 **Interactive FullCalendar Suite** | Complete scheduling workflow with date validation, drag-and-drop, and session-persisted CRUD |
| 📊 **Multi-Series Analytics Charts** | High-density visual metrics for Revenue, Traffic volume, Conversions, and Recent User Activities |
| 🧾 **Invoices & Financial Management** | Filterable data table with payment status indicators (Paid, Pending, Overdue) and search |
| 👥 **Team Roster & Role Management** | Real-time member list with access tier badges (`Admin`, `Manager`, `User`) |
| 🗺️ **Geography Data Visualization** | Country-level choropleth visualization for global traffic distribution |
| 📝 **Multi-Step Validated Forms** | User profile creation form with real-time input validation and feedback |
| 📱 **Mobile-First Responsive Shell** | Collapsible sidebar, mobile drawer navigation, and fluid layouts across all device viewports |

---

## ⚡ Technical Highlights & System Architecture

```
┌────────────────────────────────────────────────────────┐
│                   Next.js 14 App Router                │
│    Root Layout · Theme Provider · Toast Notifications  │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                 Client-Side Route Guard                │
│    Session Validation · Redirects unauthenticated users│
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                Modular Component Shell                 │
│    Collapsible Sidebar · Responsive Topbar · Breadcrumbs│
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│               Interactive Feature Modules              │
│    FullCalendar · Recharts / Nivo · Data Grids · Forms │
└────────────────────────────────────────────────────────┘
```

* **Next.js 14 App Router:** Clean file-based routing architecture with layout-level state persistence.
* **Hydration-Safe Theming:** Inline execution script in `<head>` resolves system/stored theme preference before DOM paint, eliminating flash of unstyled content (FOUC).
* **Strict TypeScript Implementation:** 100% typed props, state interfaces, event handlers, and data models for zero runtime surprises.
* **Component-Level Encapsulation:** High-performance charting and scheduling wrappers isolated from global re-renders.

---

## 🛠️ Tech Stack

<div align="center">

### Core Framework & Language
![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Styling & Animation
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide%20Icons-F56565?style=for-the-badge)
![React Hot Toast](https://img.shields.io/badge/React%20Hot%20Toast-FF4154?style=for-the-badge)

### Visualization & Tooling
![FullCalendar](https://img.shields.io/badge/FullCalendar-4285F4?style=for-the-badge&logo=googlecalendar&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on%20Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🗂️ Dashboard Modules Breakdown

```
📊 1. Overview          → Total Revenue ($), Active Users, Orders, Conversion Rate & Charts
👥 2. Manage Team       → Enterprise member directory with role indicators & access tiers
📇 3. Contacts Info     → Comprehensive client address book with quick search & contact actions
🧾 4. Invoices Balances → Financial ledger tracking invoice IDs, clients, amounts & payment status
👤 5. Profile Form      → Multi-field employee onboarding form with structured validation
📅 6. Calendar Suite    → FullCalendar interactive scheduler with event creation & CRUD
📊 7. Bar & Pie Charts  → Categorical sales and demographic visual breakdown
📈 8. Line Chart        → Temporal metric progression and trend forecasting
🗺️ 9. Geography Chart   → Global user density mapping across continents
```

---

## 📁 Repository Structure

```
Dashboard/
├── app/
│   ├── layout.tsx              # Root layout, theme injection, Toaster provider
│   ├── page.tsx                # Main Executive Overview Dashboard
│   ├── login/                  # Glassmorphic Login portal with auth guard
│   ├── calendar/               # FullCalendar interactive scheduling view
│   ├── team/                   # Team roster and member role management
│   ├── contacts/               # Client address book and details
│   ├── invoices/               # Financial invoices ledger
│   ├── form/                   # Profile registration form
│   ├── bar/                    # Bar chart data visualization
│   ├── pie/                    # Pie chart demographic module
│   ├── line/                   # Line chart trend analysis
│   └── geography/              # Global geographic distribution map
│
├── components/
│   ├── Sidebar.tsx             # Collapsible, mobile-aware navigation shell
│   ├── Topbar.tsx              # Search bar, notifications, dark/light toggle, user profile
│   └── Header.tsx              # Standardized module header with subtitle
│
├── docs/
│   └── screenshots/            # High-resolution production screenshots
└── public/                     # Static brand assets and icons
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js (v18+) & npm](https://nodejs.org/)

### Installation & Local Run
```bash
# 1. Clone the repository
git clone https://github.com/Fady519/Dashboard.git
cd Dashboard

# 2. Install dependencies
npm install

# 3. Start Next.js development server
npm run dev

# The dashboard will be live at http://localhost:3000
```

---

## 🔑 Demo Access

| Account Role | Email Address | Password |
|---|---|---|
| **System Administrator** | `admin@admin.com` | `admin` |

---

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)
[![GitHub](https://img.shields.io/badge/GitHub-Fady519-181717?style=for-the-badge&logo=github)](https://github.com/Fady519)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live%20Now-6366F1?style=for-the-badge)](https://fady519.github.io/MyPortfolio2/)

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366F1,50:8B5CF6,100:A855F7&height=100&section=footer" width="100%"/>

**⭐ If this dashboard inspired you, drop a star on GitHub — it means a lot!**

</div>
