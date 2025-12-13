// app/status/page.tsx
export default function StatusPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <section className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            📡 Platform Status
          </h1>
          <p className="text-sm text-slate-300">
            High‑level view of TrialForge AI service health.
          </p>
        </header>

        <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-100">
                Current status
              </p>
              <p className="text-sm text-slate-300">
                All core services are operating normally.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Operational
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Monitored components
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">
                Web application:
              </span>{' '}
              User interface and dashboard.
            </li>
            <li>
              <span className="font-semibold text-slate-100">
                Simulation API:
              </span>{' '}
              Protocol parsing and Monte Carlo engine.
            </li>
            <li>
              <span className="font-semibold text-slate-100">
                Export &amp; reporting:
              </span>{' '}
              PDF/text report generation and downloads.
            </li>
            <li>
              <span className="font-semibold text-slate-100">
                Integrations:
              </span>{' '}
              Third‑party AI providers and email/notification services.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Incident communication
          </h2>
          <p className="text-sm text-slate-300">
            TrialForge AI is an evolving research platform. If a significant
            service interruption or data‑impacting incident occurs, details and
            remediation steps will be communicated through release notes or
            direct contact with affected users where appropriate.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-xl font-semibold text-white">Need help?</h2>
          <p className="text-sm text-slate-300">
            If you are experiencing issues that are not reflected here, please
            reach out via the contact page or email{' '}
            <span className="font-semibold text-cyan-300">
              samoadeyemi@yahoo.co.uk
            </span>
            .
          </p>
        </section>
      </section>
    </main>
  );
}
