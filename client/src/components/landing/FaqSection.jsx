import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does CareerLens AI calculate my advisory match score?',
      a: 'CareerLens AI evaluates your resume against the target job description across 5 calibrated dimensions: Technical Skills (required languages/frameworks), Experience Seniority (years and scope), Practical Projects (architecture and rigor), Academic Baseline (degrees/certifications), and ATS Formatting Clarity. The overall score out of 100 represents a weighted synthesis of these factors.'
    },
    {
      q: 'What is the Google XYZ formula and why does CareerLens use it?',
      a: "The Google XYZ formula is an executive resume-writing standard popularized by former Google VP of People Operations Laszlo Bock: 'Accomplished [X], as measured by [Y], by doing [Z]'. Instead of listing passive duties (e.g. 'worked on database queries'), it demands quantified outcomes and specific methodologies. CareerLens AI automatically identifies weak bullet points and rewrites them using this standard."
    },
    {
      q: 'Is my resume data saved or used to train public AI models?',
      a: 'No. CareerLens AI adheres strictly to an Enterprise Zero Data Retention policy. Uploaded resumes and pasted texts are processed in ephemeral server memory during the active analysis request and discarded immediately after response synthesis. Your data is never saved to persistent databases or used for AI model training.'
    },
    {
      q: 'Does this score guarantee interview selection or job placement?',
      a: 'No. CareerLens AI provides an approximate advisory score designed for self-assessment, gap detection, and preparation. Scoring algorithms and human hiring committees vary across companies, and no AI tool can guarantee employment or interview selection.'
    },
    {
      q: 'Can I test the platform with sample demo data first?',
      a: "Yes! You can click 'Load 1-Click Demo' in the hero or navbar at any time. This preloads a verified Full-Stack Developer resume and a target FinTech job description so you can test the entire analysis pipeline instantly."
    },
    {
      q: 'What file formats and sizes are supported?',
      a: 'We support standard PDF (.pdf) and UTF-8 plain text (.txt) documents up to 5MB. You can also paste markdown or unformatted resume text directly into the studio editor.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-200/80 dark:border-white/10 no-print">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Clarity & Transparency</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Everything you need to know about CareerLens AI calibration, privacy, and standards.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-slate-200/80 dark:border-white/10 overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {faq.q}
                </span>
                <span className="p-1 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 flex-shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
