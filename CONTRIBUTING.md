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

### 1. Fork & set up locally

git clone https://github.com/SamAde1203/trialforge-ai.git
cd trialforge-ai
npm install
npm run dev
2. Create a feature branch
bash
Copy code
git checkout -b feature/my-feature
3. Commit messages
Follow a conventional commits style:

text
Copy code
feat: add new simulation engine
fix: resolve dropout modelling error
docs: update README with new outputs
chore: update dependencies
refactor: simplify power calculation
4. Run lint & type checks
Before opening a PR, please run:


npm run lint
npm run type-check
🧪 Testing
Simulation, statistical, and AI-parsing logic should aim to include:

Unit tests (where reasonable)

Input validation

Deterministic modes for reproducibility

A full testing suite is planned; for now, focus on not breaking existing behaviour and keeping functions pure where possible.

🛡 Governance & Safety Notes
TrialForge AI is not a medical device.

All contributions must:

Avoid patient-level data and PHI

Avoid clinical decision support functionality

Avoid claims of diagnostic, therapeutic, or regulatory validity

Preserve and respect existing disclaimers

If you are unsure whether a feature crosses that line, open an issue first and we’ll discuss.

🤝 Pull Request Guidelines
PRs should include:

A clear description of what changed and why

Screenshots / GIFs for significant UI updates

Notes on any statistical or clinical assumptions introduced

Links to related issues (e.g. Closes #12)

A maintainer will review your PR and may request changes before merging.

🏆 Thank You
Your contributions help TrialForge AI empower researchers, methodologists, and innovation labs worldwide.
Thank you for helping make trial design and simulation more transparent, rigorous, and accessible.