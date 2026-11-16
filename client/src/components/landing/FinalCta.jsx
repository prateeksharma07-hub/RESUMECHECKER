import React from 'react';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function FinalCta({ onAnalyzeClick, onQuickDemo }) {
  const scrollToStudio = () => {
    if (onAnalyzeClick) {
      onAnalyzeClick();
    } else {
      const el = document.getElementById('studio-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto no-print">
      <div className="relative rounded-[36px] overflow-hidden p-8 sm:p-14 lg:p-16 text-center border border-slate-200/80 dark:border-white/10 shadow-2xl bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        
        {/* Ambient Gradient Blur Spheres */}
        <div className="absolute -top-24 left-1/4 w-[400px] h-[400px] bg-violet-600/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-[400px] h-[400px] bg-pink-500/25 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>Ready for Unvarnished Career Feedback?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
            Transform Your Resume Into a <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-200 via-pink-300 to-violet-300 bg-clip-text text-transparent">
              Verified Hiring Magnet
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Audit your qualifications against live job description criteria, identify critical keyword gaps, and generate executive Google XYZ rewrites in seconds.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToStudio}
              className="w-full sm:w-auto btn-primary text-base font-bold px-8 py-4 shadow-xl hover:shadow-violet-500/40 flex items-center justify-center space-x-2.5 transition-all group"
            >
              <span>Analyze My Resume Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onQuickDemo ? onQuickDemo('fullstack') : scrollToStudio()}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Load Sample Demo Profile</span>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Free &bull; Zero Registration Required &bull; In-Memory Data Privacy</span>
          </div>

        </div>

      </div>
    </section>
  );
}
