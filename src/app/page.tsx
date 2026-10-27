"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import ServiceCard from "@/components/ServiceCard";
import ShutterComparison from "@/components/ShutterComparison";
import TrustSection from "@/components/TrustSection";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import DesignJourney from "@/components/DesignJourney";
import VideoShowcase from "@/components/VideoShowcase";
import HeroShowcaseCard from "@/components/HeroShowcaseCard";
import {
  Award,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Flame,
  Droplets,
  BugOff,
  CheckCircle2,
  XCircle,
  Compass,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { language, isRTL, t } = useLanguage();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-charcoal-800">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-charcoal-700/20 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Brand Logo Badge */}
            <div className="lg:col-span-7 space-y-6">
              {/* Brand Logo & Authority Badge */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl p-1 bg-charcoal-900 border border-gold-400/40 shadow-xl shadow-gold-500/10 flex items-center justify-center shrink-0">
                  <img
                    src="/logo.png"
                    alt="Abu Ahmed Gulf Frames Crest"
                    width={80}
                    height={80}
                    style={{ maxWidth: "80px", maxHeight: "80px", objectFit: "contain" }}
                    className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]"
                  />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-900 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider shadow-sm">
                    <Award className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{t("heroBadge", "20 Years Master Architectural Services")}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block font-medium">
                    {isRTL
                      ? "أبو أحمد لإطارات الخليج • استوديو الألمنيوم والواجهات المعمارية المعتمدة"
                      : "Abu Ahmed Gulf Frames • Bespoke Architectural Glazing Studio"}
                  </span>
                </div>
              </div>

              {/* Headline */}
              {isRTL ? (
                <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight leading-[1.2] text-white">
                  هندسة وتصنيع <br />
                  <span className="gold-gradient-text">الألمنيوم المعماري</span> والتركيب الميداني.
                </h1>
              ) : (
                <h1 className="text-4xl sm:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] text-white">
                  Bespoke Architectural <br />
                  <span className="gold-gradient-text">Aluminum Services</span> & Portfolio.
                </h1>
              )}

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                {t(
                  "heroDescription",
                  "Abu Ahmed Gulf Frames specializes strictly in turnkey architectural services, not retail shelf products. We customize, fabricate, and insert high-specification structural glazing, 100% moisture-proof aluminum kitchens, heavy-duty entrance doors, and automated security shutter mechanisms directly into your architectural blueprints."
                )}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`https://wa.me/96594462328?text=${encodeURIComponent(
                    isRTL
                      ? "مرحباً المعلم أبو أحمد، أود حجز معاينة موقع واستشارة فنية لمشروعي."
                      : "Hello Abu Ahmed Gulf Frames, I would like to book a site consultation for my project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 text-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-charcoal-950 shrink-0" />
                  <span>{t("heroCtaWhatsApp", "Book Site Survey on WhatsApp")}</span>
                </a>
                <Link
                  href="/projects"
                  className="bg-charcoal-800 hover:bg-charcoal-700 border border-charcoal-600 hover:border-gold-400/60 text-white font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 text-sm"
                >
                  <Briefcase className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{t("heroCtaPortfolio", "Explore Portfolio Case Studies")}</span>
                </Link>
              </div>

              {/* Trust Counters */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-charcoal-800/80">
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                    {t("heroStat1Number", "20+")}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    {t("heroStat1Label", "Years Master Craftsmanship")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-gold-400">
                    {t("heroStat2Number", "100%")}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    {t("heroStat2Label", "Bespoke Custom Execution")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                    {t("heroStat3Number", "1,500+")}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    {t("heroStat3Label", "Completed Commissions")}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Architectural Showcase */}
            <div className="lg:col-span-5 relative">
              <HeroShowcaseCard />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity / 3 Premium Colors Highlight Banner */}
      <section className="py-8 bg-charcoal-950/70 border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[11px] uppercase tracking-widest text-gold-400 font-semibold flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                {t("colorBannerTag", "Signature Gulf Architectural Palette")}
              </span>
              <h3 className="text-lg font-heading font-bold text-white">
                {t(
                  "colorBannerTitle",
                  "Selected 3 Signature Finishes for High-End Architectural Projects"
                )}
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-3 bg-charcoal-900 px-4 py-2.5 rounded-xl border border-charcoal-700 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-[#111827] border border-slate-500 shadow-inner flex items-center justify-center text-[10px] text-slate-400 font-bold">
                  DC
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t("color1Name", "Deep Charcoal")}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t("color1Desc", "#111827 (Primary Structural Frame)")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-charcoal-900 px-4 py-2.5 rounded-xl border border-gold-400/40 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-[#C5A059] shadow-inner flex items-center justify-center text-[10px] text-charcoal-950 font-bold">
                  CG
                </div>
                <div>
                  <div className="text-xs font-bold text-gold-400">
                    {t("color2Name", "Champagne Gold")}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t("color2Desc", "#C5A059 (Luxury Anodized Finish)")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-charcoal-900 px-4 py-2.5 rounded-xl border border-charcoal-700 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-[#E2E8F0] shadow-inner flex items-center justify-center text-[10px] text-charcoal-950 font-bold">
                  AP
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t("color3Name", "Anodized Platinum")}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {t("color3Desc", "#E2E8F0 (Metallic Base Highlight)")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Step Bespoke Design-to-Installation Journey */}
      <div id="process">
        <DesignJourney />
      </div>

      {/* Interactive Before & After Comparison Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <BeforeAfterSlider />
      </section>

      {/* Core Engineering Services Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8 border-t border-charcoal-800">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center justify-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            {isRTL ? "تنفيذ هندسي متكامل" : "Turnkey Engineering Execution"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white">
            {isRTL ? "خدمات الألمنيوم المعماري المعتمدة" : "Architectural Aluminum Services"}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            {isRTL
              ? "نقدم خدمات متكاملة بدءاً من رفع المقاسات الليزرية والحسابات الإنشائية وحتى التصنيع في ورشتنا والتركيب الميداني المعتمد."
              : "We deliver complete service execution from initial laser measurement and structural calculation to direct workshop fabrication and certified on-site installation."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-white font-medium text-xs border border-charcoal-600 hover:border-gold-400 transition-colors"
          >
            <span>
              {isRTL
                ? "استعراض دليل الخدمات والمواصفات الكامل"
                : "Explore Complete Services & Deliverables Guide"}
            </span>
            <ArrowRight className={`w-4 h-4 text-gold-400 ${isRTL ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </section>

      {/* Dedicated Video Showcase Section */}
      <div id="videos" className="border-t border-charcoal-800">
        <VideoShowcase />
      </div>

      {/* Deep Dive: Shutter Mechanisms */}
      <section id="shutters" className="py-20 bg-charcoal-950 border-y border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ShutterComparison />
        </div>
      </section>

      {/* Spotlight: 100% Waterproof Modular Aluminum Kitchen Fit-Out Service */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-2">
              <Droplets className="w-4 h-4 text-gold-400 shrink-0" />
              {isRTL ? "ابتكار التجهيز المخصص" : "Bespoke Fit-Out Innovation"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
              {isRTL
                ? "لماذا تستبدل مطابخ الألمنيوم المطابخ الخشبية وMDF إلى الأبد؟"
                : "Why Aluminum Kitchens Are Replacing Wood & MDF Forever"}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isRTL
                ? "الخزائن الخشبية العادية تمتص تسربات المياه وتنتفخ خلال الرطوبة الصيفية وتجذب حشرات الخشب وتتلف خلال ٣-٥ سنوات. نقوم ببناء هياكل ألمنيوم صلبة مقاومة للماء ١٠٠٪ تدوم مدى الحياة دون أي تلف."
                : "Standard wooden cabinets absorb water leaks under the sink, swell during humid summers, host termite colonies, and decay within 3 to 5 years. Abu Ahmed Gulf Frames builds full-aluminum carcasses that remain pristine for a lifetime."}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-charcoal-900 border border-charcoal-800 text-center">
                <Droplets className="w-6 h-6 text-gold-400 mx-auto mb-1.5" />
                <div className="text-xs font-bold text-white">
                  {isRTL ? "مقاوم للماء ١٠٠٪" : "100% Water Proof"}
                </div>
                <div className="text-[10px] text-slate-400">
                  {isRTL ? "لا انتفاخ أبداً" : "Zero swelling"}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-charcoal-900 border border-charcoal-800 text-center">
                <BugOff className="w-6 h-6 text-gold-400 mx-auto mb-1.5" />
                <div className="text-xs font-bold text-white">
                  {isRTL ? "مقاوم لحشرات الخشب" : "Termite Immune"}
                </div>
                <div className="text-[10px] text-slate-400">
                  {isRTL ? "معدن معقم ومحمي" : "Pest-proof metal"}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-charcoal-900 border border-charcoal-800 text-center">
                <Flame className="w-6 h-6 text-gold-400 mx-auto mb-1.5" />
                <div className="text-xs font-bold text-white">
                  {isRTL ? "مقاوم للحريق" : "Fire Retardant"}
                </div>
                <div className="text-[10px] text-slate-400">
                  {isRTL ? "غير قابل للاشتعال" : "Non-combustible"}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/services"
                className="gold-gradient-bg text-charcoal-950 font-bold px-6 py-3 rounded-xl text-xs inline-flex items-center gap-2 hover:shadow-lg hover:shadow-gold-500/20 transition-all"
              >
                <span>
                  {isRTL ? "عرض جميع الخدمات والمواصفات" : "View All Services & Specifications"}
                </span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-8 border border-charcoal-700/80 shadow-2xl">
              <h3 className="text-lg font-heading font-bold text-white mb-4 pb-3 border-b border-charcoal-800">
                {isRTL ? "مقارنة متانة المواد ومقاومتها" : "Material Durability Comparison"}
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-charcoal-950/80 border border-charcoal-800 flex items-center justify-between">
                  <span className="font-semibold text-white">
                    {isRTL ? "تسربات المياه والرطوبة العالية" : "Water Leaks & Humidity"}
                  </span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{isRTL ? "ألمنيوم: غير متأثر تماماً" : "Aluminum: 100% Unaffected"}</span>
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-charcoal-950/80 border border-charcoal-800 flex items-center justify-between">
                  <span className="font-semibold text-white">
                    {isRTL ? "حشرات الخشب والأرضة" : "Termite & Borer Infestations"}
                  </span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{isRTL ? "ألمنيوم: حماية تامة ٠٪ إصابة" : "Aluminum: 0% Infestation Risk"}</span>
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-charcoal-950/80 border border-charcoal-800 flex items-center justify-between">
                  <span className="font-semibold text-white">
                    {isRTL ? "انتفاخ وتمدد الخزائن" : "Cabinet Carcass Swelling"}
                  </span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{isRTL ? "ألمنيوم: لا يتمدد ولا ينتفخ أبداً" : "Aluminum: Never Expands"}</span>
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-charcoal-950/80 border border-charcoal-800 flex items-center justify-between text-slate-400">
                  <span className="font-medium">
                    {isRTL ? "الخشب التقليدي وMDF" : "Traditional Wood/MDF"}
                  </span>
                  <span className="text-rose-400 font-medium flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{isRTL ? "يتعفن ويتفكك خلال ٣-٥ سنوات" : "Rots & Delaminates in 3-5 Yrs"}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <TechnicalSpecs />

      {/* Trust & Engineering Pillars */}
      <TrustSection />

      {/* High-Converting CTA Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="charcoal-gradient-card rounded-2xl p-8 sm:p-14 border border-gold-400/40 gold-glow text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-950 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-400/30">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>{t("ctaBadge", "Abu Ahmed Gulf Frames - Master Technician Guarantee")}</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white leading-tight">
              {t("ctaTitle", "Ready to Commission Your Architectural Aluminum Service?")}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {t(
                "ctaSubtitle",
                "Skip agency markups and deal directly with Master Craftsman Abu Ahmed. Send us your site dimensions, architectural drawings, or book a free on-site survey."
              )}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={`https://wa.me/96594462328?text=${encodeURIComponent(
                  isRTL
                    ? "مرحباً المعلم أبو أحمد، أود حجز معاينة موقع واستشارة فنية لمشروعي."
                    : "Hello Abu Ahmed Gulf Frames, I would like to schedule a site measurement and consultation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-charcoal-950 shrink-0" />
                <span>{t("ctaWhatsAppBtn", "Book Site Measurement on WhatsApp")}</span>
              </a>

              <a
                href="tel:+96594462328"
                className="bg-charcoal-800 hover:bg-charcoal-700 border border-charcoal-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-gold-400 shrink-0" />
                <span dir="ltr">{t("ctaCallBtn", "Call Master Technician")} : +965 9446 2328</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
