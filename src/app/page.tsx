"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Industries } from "@/components/industries";
import { SecurityProcess } from "@/components/process";
import { About } from "@/components/about";
import { CtaBanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  const [selectedServiceForContact, setSelectedServiceForContact] =
    useState<string>("Penetration Testing");

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#070B14] text-slate-100 relative">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with technical telemetry board */}
        <Hero />

        {/* 10 Realistic Cybersecurity Services & Interactive Scope Modal */}
        <Services onSelectServiceForContact={setSelectedServiceForContact} />

        {/* Why PhenixHive: 6 Value Pillars */}
        <WhyUs />

        {/* Industries Served & Sector Profiles */}
        <Industries />

        {/* 5-Stage Security Process: Assess -> Identify -> Protect -> Monitor -> Respond */}
        <SecurityProcess />

        {/* About PhenixHive: Authentic story, Phoenix & Hive symbology */}
        <About />

        {/* Call to Action Banner */}
        <CtaBanner />

        {/* Contact Form & Direct Inquiries */}
        <Contact preselectedService={selectedServiceForContact} />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Direct Connect Button */}
      <WhatsAppFloat />
    </div>
  );
}
