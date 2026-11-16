import React from 'react';
import { Sparkles, RotateCcw, Zap, Sun, Moon, Info, ShieldCheck, Compass } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({
  onReset,
  hasResults,
  onLoadDemo,
  onScrollTo
}) {
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (sectionId) => {
    if (onScrollTo) {
      onScrollTo(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-2 no-print">
      <nav className="glass-card rounded-2xl px-4 sm:px-6 py-3 shadow-xl shadow-slate-900/5 dark:shadow-black/40 border border-slate-200/70 dark:border-white/10 transition-all duration-300">
        <div className="flex items-center justify-between">
          
          {/* Brand & Dynamic Lens Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer select-none group" 
            onClick={onReset}
            title="CareerLens AI — Return to Studio"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-pink-500 to-amber-400 p-[1.5px] shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                  CareerLens <span className="text-gradient-aurora">AI</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 shadow-xs">
                  Pro MVP
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block font-medium">
                SaaS Career Intelligence & ATS Benchmarking
              </p>
            </div>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-1 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-white/5 p-1 rounded-xl border border-slate-200/50 dark:border-white/5">
            <button
              onClick={() => handleNavClick('studio-section')}
              className="px-3 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 transition-all"
            >
              Workspace
            </button>
            {hasResults && (
              <button
                onClick={() => handleNavClick('analysis-results')}
                className="px-3 py-1.5 rounded-lg text-emerald-600 dark:text-emerald-400 hover:bg-white dark:hover:bg-white/10 transition-all flex items-center space-x-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping mr-1" />
                <span>Live Audit</span>
              </button>
            )}
            <button
              onClick={() => handleNavClick('about-section')}
              className="px-3 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 transition-all"
            >
              Methodology
            </button>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Gemini Neural Engine Pill */}
            <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1.2 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span>Gemini 3.5 Active</span>
            </div>

            {/* Quick Demo Button */}
            <button
              onClick={onLoadDemo}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-violet-700 dark:text-violet-200 bg-violet-50 dark:bg-violet-900/40 hover:bg-violet-100 dark:hover:bg-violet-800/60 border border-violet-200 dark:border-violet-700/60 transition-all hover:scale-[1.02] shadow-xs cursor-pointer"
              title="Preload Full-Stack sample resume and target JD"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span className="hidden sm:inline">Demo Sample</span>
              <span className="sm:hidden">Sample</span>
            </button>

            {/* Dark / Light Mode Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 border border-slate-200/80 dark:border-white/10 transition-all cursor-pointer"
              aria-label="Toggle light or dark theme"
              title={`Switch to ${theme === 'dark' ? 'Cream Luxe Light' : 'Obsidian Dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-violet-600" />
              )}
            </button>

            {/* Reset Button */}
            {hasResults && (
              <button
                onClick={onReset}
                title="Reset workspace and run another audit"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800/50 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
}
