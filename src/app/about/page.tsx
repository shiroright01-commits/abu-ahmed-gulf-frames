"use client";

import React from "react";
import Link from "next/link";
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
  Compass,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/siteConfig";

export default function AboutPage() {
  const { isRTL, t } = useLanguage();
  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  const trustPillarsEn = [
    {
      icon: Award,
      title: "20+ Years Master Craftsmanship",
      desc: "Two decades of hands-on aluminum profile fabrication, miter joint welding, and mechanism engineering across Kuwait and Gulf markets.",
    },
    {
      icon: ShieldCheck,
      title: "10-Year Structural Warranty",
      desc: "Every architectural installation is backed by direct structural warranty against warping, rust, and corner delamination.",
    },
    {
      icon: Wrench,
      title: "Direct Workshop Handover",
      desc: "No middlemen, broker commissions, or retail markups. You deal directly with Master Craftsman Abu Ahmed from initial laser measurements to handover.",
    },
    {
      icon: Layers,
      title: "High-Tensile 6063-T6 Alloys",
      desc: "Certified architectural aluminum extrusions offering superior rigidity, wind tolerance, and anodizing absorption.",
    },
    {
      icon: Sparkles,
      title: "European Hardware Integration",
      desc: "Fitted with German soft-close hydraulic dampers, Italian shutter tubular motors, and 304 stainless steel heavy-duty rollers.",
    },
    {
      icon: Clock,
      title: "Emergency Shutter Support",
      desc: "Rapid on-site emergency repair service for jammed rolling shutters, snapped torsion springs, and motor replacements.",
    },
  ];

  const trustPillarsAr = [
    {
      icon: Award,
      title: "خبرة تفوق ٢٠ عاماً كمعلم متمرس",
      desc: "عقدان من العمل الميداني المتواصل في سحب الألمنيوم، كبس الزوايا الهيدروليكية، وهندسة الآليات الدقيقة في الكويت ودول الخليج.",
    },
    {
      icon: ShieldCheck,
      title: "ضمان هيكلي لمدة ١٠ سنوات",
      desc: "كل تركيب معماري مدعوم بضمان مباشر ضد الاعوجاج، الصدأ، وتفكك الزوايا بفعل العوامل الجوية القاسية.",
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
    <div className="py-12 sm:py-20 space-y-16">
      {/* Breadcrumb / Top Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              {t("navHome", "Home")}
            </Link>
            <ArrowIcon className="w-3 h-3 text-charcoal-500" />
            <span className="text-gold-400 font-medium">
              {isRTL ? "من نحن (المعلم والورشة)" : "About Master Craftsman"}
            </span>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-900 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4 text-gold-400 shrink-0" />
            <span>
              {isRTL
                ? "أبو أحمد لإطارات الخليج - فني ألمنيوم خبرة ٢٠ سنة"
                : "Abu Ahmed Gulf Frames - Master Technician 20+ Years"}
            </span>
          </span>

          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            {isRTL ? (
              <>
                فني ألمنيوم معتمد <span className="gold-gradient-text">خبرة ٢٠ سنة</span>
              </>
            ) : (
              <>
                Master Aluminum Craftsman with <span className="gold-gradient-text">20+ Years Experience</span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {isRTL
              ? "نقدم خدمات تصنيع وتوريد وتركيب معمارية متكاملة لجميع أعمال الألمنيوم والشترات والمطابخ والأبواب في الكويت، بإشراف هندسي وتنفيذي مباشر من المعلم أبو أحمد."
              : "Turnkey architectural aluminum engineering, on-site laser surveys, precision workshop cutting, and certified installation across Kuwait, led directly by Master Craftsman Abu Ahmed."}
          </p>
        </div>
      </section>

      {/* Official Credentials & Bio Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-12 border border-gold-400/40 gold-glow relative overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-charcoal-950 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{isRTL ? "البيان الفني الرسمي المعتمد" : "Official Technical Scope & Credentials"}</span>
            </div>

            {/* Client's Exact Arabic Text Block */}
            <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-950/90 border border-gold-400/40 shadow-inner space-y-4">
              <p className="text-xl sm:text-3xl font-heading font-bold text-white leading-relaxed" dir="rtl">
                &ldquo;{siteConfig.bioAr}&rdquo;
              </p>
              <div className="h-px bg-charcoal-800" />
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans" dir="ltr">
                &ldquo;{siteConfig.bioEn}&rdquo;
              </p>
            </div>

            {/* 5 Core Scope Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {specialties.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-charcoal-900/90 border border-charcoal-700 hover:border-gold-400/50 transition-all flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm">{spec.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">{spec.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Location & Google Maps Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {isRTL ? "موقع الورشة والمعاينة الميدانية" : "Workshop & Survey Dispatch Location"}
            </span>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              {isRTL
                ? "مقر الورشة في محافظة الفروانية - الكويت"
                : "Fabrication Facility in Farwaniya Governorate, Kuwait"}
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              {isRTL
                ? "تقع ورشتنا المركزية في الفروانية بدولة الكويت، حيث نستقبل طلبات المخططات ونقوم بتنفيذ التفصيل والقص الآلي لكافة مشاريع الفلل السكنية والمنشآت التجارية في جميع مناطق الكويت."
                : "Our central fabrication studio is based in Farwaniya, Kuwait. We process architectural drawings, machine profiles, and dispatch laser survey teams across all governorates of Kuwait."}
            </p>

            <div className="p-5 rounded-2xl bg-charcoal-900 border border-charcoal-700/80 space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    {isRTL ? "العنوان على الخريطة:" : "Map Address:"}
                  </span>
                  <span className="text-slate-300">
                    {isRTL ? siteConfig.locationDetailsAr : siteConfig.locationDetailsEn}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    {isRTL ? "أوقات العمل الميداني والورشة:" : "Operating Hours:"}
                  </span>
                  <span className="text-slate-300">
                    {isRTL ? "السبت - الخميس: ٩:٠٠ ص - ٨:٠٠ م" : "Monday - Saturday: 9:00 AM - 8:00 PM"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneCall className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    {isRTL ? "الهاتف المباشر للتسعير والمعاينة:" : "Direct Master Phone:"}
                  </span>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-gold-400 hover:underline font-semibold" dir="ltr">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-400 hover:bg-gold-300 text-charcoal-950 font-bold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 text-xs shadow-lg shadow-gold-500/10"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{isRTL ? "فتح الموقع على خرائط جوجل" : "Open in Google Maps"}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  isRTL
                    ? "مرحباً المعلم أبو أحمد، أود حجز معاينة موقع واستشارة فنية لمشروعي في الكويت."
                    : "Hello Abu Ahmed Gulf Frames, I would like to book a site survey in Kuwait."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-charcoal-950 shrink-0" />
                <span>{isRTL ? "حجز معاينة عبر الواتساب" : "Book Survey via WhatsApp"}</span>
              </a>
            </div>
          </div>

          {/* Interactive Visual Map Preview Card */}
          <div className="lg:col-span-5">
            <div className="charcoal-gradient-card rounded-2xl p-6 border border-gold-400/40 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-charcoal-800">
                <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-gold-400" />
                  {isRTL ? "موقع الورشة المعتمد على الخريطة" : "Verified Location Card"}
                </span>
                <span className="text-[10px] uppercase font-bold text-gold-400 bg-charcoal-950 px-2 py-0.5 rounded-md border border-gold-400/30">
                  {isRTL ? "الكويت" : "Kuwait"}
                </span>
              </div>

              {/* Map Graphic Preview Container */}
              <div className="relative h-64 rounded-xl overflow-hidden border border-charcoal-700 bg-charcoal-950 flex flex-col items-center justify-center p-6 text-center space-y-3 group">
                <div className="w-14 h-14 rounded-2xl bg-gold-400/20 border border-gold-400 flex items-center justify-center text-gold-400 animate-pulse">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    {isRTL ? "أبو أحمد لإطارات الخليج - ورشة الألمنيوم" : "Abu Ahmed Gulf Frames Workshop"}
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">
                    {isRTL ? "محافظة الفروانية، الكويت" : "Farwaniya Governorate, Kuwait"}
                  </p>
                </div>

                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold-400 hover:bg-gold-300 text-charcoal-950 text-xs font-bold transition-all shadow-md mt-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{isRTL ? "انقر للانتقال إلى الخريطة" : "Click to Open Google Maps"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                {isRTL
                  ? "إمكانية إرسال فني المعاينة الميدانية إلى أي موقع في الكويت لرفع المقاسات بالليزر."
                  : "Technician available for on-site laser surveys across all areas of Kuwait."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Engineering Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            {isRTL ? "معايير هندسية صارمة" : "Uncompromising Standards"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">
            {isRTL ? "لماذا يثق العملاء في المعلم أبو أحمد؟" : "6 Pillars of Master Craftsmanship"}
          </h2>
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
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="charcoal-gradient-card rounded-2xl p-8 sm:p-12 border border-gold-400/40 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white">
            {isRTL ? "هل تود استشارة المعلم مباشرة؟" : "Ready to Discuss Your Architectural Project?"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            {isRTL
              ? "تواصل مباشرة عبر الواتساب مع المعلم أبو أحمد للحصول على استشارة فنية فورية وتحديد موعد لرفع المقاسات."
              : "Directly consult with Master Craftsman Abu Ahmed via WhatsApp for rapid technical advice and laser measurement scheduling."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                isRTL
                  ? "مرحباً المعلم أبو أحمد، أود استشارة مباشرة حول مشروع ألمنيوم في الكويت."
                  : "Hello Master Craftsman Abu Ahmed, I would like to consult about an aluminum project in Kuwait."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold px-7 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-xs"
            >
              <MessageCircle className="w-4 h-4 fill-charcoal-950 shrink-0" />
              <span>{isRTL ? "محادثة المعلم عبر الواتساب" : "Chat Directly on WhatsApp"}</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="bg-charcoal-800 hover:bg-charcoal-700 border border-charcoal-600 text-white font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2 text-xs"
            >
              <PhoneCall className="w-4 h-4 text-gold-400 shrink-0" />
              <span dir="ltr">{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
