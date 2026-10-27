"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Wrench,
  Sparkles,
  Video,
  Youtube,
  Facebook,
  Instagram,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/siteConfig";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.48 6.27 6.27 0 0 0 1.86-4.47V8.58a8.27 8.27 0 0 0 4.84 1.56V6.69z" />
  </svg>
);

export default function Footer() {
  const { isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800 text-slate-400 text-xs">
      {/* Brand Identity / 3 Premium Colors Highlight Banner */}
      <div className="bg-charcoal-900/80 border-b border-charcoal-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-300">
            <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
            <span className="font-heading font-semibold text-sm text-white">
              {isRTL
                ? "التشطيبات المعمارية السيادية المعتمدة:"
                : "Signature Gulf Architectural Palette:"}
            </span>
            <span className="text-xs text-slate-400">
              {isRTL
                ? "أنودة دقيقة وطلاء بودرة إلكتروستاتيكي عالي التحمل"
                : "Precision anodized and electrostatically powder-coated finishes"}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-charcoal-800/80 px-3 py-1.5 rounded-xl border border-charcoal-700">
              <div className="w-3.5 h-3.5 rounded-md bg-[#111827] border border-slate-600 shadow-sm" />
              <span className="text-[11px] font-medium text-slate-200">
                {isRTL ? "فحم معماري داكن (#111827)" : "Deep Charcoal (#111827)"}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-charcoal-800/80 px-3 py-1.5 rounded-xl border border-gold-400/40">
              <div className="w-3.5 h-3.5 rounded-md bg-[#C5A059] shadow-sm" />
              <span className="text-[11px] font-medium text-gold-400">
                {isRTL ? "ذهب شامبين فاخر (#C5A059)" : "Champagne Gold (#C5A059)"}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-charcoal-800/80 px-3 py-1.5 rounded-xl border border-charcoal-700">
              <div className="w-3.5 h-3.5 rounded-md bg-[#E2E8F0] shadow-sm" />
              <span className="text-[11px] font-medium text-slate-200">
                {isRTL ? "فضي بلاتيني أنودايز (#E2E8F0)" : "Anodized Platinum (#E2E8F0)"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative h-14 w-16 flex items-center justify-center rounded-xl overflow-hidden p-0.5">
                <img
                  src="/logo.png"
                  alt="Abu Ahmed Gulf Frames Official Logo"
                  width={64}
                  height={56}
                  style={{ maxWidth: "64px", maxHeight: "56px", objectFit: "contain" }}
                  className="h-full w-full object-contain filter drop-shadow-[0_0_10px_rgba(197,160,89,0.3)]"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white block">
                  {isRTL ? (
                    <>
                      أبو أحمد <span className="text-gold-400">لإطارات الخليج</span>
                    </>
                  ) : (
                    <>
                      Abu Ahmed <span className="text-gold-400">Gulf Frames</span>
                    </>
                  )}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">
                  {isRTL
                    ? "استوديو هندسة وتصنيع الألمنيوم المعماري (٢٠+ عاماً)"
                    : "Architectural Glazing & Engineering Studio (20+ Years)"}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t(
                "footerDesc",
                "We specialize strictly in bespoke architectural aluminum services, not off-the-shelf retail products. Turnkey on-site laser surveys, precision workshop fabrication, and certified installation of thermal-break windows, luxury aluminum kitchens, heavy-duty doors, and automated shutter mechanisms."
              )}
            </p>

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-300 block mb-2">
                {isRTL ? "قنواتنا الرسمية على وسائل التواصل:" : "Follow Our Architectural Channels:"}
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-charcoal-900 border border-charcoal-700 hover:border-red-500/50 hover:bg-red-500/10 text-slate-300 hover:text-red-400 flex items-center justify-center transition-all"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-charcoal-900 border border-charcoal-700 hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-charcoal-900 border border-charcoal-700 hover:border-pink-500/50 hover:bg-pink-500/10 text-slate-300 hover:text-pink-400 flex items-center justify-center transition-all"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-charcoal-900 border border-charcoal-700 hover:border-slate-300 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                  aria-label="TikTok Account"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-charcoal-900 border border-charcoal-800 space-y-1.5">
              <div className="flex items-center gap-2 text-gold-400 font-semibold text-xs">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>
                  {isRTL
                    ? "ضمان التنفيذ المباشر من الحرفي"
                    : "Technician Direct Execution Guarantee"}
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                {isRTL
                  ? "إشراف هندسي وتنفيذي مباشر من المعلم بدون وسطاء تجاريين. ضمان هيكلي لمدة ١٠ سنوات لكافة أعمال إطارات الألمنيوم المعمارية."
                  : "Direct master technician management with zero intermediary sales markups. 10-year structural warranty on all architectural framing commissions."}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wide">
              {t("footerQuickLinksTitle", "Portfolio & Studio")}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowIcon className="w-3 h-3 text-gold-400/60 shrink-0" />
                  <span>{t("navHome", "Home")}</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowIcon className="w-3 h-3 text-gold-400/60 shrink-0" />
                  <span>{isRTL ? "٣٠ عملاً موثقاً" : "30 Real Works"}</span>
                </Link>
              </li>
              <li>
                <Link href="/#videos" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <Video className="w-3 h-3 text-gold-400/60 shrink-0" />
                  <span>{isRTL ? "مقاطع الفيديو" : "Video Reels"}</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowIcon className="w-3 h-3 text-gold-400/60 shrink-0" />
                  <span>{t("navServices", "Services")}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ArrowIcon className="w-3 h-3 text-gold-400/60 shrink-0" />
                  <span>{t("navBookSurvey", "Book Site Survey")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Specializations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wide">
              {t("footerServicesTitle", "Engineering Services")}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/services"
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowIcon className="w-3 h-3 text-gold-400/60 shrink-0" />
                  <span>{isRTL ? "واجهات ونوافذ الزجاج الإنشائي" : "Architectural Glazing Services"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowIcon className="w-3 h-3 text-gold-400/60 shrink-0" />
                  <span>{isRTL ? "مطابخ ألمنيوم مقاومة للماء ١٠٠٪" : "Bespoke Kitchen Fit-Outs"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowIcon className="w-3 h-3 text-gold-400/60 shrink-0" />
                  <span>{isRTL ? "أبواب محورية وسحابة فاخرة" : "Pivot & Bi-Fold Door Engineering"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowIcon className="w-3 h-3 text-gold-400/60 shrink-0" />
                  <span>{isRTL ? "شترات كهربائية بمحركات إيطالية" : "Automated Motorized Shutters"}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <ArrowIcon className="w-3 h-3 text-gold-400/60 shrink-0" />
                  <span>{isRTL ? "لوفرات وتكسيات ألمنيوم معمارية" : "Curtain Walls & Custom Louvers"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Workshop */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm tracking-wide">
              {t("footerContactTitle", "Workshop & Site Consultations")}
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  {isRTL
                    ? "المنطقة الصناعية الرئيسية، سوق الألمنيوم، باكستان"
                    : "Main Industrial Area, Aluminum Market, Pakistan"}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white transition-colors" dir="ltr">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    isRTL
                      ? "مرحباً المعلم أبو أحمد، أود حجز استشارة ومعاينة موقع."
                      : "Hello Abu Ahmed Gulf Frames, I would like to book a site consultation."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-medium"
                >
                  {isRTL ? "استشارة مباشرة عبر الواتساب" : "WhatsApp Direct Consultation"}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>
                  {isRTL
                    ? "السبت - الخميس: ٩:٠٠ ص - ٨:٠٠ م"
                    : "Mon - Sat: 9:00 AM - 8:00 PM"}
                </span>
              </div>
              <div className="pt-2">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-charcoal-900 border border-charcoal-700 text-gold-400 hover:border-gold-400 transition-colors text-[11px] font-semibold"
                >
                  <Wrench className="w-3.5 h-3.5" />
                  <span>{isRTL ? "طوارئ صيانة الشترات" : "Emergency Shutter Repair Service"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-5 border-t border-charcoal-800 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            &copy; 2026 {t("footerCopyright", "Abu Ahmed Gulf Frames. Master Craftsman Architectural Services. All Rights Reserved.")}
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              YouTube
            </a>
            <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              Facebook
            </a>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              Instagram
            </a>
            <a href={siteConfig.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
