"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import ImageLightboxModal from "@/components/ImageLightboxModal";
import { ShieldCheck, ArrowRight, Maximize2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroShowcaseCard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isRTL, t } = useLanguage();
  const heroWorkIndex = Math.max(
    0,
    projectsData.findIndex((p) => p.id === "work-07")
  );
  const [activeIndex, setActiveIndex] = useState(heroWorkIndex);

  return (
    <>
      <div className="relative mx-auto max-w-md lg:max-w-none">
        <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold-400/30 to-charcoal-700/50 rounded-3xl blur-xl opacity-75 pointer-events-none" />

        <div className="relative rounded-2xl overflow-hidden border border-gold-400/40 bg-charcoal-900 shadow-2xl">
          <div
            className="relative h-[440px] sm:h-[480px] w-full overflow-hidden bg-charcoal-950 cursor-pointer group"
            onClick={() => {
              setActiveIndex(heroWorkIndex);
              setModalOpen(true);
            }}
            role="button"
            tabIndex={0}
            aria-label="View verified commission photo"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveIndex(heroWorkIndex);
                setModalOpen(true);
              }
            }}
          >
            <img
              src="/real_projects/work_07.jpg"
              alt="Abu Ahmed Gulf Frames Real Master Installation"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-black/30" />

            {/* Hover expand hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-charcoal-950/90 text-gold-400 text-xs font-bold border border-gold-400/60 shadow-2xl">
                <Maximize2 className="w-4 h-4 text-gold-400" />
                <span>{t("galleryClickHint", "Click to View Full Photo")}</span>
              </span>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-charcoal-950/90 text-gold-400 text-xs font-bold border border-gold-400/40 backdrop-blur-md shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t("heroShowcaseBadge", "Verified Real Commission")}</span>
              </span>
              <span className="text-[11px] font-medium px-2.5 py-1 rounded-xl bg-black/80 text-slate-200 backdrop-blur-md border border-charcoal-700">
                {t("heroShowcaseLocation", "Abdullah Al-Salem, Kuwait")}
              </span>
            </div>

            {/* Floating Bottom Card */}
            <div
              className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-charcoal-950/90 border border-charcoal-700/80 backdrop-blur-md space-y-2 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-heading font-bold text-white">
                  {t("heroShowcaseTitle", "Sublimated Walnut Door with Wrought-Iron Grille")}
                </span>
                <span className="text-[10px] text-gold-400 font-semibold px-2 py-0.5 rounded-md bg-gold-400/10 border border-gold-400/30">
                  {t("heroShowcaseTag", "Hand-Crimped")}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                {t(
                  "heroShowcaseDesc",
                  "Heavy 6063-T6 aluminum with integrated wrought-iron security grille encased in double safety glass."
                )}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-charcoal-800 text-[10px] text-slate-400">
                <button
                  type="button"
                  onClick={() => {
                    setActiveIndex(heroWorkIndex);
                    setModalOpen(true);
                  }}
                  className="text-gold-400 hover:text-white font-semibold flex items-center gap-1 transition-colors"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>{t("heroShowcaseEnlarge", "Enlarge Photo")}</span>
                </button>
                <Link
                  href="/projects"
                  className="text-gold-400 hover:text-white font-medium flex items-center gap-1 transition-colors"
                >
                  <span>{t("heroShowcaseBrowse", "Browse 30 Works")}</span>
                  <ArrowRight className={`w-3 h-3 ${isRTL ? "rotate-180" : ""}`} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={modalOpen}
        projects={projectsData}
        currentIndex={activeIndex}
        onClose={() => setModalOpen(false)}
        onNavigate={(idx) => setActiveIndex(idx)}
      />
    </>
  );
}
