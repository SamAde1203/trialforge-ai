// app/docs/page.tsx
export default function DocsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <section className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            📘 Documentation
          </h1>
          <p className="text-sm text-slate-300">
            TrialForge AI — Clinical Trial Intelligence Platform
          </p>
        </header>

        {/* Overview */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Overview</h2>
          <p className="text-sm text-slate-300">
            TrialForge AI is a clinical intelligence simulation platform that
            transforms natural‑language clinical trial protocols into structured,
            quantitative insights. It is designed to support early‑stage trial
            design exploration, feasibility assessment, and risk analysis by
            researchers, methodologists, and innovation teams.
          </p>
          <p className="text-sm text-slate-300">
            The platform enables rapid interrogation of assumptions before
            first‑patient‑in, helping teams reason about power, sample size,
            uncertainty, cost, and operational risk under realistic conditions.
          </p>
        </section>

        {/* Core capabilities */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Core capabilities</h2>
          <div className="space-y-3 text-sm text-slate-300">
            <div>
              <h3 className="font-semibold text-slate-100">Protocol parsing</h3>
              <p>
                Natural‑language trial descriptions are converted into structured
                design parameters (arms, endpoints, sample size, follow‑up,
                effect assumptions).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">
                Monte Carlo–based power simulations
              </h3>
              <p>
                Thousands of stochastic simulations estimate statistical power,
                confidence intervals, and sensitivity to assumptions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">
                Synthetic cohort modelling
              </h3>
              <p>
                Plausible enrolment, attrition, and outcome trajectories are
                generated to support scenario testing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">
                Risk &amp; feasibility assessment
              </h3>
              <p>
                Statistical, operational, financial, and regulatory‑adjacent risk
                indicators are surfaced for discussion.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">
                Cost &amp; timeline estimation
              </h3>
              <p>
                High‑level projections to support early planning conversations
                (not budgeting or contracting).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-100">
                CONSORT‑style participant flow visualisation
              </h3>
              <p>
                Clear, interpretable representations of enrolment, allocation,
                follow‑up, and analysis populations.
              </p>
            </div>
          </div>
        </section>

        {/* Typical workflow */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Typical workflow</h2>
          <ol className="space-y-3 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">
                1. Describe the trial.
              </span>{' '}
              Provide a draft protocol or design narrative in plain English.
            </li>
            <li>
              <span className="font-semibold text-slate-100">
                2. AI‑assisted extraction.
              </span>{' '}
              Key design elements (arms, endpoints, duration, effect size
              assumptions) are identified and structured.
            </li>
            <li>
              <span className="font-semibold text-slate-100">
                3. Simulation &amp; analysis.
              </span>{' '}
              Monte Carlo simulations are executed across thousands of
              iterations under defined assumptions.
            </li>
            <li>
              <span className="font-semibold text-slate-100">
                4. Review &amp; iteration.
              </span>{' '}
              Results are presented with confidence intervals, risk indicators,
              and key metrics for expert review. Outputs may be exported, saved,
              or shared with collaborators.
            </li>
          </ol>
        </section>

        {/* Assumptions & limitations */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Assumptions &amp; limitations
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>
              Statistical models rely on simplifying assumptions and
              user‑supplied parameters.
            </li>
            <li>
              Output quality depends heavily on the clarity, completeness, and
              plausibility of inputs.
            </li>
            <li>
              Simulations explore possible outcomes — they do not predict
              real‑world trial results.
            </li>
            <li>
              Results should always be reviewed and interpreted by qualified
              biostatisticians and clinical experts.
            </li>
          </ul>
        </section>

        {/* Governance & safety */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Governance &amp; safety
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>
              No protected health information (PHI) or patient‑identifiable data
              is processed or required.
            </li>
            <li>
              The platform does not provide clinical decision support, diagnostic
              guidance, or regulatory advice, and is not a medical device.
            </li>
            <li>
              All functionality is intended for research, education, and
              methodological exploration only.
            </li>
            <li>
              The platform is designed to augment expert judgement, not replace
              professional or regulatory review.
            </li>
          </ul>
        </section>

        {/* Citation */}
        <section className="space-y-2 border-t border-slate-800 pt-6">
          <h2 className="text-xl font-semibold text-white">Citation</h2>
          <p className="text-sm text-slate-300">
            If referencing TrialForge AI in academic or scientific work, please
            cite as:
          </p>
          <p className="text-sm font-semibold text-slate-100">
            TrialForge AI — Clinical Trial Simulation Platform (2025).
            Research and educational use only.
          </p>
        </section>
      </section>
    </main>
  );
}
