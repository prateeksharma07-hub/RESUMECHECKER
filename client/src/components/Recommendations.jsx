import React from 'react';
import { Lightbulb, ArrowRight, Sparkles, Check, FileEdit } from 'lucide-react';

export default function Recommendations({ suggestions = [] }) {
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

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
      <div className="mb-6">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-violet-50 text-violet-600">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Actionable Improvement Suggestions
            </h3>
            <p className="text-xs text-slate-500">
              High-impact recommendations and bullet rewrites using Google's XYZ formula
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {normalized.map((item, index) => (
          <div
            key={index}
            className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-violet-300 transition-all"
          >
            {/* Header: Category */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800">
                {item.category || 'Optimization'}
              </span>
            </div>

            <h4 className="text-sm font-bold text-slate-900 mb-1">
              {item.issue}
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
              <span className="font-semibold text-violet-900">Actionable Fix: </span>
              {item.recommendation}
            </p>

            {/* Before & After Example Box */}
            {item.example && (
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-800 space-y-1.5 shadow-xs">
                <div className="text-[11px] font-sans font-bold text-slate-400 uppercase tracking-wider">
                  Example Bullet Rewrite:
                </div>
                <div className="text-slate-700 whitespace-pre-wrap leading-relaxed">
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
