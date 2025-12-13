// Component: SolutionsSection.tsx
export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">
            Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for every stage of trial design
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Whether you're in early concept, pre-FPFV planning, or managing
            adaptive protocols, TrialForge AI meets you where you are.
          </p>
        </div>

        {/* Solutions grid: 4 use cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Solution 1: Early-stage sponsor/biotech */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-8 hover:border-slate-600 hover:bg-slate-900/80 transition-all">
            <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 mb-4">
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Early-stage sponsors & biotech
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              You have a hypothesis and a small dataset. Need to build a
              credible, defensible proof-of-concept protocol before raising
              capital or partnering.
            </p>
            <div className="space-y-3 mb-6 border-t border-slate-700/50 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                How TrialForge helps
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-300 mt-1">›</span>
                  <span>Rapid go/no-go decision framework before protocol lock</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-300 mt-1">›</span>
                  <span>
                    Quantify probability of success under real-world assumptions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-300 mt-1">›</span>
                  <span>
                    Create compelling investor/partner decks with simulation
                    outputs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-300 mt-1">›</span>
                  <span>Iterate protocol design in hours, not weeks</span>
                </li>
              </ul>
            </div>
            <a
              href="#demo"
              className="inline-flex items-center text-xs font-semibold text-cyan-300 hover:text-cyan-200"
            >
              See demo →
            </a>
          </div>

          {/* Solution 2: Academic researchers & CROs */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-8 hover:border-slate-600 hover:bg-slate-900/80 transition-all">
            <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-400/10 mb-4">
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.001c0 5.591 3.824 10.29 9 11.622m0-13c5.5 0 10 4.747 10 10.001 0 5.591-3.824 10.29-9 11.622"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Academic researchers & CROs
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              You're designing multi-site, potentially platform trials. Need
              robust, transparent statistical reasoning that holds up to peer
              review and regulatory scrutiny.
            </p>
            <div className="space-y-3 mb-6 border-t border-slate-700/50 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                How TrialForge helps
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-1">›</span>
                  <span>
                    Simulation-based justification for sample size & operating
                    characteristics
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-1">›</span>
                  <span>
                    Platform trial support with multi-arm error control
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-1">›</span>
                  <span>
                    Export publication-ready methodology & appendices
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-1">›</span>
                  <span>Collaborative dashboards for multi-site governance</span>
                </li>
              </ul>
            </div>
            <a
              href="#demo"
              className="inline-flex items-center text-xs font-semibold text-purple-300 hover:text-purple-200"
            >
              See demo →
            </a>
          </div>

          {/* Solution 3: Regulatory & statistical teams */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-8 hover:border-slate-600 hover:bg-slate-900/80 transition-all">
            <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 mb-4">
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Regulatory & statistical teams
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              You review protocols, negotiate with sponsors, and need to defend
              statistical approaches to regulators. Every assumption must be
              justified and reproducible.
            </p>
            <div className="space-y-3 mb-6 border-t border-slate-700/50 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                How TrialForge helps
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300 mt-1">›</span>
                  <span>
                    Transparent, auditable assumptions behind sample size & power
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300 mt-1">›</span>
                  <span>
                    Full reproducibility: download seeds, code, and methodology
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300 mt-1">›</span>
                  <span>
                    Identify and de-risk overly optimistic assumptions early
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-300 mt-1">›</span>
                  <span>
                    Facilitate governance conversations with clear scenario
                    analysis
                  </span>
                </li>
              </ul>
            </div>
            <a
              href="#demo"
              className="inline-flex items-center text-xs font-semibold text-emerald-300 hover:text-emerald-200"
            >
              See demo →
            </a>
          </div>

          {/* Solution 4: Programme & project management */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-8 hover:border-slate-600 hover:bg-slate-900/80 transition-all">
            <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-400/10 mb-4">
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Programme & project managers
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              You own timelines, budgets, and risk. Need clear, data-driven
              forecasts of database-lock dates and feasibility under multiple
              scenarios.
            </p>
            <div className="space-y-3 mb-6 border-t border-slate-700/50 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                How TrialForge helps
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-orange-300 mt-1">›</span>
                  <span>
                    Realistic timeline forecasting based on stochastic
                    recruitment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-300 mt-1">›</span>
                  <span>
                    Scenario-based contingency planning (best, likely, worst
                    case)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-300 mt-1">›</span>
                  <span>
                    Identify critical recruitment & dropout risks before
                    FPFV
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-300 mt-1">›</span>
                  <span>
                    Executive-friendly dashboards for steering committee & PMB
                  </span>
                </li>
              </ul>
            </div>
            <a
              href="#demo"
              className="inline-flex items-center text-xs font-semibold text-orange-300 hover:text-orange-200"
            >
              See demo →
            </a>
          </div>
        </div>

        {/* Comparison matrix */}
        <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Feature comparison by role
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th scope="col" className="text-left py-3 px-4 font-semibold text-slate-300">
                    Feature
                  </th>
                  <th scope="col" className="text-center py-3 px-4 font-semibold text-slate-300">
                    Sponsors
                  </th>
                  <th scope="col" className="text-center py-3 px-4 font-semibold text-slate-300">
                    Academic
                  </th>
                  <th scope="col" className="text-center py-3 px-4 font-semibold text-slate-300">
                    Regulatory
                  </th>
                  <th scope="col" className="text-center py-3 px-4 font-semibold text-slate-300">
                    Programme
                  </th>
                </tr>
              </thead>
              <tbody>
  {[
    ['Natural language protocol input', true, true, true, true],
    ['AI parameter extraction', true, true, true, true],
    ['Monte Carlo simulation', true, true, true, true],
    ['Interactive dashboard', true, true, true, true],
    ['Multi-scenario analysis', true, true, true, true],
    ['Platform trial support', true, true, true, false],
    ['Recruitment forecasting', true, true, false, true],
    ['Full audit trail & reproducibility', false, true, true, false],
    ['Team collaboration & sharing', true, true, true, true],
    ['PDF/CONSORT export', true, true, true, true],
  ].map((row, index) => (
    <tr
      key={String(row[0]) || `row-${index}`}
      className="border-b border-slate-700/30 hover:bg-slate-950/30 transition-colors"
    >
      <td className="py-3 px-4 text-slate-300 font-medium">{row[0]}</td>
      {[1, 2, 3, 4].map((col) => (
        <td key={col} className="py-3 px-4 text-center">
          {row[col] ? (
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300">
              ✓
            </span>
          ) : (
            <span className="text-slate-600">—</span>
          )}
        </td>
      ))}
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>

        {/* CTA section */}
        <div className="rounded-2xl border border-slate-700/30 bg-gradient-to-r from-cyan-500/5 to-slate-900/50 p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Which solution fits your team?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            All roles benefit from the same core platform—designed to adapt to
            your workflow, not the other way around.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Talk to our team
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-500/50 transition-colors"
            >
              See live demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}