"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Shield, PhoneCall } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/content";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Industries", href: "#industries" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070B14]/90 backdrop-blur-md border-b border-[#1E293B]/80 py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name - Seamless, borderless */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1"
          >
            <div className="relative w-9 h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo-emblem.png"
                alt="PhenixHive Cybersecurity Emblem"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(239,68,68,0.25)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white uppercase group-hover:text-red-400 transition-colors">
                PHENIX<span className="text-red-500">HIVE</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium -mt-1">
                Cyber Defense
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                className="relative text-sm font-medium text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800/50 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </motion.a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-slate-800/40 transition-colors"
              title="Call PhenixHive"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-400" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:bg-red-700 px-4 py-2.5 rounded-md transition-all shadow-md shadow-red-950/60 hover:shadow-red-900/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              className="text-xs font-semibold uppercase tracking-wider text-white bg-red-600 px-3 py-1.5 rounded-md"
            >
              Expert
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-slate-800 bg-[#070B14]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800/60 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex items-center gap-2.5 text-sm text-slate-300 px-3 py-2 rounded-md bg-slate-900/50"
              >
                <PhoneCall className="w-4 h-4 text-red-400" />
                <span>{COMPANY_DETAILS.phoneInternational}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 py-3 rounded-md transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Talk to an Expert</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
