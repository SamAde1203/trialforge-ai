// Component: HowItWorksStep1.tsx
import { CheckCircle2, ArrowRight } from "lucide-react";
import { NaturalLanguageInput } from './icons';

export default function DescribeProtocol() {
  return (
    <section id="how-it-works" className="py-24 scroll-mt-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Step 1 / 3
          </p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Describe your trial
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Start with plain English. Paste a protocol synopsis—arms, endpoints,
            follow-up, eligibility. TrialForge AI extracts the structure for you.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left column: Benefits */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">Why start here?</h3>
              <p className="text-slate-300">
                Your protocol already contains the seeds of every design decision.
                Instead of building a spreadsheet of parameters, TrialForge AI reads
                your own words and extracts what matters.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                {
                  title: "Natural language input",
                  body: "No rigid templates. You describe the trial; we extract the structure.",
                },
                {
                  title: "Works with existing docs",
                  body: "Paste from your protocol synopsis, SAP draft, or study notes—any format.",
                },
                {
                  title: "Refine iteratively",
                  body: "Change endpoints or follow-up timing without starting over.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-slate-400">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: Input box with icon */}
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 shadow-2xl">
            <div className="space-y-4">
              {/* Icon visualization - FIXED SIZE */}
              <div className="mb-6 flex justify-center">
                <div className="rounded-xl bg-slate-900/50 p-6">
                  <div className="w-8 h-8">
                    <NaturalLanguageInput />
                  </div>
                </div>
              </div>

              <label className="text-sm font-semibold text-slate-100">
                Paste your protocol here
              </label>

              <textarea
                placeholder={`Example:
Phase 2 randomised, double-blind trial in adults with type 2 diabetes.
Arms: Agent XYZ 100mg daily vs placebo.
Primary endpoint: Change in HbA1c from baseline to week 24.
Secondary: Weight, lipids, safety labs.
Visits: 2, 8, 12, 24 weeks.
N ~180 randomised 1:1.`}
                className="h-40 w-full resize-none rounded-lg border border-slate-700 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />

              <a
                href="#demo"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
              >
                Continue to live demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <p className="text-[11px] text-slate-400">
                Tip: Avoid PHI. Use summaries or de-identified protocol text.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-xl border border-slate-800/50 bg-slate-950/30 p-6 text-center">
          <p className="text-xs text-slate-400">
            ✨ Processed transiently by default. Save/export only if you choose.
            For research and educational use only.
          </p>
        </div>
      </div>
    </section>
  );
}
