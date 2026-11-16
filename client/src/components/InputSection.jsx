import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle2, X, Sparkles, AlertCircle, ArrowRight, Trash2, FileCheck, Info, Zap, RotateCcw, Shield, FileUp } from 'lucide-react';
import { SAMPLE_RESUMES, SAMPLE_JOB_DESCRIPTIONS } from '../utils/presets';

export default function InputSection({
  resumeMode,
  setResumeMode,
  resumeText,
  setResumeText,
  fileUpload,
  setFileUpload,
  jobDescription,
  setJobDescription,
  onAnalyze,
  isLoading,
  error,
  isSampleLoaded,
  onLoadSample,
  onClearAll
}) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      processSelectedFile(files[0]);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processSelectedFile(file);
    }
  };

  const processSelectedFile = (file) => {
    const name = file.name.toLowerCase();
    const isPdf = file.type === 'application/pdf' || name.endsWith('.pdf');
    const isTxt = file.type === 'text/plain' || name.endsWith('.txt');

    if (!isPdf && !isTxt) {
      alert('Please upload a valid PDF (.pdf) or Text (.txt) resume file.');
      return;
    }

    setFileUpload(file);
    setResumeMode('file');

    if (isTxt) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result;
        if (typeof text === 'string') {
          setResumeText(text);
        }
      };
      reader.readAsText(file);
    }
  };

  const loadPresetJD = (id) => {
    const sample = SAMPLE_JOB_DESCRIPTIONS.find(s => s.id === id) || SAMPLE_JOB_DESCRIPTIONS[0];
    setJobDescription(sample.text);
  };

  const canSubmit = (resumeMode === 'file' && fileUpload) || (resumeMode === 'text' && resumeText.trim().length >= 20);

  return (
    <section id="studio-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 no-print">
      
      {/* Sample Data Demo Banner */}
      {isSampleLoaded && (
        <div className="mb-6 p-4 rounded-2xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800/60 text-slate-900 dark:text-violet-100 flex items-start space-x-3 text-xs sm:text-sm shadow-xs animate-fade-in">
          <Info className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-bold uppercase tracking-wider text-violet-800 dark:text-violet-300 text-xs bg-violet-200/80 dark:bg-violet-900/60 px-2 py-0.5 rounded-full mr-2">
              Verified Sample Loaded
            </span>
            Alex Rivera's Full Stack Developer profile and Fintech JD are loaded. Click <strong className="text-violet-700 dark:text-violet-300">"Run Calibrated Analysis"</strong> below to generate results.
          </div>
        </div>
      )}

      {/* Error Banner */}
      {error && (
        <div className="mb-6 p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200 shadow-sm animate-fade-in">
          <div className="flex items-start space-x-3 text-xs sm:text-sm">
            <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 space-y-1.5">
              <div className="font-bold text-rose-800 dark:text-rose-300">
                {typeof error === 'object' ? error.message : error}
              </div>
              {typeof error === 'object' && error.setupGuide && (
                <div className="text-xs text-rose-700 dark:text-rose-300 bg-white/80 dark:bg-black/30 p-3 rounded-xl border border-rose-200/80 dark:border-rose-900/40 leading-relaxed">
                  <span className="font-semibold">Setup Guide: </span>
                  {error.setupGuide}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Studio Workbench 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
        
        {/* Left Workbench: Candidate Resume Source */}
        <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl overflow-hidden flex flex-col h-full transition-all">
          
          {/* Header & Tabs */}
          <div className="p-4 sm:p-5 border-b border-slate-200/60 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 text-white text-xs font-bold shadow-xs">
                1
              </span>
              <div>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">Candidate Resume</h2>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">PDF, TXT, or direct Markdown</p>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-slate-200/70 dark:bg-white/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setResumeMode('file')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  resumeMode === 'file'
                    ? 'bg-white dark:bg-slate-900 text-violet-700 dark:text-violet-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload File</span>
              </button>
              <button
                type="button"
                onClick={() => setResumeMode('text')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  resumeMode === 'text'
                    ? 'bg-white dark:bg-slate-900 text-violet-700 dark:text-violet-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Paste Text</span>
              </button>
            </div>
          </div>

          {/* Mode 1: File Upload Dropzone */}
          {resumeMode === 'file' && (
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-center">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.txt,application/pdf,text/plain"
                onChange={handleFileChange}
                className="hidden"
              />

              {!fileUpload ? (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300 ${
                    isDragging
                      ? 'border-violet-500 bg-violet-500/10 scale-[1.01]'
                      : 'border-slate-300/80 dark:border-white/15 hover:border-violet-400 dark:hover:border-violet-400/60 bg-slate-50/50 dark:bg-white/[0.02] hover:bg-violet-50/30 dark:hover:bg-violet-950/20'
                  }`}
                >
                  <div className="relative w-16 h-16 mx-auto rounded-2xl bg-violet-100 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4 shadow-inner">
                    <FileUp className="w-8 h-8" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Drop your resume here, or <span className="text-violet-600 dark:text-violet-400 underline">browse files</span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed">
                    Native PDF stream extraction & plain text UTF-8 support (Up to 5MB)
                  </p>
                  
                  <div className="mt-5 inline-flex items-center text-xs font-bold text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950/50 px-4 py-2 rounded-xl border border-violet-200 dark:border-violet-800/60 hover:bg-violet-100 dark:hover:bg-violet-900/60 transition-colors">
                    Choose Local File &rarr;
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-violet-50/70 dark:bg-violet-950/30 border border-violet-200/80 dark:border-violet-800/50 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white flex items-center justify-center mb-3 shadow-lg shadow-violet-500/20">
                    <FileCheck className="w-7 h-7" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-xs mx-auto">
                    {fileUpload.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {(fileUpload.size / 1024).toFixed(1)} KB &bull; {fileUpload.name.toLowerCase().endsWith('.pdf') ? 'Native PDF Document' : 'Text File'}
                  </div>
                  <div className="mt-5 flex items-center justify-center space-x-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-violet-700 dark:text-violet-300 bg-white dark:bg-slate-900 border border-violet-200 dark:border-white/10 hover:bg-violet-50 dark:hover:bg-white/5 transition-all shadow-xs cursor-pointer"
                    >
                      Replace File
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFileUpload(null);
                        setResumeText('');
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/50 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all shadow-xs cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}

              {/* Quick sample prompt */}
              <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Need benchmark data?</span>
                <button
                  type="button"
                  onClick={onLoadSample}
                  className="font-bold text-violet-600 dark:text-violet-400 hover:underline inline-flex items-center space-x-1 cursor-pointer"
                >
                  <Zap className="w-3 h-3 text-amber-500" />
                  <span>Load Sample Profile</span>
                </button>
              </div>
            </div>
          )}

          {/* Mode 2: Paste Resume Text */}
          {resumeMode === 'text' && (
            <div className="p-5 sm:p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {resumeText.trim().length > 0
                    ? `${resumeText.trim().split(/\s+/).length} words • ${resumeText.length} chars`
                    : 'Paste candidate profile content'}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={onLoadSample}
                    className="text-xs text-violet-600 dark:text-violet-400 font-bold inline-flex items-center space-x-1 cursor-pointer"
                  >
                    <Zap className="w-3 h-3 text-amber-500" />
                    <span>Demo Profile</span>
                  </button>
                  {resumeText && (
                    <button
                      type="button"
                      onClick={() => setResumeText('')}
                      className="text-xs text-rose-500 hover:text-rose-600 flex items-center space-x-1 font-semibold cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear</span>
                    </button>
                  )}
                </div>
              </div>

              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste candidate resume here (Summary, Technical Stack, Experience, Projects, Education)..."
                rows={12}
                className="w-full flex-1 p-4 rounded-2xl bg-white/70 dark:bg-black/30 border border-slate-200/80 dark:border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 text-xs sm:text-sm font-mono text-slate-900 dark:text-slate-100 resize-none transition-all placeholder:text-slate-400"
              />
            </div>
          )}
        </div>

        {/* Right Workbench: Target Job Description */}
        <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl overflow-hidden flex flex-col h-full transition-all">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200/60 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold shadow-xs">
                2
              </span>
              <div>
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">Target Job Description</h2>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Benchmark Competency Requirements</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">Benchmark Role</span>
          </div>

          <div className="p-5 sm:p-6 flex-1 flex flex-col">
            {/* Quick Benchmark Role Presets */}
            <div className="mb-3.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-2">
                Quick Role Benchmarks:
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => loadPresetJD('fullstack-job')}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/5 hover:bg-violet-50 dark:hover:bg-violet-950/40 text-slate-700 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-300 border border-slate-200/80 dark:border-white/10 transition-all cursor-pointer"
                >
                  Full Stack (React/Node)
                </button>
                <button
                  type="button"
                  onClick={() => loadPresetJD('frontend-job')}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/5 hover:bg-violet-50 dark:hover:bg-violet-950/40 text-slate-700 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-300 border border-slate-200/80 dark:border-white/10 transition-all cursor-pointer"
                >
                  Frontend Specialist
                </button>
                <button
                  type="button"
                  onClick={() => loadPresetJD('devops-job')}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/5 hover:bg-violet-50 dark:hover:bg-violet-950/40 text-slate-700 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-300 border border-slate-200/80 dark:border-white/10 transition-all cursor-pointer"
                >
                  Cloud DevOps
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {jobDescription.trim().length > 0 ? `${jobDescription.trim().split(/\s+/).length} words` : 'Target role specifications'}
              </span>
              {jobDescription && (
                <button
                  type="button"
                  onClick={() => setJobDescription('')}
                  className="text-xs text-rose-500 hover:text-rose-600 flex items-center space-x-1 font-semibold cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              )}
            </div>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste target role responsibilities, required qualifications, key technologies, and preferred experience here..."
              rows={12}
              className="w-full flex-1 p-4 rounded-2xl bg-white/70 dark:bg-black/30 border border-slate-200/80 dark:border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 text-xs sm:text-sm font-sans text-slate-900 dark:text-slate-100 resize-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

      </div>

      {/* Primary CTA Engine */}
      <div className="mt-10 text-center max-w-xl mx-auto space-y-3">
        <button
          type="button"
          disabled={!canSubmit || isLoading}
          onClick={onAnalyze}
          className={`w-full py-4 px-8 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center space-x-3 shadow-xl transition-all duration-300 cursor-pointer ${
            !canSubmit || isLoading
              ? 'bg-slate-300 dark:bg-white/10 text-slate-500 dark:text-slate-500 cursor-not-allowed shadow-none'
              : 'bg-gradient-to-r from-violet-600 via-pink-600 to-amber-500 hover:from-violet-500 hover:via-pink-500 hover:to-amber-400 text-white shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.01] active:scale-[0.99] border border-white/20'
          }`}
        >
          <Sparkles className="w-5 h-5 text-amber-200 animate-spin-slow" />
          <span>{isLoading ? 'Analyzing Resume with Gemini 3.5...' : 'Run Calibrated Analysis'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Status guidance */}
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {!canSubmit
            ? 'Please upload a PDF/TXT resume or enter at least 20 characters of resume text to evaluate.'
            : resumeMode === 'file'
            ? `Ready to audit: ${fileUpload?.name}`
            : 'Ready to audit candidate profile'}
        </p>

        {/* Clear All Inputs */}
        {(resumeText || fileUpload || jobDescription) && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onClearAll}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Both Inputs</span>
            </button>
          </div>
        )}
      </div>

    </section>
  );
}
