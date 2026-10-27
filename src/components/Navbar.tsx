"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Compass,
  Globe,
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, isRTL, t } = useLanguage();

  const navLinks = [
    { label: t("navHome"), href: "/" },
    { label: t("navAbout"), href: "/about" },
    { label: t("navPortfolio"), href: "/projects" },
    { label: t("navServices"), href: "/services" },
    { label: isRTL ? "رحلة التنفيذ" : "Bespoke Process", href: "/#process" },
    { label: t("navBookSurvey"), href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar: Contact, Socials & Authority */}
      <div className="bg-[#0B0F14]/90 border-b border-charcoal-800 text-xs text-slate-400 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-gold-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>
                {isRTL
                  ? "خبرة أكثر من ٢٠ عاماً كمعلم ألمنيوم معتمد"
                  : "20+ Years Master Aluminum Craftsman"}
              </span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <Compass className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
              <span>
                {isRTL
                  ? "استوديو خدمات وهندسة الألمنيوم المعماري المعتمد"
                  : "Bespoke Architectural Aluminum Services & Portfolio Studio"}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            {/* Social Media Links in Top Bar */}
            <div className="hidden sm:flex items-center gap-2 border-r border-charcoal-800 pr-3">
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-red-500 transition-colors p-1"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors p-1"
                aria-label="Facebook Page"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-500 transition-colors p-1"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="TikTok Account"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Language Toggle in Topbar */}
            <div className="flex items-center gap-1 text-[11px] font-semibold bg-charcoal-800/80 px-2 py-0.5 rounded-lg border border-charcoal-700">
              <Globe className="w-3 h-3 text-gold-400" />
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  language === "en" ? "text-gold-400 font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <span className="text-charcoal-600">|</span>
              <button
                type="button"
                onClick={() => setLanguage("ar")}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  language === "ar" ? "text-gold-400 font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                العربية
              </button>
            </div>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="hover:text-gold-400 transition-colors hidden sm:flex items-center gap-1.5 text-slate-300 font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span dir="ltr">{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                isRTL
                  ? "مرحباً المعلم أبو أحمد، أود حجز معاينة موقع واستشارة فنية مع المعلم أبو أحمد."
                  : "Hello Abu Ahmed Gulf Frames, I would like to book a site consultation."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-lg hover:bg-emerald-600/30 transition-colors flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{t("navConsultWhatsApp")}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0F14]/90 border-b border-charcoal-700/60 shadow-lg shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative h-12 w-14 flex items-center justify-center rounded-xl overflow-hidden p-0.5 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Abu Ahmed Gulf Frames Official Logo"
                width={56}
                height={48}
                style={{ maxWidth: "56px", maxHeight: "48px", objectFit: "contain" }}
                className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(197,160,89,0.4)]"
              />
            </div>
            <div>
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white block group-hover:text-gold-300 transition-colors">
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
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 block font-medium">
                {isRTL
                  ? "استوديو الألمنيوم والواجهات المعمارية المعتمدة"
                  : "Architectural Aluminum & Glazing Studio"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-150 relative py-1 hover:text-gold-400 ${
                    isActive ? "text-gold-400 font-semibold" : "text-slate-300"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Desktop Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Prominent Switcher */}
            <div className="flex items-center bg-charcoal-800/90 border border-charcoal-700 rounded-xl p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === "en"
                    ? "bg-gold-500 text-charcoal-950 shadow-sm font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ar")}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === "ar"
                    ? "bg-gold-500 text-charcoal-950 shadow-sm font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                العربية
              </button>
            </div>

            <Link
              href="/contact"
              className="gold-gradient-bg text-charcoal-950 font-bold px-4 py-2.5 rounded-xl hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 text-sm"
            >
              <span>{t("navBookSurvey")}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? "rotate-180" : ""}`} />
            </Link>
          </div>

          {/* Mobile Menu & Switcher Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="px-2.5 py-1.5 rounded-xl bg-charcoal-800 border border-charcoal-700 text-gold-400 text-xs font-bold"
              aria-label="Toggle language"
            >
              {language === "en" ? "العربية" : "EN"}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-charcoal-800 border border-charcoal-700 text-slate-300 hover:text-white hover:border-gold-400/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0F14] border-b border-charcoal-700 px-4 py-6 space-y-4 shadow-2xl">
            {/* Language Switcher in Mobile Drawer */}
            <div className="flex items-center justify-between bg-charcoal-900 border border-charcoal-800 p-2 rounded-xl">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-gold-400" />
                {isRTL ? "اختر لغة الموقع" : "Select Language"}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    language === "en"
                      ? "bg-gold-500 text-charcoal-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("ar")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    language === "ar"
                      ? "bg-gold-500 text-charcoal-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-charcoal-800 text-gold-400 border border-gold-400/30"
                        : "text-slate-300 hover:bg-charcoal-800/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Social Links in Mobile Menu */}
            <div className="flex items-center justify-center gap-4 py-2 border-t border-charcoal-800 text-slate-300">
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-charcoal-800 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-charcoal-800 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-charcoal-800 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-charcoal-800 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 border-t border-charcoal-800 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="gold-gradient-bg text-charcoal-950 font-bold px-4 py-3 rounded-xl text-center text-sm flex items-center justify-center gap-2"
              >
                <span>{t("navBookSurvey")}</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${isRTL ? "rotate-180" : ""}`}
                />
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="bg-charcoal-800 border border-charcoal-700 text-white font-medium px-4 py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-gold-400 shrink-0" />
                <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
