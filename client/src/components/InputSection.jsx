import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle2, X, Sparkles, AlertCircle, ArrowRight, Trash2, FileCheck, Info, Zap, RotateCcw } from 'lucide-react';
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Sample Data Banner for Demo Evaluation (Requirement 10) */}
      {isSampleLoaded && (
        <div className="mb-6 p-4 rounded-2xl bg-violet-50/90 border border-violet-200/90 text-violet-900 flex items-start space-x-3 text-xs sm:text-sm shadow-xs animate-fade-in">
          <Info className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-bold uppercase tracking-wider text-violet-800 text-xs bg-violet-200/80 px-2 py-0.5 rounded-full mr-2">
              Sample Data for Demo Purposes
            </span>
            Alex Rivera's verified Full Stack Developer resume and target Fintech Job Description have been pre-loaded. Click <strong>"Analyze Resume with CareerLens AI"</strong> below to run the live analysis!
          </div>
        </div>
      )}

      {/* Error / Setup Notice Banner (Requirement 9) */}
      {error && (
        <div className="mb-6 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 shadow-sm animate-fade-in">
          <div className="flex items-start space-x-3 text-xs sm:text-sm">
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1 space-y-1.5">
              <div className="font-bold text-rose-800">
                {typeof error === 'object' ? error.message : error}
              </div>
              {typeof error === 'object' && error.setupGuide && (
                <div className="text-xs text-rose-700 bg-white/80 p-3 rounded-xl border border-rose-200/80 leading-relaxed">
                  <span className="font-semibold">Setup Guide: </span>
                  {error.setupGuide}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
        {/* Left Column: Resume Input */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
          {/* Header & Mode Tabs */}
          <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-bold shadow-xs">
                1
              </span>
              <h2 className="text-base font-bold text-slate-900">Resume Input</h2>
            </div>

            {/* Toggle Tabs (PDF/TXT Upload vs Paste Text) */}
            <div className="inline-flex p-1 rounded-xl bg-slate-200/80 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setResumeMode('file')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  resumeMode === 'file'
                    ? 'bg-white text-violet-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload PDF / TXT</span>
              </button>
              <button
                type="button"
                onClick={() => setResumeMode('text')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  resumeMode === 'text'
                    ? 'bg-white text-violet-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Paste Text</span>
              </button>
            </div>
          </div>

          {/* Mode 1: File Upload (PDF or TXT) */}
          {resumeMode === 'file' && (
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
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
                  className={`border-2 border-dashed rounded-2xl p-8 sm:p-10 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-violet-500 bg-violet-50/70 scale-[1.01]'
                      : 'border-slate-300 hover:border-violet-400 hover:bg-slate-50/70 bg-slate-50/40'
                  }`}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 shadow-xs">
                    <Upload className="w-7 h-7" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">
                    Drop your PDF or TXT resume here, or <span className="text-violet-600 underline">browse</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5">
                    Supports standard PDF (.pdf) and plain text (.txt) files (Max 5MB)
                  </p>
                  <div className="mt-4 inline-flex items-center text-xs font-semibold text-violet-700 bg-violet-50 px-3.5 py-1.5 rounded-full border border-violet-200">
                    Select File From Device &rarr;
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-violet-50/60 border border-violet-200 text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-violet-600 text-white flex items-center justify-center mb-3 shadow-md shadow-violet-200">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 truncate max-w-xs mx-auto">
                    {fileUpload.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {(fileUpload.size / 1024).toFixed(1)} KB &bull; {fileUpload.name.toLowerCase().endsWith('.pdf') ? 'PDF Document' : 'Text File'}
                  </div>
                  <div className="mt-4 flex items-center justify-center space-x-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-violet-700 bg-white border border-violet-200 hover:bg-violet-50 transition-colors shadow-xs"
                    >
                      Replace File
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFileUpload(null);
                        setResumeText('');
                      }}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-rose-700 bg-white border border-rose-200 hover:bg-rose-50 transition-colors shadow-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}

              {/* Demo sample loader button */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Want to test immediately?</span>
                <button
                  type="button"
                  onClick={onLoadSample}
                  className="font-bold text-violet-600 hover:text-violet-800 underline inline-flex items-center space-x-1"
                >
                  <Zap className="w-3 h-3 text-violet-500" />
                  <span>Load Sample Demo Data</span>
                </button>
              </div>
            </div>
          )}

          {/* Mode 2: Paste Resume Text */}
          {resumeMode === 'text' && (
            <div className="p-4 sm:p-5 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-500">
                  {resumeText.trim().length > 0 ? `${resumeText.trim().split(/\s+/).length} words &bull; ${resumeText.length} characters` : 'Paste plain text or markdown resume'}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={onLoadSample}
                    className="text-xs text-violet-600 hover:text-violet-800 font-bold inline-flex items-center space-x-1"
                  >
                    <Zap className="w-3 h-3 text-violet-500" />
                    <span>Load Demo Sample</span>
                  </button>
                  {resumeText && (
                    <button
                      type="button"
                      onClick={() => setResumeText('')}
                      className="text-xs text-rose-500 hover:text-rose-700 flex items-center space-x-1 font-semibold"
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
                placeholder="Paste candidate resume here (Summary, Technical Skills, Professional Experience, Education, Projects)..."
                rows={12}
                className="w-full flex-1 p-3.5 rounded-2xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 text-xs sm:text-sm font-mono text-slate-800 resize-none transition-all placeholder:text-slate-400"
              />
            </div>
          )}
        </div>

        {/* Right Column: Job Description Input */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold shadow-xs">
                2
              </span>
              <h2 className="text-base font-bold text-slate-900">Target Job Description</h2>
            </div>
            <span className="text-xs text-slate-500">Benchmark Role</span>
          </div>

          <div className="p-4 sm:p-5 flex-1 flex flex-col">
            {/* Quick Fill Presets */}
            <div className="mb-3">
              <label className="text-xs font-semibold text-slate-600 block mb-1.5">
                Quick Role Benchmarks:
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => loadPresetJD('fullstack-job')}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-violet-50 hover:text-violet-700 border border-slate-200 transition-colors"
                >
                  Full Stack (React/Node)
                </button>
                <button
                  type="button"
                  onClick={() => loadPresetJD('frontend-job')}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-violet-50 hover:text-violet-700 border border-slate-200 transition-colors"
                >
                  Frontend Specialist
                </button>
                <button
                  type="button"
                  onClick={() => loadPresetJD('devops-job')}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-violet-50 hover:text-violet-700 border border-slate-200 transition-colors"
                >
                  Cloud DevOps
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-500">
                {jobDescription.trim().length > 0 ? `${jobDescription.trim().split(/\s+/).length} words` : 'Paste target job description or requirements'}
              </span>
              {jobDescription && (
                <button
                  type="button"
                  onClick={() => setJobDescription('')}
                  className="text-xs text-rose-500 hover:text-rose-700 flex items-center space-x-1 font-semibold"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              )}
            </div>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste target job description, responsibilities, technical requirements, and required qualifications here..."
              rows={12}
              className="w-full flex-1 p-3.5 rounded-2xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 text-xs sm:text-sm font-sans text-slate-800 resize-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Action Controls & Analyze Button */}
      <div className="mt-8 text-center max-w-xl mx-auto space-y-3">
        <button
          type="button"
          disabled={!canSubmit || isLoading}
          onClick={onAnalyze}
          className={`w-full py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center space-x-3 shadow-xl transition-all transform ${
            !canSubmit || isLoading
              ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
              : 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-800 text-white shadow-violet-200 hover:shadow-violet-300 hover:scale-[1.01] active:scale-[0.99]'
          }`}
        >
          <Sparkles className="w-5 h-5 text-violet-200 animate-spin-slow" />
          <span>{isLoading ? 'Analyzing Resume with Google Gemini AI...' : 'Analyze Resume with CareerLens AI'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Empty State / Status guidance */}
        <p className="text-xs text-slate-500">
          {!canSubmit
            ? 'Please upload a PDF/TXT resume or enter at least 20 characters of resume text to analyze.'
            : resumeMode === 'file'
            ? `Ready to audit ${fileUpload?.name}`
            : 'Ready to audit candidate profile'}
        </p>

        {/* Reset / Clear All Inputs Button */}
        {(resumeText || fileUpload || jobDescription) && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onClearAll}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Both Inputs</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
