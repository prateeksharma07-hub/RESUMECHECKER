# CareerLens AI — Professional AI Resume Analyzer & Career Advisor

> **One-Hour College Project MVP** built with React + Vite, Node.js + Express, and Google Gemini API.

CareerLens AI is an intelligent ATS Resume Analyzer and Career Advisory web application. It evaluates a candidate's resume (PDF or pasted text) against any target job description, generates an ATS compatibility score out of 100, maps matching and missing skills, identifies critical strengths and weaknesses, suggests actionable bullet-point rewrites using Google's XYZ formula, recommends alternative job roles, and creates a personalized learning roadmap.

---

## 🌟 Core Features

| # | Feature | Details |
|---|---|---|
| **1** | **Resume Input & PDF Upload** | Upload `.pdf` resumes with drag-and-drop or paste raw resume text with live character & word counters. |
| **2** | **Job Description Input** | Paste custom JD requirements or choose 1-click role presets (*Full Stack*, *Frontend*, *Cloud DevOps*). |
| **3** | **AI Resume Analysis** | Secure, server-side processing using Google's Gemini Flash model with structured JSON schema outputs. |
| **4** | **Resume Score (out of 100)** | Circular radial gauge with dynamic color grading plus 4 sub-scores (*ATS Keywords*, *Skills Alignment*, *Experience Depth*, *Format & Clarity*). |
| **5** | **Matching & Missing Skills** | Color-coded competency matrix highlighting matched skills (green) and critical missing gaps (red/amber) with explanations. |
| **6** | **Strengths & Weaknesses** | Comprehensive evaluation of resume highlights and recruiter red flags (lack of metrics, vague descriptions). |
| **7** | **Improvement Suggestions** | Actionable recommendations with before-and-after bullet rewrites using Google's XYZ formula (`Accomplished [X] by doing [Z] as measured by [Y]`). |
| **8** | **Suitable Job Role Matches** | Discovers adjacent career trajectories suited to the candidate's skillset with match percentages and justifications. |
| **9** | **Personalized Learning Roadmap** | Phased step-by-step career timeline (*Weeks 1-2*, *Weeks 3-4*, *Month 2*) with target skills, hands-on projects, and curated resources. |
| **10** | **Downloadable Analysis Report** | Export report as a styled, printable PDF (via browser print) or download as an offline Markdown (`.md`) file. |

---

## 🏗️ Architecture & Security

- **Frontend**: React 19, Vite, Tailwind CSS (v4 with `@tailwindcss/vite`), Lucide Icons, and Canvas Confetti.
- **Backend**: Node.js, Express, `multer` (in-memory file handling, zero disk footprint), `pdf-parse` (safe text extraction).
- **Gemini API Isolation**: All LLM communications happen exclusively on the Express backend (`server/services/geminiService.js`). API keys are never bundled into client code.
- **Zero-Crash Presentation Mode**: If no API key is provided or if quota limits are reached during an evaluation, CareerLens AI automatically falls back to its internal heuristic engine, guaranteeing a seamless presentation without crashes.
- **No Database / No Auth**: Simple, stateless, and runs instantly on localhost.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v24.21.0)
- **npm** (or `npm.cmd` on Windows)

### 2. Install Dependencies
Dependencies have already been installed, but if setting up on a new machine:

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 3. (Optional) Configure Gemini API Key
To enable live Gemini AI generation:
1. Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Open `server/.env` and paste your key:
   ```env
   PORT=5000
   GEMINI_API_KEY=AIzaSy...
   ```
*(Note: If omitted, CareerLens AI runs in Smart Fallback Demo Mode with realistic data extracted from your resume & JD).*

You can also input your Gemini key directly in the web app UI using the **"API Key"** button in the top navigation bar.

---

### 4. Running the Application

Open two terminal windows:

#### Terminal 1 — Start Backend Server:
```bash
cd server
npm start
```
*The server will start at `http://localhost:5000`.*

#### Terminal 2 — Start Frontend Client:
```bash
cd client
npm run dev
```
*The frontend will start at `http://localhost:5173`.*

Open your browser and navigate to:
👉 **`http://localhost:5173`**

---

## ⚡ 1-Click Demo for Presentations

To test the application in 5 seconds during a presentation or viva:
1. Click **"Quick Demo: Full Stack Role"** or **"Quick Demo: Data Science Role"** in the hero section.
2. The resume and target job description will be pre-filled automatically.
3. Click **"Analyze Resume & Generate Career Roadmap"**.
4. Review the animated analysis progress, score gauge, skills matrix, recommendations, and roadmap.
5. Click **"Download Analysis Report"** to show printable PDF export and Markdown download.

---

## 📁 Project Structure

```
RESUME/
├── client/                      # React + Vite Frontend
│   ├── index.html               # Web application entry point
│   ├── vite.config.js           # Vite config with proxy to localhost:5000
│   ├── package.json             # Frontend dependencies
│   └── src/
│       ├── main.jsx             # React DOM root
│       ├── App.jsx              # Core application coordinator & state
│       ├── index.css            # Tailwind CSS styling and print media rules
│       ├── components/
│       │   ├── Navbar.jsx       # Header, status pill, API key modal toggle
│       │   ├── Hero.jsx         # Hero section & 1-click presentation demo buttons
│       │   ├── InputSection.jsx # Dual-mode PDF Dropzone / Text Paste & JD input
│       │   ├── ScoreOverview.jsx# Radial score gauge (0-100) & dimension bars
│       │   ├── SkillsAnalysis.jsx # Matched skills vs missing critical skills
│       │   ├── StrengthsWeaknesses.jsx # Strengths and identified weaknesses
│       │   ├── Recommendations.jsx # Actionable rewrites with Google XYZ formula
│       │   ├── RoleMatches.jsx  # Suitable adjacent job roles
│       │   ├── RoadmapTimeline.jsx # Phased learning roadmap with projects
│       │   ├── ReportModal.jsx  # Downloadable & printable executive report
│       │   ├── ApiKeyModal.jsx  # Secure custom Gemini API key dialog
│       │   └── LoadingSkeleton.jsx # Multi-stage animated analysis loader
│       └── utils/
│           └── presets.js       # Curated sample resumes & job descriptions
├── server/                      # Node.js + Express Backend
│   ├── index.js                 # Express server configuration
│   ├── package.json             # Backend dependencies
│   ├── .env.example             # Environment template
│   ├── .env                     # Server environment file
│   ├── routes/
│   │   └── analyze.js           # /api/analyze & /api/health endpoints
│   └── services/
│       ├── geminiService.js     # Gemini API integration & fallback engine
│       └── pdfService.js        # Server-side PDF extraction with pdf-parse
└── README.md                    # Project documentation
```

---

## 🎓 College Project Viva / Defense Highlights

- **ATS Relevance**: Modern ATS algorithms use semantic cosine similarity and token matching to rank candidates. CareerLens AI simulates this process by analyzing keyword density and competency overlap.
- **Google XYZ Formula**: Recruiter-approved resume writing standard: *"Accomplished [X] as measured by [Y] by doing [Z]"*. CareerLens AI transforms passive duty descriptions into measurable impact statements.
- **Fail-Safe Design**: Incorporates defensive programming with a deterministic local heuristic fallback so network fluctuations or API rate limits never disrupt a live demo.
