'use client';

import { useEffect, useState, useRef } from 'react';
import {
  Github,
  BrainCircuit,
  Zap,
  Activity,
  ChevronRight,
  Sparkles,
  Target,
  BarChart3,
  Shield,
  Rocket,
  Award,
  Cpu,
  Globe,
} from 'lucide-react';
import { EnhancedTrialInput } from './components/EnhancedTrialInput';
import { AnimatedCounter } from './components/AnimatedCounter';
import { FloatingElements } from './components/FloatingElements';
import { TypewriterEffect } from './components/TypewriterEffect';
import DescribeProtocol from './components/HowItWorksStep1';
import AIExtractsParameters from './components/HowItWorksStep2';
import HowItWorksStep3 from './components/HowItWorksStep3';
import FeaturesSection from './components/FeaturesSection';
import SolutionsSection from './components/SolutionsSection';
import PricingSection from './components/PricingSection';
import LiveDemoSection from './components/LiveDemoSection';

type SectionId = 'hero' | 'features' | 'how-it-works' | 'solutions' | 'pricing' | 'resources' | 'demo';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Find which section is in view
      const sections: SectionId[] = ['hero', 'features', 'how-it-works', 'solutions', 'pricing', 'resources', 'demo'];
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + 100; // Offset for fixed header
      
      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (!element) continue;
        
        const { top, bottom } = element.getBoundingClientRect();
        const elementTop = top + window.scrollY;
        const elementBottom = bottom + window.scrollY;
        
        // Check if section is in view
        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Assign refs to sections
  const setSectionRef = (id: SectionId) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const handleNavClick = (section: SectionId) => {
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[900px] w-[900px] -translate-x-1/2">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20 animate-pulse-slow" />
          <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-violet-600/15 via-transparent to-emerald-600/15 animate-pulse-slow delay-1000" />
        </div>
        <FloatingElements count={30} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.03] animate-grid-pulse" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-light-streak" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-cyan-600/20 to-blue-600/20 blur-xl" />
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/90 border border-slate-700">
                <img
                  src="/logo.png"
                  alt="TrialForge AI logo"
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>
            <div>
              <p className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-lg font-semibold text-transparent">
                TrialForge AI Pro
              </p>
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Clinical Intelligence Platform
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            {[
              { id: 'features', label: 'Features' },
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'solutions', label: 'Solutions' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'resources', label: 'Resources' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as SectionId)}
                className={`group text-sm font-medium transition-all ${
                  activeSection === item.id ? 'text-cyan-300' : 'text-slate-300 hover:text-cyan-300'
                }`}
              >
                {item.label}
                <span className={`mt-1 block h-0.5 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                } bg-gradient-to-r from-cyan-500 to-blue-500 transition-all`} />
              </button>
            ))}
            <a
              href="https://github.com/SamAde1203/trialforge-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-all hover:border-cyan-500/50 hover:text-white"
            >
              GitHub
            </a>
            <button
              onClick={() => handleNavClick('demo')}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:from-cyan-500 hover:to-blue-500 hover:shadow-cyan-500/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="h-4 w-4 group-hover:animate-spin" />
                Try Free Demo
              </span>
              <div className="absolute inset-0 translate-y-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:translate-y-0" />
            </button>
          </div>
        </div>
      </nav>

      {/* HERO + SIMULATOR */}
      <section id="hero" ref={setSectionRef('hero')} className="relative pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/25 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 px-5 py-2.5 shadow-lg shadow-cyan-900/40">
              <Rocket className="h-4 w-4 text-cyan-300" />
              <span className="text-xs font-semibold tracking-[0.16em] text-cyan-200">
                AI‑POWERED CLINICAL INTELLIGENCE • 2025
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Forge Phase‑Ready
                </span>
                <span className="mt-2 block text-slate-200">
                  <TypewriterEffect
                    texts={[
                      'Trials in Seconds',
                      'AI‑Powered Protocols',
                      'Clinical Intelligence',
                      'Next‑Gen Research',
                    ]}
                    className="font-bold"
                  />
                </span>
              </h1>
              <p className="max-w-xl text-base text-slate-300 md:text-lg">
                Transform plain‑English protocols into simulated trial designs,
                synthetic cohorts, power curves, and CONSORT‑style flows —{' '}
                <span className="font-semibold text-cyan-300">instantly.</span>
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                For research and educational use only • Not clinical decision
                support
              </p>
            </div>

            {/* chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { text: 'GPT‑4 Protocol Analysis', icon: Zap },
                { text: 'Monte Carlo Simulations', icon: Cpu },
                { text: 'Risk Assessment AI', icon: Shield },
                { text: 'Cost & Timeline AI', icon: Activity },
              ].map(({ text, icon: Icon }) => (
                <div
                  key={text}
                  className="group relative overflow-hidden rounded-full border border-slate-700/60 bg-slate-900/70 px-4 py-2.5 backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:bg-slate-900/90"
                >
                  <div className="relative flex items-center gap-2">
                    <Icon className="h-4 w-4 text-slate-300 group-hover:text-cyan-300" />
                    <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                      {text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* stats */}
            <div className="grid grid-cols-3 gap-5 pt-6">
              {[
                {
                  value: 10000,
                  label: 'Simulated scenarios',
                  suffix: '+',
                  icon: BarChart3,
                  color: 'text-cyan-400',
                },
                {
                  value: 95,
                  label: 'Simulation coverage',
                  suffix: '%',
                  icon: Target,
                  color: 'text-emerald-400',
                },
                {
                  value: 300,
                  label: 'Avg. response time',
                  suffix: 'ms',
                  icon: Zap,
                  color: 'text-blue-400',
                },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/80">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <p className="text-2xl font-bold text-white">
                    <AnimatedCounter
                      value={stat.value}
                      duration={1800}
                      className={stat.color}
                    />
                    {stat.suffix}
                  </p>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* primary CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => handleNavClick('demo')}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:from-cyan-500 hover:to-blue-500 hover:shadow-cyan-400/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="h-4 w-4 group-hover:animate-bounce" />
                  Start Free Trial
                </span>
              </button>
              <button
                onClick={() => handleNavClick('solutions')}
                className="group rounded-xl border border-slate-700 px-6 py-3 text-sm text-slate-300 transition-all hover:border-cyan-500/50 hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  View Case Studies
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Right column: simulator */}
          <div className="relative" id="demo" ref={setSectionRef('demo')}>
            <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-cyan-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/40 bg-slate-900/85 backdrop-blur-2xl shadow-2xl">
              <div className="border-b border-slate-800/60 bg-gradient-to-r from-cyan-700 to-blue-700 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                      <BrainCircuit className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        TrialForge Simulator
                      </p>
                      <p className="text-[11px] text-cyan-100/80">
                        AI‑driven clinical trial engine
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-200">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Live AI
                  </div>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <EnhancedTrialInput />
              </div>
              <div className="border-t border-slate-800/60 bg-slate-950/90 px-6 py-3 text-center text-[11px] text-slate-400">
                Powered by advanced AI & clinical simulation models • For research use only
              </div>
            </div>

            <div className="absolute -top-4 -right-4">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 blur-xl" />
                <div className="relative rotate-6 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 p-3 shadow-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-1 rounded-full border border-amber-500/40 bg-slate-950 px-2 py-0.5 text-[10px] font-semibold text-amber-200">
                  TOP AI
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section
        id="customers"
        className="border-y border-slate-800/60 bg-slate-950/80 py-10"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:px-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Trusted by clinical & research teams
            </p>
            <p className="text-sm text-slate-400 max-w-md">
              Used by trial designers, biostatisticians, and innovation teams at
              leading academic and industry organisations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
            {['Academic medical center', 'Global pharma team', 'Public health unit', 'Digital research lab'].map(
              name => (
                <div
                  key={name}
                  className="flex h-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 px-4"
                >
                  <span>{name}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={setSectionRef('features')} className="relative py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-700 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 px-6 py-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-semibold text-cyan-300">
                ENTERPRISE FEATURES
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Built for{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                modern clinical research
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-300 md:text-base">
              Everything you need to design, pressure‑test, and communicate
              clinical trials with AI precision and transparent assumptions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'GPT‑4 Protocol Intelligence',
                desc: 'Parse complex natural‑language protocols into structured design parameters in seconds.',
                icon: BrainCircuit,
                features: [
                  'Natural language protocol parsing',
                  'Arm, endpoint & schedule extraction',
                  'Context‑aware suggestions',
                ],
              },
              {
                title: 'Monte Carlo Simulation Engine',
                desc: 'Run thousands of simulated trials under different assumptions to de‑risk design choices.',
                icon: Cpu,
                features: [
                  'Power & sample‑size exploration',
                  'Dropout and adherence scenarios',
                  'Sensitivity analysis',
                ],
              },
              {
                title: 'Interactive Trial Dashboard',
                desc: 'Explore power, cost, and risk metrics in one interactive view made for review meetings.',
                icon: BarChart3,
                features: [
                  'Real‑time parameter tweaks',
                  'Exportable reports & CONSORT views',
                  'Collaboration‑ready summaries',
                ],
              },
            ].map((feature, idx) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-7 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-900/40"
              >
                <div className="mb-6 inline-flex rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
                  <feature.icon className="h-7 w-7 text-cyan-300" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mb-5 text-sm text-slate-300">{feature.desc}</p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {feature.features.map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How it works */}
      <section
        id="how-it-works"
        ref={setSectionRef('how-it-works')}
        className="relative scroll-mt-32"
        aria-labelledby="how-it-works-heading"
      >
        <h2 id="how-it-works-heading" className="sr-only">
          How TrialForge AI Works
        </h2>

        <DescribeProtocol />
        <AIExtractsParameters />
        <HowItWorksStep3 />
      </section>
      
      {/* Product Sections */}
      <section
        id="product"
        className="relative scroll-mt-32"
        aria-labelledby="product-heading"
      >
        <h2 id="product-heading" className="sr-only">
          Product
        </h2>

        <FeaturesSection />
        <SolutionsSection />
        <PricingSection />
        <LiveDemoSection />
      </section>

      {/* Solutions / Metrics */}
<section id="solutions" ref={setSectionRef('solutions')} className="border-t border-slate-800/60 bg-slate-950/90 py-24">
  <div className="mx-auto max-w-6xl px-4 md:px-6">
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Designed for trial designers, biostatisticians, and innovation teams
        </h2>
        <p className="text-sm text-slate-300 md:text-base">
          Use TrialForge AI to explore design options before first‑patient‑in,
          reduce amendment risk, and align stakeholders around the same
          synthetic evidence base.
        </p>
        
        {/* Demo Protocol Definition - REPLACEMENT */}
        <div className="space-y-5 pt-4 border-t border-slate-800/40 mt-6">
          <h4 className="text-sm font-semibold text-white uppercase tracking-[0.12em] text-slate-300">
            Demo Protocol Used Throughout This Page
          </h4>
          
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-3">
              <p className="text-slate-400 text-[10px] font-semibold mb-1">Phase</p>
              <p className="text-white font-semibold">Phase 2</p>
            </div>
            <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-3">
              <p className="text-slate-400 text-[10px] font-semibold mb-1">Design</p>
              <p className="text-white font-semibold">RCT, 1:1 allocation</p>
            </div>
            <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-3">
              <p className="text-slate-400 text-[10px] font-semibold mb-1">Endpoint</p>
              <p className="text-white font-semibold">HbA1c change</p>
            </div>
            <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-3">
              <p className="text-slate-400 text-[10px] font-semibold mb-1">Duration</p>
              <p className="text-white font-semibold">24 weeks active</p>
            </div>
            <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-3">
              <p className="text-slate-400 text-[10px] font-semibold mb-1">Planned N</p>
              <p className="text-white font-semibold">200 randomized</p>
            </div>
            <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-3">
              <p className="text-slate-400 text-[10px] font-semibold mb-1">Evaluable N</p>
              <p className="text-white font-semibold">~180 (10% dropout)</p>
            </div>
            <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-3">
              <p className="text-slate-400 text-[10px] font-semibold mb-1">Effect Size</p>
              <p className="text-white font-semibold">Cohen's d = 0.44</p>
            </div>
            <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-3">
              <p className="text-slate-400 text-[10px] font-semibold mb-1">Power</p>
              <p className="text-white font-semibold">87% (95% CI: 82–92%)</p>
            </div>
            <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-3">
              <p className="text-xs text-slate-400">Arms</p>
              <p className="text-sm font-semibold text-slate-100">1:1 (200)</p>
            </div>
          </div> 

          <div className="bg-amber-500/10 border border-amber-500/20 rounded p-3 mt-4">
            <p className="text-[11px] text-amber-200/80">
              <strong>Note:</strong> This illustrative Phase 2 HbA1c protocol is used consistently throughout TrialForge 
              for demonstration. All parameters should be reviewed by a qualified biostatistician 
              and approved by regulatory teams before use in any actual clinical trial.
            </p>
          </div>
        </div>
      </div> 

            <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Typical workflow
              </h3>
              <ol className="space-y-4 text-sm text-slate-200">
                {[
                  {
                    title: 'Describe your trial in plain English',
                    body: 'Paste or type a protocol synopsis, including arms, endpoints, follow‑up, and key eligibility criteria.',
                  },
                  {
                    title: 'AI extracts design parameters',
                    body: 'TrialForge parses the text into structured parameters that can drive simulations and dashboards.',
                  },
                  {
                    title: 'Run Monte Carlo simulations',
                    body: 'Explore power, sample size, dropout, and feasibility scenarios across thousands of virtual trials.',
                  },
                  {
                    title: 'Review, export, and share',
                    body: 'Use dashboards, CONSORT‑style flows, and exportable reports to support internal review and iteration.',
                  },
                ].map(step => (
                  <li key={step.title} className="flex gap-3">
                    <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full border border-cyan-400/60 text-center text-[11px] leading-5 text-cyan-200">
                      •
                    </span>
                    <div>
                      <p className="font-semibold text-white">{step.title}</p>
                      <p className="text-xs text-slate-300">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="pt-2">
                <a
                  href="/blog/when-to-simulate"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  Read article: When should you simulate a trial?
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / CTA */}
      <section id="pricing" ref={setSectionRef('pricing')} className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-blue-900/10 to-cyan-900/10" />
        <div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 px-8 py-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Trusted worldwide
              </span>
            </div>

            <blockquote className="mb-10 text-balance text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
              "TrialForge AI has become our sandbox for trial design — we can
              explore scenarios in hours instead of weeks and walk into review
              meetings with ready‑made visuals."
            </blockquote>

            <p className="mb-10 text-sm text-slate-400">
              Senior clinical researcher, academic medical center
            </p>

            <div className="space-y-6">
              <button
                onClick={() => handleNavClick('demo')}
                className="group relative inline-flex overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-xl shadow-cyan-500/30 transition-all hover:from-cyan-500 hover:to-blue-500 hover:shadow-cyan-400/40"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket className="h-5 w-5 group-hover:animate-bounce" />
                  Start your free trial
                </span>
                <div className="absolute inset-0 translate-y-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-500 group-hover:translate-y-0" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
                <span>No credit card required</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>Free 14‑day research trial</span>
                <span className="h-1 w-1 rounded-full bg-slate-600" />
                <span>For research and educational use only</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://github.com/SamAde1203/trialforge-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-gradient-to-r from-slate-900/50 to-slate-950/50 px-6 py-3 text-sm text-slate-300 transition-all hover:border-cyan-500/50 hover:text-white hover:shadow-lg"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-sm group-hover:blur-md transition-all" />
                    <Github className="relative z-10 h-5 w-5 group-hover:text-cyan-300" />
                  </div>
                  <span className="font-semibold">Star on GitHub</span>
                  <ChevronRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources / Footer */}
      <footer
        id="resources"
        ref={setSectionRef('resources')}
        className="border-t border-slate-800/60 bg-slate-950/95 py-10"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 p-2">
                  <BrainCircuit className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    TrialForge AI Pro
                  </p>
                  <p className="text-xs text-slate-400">
                    Clinical Intelligence Platform
                  </p>
                </div>
              </div>
              <p className="max-w-xs text-xs text-slate-400">
                Empowering clinical researchers with AI‑driven tools for faster,
                smarter trial design and simulation — always for research and
                educational use only.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-8 text-xs text-slate-400 md:grid-cols-3">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Product
                </p>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => handleNavClick('features')} className="hover:text-cyan-300">
                      Features
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNavClick('how-it-works')} className="hover:text-cyan-300">
                      How-it-works
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNavClick('solutions')} className="hover:text-cyan-300">
                      Solutions
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNavClick('pricing')} className="hover:text-cyan-300">
                      Pricing
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleNavClick('demo')} className="hover:text-cyan-300">
                      Live demo
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Resources
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="/docs" className="hover:text-cyan-300">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="/case-studies" className="hover:text-cyan-300">
                      Case studies
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:text-cyan-300">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-cyan-300">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Legal
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy" className="hover:text-cyan-300">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-cyan-300">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/security" className="hover:text-cyan-300">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="/status" className="hover:text-cyan-300">
                      Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-4 text-[11px] text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} TrialForge AI. All rights reserved. For
              research and educational purposes only.
            </p>
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Powered by advanced large-language models & clinical simulation engines
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}