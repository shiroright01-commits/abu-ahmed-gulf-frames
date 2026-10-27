"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Wrench,
  Sparkles,
  CheckCircle2,
  Compass,
} from "lucide-react";
import QuickEstimator from "@/components/QuickEstimator";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: "Architectural Glazing & Window Installation Service",
    finish: "Deep Charcoal (#111827)",
    dimensions: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hello Master Craftsman Abu Ahmed (Abu Ahmed Gulf Frames),
I would like to request an on-site survey and turnkey service estimate:
- Full Name: ${formData.name || "Client"}
- Contact Number: ${formData.phone}
- Project Location / City: ${formData.city || "Not specified"}
- Commission Required: ${formData.service}
- Preferred Finish: ${formData.finish}
- Approximate Scope / Dimensions: ${formData.dimensions || "To be measured on-site"}
- Project Notes: ${formData.notes || "None"}

Please let me know when you can schedule an on-site engineering assessment.`;

    const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(message)}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-900 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Abu Ahmed Gulf Frames - Engineering Consultation
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Book Consultation With <span className="gold-gradient-text">Master Craftsman</span> Abu Ahmed
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Eliminate middleman confusion and get accurate turnkey service estimations directly from the master fabricator. Schedule an on-site laser survey or request a preliminary engineering estimate via WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Comprehensive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-10 border border-charcoal-700/80 shadow-2xl relative gold-border-glow">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-charcoal-800">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    Turnkey Service Consultation Request
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Submitted directly to Master Craftsman Abu Ahmed (Abu Ahmed Gulf Frames) via WhatsApp
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-charcoal-950 font-bold">
                  <Send className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lahore / Islamabad / Rawalpindi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      Select Turnkey Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="Architectural Glazing & Window Installation Service">
                        Architectural Glazing & Window Installation Service
                      </option>
                      <option value="Bespoke Modular Aluminum Kitchen Fit-Out Service">
                        Bespoke Modular Aluminum Kitchen Fit-Out Service
                      </option>
                      <option value="Heavy-Duty Architectural Door & Entrance Service">
                        Heavy-Duty Architectural Door & Entrance Service
                      </option>
                      <option value="Automated Motorized Shutter Engineering Service">
                        Automated Motorized Shutter Engineering Service
                      </option>
                      <option value="Manual Mechanical Shutter Fabrication Service">
                        Manual Mechanical Shutter Fabrication Service
                      </option>
                      <option value="Bespoke Curtain Wall & Shading Facade Service">
                        Bespoke Curtain Wall & Shading Facade Service
                      </option>
                      <option value="Emergency Shutter Repair Service">
                        Emergency Shutter Repair Service
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Preferred Profile Finish
                  </label>
                  <select
                    value={formData.finish}
                    onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400"
                  >
                    <option value="Deep Charcoal (#111827)">Deep Architectural Charcoal (#111827)</option>
                    <option value="Brushed Champagne Gold (#C5A059)">Brushed Champagne Gold (#C5A059)</option>
                    <option value="Anodized Platinum Silver (#E2E8F0)">Anodized Platinum Silver (#E2E8F0)</option>
                    <option value="Custom RAL Powder Coat">Custom RAL Powder Coat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Approximate Dimensions or Total Units
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10 Glazed Windows (5x4 ft), 1 Kitchen Fit-Out (12x14 ft), or 2 Plated Shutters (14x10 ft)"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    Project Notes & Architectural Drawings Info
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details regarding glass specifications (double-glazed, acoustic, tinted), site access, structural schedule..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-charcoal-950 font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-charcoal-950" />
                  <span>Send Project Specs to Master Craftsman on WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>Direct technician reply within 15 minutes. 100% confidential.</span>
                </div>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp conversation initiated with Abu Ahmed Gulf Frames!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Contact Channels & Emergency Repair Hotline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Emergency Hotline Card */}
            <div className="charcoal-gradient-card rounded-2xl p-6 border border-rose-500/40 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-rose-400 block">
                    Fast Emergency Service
                  </span>
                  <h4 className="text-base font-heading font-bold text-white">
                    Emergency Shutter Repair Hotline
                  </h4>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Stuck commercial rolling shutter, broken torsion spring, or burnt motor during business hours? Call our emergency service line for immediate technician dispatch.
              </p>
              <a
                href="tel:+923001234567"
                className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Emergency Dispatch: +92 300 1234567</span>
              </a>
            </div>

            {/* Direct Workshop Info Card */}
            <div className="charcoal-gradient-card rounded-2xl p-6 border border-charcoal-700/80 space-y-5 text-xs">
              <h4 className="text-sm font-heading font-bold text-white border-b border-charcoal-800 pb-3">
                Abu Ahmed Gulf Frames - Fabrication & Engineering Yard
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Main Fabrication Facility</span>
                    <span className="text-slate-400">Main Industrial Area, Aluminum Market, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Hotline & Quotes</span>
                    <a href="tel:+923001234567" className="text-slate-400 hover:text-white transition-colors">
                      +92 300 1234567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">WhatsApp Direct Chat</span>
                    <a
                      href="https://wa.me/923001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      Click here to message Master Craftsman Abu Ahmed
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Operating Hours</span>
                    <span className="text-slate-400">Monday - Saturday: 9:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Estimator Card */}
            <QuickEstimator />
          </div>
        </div>
      </section>
    </div>
  );
}
