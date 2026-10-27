"use client";

import React, { useState } from "react";
import {
  Zap,
  RotateCw,
  ShieldCheck,
  BatteryCharging,
  Sliders,
  Settings,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ShutterComparison() {
  const [activeTab, setActiveTab] = useState<"comparison" | "motorized" | "manual">(
    "comparison"
  );
  const { isRTL, t } = useLanguage();

  return (
    <div className="bg-charcoal-900/90 rounded-2xl border border-charcoal-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-charcoal-800 pb-6">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-800 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>
              {isRTL
                ? "خبرة أكثر من ٢٠ عاماً في هندسة أنظمة الشترات"
                : "20-Year Master Technician Specialization"}
            </span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            {isRTL
              ? "مقارنة أنظمة الشترات: الآلية الكهربائية مقابل اليدوية"
              : "Rolling Shutter Mechanisms Comparison"}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            {isRTL
              ? "من محركات الشتر الأنبوبية الذكية بأجهزة التحكم عن بعد وحتى أنظمة التجاوز اليدوية لحالات الطوارئ، نهندس شترات بدون أي أعطال تشغيلية."
              : "From smart remote-controlled tubular motors to fail-safe manual crank gearboxes, we engineer durable systems designed for zero operational failure."}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-charcoal-950 rounded-xl border border-charcoal-800">
          <button
            type="button"
            onClick={() => setActiveTab("comparison")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "comparison"
                ? "bg-charcoal-800 text-gold-400 border border-gold-400/30 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {isRTL ? "مقارنة مباشرة" : "Direct Comparison"}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("motorized")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "motorized"
                ? "bg-charcoal-800 text-gold-400 border border-gold-400/30 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {isRTL ? "الشتر الكهربائي الذكي" : "Motorized Deep Dive"}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("manual")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "manual"
                ? "bg-charcoal-800 text-gold-400 border border-gold-400/30 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {isRTL ? "التحكم اليدوي الميكانيكي" : "Manual Overrides"}
          </button>
        </div>
      </div>

      {/* Tab 1: Comparison Matrix */}
      {activeTab === "comparison" && (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs" dir={isRTL ? "rtl" : "ltr"}>
              <thead>
                <tr className="border-b border-charcoal-700 text-slate-400">
                  <th className={`pb-3.5 font-semibold uppercase tracking-wider text-[11px] ${isRTL ? "text-right" : "text-left"}`}>
                    {isRTL ? "المعيار الهندسي" : "Engineering Aspect"}
                  </th>
                  <th className={`pb-3.5 font-semibold uppercase tracking-wider text-gold-400 text-[11px] ${isRTL ? "text-right" : "text-left"}`}>
                    {isRTL ? "الشتر الأوتوماتيكي الكهربائي" : "Automatic Motorized Shutter"}
                  </th>
                  <th className={`pb-3.5 font-semibold uppercase tracking-wider text-slate-200 text-[11px] ${isRTL ? "text-right" : "text-left"}`}>
                    {isRTL ? "الشتر اليدوي الميكانيكي" : "Manual Mechanical Shutter"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-800 text-slate-300">
                <tr>
                  <td className="py-4 font-semibold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{isRTL ? "نظام الدفع والتشغيل" : "Drive System"}</span>
                  </td>
                  <td className="py-4 text-slate-200">
                    {isRTL
                      ? "محرك أنبوبي أوروبي عالي العزم (٦٠-٢٣٠ نيوتن متر) مخفي بالكامل داخل ماسورة الدوران"
                      : "High-torque European tubular motor (60-230 Nm) housed invisibly inside axle barrel"}
                  </td>
                  <td className="py-4 text-slate-300">
                    {isRTL
                      ? "نوابض التواء فولاذية معايرة ومزيتة، أو صندوق تروس ميكانيكي مع ذراع تدوير"
                      : "Calibrated oil-tempered torsion springs, gear reduction crank box, or chain hoist"}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white flex items-center gap-2">
                    <BatteryCharging className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{isRTL ? "بروتوكول انقطاع الكهرباء" : "Power Cut Protocol"}</span>
                  </td>
                  <td className="py-4 text-slate-200">
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        {isRTL
                          ? "حماية مزدوجة: ذراع تدوير يدوي قابل للفك + بطارية UPS احتياطية"
                          : "Dual Protection: Detachable hand crank + UPS backup"}
                      </span>
                    </span>
                  </td>
                  <td className="py-4 text-slate-300">
                    {isRTL
                      ? "استقلالية ميكانيكية ١٠٠٪ دون أي اعتماد على شبكة الكهرباء"
                      : "100% mechanical independence; unaffected by electricity grid interruptions"}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white flex items-center gap-2">
                    <Settings className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{isRTL ? "طرق التحكم والتشغيل" : "Operation Controls"}</span>
                  </td>
                  <td className="py-4 text-slate-200">
                    {isRTL
                      ? "أجهزة تحكم لاسلكية برمز مشفر، مفتاح جداري مغناطيسي، أو مفتاح بمفتاح أمان"
                      : "Wireless rolling-code remotes, magnetic wall switch, key switch, or smart automation"}
                  </td>
                  <td className="py-4 text-slate-300">
                    {isRTL
                      ? "مقبض رفع يدوي مريح، أقفال جانبية بمفتاح، أو ذراع تدوير ميكانيكي سريع"
                      : "Hand lift bar, exterior keyed padlock slide locks, or rotating mechanical crank rod"}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{isRTL ? "ميزات الأمان والحماية" : "Security Features"}</span>
                  </td>
                  <td className="py-4 text-slate-200">
                    {isRTL
                      ? "فرامل محرك تمنع الرفع القسري من الخارج؛ أقفال آلية في المجرى السفلي"
                      : "Motor brake prevents manual forced prying; automatic bottom rail lock pins"}
                  </td>
                  <td className="py-4 text-slate-300">
                    {isRTL
                      ? "مزاليج فولاذية مقواة مضادة للقص تثبت في الفتحات الأرضية والجانبية"
                      : "Dual hardened steel side shoot bolts with anti-cut floor receiver strikes"}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-white">
                    {isRTL ? "الضمان والصيانة المعتمدة" : "Warranty & Maintenance"}
                  </td>
                  <td className="py-4 text-gold-400 font-bold">
                    {isRTL
                      ? "ضمان استبدال المحرك ٥ سنوات + فحص دوري مجاني"
                      : "5-Year Motor Replacement Warranty + Annual Free Inspection"}
                  </td>
                  <td className="py-4 text-gold-400 font-bold">
                    {isRTL
                      ? "ضمان ١٠ سنوات لنوابض الالتواء وهيكل الألمنيوم الثقيل"
                      : "10-Year Torsion Spring & Heavy Extrusion Structural Warranty"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Motorized Deep Dive */}
      {activeTab === "motorized" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="bg-charcoal-950/70 p-5 rounded-xl border border-charcoal-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">
              {isRTL ? "محركات الأنابيب الداخلية المدمجة" : "Internal Tubular Axle Motors"}
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {isRTL
                ? "على عكس المحركات الخارجية الضخمة بالسلاسل، تُثبت محركاتنا الإيطالية والألمانية الأنبوبية عالية الجودة بالكامل داخل ماسورة الدوران الفولاذية (٧٠ ملم أو ١٠٢ ملم)، مما يوفر مساحة علوية أنيقة وبدون سلاسل ظاهرة."
                : "Unlike bulky external chain motors, our high-grade Italian and German tubular motors fit entirely within the 70mm or 102mm octagonal steel drive shaft, requiring minimal side headroom and zero visible chains."}
            </p>
            <ul className="text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "حماية حرارية تفصل المحرك تلقائياً عند الحمل الزائد" : "Thermal overload cut-off protection"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "مفاتيح توقف ميكانيكية وإلكترونية بالغة الدقة" : "Precision mechanical or electronic limit switches"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "حركة هادئة للغاية تحت ٥٢ ديسيبل" : "Whisper-quiet operation under 52 dB"}</span>
              </li>
            </ul>
          </div>

          <div className="bg-charcoal-950/70 p-5 rounded-xl border border-charcoal-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">
              {isRTL ? "التحكم الذكي واحتياطي الطاقة الطارئ" : "Smart Integration & Power Reserves"}
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {isRTL
                ? "مزود بوحدات إرسال 433MHz متعددة القنوات لتشغيل عدة شترات فردياً أو جماعياً. يمكن ربطه ببطاريات UPS احتياطية تمنح ما يصل إلى ٤٨ ساعة من التشغيل أثناء انقطاع الكهرباء."
                : "Equipped with multichannel 433MHz transmitters capable of operating multiple shutters individually or simultaneously. Can be coupled with dedicated sine-wave UPS battery packs providing up to 48 hours of emergency opening power."}
            </p>
            <ul className="text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "توافق مع أجهزة التحكم الرئيسية للمباني والمجمعات" : "Central plaza master remote compatibility"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "حساسات أمان تعكس حركة الشتر تلقائياً عند وجود عائق" : "Obstacle auto-reverse safety sensors"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "مفتاح بمفتاح معدني لدخول الموظفين والأمان" : "Key switch for staff entry"}</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab 3: Manual Overrides Deep Dive */}
      {activeTab === "manual" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="bg-charcoal-950/70 p-5 rounded-xl border border-charcoal-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <RotateCw className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">
              {isRTL ? "صندوق التروس الميكانيكي مع ذراع التدوير" : "Manual Crank Bevel Gearbox"}
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {isRTL
                ? "كل شتر آلي نقوم بتنفيذه يمكن تزويده بحلقة تعليق وذراع تدوير يدوي قابل للفك. في حال انقطاع التيار، يقوم المالك بتدوير الذراع لرفع أو إنزال الستارة بكل سلاسة ودون جهد كبير."
                : "Every automated shutter engineered by Abu Ahmed Gulf Frames can be equipped with an eyelet hook and removable winding crank handle. In case of catastrophic power outages, a technician or owner simply turns the crank to raise or lower the curtain effortlessly."}
            </p>
            <ul className="text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "نسبة تخفيض عزم ١:٧ أو ١:١١ لتقليل الجهد العضلي" : "1:7 or 1:11 reduction ratio for low effort"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "تروس فولاذية حلزونية مقواة ومقاومة للاهتراء" : "Hardened steel helical gear teeth"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "منفذ أمان داخلي أو خارجي محمي بقفل" : "Secure interior or lockable exterior key access"}</span>
              </li>
            </ul>
          </div>

          <div className="bg-charcoal-950/70 p-5 rounded-xl border border-charcoal-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
              <Sliders className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">
              {isRTL ? "بكرات نوابض الالتواء فائقة المتانة" : "High-Tensile Torsion Spring Pulley"}
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {isRTL
                ? "للشترات اليدوية، نحسب معادلة شد النوابض الدقيقة الموازية لوزن الستارة اعتماداً على خبرتنا لـ ٢٠ عاماً. يستقر الشتر بسلاسة في أي ارتفاع ويمكن رفعه وخفضه بيد واحدة فقط."
                : "For manual roll-up shutters, our 20-year technician formula calculates the exact spring tension matching curtain weight. The shutter floats effortlessly in any position, allowing easy one-hand push up and pull down."}
            </p>
            <ul className="text-slate-400 space-y-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "نوابض فولاذية معالجة بالزيت ومشدودة مسبقاً" : "Pre-stressed oil-tempered spring coils"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "بكرات نايلون ثقيلة بمحامل كروية فولاذية محكمة" : "Heavy nylon pulleys with steel ball bearings"}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>{isRTL ? "صفر استهلاك كهرباء لخدمة تدوم مدى الحياة" : "Zero electricity consumption for lifetime utility"}</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Technician Hotline & Consultation Bar */}
      <div className="mt-8 pt-6 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-xs text-slate-300">
          <AlertCircle className="w-4 h-4 text-gold-400 shrink-0" />
          <span>
            {isRTL
              ? "هل تحتاج صيانة طارئة للشترات أو تحويل الشترات اليدوية الحالية إلى نظام آلي بمحرك؟"
              : "Need emergency rolling shutter repairs or custom motor conversion for existing shutters?"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+923001234567"
            className="px-4 py-2 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-white border border-charcoal-600 transition-colors text-xs font-semibold flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>{isRTL ? "طوارئ صيانة الشترات" : "Emergency Repair Hotline"}</span>
          </a>
          <a
            href={`https://wa.me/923001234567?text=${encodeURIComponent(
              isRTL
                ? "مرحباً المعلم أبو أحمد، أود طلب معاينة واستشارة بخصوص تركيب أو صيانة شترات النوافذ."
                : "Hello Master Craftsman Abu Ahmed (Abu Ahmed Gulf Frames), I need a site consultation for rolling shutter engineering."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-bg text-charcoal-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 hover:shadow-lg hover:shadow-gold-500/20 transition-all"
          >
            <span>{isRTL ? "طلب معاينة الشتر" : "Book Shutter Survey"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
