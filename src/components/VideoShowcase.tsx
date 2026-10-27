"use client";

import React, { useState } from "react";
import { videoData, VideoItem } from "@/data/videoData";
import {
  Play,
  X,
  Video,
  Clock,
  MapPin,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-1.5">
            <Video className="w-4 h-4 text-gold-400" />
            Cinematic On-Site Footage
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white">
            Execution Reels & Video Case Studies
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
            Watch our master technicians in action. Real on-site drone flyovers, motorized shutter mechanism testing, and luxury kitchen installation walkthroughs.
          </p>
        </div>

        <a
          href="https://wa.me/923001234567?text=Hello%20Abu%20Ahmed%20Gulf%20Frames,%20I%20would%20like%20to%20request%20more%20video%20walkthroughs%20of%20your%20completed%20projects."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-charcoal-800 hover:bg-gold-400 text-slate-200 hover:text-charcoal-950 text-xs font-semibold border border-charcoal-700 hover:border-gold-400 transition-all self-start md:self-auto"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Request Video Catalog on WhatsApp</span>
        </a>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videoData.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="charcoal-gradient-card rounded-2xl border border-charcoal-700/80 hover:border-gold-400/60 overflow-hidden cursor-pointer group hover:-translate-y-1 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            {/* Thumbnail with Play Icon Overlay */}
            <div className="relative h-48 w-full overflow-hidden bg-charcoal-950">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center text-charcoal-950 shadow-2xl group-hover:scale-110 transition-transform duration-200">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-mono text-gold-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{video.duration}</span>
              </div>

              {/* Location Badge */}
              <div className="absolute top-2.5 left-2.5 bg-charcoal-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] text-slate-300 flex items-center gap-1 border border-charcoal-700">
                <MapPin className="w-3 h-3 text-gold-400" />
                <span>{video.location}</span>
              </div>
            </div>

            {/* Video Meta Info */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h4 className="text-sm font-heading font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-1.5 line-clamp-2">
                  {video.description}
                </p>
              </div>

              <div className="pt-3 border-t border-charcoal-800 flex items-center justify-between text-xs text-gold-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                <span>Play Reel</span>
                <Play className="w-3 h-3 fill-current" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-charcoal-900 border border-gold-400/40 rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-charcoal-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-gold-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {selectedVideo.location}
                </span>
                <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="p-2 rounded-xl bg-charcoal-800 text-slate-400 hover:text-white hover:bg-charcoal-700 transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${selectedVideo.videoUrl}?autoplay=1&mute=1`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer / Direct Inquiry */}
            <div className="p-4 sm:p-5 bg-charcoal-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                {selectedVideo.description}
              </p>
              <a
                href={`https://wa.me/923001234567?text=Hello%20Abu%20Ahmed%20Gulf%20Frames,%20I%20saw%20your%20video:%20${encodeURIComponent(
                  selectedVideo.title
                )}%20and%20would%20like%20to%20consult%20for%20a%20similar%20site%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg text-charcoal-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shrink-0 hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-charcoal-950" />
                <span>Consult on Similar Project</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
