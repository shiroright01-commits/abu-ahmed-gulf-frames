"use client";

import React, { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projectsData";
import ImageLightboxModal from "@/components/ImageLightboxModal";
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Eye,
  ShieldCheck,
  Maximize2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function RealWorkGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0);
  const { isRTL, t } = useLanguage();

  const filterTabs = [
    { id: "all", label: t("galleryFilterAll", "All 30 Verified Works") },
    { id: "doors", label: t("galleryFilterDoors", "Master Doors") },
    { id: "windows", label: t("galleryFilterWindows", "Windows & Portals") },
    { id: "kitchens", label: t("galleryFilterKitchens", "Waterproof Kitchens") },
    { id: "shutters", label: t("galleryFilterShutters", "Motorized Shutters") },
    { id: "custom", label: t("galleryFilterCustom", "Specialty Arches") },
  ];

  const filteredProjects = projectsData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const handleOpenLightbox = (project: ProjectItem) => {
    const index = filteredProjects.findIndex((p) => p.id === project.id);
    setActiveLightboxIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="real-works" className="py-20 bg-[#0B0F14] border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-900 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("galleryBadge", "30 Verified On-Site Installations")}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              {t("galleryTitle", "Genuine Architectural Portfolio")}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              {t(
                "gallerySubtitle",
                "100% authentic on-site photographs of bespoke aluminum framing, woodgrain entrance doors, motorized shutters, and waterproof kitchens installed by Master Craftsman Abu Ahmed."
              )}
            </p>
          </div>

          <a
            href={`https://wa.me/923001234567?text=${encodeURIComponent(
              isRTL
                ? "مرحباً المعلم أبو أحمد، أود الاستفسار والمشاورة بخصوص مشاريعكم وأعمالكم المنجزة."
                : "Hello Abu Ahmed Gulf Frames, I would like to consult regarding your completed projects."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 text-xs font-bold shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all self-start md:self-auto shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-charcoal-950 shrink-0" />
            <span>
              {isRTL
                ? "استشارة المعلم أبو أحمد عبر الواتساب"
                : "Consult Abu Ahmed on WhatsApp"}
            </span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-6 mb-8 border-b border-charcoal-800">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === tab.id
                  ? "gold-gradient-bg text-charcoal-950 shadow-md shadow-gold-500/20 font-bold"
                  : "bg-charcoal-900 text-slate-300 hover:text-white border border-charcoal-700 hover:border-gold-400/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="charcoal-gradient-card rounded-2xl border border-charcoal-700/80 hover:border-gold-400/60 overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Clickable Image */}
              <div
                className="relative h-72 sm:h-80 w-full overflow-hidden bg-charcoal-950 cursor-pointer"
                onClick={() => handleOpenLightbox(project)}
                role="button"
                tabIndex={0}
                aria-label={`View full photo for ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenLightbox(project);
                  }
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-black/30" />

                {/* Hover Clickable Zoom Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-charcoal-950/90 text-gold-400 text-xs font-bold border border-gold-400/60 shadow-2xl">
                    <Maximize2 className="w-4 h-4 text-gold-400" />
                    <span>{t("galleryClickHint", "Click to View Full Photo")}</span>
                  </span>
                </div>

                {/* Badges on image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-charcoal-900/90 text-gold-400 border border-gold-400/40 backdrop-blur-md">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 backdrop-blur-md">
                    <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{t("galleryRealBadge", "Real Work")}</span>
                  </span>
                </div>

                {/* Location at bottom of photo */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-slate-200 bg-charcoal-900/90 px-2.5 py-1 rounded-lg backdrop-blur-md border border-charcoal-700/60 pointer-events-none">
                  <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                  <span>{project.clientLocation}</span>
                </div>
              </div>

              {/* Information */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    onClick={() => handleOpenLightbox(project)}
                    className="font-heading font-bold text-base text-white group-hover:text-gold-300 transition-colors mb-2 cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {project.summary}
                  </p>

                  <div className="space-y-1">
                    {project.highlights.slice(0, 2).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-charcoal-800 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenLightbox(project)}
                    className="w-1/2 bg-charcoal-800 hover:bg-charcoal-700 text-slate-200 py-2 rounded-xl text-xs font-semibold border border-charcoal-700 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>{t("galleryViewFullPhoto", "View Full Photo")}</span>
                  </button>

                  <a
                    href={`https://wa.me/923001234567?text=${encodeURIComponent(
                      isRTL
                        ? `مرحباً المعلم أبو أحمد، أود الاستفسار بخصوص هذا العمل الموثق: "${project.title}" (${project.clientLocation}).`
                        : `Hello Abu Ahmed Gulf Frames, I would like to consult about this real installation: "${project.title}" (${project.clientLocation}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-charcoal-800 hover:bg-gold-400 text-slate-200 hover:text-charcoal-950 py-2 rounded-xl text-xs font-semibold border border-charcoal-700 hover:border-gold-400 transition-all flex items-center justify-center gap-1.5 group/btn"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-charcoal-950 transition-colors shrink-0" />
                    <span>{t("galleryInquire", "Inquire")}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        projects={filteredProjects}
        currentIndex={activeLightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveLightboxIndex(idx)}
      />
    </section>
  );
}
