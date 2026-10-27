"use client";

import React from "react";
import {
  Award,
  ShieldCheck,
  MapPin,
  ExternalLink,
  PhoneCall,
  MessageCircle,
  Clock,
  Wrench,
  Layers,
  Sparkles,
  CheckCircle2,
  Maximize2,
  Compass,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/siteConfig";

export default function AboutSection() {
  const { isRTL, t } = useLanguage();

  const trustPillarsEn = [
    {
      icon: Award,
      title: "20+ Years Master Craftsmanship",
      desc: "Two decades of hands-on aluminum profile fabrication, miter joint welding, and mechanism engineering.",
    },
    {
      icon: ShieldCheck,
      title: "10-Year Structural Warranty",
      desc: "Every architectural installation is backed by direct structural warranty against warping, rust, and cracking.",
    },
    {
      icon: Wrench,
      title: "Direct Workshop Fabrication",
      desc: "No middlemen or retail markups. You work directly with Master Craftsman Abu Ahmed from survey to final handover.",
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

  const trustPillarsAr = [
    {
      icon: Award,
      title: "خبرة تفوق ٢٠ عاماً كمعلم متمرس",
      desc: "عقدان من العمل الميداني المتواصل في سحب الألمنيوم، كبس الزوايا الهيدروليكية، وهندسة الآليات الدقيقة.",
    },
    {
      icon: ShieldCheck,
      title: "ضمان هيكلي لمدة ١٠ سنوات",
      desc: "كل تركيب معماري مدعوم بضمان مباشر ضد الاعوجاج، الصدأ، وتفكك الزوايا بفعل العوامل الجوية.",
    },
    {
      icon: Wrench,
      title: "تصنيع مباشر في ورشتنا المتخصصة",
      desc: "بدون أي وسطاء أو هوامش ربح تجارية. أنت تتعامل مباشرة مع المعلم أبو أحمد من رفع المقاسات وحتى التسليم النهائي.",
    },
    {
      icon: Layers,
      title: "سبائك 6063-T6 معمارية فائقة المتانة",
      desc: "سحب ألمنيوم معتمد يوفر أعلى درجات الصلابة، ومقاومة الرياح، وامتصاص فائق لطبقة الأنودة والحماية.",
    },
    {
      icon: Sparkles,
      title: "إكسسوارات ومحركات أوروبية معتمدة",
      desc: "مجهزة بمفصلات هيدروليكية ألمانية ناعمة الإغلاق، ومحركات شتر إيطالية قوية، ومحاور ستانلس 304 صلبة.",
    },
    {
      icon: Clock,
      title: "خدمة طوارئ لصيانة الشترات",
      desc: "استجابة سريعة في الموقع للشترات العالقة، استبدال النوابض المكسورة، وتغيير المحركات التالفة.",
    },
  ];

  const trustPillars = isRTL ? trustPillarsAr : trustPillarsEn;
  const specialties = isRTL ? siteConfig.specialtiesAr : siteConfig.specialtiesEn;

  return (
    <section id="about" className="py-24 bg-charcoal-900/70 border-t border-charcoal-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-charcoal-950 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Award className="w-4 h-4 text-gold-400 shrink-0" />
            <span>
              {isRTL
                ? "نبذة عن المعلم والورشة - أبو أحمد لإطارات الخليج"
                : "About Master Craftsman Abu Ahmed & Workshop"}
            </span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
            {isRTL ? (
              <>
                فني ألمنيوم خبرة <span className="gold-gradient-text">٢٠ سنة</span> في الخليج
              </>
            ) : (
              <>
                Master Aluminum Craftsman with <span className="gold-gradient-text">20+ Years</span> Heritage
              </>
            )}
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {isRTL
              ? "نقدم خدمات تصنيع وتركيب مخصصة حسب الطلب بأعلى المعايير المعمارية، بدون وسطاء تجاريين، وبإشراف ميداني مباشر."
              : "Bespoke architectural aluminum fabrication and certified on-site rigging. Directly managed by Master Craftsman Abu Ahmed with zero sales intermediary markups."}
          </p>
        </div>

        {/* Master Craftsman Official Statement Banner */}
        <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-10 border border-gold-400/50 shadow-2xl relative overflow-hidden gold-border-glow">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Client's Exact Arabic Credential Headline */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>{isRTL ? "البيان الفني الرسمي المعتمد" : "Official Technical Credentials"}</span>
              </div>

              {/* Exact Arabic Text Highlight */}
              <div className="p-5 sm:p-6 rounded-2xl bg-charcoal-950/90 border border-gold-400/30 space-y-3">
                <p className="text-lg sm:text-2xl font-heading font-bold text-white leading-relaxed text-balance" dir="rtl">
                  &ldquo;{siteConfig.bioAr}&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans" dir="ltr">
                  &ldquo;{siteConfig.bioEn}&rdquo;
                </p>
              </div>

              {/* Specialties Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {specialties.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-charcoal-900/90 border border-charcoal-700/80 flex items-start gap-3 hover:border-gold-400/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-white text-xs">{spec.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Verified Workshop Location Card & Google Maps Button */}
            <div className="lg:col-span-4 bg-charcoal-950 rounded-2xl p-6 border border-charcoal-700/90 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-charcoal-800">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block">
                      {isRTL ? "موقع الورشة والخدمة" : "Workshop Location"}
                    </span>
                    <h4 className="text-sm font-heading font-bold text-white">
                      {isRTL ? siteConfig.locationAr : siteConfig.location}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {isRTL ? "العنوان المعتمد:" : "Official Address:"}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      {isRTL ? siteConfig.locationDetailsAr : siteConfig.locationDetailsEn}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-300">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {isRTL ? "ساعات العمل واستقبال الطلبات:" : "Working Hours:"}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      {isRTL ? "السبت - الخميس: ٩:٠٠ ص - ٨:٠٠ م" : "Mon - Sat: 9:00 AM - 8:00 PM"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-300">
                  <PhoneCall className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {isRTL ? "رقم الاتصال المباشر:" : "Direct Call Hotline:"}
                    </span>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-gold-400 hover:underline font-semibold"
                      dir="ltr"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Google Maps Link Action */}
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-charcoal-800 hover:bg-gold-400 text-slate-200 hover:text-charcoal-950 font-bold py-3 px-4 rounded-xl border border-charcoal-600 hover:border-gold-400 transition-all flex items-center justify-center gap-2 text-xs group shadow-md"
              >
                <MapPin className="w-4 h-4 text-gold-400 group-hover:text-charcoal-950 transition-colors shrink-0" />
                <span>{isRTL ? "عرض الموقع على خرائط جوجل" : "Open Location in Google Maps"}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
              </a>

              {/* Instant WhatsApp Consultation */}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  isRTL
                    ? "مرحباً المعلم أبو أحمد، اطلعت على موقعكم وأود حجز موعد معاينة واستشارة هندسية في الكويت."
                    : "Hello Master Craftsman Abu Ahmed, I would like to book an on-site survey and consultation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-charcoal-950 shrink-0" />
                <span>{isRTL ? "حجز موعد معاينة عبر الواتساب" : "Book Site Survey via WhatsApp"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Engineering & Craftsmanship Trust Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              {isRTL ? "معايير هندسية صارمة لا تقبل المساومة" : "Rigorous Engineering Standards"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              {isRTL
                ? "لماذا يثق العملاء والمهندسون في المعلم أبو أحمد؟"
                : "Why Architects & Villa Owners Trust Abu Ahmed Gulf Frames"}
            </h3>
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
                  <h4 className="text-base font-heading font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
