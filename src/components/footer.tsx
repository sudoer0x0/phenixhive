"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, Shield } from "lucide-react";
import { COMPANY_DETAILS, SERVICES } from "@/data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05080F] border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#" className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-white p-0.5 border border-slate-700">
                <Image
                  src="/logo.jpeg"
                  alt="PhenixHive Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-white uppercase">
                  PHENIX<span className="text-red-500">HIVE</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium -mt-1">
                  Cyber Defense
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              PhenixHive delivers practical, high-impact cybersecurity services including penetration
              testing, vulnerability assessments, cloud hardening, and 24/7 security advisory for
              resilient businesses.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_DETAILS.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-mono"
                aria-label="PhenixHive on LinkedIn"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={COMPANY_DETAILS.tikTok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-mono"
                aria-label="PhenixHive on TikTok"
              >
                <span>TikTok</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#top" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Security Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why PhenixHive
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Security Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-white transition-colors line-clamp-1">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Operations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Contact & Advisory
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span className="truncate">{COMPANY_DETAILS.email}</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>{COMPANY_DETAILS.phoneInternational}</span>
              </a>

              <a
                href={COMPANY_DETAILS.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>WhatsApp Live Chat</span>
              </a>

              <div className="pt-2 text-[11px] text-slate-400">
                Operating Hours: 24/7 Monitoring & Incident Response Support
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} PhenixHive. All rights reserved. Professional Cybersecurity & Resilient Systems.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-mono">Confidentiality Assured</span>
            <span>•</span>
            <span className="text-slate-400 font-mono">Responsible Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
