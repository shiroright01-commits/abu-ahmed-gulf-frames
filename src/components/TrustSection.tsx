import React from "react";
import {
  ShieldCheck,
  Award,
  Layers,
  Wrench,
  Clock,
  Sparkles,
} from "lucide-react";

export default function TrustSection() {
  const trustPillars = [
    {
      icon: Award,
      title: "20+ Years Master Craftsmanship",
      desc: "Two decades of hands-on aluminum profile fabrication, miter joint welding, and mechanism engineering.",
    },
    {
      icon: ShieldCheck,
      title: "10-Year Profile Warranty",
      desc: "Every architectural installation is backed by direct structural warranty against warping, rust, and cracking.",
    },
    {
      icon: Wrench,
      title: "Direct Workshop Fabrication",
      desc: "No middlemen or retail markups. You work directly with Master Craftsman Abu Ahmed (Abu Ahmed Gulf Frames) from survey to final handover.",
    },
    {
      icon: Layers,
      title: "High-Tensile 6063-T6 Alloys",
      desc: "Certified architectural aluminum extrusions offering superior rigidity, wind tolerance, and anodizing absorption.",
    },
    {
      icon: Sparkles,
      title: "European Hardware Integration",
      desc: "Fitted with German soft-close hydraulic dampers, Italian shutter tubular motors, and 304 stainless steel rollers.",
    },
    {
      icon: Clock,
      title: "Emergency Shutter Support",
      desc: "Rapid on-site emergency repair service for jammed shutters, snapped springs, and motor replacements.",
    },
  ];

  return (
    <section className="py-20 bg-charcoal-900/60 border-y border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2.5">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Uncompromising Standards
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">
            Why Architects & Villa Owners Trust Abu Ahmed Gulf Frames
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Proven precision engineering, structural durability, and lifetime utility in every single profile cut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="charcoal-gradient-card p-6 rounded-2xl border border-charcoal-700/80 hover:border-gold-400/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-charcoal-800 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-5 group-hover:bg-gold-400 group-hover:text-charcoal-950 transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
