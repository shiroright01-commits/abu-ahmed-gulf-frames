"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Floating Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-charcoal-900 border border-gold-400/30 text-white text-xs py-2 px-3.5 rounded-xl shadow-xl shadow-black/60 relative animate-bounce duration-1000">
          <span className="font-medium">Direct WhatsApp with Master Craftsman Abu Ahmed (Gulf Frames)</span>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing Button */}
      <a
        href="https://wa.me/923001234567?text=Hello%20Abu%20Ahmed%20Gulf%20Frames,%20I%20would%20like%20to%20request%20a%20site%20consultation%20and%20service%20estimate."
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 p-3.5 rounded-2xl shadow-xl shadow-emerald-500/25 hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Chat on WhatsApp with Abu Ahmed"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
}
