import React from 'react';
import { Sparkles, Award, Target, FileText, TrendingUp, Zap, ArrowRight, ShieldCheck, Cpu, Code2, Database, Cloud, Terminal } from 'lucide-react';

export default function Hero({ onQuickDemo, hasResults }) {
  const rolePresets = [
    { id: 'fullstack', label: 'Full-Stack Engineer', icon: Code2, color: 'from-violet-500 to-indigo-600' },
    { id: 'aiml', label: 'AI / ML Engineer', icon: Terminal, color: 'from-pink-500 to-rose-600' },
    { id: 'devops', label: 'Cloud DevOps', icon: Cloud, color: 'from-amber-500 to-orange-600' },
    { id: 'frontend', label: 'Product UI Engineer', icon: Database, color: 'from-emerald-500 to-teal-600' },
  ];

  const scrollToStudio = () => {
    const el = document.getElementById('studio-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      
      {/* Fluid Multi-Color Ambient Backdrops (Lavender, Coral, Mint, Violet) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-0">
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-violet-600/15 dark:bg-violet-600/20 rounded-full blur-[100px] transform-gpu pointer-events-none" />
        <div className="absolute top-20 right-1/6 w-[450px] h-[450px] bg-pink-500/15 dark:bg-pink-500/15 rounded-full blur-[110px] transform-gpu pointer-events-none" />
        <div className="absolute top-48 left-1/3 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[120px] transform-gpu pointer-events-none" />
        <div className="absolute -top-10 right-1/3 w-[350px] h-[350px] bg-amber-500/10 dark:bg-amber-500/10 rounded-full blur-[90px] transform-gpu pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Platform Innovation Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 animate-pulse" />
          <span>Next-Gen Career Intelligence & ATS Benchmarking</span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
          <span className="hidden sm:inline text-violet-600 dark:text-violet-400 font-semibold">Gemini 3.5</span>
        </div>

        {/* Dynamic Multi-Color Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
          Calibrated Career Audits. <br className="hidden sm:inline" />
          <span className="text-gradient-aurora">
            Unvarnished Feedback.
          </span>
        </h1>

        {/* Value Proposition Description */}
        <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Evaluate resume readiness against target job descriptions using Google XYZ bullet rewrites, 5-dimension ATS scoring, skill gap taxonomy, and personalized sprint roadmaps.
        </p>

        {/* Interactive Preset Chips & CTA */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">
              Test Instant Demo Role:
            </span>
            {rolePresets.map((preset) => {
              const Icon = preset.icon;
              return (
                <button
                  key={preset.id}
                  onClick={() => onQuickDemo(preset.id)}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 shadow-xs hover:border-violet-400 dark:hover:border-violet-500 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                  <span>{preset.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <button
              onClick={scrollToStudio}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] border border-violet-400/30 cursor-pointer"
            >
              <span>Launch Studio Workbench</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Metrics Strip */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
          
          <div className="glass-card rounded-2xl p-4 transition-all hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Readability</span>
              <Award className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">98.4%</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Semantic ATS parsing fidelity</p>
          </div>

          <div className="glass-card rounded-2xl p-4 transition-all hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Diagnosis</span>
              <Target className="w-4 h-4 text-violet-500" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">5-Vector</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Skills, exp, projects, edu, clarity</p>
          </div>

          <div className="glass-card rounded-2xl p-4 transition-all hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Velocity</span>
              <Cpu className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">&lt; 3.2s</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Real-time structured synthesis</p>
          </div>

          <div className="glass-card rounded-2xl p-4 transition-all hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Privacy</span>
              <ShieldCheck className="w-4 h-4 text-pink-500" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">Zero</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Data retention or model training</p>
          </div>

        </div>

      </div>
    </div>
  );
}
