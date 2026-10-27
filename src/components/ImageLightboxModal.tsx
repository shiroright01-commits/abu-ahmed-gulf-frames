"use client";

import React, { useEffect, useCallback } from "react";
import { ProjectItem } from "@/data/projectsData";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ImageLightboxModalProps {
  isOpen: boolean;
  projects: ProjectItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightboxModal({
  isOpen,
  projects,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxModalProps) {
  const currentProject = projects[currentIndex];
  const { isRTL, t } = useLanguage();

  const handlePrev = useCallback(() => {
    if (projects.length === 0) return;
    const nextIndex = (currentIndex - 1 + projects.length) % projects.length;
    onNavigate(nextIndex);
  }, [currentIndex, projects.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (projects.length === 0) return;
    const nextIndex = (currentIndex + 1) % projects.length;
    onNavigate(nextIndex);
  }, [currentIndex, projects.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        if (isRTL) {
          handleNext();
        } else {
          handlePrev();
        }
      } else if (e.key === "ArrowRight") {
        if (isRTL) {
          handlePrev();
        } else {
          handleNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handlePrev, handleNext, onClose, isRTL]);

  if (!isOpen || !currentProject) return null;

  const whatsappMessage = encodeURIComponent(
    isRTL
      ? `مرحباً المعلم أبو أحمد (أبو أحمد لإطارات الخليج)، أنا أتصفح العمل الموثق رقم ${
          currentIndex + 1
        }: "${currentProject.title}" (${
          currentProject.clientLocation
        }). أود الاستفسار وطلب معاينة لتنفيذ عمل مماثل.`
      : `Hello Abu Ahmed Gulf Frames, I am viewing your portfolio item #${
          currentIndex + 1
        }: "${currentProject.title}" (${
          currentProject.clientLocation
        }). I would like to consult for a similar bespoke installation.`
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-xl animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="w-full px-4 sm:px-8 py-3.5 bg-charcoal-950/80 border-b border-charcoal-800/80 backdrop-blur-md flex items-center justify-between z-10 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-xl bg-gold-400/10 border border-gold-400/40 text-gold-400 text-xs font-bold font-mono">
            {currentIndex + 1} / {projects.length}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-charcoal-900 border border-charcoal-700 text-slate-300 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            {currentProject.clientLocation}
          </span>
          <span className="hidden md:inline-block text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {currentProject.categoryLabel}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            {t("lightboxKeyboardHint", "Press ← → to browse")}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-charcoal-800 hover:bg-rose-900/40 hover:text-rose-300 border border-charcoal-700 hover:border-rose-500/40 text-slate-200 transition-all flex items-center gap-1.5 text-xs font-semibold"
            aria-label="Close Fullscreen View"
          >
            <X className="w-5 h-5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">{t("lightboxClose", "Close")}</span>
          </button>
        </div>
      </div>

      {/* Main Image Stage with Left / Right Navigation */}
      <div
        className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-20 p-2.5 sm:p-4 rounded-2xl bg-charcoal-950/80 hover:bg-gold-400 text-slate-300 hover:text-charcoal-950 border border-charcoal-700 hover:border-gold-400 transition-all duration-200 backdrop-blur-md shadow-2xl group -translate-y-1/2 top-1/2 active:scale-95"
          aria-label="Previous Photo"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* The Image Container */}
        <div className="relative max-h-[68vh] sm:max-h-[74vh] max-w-[94vw] sm:max-w-[85vw] flex items-center justify-center">
          <img
            key={currentProject.image}
            src={currentProject.image}
            alt={currentProject.title}
            className="max-h-[68vh] sm:max-h-[74vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-charcoal-700/60 bg-charcoal-950"
          />

          {/* Genuine Verified Watermark Pill */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/85 border border-gold-400/40 text-gold-400 text-[11px] sm:text-xs font-bold backdrop-blur-md shadow-xl pointer-events-none">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>{t("lightboxVerifiedPill", "Master Abu Ahmed Genuine Work")}</span>
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-20 p-2.5 sm:p-4 rounded-2xl bg-charcoal-950/80 hover:bg-gold-400 text-slate-300 hover:text-charcoal-950 border border-charcoal-700 hover:border-gold-400 transition-all duration-200 backdrop-blur-md shadow-2xl group -translate-y-1/2 top-1/2 active:scale-95"
          aria-label="Next Photo"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Bottom Metadata & WhatsApp CTA Bar */}
      <div
        className="w-full px-4 sm:px-8 py-3 sm:py-4 bg-charcoal-950/95 border-t border-charcoal-800/80 backdrop-blur-md z-10 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-gold-400/10 text-gold-400 border border-gold-400/30 uppercase tracking-wider">
                {currentProject.categoryLabel}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1 sm:hidden">
                <MapPin className="w-3 h-3 text-gold-400" />
                {currentProject.clientLocation}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-heading font-bold text-white tracking-tight">
              {currentProject.title}
            </h3>
            <p className="text-xs text-slate-300 line-clamp-1 max-w-2xl hidden sm:block">
              {currentProject.summary}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/96594462328?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-charcoal-950 shrink-0" />
              <span>
                {t("lightboxInquireWhatsApp", "Inquire This Exact Work on WhatsApp")}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
