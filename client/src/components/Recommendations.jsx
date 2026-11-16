import React, { useState } from 'react';
import { Lightbulb, ArrowRight, Sparkles, Check, Copy, CheckCheck, FileEdit } from 'lucide-react';

export default function Recommendations({ suggestions = [] }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Normalize items
  const normalized = suggestions.map(item => {
    if (typeof item === 'string') {
      return {
        category: 'Resume Enhancement',
        issue: 'Optimization opportunity',
        recommendation: item,
        example: ''
      };
    }
    return item;
  });

  const handleCopy = (text, index) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl p-6 sm:p-8 mb-8 transition-all">
      <div className="mb-6 pb-6 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shadow-xs">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Actionable Bullet Rewrites & Optimizations
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Refined using Google's XYZ formula: Accomplished [X], as measured by [Y], by doing [Z].
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {normalized.map((item, index) => (
          <div
            key={index}
            className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 hover:border-violet-300 dark:hover:border-violet-500/40 transition-all group"
          >
            {/* Header: Category */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60">
                {item.category || 'Strategic Optimization'}
              </span>
            </div>

            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5">
              {item.issue}
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              <span className="font-bold text-violet-700 dark:text-violet-400">Prescription: </span>
              {item.recommendation}
            </p>

            {/* Monospace Google XYZ Example Rewrite Box */}
            {item.example && (
              <div className="p-4 rounded-xl bg-white dark:bg-black/40 border border-slate-200/80 dark:border-white/10 text-xs font-mono space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FileEdit className="w-3.5 h-3.5 text-violet-500" />
                    <span>Google XYZ Transformed Bullet:</span>
                  </span>
                  
                  <button
                    type="button"
                    onClick={() => handleCopy(item.example, index)}
                    className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-sans font-semibold text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 bg-slate-100 dark:bg-white/5 hover:bg-violet-50 dark:hover:bg-violet-950/40 transition-all cursor-pointer"
                    title="Copy bullet rewrite to clipboard"
                  >
                    {copiedIndex === index ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Bullet</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-emerald-950 dark:text-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/20 p-3 rounded-lg border border-emerald-200/60 dark:border-emerald-800/40 whitespace-pre-wrap leading-relaxed">
                  {item.example}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
