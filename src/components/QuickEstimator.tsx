"use client";

import React, { useState } from "react";
import {
  Calculator,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function QuickEstimator() {
  const [serviceType, setServiceType] = useState("windows");
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  const [finish, setFinish] = useState("charcoal");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Approximate turnkey service execution rates per sqft for estimation guidance
  const rateMap: Record<string, { label: string; ratePerSqFt: number }> = {
    windows: { label: "Architectural Glazing & Window Installation Service", ratePerSqFt: 1850 },
    kitchen: { label: "Bespoke Modular Aluminum Kitchen Fit-Out Service", ratePerSqFt: 3200 },
    doors: { label: "Heavy-Duty Architectural Door & Entrance Service", ratePerSqFt: 2200 },
    "auto-shutter": { label: "Automated Motorized Shutter Engineering Service", ratePerSqFt: 2400 },
    "manual-shutter": { label: "Manual Mechanical Shutter Fabrication Service", ratePerSqFt: 1450 },
    custom: { label: "Bespoke Curtain Wall & Shading Facade Service", ratePerSqFt: 2800 },
  };

  const sqFt = Math.max(1, width * height);
  const estimatedCost = sqFt * (rateMap[serviceType]?.ratePerSqFt || 1800);

  const finishNames: Record<string, string> = {
    charcoal: "Deep Architectural Charcoal (#111827)",
    gold: "Brushed Champagne Gold (#C5A059)",
    platinum: "Anodized Platinum Silver (#E2E8F0)",
  };

  const generateWhatsAppLink = () => {
    const serviceName = rateMap[serviceType]?.label || "Aluminum Architectural Service";
    const selectedFinish = finishNames[finish] || "Standard Finish";
    const text = `Hello Master Craftsman Abu Ahmed (Abu Ahmed Gulf Frames),
I would like to book an on-site survey and request a service estimate for:
- Commission: ${serviceName}
- Scope Dimensions: ${width} ft x ${height} ft (Approx ${sqFt} sq.ft area)
- Architectural Finish: ${selectedFinish}
- Client Contact: ${phone || "Not specified"}
- Project Notes: ${notes || "None"}
Please confirm your availability for a technical site survey.`;

    return `https://wa.me/923001234567?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.open(generateWhatsAppLink(), "_blank");
    }
  };

  return (
    <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-8 gold-border-glow relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-charcoal-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-400">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block">
              Site Survey & Service Budget Estimator
            </span>
            <span className="text-[11px] text-slate-400">
              Abu Ahmed Gulf Frames - Direct Technician Response
            </span>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          Turnkey Service
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        {/* Service Type Selection */}
        <div>
          <label className="block text-slate-300 font-medium mb-1.5">
            Select Turnkey Architectural Service
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400 transition-colors"
          >
            <option value="windows">Architectural Glazing & Window Installation Service</option>
            <option value="kitchen">Bespoke Modular Aluminum Kitchen Fit-Out Service</option>
            <option value="doors">Heavy-Duty Architectural Door & Entrance Service</option>
            <option value="auto-shutter">Automated Motorized Shutter Engineering Service</option>
            <option value="manual-shutter">Manual Mechanical Shutter Fabrication Service</option>
            <option value="custom">Bespoke Curtain Wall & Shading Facade Service</option>
          </select>
        </div>

        {/* Dimensions Inputs */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Approx. Width (Feet)
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value) || 1)}
              className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              Approx. Height (Feet)
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value) || 1)}
              className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>
        </div>

        {/* Profile Finish Color */}
        <div>
          <label className="block text-slate-300 font-medium mb-1.5">
            Select Signature Gulf Finish Palette
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setFinish("charcoal")}
              className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                finish === "charcoal"
                  ? "border-gold-400 bg-charcoal-800 text-white font-semibold shadow"
                  : "border-charcoal-700 bg-charcoal-950 text-slate-400 hover:text-white"
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#111827] border border-slate-500" />
              <span className="text-[10px]">Deep Charcoal</span>
            </button>
            <button
              type="button"
              onClick={() => setFinish("gold")}
              className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                finish === "gold"
                  ? "border-gold-400 bg-charcoal-800 text-gold-400 font-semibold shadow"
                  : "border-charcoal-700 bg-charcoal-950 text-slate-400 hover:text-gold-400"
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#C5A059]" />
              <span className="text-[10px]">Champagne Gold</span>
            </button>
            <button
              type="button"
              onClick={() => setFinish("platinum")}
              className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                finish === "platinum"
                  ? "border-gold-400 bg-charcoal-800 text-white font-semibold shadow"
                  : "border-charcoal-700 bg-charcoal-950 text-slate-400 hover:text-white"
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-[#E2E8F0]" />
              <span className="text-[10px]">Platinum Silver</span>
            </button>
          </div>
        </div>

        {/* Contact Input */}
        <div>
          <label className="block text-slate-300 font-medium mb-1.5">
            Your WhatsApp / Mobile Number
          </label>
          <input
            type="tel"
            placeholder="e.g. 0300 1234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
          />
        </div>

        {/* Calculation Preview Badge */}
        <div className="bg-charcoal-950 p-3 rounded-xl border border-charcoal-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
              Estimated Service Area
            </span>
            <span className="text-sm font-heading font-bold text-white">
              {sqFt} Sq.Ft
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
              Turnkey Service Estimate
            </span>
            <span className="text-sm font-heading font-bold text-gold-400">
              PKR {estimatedCost.toLocaleString()}*
            </span>
          </div>
        </div>

        {/* Submit & WhatsApp Link */}
        <button
          type="submit"
          className="w-full gold-gradient-bg text-charcoal-950 font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-xs"
        >
          <MessageCircle className="w-4 h-4 fill-charcoal-950" />
          <span>Book Site Survey & Send Specs to WhatsApp</span>
          <Send className="w-3.5 h-3.5" />
        </button>

        <p className="text-[10px] text-center text-slate-400 leading-normal">
          *Turnkey estimate covers site survey, precision fabrication, hardware calibration, and professional installation. Final quote finalized after on-site laser assessment.
        </p>

        {submitted && (
          <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Opening WhatsApp chat with Master Craftsman Abu Ahmed with your service requirements!
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
