// app/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <section className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            🔐 Privacy Policy
          </h1>
          <p className="text-sm text-slate-300">Last updated: December 2025</p>
        </header>

        <section className="space-y-3">
          <p className="text-sm text-slate-300">
            TrialForge AI (“TrialForge AI”, “we”, “us”, or “our”) is committed to
            protecting your privacy and handling data responsibly. This Privacy
            Policy explains how information is collected, used, and safeguarded
            when you use the TrialForge AI platform.
          </p>
        </section>

        {/* 1. Scope & Purpose */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">1. Scope &amp; purpose</h2>
          <p className="text-sm text-slate-300">
            TrialForge AI is a research and educational simulation platform
            designed to assist clinical researchers, methodologists, and
            innovation teams with trial design exploration. It does not provide
            medical advice, clinical decision support, or patient care services.
          </p>
        </section>

        {/* 2. Data we do not collect */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            2. Data we do not collect
          </h2>
          <p className="text-sm text-slate-300">
            TrialForge AI is intentionally designed to avoid collecting sensitive
            data. In particular, we do not intend to collect:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Patient‑level or personal health information (PHI)</li>
            <li>Identifiable clinical trial subject data</li>
            <li>Medical records</li>
            <li>Regulatory submission dossiers or confidential sponsor material</li>
          </ul>
          <p className="text-sm text-slate-300">
            Users should not enter real patient data or confidential regulatory
            content into the platform.
          </p>
        </section>

        {/* 3. Data we may process */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            3. Data we may process
          </h2>
          <p className="text-sm text-slate-300">
            To operate and improve the platform, we may process limited,
            non‑sensitive data such as:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>
              Protocol or trial‑like text entered by users (treated as transient
              input)
            </li>
            <li>Anonymous usage analytics (for example, page views and features used)</li>
            <li>
              Technical metadata (for example, browser type, device type, approximate
              region)
            </li>
            <li>Error and performance logs used for debugging and stability</li>
          </ul>
          <p className="text-sm text-slate-300">
            Where analytics are used, they are aggregated and anonymised.
          </p>
        </section>

        {/* 4. AI processing & third‑party services */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            4. AI processing &amp; third‑party services
          </h2>
          <p className="text-sm text-slate-300">
            TrialForge AI may use third‑party AI providers (for example, OpenAI
            APIs) to process text and generate outputs requested by the user.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Inputs are used only to generate your requested responses.</li>
            <li>Inputs are not used by TrialForge AI to train proprietary models.</li>
            <li>Data is not sold, rented, or shared for advertising purposes.</li>
          </ul>
          <p className="text-sm text-slate-300">
            Users should review the privacy policies of any third‑party providers
            used by the platform for details of their data handling practices.
          </p>
        </section>

        {/* 5. Data retention */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">5. Data retention</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>
              Protocol inputs are processed ephemerally and are not retained
              long‑term unless explicitly enabled by the user (for example, saving
              scenarios or reports).
            </li>
            <li>
              Logs and technical metadata are retained only for as long as
              necessary to support security, performance monitoring, and
              troubleshooting.
            </li>
          </ul>
        </section>

        {/* 6. Security */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">6. Security</h2>
          <p className="text-sm text-slate-300">
            TrialForge AI applies industry‑standard security practices, which may
            include:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Use of environment variables for secret and API key isolation</li>
            <li>Protection of API keys and credentials</li>
            <li>No execution of user‑supplied code on shared infrastructure</li>
            <li>Rate‑limiting and abuse protection on simulation endpoints</li>
          </ul>
          <p className="text-sm text-slate-300">
            However, no system can be guaranteed completely secure. Users should
            avoid submitting highly sensitive or regulated data.
          </p>
        </section>

        {/* 7. Your rights & contact */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            7. Your rights &amp; contact
          </h2>
          <p className="text-sm text-slate-300">
            Depending on your jurisdiction, you may have rights to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Request deletion of any stored metadata associated with your usage</li>
            <li>Request clarification about how your data is used</li>
            <li>Raise questions or concerns about privacy or security</li>
          </ul>
          <p className="text-sm text-slate-300">
            For privacy enquiries, contact:{' '}
            <span className="font-semibold text-cyan-300">
              samoadeyemi@yahoo.co.uk
            </span>
          </p>
        </section>

        {/* 8. Changes */}
        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-xl font-semibold text-white">8. Changes</h2>
          <p className="text-sm text-slate-300">
            This Privacy Policy may be updated from time to time to reflect
            changes in the platform, applicable laws, or best practices. When the
            policy is updated, the “Last updated” date will be revised. Continued
            use of TrialForge AI after changes become effective constitutes
            acceptance of the updated Privacy Policy.
          </p>
        </section>
      </section>
    </main>
  );
}
