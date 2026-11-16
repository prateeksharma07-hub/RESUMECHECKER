import React, { useEffect } from 'react';
import { Award, ShieldCheck, Target, Layers, FileCheck, Download, Sparkles, AlertTriangle, GraduationCap, FolderGit2, Info } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScoreOverview({ data, onOpenReport }) {
  const score = data?.overall_score ?? data?.overallScore ?? 75;
  const breakdown = data?.score_breakdown || {
    skills: 75,
    experience: 70,
    education: 80,
    projects: 80,
    resume_clarity: 85
  };

  useEffect(() => {
    if (score >= 75) {
      try {
        confetti({
          particleCount: 60,
          spread: 55,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  }, [score]);

  // Color determination based on score
  const getScoreColor = (val) => {
    if (val >= 80) return { stroke: '#7c3aed', text: 'text-violet-700', bg: 'bg-violet-50', border: 'border-violet-200', label: 'Strong Alignment' };
    if (val >= 60) return { stroke: '#f59e0b', text: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', label: 'Moderate Match' };
    return { stroke: '#f43f5e', text: 'text-rose-700', bg: 'bg-rose-50', border: 'border-rose-200', label: 'Action Required' };
  };

  const colorConfig = getScoreColor(score);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {data.candidate_name || data.candidateName || 'Candidate Profile'}
            </h2>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-violet-100/80 text-violet-900 border border-violet-300">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Live Gemini AI ({data.modelUsed || 'gemini-3.5-flash'})</span>
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Approximate advisory benchmarking across skills, experience, projects, education & clarity.
          </p>
        </div>

        <button
          onClick={onOpenReport}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-md shadow-slate-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Download className="w-4 h-4 text-violet-300" />
          <span>Download Analysis Report</span>
        </button>
      </div>

      {/* Advisory Notice Banner */}
      <div className="mt-6 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 text-slate-600 flex items-start space-x-2.5 text-xs">
        <Info className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <span className="font-bold text-slate-800">Advisory Notice: </span>
          {data.advisory_disclaimer || "This score is an approximate advisory score, not an official ATS result. It does not guarantee interview selection or job placement."}
        </p>
      </div>

      {/* Main Grid: Radial Gauge + Dimension Bars */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Circular Gauge */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="text-slate-200"
                strokeWidth="12"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke={colorConfig.stroke}
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                {score}
              </span>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Overall Score
              </span>
            </div>
          </div>

          <div className={`mt-4 px-4 py-1 rounded-full text-xs font-bold border ${colorConfig.bg} ${colorConfig.text} ${colorConfig.border}`}>
            {colorConfig.label}
          </div>
          <p className="text-[11px] text-slate-500 mt-2 max-w-xs">
            Calculated advisory match against specified job description requirements.
          </p>
        </div>

        {/* Right: 5 Score Breakdown Bars & Executive Summary */}
        <div className="lg:col-span-7 space-y-5">
          {/* Executive Summary */}
          <div className="p-4 sm:p-5 rounded-2xl bg-violet-50/70 border border-violet-100">
            <div className="text-xs font-bold text-violet-900 uppercase tracking-wider mb-1 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Executive Feedback</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              "{data.summary}"
            </p>
          </div>

          {/* 5-Category Breakdown */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Score Breakdown (5 Dimensions)
            </div>

            {/* 1. Skills */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="flex items-center space-x-1.5 text-slate-700">
                  <Target className="w-3.5 h-3.5 text-violet-600" />
                  <span>Technical & Core Skills</span>
                </span>
                <span className="font-bold text-slate-900">{breakdown.skills}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-violet-600 rounded-full transition-all duration-700"
                  style={{ width: `${breakdown.skills}%` }}
                />
              </div>
            </div>

            {/* 2. Experience */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="flex items-center space-x-1.5 text-slate-700">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Work Experience & Seniority</span>
                </span>
                <span className="font-bold text-slate-900">{breakdown.experience}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-700"
                  style={{ width: `${breakdown.experience}%` }}
                />
              </div>
            </div>

            {/* 3. Projects */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="flex items-center space-x-1.5 text-slate-700">
                  <FolderGit2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Projects & Practical Architecture</span>
                </span>
                <span className="font-bold text-slate-900">{breakdown.projects}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                  style={{ width: `${breakdown.projects}%` }}
                />
              </div>
            </div>

            {/* 4. Education */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="flex items-center space-x-1.5 text-slate-700">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                  <span>Education & Academic Credentials</span>
                </span>
                <span className="font-bold text-slate-900">{breakdown.education}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-700"
                  style={{ width: `${breakdown.education}%` }}
                />
              </div>
            </div>

            {/* 5. Resume Clarity */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="flex items-center space-x-1.5 text-slate-700">
                  <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Resume Clarity, Structure & Formatting</span>
                </span>
                <span className="font-bold text-slate-900">{breakdown.resume_clarity}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-700"
                  style={{ width: `${breakdown.resume_clarity}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
