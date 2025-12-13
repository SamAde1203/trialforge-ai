// app/case-studies/[slug]/page.tsx
import type { Metadata } from "next";

const CASE_STUDIES = {
  "t2d-glycaemic-control": {
    title: "Detecting under‑power risk in a glycaemic control trial",
    tag: "Phase 2 · Type 2 diabetes",
  },
  "oncology-event-driven": {
    title: "Stress‑testing event‑driven timelines",
    tag: "Phase 3 · Oncology",
  },
};

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const study = CASE_STUDIES[params.slug as keyof typeof CASE_STUDIES];
  return {
    title: study ? `${study.title} | Case study` : "Case study",
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = CASE_STUDIES[params.slug as keyof typeof CASE_STUDIES];

  if (!study) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <p className="text-sm text-slate-300">
          This case study could not be found.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <section className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs text-slate-400">{study.tag}</p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            {study.title}
          </h1>
          <p className="text-sm text-slate-300">
            Illustrative example showing how TrialForge AI can support protocol
            design decisions. Details are anonymised and simplified.
          </p>
        </header>

        <section className="space-y-3 text-sm text-slate-300">
          <h2 className="text-base font-semibold text-white">Context</h2>
          <p>
            Describe the indication, phase, endpoints, and original design
            assumptions. Summarise why the team was uncertain and what decisions
            were at stake.
          </p>
        </section>

        <section className="space-y-3 text-sm text-slate-300">
          <h2 className="text-base font-semibold text-white">Simulation setup</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Arms and allocation ratio.</li>
            <li>Primary endpoint distribution and assumptions.</li>
            <li>Recruitment and drop‑out model.</li>
            <li>Number of Monte Carlo runs and key scenarios.</li>
          </ul>
        </section>

        <section className="space-y-3 text-sm text-slate-300">
          <h2 className="text-base font-semibold text-white">Findings</h2>
          <p>
            Summarise what the simulations showed about power, timelines, and
            risk across scenarios. Highlight surprising or non‑intuitive
            results.
          </p>
        </section>

        <section className="space-y-3 text-sm text-slate-300">
          <h2 className="text-base font-semibold text-white">
            Impact on decisions
          </h2>
          <p>
            Explain how the team changed the protocol, governance triggers, or
            communication plans based on the simulation outputs.
          </p>
        </section>
      </section>
    </main>
  );
}
