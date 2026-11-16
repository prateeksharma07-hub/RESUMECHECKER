import React from 'react';
import { ShieldCheck, Award, Target, Brain, Lock, CheckCircle2, Cpu, FileCheck } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: Target,
      color: 'from-violet-500 to-indigo-500',
      tag: 'Methodology',
      title: "Google's XYZ Resume Standard",
      description: "Top tech companies evaluate resumes based on quantifiable impact: 'Accomplished [X], as measured by [Y], by doing [Z]'. CareerLens AI scans bullet points for this exact formula."
    },
    {
      icon: Award,
      color: 'from-pink-500 to-rose-500',
      tag: 'ATS Optimization',
      title: "Semantic Gap Detection",
      description: "Modern Applicant Tracking Systems don't just match exact keywords; they evaluate taxonomy, contextual competency, and stack adjacency to rank candidates."
    },
    {
      icon: Lock,
      color: 'from-amber-500 to-orange-500',
      tag: 'Zero Retention',
      title: "Enterprise Privacy Shield",
      description: "Uploaded resumes and personal information are processed purely in ephemeral memory. No resumes or candidate details are persisted or used to train public AI models."
    },
    {
      icon: Brain,
      color: 'from-emerald-500 to-teal-500',
      tag: 'Neural Synthesis',
      title: "Multi-Model Intelligence",
      description: "Leveraging Google Gemini 3.5 Flash structured reasoning to evaluate depth of experience, technical project architecture, and role readiness with calibrated accuracy."
    }
  ];

  const xyzExamples = [
    {
      bad: "Built an internal dashboard for the team to view sales data using React.",
      good: "Engineered real-time analytics portal in React & TypeScript, slashing report latency by 42% across 180+ monthly enterprise stakeholders.",
      dimension: "Project Impact"
    },
    {
      bad: "Responsible for improving database queries and backend performance.",
      good: "Optimized PostgreSQL indexes and redis caching tier, decreasing P99 API latency from 480ms to 65ms during 10k RPS traffic surges.",
      dimension: "Backend Architecture"
    }
  ];

  return (
    <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10 mt-16 no-print">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Platform Methodology & Standards</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Engineered for Real-World <span className="text-gradient-aurora">Career Intelligence</span>
        </h2>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          CareerLens AI bridges the gap between opaque corporate ATS screening filters and authentic developer capabilities with verified, unvarnished feedback.
        </p>
      </div>

      {/* 4 Value Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/10"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                {pillar.tag}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Google XYZ Formula Deep Dive */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 mb-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/60 dark:border-white/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Executive Resume Writing Standard
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              The Google XYZ Resume Formula
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              Recruiters spend an average of 6 seconds scanning a resume. The XYZ formula instantly conveys scope, proof of capability, and engineering rigor.
            </p>
          </div>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-violet-50 dark:bg-violet-900/40 border border-violet-200 dark:border-violet-700/50 text-xs font-mono text-violet-700 dark:text-violet-300">
            <span>[Action] + [Quantified Metric] + [Tech / Method]</span>
          </div>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {xyzExamples.map((ex, i) => (
            <div key={i} className="rounded-2xl p-5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {ex.dimension}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300">
                  Before vs. After
                </span>
              </div>
              
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-rose-500 uppercase tracking-wider flex items-center gap-1">
                  &times; Weak / Task-Only:
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-mono bg-white dark:bg-slate-950/60 p-2.5 rounded-lg border border-slate-200/70 dark:border-white/5">
                  "{ex.bad}"
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-1">
                  ✓ High-Impact XYZ:
                </span>
                <p className="text-xs text-emerald-950 dark:text-emerald-200 font-mono bg-emerald-50/70 dark:bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-200/80 dark:border-emerald-800/40">
                  "{ex.good}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Architecture & Zero False Guarantees */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800 dark:text-slate-200">
          <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 font-bold text-sm mb-2">
            <FileCheck className="w-4 h-4" />
            <span>Advisory Scoring Disclaimer</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            CareerLens AI scores represent approximate advisory alignment against the provided job description taxonomy. It does not replace human hiring panels or guarantee interview invitations.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-slate-800 dark:text-slate-200">
          <div className="flex items-center space-x-2 text-violet-600 dark:text-violet-400 font-bold text-sm mb-2">
            <Cpu className="w-4 h-4" />
            <span>Production Architecture</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Built with React 19, Vite development server, Tailwind CSS v4, Express Node.js backend, PDF.js native stream parsing, and Google Gemini 3.5 Flash LLM.
          </p>
        </div>
      </div>

    </section>
  );
}
