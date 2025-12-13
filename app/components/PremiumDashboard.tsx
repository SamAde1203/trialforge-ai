'use client';

import { useState, useEffect } from 'react';
import {
  Copy,
  Download,
  Mail,
  Loader2,
  BarChart3,
  TrendingUp,
  Users,
  Brain,
  Activity,
  Clock,
  Lightbulb,
} from 'lucide-react';
import type { EnhancedSimulationResult } from '@/lib/types';

type DashboardProps = {
  result: EnhancedSimulationResult;
  protocol: string;
  isLoading?: boolean;
};

export function PremiumDashboard({
  result,
  protocol,
  isLoading,
}: DashboardProps) {
  const [animatedValues, setAnimatedValues] = useState({
    power: 0,
    confidence: 0,
    sample: 0,
  });

  const {
    baseCase,
    conservative,
    optimistic,
    recommendations,
    riskLevel,
    confidence,
  } = result;

  useEffect(() => {
    const animate = (
      target: number,
      key: keyof typeof animatedValues,
      duration = 1000
    ) => {
      const steps = Math.max(Math.floor(duration / 16), 1);
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        setAnimatedValues((prev) => ({
          ...prev,
          [key]: Math.round(current),
        }));
      }, 16);

      return () => clearInterval(timer);
    };

    animate(baseCase.power * 100, 'power', 1500);
    animate(confidence * 100, 'confidence', 1800);
    animate(baseCase.requiredSample, 'sample', 2000);
  }, [baseCase, confidence]);

  const getRiskColor = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'medium':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'high':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      default:
        return 'bg-slate-500/20 text-slate-300';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-teal-400" />
          <p className="text-sm text-slate-400">Analyzing protocol with GPT-4...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Power Metric */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-4 h-4 text-teal-400" />
            <h3 className="text-sm font-medium text-slate-400">
              Statistical Power
            </h3>
          </div>
          <p className="text-4xl font-bold text-white">
            {animatedValues.power}%
          </p>
          <p className="text-xs text-slate-500 mt-2">
            95% CI: {(baseCase.powerCI[0] * 100).toFixed(1)}–
            {(baseCase.powerCI[1] * 100).toFixed(1)}%
          </p>
        </div>

        {/* Sample Size Metric */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-teal-400" />
            <h3 className="text-sm font-medium text-slate-400">
              Enrollment Target
            </h3>
          </div>
          <p className="text-4xl font-bold text-white">
            {animatedValues.sample.toLocaleString()}
          </p>
          <p className="text-xs text-slate-500 mt-2">
            +{baseCase.dropoutImpact}% buffer for{' '}
            {(baseCase.dropoutRate * 100).toFixed(0)}% expected dropout
          </p>
        </div>

        {/* Confidence Metric */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-4 h-4 text-teal-400" />
            <h3 className="text-sm font-medium text-slate-400">
              Model Confidence
            </h3>
          </div>
          <p className="text-4xl font-bold text-white">
            {animatedValues.confidence}%
          </p>
          <div
            className={`text-xs px-3 py-1 rounded-full inline-block mt-2 border ${getRiskColor(
              riskLevel
            )}`}
          >
            {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
          </div>
        </div>
      </div>

      {/* Scenario Comparison */}
      <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-teal-400" />
          <h4 className="text-lg font-semibold text-white">Dropout Scenarios</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-rose-500/10 rounded border border-rose-500/20">
            <span className="text-sm text-slate-300">
              Conservative (15% dropout)
            </span>
            <span className="font-mono font-bold text-rose-300">
              {(conservative.power * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex justify-between items-center p-3 bg-amber-500/10 rounded border border-amber-500/20">
            <span className="text-sm text-slate-300">Base Case (8% dropout)</span>
            <span className="font-mono font-bold text-amber-300">
              {(baseCase.power * 100).toFixed(1)}%
            </span>
          </div>
          <div className="flex justify-between items-center p-3 bg-emerald-500/10 rounded border border-emerald-500/20">
            <span className="text-sm text-slate-300">Optimistic (3% dropout)</span>
            <span className="font-mono font-bold text-emerald-300">
              {(optimistic.power * 100).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-teal-400" />
          <h4 className="text-lg font-semibold text-white">
            AI Recommendations
          </h4>
        </div>
        <ul className="space-y-2">
          {recommendations && recommendations.length > 0 ? (
            recommendations.map((rec: string, i: number) => (
              <li key={i} className="flex gap-3 text-sm text-slate-300">
                <span className="text-teal-400 flex-shrink-0">→</span>
                <span>{rec}</span>
              </li>
            ))
          ) : (
            <p className="text-sm text-slate-400">No specific recommendations</p>
          )}
        </ul>
      </div>

      {/* Cost & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-teal-400" />
            <p className="text-sm text-slate-400">Estimated Budget</p>
          </div>
          <p className="text-3xl font-bold text-white">
            {(baseCase.costEstimate / 1_000_000).toFixed(1)}M
          </p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-teal-400" />
            <p className="text-sm text-slate-400">Timeline</p>
          </div>
          <p className="text-3xl font-bold text-white">
            {baseCase.timeline} months
          </p>
        </div>
      </div>

      {/* Trial Details */}
      <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
        <h4 className="text-lg font-semibold text-white mb-4">Trial Details</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-slate-400">Per Arm (After Dropout)</p>
            <p className="text-lg font-semibold text-white">
              {baseCase.nPerArm}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Effect Size</p>
            <p className="text-lg font-semibold text-white">
              {baseCase.effectSize.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Dropout Rate</p>
            <p className="text-lg font-semibold text-white">
              {(baseCase.dropoutRate * 100).toFixed(0)}%
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Success Probability</p>
            <p className="text-lg font-semibold text-white">
              {(baseCase.probabilityOfSuccess * 100).toFixed(0)}%
            </p>
          </div>
        </div>
      </div>

      {/* Protocol Summary */}
      <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
        <h4 className="text-lg font-semibold text-white mb-4">
          Protocol Summary
        </h4>
        <p className="text-sm text-slate-300 line-clamp-4">
          {protocol.substring(0, 500)}...
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg text-white font-medium transition">
          <Download className="w-4 h-4" />
          Download Report
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition">
          <Mail className="w-4 h-4" />
          Share
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium transition">
          <Copy className="w-4 h-4" />
          Copy Link
        </button>
      </div>
    </div>
  );
}
