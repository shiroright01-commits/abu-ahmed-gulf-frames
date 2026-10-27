"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Wrench,
  CheckCircle2,
  Compass,
  Youtube,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";
import QuickEstimator from "@/components/QuickEstimator";
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

export default function ContactPage() {
  const { isRTL, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    service: "Architectural Glazing & Window Installation Service",
    finish: "Deep Charcoal (#111827)",
    dimensions: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = isRTL
      ? `مرحباً المعلم أبو أحمد (أبو أحمد لإطارات الخليج)،
أود طلب رفع مقاسات ميداني والحصول على استشارة وتقدير تكلفة للمشروع:
- الاسم الكامل: ${formData.name || "العميل"}
- رقم الهاتف / الواتساب: ${formData.phone}
- المدينة / الموقع: ${formData.city || "لم يحدد"}
- نوع الخدمة المطلوبة: ${formData.service}
- نوع التشطيب واللون المفضل: ${formData.finish}
- الأبعاد التقريبية أو عدد الوحدات: ${formData.dimensions || "يرجى المعاينة الميدانية"}
- ملاحظات المشروع والمخطط: ${formData.notes || "لا يوجد"}

يرجى إفادتي بالموعد المناسب للمعاينة الميدانية.`
      : `Hello Master Craftsman Abu Ahmed (Abu Ahmed Gulf Frames),
I would like to request an on-site survey and turnkey service estimate:
- Full Name: ${formData.name || "Client"}
- Contact Number: ${formData.phone}
- Project Location / City: ${formData.city || "Not specified"}
- Commission Required: ${formData.service}
- Preferred Finish: ${formData.finish}
- Approximate Scope / Dimensions: ${formData.dimensions || "To be measured on-site"}
- Project Notes: ${formData.notes || "None"}

Please let me know when you can schedule an on-site engineering assessment.`;

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-900 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>
              {isRTL
                ? "أبو أحمد لإطارات الخليج - الاستشارات الهندسية الميدانية"
                : "Abu Ahmed Gulf Frames - Engineering Consultation"}
            </span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {isRTL ? (
              <>
                طلب استشارة ومعاينة مع <span className="gold-gradient-text">المعلم</span> أبو أحمد
              </>
            ) : (
              <>
                Book Consultation With <span className="gold-gradient-text">Master Craftsman</span> Abu Ahmed
              </>
            )}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {t(
              "contactPageSubtitle",
              "Eliminate middleman confusion and get accurate turnkey service estimations directly from the master fabricator. Schedule an on-site laser survey or request a preliminary engineering estimate via WhatsApp."
            )}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Comprehensive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-10 border border-charcoal-700/80 shadow-2xl relative gold-border-glow">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-charcoal-800">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {isRTL ? "طلب استشارة ومعاينة للمشروع" : "Turnkey Service Consultation Request"}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {isRTL
                      ? "يتم إرسال الطلب مباشرة إلى المعلم أبو أحمد عبر الواتساب"
                      : "Submitted directly to Master Craftsman Abu Ahmed (Abu Ahmed Gulf Frames) via WhatsApp"}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-charcoal-950 font-bold shrink-0">
                  <Send className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      {isRTL ? "الاسم الكامل *" : "Your Full Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isRTL ? "مثال: طارق محمود" : "e.g. Tariq Mehmood"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      {isRTL ? "رقم الهاتف / الواتساب *" : "WhatsApp / Mobile Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={siteConfig.phoneDisplay}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      {isRTL ? "المدينة / موقع المشروع" : "Project Location / City"}
                    </label>
                    <input
                      type="text"
                      placeholder={isRTL ? "مثال: لاهور / إسلام آباد" : "e.g. Lahore / Islamabad"}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5">
                      {isRTL ? "نوع الخدمة المطلوبة" : "Select Turnkey Service"}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400"
                    >
                      <option value="Architectural Glazing & Window Installation Service">
                        {isRTL
                          ? "واجهات ونوافذ الزجاج الإنشائي"
                          : "Architectural Glazing & Window Installation Service"}
                      </option>
                      <option value="Bespoke Modular Aluminum Kitchen Fit-Out Service">
                        {isRTL
                          ? "مطابخ ألمنيوم معيارية مقاومة للماء ١٠٠٪"
                          : "Bespoke Modular Aluminum Kitchen Fit-Out Service"}
                      </option>
                      <option value="Heavy-Duty Architectural Door & Entrance Service">
                        {isRTL
                          ? "أبواب المداخل الرئيسية الفاخرة عالية المتانة"
                          : "Heavy-Duty Architectural Door & Entrance Service"}
                      </option>
                      <option value="Automated Motorized Shutter Engineering Service">
                        {isRTL
                          ? "شترات النوافذ الكهربائية الآلية"
                          : "Automated Motorized Shutter Engineering Service"}
                      </option>
                      <option value="Manual Mechanical Shutter Fabrication Service">
                        {isRTL
                          ? "الشترات اليدوية الميكانيكية"
                          : "Manual Mechanical Shutter Fabrication Service"}
                      </option>
                      <option value="Bespoke Curtain Wall & Shading Facade Service">
                        {isRTL
                          ? "تكسيات الواجهات واللوفرات المعمارية"
                          : "Bespoke Curtain Wall & Shading Facade Service"}
                      </option>
                      <option value="Emergency Shutter Repair Service">
                        {isRTL
                          ? "خدمة صيانة وإصلاح الشترات الطارئة"
                          : "Emergency Shutter Repair Service"}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    {isRTL ? "التشطيب واللون المفضل" : "Preferred Profile Finish"}
                  </label>
                  <select
                    value={formData.finish}
                    onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400"
                  >
                    <option value="Deep Charcoal (#111827)">
                      {isRTL ? "فحم معماري داكن (#111827)" : "Deep Architectural Charcoal (#111827)"}
                    </option>
                    <option value="Brushed Champagne Gold (#C5A059)">
                      {isRTL ? "ذهب شامبين فاخر (#C5A059)" : "Brushed Champagne Gold (#C5A059)"}
                    </option>
                    <option value="Anodized Platinum Silver (#E2E8F0)">
                      {isRTL ? "فضي بلاتيني أنودايز (#E2E8F0)" : "Anodized Platinum Silver (#E2E8F0)"}
                    </option>
                    <option value="Custom RAL Powder Coat">
                      {isRTL ? "لون مخصص وفق معيار RAL" : "Custom RAL Powder Coat"}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    {isRTL ? "الأبعاد التقريبية أو عدد الفتحات" : "Approximate Dimensions or Total Units"}
                  </label>
                  <input
                    type="text"
                    placeholder={
                      isRTL
                        ? "مثال: ١٠ نوافذ زجاجية، أو مطبخ كامل، أو شترين بنك"
                        : "e.g. 10 Glazed Windows (5x4 ft), 1 Kitchen Fit-Out, or 2 Bank Shutters"
                    }
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">
                    {isRTL ? "ملاحظات إضافية وتفاصيل المخطط" : "Project Notes & Architectural Drawings Info"}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      isRTL
                        ? "أضف تفاصيل نوع الزجاج (مزدوج، عازل للصوت، ملون)، أو وقت المعاينة المفضل..."
                        : "Provide details regarding glass specifications (double-glazed, acoustic, tinted), site access, structural schedule..."
                    }
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-charcoal-950 border border-charcoal-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-charcoal-950 font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-charcoal-950 shrink-0" />
                  <span>
                    {isRTL
                      ? "إرسال تفاصيل المشروع إلى المعلم عبر الواتساب"
                      : "Send Project Specs to Master Craftsman on WhatsApp"}
                  </span>
                  <Send className={`w-3.5 h-3.5 ${isRTL ? "rotate-180" : ""}`} />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>
                    {isRTL
                      ? "رد فني مباشر وسريع خلال ١٥ دقيقة. سرية تامة ١٠٠٪."
                      : "Direct technician reply within 15 minutes. 100% confidential."}
                  </span>
                </div>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {isRTL
                        ? "تم فتح المحادثة على الواتساب مع أبو أحمد لإطارات الخليج!"
                        : "WhatsApp conversation initiated with Abu Ahmed Gulf Frames!"}
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Contact Channels & Emergency Repair Hotline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Social Media Channels Official Card */}
            <div className="charcoal-gradient-card rounded-2xl p-6 border border-gold-400/40 shadow-xl space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block">
                {isRTL ? "قنواتنا الرقمية الرسمية" : "Official Social Channels"}
              </span>
              <h4 className="text-base font-heading font-bold text-white">
                {isRTL ? "تابع أعمالنا وتوثيق المشاريع" : "Follow Our Architectural Portfolio"}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRTL
                  ? "شاهد جولات الفيديو الحية، اختبارات الكبس ومحركات الشترات، وتوثيق المشاريع في الفلل السكنية الفاخرة."
                  : "Watch video walkthroughs, shutter motor testing, and live on-site installation reels across our official channels."}
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-700 hover:border-red-500/50 hover:bg-red-500/10 transition-all flex items-center gap-2 text-xs font-semibold text-slate-200"
                >
                  <Youtube className="w-4 h-4 text-red-500 shrink-0" />
                  <span>YouTube</span>
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-700 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all flex items-center gap-2 text-xs font-semibold text-slate-200"
                >
                  <Facebook className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Facebook</span>
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-700 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all flex items-center gap-2 text-xs font-semibold text-slate-200"
                >
                  <Instagram className="w-4 h-4 text-pink-500 shrink-0" />
                  <span>Instagram</span>
                </a>
                <a
                  href={siteConfig.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-charcoal-900 border border-charcoal-700 hover:border-slate-300 hover:bg-white/10 transition-all flex items-center gap-2 text-xs font-semibold text-slate-200"
                >
                  <TikTokIcon className="w-4 h-4 text-white shrink-0" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>

            {/* Emergency Hotline Card */}
            <div className="charcoal-gradient-card rounded-2xl p-6 border border-rose-500/40 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-rose-400 block">
                    {isRTL ? "خدمة طوارئ سريعة" : "Fast Emergency Service"}
                  </span>
                  <h4 className="text-base font-heading font-bold text-white">
                    {isRTL ? "طوارئ صيانة وإصلاح الشترات" : "Emergency Shutter Repair Hotline"}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRTL
                  ? "شتر تجاري عالق، زنبرك التواء مكسور، أو احتراق محرك أثناء ساعات العمل؟ اتصل بخط الطوارئ لإرسال فني فوري إلى موقعك."
                  : "Stuck commercial rolling shutter, broken torsion spring, or burnt motor during business hours? Call our emergency service line for immediate technician dispatch."}
              </p>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 shrink-0" />
                <span dir="ltr">
                  {isRTL ? `اتصال فوري: ${siteConfig.phoneDisplay}` : `Call Emergency Dispatch: ${siteConfig.phoneDisplay}`}
                </span>
              </a>
            </div>

            {/* Direct Workshop Info Card */}
            <div className="charcoal-gradient-card rounded-2xl p-6 border border-charcoal-700/80 space-y-5 text-xs">
              <h4 className="text-sm font-heading font-bold text-white border-b border-charcoal-800 pb-3">
                {isRTL
                  ? "أبو أحمد لإطارات الخليج - ورشة الهندسة والتصنيع"
                  : "Abu Ahmed Gulf Frames - Fabrication & Engineering Yard"}
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {isRTL ? "الورشة الرئيسية للتصنيع" : "Main Fabrication Facility"}
                    </span>
                    <span className="text-slate-400">
                      {isRTL
                        ? "المنطقة الصناعية الرئيسية، سوق الألمنيوم، باكستان"
                        : "Main Industrial Area, Aluminum Market, Pakistan"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {isRTL ? "الهاتف المباشر والتسعير" : "Hotline & Quotes"}
                    </span>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="text-slate-400 hover:text-white transition-colors" dir="ltr">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {isRTL ? "محادثة الواتساب المباشرة" : "WhatsApp Direct Chat"}
                    </span>
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      {isRTL ? "انقر هنا لمراسلة المعلم أبو أحمد" : "Click here to message Master Craftsman Abu Ahmed"}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">
                      {isRTL ? "ساعات العمل الرسمية" : "Operating Hours"}
                    </span>
                    <span className="text-slate-400">
                      {isRTL
                        ? "السبت - الخميس: ٩:٠٠ ص - ٨:٠٠ م"
                        : "Monday - Saturday: 9:00 AM - 8:00 PM"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Estimator Card */}
            <QuickEstimator />
          </div>
        </div>
      </section>
    </div>
  );
}
