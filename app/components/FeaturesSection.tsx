// Component: FeaturesSection.tsx
export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-950 to-slate-950/80">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to design smarter trials
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Purpose-built tools for researchers, statisticians, and programme
            teams. From protocol parsing to Monte Carlo simulation to
            publication-ready reports.
          </p>
        </div>

        {/* Feature grid: 3 columns, 6 features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Feature 1: Natural language input */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 hover:border-slate-600 hover:bg-slate-900/80 transition-all">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 mb-4">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m0 0h6m-6-6V3m0 0H3"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Natural language input
            </h3>
            <p className="text-sm text-slate-400">
              Paste or type your protocol synopsis in plain English. No rigid
              forms, no complex parameter trees. We parse the text.
            </p>
          </div>

          {/* Feature 2: AI parameter extraction */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 hover:border-slate-600 hover:bg-slate-900/80 transition-all">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 mb-4">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              AI parameter extraction
            </h3>
            <p className="text-sm text-slate-400">
              GPT-4 powered model learns your intent. Extracts arms, endpoints,
              timing, and assumptions with clinical expertise built in.
            </p>
          </div>

          {/* Feature 3: Monte Carlo simulation */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 hover:border-slate-600 hover:bg-slate-900/80 transition-all">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 mb-4">
              <svg
                className="w-6 h-6 text-cyan-400"
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
            <h3 className="text-base font-semibold text-white mb-2">
              10,000 simulation runs
            </h3>
            <p className="text-sm text-slate-400">
              Execute thousands of virtual trials. Explore power, probability of
              success, recruitment risk, and timeline feasibility under
              realistic conditions.
            </p>
          </div>

          {/* Feature 4: Interactive dashboard */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 hover:border-slate-600 hover:bg-slate-900/80 transition-all">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 mb-4">
              <svg
                className="w-6 h-6 text-cyan-400"
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
            <h3 className="text-base font-semibold text-white mb-2">
              Live interactive dashboard
            </h3>
            <p className="text-sm text-slate-400">
              Change a parameter. Watch simulations recalculate in real time.
              Explore power curves, probability distributions, and timeline
              ranges instantly.
            </p>
          </div>

          {/* Feature 5: Scenario comparison */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 hover:border-slate-600 hover:bg-slate-900/80 transition-all">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 mb-4">
              <svg
                className="w-6 h-6 text-cyan-400"
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
            <h3 className="text-base font-semibold text-white mb-2">
              Multi-scenario testing
            </h3>
            <p className="text-sm text-slate-400">
              Run base case, conservative, and optimistic scenarios
              side-by-side. Quantify the range of plausible outcomes for
              governance and planning.
            </p>
          </div>

          {/* Feature 6: Export & collaboration */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6 hover:border-slate-600 hover:bg-slate-900/80 transition-all">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 mb-4">
              <svg
                className="w-6 h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Export &amp; collaborate
            </h3>
            <p className="text-sm text-slate-400">
              Generate CONSORT-aligned reports, PDF dashboards, or JSON exports.
              Share with your statistical team, governance, or sponsors.
            </p>
          </div>
        </div>

        {/* Feature deep-dive section: Left = text, Right = diagram/visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Feature spotlight */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Built for real trial design
            </h3>
            <p className="text-slate-300">
              Every feature is grounded in regulatory precedent and clinical
              practice. We don't build flashy features—we build tools that
              change how you make decisions.
            </p>

            {/* Benefit list */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Operating characteristics
                  </p>
                  <p className="text-xs text-slate-400">
                    Power, type I/II error rates, probability of success—computed
                    across thousands of virtual trials.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Recruitment &amp; timeline forecasting
                  </p>
                  <p className="text-xs text-slate-400">
                    Stochastic recruitment curves show range of database-lock
                    dates under realistic site ramp-up patterns.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Sensitivity analysis
                  </p>
                  <p className="text-xs text-slate-400">
                    Vary effect size, dropout, or recruitment speed. See how
                    conclusions hold under alternative assumptions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Adaptive trial design
                  </p>
                  <p className="text-xs text-slate-400">
                    Platform trial support, interim analysis rules, and dynamic
                    arm allocation scenarios.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Visual representation (conceptual) */}
          <div className="rounded-2xl border border-slate-700 bg-slate-950/60 p-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 mb-4">
                Example: Parameter sensitivity
              </p>

              {/* Mock sensitivity table */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-lg border border-slate-700/50">
                  <span className="text-slate-300">Effect size: 0.5 SD</span>
                  <span className="font-semibold text-orange-300">62% power</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-lg border border-slate-700/50">
                  <span className="text-slate-300">Effect size: 0.8 SD</span>
                  <span className="font-semibold text-cyan-300">87% power</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-lg border border-slate-700/50">
                  <span className="text-slate-300">Effect size: 1.0 SD</span>
                  <span className="font-semibold text-emerald-300">96% power</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 pt-4 border-t border-slate-700/50">
                Instant recalculation across all scenarios. No spreadsheets. No
                manual re-computation.
              </p>
            </div>
          </div>
        </div>

        {/* Trust & credibility box */}
        <div className="rounded-2xl border border-slate-700/30 bg-gradient-to-r from-slate-900/40 to-slate-900/20 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300 mb-2">
                🔒 Privacy-first
              </p>
              <p className="text-sm text-slate-300">
                No sensitive patient data required. Protocols are processed
                ephemerally and never stored without your consent.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300 mb-2">
                📊 Reproducible
              </p>
              <p className="text-sm text-slate-300">
                Every simulation is logged. Download full methodology and seed
                values for peer review and regulatory submission.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300 mb-2">
                ⚡ No dependencies
              </p>
              <p className="text-sm text-slate-300">
                Works standalone. No need for SAS, R, or statistical software
                licenses. Pure web-native computation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
