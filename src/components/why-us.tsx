"use client";

import React from "react";
import {
  ShieldAlert,
  Wrench,
  TrendingDown,
  Lock,
  RefreshCw,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { VALUE_PILLARS } from "@/data/content";

export function WhyUs() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-red-400" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-blue-400" />;
      case "TrendingDown":
        return <TrendingDown className="w-5 h-5 text-emerald-400" />;
      case "Lock":
        return <Lock className="w-5 h-5 text-amber-400" />;
      case "RefreshCw":
        return <RefreshCw className="w-5 h-5 text-purple-400" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#0A0F1D] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-red-400 text-xs font-mono font-medium mb-4">
            <span>Our Defensive Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Security Engineered for Real-World Resilience, Not Compliance Theater
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We reject checkbox security and fear-mongering tactics. Our approach bridges the gap
            between executive risk priorities and technical engineering realities.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#0B1220] border border-slate-800/90 p-7 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-5">
                  {getPillarIcon(pillar.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5">{pillar.title}</h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Executive Assurance Banner */}
        <div className="mt-12 rounded-xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-semibold text-white">
              Need a clear, independent evaluation of your company&apos;s current posture?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with a security practitioner about scoping an initial assessment.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors whitespace-nowrap"
          >
            <span>Request Technical Consult</span>
          </a>
        </div>
      </div>
    </section>
  );
}
