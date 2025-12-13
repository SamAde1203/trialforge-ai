'use client';

import { Activity, BarChart3, CheckCircle2, Clock, Database, FileText, LineChart, ScatterChart, Shield, Zap } from 'lucide-react';

const protocolText = `
Phase 2 randomized, double-blind, placebo-controlled trial in adults with Type 2 diabetes.

Arm 1: Agent XYZ 100mg daily (N ≈ 100)
Arm 2: Placebo (N ≈ 100)

Primary endpoint: Change in HbA1c from baseline to Week 24.
Secondary endpoints: Fasting glucose, weight, lipids, safety labs.
Visits: Weeks 0, 2, 4, 8, 12, 16, 20, 24.
Duration: 24 weeks active + 4-week safety follow-up.
Expected effect: 0.8% ± 1.5% HbA1c reduction (SD = 1.8%).
`.trim();

const inputParams = [
  { label: 'Phase', value: 'Phase 2 proof-of-concept' },
  { label: 'Indication', value: 'Type 2 diabetes' },
  { label: 'Design', value: 'Randomized, double-blind, placebo-controlled' },
  { label: 'Allocation', value: '1:1 (Agent XYZ vs. Placebo)' },
  { label: 'Primary Endpoint', value: 'Change in HbA1c at Week 24' },
  { label: 'Secondary Endpoints', value: 'FG, weight, lipids, safety labs' },
  { label: 'Duration', value: '24 weeks active + 4-week follow-up' },
  { label: 'Planned N', value: '200 randomized' },
  { label: 'Evaluable N', value: '~180 (10% dropout)' },
  { label: 'Effect Size', value: "Cohen's d = 0.44" },
  { label: 'Target Power', value: '87% (95% CI: 82–92%)' },
];

const simulationSteps = [
  {
    title: 'Step 1 · Paste protocol',
    desc: 'Drop in the free-text protocol description. TrialForge extracts all design parameters in seconds.',
  },
  {
    title: 'Step 2 · Validate design',
    desc: 'Quickly review phase, endpoints, arms, and timelines before running simulations.',
  },
  {
    title: 'Step 3 · Run 10,000+ simulations',
    desc: 'Explore power curves, risk, and timelines across multiple design scenarios.',
  },
];

const powerPoints = [
  { n: 120, power: 0.68 },
  { n: 150, power: 0.78 },
  { n: 180, power: 0.84 },
  { n: 200, power: 0.87 },
  { n: 220, power: 0.90 },
];

const timelineStats = [
  { label: '10th percentile', value: 'Month 18' },
  { label: 'Median', value: 'Month 22' },
  { label: '90th percentile', value: 'Month 28' },
];

const riskItems = [
  { label: 'Statistical risk', level: 'Moderate', detail: 'Borderline power if dropout exceeds 15%.' },
  { label: 'Operational risk', level: 'Low–moderate', detail: 'Recruitment sensitive to HbA1c thresholds and site activation speed.' },
  { label: 'Financial risk', level: 'Moderate', detail: 'Cost concentration around later visits and lab intensiveness.' },
  { label: 'Regulatory risk', level: 'Low', detail: 'Endpoints and follow-up duration aligned with standard diabetes PoC trials.' },
];

const exportOptions = [
  {
    icon: FileText,
    title: 'Protocol-ready outputs',
    desc: 'Download structured design, visit schedule, and key assumptions as AI-assisted protocol text.',
  },
  {
    icon: BarChart3,
    title: 'Power and sample size appendix',
    desc: 'Attach simulation plots and sensitivity analyses directly to your SAP or protocol appendix.',
  },
  {
    icon: Shield,
    title: 'Risk and mitigation summary',
    desc: 'Generate a concise risk narrative for governance, DMC, or investor review.',
  },
];

