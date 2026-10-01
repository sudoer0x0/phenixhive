"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  Cpu,
  HeartPulse,
  Building2,
  GraduationCap,
  ShoppingBag,
  Store,
  ShieldCheck,
  FileText,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { INDUSTRIES, IndustryItem } from "@/data/content";

export function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES[0]);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Landmark":
        return <Landmark className="w-4 h-4" />;
      case "Cpu":
        return <Cpu className="w-4 h-4" />;
      case "HeartPulse":
        return <HeartPulse className="w-4 h-4" />;
      case "Building2":
        return <Building2 className="w-4 h-4" />;
      case "GraduationCap":
        return <GraduationCap className="w-4 h-4" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-4 h-4" />;
      case "Store":
        return <Store className="w-4 h-4" />;
      default:
        return <ShieldCheck className="w-4 h-4" />;
    }
  };

  return (
    <section id="industries" className="py-28 bg-[#070B14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-red-400 text-xs font-mono font-medium mb-4">
            <span>Tailored Threat Models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Security Aligned with Your Industry&apos;s Regulatory Reality
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Different sectors face fundamentally different adversary profiles and compliance burdens.
            PhenixHive calibrates defenses to your exact operational and legal environment.
          </p>
        </motion.div>

        {/* Industry Interactive Tabs / Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: List of Industries */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-none"
          >
            {INDUSTRIES.map((ind) => {
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-lg border text-sm font-medium transition-all duration-200 whitespace-nowrap lg:whitespace-normal ${
                    isSelected
                      ? "bg-slate-800/90 border-slate-600 text-white shadow-lg shadow-black/40 font-semibold"
                      : "bg-[#0B1220]/70 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/80"
                  }`}
                >
                  <div
                    className={`p-2 rounded-md transition-colors ${
                      isSelected ? "bg-red-600 text-white shadow-sm" : "bg-slate-900 text-slate-400"
                    }`}
                  >
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <span className="flex-1 truncate">{ind.name}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Right Column: Active Industry Deep Dive with AnimatePresence */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl bg-[#0B1220] border border-slate-800 p-6 sm:p-8 shadow-2xl shadow-black/40"
              >
                <div className="pb-6 border-b border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider">
                    <span>Industry Solution Profile</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {selectedIndustry.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {selectedIndustry.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
                    {selectedIndustry.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {/* Primary Threat Landscape */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      <span>Sector Threat Vectors</span>
                    </div>
                    <div className="space-y-2">
                      {selectedIndustry.threatLandscape.map((threat, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 leading-snug flex items-start gap-2"
                        >
                          <span className="text-red-400 font-bold shrink-0">•</span>
                          <span>{threat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Compliance Frameworks & Benchmarks */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                      <FileText className="w-4 h-4 text-blue-400" />
                      <span>Regulatory & Governance Standards</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedIndustry.complianceFrameworks.map((framework, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300 font-medium"
                        >
                          {framework}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Recommended Controls</span>
                      </div>
                      <ul className="space-y-1.5">
                        {selectedIndustry.protectiveSolutions.map((sol, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                            <span className="text-emerald-400 font-bold">✓</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Sector CTA */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 font-mono">
                    Need a scoped threat assessment for {selectedIndustry.name}?
                  </span>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 px-4 py-2.5 rounded-md transition-colors shadow-md shadow-red-950/40"
                  >
                    <span>Discuss {selectedIndustry.name} Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
