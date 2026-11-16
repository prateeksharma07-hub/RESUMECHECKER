import React from 'react';
import { CheckCircle2, AlertOctagon, HelpCircle, Tag } from 'lucide-react';

export default function SkillsAnalysis({ matchingSkills = [], missingSkills = [] }) {
  // Normalize items to ensure { name, category, relevance/importance, reason }
  const normalizedMatching = matchingSkills.map(s => {
    if (typeof s === 'string') return { name: s, category: 'Technical Skill', relevance: 'High' };
    return s;
  });

  const normalizedMissing = missingSkills.map(s => {
    if (typeof s === 'string') return { name: s, category: 'Technical Skill', importance: 'Critical', reason: 'Required in job description' };
    return s;
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center space-x-2">
          <span>Skills Comparison Matrix</span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {normalizedMatching.length} Matched • {normalizedMissing.length} Missing
          </span>
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Direct keyword & capability audit between candidate resume and target role expectations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1: Matching Skills */}
        <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200/70">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Matching Skills Found ({normalizedMatching.length})</span>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
              Verified
            </span>
          </div>

          {normalizedMatching.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {normalizedMatching.map((skill, index) => (
                <div
                  key={index}
                  className="group relative inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white text-emerald-900 border border-emerald-200 shadow-xs hover:border-emerald-400 transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="font-semibold">{skill.name}</span>
                  {skill.category && (
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {skill.category}
                    </span>
                  )}
                  {skill.relevance === 'High' && (
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1 rounded uppercase tracking-wider">
                      Core
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 italic">No matching keywords detected from the job description.</p>
          )}
        </div>

        {/* Column 2: Missing Skills */}
        <div className="p-5 rounded-2xl bg-rose-50/40 border border-rose-200/70">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-rose-800 font-bold text-sm">
              <AlertOctagon className="w-4 h-4 text-rose-600" />
              <span>Missing Skills Required ({normalizedMissing.length})</span>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded-full">
              Gap Identified
            </span>
          </div>

          {normalizedMissing.length > 0 ? (
            <div className="space-y-2.5">
              {normalizedMissing.map((skill, index) => (
                <div
                  key={index}
                  className="p-3 rounded-xl bg-white border border-rose-200/80 text-xs shadow-xs hover:border-rose-300 transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="font-bold text-slate-900">{skill.name}</span>
                      {skill.category && (
                        <span className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                          {skill.category}
                        </span>
                      )}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      skill.importance === 'Critical'
                        ? 'bg-rose-100 text-rose-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {skill.importance || 'Recommended'}
                    </span>
                  </div>
                  {skill.reason && (
                    <p className="text-[11px] text-slate-600 mt-1 pl-3.5 border-l-2 border-rose-200">
                      {skill.reason}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-emerald-600 font-medium">All major required technical skills matched the job description!</p>
          )}
        </div>
      </div>
    </div>
  );
}
