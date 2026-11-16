import React from 'react';
import { Sparkles, ArrowUp, ShieldCheck, Heart, Code2 } from 'lucide-react';

export default function Footer({ onReset }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/10 bg-slate-100/70 dark:bg-[#06070B] text-slate-600 dark:text-slate-400 py-16 text-xs no-print transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80 dark:border-white/10">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={onReset || scrollToTop}>
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-pink-500 to-amber-400 p-[1.5px] shadow-md shadow-violet-500/20">
                <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                CareerLens <span className="text-gradient-aurora">AI</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Next-generation AI career intelligence platform. Auditing resume qualifications, detecting critical skill gaps, and generating calibrated Google XYZ rewrites using Google Gemini.
            </p>

            <div className="flex items-center space-x-2 pt-1">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Gemini 3.5 Active</span>
              </span>
            </div>
          </div>

          {/* Navigation Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('studio-section')}
                  className="hover:text-violet-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Studio Workbench
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('how-it-works-section')}
                  className="hover:text-violet-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('features-section')}
                  className="hover:text-violet-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Features Matrix
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about-section')}
                  className="hover:text-violet-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Methodology & Standards
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('faq-section')}
                  className="hover:text-violet-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Methodology & Standards (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Executive Standards
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about-section')}
                  className="hover:text-violet-600 dark:hover:text-white transition-colors text-left"
                >
                  Google XYZ Resume Formula
                </button>
              </li>
              <li>
                <span className="text-slate-500 dark:text-slate-400">
                  5-Vector ATS Calibration
                </span>
              </li>
              <li>
                <span className="text-slate-500 dark:text-slate-400">
                  Zero Data Retention Policy
                </span>
              </li>
              <li>
                <span className="text-slate-500 dark:text-slate-400">
                  Omission vs. Gap Taxonomy
                </span>
              </li>
              <li>
                <span className="text-slate-500 dark:text-slate-400">
                  Print-to-PDF Executive Dossiers
                </span>
              </li>
            </ul>
          </div>

          {/* Architecture & GitHub (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Open Source & Tech Stack
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Built with React 19, Vite 6, Tailwind CSS v4, Express Node.js, and Google Gemini 3.5.
            </p>
            <div className="pt-1">
              <a
                href="https://github.com/prateeksharma07-hub/RESUMECHECKER"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-200/80 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-white transition-all font-semibold"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} CareerLens AI &bull; Advisory Assessment Platform &bull; All Rights Reserved.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-center sm:text-right text-slate-500 dark:text-slate-400">
              Advisory score only; does not guarantee employment or placement.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-white/20 transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
