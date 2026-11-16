import React, { useEffect } from 'react';
import { Award, ShieldCheck, Target, Layers, FileCheck, Download, Sparkles, AlertTriangle, GraduationCap, FolderGit2, Info, ArrowUpRight } from 'lucide-react';
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
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  }, [score]);

  // Color config for radial gauge
  const getScoreTheme = (val) => {
    if (val >= 80) {
      return {
        gradientStart: '#10B981',
        gradientEnd: '#06B6D4',
        textClass: 'text-emerald-600 dark:text-emerald-400',
        bgClass: 'bg-emerald-50 dark:bg-emerald-950/40',
        borderClass: 'border-emerald-200 dark:border-emerald-800/60',
        label: 'Strong Executive Alignment'
      };
    }
    if (val >= 60) {
      return {
        gradientStart: '#F59E0B',
        gradientEnd: '#F97316',
        textClass: 'text-amber-600 dark:text-amber-400',
        bgClass: 'bg-amber-50 dark:bg-amber-950/40',
        borderClass: 'border-amber-200 dark:border-amber-800/60',
        label: 'Moderate Alignment • Gaps Found'
      };
    }
    return {
      gradientStart: '#EF4444',
      gradientEnd: '#F43F5E',
      textClass: 'text-rose-600 dark:text-rose-400',
      bgClass: 'bg-rose-50 dark:bg-rose-950/40',
      borderClass: 'border-rose-200 dark:border-rose-800/60',
      label: 'Critical Gaps • Action Required'
    };
  };

  const theme = getScoreTheme(score);
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl p-6 sm:p-8 mb-8 transition-all">
      
      {/* Top Dossier Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/60 dark:border-white/10">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {data.candidate_name || data.candidateName || 'Candidate Profile'}
            </h2>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-violet-100 dark:bg-violet-950/70 text-violet-800 dark:text-violet-300 border border-violet-200 dark:border-violet-800/50 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
              <span>Live Gemini 3.5 Calibration</span>
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Calibrated 5-dimensional ATS benchmarking against specified job requirements.
          </p>
        </div>

        <button
          onClick={onOpenReport}
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md shadow-slate-900/10 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <Download className="w-4 h-4 text-amber-400 dark:text-violet-600" />
          <span>Export Dossier Report</span>
        </button>
      </div>

      {/* Advisory Banner */}
      <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-700 dark:text-slate-300 flex items-start space-x-3 text-xs leading-relaxed">
        <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <p>
          <span className="font-bold text-slate-900 dark:text-white">Advisory Score: </span>
          {data.advisory_disclaimer || "This score is an approximate advisory score, not an official ATS result. It does not guarantee interview selection or job placement."}
        </p>
      </div>

      {/* Main Grid: Radial Gauge + Dimension Bars */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Dynamic Radial Gauge */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 text-center">
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 170 170">
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={theme.gradientStart} />
                  <stop offset="100%" stopColor={theme.gradientEnd} />
                </linearGradient>
              </defs>
              <circle
                cx="85"
                cy="85"
                r={radius}
                className="text-slate-200 dark:text-white/10"
                strokeWidth="14"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="85"
                cy="85"
                r={radius}
                stroke="url(#scoreGradient)"
                strokeWidth="14"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {score}
              </span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">
                Benchmark
              </span>
            </div>
          </div>

          <div className={`mt-4 px-4 py-1.5 rounded-full text-xs font-bold border ${theme.bgClass} ${theme.textClass} ${theme.borderClass} shadow-xs`}>
            {theme.label}
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 max-w-xs">
            Synthesized against required role taxonomy and stack proficiency.
          </p>
        </div>

        {/* Right: Executive Feedback & 5 Dimension Bars */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Executive Quote Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-500/10 via-pink-500/10 to-amber-500/10 border border-violet-500/20 dark:border-white/10 relative overflow-hidden">
            <div className="text-xs font-bold text-violet-700 dark:text-violet-300 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Executive Synthesis</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic">
              "{data.summary}"
            </p>
          </div>

          {/* 5-Category Matrix Bars */}
          <div className="space-y-3.5">
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Diagnostic Vector Breakdown
            </div>

            {/* 1. Skills */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <Target className="w-3.5 h-3.5 text-violet-500" />
                  <span>Technical & Core Skills</span>
                </span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">{breakdown.skills}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full transition-all duration-700"
                  style={{ width: `${breakdown.skills}%` }}
                />
              </div>
            </div>

            {/* 2. Experience */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Experience Depth & Seniority</span>
                </span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">{breakdown.experience}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full transition-all duration-700"
                  style={{ width: `${breakdown.experience}%` }}
                />
              </div>
            </div>

            {/* 3. Projects */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Project Rigor & Architecture</span>
                </span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">{breakdown.projects}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                  style={{ width: `${breakdown.projects}%` }}
                />
              </div>
            </div>

            {/* 4. Education */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Academic Baseline & Credentials</span>
                </span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">{breakdown.education}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full transition-all duration-700"
                  style={{ width: `${breakdown.education}%` }}
                />
              </div>
            </div>

            {/* 5. Resume Clarity */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Formatting & ATS Structural Clarity</span>
                </span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">{breakdown.resume_clarity}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full transition-all duration-700"
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
