"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Eye, Terminal, Users2, ShieldAlert } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/content";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#070B14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Brand Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-[#0B1220] p-8 shadow-2xl relative overflow-hidden">
              {/* Background ambient red glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-950/30 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-xl bg-white p-1 border border-slate-700 overflow-hidden shadow-lg">
                  <Image
                    src="/logo.jpeg"
                    alt="PhenixHive Emblem"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white uppercase">
                    PHENIX<span className="text-red-500">HIVE</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Resilient Cyber Defense
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  The name <strong className="text-white">PhenixHive</strong> represents two essential pillars of modern defense: the <span className="text-red-400">Phoenix</span>, symbolizing resilience, swift recovery, and continuous evolution after threats arise; and the <span className="text-blue-400">Hive</span>, representing interconnected, layered defense where every system, endpoint, and user works in harmony to protect the perimeter.
                </p>
                <p className="text-slate-400">
                  We work closely with leadership teams, IT managers, and software developers to demystify complex security requirements, providing uncompromised transparency and defensible security posture.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-xs font-mono text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase">Core Tenet</div>
                  <div className="font-semibold text-white mt-1">Defensive Rigor</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase">Engagement</div>
                  <div className="font-semibold text-white mt-1">Strict Confidentiality</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-red-400 text-xs font-mono font-medium">
              <span>About PhenixHive</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Built on Technical Integrity & Dedicated to Business Protection
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              PhenixHive was established with a singular objective: to provide growing and established organizations with accessible, enterprise-grade cybersecurity expertise that moves beyond theoretical compliance into tangible, hands-on risk reduction.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 mt-1 shrink-0">
                  <Terminal className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Hands-On Technical Expertise
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We conduct genuine manual testing and deep architectural analysis. Automated tools serve as initial discovery, but our value lies in human-driven threat exploration that models real-world adversary behavior.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 mt-1 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Zero-Judgment Collaborative Remediation
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Discovering vulnerabilities is only half the battle. We treat your engineering and operations teams as trusted partners, working shoulder-to-shoulder to explain root causes and verify code-level remediation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 mt-1 shrink-0">
                  <Eye className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Uncompromising Ethical Standards & Privacy
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    All engagements operate under stringent non-disclosure agreements (NDAs) and rigorous operational security protocols. Your proprietary data and vulnerability details remain completely confidential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
