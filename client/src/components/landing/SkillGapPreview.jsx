import React from 'react';
import { Target, CheckCircle2, AlertOctagon, HelpCircle, ArrowRight } from 'lucide-react';

export default function SkillGapPreview({ onStartAudit }) {
  const matched = [
    { name: 'React 19 & Next.js', category: 'Frontend', relevance: 'Core' },
    { name: 'TypeScript 5.x', category: 'Language', relevance: 'Core' },
    { name: 'Node.js & Express', category: 'Backend', relevance: 'Core' },
    { name: 'PostgreSQL & ORM', category: 'Database', relevance: 'High' },
    { name: 'Docker Containerization', category: 'DevOps', relevance: 'High' },
    { name: 'REST & GraphQL APIs', category: 'Architecture', relevance: 'High' }
  ];

  const gaps = [
    {
      name: 'Apache Kafka / Event Streaming',
      category: 'Data Architecture',
      importance: 'Critical',
      reason: 'Job description explicitly requires distributed event processing for real-time transactions.'
    },
    {
      name: 'Kubernetes (K8s) Orchestration',
      category: 'Cloud / DevOps',
      importance: 'Recommended',
      reason: 'Target infrastructure relies on microservice container management in production.'
    },
    {
      name: 'Redis Distributed Caching',
      category: 'Database & In-Memory',
      importance: 'Recommended',
      reason: 'Required for session persistence and sub-10ms API cache retrieval.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10 no-print">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-4">
          <Target className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Taxonomy Alignment</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Calibrated Skill Gap Taxonomy
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Never guess which keywords or competencies caused an ATS rejection. Get explicit, categorized breakdowns.
        </p>
      </div>

      {/* 2-Column Comparative Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Matched Competencies */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-200/80 dark:border-emerald-800/40 bg-emerald-50/30 dark:bg-emerald-950/10">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-200/60 dark:border-emerald-800/30">
            <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-300 font-bold text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Verified Matched Stack (6 Found)</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-2.5 py-0.5 rounded-full">
              ATS Pass
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {matched.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-emerald-200/80 dark:border-emerald-800/50 shadow-xs flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{item.name}</span>
                  </div>
                  <div className="text-[10px] text-emerald-700 dark:text-emerald-400 mt-0.5">
                    {item.category}
                  </div>
                </div>
                <span className="text-[9px] font-bold font-mono uppercase bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded">
                  {item.relevance}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Missing Requirements */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-rose-200/80 dark:border-rose-800/40 bg-rose-50/30 dark:bg-rose-950/10">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-200/60 dark:border-rose-800/30">
            <div className="flex items-center space-x-2 text-rose-800 dark:text-rose-300 font-bold text-base">
              <AlertOctagon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <span>Missing Employer Requirements (3 Gaps)</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/60 px-2.5 py-0.5 rounded-full">
              High Priority
            </span>
          </div>

          <div className="space-y-3">
            {gaps.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-rose-200/80 dark:border-rose-800/50 shadow-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>{item.name}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    item.importance === 'Critical'
                      ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                      : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                  }`}>
                    {item.importance}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 pl-3.5 border-l-2 border-rose-300 dark:border-rose-700 leading-normal">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
