"use client";

import React, { useState } from "react";
import {
  Calculator,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function QuickEstimator() {
  const { isRTL, t } = useLanguage();
  const [serviceType, setServiceType] = useState("windows");
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(8);
  const [finish, setFinish] = useState("charcoal");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const rateMapEn: Record<string, { label: string; ratePerSqFt: number }> = {
    windows: { label: "Architectural Glazing & Window Installation Service", ratePerSqFt: 1850 },
    kitchen: { label: "Bespoke Modular Aluminum Kitchen Fit-Out Service", ratePerSqFt: 3200 },
    doors: { label: "Heavy-Duty Architectural Door & Entrance Service", ratePerSqFt: 2200 },
    "auto-shutter": { label: "Automated Motorized Shutter Engineering Service", ratePerSqFt: 2400 },
    "manual-shutter": { label: "Manual Mechanical Shutter Fabrication Service", ratePerSqFt: 1450 },
    custom: { label: "Bespoke Curtain Wall & Shading Facade Service", ratePerSqFt: 2800 },
  };

  const rateMapAr: Record<string, { label: string; ratePerSqFt: number }> = {
    windows: { label: "خدمة واجهات ونوافذ الزجاج الإنشائي", ratePerSqFt: 1850 },
    kitchen: { label: "خدمة تفصيل مطابخ الألمنيوم المقاومة للماء ١٠٠٪", ratePerSqFt: 3200 },
    doors: { label: "خدمة أبواب المداخل الرئيسية الفاخرة", ratePerSqFt: 2200 },
    "auto-shutter": { label: "خدمة شترات النوافذ الكهربائية الآلية", ratePerSqFt: 2400 },
    "manual-shutter": { label: "خدمة الشترات اليدوية الميكانيكية", ratePerSqFt: 1450 },
    custom: { label: "خدمة تكسيات الواجهات واللوفرات المعمارية", ratePerSqFt: 2800 },
  };

  const rateMap = isRTL ? rateMapAr : rateMapEn;
  const sqFt = Math.max(1, width * height);
  const estimatedCost = sqFt * (rateMap[serviceType]?.ratePerSqFt || 1800);

  const finishNames: Record<string, string> = {
    charcoal: isRTL ? "فحم معماري داكن (#111827)" : "Deep Architectural Charcoal (#111827)",
    gold: isRTL ? "ذهب شامبين فاخر (#C5A059)" : "Brushed Champagne Gold (#C5A059)",
    platinum: isRTL ? "فضي بلاتيني أنودايز (#E2E8F0)" : "Anodized Platinum Silver (#E2E8F0)",
  };

  const generateWhatsAppLink = () => {
    const serviceName = rateMap[serviceType]?.label || "Aluminum Architectural Service";
    const selectedFinish = finishNames[finish] || "Standard Finish";
    const text = isRTL
      ? `مرحباً المعلم أبو أحمد (أبو أحمد لإطارات الخليج)،
أود حجز معاينة ميدانية وطلب تقدير تكلفة تقريبي:
- الخدمة المطلوبة: ${serviceName}
- المقاسات التقريبية: ${width} قدم × ${height} قدم (المساحة الإجمالية: ${sqFt} قدم مربع)
- التشطيب واللون: ${selectedFinish}
- رقم التواصل: ${phone || "لم يحدد"}
- ملاحظات إضافية: ${notes || "لا يوجد"}

يرجى تأكيد موعد المعاينة الميدانية.`
      : `Hello Master Craftsman Abu Ahmed (Abu Ahmed Gulf Frames),
I would like to book an on-site survey and request a service estimate for:
- Commission: ${serviceName}
- Scope Dimensions: ${width} ft x ${height} ft (Approx ${sqFt} sq.ft area)
- Architectural Finish: ${selectedFinish}
- Client Contact: ${phone || "Not specified"}
- Project Notes: ${notes || "None"}
Please confirm your availability for a technical site survey.`;

    return `https://wa.me/96594462328?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.open(generateWhatsAppLink(), "_blank");
    }
  };

  return (
    <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-8 gold-border-glow relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-charcoal-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-400">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block">
              {isRTL ? "حاسبة تقدير الميزانية والمعاينة" : "Site Survey & Service Budget Estimator"}
            </span>
            <span className="text-[11px] text-slate-400">
              {isRTL ? "رد واستشارة فنية مباشرة من المعلم" : "Abu Ahmed Gulf Frames - Direct Technician Response"}
            </span>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{isRTL ? "تنفيذ معتمد" : "Turnkey Service"}</span>
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        {/* Service Type Selection */}
        <div>
          <label className="block text-slate-300 font-medium mb-1.5">
            {isRTL ? "اختر الخدمة المعمارية" : "Select Turnkey Architectural Service"}
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400 transition-colors"
          >
            <option value="windows">
              {isRTL ? "واجهات ونوافذ الزجاج الإنشائي" : "Architectural Glazing & Window Installation Service"}
            </option>
            <option value="kitchen">
              {isRTL ? "مطابخ ألمنيوم معيارية مقاومة للماء ١٠٠٪" : "Bespoke Modular Aluminum Kitchen Fit-Out Service"}
            </option>
            <option value="doors">
              {isRTL ? "أبواب المداخل الفاخرة عالية المتانة" : "Heavy-Duty Architectural Door & Entrance Service"}
            </option>
            <option value="auto-shutter">
              {isRTL ? "شترات النوافذ الكهربائية بمحرك" : "Automated Motorized Shutter Engineering Service"}
            </option>
            <option value="manual-shutter">
              {isRTL ? "الشترات اليدوية الميكانيكية" : "Manual Mechanical Shutter Fabrication Service"}
            </option>
            <option value="custom">
              {isRTL ? "تكسيات الواجهات واللوفرات المعمارية" : "Bespoke Curtain Wall & Shading Facade Service"}
            </option>
          </select>
        </div>

        {/* Dimensions Inputs */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              {isRTL ? "العرض التقريبي (قدم)" : "Approx. Width (Feet)"}
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value) || 1)}
              className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">
              {isRTL ? "الارتفاع التقريبي (قدم)" : "Approx. Height (Feet)"}
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value) || 1)}
              className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>
        </div>

        {/* Profile Finish Color */}
        <div>
          <label className="block text-slate-300 font-medium mb-1.5">
            {isRTL ? "اختر التشطيب المعماري" : "Select Signature Gulf Finish Palette"}
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setFinish("charcoal")}
              className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                finish === "charcoal"
                  ? "border-gold-400 bg-charcoal-800 text-white font-semibold shadow"
                  : "border-charcoal-700 bg-charcoal-950 text-slate-400 hover:text-white"
              }`}
            >
              <div className="w-4 h-4 rounded bg-[#111827] border border-slate-600" />
              <span className="text-[10px]">{isRTL ? "فحم داكن" : "Charcoal"}</span>
            </button>
            <button
              type="button"
              onClick={() => setFinish("gold")}
              className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                finish === "gold"
                  ? "border-gold-400 bg-charcoal-800 text-gold-400 font-semibold shadow"
                  : "border-charcoal-700 bg-charcoal-950 text-slate-400 hover:text-white"
              }`}
            >
              <div className="w-4 h-4 rounded bg-[#C5A059]" />
              <span className="text-[10px]">{isRTL ? "ذهب شامبين" : "Champagne"}</span>
            </button>
            <button
              type="button"
              onClick={() => setFinish("platinum")}
              className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                finish === "platinum"
                  ? "border-gold-400 bg-charcoal-800 text-white font-semibold shadow"
                  : "border-charcoal-700 bg-charcoal-950 text-slate-400 hover:text-white"
              }`}
            >
              <div className="w-4 h-4 rounded bg-[#E2E8F0]" />
              <span className="text-[10px]">{isRTL ? "بلاتينيوم" : "Platinum"}</span>
            </button>
          </div>
        </div>

        {/* Estimated Preliminary Cost Banner */}
        <div className="p-3.5 rounded-xl bg-charcoal-950 border border-charcoal-800 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">
              {isRTL ? "المساحة المحسوبة" : "Estimated Total Area"}
            </div>
            <div className="text-sm font-bold text-white font-mono">
              {sqFt} {isRTL ? "قدم مربع" : "Sq.Ft"}
            </div>
          </div>
          <div className={isRTL ? "text-left" : "text-right"}>
            <div className="text-[10px] text-gold-400 uppercase tracking-wider font-semibold">
              {isRTL ? "التقدير الأولي للتكلفة" : "Approx. Budget Guide"}
            </div>
            <div className="text-base font-extrabold text-gold-400 font-mono">
              PKR {estimatedCost.toLocaleString()}*
            </div>
          </div>
        </div>

        <div>
          <label className="block text-slate-300 font-medium mb-1.5">
            {isRTL ? "رقم الواتساب للتواصل (اختياري)" : "WhatsApp Number (Optional)"}
          </label>
          <input
            type="tel"
            placeholder="+965 9446 2328"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
          />
        </div>

        <div>
          <label className="block text-slate-300 font-medium mb-1.5">
            {isRTL ? "ملاحظات إضافية عن المشروع" : "Project Location or Additional Details"}
          </label>
          <input
            type="text"
            placeholder={isRTL ? "مثال: فيلا في حولي أو الفروانية، بحاجة لمعاينة ميدانية" : "e.g. Villa in Hawalli or Farwaniya, need laser survey"}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full gold-gradient-bg text-charcoal-950 font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-xs"
        >
          <MessageCircle className="w-4 h-4 fill-charcoal-950" />
          <span>{isRTL ? "طلب استشارة وحجز معاينة عبر الواتساب" : "Confirm On-Site Survey on WhatsApp"}</span>
          <Send className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
        </button>

        {submitted && (
          <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              {isRTL
                ? "تم فتح محادثة الواتساب لطلب المعاينة!"
                : "Survey request initiated on WhatsApp!"}
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
