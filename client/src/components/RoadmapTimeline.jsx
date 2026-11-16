import React from 'react';
import { Calendar, BookOpen, Code2, CheckCircle, ExternalLink, Milestone, Sparkles, Clock, Target, Rocket } from 'lucide-react';

export default function RoadmapTimeline({ roadmap = [] }) {
  // Normalize items
  const normalized = roadmap.map((item, idx) => {
    return {
      skill: item.skill || (Array.isArray(item.skills) ? item.skills.join(', ') : 'Target Competency'),
      learning_goal: item.learning_goal || item.title || 'Master competency',
      suggested_duration: item.suggested_duration || item.phase || `Sprint ${idx + 1}`,
      recommended_projects: item.recommended_projects || item.recommendedProjects || [],
      resources: item.resources || []
    };
  });

  return (
    <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl p-6 sm:p-8 mb-8 transition-all">
      <div className="mb-6 pb-6 border-b border-slate-200/60 dark:border-white/10">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20">
            <Milestone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Personalized Competency Roadmap
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Phased sprints to close identified skill gaps with capstone projects and curated references.
            </p>
          </div>
        </div>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-violet-200 dark:border-violet-900/60 space-y-8 my-6 ml-2 sm:ml-4">
        {normalized.map((phase, idx) => (
          <div key={idx} className="relative group">
            
            {/* Connected Number Node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-pink-500 text-white flex items-center justify-center text-xs font-black ring-4 ring-white dark:ring-slate-950 shadow-md">
              {idx + 1}
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/5 hover:border-violet-300 dark:hover:border-violet-500/40 transition-all duration-300">
              
              {/* Duration Pill */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-violet-700 dark:text-violet-300 bg-violet-100/80 dark:bg-violet-950/80 px-3 py-1 rounded-full border border-violet-200 dark:border-violet-800/60 font-mono">
                  <Clock className="w-3.5 h-3.5 text-violet-500" />
                  <span>Timeline: {phase.suggested_duration}</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Sprint Milestone #{idx + 1}
                </span>
              </div>

              {/* Target Skill */}
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 flex items-center space-x-2">
                <span className="text-violet-600 dark:text-violet-400 font-black">Target Skill:</span>
                <span>{phase.skill}</span>
              </h4>

              {/* Learning Goal */}
              <div className="mb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold text-slate-900 dark:text-white">Sprint Objective: </span>
                {phase.learning_goal}
              </div>

              {/* Capstone Implementation Project */}
              {phase.recommended_projects && phase.recommended_projects.length > 0 && (
                <div className="mb-3.5 p-4 rounded-xl bg-white dark:bg-black/30 border border-slate-200/80 dark:border-white/10 space-y-1.5 shadow-xs">
                  <div className="text-xs font-bold text-violet-700 dark:text-violet-300 flex items-center space-x-2">
                    <Rocket className="w-3.5 h-3.5 text-pink-500" />
                    <span>Hands-On Capstone Project:</span>
                  </div>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 pl-1">
                    {phase.recommended_projects.map((proj, pIdx) => (
                      <li key={pIdx} className="leading-relaxed flex items-start space-x-1.5">
                        <span className="text-violet-500 font-bold">&bull;</span>
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Curated Resources */}
              {phase.resources && phase.resources.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200/60 dark:border-white/5">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                    <BookOpen className="w-3 h-3 text-slate-400" />
                    <span>Curated Resources:</span>
                  </span>
                  {phase.resources.map((res, rIdx) => (
                    <span
                      key={rIdx}
                      className="text-[11px] text-slate-700 dark:text-slate-300 font-medium bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 rounded-lg border border-slate-200/60 dark:border-white/10"
                    >
                      {res}
                    </span>
                  ))}
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
