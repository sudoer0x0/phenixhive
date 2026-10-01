"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-28 bg-[#070B14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Brand Story with scroll animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl border border-slate-800 bg-[#0B1220] p-8 shadow-2xl relative overflow-hidden">
              {/* Background ambient red glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-950/30 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-6">
                {/* Clean borderless transparent emblem */}
                <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                  <Image
                    src="/logo-emblem.png"
                    alt="PhenixHive Emblem"
                    fill
                    className="object-contain drop-shadow-[0_0_16px_rgba(239,68,68,0.35)]"
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
          </motion.div>

          {/* Right Column: Mission and Principles with scroll animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
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
              {[
                {
                  icon: Terminal,
                  color: "text-red-400",
                  title: "Hands-On Technical Expertise",
                  desc: "We conduct genuine manual testing and deep architectural analysis. Automated tools serve as initial discovery, but our value lies in human-driven threat exploration that models real-world adversary behavior.",
                },
                {
                  icon: ShieldCheck,
                  color: "text-blue-400",
                  title: "Zero-Judgment Collaborative Remediation",
                  desc: "Discovering vulnerabilities is only half the battle. We treat your engineering and operations teams as trusted partners, working shoulder-to-shoulder to explain root causes and verify code-level remediation.",
                },
                {
                  icon: Eye,
                  color: "text-emerald-400",
                  title: "Uncompromising Ethical Standards & Privacy",
                  desc: "All engagements operate under stringent non-disclosure agreements (NDAs) and rigorous operational security protocols. Your proprietary data and vulnerability details remain completely confidential.",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3.5 group p-2 rounded-lg hover:bg-slate-900/40 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 mt-1 shrink-0 group-hover:border-slate-700 transition-colors">
                      <Icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
