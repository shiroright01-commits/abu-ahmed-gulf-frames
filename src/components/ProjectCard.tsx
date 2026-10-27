"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/data/projectsData";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  MessageCircle,
  Wrench,
  Maximize2,
  Eye,
} from "lucide-react";
import ImageLightboxModal from "@/components/ImageLightboxModal";

interface ProjectCardProps {
  project: ProjectItem;
  allProjects?: ProjectItem[];
  onImageClick?: (project: ProjectItem) => void;
}

export default function ProjectCard({
  project,
  allProjects,
  onImageClick,
}: ProjectCardProps) {
  const [internalModalOpen, setInternalModalOpen] = useState(false);

  const handleCardClick = () => {
    if (onImageClick) {
      onImageClick(project);
    } else {
      setInternalModalOpen(true);
    }
  };

  return (
    <>
      <div className="charcoal-gradient-card rounded-2xl border border-charcoal-700/80 hover:border-gold-400/60 overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between">
        {/* Clickable Image Banner with Lightbox Trigger */}
        <div
          className="relative h-64 sm:h-72 w-full overflow-hidden bg-charcoal-950 cursor-pointer"
          onClick={handleCardClick}
          role="button"
          tabIndex={0}
          aria-label={`View full photo for ${project.title}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleCardClick();
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

          {/* Interactive Hover Zoom Hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-charcoal-950/90 text-gold-400 text-xs font-bold border border-gold-400/60 shadow-2xl transform scale-95 group-hover:scale-100 transition-transform">
              <Maximize2 className="w-4 h-4 text-gold-400" />
              <span>Click to View Full Photo</span>
            </span>
          </div>

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-charcoal-900/90 text-gold-400 border border-gold-400/40 backdrop-blur-md">
              {project.categoryLabel}
            </span>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-black/70 text-slate-300 flex items-center gap-1 backdrop-blur-md">
              <Calendar className="w-3 h-3 text-gold-400" />
              {project.year}
            </span>
          </div>

          {/* Location at bottom of image */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-200 bg-charcoal-900/90 px-2.5 py-1 rounded-lg backdrop-blur-md border border-charcoal-700/60 pointer-events-none">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>{project.clientLocation}</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            {/* Service Tag */}
            <div className="flex items-center gap-1.5 text-[11px] text-gold-400/90 font-medium mb-1.5">
              <Wrench className="w-3 h-3" />
              <span>{project.serviceType}</span>
            </div>

            <h3
              onClick={handleCardClick}
              className="text-lg font-heading font-bold text-white mb-2 group-hover:text-gold-300 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {project.summary}
            </p>

            {/* Highlights */}
            <div className="space-y-1.5 mb-4">
              {project.highlights.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs & Actions */}
          <div className="pt-4 border-t border-charcoal-800 space-y-3">
            <div className="grid grid-cols-2 gap-2 bg-charcoal-950/80 p-2.5 rounded-xl border border-charcoal-800">
              {(project.specs || []).slice(0, 2).map((item, idx) => (
                <div key={idx}>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">
                    {item.label}
                  </div>
                  <div className="text-xs font-bold text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCardClick}
                className="w-full bg-charcoal-800 hover:bg-charcoal-700 text-slate-200 py-2.5 rounded-xl text-xs font-semibold border border-charcoal-700 transition-all flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-gold-400" />
                <span>View Full Photo</span>
              </button>

              <a
                href={`https://wa.me/923001234567?text=Hello%20Abu%20Ahmed%20Gulf%20Frames,%20I%20saw%20your%20project:%20${encodeURIComponent(
                  project.title
                )}%20(${encodeURIComponent(
                  project.clientLocation
                )})%20and%20would%20like%20to%20consult%20for%20a%20similar%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-charcoal-800 hover:bg-gold-400 text-slate-200 hover:text-charcoal-950 py-2.5 rounded-xl text-xs font-semibold border border-charcoal-700 hover:border-gold-400 transition-all flex items-center justify-center gap-1.5 group/btn"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-charcoal-950 transition-colors" />
                <span>Inquire</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fallback Internal Modal if rendered standalone without parent manager */}
      {internalModalOpen && !onImageClick && (
        <ImageLightboxModal
          isOpen={internalModalOpen}
          projects={allProjects || [project]}
          currentIndex={
            allProjects ? Math.max(0, allProjects.findIndex((p) => p.id === project.id)) : 0
          }
          onClose={() => setInternalModalOpen(false)}
          onNavigate={() => {}}
        />
      )}
    </>
  );
}
