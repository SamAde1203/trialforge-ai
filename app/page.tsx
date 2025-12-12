'use client';

import { useEffect, useState } from 'react';
import { EnhancedTrialInput } from './components/EnhancedTrialInput';
import { 
  BrainCircuit, 
  Zap, 
  Activity, 
  Users, 
  FileJson2 as FileJson, 
  ChevronRight, 
  Sparkles,
  Target,
  BarChart3,
  Shield
} from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated background particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl" />
        <div className="absolute top-20 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-l from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-slate-800/50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600">
                <BrainCircuit className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  TrialForge AI Pro
                </h1>
                <p className="text-xs text-slate-400">Clinical Intelligence Platform</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#how" className="text-sm text-slate-300 hover:text-white transition-colors">
                How It Works
              </a>
              <a 
                href="https://github.com/yourusername/trialforge-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all">
                <Sparkles className="h-4 w-4" />
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* HERO */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-slate-700 px-6 py-3 shadow-lg">
              <BrainCircuit className="h-5 w-5 text-cyan-400" />
              <span className="font-semibold text-cyan-300 tracking-wide">
                AI-POWERED CLINICAL INTELLIGENCE • 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Forge
              </span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Phase-Ready
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-slate-400">
                Trials in Seconds
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium">
              Transform any natural-language protocol into powered trial designs, synthetic cohorts,
              real-time power curves, and CONSORT flows — instantly.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { text: 'GPT-4 Protocol Analysis', icon: Zap, color: 'from-blue-600 to-cyan-600' },
                { text: 'Monte Carlo Simulations', icon: Users, color: 'from-cyan-600 to-emerald-600' },
                { text: 'Risk Assessment', icon: FileJson, color: 'from-violet-600 to-purple-600' },
                { text: 'Cost & Timeline', icon: Activity, color: 'from-orange-600 to-rose-600' },
              ].map(({ text, icon: Icon, color }) => (
                <div
                  key={text}
                  className={`flex items-center gap-2.5 rounded-full bg-gradient-to-r ${color} border border-slate-700 px-4 py-2.5 shadow-lg transition-all hover:scale-105 hover:shadow-xl`}
                >
                  <Icon className="h-4 w-4 text-white" />
                  <span className="font-semibold text-white text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">10K+</p>
                <p className="text-xs text-slate-400">Simulations</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">95%</p>
                <p className="text-xs text-slate-400">Accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">0.3s</p>
                <p className="text-xs text-slate-400">AI Response</p>
              </div>
            </div>
          </div>

          {/* SIMULATOR CARD */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-700/50 bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-xl shadow-2xl shadow-blue-900/20 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-white/20">
                      <BrainCircuit className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white">TrialForge AI Pro</h3>
                      <p className="text-sm opacity-90">Clinical Intelligence Platform • 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-full bg-white/20 px-5 py-2.5 font-bold backdrop-blur-sm">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white">AI Active</span>
                    <Sparkles className="h-4 w-4 text-amber-300" />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <EnhancedTrialInput />
              </div>

              <div className="border-t border-slate-800/50 bg-gradient-to-r from-slate-900/80 to-slate-950/80 px-8 py-5">
                <p className="text-center text-sm font-semibold text-slate-300">
                  Powered by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">GPT-4 & Advanced Analytics</span>
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-2xl" />
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-32 pt-16 border-t border-slate-800/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for <span className="text-cyan-400">Modern Clinical Research</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Everything you need to design, power, and visualize clinical trials with AI precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'GPT-4 Protocol Parsing',
                desc: 'Convert natural language to structured trial parameters using OpenAI GPT-4.',
                icon: BrainCircuit,
                color: 'text-blue-400',
              },
              {
                title: 'Advanced Monte Carlo',
                desc: '10,000+ simulations with confidence intervals and risk assessment.',
                icon: Zap,
                color: 'text-cyan-400',
              },
              {
                title: 'Intelligent Dashboard',
                desc: 'Interactive visualizations with real-time sensitivity analysis.',
                icon: Users,
                color: 'text-emerald-400',
              },
            ].map(({ title, desc, icon: Icon, color }) => (
              <div
                key={title}
                className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-slate-800/50 rounded-2xl p-6 hover:border-slate-700 transition-all hover:scale-[1.02]"
              >
                <div className="inline-flex p-3 rounded-xl bg-slate-800/50 mb-4">
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-slate-700 rounded-2xl px-8 py-4 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-lg font-medium text-slate-200">
              Used by clinical researchers, methodologists, and regulatory teams worldwide
            </p>
          </div>
          
          <div className="mt-8">
            <a
              href="https://github.com/yourusername/trialforge-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 text-slate-200 hover:border-slate-600 transition-colors"
            >
              <span>⭐ Star on GitHub</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}