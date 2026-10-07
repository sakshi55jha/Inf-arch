# Inches & Feet (INF) 

A state-of-the-art, end-to-end full-stack clone of **[Inches & Feet](https://inchesnfeet.com/)** built with **React**, **Node.js (Express)**, and **MongoDB (Mongoose)**.

---

## 🌟 Architecture & Key Features

### 🖥️ Frontend (React + Vite)
- **Design System & Typography**: Sleek luxury dark architectural palette (`#0a0c10`, `#11151e`) with warm gold accents (`#c59b27`), glassmorphism, responsive grid layouts, and typography inspired by `Teko` and `Open Sans`.
- **Real Asset Assets**: Bundles all **130+ original high-resolution assets** (logos, project elevations, studio life photos, carousel slides).
- **Navigation & Sticky Header**: Top corporate coordinates header, sticky blur backdrop navbar, mobile drawer, and quick consultation CTA.
- **Hero Carousel Slider**: Interactive 5-slide architectural showcase with automatic playback, touch/mouse navigation, badges, and smooth crossfades.
- **Services Engine**: 6 core architectural disciplines with interactive preview, deliverables checklist, and direct booking.
- **Filterable Portfolio (54 Projects)**: Real-time category filtering (*All, Residential, Hospitality & Cafes, Commercial, Architecture & BIM*), keyword search, project cards with hover zoom, and full-screen **Project Detail Modal**.
- **Interactive Real-Time Cost Estimator**: Live architectural fee calculator allowing clients to choose property type, adjust square footage slider (600 - 15,000 sq.ft), select scope checkboxes, choose execution tiers, calculate instant price range, and request formal proposals.
- **Career Portal**: Detailed job listings (*Senior Architect, BIM Specialist, Interior Designer, 3D Visualizer*) with direct application submission into MongoDB.
- **Life @ INF Studio**: Photo gallery of team culture, design sprints, and celebrations with an interactive lightbox viewer.
- **Admin Management Console (`/admin`)**: Real-time KPI dashboard tracking total inquiries, quotations, applications, projects, and subscribers with status updates and project creation.
- **Legal Suite**: Dedicated pages for Privacy Policy, Terms & Conditions, Shipping Policy, and Refund Policy.

---

### ⚙️ Backend (Node.js + Express + MongoDB)
- **RESTful Endpoints**:
  - `GET /api/projects`: Filter by category, keyword search, or featured status.
  - `POST /api/projects`: Publish new architectural projects.
  - `DELETE /api/projects/:id`: Remove projects.
  - `POST /api/inquiries`: Record consultation and contact inquiries.
  - `GET /api/inquiries`: List all inquiries with status filtering.
  - `PATCH /api/inquiries/:id`: Update inquiry status (*New, In Review, Contacted, Scheduled, Completed*).
  - `POST /api/quotations`: Record custom project price calculations.
  - `GET /api/quotations`: List quotation requests.
  - `PATCH /api/quotations/:id`: Update quote status.
  - `POST /api/applications`: Submit career applications with portfolio links.
  - `GET /api/applications`: List applicants with status filtering.
  - `PATCH /api/applications/:id`: Update applicant status (*Submitted, Shortlisted, Interviewing, Offered*).
  - `POST /api/newsletter/subscribe`: Record newsletter subscribers.
  - `GET /api/stats`: Real-time aggregation of all database metrics.
  - `GET /api/health`: Database connection and service health check.
- **Database Seeding**: Automatically seeded with all **54 real architectural projects**, real client testimonials, and initial demo records.

---

## 🚀 Running the Project

### 1. Prerequisites
- **Node.js** (v18+)
- **MongoDB** running locally on port `27017` or configured via `server/.env` (`MONGODB_URI`).

### 2. Start the Backend Server
```bash
cd server
npm install
node server.js
```
The server will start on `http://localhost:5000` and connect to `mongodb://127.0.0.1:27017/inchesnfeet`.

### 3. Seed Database (Optional / One-time)
```bash
node server/seed/seedData.js
```

### 4. Start the React Frontend
```bash
cd client
npm install
npm run dev -- --port 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 5. Run Automated E2E Tests
```bash
node test_e2e.js
```
Validates frontend availability, backend health, MongoDB project catalog, consultation submission, quotation calculation, career application submission, newsletter subscription, and admin KPI stats.

---

## 📂 Project Directory Structure

```
inf/
├── client/                     # React + Vite Frontend
│   ├── public/
│   │   ├── assets/             # Real logos, icons, carousel images
│   │   └── images/             # 54 Project photographs & Life@INF gallery
│   ├── src/
│   │   ├── components/         # Navbar, Footer, HeroSlider, CostEstimator, etc.
│   │   ├── pages/              # Home, About, Projects, Services, Life, Pricing, Careers, Contact, Admin
│   │   ├── services/api.js     # Centralized API client
│   │   ├── styles/index.css    # Architectural luxury dark design system
│   │   ├── App.jsx             # React Router 6 configuration
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js
│
├── server/                     # Node.js + Express + MongoDB Backend
│   ├── config/db.js            # Mongoose connection
│   ├── models/                 # Project, Inquiry, Quotation, Application, Testimonial, Newsletter
│   ├── routes/                 # Express API routes
│   ├── seed/seedData.js        # Seeds 54 projects & initial data
│   ├── .env                    # Environment variables
│   └── server.js               # Express application entry point
│
├── test_e2e.js                 # Automated full-stack verification script
└── package.json
```
