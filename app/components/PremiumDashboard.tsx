'use client';

import { useState, useEffect } from 'react';
import { 
  TrendingUp, Users, Activity, BarChart3, 
  Target, Zap, Shield, Brain,
  ChevronRight, AlertCircle, Clock, Cpu
} from 'lucide-react';

type SimulationResult = {
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
};

type DashboardProps = {
  result: SimulationResult;
  protocol: string;
  isLoading?: boolean;
};

export function PremiumDashboard({ result, protocol, isLoading }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'power' | 'economics' | 'risks'>('overview');
  
  // Animation state
  const [animatedValues, setAnimatedValues] = useState({
    power: 0,
    confidence: 0,
    sample: 0
  });

  useEffect(() => {
    // Animate numbers on load
    const animate = (target: number, key: keyof typeof animatedValues, duration: number = 1000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({ ...prev, [key]: Math.round(current) }));
      }, 16);
    };

    animate(result.power * 100, 'power', 1500);
    animate(result.confidence * 100, 'confidence', 1800);
    animate(result.requiredSample, 'sample', 2000);
  }, [result]);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'medium': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'high': return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
      default: return 'bg-slate-500/20 text-slate-300';
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header with tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Trial Intelligence Dashboard
          </h2>
          <p className="text-sm text-slate-400 mt-1">Real-time simulation insights</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'power', label: 'Power Analysis', icon: TrendingUp },
            { id: 'economics', label: 'Economics', icon: Target },
            { id: 'risks', label: 'Risk Assessment', icon: Shield }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${activeTab === id 
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30' 
                : 'bg-slate-900/60 text-slate-400 hover:bg-slate-800/60'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Main metrics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Power Metric */}
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-xl bg-cyan-500/20">
              <Zap className="h-5 w-5 text-cyan-400" />
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskColor(result.riskLevel)}`}>
              {result.riskLevel.toUpperCase()}
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Statistical Power</p>
            <div className="flex items-end gap-2">
              <p className="text-4xl font-bold text-white">{animatedValues.power}%</p>
              <div className="text-sm text-slate-400 mb-1">
                CI: {result.powerCI[0]*100}–{result.powerCI[1]*100}%
              </div>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                style={{ width: `${animatedValues.power}%` }}
              />
            </div>
          </div>
        </div>

        {/* Sample Size */}
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/20 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-xl bg-blue-500/20">
              <Users className="h-5 w-5 text-blue-400" />
            </div>
            <span className="text-xs text-slate-400 font-medium">Required</span>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Sample Size</p>
            <p className="text-4xl font-bold text-white">{animatedValues.sample.toLocaleString()}</p>
            <p className="text-sm text-slate-400">
              <span className="text-emerald-400">+{result.dropoutImpact}%</span> for dropouts
            </p>
          </div>
        </div>

        {/* Confidence */}
        <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 border border-violet-500/20 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-xl bg-violet-500/20">
              <Target className="h-5 w-5 text-violet-400" />
            </div>
            <span className="text-xs text-slate-400 font-medium">AI Confidence</span>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Model Confidence</p>
            <div className="flex items-end gap-2">
              <p className="text-4xl font-bold text-white">{animatedValues.confidence}%</p>
              <Brain className="h-5 w-5 text-violet-400 mb-1" />
            </div>
            <div className="text-xs text-slate-400">
              Effect size: {result.effectSize.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Economics */}
        <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/20 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-xl bg-emerald-500/20">
              <Activity className="h-5 w-5 text-emerald-400" />
            </div>
            <Clock className="h-4 w-4 text-slate-400" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-400">Est. Cost & Timeline</p>
            <p className="text-3xl font-bold text-white">
              ${(result.costEstimate / 1000).toFixed(0)}K
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>{result.timeline} months</span>
              <div className="h-1 w-1 rounded-full bg-slate-600" />
              <span>${(result.costEstimate / result.requiredSample).toFixed(0)}/patient</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left: Protocol Summary */}
        <div className="lg:col-span-2 space-y-6">
          {/* Protocol Card */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Protocol Analysis</h3>
                <p className="text-sm text-slate-400">AI-powered insights</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800">
                <p className="text-sm text-slate-300 leading-relaxed">{protocol.substring(0, 300)}...</p>
              </div>
              
              {/* AI Recommendations */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-400" />
                  AI Recommendations
                </h4>
                <div className="space-y-2">
                  {result.recommendations.slice(0, 3).map((rec, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <div className="p-1 rounded bg-cyan-500/20 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-cyan-400" />
                      </div>
                      <p className="text-sm text-slate-300">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Visualization Placeholder */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-white">CONSORT Flow Simulation</h3>
                <p className="text-sm text-slate-400">Participant journey visualization</p>
              </div>
              <Cpu className="h-5 w-5 text-cyan-400 animate-pulse" />
            </div>
            
            <div className="h-64 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-slate-800 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">📈</div>
                <p className="text-slate-300 font-medium">Interactive CONSORT Diagram</p>
                <p className="text-sm text-slate-500 mt-1">Visualizing {result.requiredSample.toLocaleString()} participants</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quick Actions */}
        <div className="space-y-6">
          {/* Risk Assessment */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="font-semibold text-white mb-4">Risk Assessment</h3>
            <div className="space-y-4">
              {[
                { label: 'Statistical Risk', value: 85, color: 'bg-cyan-500' },
                { label: 'Operational Risk', value: 65, color: 'bg-blue-500' },
                { label: 'Financial Risk', value: 45, color: 'bg-emerald-500' },
                { label: 'Regulatory Risk', value: 75, color: 'bg-violet-500' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-white font-medium">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-700`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Export Actions */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-800 rounded-2xl p-6">
            <h3 className="font-semibold text-white mb-4">Export & Actions</h3>
            <div className="space-y-3">
              {[
                { label: 'Export to PDF Report', icon: '📄', color: 'from-cyan-500 to-blue-500' },
                { label: 'Share with Team', icon: '👥', color: 'from-blue-500 to-violet-500' },
                { label: 'Schedule Review', icon: '📅', color: 'from-violet-500 to-purple-500' },
                { label: 'Generate Protocol', icon: '📝', color: 'from-emerald-500 to-teal-500' }
              ].map((action, idx) => (
                <button
                  key={idx}
                  className={`w-full p-3 rounded-xl bg-gradient-to-r ${action.color} text-white text-sm font-medium flex items-center justify-between hover:scale-[1.02] transition-transform`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">{action.icon}</span>
                    {action.label}
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-xl font-semibold text-white">Running AI Simulation...</p>
            <p className="text-slate-400 mt-2">Analyzing protocol with GPT-4</p>
          </div>
        </div>
      )}
    </div>
  );
}