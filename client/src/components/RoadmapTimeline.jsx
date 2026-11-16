import React from 'react';
import { Calendar, BookOpen, Code2, CheckCircle, ExternalLink, Milestone, Sparkles, Clock, Target } from 'lucide-react';

export default function RoadmapTimeline({ roadmap = [] }) {
  // Normalize items
  const normalized = roadmap.map((item, idx) => {
    return {
      skill: item.skill || (Array.isArray(item.skills) ? item.skills.join(', ') : 'Target Skill'),
      learning_goal: item.learning_goal || item.title || 'Master competency',
      suggested_duration: item.suggested_duration || item.phase || `Sprint ${idx + 1}`,
      recommended_projects: item.recommended_projects || item.recommendedProjects || [],
      resources: item.resources || []
    };
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
      <div className="mb-6">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-violet-50 text-violet-600">
            <Milestone className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Personalized Learning Roadmap
            </h3>
            <p className="text-xs text-slate-500">
              Targeted skill development roadmap with practical goals and suggested timelines
            </p>
          </div>
        </div>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-violet-100 space-y-8 my-4 ml-2 sm:ml-4">
        {normalized.map((phase, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Node Badge */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow-sm">
              {idx + 1}
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-violet-200 hover:bg-violet-50/20 transition-all">
              {/* Duration Pill & Skill Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center space-x-1 text-xs font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200">
                  <Clock className="w-3 h-3 text-violet-500" />
                  <span>Duration: {phase.suggested_duration}</span>
                </span>
              </div>

              {/* Skill Target */}
              <h4 className="text-base font-bold text-slate-900 mb-1 flex items-center space-x-2">
                <span className="text-violet-600 font-extrabold">Skill:</span>
                <span>{phase.skill}</span>
              </h4>

              {/* Learning Goal */}
              <div className="mb-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">Learning Goal: </span>
                {phase.learning_goal}
              </div>

              {/* Recommended Projects if present */}
              {phase.recommended_projects && phase.recommended_projects.length > 0 && (
                <div className="mb-3 p-3 rounded-xl bg-white border border-slate-200/80">
                  <div className="text-xs font-bold text-violet-900 flex items-center space-x-1.5 mb-1">
                    <Code2 className="w-3.5 h-3.5 text-violet-600" />
                    <span>Hands-On Implementation Project:</span>
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1">
                    {phase.recommended_projects.map((proj, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        • {proj}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Curated Resources */}
              {phase.resources && phase.resources.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center space-x-1">
                    <BookOpen className="w-3 h-3 text-slate-400" />
                    <span>Suggested Resources:</span>
                  </span>
                  {phase.resources.map((res, rIdx) => (
                    <span
                      key={rIdx}
                      className="text-[11px] text-slate-700 font-medium bg-slate-100 px-2 py-0.5 rounded"
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
