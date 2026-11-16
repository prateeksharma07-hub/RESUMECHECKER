import React from 'react';
import { Target, Award, ShieldAlert, Sparkles, Milestone, Download, FileCheck, Layers } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Target,
      color: 'from-violet-600 to-indigo-600',
      badge: 'Precision Analytics',
      title: '5-Vector Calibration Engine',
      description: 'Scores resumes across five explicit criteria: core technical skills, experience depth, practical project architecture, academic credentials, and ATS readability.'
    },
    {
      icon: Layers,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Taxonomy Audit',
      title: 'Verified Competency Mapping',
      description: 'Categorizes matched technologies in mint tags and explicitly flags required employer competencies you may have omitted or lack.'
    },
    {
      icon: Award,
      color: 'from-amber-500 to-orange-600',
      badge: 'Executive Standard',
      title: 'Google XYZ Bullet Rewrites',
      description: 'Generates before-and-after rewrite transformations following the formula: "Accomplished [X], as measured by [Y], by doing [Z]" with 1-click clipboard copy.'
    },
    {
      icon: ShieldAlert,
      color: 'from-pink-500 to-rose-600',
      badge: 'Factual Integrity',
      title: 'Omission vs. Gap Distinction',
      description: 'Never confuses omitted resume dates or unstated metrics with actual skill deficiency. Distinguishes unstated details from lacking competencies.'
    },
    {
      icon: Milestone,
      color: 'from-purple-600 to-pink-600',
      badge: 'Actionable Sprints',
      title: 'Phased Competency Roadmap',
      description: 'Creates customized learning sprints with targeted milestones, hands-on capstone project briefs, and official documentation references.'
    },
    {
      icon: Download,
      color: 'from-blue-600 to-cyan-600',
      badge: 'Dossier Export',
      title: 'Print-to-PDF & Markdown Reports',
      description: 'Instantly download an executive briefing dossier formatted for print-to-PDF or clean Markdown files ready for your GitHub portfolio.'
    }
  ];

  return (
    <section id="features-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10 no-print">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-4">
          <span>Engineered Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Everything You Need to <br className="hidden sm:inline" />
          <span className="text-gradient-aurora">Stand Out to Hiring Teams</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Comprehensive, actionable feedback built specifically for engineers, tech leads, and technical job seekers.
        </p>
      </div>

      {/* 6-Card Features Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-3xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feature.color} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center text-xs font-semibold text-violet-600 dark:text-violet-400">
                <span>Verified Architecture &bull; Gemini 3.5</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
