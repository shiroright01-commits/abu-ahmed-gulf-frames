"use client";

import React, { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import ImageLightboxModal from "@/components/ImageLightboxModal";
import {
  Briefcase,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0);
  const { isRTL, t } = useLanguage();

  const categories = [
    { id: "all", label: t("galleryFilterAll", "All 30 Verified Works") },
    { id: "doors", label: t("galleryFilterDoors", "Master Entrance Doors") },
    { id: "windows", label: t("galleryFilterWindows", "Windows & Sliding Glazing") },
    { id: "kitchens", label: t("galleryFilterKitchens", "Bespoke Aluminum Kitchens") },
    { id: "shutters", label: t("galleryFilterShutters", "Motorized Window Shutters") },
    { id: "custom", label: t("galleryFilterCustom", "Specialty Arched Framing") },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((proj) => proj.category === selectedCategory);

  const handleOpenLightbox = (project: ProjectItem) => {
    const index = filteredProjects.findIndex((p) => p.id === project.id);
    setActiveLightboxIndex(index >= 0 ? index : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="py-12 sm:py-16 space-y-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-900 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>
              {isRTL
                ? "معرض أعمال أبو أحمد لإطارات الخليج"
                : "Abu Ahmed Gulf Frames Portfolio"}
            </span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {isRTL ? (
              <>
                معرض المشاريع <span className="gold-gradient-text">المعمارية</span> المعتمدة
              </>
            ) : (
              <>
                Architectural Service <span className="gold-gradient-text">Portfolio</span>
              </>
            )}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "projectsPageSubtitle",
              "We deliver bespoke commissioned services, not off-the-shelf retail products. Explore our 30 verified case studies showcasing authentic on-site installations, precision workshop milling, and certified master framing across Pakistan."
            )}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "gold-gradient-bg text-charcoal-950 font-bold shadow-lg shadow-gold-500/10"
                  : "bg-charcoal-900 text-slate-300 hover:text-white border border-charcoal-700 hover:border-gold-400/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              allProjects={filteredProjects}
              onImageClick={handleOpenLightbox}
            />
          ))}
        </div>
      </section>

      {/* Interactive Fullscreen Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        projects={filteredProjects}
        currentIndex={activeLightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveLightboxIndex(idx)}
      />
    </div>
  );
}
