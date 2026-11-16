import React, { useState } from 'react';
import { CheckCircle2, AlertOctagon, HelpCircle, Tag, Filter, ShieldCheck, Flame } from 'lucide-react';

export default function SkillsAnalysis({ matchingSkills = [], missingSkills = [] }) {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'matched' | 'missing'

  // Normalize items to ensure { name, category, relevance/importance, reason }
  const normalizedMatching = matchingSkills.map(s => {
    if (typeof s === 'string') return { name: s, category: 'Technical Stack', relevance: 'High' };
    return s;
  });

  const normalizedMissing = missingSkills.map(s => {
    if (typeof s === 'string') return { name: s, category: 'Technical Stack', importance: 'Critical', reason: 'Explicit requirement in target job description' };
    return s;
  });

  return (
    <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl p-6 sm:p-8 mb-8 transition-all">

      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200/60 dark:border-white/10">
        <div>
          <div className="flex items-center space-x-2.5">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Competency & Skill Gap Taxonomy
            </h3>
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
              {normalizedMatching.length} Found • {normalizedMissing.length} Gaps
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Comparative audit between verified candidate qualifications and employer demand.
          </p>
        </div>

        {/* View Filter Pill */}
        <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${activeFilter === 'all'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
          >
            All ({normalizedMatching.length + normalizedMissing.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('matched')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${activeFilter === 'matched'
                ? 'bg-emerald-500 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
          >
            Matched ({normalizedMatching.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('missing')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${activeFilter === 'missing'
                ? 'bg-rose-500 text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
          >
            Gaps ({normalizedMissing.length})
          </button>
        </div>
      </div>

      {/* 2-Column Comparative Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Column 1: Matching Skills (Aurora Mint / Emerald) */}
        {(activeFilter === 'all' || activeFilter === 'matched') && (
          <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-800/40">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Verified Matched Competencies ({normalizedMatching.length})</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/50 px-2.5 py-0.5 rounded-full">
                ATS Pass
              </span>
            </div>

            {normalizedMatching.length > 0 ? (
              <div className="flex flex-wrap gap-2.5">
                {normalizedMatching.map((skill, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900/90 text-emerald-950 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/60 shadow-xs hover:border-emerald-400 transition-all hover:-translate-y-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{skill.name}</span>
                    {skill.category && (
                      <span className="text-[10px] font-normal text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-1.5 py-0.5 rounded">
                        {skill.category}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">No direct matching skills detected from job description keywords.</p>
            )}
          </div>
        )}

        {/* Column 2: Missing Skills (Sunset Coral / Rose) */}
        {(activeFilter === 'all' || activeFilter === 'missing') && (
          <div className="p-6 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/70 dark:border-rose-800/40">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-rose-800 dark:text-rose-300 font-bold text-sm">
                <AlertOctagon className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>Missing Employer Requirements ({normalizedMissing.length})</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 bg-rose-100/80 dark:bg-rose-900/50 px-2.5 py-0.5 rounded-full">
                High Priority
              </span>
            </div>

            {normalizedMissing.length > 0 ? (
              <div className="space-y-3">
                {normalizedMissing.map((skill, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-rose-200/80 dark:border-rose-900/50 text-xs shadow-xs hover:border-rose-400 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span className="font-bold text-slate-900 dark:text-white">{skill.name}</span>
                        {skill.category && (
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-1.5 py-0.5 rounded">
                            {skill.category}
                          </span>
                        )}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${skill.importance === 'Critical'
                          ? 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300'
                          : 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300'
                        }`}>
                        {skill.importance || 'Critical Gap'}
                      </span>
                    </div>
                    {skill.reason && (
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-1 pl-3.5 border-l-2 border-rose-300 dark:border-rose-700 leading-normal">
                        {skill.reason}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                Outstanding! All essential requirements matched the target job description.
              </p>
            )}
          </div>
        )}

      </div>

    </div>
  );
}
