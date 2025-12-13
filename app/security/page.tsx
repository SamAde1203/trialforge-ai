// app/security/page.tsx
export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <section className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            🛡️ Security
          </h1>
          <p className="text-sm text-slate-300">
            How TrialForge AI approaches security and responsible use.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Platform principles
          </h2>
          <p className="text-sm text-slate-300">
            TrialForge AI is designed as a research and educational simulation
            platform. Security controls focus on protecting configuration
            secrets, minimising data retention, and avoiding unnecessary
            processing of sensitive information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Data handling posture
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>No protected health information (PHI) is required or supported.</li>
            <li>
              Users are instructed not to enter real patient‑identifiable or
              confidential regulatory data.
            </li>
            <li>
              Protocol text is processed ephemerally to generate outputs and is
              not stored long‑term unless explicitly saved by the user.
            </li>
            <li>
              Aggregated, anonymised telemetry may be used to monitor stability
              and improve the product.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Technical safeguards
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Secrets and API keys are stored in environment variables.</li>
            <li>
              Only server‑side components call external AI providers; keys are
              never exposed in client‑side code.
            </li>
            <li>
              Simulation endpoints include basic rate‑limiting and validation to
              reduce abuse.
            </li>
            <li>
              Logs are restricted to operational metadata and error context, not
              full protocol content where avoidable.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            Third‑party services
          </h2>
          <p className="text-sm text-slate-300">
            TrialForge AI may rely on third‑party infrastructure and AI
            providers (for example, cloud hosting and model APIs). Each
            provider maintains its own security controls and certifications.
            Users should review those providers’ documentation for details.
          </p>
        </section>

        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-xl font-semibold text-white">Reporting issues</h2>
          <p className="text-sm text-slate-300">
            If you believe you have identified a security vulnerability:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Do not post details in public issues or forums.</li>
            <li>
              Email{' '}
              <span className="font-semibold text-cyan-300">
                samoadeyemi@yahoo.co.uk
              </span>{' '}
              with “Security Disclosure” in the subject line.
            </li>
            <li>
              Include enough information to reproduce the issue and assess its
              impact.
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
