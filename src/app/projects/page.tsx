"use client";

import React, { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import VideoShowcase from "@/components/VideoShowcase";
import ImageLightboxModal from "@/components/ImageLightboxModal";
import {
  Sparkles,
  ShieldCheck,
  MessageCircle,
  PhoneCall,
  Briefcase,
  Layers,
  Video,
  Sliders,
} from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0);

  const categories = [
    { id: "all", label: "All 30 Verified Works" },
    { id: "doors", label: "Master Entrance Doors" },
    { id: "windows", label: "Windows & Sliding Glazing" },
    { id: "kitchens", label: "Bespoke Aluminum Kitchens" },
    { id: "shutters", label: "Motorized Window Shutters" },
    { id: "custom", label: "Specialty Arched Framing" },
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
            Abu Ahmed Gulf Frames Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Architectural Service <span className="gold-gradient-text">Portfolio</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We deliver bespoke commissioned services, not off-the-shelf retail products. Explore our 30 verified case studies showcasing authentic on-site installations, precision workshop milling, and certified master framing across Pakistan.
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

      {/* Interactive Before & After Transformation Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <BeforeAfterSlider />
      </section>

      {/* Video Reels Section */}
      <div className="border-t border-charcoal-800">
        <VideoShowcase />
      </div>

      {/* Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="charcoal-gradient-card rounded-2xl p-8 sm:p-12 border border-charcoal-700/80 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Bespoke Service Commissions
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Have Architectural Blueprints or Custom Specifications?
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              We insert our precision designs into your structural drawings and deliver certified on-site rigging. Talk directly with Master Craftsman Abu Ahmed.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/923001234567?text=Hello%20Abu%20Ahmed%20Gulf%20Frames,%20I%20have%20an%20architectural%20drawing/blueprint%20and%20need%20a%20site%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-charcoal-950" />
              <span>Share Blueprints on WhatsApp</span>
            </a>
            <a
              href="tel:+923001234567"
              className="bg-charcoal-800 hover:bg-charcoal-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-charcoal-600 hover:border-gold-400/60 transition-all flex items-center gap-2 text-sm"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>Call Master Technician</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
