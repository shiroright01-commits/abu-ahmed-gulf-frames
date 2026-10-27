"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import ShutterComparison from "@/components/ShutterComparison";
import {
  PanelsTopLeft,
  Sliders,
  ChefHat,
  DoorOpen,
  Layers,
  Sparkles,
  PhoneCall,
  MessageCircle,
  ShieldCheck,
  Compass,
} from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Engineering Services" },
    { id: "windows", label: "Glazing & Windows" },
    { id: "kitchens", label: "Modular Kitchen Fit-Outs" },
    { id: "doors", label: "Doors & Entrances" },
    { id: "shutters", label: "Shutter Engineering" },
    { id: "custom", label: "Custom Facades" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-900 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Abu Ahmed Gulf Frames - Turnkey Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Architectural Engineering <span className="gold-gradient-text">Services</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We provide bespoke architectural aluminum engineering, fabrication, and precision installation services. We do not sell retail off-the-shelf products. Every project is an end-to-end commissioned service tailored to your architectural drawings and site specifications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "gold-gradient-bg text-charcoal-950 font-bold shadow-lg shadow-gold-500/10"
                  : "bg-charcoal-900 text-slate-300 hover:text-white border border-charcoal-700 hover:border-gold-400/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Shutter Mechanisms Section in Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <ShutterComparison />
      </section>

      {/* Bottom Conversion Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="charcoal-gradient-card rounded-2xl p-8 border border-charcoal-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl font-heading font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <span>Need Architectural Shop Drawings or On-Site Laser Survey?</span>
            </h3>
            <p className="text-xs text-slate-400">
              Master Craftsman Abu Ahmed personally conducts on-site laser surveys, structural anchorage inspections, and hardware calibration across Pakistan.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923001234567?text=Hello%20Abu%20Ahmed%20Gulf%20Frames,%20I%20would%20like%20to%20book%20an%20on-site%20laser%20survey%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-bg text-charcoal-950 font-bold px-5 py-2.5 rounded-xl text-xs hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-charcoal-950" />
              <span>Book Site Survey on WhatsApp</span>
            </a>
            <a
              href="tel:+923001234567"
              className="bg-charcoal-800 border border-charcoal-600 hover:border-gold-400 text-white font-medium px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
              <span>Direct Hotline</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
