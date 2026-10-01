"use client";

import React, { useEffect } from "react";
import { X, CheckCircle, ArrowRight, Shield, Layers, FileText } from "lucide-react";
import { ServiceItem } from "@/data/content";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export function ServiceModal({ service, onClose, onSelectService }: ServiceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-xl border border-slate-700 bg-[#0B1220] shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden text-left">
        {/* Subtle top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-blue-600" />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-red-400 mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>{service.category}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{service.badge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 max-h-[70vh] overflow-y-auto pr-1">
          {/* Detailed description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Overview & Strategic Value
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Business Outcomes */}
          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-red-400" />
              <span>Measurable Business Outcomes</span>
            </h4>
            <ul className="space-y-2.5">
              {service.keyOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Methodology */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Execution Methodology</span>
              </h4>
              <ul className="space-y-2">
                {service.methodology.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-mono"
                  >
                    <span className="text-slate-500">0{idx + 1}.</span>
                    <span className="text-slate-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Client Deliverables</span>
              </h4>
              <ul className="space-y-2">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            Tailored scoping available based on asset count & compliance requirements.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onSelectService(service.title);
                onClose();
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 transition-colors shadow-md shadow-red-950/40"
            >
              <span>Inquire Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
