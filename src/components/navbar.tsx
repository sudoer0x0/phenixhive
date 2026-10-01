"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070B14]/90 backdrop-blur-md border-b border-[#1E293B]/80 py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 border border-slate-700/60 shadow-md group-hover:border-red-500/50 transition-colors">
              <Image
                src="/logo.jpeg"
                alt="PhenixHive Cybersecurity Logo"
                fill
                className="object-contain"
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                {link.name}
              </a>
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

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:bg-red-700 px-4 py-2.5 rounded-md transition-all duration-150 shadow-sm shadow-red-900/40 hover:shadow-red-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#070B14]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
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
        </div>
      )}
    </header>
  );
}
