import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Award, Target, FileText, CheckCircle2, AlertCircle, TrendingUp, Code2, Cpu } from 'lucide-react';

export default function HeroSection({ onAnalyzeClick, onExploreFeatures, onQuickDemo }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-6 pb-20 sm:pt-12 sm:pb-28 overflow-hidden">
      
      {/* Abstract Fluid Multicolour Ambient Background Layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-0">
        <div className="absolute -top-32 left-1/4 w-[520px] h-[520px] bg-violet-600/15 dark:bg-violet-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute top-24 right-1/12 w-[460px] h-[460px] bg-pink-500/15 dark:bg-pink-500/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-72 left-1/3 w-[420px] h-[420px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-12 right-1/3 w-[380px] h-[380px] bg-amber-500/10 dark:bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Header Content */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Innovation Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider mb-8 shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI Career Intelligence & ATS Benchmarking</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">&bull;</span>
            <span className="hidden sm:inline text-gradient-aurora font-black">Next-Gen SaaS</span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
            Your Resume.{' '}
            <span className="text-gradient-aurora">Your Potential.</span>
            <br />
            Your Next Opportunity.
          </h1>

          {/* Supporting Description */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Bridge the gap between opaque corporate ATS screening filters and authentic developer capability. CareerLens AI calibrates your resume against target job requirements using Google's XYZ formula, 5-dimension scoring, and personalized sprint roadmaps.
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => onAnalyzeClick ? onAnalyzeClick() : scrollTo('studio-section')}
              className="w-full sm:w-auto btn-primary text-sm sm:text-base font-bold px-8 py-4 shadow-xl hover:shadow-violet-500/30 flex items-center justify-center space-x-2.5 transition-all group"
            >
              <span>Analyze My Resume</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onExploreFeatures ? onExploreFeatures() : scrollTo('features-section')}
              className="w-full sm:w-auto btn-secondary text-sm sm:text-base font-bold px-7 py-4 flex items-center justify-center space-x-2 transition-all hover:-translate-y-0.5"
            >
              <span>Explore Features</span>
            </button>

            {/* Quick Demo Preload */}
            <button
              onClick={() => onQuickDemo ? onQuickDemo('fullstack') : scrollTo('studio-section')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-violet-700 dark:text-violet-300 bg-violet-100/70 dark:bg-violet-950/50 hover:bg-violet-200/70 dark:hover:bg-violet-900/60 border border-violet-200 dark:border-violet-800/60 transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Load 1-Click Demo</span>
            </button>
          </div>

          {/* Verified Standards Micro-Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Zero Data Retention</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-violet-500" />
              <span>Google XYZ Standard</span>
            </span>
            <span>&bull;</span>
            <span className="flex items-center space-x-1.5">
              <Cpu className="w-4 h-4 text-amber-500" />
              <span>Gemini 3.5 Neural Engine</span>
            </span>
          </div>

        </div>

        {/* Floating Interactive Resume-Analysis Preview Card */}
        <div className="mt-14 max-w-4xl mx-auto relative">
          
          {/* Subtle Ambient Decorative Glow Frame */}
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-violet-600 via-pink-500 to-amber-500 opacity-20 blur-xl pointer-events-none" />

          {/* Floating Preview Card Container */}
          <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-white/10 shadow-2xl transition-all duration-300 hover:shadow-violet-500/10">
            
            {/* Header of Preview Card */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-200/60 dark:border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-violet-500/30">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-base font-bold text-slate-900 dark:text-white">Alex Rivera</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                      VERIFIED CANDIDATE
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Target Role: Senior Full Stack Engineer (FinTech)</p>
                </div>
              </div>

              {/* Advisory Benchmark Pill */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Advisory Match</div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    88<span className="text-sm font-semibold text-slate-400">/100</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                  88%
                </div>
              </div>
            </div>

            {/* Preview Grid: 5 Dimension Bars + Matched/Missing Skills Preview */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column: 5 Calibrated Dimensions */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Target className="w-3.5 h-3.5 text-violet-500" />
                  <span>5-Vector Calibration Engine</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <div className="flex justify-between font-semibold mb-1 text-slate-600 dark:text-slate-300">
                      <span>Technical Stack</span>
                      <span className="font-mono text-slate-900 dark:text-white font-bold">92%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                      <div className="h-full bg-violet-600 rounded-full w-[92%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1 text-slate-600 dark:text-slate-300">
                      <span>Experience Depth</span>
                      <span className="font-mono text-slate-900 dark:text-white font-bold">85%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full w-[85%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1 text-slate-600 dark:text-slate-300">
                      <span>Project Rigor</span>
                      <span className="font-mono text-slate-900 dark:text-white font-bold">88%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1 text-slate-600 dark:text-slate-300">
                      <span>ATS Structural Clarity</span>
                      <span className="font-mono text-slate-900 dark:text-white font-bold">94%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200/80 dark:bg-white/10 overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full w-[94%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Competency Chips & Google XYZ Preview */}
              <div className="space-y-3.5 flex flex-col justify-between">
                
                {/* Skill Chips */}
                <div>
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Verified Competency Alignment
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="badge-mint text-[11px] py-1">✓ React 19</span>
                    <span className="badge-mint text-[11px] py-1">✓ Node.js</span>
                    <span className="badge-mint text-[11px] py-1">✓ TypeScript</span>
                    <span className="badge-mint text-[11px] py-1">✓ PostgreSQL</span>
                    <span className="badge-coral text-[11px] py-1">! Kafka Streaming (Gap)</span>
                  </div>
                </div>

                {/* Google XYZ Diff Snippet */}
                <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-black/30 border border-slate-200/80 dark:border-white/10 text-xs font-mono">
                  <div className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Google XYZ Transformation Preview:
                  </div>
                  <p className="text-emerald-950 dark:text-emerald-300 text-[11px] leading-snug">
                    "Engineered real-time payment reconciliation pipeline, slashing settlement latency by 38% for 45,000+ daily transactions."
                  </p>
                </div>

              </div>

            </div>

            {/* Interactive Card Action Bar */}
            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                <span>Simulated live analysis with real-world candidate data</span>
              </span>
              <button
                onClick={() => onAnalyzeClick ? onAnalyzeClick() : scrollTo('studio-section')}
                className="font-bold text-violet-700 dark:text-violet-400 hover:underline flex items-center space-x-1 cursor-pointer"
              >
                <span>Audit your own profile now</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
