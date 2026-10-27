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

export default function RealWorkGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0);

  const filterTabs = [
    { id: "all", label: "All 30 Verified Works" },
    { id: "doors", label: "Master Doors" },
    { id: "windows", label: "Windows & Portals" },
    { id: "kitchens", label: "Waterproof Kitchens" },
    { id: "shutters", label: "Motorized Shutters" },
    { id: "custom", label: "Specialty Arches" },
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
              <span>30 Verified On-Site Installations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Genuine Architectural Portfolio
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              100% authentic on-site photographs of bespoke aluminum framing, woodgrain entrance doors, motorized shutters, and waterproof kitchens installed by Master Craftsman Abu Ahmed.
            </p>
          </div>

          <a
            href="https://wa.me/923001234567?text=Hello%20Abu%20Ahmed%20Gulf%20Frames,%20I%20would%20like%20to%20consult%20regarding%20your%20completed%20projects."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 text-xs font-bold shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all self-start md:self-auto shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-charcoal-950" />
            <span>Consult Abu Ahmed on WhatsApp</span>
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
                aria-label={`View full photo of ${project.title}`}
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-charcoal-950/90 text-gold-400 text-xs font-bold border border-gold-400/60 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                    <span>Click to View Full Photo</span>
                  </span>
                </div>

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-xl bg-charcoal-900/90 text-gold-400 border border-gold-400/40 backdrop-blur-md flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-gold-400" />
                    <span>Real Work</span>
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-xl bg-black/70 text-slate-200 backdrop-blur-md border border-charcoal-700">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-200 bg-charcoal-900/90 px-2.5 py-1 rounded-xl backdrop-blur-md border border-charcoal-700/60">
                    <MapPin className="w-3 h-3 text-gold-400" />
                    <span>{project.clientLocation}</span>
                  </div>
                </div>
              </div>

              {/* Info & CTA */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3
                    onClick={() => handleOpenLightbox(project)}
                    className="text-sm font-heading font-bold text-white mb-1.5 group-hover:text-gold-300 transition-colors line-clamp-2 cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {project.summary}
                  </p>

                  <div className="space-y-1">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-charcoal-800 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(project)}
                      className="w-full bg-charcoal-800 hover:bg-charcoal-700 text-slate-300 hover:text-white py-2 rounded-xl text-xs font-medium border border-charcoal-700 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-gold-400" />
                      <span>View Full Photo</span>
                    </button>

                    <a
                      href={`https://wa.me/923001234567?text=Hello%20Abu%20Ahmed%20Gulf%20Frames,%20I%20am%20interested%20in%20this%20specific%20work:%20${encodeURIComponent(
                        project.title
                      )}%20(Location:%20${encodeURIComponent(
                        project.clientLocation
                      )}).%20Please%20quote%20for%20my%20site.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Fullscreen Lightbox Modal */}
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
