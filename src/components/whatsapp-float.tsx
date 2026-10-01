"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/content";

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Tooltip greeting */}
      {showTooltip && (
        <div className="relative hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0B1220] border border-emerald-600/50 shadow-xl shadow-black/60 text-xs text-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat with PhenixHive on WhatsApp</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={COMPANY_DETAILS.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 hover:shadow-emerald-900/80 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Chat directly with PhenixHive on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 border-2 border-emerald-600" />
        </div>
        <span className="text-xs font-bold tracking-wide uppercase">WhatsApp</span>
      </a>
    </div>
  );
}
