import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/data/servicesData";
import {
  PanelsTopLeft,
  ChefHat,
  DoorOpen,
  Sliders,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ClipboardCheck,
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const renderIcon = () => {
    switch (service.iconName) {
      case "PanelsTopLeft":
        return <PanelsTopLeft className="w-6 h-6" />;
      case "ChefHat":
        return <ChefHat className="w-6 h-6" />;
      case "DoorOpen":
        return <DoorOpen className="w-6 h-6" />;
      case "Sliders":
        return <Sliders className="w-6 h-6" />;
      case "Layers":
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <div className="charcoal-gradient-card rounded-2xl p-6 border border-charcoal-700/80 hover:border-gold-400/60 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 relative overflow-hidden">
      {/* Top accent badge */}
      {service.badge && (
        <div className="absolute top-4 right-4">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-gold-400/10 text-gold-400 border border-gold-400/25 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-gold-400" />
            {service.badge}
          </span>
        </div>
      )}

      <div>
        {/* Icon container */}
        <div className="w-12 h-12 rounded-xl bg-charcoal-800 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-400 group-hover:text-charcoal-950 transition-colors duration-200">
          {renderIcon()}
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Service Scope highlights */}
        <div className="mb-4 p-2.5 rounded-xl bg-charcoal-900/60 border border-charcoal-800">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gold-400 mb-2">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Turnkey Service Execution Scope:</span>
          </div>
          <ul className="space-y-1 text-[11px] text-slate-300">
            {service.serviceDeliverables.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-gold-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between gap-3">
        <Link
          href="/#real-works"
          className="text-xs font-semibold text-gold-400 hover:text-white flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
        >
          <span>View Real Works</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <a
          href={`https://wa.me/923001234567?text=Hello%20Abu%20Ahmed%20Gulf%20Frames,%20I%20would%20like%20to%20inquire%20about%20your%20${encodeURIComponent(
            service.title
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 rounded-xl gold-gradient-bg text-charcoal-950 text-xs font-bold transition-all hover:shadow-md"
        >
          WhatsApp Quote
        </a>
      </div>
    </div>
  );
}
