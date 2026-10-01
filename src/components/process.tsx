"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Shield, Activity, Lock, Search, LifeBuoy } from "lucide-react";
import { PROCESS_STEPS } from "@/data/content";

export function SecurityProcess() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-4 h-4" />;
      case 1:
        return <Shield className="w-4 h-4" />;
      case 2:
        return <Lock className="w-4 h-4" />;
      case 3:
        return <Activity className="w-4 h-4" />;
      case 4:
        return <LifeBuoy className="w-4 h-4" />;
      default:
        return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#0A0F1D] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-red-400 text-xs font-mono font-medium mb-4">
            <span>Engagement Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            A Disciplined, Five-Stage Security Process
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our systematic framework guides clients from initial perimeter reconnaissance to
            perpetual threat surveillance and rapid incident containment.
          </p>
        </div>

        {/* Process Progression Stepper (Desktop & Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-150 flex flex-col justify-between ${
                  isActive
                    ? "bg-slate-800 border-red-500/80 shadow-lg shadow-black/40 ring-1 ring-red-500/40"
                    : "bg-[#0B1220] border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? "text-red-400" : "text-slate-500"
                    }`}
                  >
                    PHASE {step.step}
                  </span>
                  <div
                    className={`p-1.5 rounded ${
                      isActive ? "bg-red-600 text-white" : "bg-slate-900 text-slate-400"
                    }`}
                  >
                    {getStepIcon(idx)}
                  </div>
                </div>

                <div>
                  <h3
                    className={`text-sm sm:text-base font-bold tracking-tight ${
                      isActive ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">{step.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <div className="rounded-xl bg-[#0B1220] border border-slate-800 p-6 sm:p-10 shadow-xl shadow-black/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider">
                <span>Phase {PROCESS_STEPS[activeStep].step} Detailed Protocol</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {PROCESS_STEPS[activeStep].title}: {PROCESS_STEPS[activeStep].subtitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                  Key Operational Activities
                </h4>
                <div className="space-y-2.5">
                  {PROCESS_STEPS[activeStep].keyActivities.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Deliverable Box */}
              <div className="p-6 rounded-xl bg-slate-900 border border-slate-700/80 shadow-md">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Client Phase Deliverable
                </div>
                <div className="text-base sm:text-lg font-bold text-white mb-2">
                  {PROCESS_STEPS[activeStep].deliverable}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every stage concludes with an auditable, peer-reviewed artifact designed for both
                  executive sign-off and engineering remediation.
                </p>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white disabled:opacity-40 disabled:hover:text-slate-300 rounded border border-slate-800 bg-slate-900 transition-colors"
                >
                  Previous Phase
                </button>
                <button
                  type="button"
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 disabled:opacity-40 rounded transition-colors"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
