import React from 'react';
import { Sparkles, RotateCcw, Zap } from 'lucide-react';

export default function Navbar({
  onReset,
  hasResults,
  onLoadDemo
}) {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer select-none" onClick={onReset}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-violet-900/40">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg tracking-tight text-white">
                  CareerLens <span className="text-violet-400">AI</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-violet-950 text-violet-300 border border-violet-700/60">
                  Demo MVP
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">AI Resume Analyzer & Career Advisor</p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Status Pill */}
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">Google Gemini AI Active</span>
              <span className="sm:hidden">AI Active</span>
            </div>

            {/* Quick Demo Button (loads sample data immediately) */}
            <button
              onClick={onLoadDemo}
              className="hidden lg:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-violet-200 bg-violet-900/50 hover:bg-violet-800/70 border border-violet-700/60 transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-violet-400" />
              <span>Load Demo Sample</span>
            </button>

            {/* Reset Button */}
            {hasResults && (
              <button
                onClick={onReset}
                title="Reset all fields and restart demo"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-300 hover:text-white bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/50 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
