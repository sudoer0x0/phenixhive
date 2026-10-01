"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  ShieldAlert,
  Wrench,
  TrendingDown,
  Lock,
  RefreshCw,
  Briefcase,
  CheckCircle2,
  ArrowRight,
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="why-us" className="py-28 bg-[#0A0F1D] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
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
        </motion.div>

        {/* 6 Value Pillars Grid with Staggered Scroll Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {VALUE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-xl bg-[#0B1220] border border-slate-800/90 p-7 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/20 hover:shadow-2xl"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-slate-700 transition-all duration-300">
                  {getPillarIcon(pillar.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-red-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.details}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Executive Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 rounded-xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-semibold text-white">
              Need a clear, independent evaluation of your company&apos;s current posture?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with a security practitioner about scoping an initial assessment.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors whitespace-nowrap shadow-md"
          >
            <span>Request Technical Consult</span>
            <ArrowRight className="w-3.5 h-3.5 text-red-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
