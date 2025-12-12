'use client';

import { useState } from 'react';
import { PremiumDashboard } from './PremiumDashboard';
import {
  Loader2,
  AlertCircle,
  Sparkles,
  Zap,
  Brain,
  FileText,
  ClipboardCheck,
} from 'lucide-react';

const EXAMPLE_PROTOCOLS = [
  {
    name: 'Diabetes Trial',
    text: 'Randomized controlled trial of novel GLP-1 agonist in 200 patients with type 2 diabetes, 24-week duration, primary endpoint HbA1c reduction. Expect 1.2% reduction vs 0.3% for placebo.',
    icon: '🩺',
  },
  {
    name: 'Weight Loss Study',
    text: 'Phase 3 weight loss trial with 300 participants over 52 weeks. Comparing combination therapy vs monotherapy. Primary endpoint: percent weight change from baseline.',
    icon: '⚖️',
  },
  {
    name: 'Cardiovascular',
    text: 'Cardiovascular outcomes trial in 5000 high-risk patients, 5-year follow-up. Primary composite endpoint: major adverse cardiac events (MACE).',
    icon: '❤️',
  },
];

type AiInsights = {
  confidence: number;
  recommendations: string[];
  riskLevel: 'low' | 'medium' | 'high';
};

type DashboardResult = {
  power: number;
  powerCI: [number, number];
  requiredSample: number;
  effectSize: number;
  dropoutImpact: number;
  confidence: number;
  riskLevel: 'low' | 'medium' | 'high';
  costEstimate: number;
  timeline: number;
  recommendations: string[];
  protocol: string;
};

export function EnhancedTrialInput() {
  const [text, setText] = useState(EXAMPLE_PROTOCOLS[0].text);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DashboardResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [aiInsights, setAiInsights] = useState<AiInsights | null>(null);

  const handleRun = async () => {
    try {
      setError(null);
      setLoading(true);

      const res = await fetch('/api/enhanced-trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ protocol: text }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Request failed with ${res.status}`);
      }

      const data: { result: DashboardResult; aiInsights: AiInsights } =
        await res.json();

      setAiInsights(data.aiInsights);
      setResult(data.result);
    } catch (e: any) {
      console.error(e);
      setError(e.message || 'AI analysis failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Premium Input Card */}
      <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl shadow-blue-900/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  AI Protocol Analyzer
                </h2>
                <p className="text-sm text-slate-400">
                  Powered by GPT-4 &amp; Clinical Expertise
                </p>
              </div>
            </div>
            <p className="text-slate-300 max-w-2xl">
              Describe your trial protocol in natural language. Our AI will
              parse parameters, run simulations, and provide actionable
              insights.
            </p>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/20">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">
              Real AI Powered
            </span>
          </div>
        </div>

        {/* Text Area */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-200">
              Protocol Description
            </label>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <FileText className="h-3 w-3" />
              <span>{text.length} characters</span>
            </div>
          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            disabled={loading}
            className="w-full rounded-2xl bg-slate-950/90 border border-slate-700 px-5 py-4 text-slate-100 placeholder-slate-500 disabled:opacity-60 transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
            placeholder="Example: 'Phase 3 randomized trial of drug X in 300 patients with condition Y, 12-week duration, primary endpoint Z...'"
          />
        </div>

        {/* Example Protocols */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <ClipboardCheck className="h-4 w-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-300">
              Example Protocols
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {EXAMPLE_PROTOCOLS.map((example, idx) => (
              <button
                key={idx}
                onClick={() => setText(example.text)}
                disabled={loading}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-left hover:border-slate-700 disabled:opacity-50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{example.icon}</span>
                  <span className="font-semibold text-white group-hover:text-cyan-300">
                    {example.name}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {example.text.substring(0, 80)}...
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <button
            onClick={handleRun}
            disabled={loading || !text.trim()}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 disabled:opacity-60 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Analyzing with AI...
              </>
            ) : (
              <>
                <Zap className="h-5 w-5" />
                Run AI Analysis
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setText('')}
            disabled={loading}
            className="px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white disabled:opacity-50 transition-colors"
          >
            Clear
          </button>

          {aiInsights && (
            <div className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-emerald-300">
                Confidence: {(aiInsights.confidence * 100).toFixed(0)}%
              </span>
            </div>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-6 p-4 rounded-xl bg-rose-900/20 border border-rose-800/50">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-rose-400" />
              <div>
                <p className="font-medium text-rose-300">Analysis Error</p>
                <p className="text-sm text-rose-400/80 mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results Dashboard */}
      {result && (
        <div className="animate-fadeIn">
          <PremiumDashboard
            result={{
              power: result.power,
              powerCI: result.powerCI,
              requiredSample: result.requiredSample,
              effectSize: result.effectSize,
              dropoutImpact: result.dropoutImpact,
              confidence: result.confidence,
              riskLevel: result.riskLevel,
              costEstimate: result.costEstimate,
              timeline: result.timeline,
              recommendations: result.recommendations,
            }}
            protocol={result.protocol}
            isLoading={loading}
          />
        </div>
      )}

      {/* Loading Overlay */}
      {loading && !result && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center max-w-md">
            <div className="relative mb-8">
              <div className="w-24 h-24 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="h-10 w-10 text-cyan-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              AI Analysis in Progress
            </h3>
            <p className="text-slate-400 mb-6">
              Our clinical AI is analyzing your protocol, running Monte Carlo
              simulations, and generating actionable insights...
            </p>
            <div className="space-y-2 text-left inline-block">
              {[
                'Parsing protocol with GPT-4',
                'Calculating statistical power',
                'Running Monte Carlo simulations',
                'Generating risk assessment',
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
