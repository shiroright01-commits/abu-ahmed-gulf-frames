"use client";

import React, { useState, useRef, useCallback } from "react";
import { Sliders, Sparkles, CheckCircle2, XCircle } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percent);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-10 border border-charcoal-700/80 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-charcoal-800 pb-6">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-800 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Transformation Proof
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Architectural Site Transformation
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Drag the slider to see how Abu Ahmed Gulf Frames replaces compromised wooden frames with precision thermal-break aluminum and acoustic glazing.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="flex items-center gap-1.5 text-rose-400 bg-rose-950/60 px-3 py-1.5 rounded-xl border border-rose-500/30">
            <XCircle className="w-3.5 h-3.5" />
            Before: Rotted Wood & Gaps
          </span>
          <span className="flex items-center gap-1.5 text-gold-400 bg-gold-400/10 px-3 py-1.5 rounded-xl border border-gold-400/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            After: Gulf Frames Glazing
          </span>
        </div>
      </div>

      {/* Interactive Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-80 sm:h-[460px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-charcoal-700"
      >
        {/* AFTER IMAGE (Underneath, full view) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
            alt="After Abu Ahmed Gulf Frames Installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-charcoal-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-gold-400/40 text-gold-400 text-xs font-bold shadow-lg">
            AFTER: Abu Ahmed Gulf Frames
          </div>
          <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-charcoal-700 text-slate-200 text-xs max-w-xs text-right hidden sm:block">
            <p className="font-semibold text-white">Gulf-Standard Precision</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              6063-T6 thermal-break profiles, double-glazed acoustic glass, 100% waterproof seal.
            </p>
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped on left) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative h-full w-[100vw] max-w-[1280px]">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
              alt="Before Installation (Traditional Construction)"
              className="w-full h-full object-cover filter contrast-125 sepia-[0.3]"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute top-4 left-4 bg-charcoal-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-rose-500/40 text-rose-400 text-xs font-bold shadow-lg">
              BEFORE: Traditional Framing
            </div>
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-charcoal-700 text-slate-200 text-xs max-w-xs hidden sm:block">
              <p className="font-semibold text-rose-300">Moisture & Draft Leaks</p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Swollen wood sashes, air gaps, rattling during winds, termite vulnerabilities.
              </p>
            </div>
          </div>
        </div>

        {/* DRAG HANDLE BAR */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gold-400 shadow-[0_0_15px_rgba(197,160,89,0.8)] cursor-ew-resize flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 rounded-xl gold-gradient-bg border-2 border-charcoal-950 flex items-center justify-center text-charcoal-950 shadow-2xl">
            <Sliders className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Helper label below */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 mt-4">
        <span>Click or drag slider left/right to compare</span>
        <span className="text-gold-400 font-semibold">10-Year Structural Framing Guarantee</span>
      </div>
    </div>
  );
}
