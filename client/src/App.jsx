import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InputSection from './components/InputSection';
import LoadingSkeleton from './components/LoadingSkeleton';
import ScoreOverview from './components/ScoreOverview';
import SkillsAnalysis from './components/SkillsAnalysis';
import StrengthsWeaknesses from './components/StrengthsWeaknesses';
import Recommendations from './components/Recommendations';
import RoleMatches from './components/RoleMatches';
import RoadmapTimeline from './components/RoadmapTimeline';
import ReportModal from './components/ReportModal';
import AboutSection from './components/AboutSection';
import { SAMPLE_RESUMES, SAMPLE_JOB_DESCRIPTIONS } from './utils/presets';
import { RotateCcw, Download, Sparkles } from 'lucide-react';

export default function App() {
  const [resumeMode, setResumeMode] = useState('file'); // 'file' | 'text'
  const [resumeText, setResumeText] = useState('');
  const [fileUpload, setFileUpload] = useState(null); // File object (.pdf or .txt)
  const [jobDescription, setJobDescription] = useState('');
  
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isServerKeyConfigured, setIsServerKeyConfigured] = useState(false);
  
  // Sample Data Demo state
  const [isSampleLoaded, setIsSampleLoaded] = useState(false);

  // Check backend server health on mount
  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setIsServerKeyConfigured(Boolean(data.apiKeyConfigured));
      })
      .catch(err => {
        console.warn('Backend server not reachable yet or offline:', err.message);
      });
  }, []);

  // Quick Demo Loader for fast presentation testing
  const handleQuickDemo = (roleId) => {
    const resume = SAMPLE_RESUMES.find(r => r.id === roleId) || SAMPLE_RESUMES[0];
    const jd = SAMPLE_JOB_DESCRIPTIONS.find(j => j.id.startsWith(roleId)) || SAMPLE_JOB_DESCRIPTIONS[0];
    
    setIsSampleLoaded(true);
    setResumeMode('text');
    setFileUpload(null);
    setResumeText(resume.text);
    setJobDescription(jd.text);
    setAnalysisResult(null);
    setError(null);

    // Scroll smoothly to studio section
    const el = document.getElementById('studio-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  // Reset analysis back to clean state
  const handleReset = () => {
    setResumeText('');
    setFileUpload(null);
    setJobDescription('');
    setAnalysisResult(null);
    setError(null);
    setIsSampleLoaded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnalyze = async () => {
    setError(null);
    setIsLoading(true);

    try {
      let response;

      if (resumeMode === 'file' && fileUpload) {
        const formData = new FormData();
        formData.append('resumeFile', fileUpload);
        formData.append('jobDescription', jobDescription);

        response = await fetch('/api/analyze', {
          method: 'POST',
          body: formData,
        });
      } else {
        response = await fetch('/api/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            resumeText,
            jobDescription,
          }),
        });
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        setError({
          message: result.error || 'Failed to analyze resume. Please check your input.',
          setupGuide: result.setupGuide || null,
          code: result.code || null
        });
        return;
      }

      setAnalysisResult(result.data);

      // Smooth scroll to results
      setTimeout(() => {
        const resultsEl = document.getElementById('analysis-results');
        if (resultsEl) {
          resultsEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 250);

    } catch (err) {
      console.error('Analysis error:', err);
      setError({
        message: err.message || 'An unexpected error occurred. Please try again.',
        setupGuide: null
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#08090E] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 relative selection:bg-violet-500/30 selection:text-violet-900 dark:selection:text-violet-200">
      
      {/* Dynamic Floating Glass Navbar */}
      <Navbar
        onReset={handleReset}
        hasResults={Boolean(analysisResult)}
        onLoadDemo={() => handleQuickDemo('fullstack')}
      />

      <main className="flex-1 pb-16">
        {/* Multi-Color Fluid Ambient Hero */}
        <Hero
          onQuickDemo={handleQuickDemo}
          hasResults={Boolean(analysisResult)}
        />

        {/* Studio Input Section (PDF / TXT Upload & Job Description) */}
        <InputSection
          resumeMode={resumeMode}
          setResumeMode={setResumeMode}
          resumeText={resumeText}
          setResumeText={(val) => {
            setResumeText(val);
            if (isSampleLoaded) setIsSampleLoaded(false);
          }}
          fileUpload={fileUpload}
          setFileUpload={(file) => {
            setFileUpload(file);
            if (isSampleLoaded) setIsSampleLoaded(false);
          }}
          jobDescription={jobDescription}
          setJobDescription={(val) => {
            setJobDescription(val);
            if (isSampleLoaded) setIsSampleLoaded(false);
          }}
          onAnalyze={handleAnalyze}
          isLoading={isLoading}
          error={error}
          isSampleLoaded={isSampleLoaded}
          onLoadSample={() => handleQuickDemo('fullstack')}
          onClearAll={handleReset}
        />

        {/* Multi-Stage Animated Holographic Loading Scanner */}
        {isLoading && <LoadingSkeleton />}

        {/* Executive Analysis Results Dashboard */}
        {analysisResult && !isLoading && (
          <div id="analysis-results" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            
            {/* 1. Score Card with 5-dimension breakdown & advisory disclaimer */}
            <ScoreOverview
              data={analysisResult}
              onOpenReport={() => setIsReportOpen(true)}
            />

            {/* 2 & 3. Skill Gap Taxonomy Matrix */}
            <SkillsAnalysis
              matchingSkills={analysisResult.matching_skills || analysisResult.matchingSkills}
              missingSkills={analysisResult.missing_skills || analysisResult.missingSkills}
            />

            {/* 4. Strengths & Weaknesses (with missing details distinction) */}
            <StrengthsWeaknesses
              strengths={analysisResult.strengths}
              weaknesses={analysisResult.weaknesses}
            />

            {/* 4b. Actionable Google XYZ Bullet Rewrites */}
            <Recommendations
              suggestions={analysisResult.improvement_suggestions || analysisResult.improvementSuggestions}
            />

            {/* 5. Recommended Career Trajectories */}
            <RoleMatches
              roles={analysisResult.recommended_job_roles || analysisResult.suitableRoles}
            />

            {/* 6. Personalized Competency Roadmap Timeline */}
            <RoadmapTimeline
              roadmap={analysisResult.personalized_learning_roadmap || analysisResult.learningRoadmap}
            />

            {/* Bottom Actions Bar */}
            <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-card border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left transition-all">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Completed Candidate Audit</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Export the full executive dossier as a formatted PDF/Markdown or reset workspace to audit another profile.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setIsReportOpen(true)}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Download className="w-4 h-4 text-amber-400 dark:text-violet-600" />
                  <span>Download Dossier</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/10 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-700 dark:hover:text-rose-300 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset Analysis</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Platform Methodology, Google XYZ & Privacy Standards */}
        <AboutSection />
      </main>

      {/* Downloadable PDF & Markdown Dossier Modal */}
      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        data={analysisResult}
      />

      {/* Professional SaaS Multi-Theme Footer */}
      <footer className="bg-slate-100 dark:bg-[#05060A] text-slate-600 dark:text-slate-400 border-t border-slate-200/80 dark:border-white/10 py-10 text-xs no-print transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2.5">
            <span className="font-extrabold text-slate-900 dark:text-white">CareerLens AI</span>
            <span>&bull;</span>
            <span>Executive ATS Intelligence & Career Advisory MVP</span>
          </div>
          <div className="flex items-center space-x-4 text-slate-500 dark:text-slate-400">
            <span>React 19 &bull; Vite &bull; Tailwind CSS v4 &bull; Node.js Express &bull; Google Gemini 3.5</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
