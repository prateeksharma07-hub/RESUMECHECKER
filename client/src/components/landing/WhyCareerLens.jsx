import React from 'react';
import { XCircle, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function WhyCareerLens({ onStartAudit }) {
  const comparisons = [
    {
      category: 'Keyword Matching',
      legacy: 'Blind string matching; rejects qualified candidates who use synonyms or alternate phrasing.',
      careerLens: 'Semantic taxonomy benchmarking via Google Gemini; identifies conceptual overlap and stack adjacency.'
    },
    {
      category: 'Feedback Quality',
      legacy: 'Blackbox automated rejection with zero diagnostic feedback or constructive critique.',
      careerLens: 'Unvarnished 5-dimension scoring, categorized skill gap lists, and verified candidate strengths.'
    },
    {
      category: 'Bullet Point Optimization',
      legacy: 'Offers no guidance; candidates have to guess why their achievements went unnoticed.',
      careerLens: "Transforms weak task bullets into metric-driven accomplishments using Google's XYZ formula."
    },
    {
      category: 'Data Privacy',
      legacy: 'Resumes are often permanently stored in corporate databases and shared across vendor pools.',
      careerLens: 'Zero data retention. Resumes are processed in ephemeral memory and discarded after synthesis.'
    },
    {
      category: 'Career Development',
      legacy: 'Stops at evaluation; offers zero forward-looking career trajectory advice.',
      careerLens: 'Generates customized sprint timelines with capstone projects and official documentation links.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10 no-print">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>The Diagnostic Advantage</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Why CareerLens AI?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Traditional ATS filters are designed to screen candidates out. CareerLens AI is designed to help you break through.
        </p>
      </div>

      {/* Comparison Matrix Table / Cards */}
      <div className="glass-card rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-2xl max-w-5xl mx-auto">
        
        {/* Table Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-100/70 dark:bg-white/[0.03] border-b border-slate-200/80 dark:border-white/10 p-5 text-xs font-bold uppercase tracking-wider text-slate-500">
          <div className="md:col-span-3">Dimension</div>
          <div className="md:col-span-4 text-rose-600 dark:text-rose-400 flex items-center space-x-1.5 mt-2 md:mt-0">
            <XCircle className="w-4 h-4" />
            <span>Legacy ATS Filters</span>
          </div>
          <div className="md:col-span-5 text-emerald-600 dark:text-emerald-400 flex items-center space-x-1.5 mt-2 md:mt-0">
            <CheckCircle2 className="w-4 h-4" />
            <span>CareerLens AI Intelligence</span>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-200/60 dark:divide-white/5">
          {comparisons.map((row, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-4 text-xs sm:text-sm items-center hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
              <div className="md:col-span-3 font-bold text-slate-900 dark:text-white">
                {row.category}
              </div>
              <div className="md:col-span-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                {row.legacy}
              </div>
              <div className="md:col-span-5 text-slate-900 dark:text-slate-200 font-medium leading-relaxed bg-emerald-50/40 dark:bg-emerald-950/20 p-3.5 rounded-2xl border border-emerald-200/60 dark:border-emerald-800/40">
                {row.careerLens}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
