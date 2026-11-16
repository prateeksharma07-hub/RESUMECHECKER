import React from 'react';
import { Compass, Briefcase, ChevronRight, TrendingUp, Sparkles } from 'lucide-react';

export default function RoleMatches({ roles = [] }) {
  // Normalize roles array
  const normalized = roles.map(r => {
    if (typeof r === 'string') return { role: r, match_percentage: 85, reasoning: 'Strong overlap with verified developer skillset' };
    return {
      role: r.role || 'Software Engineer',
      match_percentage: r.match_percentage ?? r.matchPercentage ?? 85,
      reasoning: r.reasoning || 'Strong overlap with current technical toolset'
    };
  });

  return (
    <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl p-6 sm:p-8 mb-8 transition-all">
      <div className="mb-6 pb-6 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-violet-100 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 shadow-xs">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Recommended Career Trajectories
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              High-affinity positions matching the candidate's verified architecture and tech stack.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {normalized.map((item, index) => {
          const match = item.match_percentage;
          return (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 hover:border-violet-400 dark:hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-violet-100/80 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950/50 border border-violet-200/80 dark:border-violet-800/60 text-violet-700 dark:text-violet-300 text-xs font-bold font-mono">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{match}% Fit</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {item.role}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.reasoning}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-violet-600 dark:text-violet-400">
                <span>View Alignment Criteria</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
