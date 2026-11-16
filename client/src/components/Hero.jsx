import React from 'react';
import { Sparkles, Award, Target, FileText, TrendingUp, Zap, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero({ onQuickDemo, hasResults }) {
  return (
    <div className="relative bg-slate-900 text-white pt-10 pb-14 sm:pt-16 sm:pb-20 overflow-hidden border-b border-slate-800">
      {/* Background Violet & Indigo Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-0">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-violet-600/25 rounded-full blur-3xl transform-gpu" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl transform-gpu" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Project Intro Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-violet-950/80 border border-violet-700/60 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
          <span>College Project Demo &bull; AI Resume & Career Advisor</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
          Intelligent ATS Resume Audit & <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Personalized Career Roadmap
          </span>
        </h1>

        {/* Project Description */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Upload your resume (PDF or TXT) and target job description. CareerLens AI calculates your advisory match score out of 100, maps skill gaps, highlights verified strengths, provides Google XYZ bullet rewrites, and creates a personalized learning pathway.
        </p>

        {/* 1-Click Demo Launcher for College Presentation */}
        {!hasResults && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onQuickDemo('fullstack')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-xl shadow-violet-900/50 transition-all hover:scale-[1.02] active:scale-[0.98] border border-violet-500/30"
            >
              <Zap className="w-4 h-4 text-violet-200 fill-violet-200" />
              <span>Load Sample Resume & JD (1-Click Demo)</span>
            </button>
          </div>
        )}

        <div className="mt-3 flex items-center justify-center space-x-2 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Powered by Google Gemini AI &bull; Secure Server-Side Integration</span>
        </div>

        {/* 4 Core Demonstration Pillars */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-xs hover:border-violet-500/50 transition-all">
            <div className="w-8 h-8 rounded-xl bg-violet-500/15 border border-violet-500/30 text-violet-400 flex items-center justify-center mb-2.5">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-white">Score Out of 100</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Skills, experience, education, projects & clarity</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-xs hover:border-emerald-500/50 transition-all">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-2.5">
              <Target className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-white">Skill Gap Analysis</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Matched skills vs critical missing competencies</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-xs hover:border-amber-500/50 transition-all">
            <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-2.5">
              <FileText className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-white">Google XYZ Rewrites</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Actionable before/after metric-driven rewrites</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-xs hover:border-indigo-500/50 transition-all">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-2.5">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-white">Career Roadmap</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Phased timeline with goals, projects & resources</p>
          </div>
        </div>
      </div>
    </div>
  );
}
