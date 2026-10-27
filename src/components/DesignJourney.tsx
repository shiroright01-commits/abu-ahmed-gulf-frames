"use client";

import React from "react";
import {
  Compass,
  FileCode2,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function DesignJourney() {
  const { isRTL, t } = useLanguage();

  const stepsEn = [
    {
      step: "01",
      icon: Compass,
      title: "Site Survey & Blueprint Consultation",
      subtitle: "Laser Measurement & Structural Load Inspection",
      description:
        "Master Craftsman Abu Ahmed visits your site directly to take millimeter laser measurements, inspect structural lintels, assess wind loads, and review your architect's PDF or CAD drawings.",
      highlights: [
        "Laser-level opening analysis",
        "Wind load & glass thickness calculations",
        "Direct consultation with Senior Craftsman",
      ],
    },
    {
      step: "02",
      icon: FileCode2,
      title: "Custom 3D CAD & Profile Engineering",
      subtitle: "Bespoke Design Insertion Tailored to Architecture",
      description:
        "We do not provide off-the-shelf sizes. Our engineering team drafts exact 3D shop drawings, profile section details, drainage paths, and custom finishes (Deep Charcoal, Champagne Gold, Platinum).",
      highlights: [
        "Architectural 3D shop drawings",
        "Custom profile depth (45mm - 80mm)",
        "Pre-fabrication client approval sign-off",
      ],
    },
    {
      step: "03",
      icon: Wrench,
      title: "Direct Workshop CNC Fabrication",
      subtitle: "Hydraulic Miter Crimping & Acoustic Glazing Unit Assembly",
      description:
        "Fabrication takes place in our specialized facility. High-tensile 6063-T6 aluminum alloys are CNC-cut to flawless 45° miters, hydraulic-crimped with internal cleats, and fitted with European hardware.",
      highlights: [
        "Zero-gap dual-head CNC miter cutting",
        "Internal heavy-gauge corner cleat crimping",
        "Bench testing of motors and sliding rollers",
      ],
    },
    {
      step: "04",
      icon: ShieldCheck,
      title: "Master On-Site Installation & Warranty",
      subtitle: "Certified Anchorage, Weather-Sealing & Lifetime Support",
      description:
        "Our certified installation crew anchors each unit with Grade 316 stainless anchors, applies vulcanized continuous EPDM weather-strips, calibrates mechanisms, and hands over your 10-year warranty certificate.",
      highlights: [
        "Zero-trip flush threshold leveling",
        "Water & acoustic tightness certification",
        "10-Year Structural Framing Guarantee",
      ],
    },
  ];

  const stepsAr = [
    {
      step: "٠١",
      icon: Compass,
      title: "المعاينة الليزرية ومراجعة المخططات",
      subtitle: "رفع المقاسات الميدانية واختبار الأحمال الإنشائية",
      description:
        "يزور المعلم أبو أحمد موقع مشروعكم لرفع المقاسات بالليزر بدقة المليمتر، وفحص الأعتاب الخرسانية، وحساب مقاومة الرياح ومطابقة المخطط الهندسي.",
      highlights: [
        "تحليل استواء الفتحات ليزرياً",
        "حساب سماكة الزجاج وأحمال العواصف",
        "استشارة مباشرة مع المعلم المتمرس",
      ],
    },
    {
      step: "٠٢",
      icon: FileCode2,
      title: "الهندسة والمخططات التنفيذية 3D",
      subtitle: "دمج التصاميم بدقة في الهيكل الإنشائي",
      description:
        "لا نقدم مقاسات جاهزة مسبقاً. يقوم فريقنا برسم تفاصيل القطاعات بدقة، ومسارات تصريف مياه الأمطار، واختيار التشطيب المناسب (فحم داكن، ذهب شامبين، بلاتينيوم).",
      highlights: [
        "مخططات تفصيلية للموافقة قبل البدء",
        "سماكات بروفايل مخصصة (٤٥ إلى ٨٠ ملم)",
        "اعتماد وتوقيع العميل المسبق",
      ],
    },
    {
      step: "٠٣",
      icon: Wrench,
      title: "التصنيع الآلي في ورشة الحرفي",
      subtitle: "الكبس الهيدروليكي بزوايا ٤٥° والتجميع المحكم",
      description:
        "يتم التصنيع في ورشتنا المتخصصة؛ حيث تُقص سبائك 6063-T6 بآلات CNC بدقة متناهية، وتُكبس الزوايا هيدروليكياً بروابط داخلية صلبة وتركيب إكسسوارات أوروبية.",
      highlights: [
        "قص مزدوج بدون أي فواصل مرئية",
        "كبس زوايا هيدروليكي فائق المتانة",
        "اختبار المحركات والمحاور على المنضدة",
      ],
    },
    {
      step: "٠٤",
      icon: ShieldCheck,
      title: "التركيب الهندسي الميداني والضمان",
      subtitle: "تثبيت فولاذي معتمد، عزل محكم، وضمان هيكلي",
      description:
        "يقوم طاقم التركيب بتثبيت الإطارات ببراغي ستانلس 316 الغاطسة، وتطبيق ربل EPDM المستمر لمنع تسرب المياه والحرارة، وتسليم شهادة الضمان لمدة ١٠ سنوات.",
      highlights: [
        "وزن وتسوية العتبات الأرضية بانسيابية",
        "شهادة إحكام العزل المائي والصوتي",
        "ضمان هيكلي لمدة ١٠ سنوات معتمدة",
      ],
    },
  ];

  const steps = isRTL ? stepsAr : stepsEn;

  return (
    <section className="py-24 bg-charcoal-900/40 border-y border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold flex items-center justify-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            {t("journeyBadge", "How We Execute Your Custom Design")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white">
            {t("journeyTitle", "The Bespoke Architectural Journey")}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            {t(
              "journeySubtitle",
              "We do not sell boxed retail products. We engineer, customize, and insert bespoke aluminum solutions directly into your architectural structure."
            )}
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="charcoal-gradient-card rounded-2xl p-6 border border-charcoal-700/80 hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                {/* Step numbering badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-heading font-black text-charcoal-700 group-hover:text-gold-400/50 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-charcoal-800 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-charcoal-950 transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-3 flex-1 mb-6">
                  <div>
                    <h3 className="text-base font-heading font-bold text-white group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-[11px] text-gold-400 font-medium mt-0.5">
                      {item.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1 pt-2">
                    {item.highlights.map((hl, hlIdx) => (
                      <div
                        key={hlIdx}
                        className="flex items-center gap-1.5 text-[11px] text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-charcoal-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">
                    {isRTL ? "مرحلة " + item.step : "Stage " + item.step}
                  </span>
                  <Link
                    href="/contact"
                    className="text-gold-400 hover:text-white font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>{isRTL ? "طلب استشارة" : "Consult"}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
