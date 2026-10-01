"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Lock, Activity, Server, FileCode, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid bg-radial-glow border-b border-slate-800/80">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-950/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-950/15 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="tracking-wide">Enterprise Cyber Defense & Risk Advisory</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Protect Your Systems, Networks & Sensitive Data with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-red-400">
                Proactive Rigor.
              </span>
            </h1>

            {/* Professional Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              PhenixHive delivers practical, industry-standard cybersecurity solutions designed to
              uncover critical vulnerabilities, harden digital architecture, and maintain regulatory
              resilience before threat actors can strike.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md text-sm font-semibold tracking-wide text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all shadow-md shadow-red-950/50 hover:shadow-red-900/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold tracking-wide text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* High-trust assurance signals */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                <span>Zero False-Positive Audits</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                <span>Continuous Surface Defense</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                <span>Actionable Remediation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Technical Telemetry Console (Subtle, professional, no hacker clichés) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-[#0B1220]/95 p-5 shadow-2xl shadow-black/80 space-y-4">
              {/* Header bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider">
                    PhenixHive Posture Shield
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  STATUS: SECURED
                </span>
              </div>

              {/* Metric grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/90">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Attack Surface</span>
                    <Server className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="text-sm font-semibold text-white font-mono">100% Mapped</div>
                  <div className="text-[10px] text-emerald-400 font-medium mt-0.5">Continuous Scoping</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/90">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Access Control</span>
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-sm font-semibold text-white font-mono">Zero-Trust Strict</div>
                  <div className="text-[10px] text-emerald-400 font-medium mt-0.5">Least-Privilege Active</div>
                </div>
              </div>

              {/* Threat Mitigation Pipeline Simulation */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-medium text-slate-400 flex items-center justify-between">
                  <span>Defensive Coverage Vectors</span>
                  <span className="text-[11px] text-slate-300 font-mono">5 Active Layers</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-200">Web & API Endpoints</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-400">OWASP Hardened</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-blue-400" />
                      <span className="text-slate-200">Cloud & Kubernetes IAM</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-400">Posture Audited</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <FileCode className="w-4 h-4 text-red-400" />
                      <span className="text-slate-200">External Perimeter</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-400">Zero Unauth Ingress</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-slate-900/50 border border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-purple-400" />
                      <span className="text-slate-200">Telemetry & Triage</span>
                    </div>
                    <span className="font-mono text-[11px] text-emerald-400">24/7 Monitored</span>
                  </div>
                </div>
              </div>

              {/* Bottom status footer */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Security Engine Active
                </span>
                <span className="text-slate-300">Methodology: NIST / OWASP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
