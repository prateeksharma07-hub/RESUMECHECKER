import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, Loader2, Brain, Target, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';

const STEPS = [
  { id: 1, label: 'Extracting Structural Hierarchy & Keywords', icon: Brain, detail: 'Deconstructing candidate technical profile, metrics, and chronology...' },
  { id: 2, label: 'Running 5-Vector Calibration Engine', icon: ShieldCheck, detail: 'Benchmarking skills, experience depth, projects, academic baseline, and clarity...' },
  { id: 3, label: 'Auditing Skill Gap Taxonomy', icon: Target, detail: 'Categorizing matched stack vs. critical missing competencies...' },
  { id: 4, label: 'Synthesizing Google XYZ Rewrites & Milestones', icon: TrendingUp, detail: 'Formulating metric-driven bullet optimizations and sprint timeline...' },
];

export default function LoadingSkeleton() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
    }, 1100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-2xl mx-auto my-16 px-4 animate-fade-in no-print">
      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-white/10 shadow-2xl text-center relative overflow-hidden">
        
        {/* Holographic Iridescent Sweep Line */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Animated Radar Pulse Core */}
        <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-violet-500/40 animate-ping opacity-30" />
          <div className="absolute inset-2 rounded-full border border-pink-500/40 animate-pulse opacity-40" />
          
          {/* Radar Sweep Needle */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="w-1/2 h-1/2 bg-gradient-to-br from-violet-500/30 to-transparent origin-bottom-right animate-radar" />
          </div>

          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 via-pink-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/30">
            <Sparkles className="w-8 h-8 text-amber-200 animate-pulse" />
          </div>
        </div>

        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-3">
          <Cpu className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Gemini 3.5 Structured Synthesis</span>
        </div>

        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Calibrating Profile Intelligence
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
          Evaluating candidate qualifications against target taxonomy and computing calibrated dimension scores.
        </p>

        {/* Dynamic Stepper List */}
        <div className="mt-8 space-y-3 text-left max-w-lg mx-auto">
          {STEPS.map((step, idx) => {
            const isCompleted = idx < currentStep;
            const isCurrent = idx === currentStep;
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className={`p-3.5 rounded-2xl border transition-all duration-300 flex items-start space-x-3.5 ${
                  isCurrent
                    ? 'bg-violet-50/80 dark:bg-violet-950/40 border-violet-300 dark:border-violet-700 shadow-sm'
                    : isCompleted
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-900/40 opacity-90'
                    : 'bg-white/40 dark:bg-white/[0.02] border-transparent opacity-40'
                }`}
              >
                <div className="mt-0.5">
                  {isCompleted ? (
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  ) : isCurrent ? (
                    <div className="w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-xs">
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400 flex items-center justify-center text-xs font-bold font-mono">
                      {step.id}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-bold ${isCurrent ? 'text-violet-900 dark:text-violet-200' : isCompleted ? 'text-slate-800 dark:text-slate-200' : 'text-slate-500 dark:text-slate-500'}`}>
                      {step.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
