# TrialForge AI 🧪⚡

> AI-powered clinical trial simulator with Monte Carlo power analysis and CONSORT flow visualization

![TrialForge Screenshot](https://img.shields.io/badge/status-production_ready-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

Transform natural-language clinical trial protocols into powered designs, synthetic cohorts, and interactive dashboards — instantly.

## ✨ Features

- **🤖 AI Protocol Parsing** - Convert free-text protocols to structured JSON
- **📊 Monte Carlo Simulation** - Accurate power calculations with confidence intervals
- **📈 CONSORT Flow Diagrams** - Visual participant flow visualization
- **🎛️ Live Sensitivity Analysis** - Adjust parameters in real-time
- **🔬 Statistical Validation** - Proper two-sample t-test power calculations
- **📱 Responsive Design** - Mobile-friendly clinical dashboard

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/SamAde1203/trialforge-ai
cd trialforge-ai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your OpenAI API key to .env.local

# Run development server
npm run dev

Visit http://localhost:3000 to start simulating!

🏗️ Architecture

trialforge-ai/
├── app/
│   ├── api/                    # Edge API routes
│   │   ├── parse-protocol/    # AI protocol parsing
│   │   └── simulate-trial/    # Monte Carlo simulation
│   ├── components/            # React components
│   │   ├── TrialInput.tsx    # Protocol input
│   │   ├── ResultsDashboard/ # Results display
│   │   └── ConsortDiagram/   # Flow visualization
│   └── lib/                   # Core logic
│       ├── stats.ts          # Statistical calculations
│       ├── ai.ts             # AI integration
│       └── types.ts          # TypeScript types
├── public/                    # Static assets
└── package.json
🔧 Configuration
OpenAI API Key: Required for protocol parsing

env
OPENAI_API_KEY=your_key_here
Simulation Parameters:

Default: 5,000 Monte Carlo simulations

Adjustable dropout rates (0-40%)

Configurable significance level (α=0.05)

📊 How It Works
Input Protocol: Paste natural language trial description

AI Parsing: GPT-4 extracts trial parameters (n, weeks, endpoint, arms)

Monte Carlo Simulation: Simulates dropouts and calculates power

Visualization: Interactive charts and CONSORT diagram

Sensitivity Analysis: Adjust parameters live to see effects

🧮 Statistical Methods
Power Calculation: Two-sample t-test approximation

Dropout Simulation: Binomial distribution

Confidence Intervals: 95% CI from Monte Carlo simulations

CONSORT Flow: Realistic participant flow modeling

🛠️ Development
bash
# Run tests
npm test

# Build for production
npm run build

# Lint code
npm run lint

# Format code
npm run format
📝 License
MIT © 2025 TrialForge AI

🙏 Acknowledgments
Built with Next.js

Charts by Recharts

AI by OpenAI

Icons by Lucide

Font by Inter

For researchers, by researchers 🔬



### **5.2 Create `.env.example`**
```env
# OpenAI API Key (required for protocol parsing)
OPENAI_API_KEY=your_openai_api_key_here

# Optional: Vercel Analytics
VERCEL_ANALYTICS_ID=

# Optional: Custom simulation parameters
NEXT_PUBLIC_DEFAULT_SIMULATIONS=5000
NEXT_PUBLIC_MAX_DROPOUT_RATE=0.4

## ⚠️ Clinical Governance Notice
TrialForge AI is a research and educational simulation tool.  
It is **not** intended for clinical decision-making, patient care, regulatory submission,
or medical-device use. Always consult qualified biostatisticians and regulatory experts.

