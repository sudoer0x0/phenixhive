"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/content";

export function CtaBanner() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#070B14] via-[#0B1220] to-[#070B14] border-b border-slate-800/80 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-950/25 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-slate-700/80 bg-gradient-to-br from-[#0F172A] via-[#0B1220] to-[#080D1A] p-8 sm:p-14 shadow-2xl shadow-black/60 relative overflow-hidden"
        >
          {/* Subtle top indicator bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-blue-600" />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-red-400 text-xs font-mono font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Ready to Harden Your Perimeter?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Don&apos;t Wait for a Breach to Discover Your Security Blind Spots.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Partner with PhenixHive to identify vulnerabilities, satisfy client compliance
              requirements, and build enduring cyber resilience for your enterprise.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold tracking-wide text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all shadow-lg shadow-red-950/60 hover:shadow-red-900/80 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <span>Request a Security Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href={COMPANY_DETAILS.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-sm font-semibold tracking-wide text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-700/60 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Confidential Scoping Call
              </span>
              <span>•</span>
              <span>No Obligation Proposal</span>
              <span>•</span>
              <span>Direct Line: {COMPANY_DETAILS.phone}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
