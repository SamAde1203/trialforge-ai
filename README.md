# TrialForge AI 🧪⚡

> AI-powered clinical trial simulator with Monte Carlo power analysis, enhanced scenario dashboards, and CONSORT flow visualization

![TrialForge Screenshot](https://img.shields.io/badge/status-production_ready-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

Transform natural-language clinical trial protocols into powered designs, synthetic cohorts, scenario-based risk summaries, and interactive dashboards — in minutes.[file:185]

## ✨ Features

- **🤖 AI Protocol Parsing** – Convert free-text protocols into structured trial parameters (n, arms, effect sizes, timelines).[file:185]
- **📊 Monte Carlo Simulation** – Power calculations with confidence intervals and dropout modeling.[file:185]
- **📈 CONSORT Flow Diagrams** – Visual participant flow from screening to analysis.[file:185]
- **🎛️ Premium Scenario Dashboard** – Base, conservative, and optimistic scenarios with risk level, confidence, and key KPIs.
- **📤 Publication-Ready Exports** – PDF and text reports with sample size, cost, timeline, and CONSORT-style summaries.
- **📱 Responsive Design** – Modern, mobile-friendly clinical dashboard UX.[file:185]

## 🚀 Quick Start

Clone repository
git clone https://github.com/SamAde1203/trialforge-ai
cd trialforge-ai

Install dependencies
npm install

Set up environment variables
cp .env.example .env.local

Add your OpenAI API key to .env.local
Run development server
npm run dev

Optional: type-check & production build
npm run type-check
npm run build

text

Visit `http://localhost:3000` to start simulating.[file:185]

## 🏗️ Architecture

trialforge-ai/
├── app/
│ ├── api/
│ │ ├── parse-protocol/ # AI protocol parsing (natural language → TrialParams)
│ │ ├── simulate-trial/ # Core Monte Carlo simulation API
│ │ └── enhanced-trial/ # Enhanced multi-scenario simulation API
│ ├── components/
│ │ ├── EnhancedTrialInput.tsx # End-to-end flow: protocol → enhanced simulation → dashboard
│ │ ├── PremiumDashboard.tsx # Base/conservative/optimistic scenario dashboard
│ │ ├── ResultsDashboard.tsx # Core results view
│ │ └── ConsortDiagram/ # Participant flow visualization
│ └── lib/
│ ├── advancedStats.ts # Enhanced simulation & scenario logic
│ ├── realAI.ts # OpenAI-based protocol parsing
│ ├── exportUtils.ts # PDF/text report generation
│ ├── scheduleUtils.ts # Timeline & schedule helpers
│ ├── shareUtils.ts # Share/export helpers
│ └── types.ts # TrialParams, SimulationResult, EnhancedSimulationResult
├── public/ # Static assets (icons, logo, noise textures)
└── package.json

text

## 🔧 Configuration

OpenAI API key (required):

.env.local
OPENAI_API_KEY=your_openai_api_key_here

Optional: Vercel Analytics
VERCEL_ANALYTICS_ID=

Optional: custom simulation parameters
NEXT_PUBLIC_DEFAULT_SIMULATIONS=5000
NEXT_PUBLIC_MAX_DROPOUT_RATE=0.4

text

Simulation defaults:

- 5,000 Monte Carlo simulations per run.[file:185]
- Adjustable dropout rates (0–40 %).
- Configurable significance level (α = 0.05).[file:185]

## 📊 How It Works

1. **Input Protocol** – Paste a natural-language trial description (population, endpoints, arms, timelines).[file:185]
2. **AI Parsing** – GPT-4 extracts `TrialParams` (sample size, effect sizes, endpoint type, follow-up).[file:185]
3. **Enhanced Simulation** – `advancedStats.ts` runs Monte Carlo simulations to generate base, conservative, and optimistic scenarios with power, dropout, cost, and timelines.
4. **Visualization** – `PremiumDashboard` renders key KPIs, scenario comparisons, and trial details.
5. **CONSORT Flow** – Synthetic participant flow is displayed in a CONSORT-style diagram.[file:185]
6. **Export** – `exportUtils.ts` generates PDF and text reports suitable for protocols, methods sections, and appendices.

## 🧮 Statistical Methods

- **Power Calculation** – Two-sample t-test–based power approximation with Monte Carlo resampling.[file:185]
- **Dropout Simulation** – Binomial dropout modeling across arms and scenarios.[file:185]
- **Confidence Intervals** – 95 % CI from simulation replicates.[file:185]
- **CONSORT Modeling** – Assessed → randomized → completed → analyzed counts derived from simulated flows.[file:185]

## 🛠️ Development

Run tests (if configured)
npm test

Build for production
npm run build

Lint code
npm run lint

Format code
npm run format

Strict type-check
npm run type-check

text

## 📝 License

MIT © 2025 TrialForge AI.[file:185]

## 🙏 Acknowledgments

- Built with Next.js 14 + App Router.[file:185]
- AI by OpenAI (GPT-4).[file:185]
- Icons by Lucide; typography by Inter.[file:185]

## ☕ Support the Project

If you find TrialForge AI Pro valuable:

- ⭐ Star the repo  
- 🔄 Share with colleagues  
- 💰 Support development – GitHub Sponsors / Buy Me a Coffee[file:185]

Support helps maintain and improve this open‑source tool for clinical researchers worldwide.[file:185]

## ⚠️ Clinical Governance Notice

TrialForge AI is a research and educational simulation tool.  
It is **not** intended for clinical decision-making, patient care, regulatory submission, or medical-device use. Always consult qualified biostatisticians and regulatory experts.[file:185]