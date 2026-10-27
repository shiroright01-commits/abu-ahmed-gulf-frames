"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import ShutterComparison from "@/components/ShutterComparison";
import {
  Compass,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { isRTL, t } = useLanguage();

  const categories = [
    { id: "all", label: isRTL ? "كافة الخدمات الهندسية" : "All Engineering Services" },
    { id: "windows", label: isRTL ? "الزجاج الإنشائي والنوافذ" : "Glazing & Windows" },
    { id: "kitchens", label: isRTL ? "مطابخ ألمنيوم مقاومة للماء" : "Modular Kitchen Fit-Outs" },
    { id: "doors", label: isRTL ? "أبواب المداخل الفاخرة" : "Doors & Entrances" },
    { id: "shutters", label: isRTL ? "هندسة الشترات الآلية" : "Shutter Engineering" },
    { id: "custom", label: isRTL ? "الواجهات واللوفرات" : "Custom Facades" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === activeCategory);

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-900 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>
              {isRTL
                ? "أبو أحمد لإطارات الخليج - خدمات معمارية متكاملة"
                : "Abu Ahmed Gulf Frames - Turnkey Services"}
            </span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {isRTL ? (
              <>
                خدمات الهندسة <span className="gold-gradient-text">المعمارية</span> والتنفيذ الميداني
              </>
            ) : (
              <>
                Architectural Engineering <span className="gold-gradient-text">Services</span>
              </>
            )}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isRTL
              ? "نقدم خدمات هندسة وتصنيع وتركيب الألمنيوم المعماري الدقيق حسب الطلب. نحن لا نبيع منتجات تجزئة جاهزة. كل مشروع هو خدمة متكاملة مخصصة وفقاً لمخططاتك المعمارية ومواصفات موقعك الدقيقة."
              : "We provide bespoke architectural aluminum engineering, fabrication, and precision installation services. We do not sell retail off-the-shelf products. Every project is an end-to-end commissioned service tailored to your architectural drawings and site specifications."}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "gold-gradient-bg text-charcoal-950 font-bold shadow-lg shadow-gold-500/10"
                  : "bg-charcoal-900 text-slate-300 hover:text-white border border-charcoal-700 hover:border-gold-400/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <ShutterComparison />
      </section>
    </div>
  );
}