const scenarios = [
  {
    label: 'Phase 2 HbA1c (Base)',
    description: "d = 0.44, 87% power, N = 200 (≈180 evaluable)",
    effectSize: 0.44,
    power: 0.87,
  },
  {
    label: 'Conservative (d = 0.35)',
    description: 'Lower effect size, ≈72% power at N ≈ 220',
    effectSize: 0.35,
    power: 0.72,
  },
  {
    label: 'Optimistic (d = 0.55)',
    description: 'Higher effect size, ≈95% power at N ≈ 160',
    effectSize: 0.55,
    power: 0.95,
  },
];

export default function LiveDemoSection() {
  return (
    <section
      id="demo"
      className="relative border-t border-slate-800/60 bg-[radial-gradient(circle_at_top,_#1e293b_0,_#020617_55%)] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-cyan-200 shadow-lg shadow-cyan-900/30">
            <Activity className="h-4 w-4" />
            <span>Live demo · Phase 2 HbA1c protocol</span>
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-sky-400/30 to-emerald-400/30 blur-xl" />
              <span className="relative bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                Watch a Phase 2 HbA1c trial come to life
              </span>
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300/90">
            Follow a real-world style Phase 2 Type 2 diabetes protocol as TrialForge transforms it into a fully powered, risk-aware trial design in under 5 minutes.
          </p>

          <p className="text-xs text-slate-400">
            Scenario: A biotech company needs a defensible Phase 2 HbA1c protocol before investor and governance meetings.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          {/* Left: Input + extraction + power */}
          <div className="space-y-8">
            {/* Step cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {simulationSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4 shadow-sm shadow-slate-900/50"
                >
                  <p className="text-[11px] font-semibold text-cyan-300 uppercase tracking-[0.16em]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-300/90">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Protocol input + extraction */}
            <div className="grid gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              {/* Free-text protocol */}
              <div className="relative h-full rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-slate-600" />
                      <span className="h-2 w-2 rounded-full bg-slate-600" />
                      <span className="h-2 w-2 rounded-full bg-slate-600" />
                    </div>
                    <p className="text-[11px] font-medium text-slate-400">
                      Sponsor protocol (free-text)
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                    <Zap className="h-3 w-3" />
                    AI parsing · &lt; 5s
                  </span>
                </div>

                <pre className="max-h-64 overflow-auto whitespace-pre-wrap rounded-xl bg-slate-900/80 p-3 text-[11px] leading-relaxed text-slate-200">
{protocolText}
                </pre>
              </div>

              {/* Extracted parameters */}
              <div className="relative rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Structured protocol parameters
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-300">
                    <CheckCircle2 className="h-3 w-3" />
                    Extracted in ~5 seconds
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2 text-[11px] text-slate-200 sm:grid-cols-2">
                  {inputParams.map((param) => (
                    <div
                      key={param.label}
                      className="rounded-xl border border-slate-800 bg-slate-900/70 p-2.5"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {param.label}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-100">{param.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live simulation status */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-cyan-700/40 bg-slate-950/80 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Simulation progress
                </p>
                <p className="mt-3 text-xs text-slate-300">8,432 / 10,000 runs</p>
                <div className="mt-2 h-2 w-full rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: '84%' }} />
                </div>
                <p className="mt-2 text-[11px] text-slate-400">
                  Running base scenario (~3 seconds remaining)
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-700/40 bg-slate-950/80 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Statistical power
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <p className="text-3xl font-semibold text-white">87%</p>
                  <p className="text-[11px] text-slate-400">95% CI: 82–92%</p>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">
                  Phase 2 HbA1c base scenario (d = 0.44, N = 200, ~180 evaluable)
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Scenario presets
                </p>
                <ul className="mt-2 space-y-1.5 text-[11px] text-slate-200">
                  {scenarios.map((s) => (
                    <li key={s.label} className="flex gap-1.5">
                      <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>
                        <span className="font-semibold text-slate-100">{s.label}:</span>{' '}
                        <span className="text-slate-300">{s.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: visualizations + risk + exports */}
          <div className="space-y-6">
            {/* Power/samplesize card */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <LineChart className="h-4 w-4 text-cyan-300" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Power vs. sample size
                  </p>
                </div>
                <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-400">
                  Target: 87% at N = 200
                </span>
              </div>

              <div className="mt-3 rounded-xl border border-slate-800 bg-slate-900/80 p-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                  <span>Sample size</span>
                  <span>Power</span>
                </div>
                <div className="space-y-2 text-[11px] text-slate-200">
                  {powerPoints.map((pt) => (
                    <div key={pt.n} className="flex items-center gap-3">
                      <span className="w-16 text-slate-300">N = {pt.n}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-slate-800">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                          style={{ width: `${pt.power * 100}%` }}
                        />
                      </div>
                      <span className="w-10 text-right text-slate-200">
                        {(pt.power * 100).toFixed(0)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-2 text-[11px] text-slate-400">
                Base case achieves 87% power at 200 randomized participants with an assumed 10% dropout, yielding ~180 evaluable participants.
              </p>
            </div>

            {/* Timeline + risk */}
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              {/* Database lock timeline */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-sky-300" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Database lock timeline
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-slate-400">
                    8 sites · 2-month ramp-up
                  </span>
                </div>

                <div className="space-y-2 text-[11px] text-slate-200">
                  {timelineStats.map((t) => (
                    <div key={t.label} className="flex items-center justify-between">
                      <span className="text-slate-400">{t.label}</span>
                      <span className="font-medium text-slate-100">{t.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 h-1.5 w-full rounded-full bg-slate-800">
                  <div className="flex h-1.5 w-full">
                    <div className="h-1.5 flex-1 rounded-l-full bg-cyan-500/70" />
                    <div className="h-1.5 flex-1 bg-sky-500/70" />
                    <div className="h-1.5 flex-1 rounded-r-full bg-emerald-500/70" />
                  </div>
                </div>

                <p className="mt-2 text-[11px] text-slate-400">
                  Shows realistic lock dates under optimistic, median, and conservative operational assumptions.
                </p>
              </div>

              {/* Risk summary */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-300" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Risk assessment
                  </p>
                </div>

                <div className="space-y-2">
                  {riskItems.map((risk) => (
                    <div key={risk.label} className="rounded-xl border border-slate-800 bg-slate-900/80 p-2.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-300">{risk.label}</span>
                        <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200">
                          {risk.level}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-400">{risk.detail}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-2 text-[11px] text-slate-400">
                  All risk views stay in the design and planning domain only—no real patient data is processed.
                </p>
              </div>
            </div>

            {/* Export options */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-cyan-300" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    What you walk away with
                  </p>
                </div>
                <span className="text-[10px] text-slate-400">
                  All exports ready in seconds
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {exportOptions.map((opt) => (
                  <div
                    key={opt.title}
                    className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-[11px]"
                  >
                    <opt.icon className="mb-2 h-4 w-4 text-cyan-300" />
                    <p className="font-semibold text-slate-100">{opt.title}</p>
                    <p className="mt-1 text-[11px] text-slate-400">{opt.desc}</p>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-[11px] text-slate-400">
                Export simulation-backed design justifications directly into your protocol, SAP, or governance packs—without touching PHI.
              </p>
            </div>

            {/* Closing explainer */}
            <div className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    What just happened
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-100">
                    A 5-minute, simulation-backed tour of your Phase 2 HbA1c protocol.
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Start from a free-text protocol, and end with powered scenarios, risk views, and exportable documentation ready for reviewers.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-[11px] text-slate-300">
                  <p className="font-semibold text-slate-100">Use with your own trial</p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Every design is unique. Paste your protocol and see how TrialForge reshapes power, timelines, and risk for your specific programme.
                  </p>
                  <p className="mt-1 text-[11px] text-cyan-300">
                    Free trial includes all features for 14 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}
