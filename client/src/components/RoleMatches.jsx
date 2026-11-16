import React from 'react';
import { Compass, Briefcase, ChevronRight, TrendingUp } from 'lucide-react';

export default function RoleMatches({ roles = [] }) {
  // Normalize roles array
  const normalized = roles.map(r => {
    if (typeof r === 'string') return { role: r, match_percentage: 80, reasoning: 'Aligned with current skillset' };
    return {
      role: r.role || 'Software Engineer',
      match_percentage: r.match_percentage ?? r.matchPercentage ?? 80,
      reasoning: r.reasoning || 'Strong overlap with current technical toolset'
    };
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
      <div className="mb-6">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Recommended Job Roles
            </h3>
            <p className="text-xs text-slate-500">
              Target and adjacent positions that align closely with your verified skills
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {normalized.map((item, index) => {
          const match = item.match_percentage;
          return (
            <div
              key={index}
              className="p-5 rounded-2xl bg-gradient-to-b from-slate-50/80 to-white border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-purple-100/70 text-purple-700">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-bold">
                    <TrendingUp className="w-3 h-3" />
                    <span>{match}% Match</span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {item.role}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.reasoning}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-purple-600">
                <span>Role Alignment Criteria</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
