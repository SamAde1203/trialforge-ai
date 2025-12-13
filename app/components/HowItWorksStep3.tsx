// Component: HowItWorksStep3.tsx
import {
  DashboardVisualization,
  InstantRecalculation,
  ScenarioComparison,
  ExportShare,
} from './icons';

export default function MonteCarloSimulation() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-950/80">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">
            Step 3 / 3
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Run simulations &amp; explore outcomes
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Execute thousands of virtual trials. Stress‑test your assumptions.
            Visualize power, probability of success, recruitment risk, and
            timeline feasibility—all in one interactive dashboard.
          </p>
        </div>

        {/* Two-column: Left = simulation explanation, Right = dashboard preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: The story and value */}
          <div className="space-y-8">
            {/* What is Monte Carlo? */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">
                Why Monte Carlo?
              </h3>
              <p className="text-slate-300 text-sm">
                Classical sample size formulas assume tidy, perfect worlds. Real
                trials are messy: recruitment is lumpy, dropouts cluster, effect
                sizes vary. Monte Carlo simulation lets us run 10,000 virtual
                trials under realistic, noisy conditions—and see the full range
                of what could happen.
              </p>
            </div>

            {/* What you can do */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-white">
                Explore any scenario
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-300 font-bold mt-0.5">→</span>
                  <div>
                    <p className="text-sm text-white font-semibold">
                      Vary sample size
                    </p>
                    <p className="text-xs text-slate-400">
                      What if you recruit 150 instead of 180? See power drop in
                      real time.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-300 font-bold mt-0.5">→</span>
                  <div>
                    <p className="text-sm text-white font-semibold">
                      Test recruitment curves
                    </p>
                    <p className="text-xs text-slate-400">
                      Optimistic site ramp‑up vs. conservative. How do timelines
                      shift?
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-300 font-bold mt-0.5">→</span>
                  <div>
                    <p className="text-sm text-white font-semibold">
                      Stress‑test assumptions
                    </p>
                    <p className="text-xs text-slate-400">
                      What if effect size is 20% smaller? Dropout rate
                      doubles?
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-300 font-bold mt-0.5">→</span>
                  <div>
                    <p className="text-sm text-white font-semibold">
                      Evaluate go/no‑go rules
                    </p>
                    <p className="text-xs text-slate-400">
                      Define decision thresholds now. See long‑run false positive
                      &amp; negative rates.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Key insight box */}
            <div className="rounded-xl border border-emerald-900/50 bg-emerald-950/30 p-4">
              <p className="text-xs font-semibold text-emerald-300 mb-2">
                🎯 Why this matters
              </p>
              <p className="text-xs text-emerald-200/80">
                Most underpowered trials fail because teams relied on classical
                formulas that ignored real‑world noise. Simulation-driven design
                catches these risks before FPFV and saves millions in wasted
                trials.
              </p>
            </div>
          </div>

          {/* Right: Dashboard preview (mock visualization) */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/80 p-6 shadow-2xl overflow-hidden">
            <div className="space-y-4">
              {/* Dashboard header */}
              <div className="border-b border-slate-700/50 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 mb-2">
                  Simulation dashboard
                </p>
                <p className="text-sm text-slate-300">
                  10,000 Monte Carlo runs | Primary endpoint power
                </p>
              </div>

              {/* Chart 1: Power over sample size - Icon */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-200">
                  Power vs. Sample Size
                </p>
                <DashboardVisualization />
                <p className="text-[10px] text-slate-400 text-right">
                  N = 120 → 240
                </p>
              </div>

              {/* Chart 2: Probability of success */}
              <div className="space-y-2 mt-4">
                <p className="text-xs font-semibold text-slate-200">
                  Probability of Success (across scenarios)
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-900/80 border border-slate-700/50 rounded-lg p-3 text-center">
                    <p className="text-[10px] text-slate-400 mb-1">
                      Base case
                    </p>
                    <p className="text-lg font-bold text-cyan-300">87%</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-700/50 rounded-lg p-3 text-center">
                    <p className="text-[10px] text-slate-400 mb-1">
                      Conservative
                    </p>
                    <p className="text-lg font-bold text-orange-300">62%</p>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-700/50 rounded-lg p-3 text-center">
                    <p className="text-[10px] text-slate-400 mb-1">
                      Optimistic
                    </p>
                    <p className="text-lg font-bold text-emerald-300">94%</p>
                  </div>
                </div>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-950/50 rounded-lg p-3">
                  <p className="text-[10px] text-slate-400">Expected DB lock</p>
                  <p className="text-base font-semibold text-white">Month 28</p>
                </div>
                <div className="bg-slate-950/50 rounded-lg p-3">
                  <p className="text-[10px] text-slate-400">
                    Recruitment at risk
                  </p>
                  <p className="text-base font-semibold text-orange-300">
                    12%
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full mt-4 rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors">
                Explore full dashboard →
              </button>
            </div>
          </div>
        </div>

        {/* Three-column: Key capabilities - FIXED ICON SIZES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Capability 1: Instant recalculation */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6">
            <div className="mb-4 w-8 h-8">
              <InstantRecalculation />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Instant recalculation
            </h3>
            <p className="text-xs text-slate-400">
              Change a parameter—any parameter—and watch 10,000 simulations
              re‑run in seconds. No waiting for lengthy computational cycles.
            </p>
          </div>

          {/* Capability 2: Scenario comparison */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6">
            <div className="mb-4 w-8 h-8">
              <ScenarioComparison />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Scenario comparison
            </h3>
            <p className="text-xs text-slate-400">
              Run "base case" vs. "conservative" vs. "optimistic" side‑by‑side.
              Quantify the range of realistic outcomes so you can plan for
              contingencies.
            </p>
          </div>

          {/* Capability 3: Export & share */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6">
            <div className="mb-4 w-8 h-8">
              <ExportShare />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              Export &amp; share
            </h3>
            <p className="text-xs text-slate-400">
              Generate CONSORT‑aligned reports, PDF dashboards, or JSON exports
              for your statistical team. All outputs are publication‑ready and
              fully reproducible.
            </p>
          </div>
        </div>

        {/* Large visual: What the dashboard looks like (conceptual) */}
        <div className="rounded-2xl border border-slate-700 bg-slate-950/60 overflow-hidden shadow-2xl mb-16">
          <div className="p-6 md:p-8">
            {/* Dashboard mockup header */}
            <div className="border-b border-slate-700/50 pb-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 mb-1">
                    Trial simulation
                  </p>
                  <h4 className="text-lg font-semibold text-white">
                    Phase 2 HbA1c efficacy study
                  </h4>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-xs font-semibold text-slate-100 border border-slate-700 rounded-lg hover:border-cyan-500/50">
                    PDF export
                  </button>
                  <button className="px-3 py-1.5 text-xs font-semibold text-slate-100 border border-slate-700 rounded-lg hover:border-cyan-500/50">
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Mock dashboard grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Widget 1: Power curve */}
              <div className="bg-slate-900/80 rounded-lg border border-slate-700/50 p-4">
                <p className="text-xs font-semibold text-slate-300 mb-3">
                  Statistical Power
                </p>
                <div className="h-32 bg-slate-950/50 rounded flex items-end justify-around gap-1 p-2">
                  {[30, 50, 65, 75, 82, 88, 92, 95, 97].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-sm opacity-60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 mt-2">
                  Target: 80% power achieved at N=170
                </p>
              </div>

              {/* Widget 2: Probability distribution */}
              <div className="bg-slate-900/80 rounded-lg border border-slate-700/50 p-4">
                <p className="text-xs font-semibold text-slate-300 mb-3">
                  Prob. of Success (primary endpoint)
                </p>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[10px] text-slate-400">
                        10,000 sims
                      </span>
                      <span className="text-xs font-semibold text-cyan-300">
                        86.4%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                        style={{ width: "86.4%" }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 mt-3">
                  Range: 78% – 94% (95% CI)
                </p>
              </div>

              {/* Widget 3: Timeline feasibility */}
              <div className="bg-slate-900/80 rounded-lg border border-slate-700/50 p-4">
                <p className="text-xs font-semibold text-slate-300 mb-3">
                  Database lock timeline
                </p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-[10px] text-slate-400">10th %ile</p>
                    <p className="text-sm font-bold text-white">Mo 24</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Median</p>
                    <p className="text-sm font-bold text-cyan-300">Mo 28</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">90th %ile</p>
                    <p className="text-sm font-bold text-orange-300">Mo 34</p>
                  </div>
                </div>
              </div>

              {/* Widget 4: Risk indicators */}
              <div className="bg-slate-900/80 rounded-lg border border-slate-700/50 p-4">
                <p className="text-xs font-semibold text-slate-300 mb-3">
                  Risk dashboard
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Recruitment risk</span>
                    <span className="px-2 py-1 bg-emerald-950/50 text-emerald-300 rounded text-[9px] font-semibold">
                      Low (8%)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Dropout sensitivity</span>
                    <span className="px-2 py-1 bg-yellow-950/50 text-yellow-300 rounded text-[9px] font-semibold">
                      Moderate (15%)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Effect size risk</span>
                    <span className="px-2 py-1 bg-red-950/50 text-red-300 rounded text-[9px] font-semibold">
                      High (30%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA section */}
        <div className="rounded-2xl border border-slate-700/50 bg-gradient-to-r from-cyan-500/5 to-slate-900/50 p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to simulate?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            In three steps—describe, extract, simulate—you'll have a complete,
            defensible picture of your trial's operating characteristics. No
            spreadsheets. No guesswork. Just clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/app"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Start a simulation
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-500/50 transition-colors"
            >
              See case studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
