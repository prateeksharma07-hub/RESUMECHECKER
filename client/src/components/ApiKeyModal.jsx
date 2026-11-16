import React, { useState } from 'react';
import { X, Key, ShieldCheck, Check, ExternalLink, AlertCircle } from 'lucide-react';

export default function ApiKeyModal({ isOpen, onClose, apiKey, onSaveApiKey, isServerConfigured }) {
  const [inputVal, setInputVal] = useState(apiKey || '');
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveApiKey(inputVal.trim());
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 800);
  };

  const handleClear = () => {
    setInputVal('');
    onSaveApiKey('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Gemini API Key</h3>
              <p className="text-xs text-slate-500">Secure Server-Side Integration</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Server Status Pill */}
        <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
          <span>Backend Server Status:</span>
          {isServerConfigured ? (
            <span className="font-semibold text-emerald-600 flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Configured via .env</span>
            </span>
          ) : (
            <span className="font-semibold text-amber-600">
              Fallback Engine Active
            </span>
          )}
        </div>

        <p className="text-xs text-slate-600 mb-3 leading-relaxed">
          You can paste your personal Google Gemini API key below for live evaluation, or set <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700">GEMINI_API_KEY</code> in <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-700">server/.env</code>. The key is securely forwarded to the Express backend and is never exposed in client bundles.
        </p>

        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Custom Gemini API Key:
            </label>
            <input
              type="password"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center space-x-1"
            >
              <span>Get Free Gemini Key</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <div className="flex items-center space-x-2">
              {apiKey && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all flex items-center space-x-1"
              >
                {saved ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <span>Save Key</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
