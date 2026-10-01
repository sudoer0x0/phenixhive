"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  ShieldCheck,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  Lock,
} from "lucide-react";
import { COMPANY_DETAILS, SERVICES } from "@/data/content";

interface ContactProps {
  preselectedService?: string;
}

export function Contact({ preselectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: preselectedService || "Penetration Testing",
    message: "",
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry.");
      }

      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Penetration Testing",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message || "An unexpected error occurred. Please contact us directly at phenixhive@gmail.com"
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#070B14] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Security Assurance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-red-400 text-xs font-mono font-medium">
              <span>Initiate Engagement</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Consult with a PhenixHive Specialist
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you need an immediate penetration test, a vulnerability assessment, or ongoing
              security advisory, our team is ready to discuss your scope under strict confidentiality.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={COMPANY_DETAILS.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#0B1220] border border-slate-800 hover:border-emerald-600/70 hover:bg-[#0E1B28] transition-all"
              >
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    Instant WhatsApp Chat
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300">
                    {COMPANY_DETAILS.phoneInternational}
                  </div>
                  <div className="text-xs text-slate-400">Direct response for immediate inquiries</div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#0B1220] border border-slate-800 hover:border-blue-600/70 hover:bg-[#0E182D] transition-all"
              >
                <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800 text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    Direct Email
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300">
                    {COMPANY_DETAILS.email}
                  </div>
                  <div className="text-xs text-slate-400">Encrypted communications supported</div>
                </div>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#0B1220] border border-slate-800 hover:border-red-600/70 hover:bg-[#1A0E17] transition-all"
              >
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-red-400 uppercase tracking-wider font-semibold">
                    Phone Direct
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-red-300">
                    {COMPANY_DETAILS.phone}
                  </div>
                  <div className="text-xs text-slate-400">Mon - Fri, 8:00 AM - 6:00 PM WAT</div>
                </div>
              </a>
            </div>

            {/* Confidentiality Notice */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <Lock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Strict Non-Disclosure:</strong> All initial scope discussions and project specifications are held in strict commercial confidence. We routinely execute mutual NDAs prior to technical data exchange.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0B1220] border border-slate-800 p-6 sm:p-10 shadow-2xl shadow-black/40">
              <div className="pb-6 border-b border-slate-800 mb-6">
                <h3 className="text-xl font-bold text-white">Project Scoping & Inquiry Form</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Complete this form to receive a detailed technical consultation and scoping estimate.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-8 rounded-xl bg-slate-900 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Successfully Received</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to PhenixHive. Our cybersecurity advisory team has
                    received your scoping request and will contact you via email or phone within 24
                    business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div className="p-3.5 rounded-lg bg-red-950/50 border border-red-700/60 text-xs text-red-200 flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Vance"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Nexus Tech Ltd"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Business Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +234 800 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Needed Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Service or Assessment Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    >
                      <option value="General Security Assessment">General Security Assessment & Scoping</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.category})
                        </option>
                      ))}
                      <option value="Emergency Incident Response">Emergency Incident Response / Active Breach</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Scope Details or Security Needs <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your environment (e.g., web application URL count, cloud platforms used, compliance deadlines, or specific concerns)..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:bg-red-700 disabled:opacity-50 transition-all shadow-lg shadow-red-950/60 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      {status === "loading" ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin" />
                          <span>Transmitting Secure Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Scoping Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center pt-2">
                    <p className="text-[11px] text-slate-500">
                      We protect your personal data in accordance with strict privacy principles. No marketing spam.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
