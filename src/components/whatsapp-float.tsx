"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/content";

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group"
    >
      {/* Tooltip greeting with AnimatePresence */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B1220] border border-emerald-600/50 shadow-2xl shadow-black/80 text-xs text-slate-200"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat with a PhenixHive Expert</span>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-white ml-1.5 p-0.5"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button with smooth pulsing radar */}
      <motion.a
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={COMPANY_DETAILS.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/70 hover:shadow-emerald-900/90 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Chat directly with PhenixHive on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 blur-sm pointer-events-none animate-pulse" />

        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 border-2 border-emerald-600" />
        </div>
        <span className="text-xs font-bold tracking-wide uppercase">WhatsApp</span>
      </motion.a>
    </motion.div>
  );
}
