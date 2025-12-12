# Contributing to TrialForge AI

Thank you for your interest in contributing to **TrialForge AI** — an open research toolkit for clinical trial simulation, protocol parsing, and Monte Carlo power analysis.

We welcome contributions from:
- Clinical methodologists
- Biostatisticians
- AI/ML researchers
- TypeScript / Next.js developers
- Open-source contributors

---

## 🧱 Development Philosophy
TrialForge AI prioritises:

1. **Transparency** – deterministic statistical modelling, reproducibility, logged assumptions.  
2. **Safety** – no PHI, no medical-device functionality, no clinical decision support.  
3. **Rigor** – clinically plausible defaults, validated statistical transforms, clear disclaimers.  
4. **Clarity** – readable code, modular components, unit-tested functions.

---

## 🛠️ How to Contribute

### 1. Fork the repository
```bash
git clone https://github.com/SamAde1203/trialforge-ai.git
cd trialforge-ai
npm install
npm run dev
2. Create a feature branch
bash
Copy code
git checkout -b feature/my-feature
3. Make changes with good commit hygiene
Follow conventional commits:

vbnet
Copy code
feat: add new simulation engine
fix: resolve dropout modelling error
docs: update README with new outputs
4. Run lint + type checks
bash
Copy code
npm run lint
npm run type-check
5. Submit a Pull Request
PRs should include:

Clear description of your change

Screenshots (for UI updates)

Links to related issues

Notes on any statistical or clinical assumptions introduced

A maintainer will review and request changes if necessary.

🧪 Testing
Simulation, statistical, and AI-parsing logic should include:

Unit tests

Input validation

Deterministic mode for reproducibility

(Full testing suite coming soon.)

🛡 Governance & Safety Notes
TrialForge AI is not a medical device.
All contributions must:

Avoid patient-level data

Avoid clinical decision support

Avoid claims of diagnostic, therapeutic, or regulatory validity

🏆 Thank You
Your contributions help TrialForge AI empower researchers, methodologists, and innovation labs worldwide.

