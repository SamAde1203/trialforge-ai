// app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
      <section className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            📜 Terms of Service
          </h1>
          <p className="text-sm text-slate-300">Effective date: December 2025</p>
        </header>

        <section className="space-y-3">
          <p className="text-sm text-slate-300">
            By accessing or using TrialForge AI (“TrialForge AI”, “we”, “us”, or
            “our”), you agree to these Terms of Service. If you do not agree,
            you must not use the platform.
          </p>
        </section>

        {/* 1. Intended use */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">1. Intended use</h2>
          <p className="text-sm text-slate-300">
            TrialForge AI is provided for research, educational, and exploratory
            purposes only. It is not:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>A medical device</li>
            <li>A diagnostic tool</li>
            <li>
              A substitute for professional biostatistical, clinical, or
              regulatory advice
            </li>
            <li>
              Approved for clinical decision‑making or regulatory submissions
            </li>
          </ul>
          <p className="text-sm text-slate-300">
            Any use in real‑world clinical or regulatory contexts must be
            independently validated and is solely at the user’s risk.
          </p>
        </section>

        {/* 2. User responsibilities */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            2. User responsibilities
          </h2>
          <p className="text-sm text-slate-300">
            You agree to:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Use the platform responsibly and in compliance with all laws</li>
            <li>
              Avoid entering real patient‑identifiable data or protected health
              information
            </li>
            <li>
              Refrain from misuse, attempted reverse‑engineering, or abuse of the
              services or infrastructure
            </li>
            <li>
              Acknowledge that outputs are simulated estimates, not guarantees,
              and require expert interpretation
            </li>
          </ul>
          <p className="text-sm text-slate-300">
            You remain fully responsible for any decisions or actions taken based
            on platform outputs.
          </p>
        </section>

        {/* 3. Intellectual property */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            3. Intellectual property
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>
              The TrialForge AI platform, including its code, branding, design,
              and content, is protected by copyright and other intellectual
              property laws.
            </li>
            <li>
              Open‑source components are used under their respective licenses,
              which remain in full force and effect.
            </li>
            <li>
              Subject to these Terms, you may use AI‑generated outputs for your
              own research or internal purposes. You are responsible for ensuring
              that such use complies with applicable law and third‑party rights.
            </li>
          </ul>
        </section>

        {/* 4. AI output disclaimer */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            4. AI output disclaimer
          </h2>
          <p className="text-sm text-slate-300">
            AI‑generated outputs:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>May contain assumptions, simplifications, or approximations</li>
            <li>Are not validated clinical or statistical results</li>
            <li>
              Must not be relied upon as sole evidence for clinical, regulatory,
              or commercial decisions
            </li>
          </ul>
                    <p className="text-sm text-slate-300">
            All outputs should be reviewed and interpreted by qualified
            professionals. You accept full responsibility for any use of the
            outputs.
          </p>
        </section>

        {/* 5. Availability & changes */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            5. Availability &amp; changes
          </h2>
          <p className="text-sm text-slate-300">
            TrialForge AI may, at any time and without prior notice:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Modify, enhance, or discontinue features or components</li>
            <li>Update underlying algorithms, models, or assumptions</li>
            <li>
              Temporarily suspend or restrict access for maintenance, security,
              or operational reasons
            </li>
          </ul>
          <p className="text-sm text-slate-300">
            No guarantee is made regarding uninterrupted or error‑free
            availability.
          </p>
        </section>

        {/* 6. Limitation of liability */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">
            6. Limitation of liability
          </h2>
          <p className="text-sm text-slate-300">
            To the maximum extent permitted by law:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>
              TrialForge AI and its contributors shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              or for any loss of profits, data, or business opportunities.
            </li>
            <li>
              TrialForge AI shall not be liable for research decisions, financial
              loss, regulatory consequences, or clinical outcomes arising from
              use of the platform or reliance on its outputs.
            </li>
          </ul>
          <p className="text-sm text-slate-300">
            Your use of the platform is entirely at your own risk.
          </p>
        </section>

        {/* 7. Governing law */}
        <section className="space-y-3 border-t border-slate-800 pt-6">
          <h2 className="text-xl font-semibold text-white">7. Governing law</h2>
          <p className="text-sm text-slate-300">
            These Terms are governed by and construed in accordance with the laws
            of the United Kingdom, without regard to its conflict‑of‑law
            principles. If any provision of these Terms is found to be
            unenforceable, the remaining provisions will remain in full force and
            effect.
          </p>
        </section>
      </section>
    </main>
  );
}
