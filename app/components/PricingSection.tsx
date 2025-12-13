// Component: PricingSection.tsx
export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-950/50 to-slate-950">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent pricing, no hidden fees
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Simple, predictable plans designed for researchers at every stage.
            Pay for what you use. Cancel anytime.
          </p>
        </div>

        {/* Pricing toggle: Monthly/Annual */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="text-sm font-semibold text-slate-300">Monthly</span>
          <button className="relative inline-flex h-8 w-14 items-center rounded-full bg-slate-800 transition-colors hover:bg-slate-700">
            <span className="inline-block h-6 w-6 transform rounded-full bg-cyan-400 shadow-lg transition-transform" />
          </button>
          <span className="text-sm font-semibold text-slate-300">Annual (20% off)</span>
        </div>

        {/* Pricing cards: 3 tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Tier 1: Starter */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
            <p className="text-sm text-slate-400 mb-6">
              Perfect for exploring simulation. Try the platform.
            </p>

            {/* Price */}
            <div className="mb-6">
              <p className="text-4xl font-bold text-white">
                $29
                <span className="text-lg font-normal text-slate-400">/mo</span>
              </p>
              <p className="text-xs text-slate-400 mt-2">
                or $279/year (save $69)
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Up to 3 concurrent simulations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>10,000 Monte Carlo runs per simulation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Basic dashboard &amp; export (PDF)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Email support (48hr response)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 font-bold mt-0.5">—</span>
                <span className="text-slate-500">Advanced scenario analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 font-bold mt-0.5">—</span>
                <span className="text-slate-500">Team collaboration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 font-bold mt-0.5">—</span>
                <span className="text-slate-500">Priority support</span>
              </li>
            </ul>

            {/* CTA */}
            <button className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all">
              Get started
            </button>
          </div>

          {/* Tier 2: Professional (Featured) */}
          <div className="rounded-2xl border border-cyan-500/50 bg-gradient-to-br from-slate-900/80 to-slate-900/60 p-8 flex flex-col relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-bl-lg">
              MOST POPULAR
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
            <p className="text-sm text-slate-300 mb-6">
              Ideal for active trial design teams &amp; sponsors.
            </p>

            {/* Price */}
            <div className="mb-6">
              <p className="text-4xl font-bold text-cyan-300">
                $99
                <span className="text-lg font-normal text-slate-400">/mo</span>
              </p>
              <p className="text-xs text-slate-400 mt-2">
                or $949/year (save $239)
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Unlimited concurrent simulations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>50,000 Monte Carlo runs per simulation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Advanced dashboard, multi-scenario comparison</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>PDF, JSON, &amp; CONSORT export</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Team collaboration (up to 5 users)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Priority email support (24hr response)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-600 font-bold mt-0.5">—</span>
                <span className="text-slate-500">Dedicated account manager</span>
              </li>
            </ul>

            {/* CTA */}
            <button className="w-full rounded-lg bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors">
              Start free trial
            </button>
            <p className="text-xs text-slate-400 text-center mt-3">
              14 days free, no credit card required
            </p>
          </div>

          {/* Tier 3: Enterprise */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
            <p className="text-sm text-slate-400 mb-6">
              For large CROs, academic consortia, and global programmes.
            </p>

            {/* Price */}
            <div className="mb-6">
              <p className="text-3xl font-bold text-white">
                Custom
                <span className="text-lg font-normal text-slate-400"> pricing</span>
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Volume discounts &amp; flexible contracts
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-1 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Everything in Professional</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Custom simulation runs &amp; optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>API access &amp; custom integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>Priority 24/7 support &amp; training</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-300 font-bold mt-0.5">✓</span>
                <span>SLA guarantee &amp; on-site options</span>
              </li>
            </ul>

            {/* CTA */}
            <a
              href="/contact"
              className="w-full rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all text-center"
            >
              Contact sales
            </a>
          </div>
        </div>

        {/* Feature comparison table */}
        <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Feature comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-3 px-4 font-semibold text-slate-300">
                    Feature
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-300">
                    Starter
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-300">
                    Professional
                  </th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-300">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Concurrent simulations", "3", "Unlimited", "Unlimited"],
                  ["MC runs per simulation", "10,000", "50,000", "Custom"],
                  ["Dashboard & export", "Basic", "Advanced", "Advanced+"],
                  ["Team users", "1", "Up to 5", "Unlimited"],
                  ["API access", false, false, true],
                  ["Custom integrations", false, false, true],
                  ["Email support", "48 hrs", "24 hrs", "24/7"],
                  ["Dedicated manager", false, false, true],
                  ["SLA guarantee", false, false, true],
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-700/30 hover:bg-slate-950/30 transition-colors"
                  >
                    <td className="py-3 px-4 text-slate-300 font-medium">
                      {row[0]}
                    </td>
                    {[1, 2, 3].map((col) => (
                      <td
                        key={col}
                        className="py-3 px-4 text-center text-slate-300"
                      >
                        {typeof row[col] === "boolean" ? (
                          row[col] ? (
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300">
                              ✓
                            </span>
                          ) : (
                            <span className="text-slate-600">—</span>
                          )
                        ) : (
                          row[col]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ section */}
        <div className="space-y-4 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Frequently asked questions
          </h3>

          {[
            {
              q: "Can I change plans anytime?",
              a: "Yes. Upgrade or downgrade at any time. Changes take effect at your next billing cycle.",
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit cards, wire transfer, and purchase orders for Enterprise accounts.",
            },
            {
              q: "Is there a free trial?",
              a: "Yes. Professional plan includes a 14-day free trial with full access. No credit card required to start.",
            },
            {
              q: "What happens to my data if I cancel?",
              a: "Your data is yours. You can export all simulations and reports in PDF, JSON, or CSV before your account closes. We retain no data after cancellation.",
            },
            {
              q: "Do you offer academic or non-profit discounts?",
              a: "Yes. Reach out to our team at samoadeyemi@yahoo.co.uk and mention your institution. We offer 30-50% discounts for qualifying research.",
            },
            {
              q: "What about HIPAA, GDPR, and compliance?",
              a: "TrialForge AI is GDPR-compliant and does not require or process protected health information (PHI). Enterprise plans can discuss additional security requirements.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-lg border border-slate-700/50 bg-slate-900/40 p-4 cursor-pointer hover:bg-slate-900/60 transition-colors"
            >
              <summary className="flex items-center justify-between text-sm font-semibold text-white">
                {faq.q}
                <svg
                  className="w-4 h-4 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-xs text-slate-400">{faq.a}</p>
            </details>
          ))}
        </div>

        {/* CTA section */}
        <div className="rounded-2xl border border-slate-700/30 bg-gradient-to-r from-cyan-500/5 to-slate-900/50 p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to transform your trial design?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Start with Starter to explore. Upgrade to Professional when you're
            ready to scale. Enterprise available for large programmes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors">
              Start free trial
            </button>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-500/50 transition-colors"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
