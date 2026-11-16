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

  // Quick Demo Loader for fast college presentation testing
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

    // Scroll smoothly to input section
    window.scrollTo({ top: 400, behavior: 'smooth' });
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
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        onReset={handleReset}
        hasResults={Boolean(analysisResult)}
        onLoadDemo={() => handleQuickDemo('fullstack')}
      />

      <main className="flex-1 pb-16">
        {/* Attractive Landing Page & Project Introduction */}
        <Hero
          onQuickDemo={handleQuickDemo}
          hasResults={Boolean(analysisResult)}
        />

        {/* Input Section (PDF / TXT Upload & Job Description) */}
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

        {/* Multi-Stage Animated Loading Scanner */}
        {isLoading && <LoadingSkeleton />}

        {/* Results Dashboard */}
        {analysisResult && !isLoading && (
          <div id="analysis-results" className="max-w-6xl mx-auto px-4 pt-8">
            {/* 1. Score Card with 5-dimension breakdown & advisory disclaimer */}
            <ScoreOverview
              data={analysisResult}
              onOpenReport={() => setIsReportOpen(true)}
            />

            {/* 2 & 3. Skill Matching & Missing Skills */}
            <SkillsAnalysis
              matchingSkills={analysisResult.matching_skills || analysisResult.matchingSkills}
              missingSkills={analysisResult.missing_skills || analysisResult.missingSkills}
            />

            {/* 4. Strengths & Weaknesses */}
            <StrengthsWeaknesses
              strengths={analysisResult.strengths}
              weaknesses={analysisResult.weaknesses}
            />

            {/* 4b. Actionable Improvement Cards (Google XYZ rewrites) */}
            <Recommendations
              suggestions={analysisResult.improvement_suggestions || analysisResult.improvementSuggestions}
            />

            {/* 5. Career Recommendations (Job Roles) */}
            <RoleMatches
              roles={analysisResult.recommended_job_roles || analysisResult.suitableRoles}
            />

            {/* 6. Learning Roadmap Timeline */}
            <RoadmapTimeline
              roadmap={analysisResult.personalized_learning_roadmap || analysisResult.learningRoadmap}
            />

            {/* Bottom Actions Bar with Reset Button */}
            <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Finished Reviewing Audit?</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  You can download the full executive report or reset to test another resume.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setIsReportOpen(true)}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4 text-violet-300" />
                  <span>Download Report</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-rose-50 hover:text-rose-700 border border-slate-200 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset Analysis</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Downloadable PDF & Markdown Report Modal */}
      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        data={analysisResult}
      />

      {/* Professional SaaS Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8 text-xs no-print">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white">CareerLens AI</span>
            <span>&bull;</span>
            <span>College Project Demonstration MVP</span>
          </div>
          <div className="flex items-center space-x-4 text-slate-500">
            <span>React 19 &bull; Vite &bull; Tailwind CSS &bull; Node.js Express &bull; Google Gemini</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
