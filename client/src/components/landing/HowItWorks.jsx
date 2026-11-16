import React from 'react';
import { Upload, Cpu, Award, ArrowRight } from 'lucide-react';

export default function HowItWorks({ onStartAudit }) {
  const steps = [
    {
      number: '01',
      badge: 'Input Phase',
      icon: Upload,
      title: 'Supply Resume & Target Role',
      description: 'Upload your resume in native PDF or TXT format, or paste directly into the studio editor. Add your target job description or benchmark against built-in role profiles.',
      color: 'from-violet-600 to-indigo-600'
    },
    {
      number: '02',
      badge: 'Audit Engine',
      icon: Cpu,
      title: '5-Vector Neural Calibration',
      description: 'Gemini 3.5 Flash evaluates your qualifications across Technical Skills, Experience Seniority, Project Rigor, Academic Baseline, and ATS Structural Formatting.',
      color: 'from-pink-600 to-rose-600'
    },
    {
      number: '03',
      badge: 'Execution',
      icon: Award,
      title: 'Actionable Rewrites & Roadmap',
      description: 'Receive an unvarnished advisory match score out of 100, categorized skill gaps, Google XYZ metric-driven bullet optimizations, and a personalized learning timeline.',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <section id="how-it-works-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto no-print">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-4">
          <span>Three-Stage Calibration</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          How CareerLens AI Works
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          From unformatted resume upload to executive-ready career strategy in under 4 seconds.
        </p>
      </div>

      {/* 3 Step Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-500/10 group"
            >
              {/* Step Number Overline */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-slate-200 dark:text-white/10 font-mono group-hover:text-violet-500/40 transition-colors">
                  {step.number}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                  {step.badge}
                </span>
              </div>

              {/* Icon & Title */}
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center mb-5 shadow-lg shadow-black/10 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Phase {idx + 1} of 3</span>
                <span className="text-emerald-500 font-mono">Automated</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
