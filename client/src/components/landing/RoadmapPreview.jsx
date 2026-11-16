import React from 'react';
import { Milestone, Clock, Rocket, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export default function RoadmapPreview({ onStartAudit }) {
  const milestones = [
    {
      sprint: 'Sprint 1 • Weeks 1 – 2',
      skill: 'Event-Driven Microservices with Kafka',
      objective: 'Master producer/consumer partitions, schema registries, and idempotent consumer semantics.',
      project: 'Build a distributed order-matching engine streaming 10,000 mock trade events via Kafka & Node.js.',
      resources: ['Confluent Kafka Docs', 'Distributed Systems Patterns']
    },
    {
      sprint: 'Sprint 2 • Weeks 3 – 4',
      skill: 'Kubernetes Container Orchestration',
      objective: 'Configure multi-node clusters, ingress controllers, horizontal pod autoscaling, and Helm charts.',
      project: 'Deploy a multi-tier microservice with automated rolling updates, secrets management, and health probes.',
      resources: ['Kubernetes Official Docs', 'Cloud Native Computing Foundation (CNCF)']
    },
    {
      sprint: 'Sprint 3 • Month 2',
      skill: 'System Design & High-Throughput Caching',
      objective: 'Architect distributed Redis caching with cache-aside, write-through, and cache stampede protection.',
      project: 'Implement a high-concurrency leaderboard service bench-tested at 20k RPS with k6.',
      resources: ['Redis University', 'Martin Kleppmann: Designing Data-Intensive Applications']
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/10 no-print">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60 mb-4">
          <Milestone className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
          <span>Execution Blueprint</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Personalized Career Roadmap
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Don't just discover your gaps—close them with phased implementation sprints, hands-on capstone briefs, and curated documentation.
        </p>
      </div>

      {/* Connected Milestone Timeline Preview */}
      <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-violet-200 dark:border-violet-900/60 space-y-8 my-6 ml-2 sm:ml-4">
        {milestones.map((item, idx) => (
          <div key={idx} className="relative group">
            
            {/* Number Bead */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-pink-500 text-white flex items-center justify-center text-xs font-black ring-4 ring-white dark:ring-slate-950 shadow-md">
              {idx + 1}
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 shadow-lg hover:border-violet-400 dark:hover:border-violet-500/50 transition-all">
              
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-violet-700 dark:text-violet-300 bg-violet-50 dark:bg-violet-950/80 px-3 py-1 rounded-full border border-violet-200 dark:border-violet-800/60 font-mono">
                  <Clock className="w-3.5 h-3.5 text-violet-500" />
                  <span>{item.sprint}</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Target Competency #{idx + 1}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.skill}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                <span className="font-semibold text-slate-900 dark:text-white">Sprint Goal: </span>
                {item.objective}
              </p>

              {/* Capstone Project Box */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/10 mb-3.5">
                <div className="text-xs font-bold text-violet-700 dark:text-violet-300 flex items-center space-x-2 mb-1.5">
                  <Rocket className="w-4 h-4 text-pink-500" />
                  <span>Hands-On Capstone Project:</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                  {item.project}
                </p>
              </div>

              {/* Resources */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200/60 dark:border-white/5">
                <span className="text-[11px] font-semibold text-slate-400 flex items-center space-x-1">
                  <BookOpen className="w-3 h-3 text-slate-400" />
                  <span>Recommended References:</span>
                </span>
                {item.resources.map((res, rIdx) => (
                  <span
                    key={rIdx}
                    className="text-[11px] text-slate-700 dark:text-slate-300 font-medium bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 rounded-lg border border-slate-200/60 dark:border-white/10"
                  >
                    {res}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
