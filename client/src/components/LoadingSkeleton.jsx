import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, Loader2, Brain, Target, ShieldCheck, TrendingUp } from 'lucide-react';

const STEPS = [
  { id: 1, label: 'Parsing & Reading Resume Content', icon: Brain, detail: 'Extracting candidate technical profile, project architecture, and career history...' },
  { id: 2, label: 'Evaluating ATS Keywords & Relevance', icon: ShieldCheck, detail: 'Calculating keyword alignment, format readability, and structure score...' },
  { id: 3, label: 'Auditing Skill Gaps & Competency Matrix', icon: Target, detail: 'Matching verified qualifications against target job requirements...' },
  { id: 4, label: 'Synthesizing Career Roadmap & Actionable Rewrites', icon: TrendingUp, detail: 'Formulating step-by-step learning milestones and Google XYZ bullet rewrites...' },
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
    <div className="max-w-2xl mx-auto my-12 px-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center">
        {/* Animated Radar Pulse */}
        <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 to-indigo-500 opacity-20 animate-ping" />
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-200">
            <Sparkles className="w-8 h-8 animate-pulse text-violet-200" />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          CareerLens AI is Auditing Profile
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-md mx-auto">
          Please wait while Google Gemini evaluates the resume, calculates dimension scores, and formulates the roadmap.
        </p>

        {/* Steps progress list */}
        <div className="mt-8 space-y-3.5 text-left max-w-lg mx-auto">
          {STEPS.map((step, idx) => {
            const isCompleted = idx < currentStep;
            const isCurrent = idx === currentStep;
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className={`p-3.5 rounded-2xl border transition-all duration-300 flex items-start space-x-3.5 ${
                  isCurrent
                    ? 'bg-violet-50/80 border-violet-200 shadow-xs'
                    : isCompleted
                    ? 'bg-slate-50 border-slate-200/70 opacity-90'
                    : 'bg-white border-transparent opacity-40'
                }`}
              >
                <div className="mt-0.5">
                  {isCompleted ? (
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  ) : isCurrent ? (
                    <div className="w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center text-xs font-semibold">
                      {step.id}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-bold ${isCurrent ? 'text-violet-900' : 'text-slate-800'}`}>
                      {step.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
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
