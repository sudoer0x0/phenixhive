"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ShieldAlert,
  ScanSearch,
  Network,
  Code2,
  Cloud,
  FileCheck,
  Activity,
  LifeBuoy,
  Compass,
  GraduationCap,
  ArrowRight,
  Shield,
  Layers,
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/content";
import { ServiceModal } from "./service-modal";

interface ServicesProps {
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export function Services({ onSelectServiceForContact }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Offensive Security",
    "Infrastructure & Cloud",
    "Governance & Strategy",
    "SecOps & Response",
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Offensive Security") {
      return (
        service.category === "Offensive Security" ||
        service.category === "AppSec" ||
        service.category === "Security Hygiene"
      );
    }
    if (activeFilter === "Infrastructure & Cloud") {
      return service.category === "Infrastructure" || service.category === "Cloud";
    }
    if (activeFilter === "Governance & Strategy") {
      return (
        service.category === "Governance & GRC" ||
        service.category === "Strategy & GRC" ||
        service.category === "Human Defense"
      );
    }
    if (activeFilter === "SecOps & Response") {
      return (
        service.category === "SecOps" || service.category === "Response & Resilience"
      );
    }
    return true;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-red-400" />;
      case "ScanSearch":
        return <ScanSearch className="w-5 h-5 text-red-400" />;
      case "Network":
        return <Network className="w-5 h-5 text-blue-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case "CloudShield":
        return <Cloud className="w-5 h-5 text-cyan-400" />;
      case "FileCheck":
        return <FileCheck className="w-5 h-5 text-amber-400" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-purple-400" />;
      case "LifeBuoy":
        return <LifeBuoy className="w-5 h-5 text-red-400" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-blue-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      default:
        return <Shield className="w-5 h-5 text-red-400" />;
    }
  };

  const handleSelectService = (title: string) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(title);
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="services" className="py-28 bg-[#070B14] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with smooth scroll entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-red-400 text-xs font-mono font-medium mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Enterprise Security Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Comprehensive Defense Across Your Entire Attack Surface
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From offensive penetration testing to continuous compliance and crisis response,
            PhenixHive delivers rigorous technical protection tailored to enterprise risk models.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-slate-800 text-white border border-slate-600 font-semibold shadow-md shadow-black/30"
                  : "bg-slate-950/70 text-slate-400 hover:text-slate-200 border border-slate-850 hover:bg-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Services Grid (10 Services) with Staggered Scroll Animation */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between rounded-xl bg-[#0B1220] border border-slate-800/90 p-6 hover:border-slate-700 hover:bg-[#0E1729] transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/50"
              >
                <div>
                  {/* Card Top: Category and Icon */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 group-hover:border-red-500/40 group-hover:scale-105 transition-all duration-300">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/70 mb-6">
                    {service.keyOutcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-red-400 font-bold shrink-0 mt-0.5">›</span>
                        <span className="line-clamp-1">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none focus:underline"
                  >
                    <span>Scope & Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectService(service.title)}
                    className="text-[11px] font-medium text-slate-400 hover:text-red-400 px-2.5 py-1 rounded bg-slate-900/60 hover:bg-slate-900 border border-slate-800 transition-colors"
                  >
                    Select Service
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Modal for Service Scope */}
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectService={handleSelectService}
        />
      </div>
    </section>
  );
}
