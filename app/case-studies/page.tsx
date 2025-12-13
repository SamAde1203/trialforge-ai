// app/case-studies/page.tsx
export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <section className="space-y-10">
        {/* Hero */}
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Case studies
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            How simulation reshapes trial design
          </h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Explore realistic scenarios where Monte Carlo simulation helped teams
            de‑risk protocol assumptions, refine sample size, and improve trial
            decision‑making before first patient first visit.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-cyan-400"
            >
              Propose a study
            </a>
            <a
              href="/app"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-slate-500"
            >
              Try a simulation
            </a>
          </div>
        </header>

        {/* Filters (static for now) */}
        <section className="flex flex-wrap gap-2 text-xs text-slate-300">
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Phase 2
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Phase 3
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Metabolic
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Oncology
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Superiority
          </span>
          <span className="rounded-full border border-slate-700 px-3 py-1">
            Platform trials
          </span>
        </section>

        {/* Case study cards */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span>Phase 2 · Type 2 diabetes</span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5">
                Superiority
              </span>
            </div>
            <h2 className="mb-2 text-base font-semibold text-white">
              Detecting under‑power risk in a glycaemic control trial
            </h2>
            <p className="mb-3 text-sm text-slate-300">
              A sponsor planned a two‑arm trial targeting a modest HbA1c
              difference with optimistic variance assumptions. Simulation runs
              revealed a high probability of sub‑80% power under more realistic
              variability scenarios.
            </p>
            <dl className="mb-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div>
                <dt className="text-slate-400">Original plan</dt>
                <dd>220 participants · fixed follow‑up</dd>
              </div>
              <div>
                <dt className="text-slate-400">After simulation</dt>
                <dd>280 participants · extended follow‑up</dd>
              </div>
            </dl>
            <p className="mt-auto text-xs text-emerald-300">
              Outcome: Reduced chance of an inconclusive result by adjusting
              sample size and visit schedule before protocol finalisation.
            </p>
          </article>

          {/* Card 2 */}
          <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span>Phase 3 · Oncology</span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5">
                Time‑to‑event
              </span>
            </div>
            <h2 className="mb-2 text-base font-semibold text-white">
              Stress‑testing event‑driven timelines
            </h2>
            <p className="mb-3 text-sm text-slate-300">
              A global oncology trial relied on historical hazard rates and
              optimistic recruitment curves. Scenario simulations highlighted how
              modest delays in site activation and lower event rates could push
              database lock 9–12 months later than planned.
            </p>
            <dl className="mb-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div>
                <dt className="text-slate-400">Planned duration</dt>
                <dd>30 months to final analysis</dd>
              </div>
              <div>
                <dt className="text-slate-400">Simulated range</dt>
                <dd>30–42 months across scenarios</dd>
              </div>
            </dl>
            <p className="mt-auto text-xs text-emerald-300">
              Outcome: Protocol and governance team agreed contingency triggers
              and communication plans anchored in simulation outputs.
            </p>
          </article>

          {/* Card 3 */}
          <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span>Platform trial</span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5">
                Multi‑arm
              </span>
            </div>
            <h2 className="mb-2 text-base font-semibold text-white">
              Evaluating operating characteristics in a platform design
            </h2>
            <p className="mb-3 text-sm text-slate-300">
              A multi‑arm platform considered staggered entry of experimental
              arms and shared control. Simulation helped quantify false positive
              and false negative rates under varying recruitment and drop‑out
              assumptions.
            </p>
            <dl className="mb-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div>
                <dt className="text-slate-400">Arms evaluated</dt>
                <dd>3 experimental + shared control</dd>
              </div>
              <div>
                <dt className="text-slate-400">Runs per scenario</dt>
                <dd>10,000 Monte Carlo simulations</dd>
              </div>
            </dl>
            <p className="mt-auto text-xs text-emerald-300">
              Outcome: Governance committee selected more conservative decision
              boundaries aligned with long‑run error control.
            </p>
          </article>

          {/* Card 4 */}
          <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span>Early development</span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5">
                Go / No‑go
              </span>
            </div>
            <h2 className="mb-2 text-base font-semibold text-white">
              Clarifying go/no‑go criteria before first patient
            </h2>
            <p className="mb-3 text-sm text-slate-300">
              A biotech team needed to align internal stakeholders on credible
              success criteria for a small proof‑of‑concept study. Simulation
              mapped observed effect sizes to posterior beliefs about true
              efficacy.
            </p>
            <dl className="mb-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div>
                <dt className="text-slate-400">Planned sample</dt>
                <dd>60 participants · 2 arms</dd>
              </div>
              <div>
                <dt className="text-slate-400">Decision rule</dt>
                <dd>
                  Proceed only if probability of achieving target effect exceeds
                  pre‑agreed threshold
                </dd>
              </div>
            </dl>
            <p className="mt-auto text-xs text-emerald-300">
              Outcome: Transparent, simulation‑based framework for go/no‑go
              decisions agreed before recruitment.
            </p>
          </article>
        </section>

        {/* CTA footer */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-sm text-slate-300">
          <p className="mb-2 font-semibold text-slate-100">
            Have a trial concept you&apos;d like to explore?
          </p>
          <p className="mb-4">
            Case studies here are illustrative. For real‑world collaborations,
            sensitive protocol details are never shared without appropriate
            agreements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-slate-500"
          >
            Discuss a potential case study
          </a>
        </section>
      </section>
    </main>
  );
}
