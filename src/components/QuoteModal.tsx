"use client";

import React, { useState } from "react";
import { X, Send, Calculator, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultService = "windows" }: QuoteModalProps) {
  const [service, setService] = useState(defaultService);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Master Craftsman Abu Ahmed (Abu Ahmed Gulf Frames),
I would like to request an on-site survey and turnkey service estimate:
- Client Name: ${name || "Client"}
- Service Required: ${service}
- Approximate Scope / Dimensions: ${dimensions || "To be surveyed on-site"}
- Location: ${city || "Pakistan"}
- Contact Number: ${phone}
- Additional Specifications: ${notes || "None"}
Please get in touch with your survey schedule and preliminary estimates.`;

    const whatsappUrl = `https://wa.me/96594462328?text=${encodeURIComponent(text)}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-charcoal-900 border border-gold-400/40 rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative gold-border-glow">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-charcoal-800 hover:bg-charcoal-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-charcoal-950 font-bold">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Abu Ahmed Gulf Frames Services
            </span>
            <h3 className="text-xl font-heading font-bold text-white">
              Book Master Craftsman Consultation
            </h3>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1">Your Full Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Tariq Mehmood"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-medium mb-1">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="+965 9446 2328"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-medium mb-1">City / Location</label>
              <input
                type="text"
                placeholder="e.g. Lahore / Islamabad"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Select Service</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400"
            >
              <option value="Architectural Aluminum Windows">Architectural Aluminum Windows</option>
              <option value="Modular Aluminum Kitchen">Modular Aluminum Kitchen</option>
              <option value="Custom Heavy-Duty Doors">Custom Heavy-Duty Doors</option>
              <option value="Automatic Motorized Shutter">Automatic Motorized Shutter</option>
              <option value="Manual Mechanical Shutter">Manual Mechanical Shutter</option>
              <option value="Bespoke Facade & Pergola">Bespoke Architectural Work / Pergola</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Approx. Size or Quantity (Optional)</label>
            <input
              type="text"
              placeholder="e.g. 12 Windows or 16ft x 10ft Shutter"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
              className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1">Specific Requirements / Notes</label>
            <textarea
              rows={2}
              placeholder="Mention special finishes (Champagne gold, Charcoal) or glass preferences..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
            />
          </div>

          <button
            type="submit"
            className="w-full gold-gradient-bg text-charcoal-950 font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-charcoal-950" />
            <span>Connect Directly on WhatsApp</span>
            <Send className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>Strict privacy. Direct master technician estimate within 15 minutes.</span>
          </div>
        </form>
      </div>
    </div>
  );
}
