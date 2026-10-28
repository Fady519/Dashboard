<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366F1,50:8B5CF6,100:A855F7&height=220&section=header&text=Admin%20Dashboard&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Next.js%2016%20%7C%20React%2019%20%7C%20TypeScript%20%7C%20Tailwind%20CSS%204&descSize=16&descAlignY=58&descColor=e0e7ff" width="100%"/>

</div>

<div align="center">

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20Now-6366F1?style=for-the-badge&logo=vercel&logoColor=white)](https://dashboard-flax-two-20.vercel.app/login)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Source%20Code-181717?style=for-the-badge&logo=github)](https://github.com/Fady519/Dashboard)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Now-8B5CF6?style=for-the-badge)](https://fady519.github.io/Portfolio-Fady/)

</div>

---

<div align="center">

## 🖥️ A frontend admin dashboard built with Next.js 16

**Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS 4 · Recharts · FullCalendar · React Hook Form + Zod · Dark / Light Mode**

A practice project focused on the frontend: layouts, charts, forms, a calendar and a responsive shell.
There is no backend: sample data comes from [DummyJSON](https://dummyjson.com) and from local arrays, and the login is a demo stored in the browser.

</div>

---

## 🌐 Live Preview

<div align="center">

> 🔗 **Live URL:** [dashboard-flax-two-20.vercel.app](https://dashboard-flax-two-20.vercel.app/login)  
> 🔐 **Demo account:** `admin@admin.com` / `admin` (or click **Use demo account** on the login page)

</div>

### 1. Overview: KPI Cards & Revenue Chart
![Dashboard Overview](docs/screenshots/01_dashboard_overview.png)

### 2. FullCalendar Scheduler
![Interactive Calendar](docs/screenshots/02_calendar.png)

### 3. Invoices Table with Status Filter
![Invoices Management](docs/screenshots/03_invoices.png)

### 4. Login Page
![Login Portal](docs/screenshots/04_login.png)

### 5. Team List
![Team Management](docs/screenshots/05_team_management.png)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Demo Login & Route Guard** | Register / login stored in the browser (`localStorage` + `sessionStorage`); the root layout redirects to `/login` when there is no session. This is a frontend demo, not real authentication |
| 🌗 **Dark / Light Mode** | Theme saved in `localStorage` and applied by an inline script in `<head>` before the first paint, so the page does not flash the wrong theme |
| 📅 **FullCalendar Scheduler** | Month / week / day views, click a date to add an event, drag and drop to move it, click to delete; events are saved in `localStorage` |
| 📊 **Charts** | Area, bar, line and pie charts with Recharts, plus a daily / weekly / monthly switch on the overview chart |
| 🧾 **Invoices** | Table built from DummyJSON users with a paid / pending filter |
| 👥 **Team & Contacts** | Lists loaded from DummyJSON with search and a role filter (the roles are display badges) |
| 🗺️ **Geography** | 3D globe (`react-globe.gl`) with sample country data; click a country to focus the camera on it |
| 📝 **Validated Form** | Profile form built with React Hook Form and a Zod schema |
| 📱 **Responsive Shell** | Collapsible sidebar, mobile drawer and layouts that work from phone to desktop |

---

## 🛠️ Tech Stack

<div align="center">

### Framework & Language
![Next.js](https://img.shields.io/badge/Next.js%2016-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%204-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide%20Icons-F56565?style=for-the-badge)
![React Hot Toast](https://img.shields.io/badge/React%20Hot%20Toast-FF4154?style=for-the-badge)

### Charts, Calendar & Forms
![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge)
![FullCalendar](https://img.shields.io/badge/FullCalendar-4285F4?style=for-the-badge&logo=googlecalendar&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on%20Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🗂️ Pages

```
📊 Overview      → KPI cards, revenue area chart (daily / weekly / monthly), recent activity
👥 Team          → Team list from DummyJSON with search and role filter
📇 Contacts      → Contact list from DummyJSON with search
🧾 Invoices      → Invoices table with paid / pending filter
📝 Form          → Profile form (React Hook Form + Zod)
📅 Calendar      → FullCalendar with add / move / delete, saved in localStorage
📊 Bar & Pie     → Sample sales and category charts
📈 Line          → Sample weekly trend chart
🗺️ Geography     → 3D globe with sample country data
❓ FAQ           → Accordion page
```

---

## 📁 Repository Structure

```
Dashboard/
├── app/
│   ├── layout.tsx         # Root layout: theme script, route guard, sidebar + topbar, toaster
│   ├── page.tsx           # Overview
│   ├── login/             # Login (with demo account)
│   ├── register/          # Register (saved in localStorage)
│   ├── calendar/          # FullCalendar scheduler
│   ├── team/              # Team list
│   ├── contacts/          # Contacts list
│   ├── invoices/          # Invoices table
│   ├── form/              # Profile form
│   ├── barChart/          # Bar chart
│   ├── pieCharts/         # Pie chart
│   ├── lineChart/         # Line chart
│   ├── geography/         # 3D globe
│   └── faq/               # FAQ
│
├── components/
│   ├── Sidebar.tsx        # Collapsible navigation, mobile drawer
│   ├── Topbar.tsx         # Theme toggle, user menu, logout
│   ├── StatCard.tsx       # KPI card
│   └── RecentActivity.tsx # Activity list on the overview
│
└── docs/screenshots/      # README screenshots
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js 20+ & npm](https://nodejs.org/)

### Installation & Local Run
```bash
# 1. Clone the repository
git clone https://github.com/Fady519/Dashboard.git
cd Dashboard

# 2. Install dependencies
npm install

# 3. Start the Next.js development server
npm run dev

# The dashboard runs at http://localhost:3000
```

---

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)
[![GitHub](https://img.shields.io/badge/GitHub-Fady519-181717?style=for-the-badge&logo=github)](https://github.com/Fady519)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live%20Now-6366F1?style=for-the-badge)](https://fady519.github.io/Portfolio-Fady/)

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366F1,50:8B5CF6,100:A855F7&height=100&section=footer" width="100%"/>

</div>
