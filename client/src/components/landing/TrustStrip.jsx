import React from 'react';
import { Cpu, ShieldCheck, Award, FileCode2, Zap, Lock } from 'lucide-react';

export default function TrustStrip() {
  const technologies = [
    {
      icon: Cpu,
      title: 'Google Gemini 3.5 Flash',
      subtitle: 'Structured AI Synthesis'
    },
    {
      icon: Award,
      title: 'Google XYZ Formula',
      subtitle: 'Executive Resume Standard'
    },
    {
      icon: Lock,
      title: 'Zero Data Retention',
      subtitle: 'Ephemeral In-Memory Privacy'
    },
    {
      icon: FileCode2,
      title: 'Native PDF.js Extraction',
      subtitle: 'Zero OCR Corruption'
    },
    {
      icon: Zap,
      title: 'React 19 & Vite 6',
      subtitle: 'Real-Time Client Architecture'
    },
    {
      icon: ShieldCheck,
      title: 'Isolated Backend Gateway',
      subtitle: 'Protected Server Credentials'
    }
  ];

  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.015] relative overflow-hidden no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Engineered on Open Standards & Verified AI Architecture
          </span>
        </div>

        {/* 6-Column Tech Pill Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div 
                key={idx}
                className="p-4 rounded-2xl glass-card text-center flex flex-col items-center justify-center transition-all hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-500/30"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-white/5 text-violet-700 dark:text-violet-400 flex items-center justify-center mb-2.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-full">
                  {tech.title}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate max-w-full">
                  {tech.subtitle}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
