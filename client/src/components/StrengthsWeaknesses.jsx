import React from 'react';
import { CheckCircle, AlertTriangle, ThumbsUp, ShieldAlert, Info } from 'lucide-react';

export default function StrengthsWeaknesses({ strengths = [], weaknesses = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
      {/* Strengths Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-7 flex flex-col">
        <div className="flex items-center space-x-2.5 mb-5 pb-3 border-b border-slate-100">
          <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
            <ThumbsUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Verified Strengths</h3>
            <p className="text-xs text-slate-500">Concrete qualifications and positive elements in the resume</p>
          </div>
        </div>

        <ul className="space-y-3.5 flex-1">
          {strengths.map((strength, index) => (
            <li key={index} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>{typeof strength === 'string' ? strength : JSON.stringify(strength)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Weaknesses Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-7 flex flex-col">
        <div className="flex items-center space-x-2.5 mb-5 pb-3 border-b border-slate-100">
          <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Identified Weaknesses & Gaps</h3>
            <p className="text-xs text-slate-500">Areas needing refinement or missing information</p>
          </div>
        </div>

        <ul className="space-y-3.5 flex-1">
          {weaknesses.map((weakness, index) => {
            const text = typeof weakness === 'string' ? weakness : JSON.stringify(weakness);
            const isMissingInfo = text.toLowerCase().includes('missing information') || text.toLowerCase().includes('unstated');

            return (
              <li key={index} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {isMissingInfo ? (
                  <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                )}
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
