"use client";

import React, { useState, useRef, useCallback } from "react";
import { Sliders, Sparkles, CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isRTL, t } = useLanguage();

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
            <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>{t("beforeAfterBadge", "Transformation Proof")}</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            {t("beforeAfterTitle", "Architectural Site Transformation")}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            {t(
              "beforeAfterSubtitle",
              "Drag the slider to see how Abu Ahmed Gulf Frames replaces compromised wooden frames with precision thermal-break aluminum and acoustic glazing."
            )}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <span className="flex items-center gap-1.5 text-rose-400 bg-rose-950/60 px-3 py-1.5 rounded-xl border border-rose-500/30">
            <XCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{isRTL ? "قبل: خشب تالف وفواصل مسربة" : "Before: Rotted Wood & Gaps"}</span>
          </span>
          <span className="flex items-center gap-1.5 text-gold-400 bg-gold-400/10 px-3 py-1.5 rounded-xl border border-gold-400/30">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>{isRTL ? "بعد: تركيب إطارات الخليج المعتمدة" : "After: Gulf Frames Glazing"}</span>
          </span>
        </div>
      </div>

      {/* Interactive Slider Container */}
      <div
        ref={containerRef}
        className="relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-charcoal-700 shadow-inner"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img
          src="/real_projects/work_05.jpg"
          alt="Completed Luxury Aluminum Installation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src="/real_projects/work_14.jpg"
            alt="Original Structural Opening Before Installation"
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
            style={{
              width: containerRef.current ? containerRef.current.clientWidth : "100%",
              maxWidth: "none",
            }}
          />
          <div className="absolute inset-0 bg-rose-950/20" />
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gold-400 shadow-[0_0_15px_rgba(197,160,89,0.8)] z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-charcoal-950 border-2 border-gold-400 text-gold-400 flex items-center justify-center shadow-2xl">
            <Sliders className="w-4 h-4" />
          </div>
        </div>

        {/* Labels Floating */}
        <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-black/80 border border-charcoal-700 text-xs font-semibold text-rose-300 backdrop-blur-md">
          {t("beforeLabel", "Blueprint Spec")}
        </div>
        <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-xl bg-black/80 border border-gold-400/40 text-xs font-semibold text-gold-400 backdrop-blur-md">
          {t("afterLabel", "Installed Reality")}
        </div>
      </div>
    </div>
  );
}
