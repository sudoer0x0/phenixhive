"use client";

import React, { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Activity,
  Server,
  FileCode,
  CheckCircle2,
  Radio,
  Zap,
} from "lucide-react";

export function Hero() {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-cyber-grid bg-radial-glow border-b border-slate-800/80">
      {/* Dynamic ambient lighting that breathes */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-950/20 blur-[130px] pointer-events-none rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-blue-950/20 blur-[120px] pointer-events-none rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Trust Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs font-medium shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                <span className="tracking-wide">Enterprise Cyber Defense & Risk Advisory</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Protect Your Systems, Networks & Sensitive Data with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-red-400">
                Proactive Rigor.
              </span>
            </motion.h1>

            {/* Professional Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              PhenixHive delivers practical, industry-standard cybersecurity solutions designed to
              uncover critical vulnerabilities, harden digital architecture, and maintain regulatory
              resilience before threat actors can strike.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md text-sm font-semibold tracking-wide text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all shadow-lg shadow-red-950/60 hover:shadow-red-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold tracking-wide text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                <span>Explore Services</span>
              </motion.a>
            </motion.div>

            {/* High-trust assurance signals */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
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
            </motion.div>
          </motion.div>

          {/* Right Column: Clean Animated Telemetry Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-xl border border-slate-700/70 bg-[#0B1220]/95 p-5 shadow-2xl shadow-black/80 space-y-4 relative overflow-hidden backdrop-blur-sm">
              {/* Subtle scanning beam */}
              <motion.div
                animate={{ y: [0, 280, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent pointer-events-none"
              />

              {/* Header bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-mono text-slate-200 font-semibold uppercase tracking-wider">
                    PhenixHive Posture Shield
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-emerald-400 border border-slate-700 flex items-center gap-1">
                  <Radio className="w-3 h-3 animate-pulse" />
                  STATUS: ACTIVE
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
                  <span className="text-[11px] text-slate-300 font-mono">4 Core Enclaves</span>
                </div>

                <div className="space-y-2">
                  {[
                    { icon: ShieldCheck, color: "text-emerald-400", name: "Web & API Endpoints", badge: "OWASP Hardened" },
                    { icon: Server, color: "text-blue-400", name: "Cloud & Kubernetes IAM", badge: "Posture Audited" },
                    { icon: FileCode, color: "text-red-400", name: "External Perimeter", badge: "Zero Unauth Ingress" },
                    { icon: Activity, color: "text-purple-400", name: "Telemetry & Triage", badge: "24/7 Monitored" },
                  ].map((layer, idx) => {
                    const isPulsing = pulseIndex === idx;
                    const Icon = layer.icon;
                    return (
                      <motion.div
                        key={layer.name}
                        animate={isPulsing ? { borderColor: "rgba(239, 68, 68, 0.6)", backgroundColor: "rgba(15, 23, 42, 0.9)" } : {}}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-800 text-xs transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${layer.color}`} />
                          <span className="text-slate-200">{layer.name}</span>
                        </div>
                        <span className={`font-mono text-[11px] ${isPulsing ? "text-red-400 font-semibold" : "text-slate-400"}`}>
                          {layer.badge}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom status footer */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-emerald-400" />
                  Defense Telemetry Live
                </span>
                <span className="text-slate-300">Methodology: NIST / OWASP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
