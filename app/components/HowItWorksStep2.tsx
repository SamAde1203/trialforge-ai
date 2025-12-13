// Component: HowItWorksStep2.tsx
import { ArrowRight, ArrowDown, Sparkles, SlidersHorizontal } from "lucide-react";
import { AIParameterExtraction } from './icons';

export default function AIExtractsParameters() {
  return (
    <section className="py-24 scroll-mt-28 bg-gradient-to-b from-slate-950/50 to-slate-950">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Step 2 / 3
          </p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            AI extracts design parameters
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            In seconds, TrialForge parses your text into structured parameters—arms,
            endpoints, recruitment curves, dropout assumptions and more. Review,
            edit, or accept smart defaults.
          </p>
        </div>

        {/* Visual flow */}
        <div className="mb-12 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 backdrop-blur-sm">
          {/* Desktop: 5 columns */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-5">
            <FlowCard
              step="1"
              title="Your protocol text"
              body='"Phase 2 RCT, 180 participants, HbA1c endpoint, 24-week follow-up…"'
            />
            <div className="flex justify-center text-cyan-300/60">
              <ArrowRight className="h-4 w-4" />
            </div>
            <FlowCard
              step="2"
              title="AI parsing engine"
              body="GPT-4 + domain logic extracts endpoints, arms, timing, and assumptions."
              badge="Parsing"
            />
            <div className="flex justify-center text-cyan-300/60">
              <ArrowRight className="h-4 w-4" />
            </div>
            <FlowCard
              step="3"
              title="Structured parameters"
              body="Arms, endpoints, N, timing, dropouts—ready to simulate."
              badge="Ready"
            />
          </div>

          {/* Mobile: stacked with down arrows */}
          <div className="md:hidden space-y-4">
            <FlowCard
              step="1"
              title="Your protocol text"
              body='"Phase 2 RCT, 180 participants, HbA1c endpoint, 24-week follow-up…"'
            />
            <div className="flex justify-center text-cyan-300/60">
              <ArrowDown className="h-4 w-4" />
            </div>
            <FlowCard
              step="2"
              title="AI parsing engine"
              body="GPT-4 + domain logic extracts endpoints, arms, timing, and assumptions."
              badge="Parsing"
            />
            <div className="flex justify-center text-cyan-300/60">
              <ArrowDown className="h-4 w-4" />
            </div>
            <FlowCard
              step="3"
              title="Structured parameters"
              body="Arms, endpoints, N, timing, dropouts—ready to simulate."
              badge="Ready"
            />
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          {/* Left */}
          <div className="space-y-6">
            {/* Icon visualization */}
            <div className="flex justify-center rounded-xl bg-slate-900/50 p-6">
              <AIParameterExtraction />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">What gets extracted</h3>
              <p className="text-sm text-slate-300">
                The AI reads your protocol like a statistician would—looking for design
                intent, not just keywords. Where details are ambiguous, it proposes
                clinically plausible defaults you can edit.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Typical extractions
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                {[
                  "Trial phase & design",
                  "Primary endpoint",
                  "Secondary endpoints",
                  "Study arms & ratio",
                  "Target sample size",
                  "Follow-up schedule",
                  "Recruitment window",
                  "Dropout assumptions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-slate-700/50 bg-slate-900/80 p-4">
              <p className="mb-1 text-xs font-semibold text-cyan-300">
                <Sparkles className="inline h-4 w-4 mr-2" />
                You stay in control
              </p>
              <p className="text-xs text-slate-400">
                Every extracted parameter is editable. Change a default and downstream
                outputs (power, cost, risk) update immediately.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Study Design
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <Field label="Phase" value="Phase 2" />
                <Field label="Design" value="RCT (DB)" />
                <Field label="Arms" value="1:1 (200)" />
                <Field label="Primary endpoint" value="HbA1c" />
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Timing & Recruitment
              </p>
              <div className="space-y-2 text-xs">
                <Row label="Enrolment period" value="12 months" />
                <Row label="Follow-up duration" value="24 weeks" />
                <Row label="Expected dropouts" value="~8–10%" />
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Effect Size Assumption
              </p>
              <div className="space-y-2 text-xs">
                <p className="text-slate-300">
                  Primary endpoint (HbA1c): 0.8% ± 1.5% (SD)
                </p>
                <p className="text-[11px] text-slate-400">
                  Example default based on comparable trial baselines.
                </p>
              </div>
            </div>

            <button className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-xs font-semibold text-slate-100 transition-all hover:border-cyan-500/50 hover:bg-slate-900/80">
              <SlidersHorizontal className="inline h-4 w-4 mr-2" />
              Review & refine parameters
            </button>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="mt-16 rounded-2xl border border-slate-700/30 bg-gradient-to-r from-cyan-500/5 to-slate-900/50 p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Insight
              title="Smart defaults"
              body="Suggests realistic assumptions to get you to a first simulation faster."
            />
            <Insight
              title="Transparent assumptions"
              body="Shows what was inferred vs explicitly stated, so reviews stay defensible."
            />
            <Insight
              title="Instant feedback"
              body="Edit a parameter and see simulated outputs update in real time."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowCard({
  step,
  title,
  body,
  badge,
}: {
  step: string;
  title: string;
  body: string;
  badge?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800">
          <span className="text-lg font-bold text-cyan-300">{step}</span>
        </div>
        {badge ? (
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold text-cyan-200">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
      <p className="text-xs text-slate-400">{body}</p>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-slate-400">{label}</p>
      <p className="text-base font-semibold text-white">{value}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-slate-400">{label}</p>
      <p className="font-semibold text-white">{value}</p>
    </div>
  );
}

function Insight({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">
        {title}
      </p>
      <p className="text-sm text-slate-300">{body}</p>
    </div>
  );
}
