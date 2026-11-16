import React from 'react';
import { CheckCircle, AlertTriangle, ThumbsUp, ShieldAlert, Info, Sparkles, HelpCircle } from 'lucide-react';

export default function StrengthsWeaknesses({ strengths = [], weaknesses = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
      
      {/* Verified Strengths Card */}
      <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl p-6 sm:p-7 flex flex-col transition-all">
        <div className="flex items-center space-x-3 mb-5 pb-4 border-b border-slate-200/60 dark:border-white/10">
          <div className="p-2.5 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shadow-xs">
            <ThumbsUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Verified Strengths</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Concrete qualifications and substantiated impact</p>
          </div>
        </div>

        <ul className="space-y-3.5 flex-1">
          {strengths.map((strength, index) => (
            <li key={index} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{typeof strength === 'string' ? strength : JSON.stringify(strength)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Identified Weaknesses & Gaps Card */}
      <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl p-6 sm:p-7 flex flex-col transition-all">
        <div className="flex items-center space-x-3 mb-5 pb-4 border-b border-slate-200/60 dark:border-white/10">
          <div className="p-2.5 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shadow-xs">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Areas Needing Refinement</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Differentiating missing skills from omitted resume details</p>
          </div>
        </div>

        <ul className="space-y-3.5 flex-1">
          {weaknesses.map((weakness, index) => {
            const text = typeof weakness === 'string' ? weakness : JSON.stringify(weakness);
            const isMissingInfo = text.toLowerCase().includes('missing information') || text.toLowerCase().includes('unstated');

            return (
              <li key={index} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {isMissingInfo ? (
                  <Info className="w-4 h-4 text-sky-500 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                )}
                <span>{text}</span>
              </li>
            );
          })}
        </ul>

        {/* Advisory Distinction Note */}
        <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-white/10 flex items-center space-x-2 text-[11px] text-slate-500 dark:text-slate-400">
          <HelpCircle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span>Note: Missing information refers to omitted details, distinct from lacking technical capability.</span>
        </div>
      </div>

    </div>
  );
}
