import React, { useState } from 'react';
import { Sparkles, FileEdit, ArrowRight, CheckCheck, Copy, Code2, AlertCircle } from 'lucide-react';

export default function IntelligencePreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const samples = [
    {
      role: 'Frontend Engineering',
      before: 'Worked on customer dashboard using React and Redux to display charts.',
      issue: 'Passive verb, unquantified user impact, omitted engineering complexity.',
      after: 'Architected customer analytics portal in React 19 & TypeScript with optimistic state caching, decreasing tier-1 support ticket volume by 34% across 8,500 active client accounts.',
      dimension: 'Impact & Optimization'
    },
    {
      role: 'Backend & Infrastructure',
      before: 'Maintained SQL database and wrote REST API endpoints in Node.',
      issue: 'Lacks scale, missing concurrency metrics, unstated architectural patterns.',
      after: 'Engineered high-throughput REST microservices in Node.js & PostgreSQL with Redis caching, slashing P99 API latency from 420ms to 65ms under 15,000 requests/minute peak load.',
      dimension: 'System Architecture'
    },
    {
      role: 'DevOps & Cloud',
      before: 'Set up Docker containers and deployed code using GitHub Actions.',
      issue: 'Task-only statement, missing deployment frequency, zero MTTR metrics.',
      after: 'Orchestrated automated CI/CD pipeline with Docker & GitHub Actions to AWS ECS, reducing release cycle duration from 45 minutes to 7 minutes with zero-downtime blue/green rollouts.',
      dimension: 'Deployment Velocity'
    }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const current = samples[activeTab];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10 no-print">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-4">
          <FileEdit className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Google XYZ Optimization Engine</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Resume Intelligence in Action
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          See how CareerLens AI identifies passive descriptions and transforms them into calibrated, metric-driven accomplishments.
        </p>
      </div>

      {/* Role Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {samples.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === index
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25'
                : 'glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
            }`}
          >
            {item.role}
          </button>
        ))}
      </div>

      {/* Before / After Transformation Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/90 dark:border-white/10 shadow-xl max-w-4xl mx-auto">
        
        <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-slate-200/60 dark:border-white/10">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Focus Vector:</span>
            <span className="text-xs font-bold text-violet-700 dark:text-violet-300 font-mono bg-violet-50 dark:bg-violet-950/60 px-2.5 py-0.5 rounded-full border border-violet-200 dark:border-violet-800/60">
              {current.dimension}
            </span>
          </div>

          <button
            type="button"
            onClick={() => handleCopy(current.after)}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/5 hover:bg-violet-50 dark:hover:bg-violet-950/40 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <CheckCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Transformation</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-8 space-y-6">
          
          {/* Before: Weak Statement */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-rose-500 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>Before (Task-Oriented Bullet):</span>
              </span>
              <span className="text-[11px] text-slate-400">Lacks metrics and business outcome</span>
            </div>
            
            <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-300">
              "{current.before}"
            </div>

            <p className="text-[11px] text-rose-600 dark:text-rose-400 pl-2 border-l-2 border-rose-400">
              <span className="font-semibold">Diagnostic critique:</span> {current.issue}
            </p>
          </div>

          {/* After: Google XYZ Optimized Bullet */}
          <div className="space-y-2 pt-4 border-t border-slate-200/60 dark:border-white/10">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>After (Google XYZ Accomplishment):</span>
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                Action + Metric + Method
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-xs sm:text-sm font-mono text-emerald-950 dark:text-emerald-200 leading-relaxed shadow-xs">
              "{current.after}"
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
