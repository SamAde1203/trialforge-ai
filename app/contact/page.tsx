// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            📬 Contact
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            TrialForge AI welcomes feedback, collaboration, and responsible disclosure.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            General enquiries
          </h2>
          <p className="text-sm text-slate-300">
            For general questions, product feedback, or partnership enquiries, email:
          </p>
          <p className="text-sm font-semibold text-cyan-300">
            samoadeyemi@yahoo.co.uk
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Bug reports
          </h2>
          <p className="text-sm text-slate-300">
            Please report non‑security bugs via GitHub Issues using the appropriate template
            on the TrialForge AI repository.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Security issues
          </h2>
          <p className="text-sm text-slate-300">
            For security vulnerabilities or suspected security issues, do{' '}
            <span className="font-semibold">not</span> open a public GitHub issue.
            Email the address above with “Security Disclosure” in the subject line.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Collaboration
          </h2>
          <p className="text-sm text-slate-300">
            Collaboration is especially welcome from:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
            <li>Clinical researchers and trialists</li>
            <li>Biostatisticians and methodologists</li>
            <li>AI / ML engineers and data scientists</li>
            <li>Academic and research institutions</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
