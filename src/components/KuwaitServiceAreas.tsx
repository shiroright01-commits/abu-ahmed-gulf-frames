"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Clock, ShieldCheck, MessageCircle, PhoneCall, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface GovernorateData {
  id: string;
  nameAr: string;
  nameEn: string;
  hubAr: string;
  hubEn: string;
  areasAr: string[];
  areasEn: string[];
  specialtiesAr: string;
  specialtiesEn: string;
}

const GOVERNORATES: GovernorateData[] = [
  {
    id: "farwaniya",
    nameAr: "محافظة الفروانية (مقر الورشة الرئيسي)",
    nameEn: "Farwaniya Governorate (Main Workshop Hub)",
    hubAr: "الفروانية الصناعية • شارع حبيب مناور والمناطق المحيطة",
    hubEn: "Farwaniya Central Fabrication Studio & Vicinity",
    areasAr: [
      "الفروانية",
      "خيطان",
      "العارضية",
      "العارضية الحرفية",
      "جليب الشيوخ",
      "إشبيلية",
      "الأندلس",
      "الفردوس",
      "صباح الناصر",
      "الرابية",
      "الرحاب",
      "العمرية",
      "غرب عبدالله المبارك",
      "عبدالله المبارك",
    ],
    areasEn: [
      "Farwaniya",
      "Khaitan",
      "Ardiya",
      "Ardiya Industrial",
      "Jleeb Al-Shuyoukh",
      "Ishbiliya",
      "Andalus",
      "Firdous",
      "Sabah Al-Nasser",
      "Rabia",
      "Rehab",
      "Omariya",
      "West Abdullah Al-Mubarak",
      "Abdullah Al-Mubarak",
    ],
    specialtiesAr: "تصليح شترات سريع خلال ساعة، تبديل مكائن شتر إيطالية، تفصيل مطابخ صب ألمنيوم وشبابيك دبل جلاس.",
    specialtiesEn: "Fast 1-hour emergency shutter repair, Italian drive motor replacement, bespoke kitchens and double glazing.",
  },
  {
    id: "hawalli",
    nameAr: "محافظة حولي وجنوب السرة",
    nameEn: "Hawalli & South Surra Governorate",
    hubAr: "حولي • السالمية • جنوب السرة",
    hubEn: "Hawalli • Salmiya • South Surra Districts",
    areasAr: [
      "حولي",
      "السالمية",
      "الرميثية",
      "سلوى",
      "بيان",
      "مشرف",
      "الجابرية",
      "الشعب",
      "السرة",
      "حطين",
      "الزهراء",
      "السلام",
      "الشهداء",
      "الصديق",
      "البدع",
    ],
    areasEn: [
      "Hawalli",
      "Salmiya",
      "Rumaithiya",
      "Salwa",
      "Bayan",
      "Mishref",
      "Jabriya",
      "Shaab",
      "Surra",
      "Hateen",
      "Zahra",
      "Al-Salam",
      "Shuhada",
      "Siddiq",
      "Bidaa",
    ],
    specialtiesAr: "واجهات فلل زجاجية استركشر، أبواب مداخل رئيسية فخمة، وشترات أوتوماتيكية مخفية للقسائم السكنية الحديثة.",
    specialtiesEn: "Structural architectural glazing, luxury entrance pivot doors, and concealed motorized shutters for villas.",
  },
  {
    id: "capital",
    nameAr: "محافظة العاصمة والشويخ",
    nameEn: "Capital Governorate (Asimah & Shuwaikh)",
    hubAr: "مدينة الكويت • الشويخ الصناعية",
    hubEn: "Kuwait City Commercial & Shuwaikh Industrial Hub",
    areasAr: [
      "مدينة الكويت",
      "الشويخ الصناعية",
      "الشويخ السكنية",
      "كيفان",
      "الشامية",
      "اليرموك",
      "الخالدية",
      "الروضة",
      "العديلية",
      "الفيحاء",
      "القادسية",
      "الدعية",
      "الدسمة",
      "المنصورية",
      "النزهة",
      "قرطبة",
      "ضاحية عبدالله السالم",
    ],
    areasEn: [
      "Kuwait City",
      "Shuwaikh Industrial",
      "Shuwaikh Residential",
      "Kaifan",
      "Shamiya",
      "Yarmouk",
      "Khaldiya",
      "Rawda",
      "Adailiya",
      "Faiha",
      "Qadsiya",
      "Da'iya",
      "Dasma",
      "Mansouriya",
      "Nuzha",
      "Qurtuba",
      "Dahiyat Abdullah Al-Salem",
    ],
    specialtiesAr: "هندسة ألمنيوم معمارية متقدمة، قواطع مكاتب استركشر وزجاج سيكوريت، وأبواب طوارئ ومداخل ثقيلة.",
    specialtiesEn: "High-spec architectural engineering, structural office glass partitions, heavy-duty commercial entrances.",
  },
  {
    id: "ahmadi",
    nameAr: "محافظة الأحمدي والشاليهات",
    nameEn: "Ahmadi & Coastal Chalets Governorate",
    hubAr: "الفحيحيل • الأحمدي • مدينة صباح الأحمد",
    hubEn: "Fahaheel • Ahmadi • Sabah Al-Ahmad & Coast",
    areasAr: [
      "الأحمدي",
      "الفحيحيل",
      "المنقف",
      "المهبولة",
      "الفنطاس",
      "العقيلة",
      "أبو حليفة",
      "الصباحية",
      "الرقة",
      "جابر العلي",
      "مدينة صباح الأحمد",
      "الخيران",
      "الوفرة",
    ],
    areasEn: [
      "Ahmadi",
      "Fahaheel",
      "Mangaf",
      "Mahboula",
      "Fintas",
      "Egaila",
      "Abu Halifa",
      "Sabahiya",
      "Riqqah",
      "Jaber Al-Ali",
      "Sabah Al-Ahmad Residential",
      "Khiran Chalets",
      "Wafra",
    ],
    specialtiesAr: "عزل رطوبة وأملاح بحرية لشاليهات الخيران، شبابيك دبل جلاس مقاومة للرياح، وتصليح شترات مزارع الوفرة.",
    specialtiesEn: "Marine anti-corrosion treatments for Khiran chalets, wind-resistant double glazing, and coastal shutter services.",
  },
  {
    id: "mubarak",
    nameAr: "محافظة مبارك الكبير",
    nameEn: "Mubarak Al-Kabeer Governorate",
    hubAr: "صباح السالم • القرين • صبحان",
    hubEn: "Sabah Al-Salem • Qurain • Subhan Sector",
    areasAr: [
      "مبارك الكبير",
      "صباح السالم",
      "القرين",
      "العدان",
      "القصور",
      "المسيلة",
      "الفنيطيس",
      "أبو فطيرة",
      "المسايل",
      "صبحان الصناعية",
    ],
    areasEn: [
      "Mubarak Al-Kabeer",
      "Sabah Al-Salem",
      "Qurain",
      "Adan",
      "Qusoor",
      "Messilah",
      "Fnaitees",
      "Abu Futaira",
      "Masayel",
      "Subhan Industrial",
    ],
    specialtiesAr: "مطابخ ألمنيوم صب مودرن، شبابيك سرايا عازلة للصوت والغبار، وصيانة شترات الفلل الدورية.",
    specialtiesEn: "Bespoke modular aluminum kitchens, Saraya acoustic windows, and periodic villa shutter servicing.",
  },
  {
    id: "jahra",
    nameAr: "محافظة الجهراء والمطلاع",
    nameEn: "Jahra & Mutlaa New City",
    hubAr: "الجهراء • مدينة المطلاع الجديدة",
    hubEn: "Jahra City • Mutlaa Mega Residential Projects",
    areasAr: [
      "الجهراء",
      "الواحة",
      "العيون",
      "القصر",
      "تيماء",
      "النسيم",
      "سعد العبدالله",
      "مدينة المطلاع السكنية",
      "كبد",
    ],
    areasEn: [
      "Jahra",
      "Waha",
      "Oyoun",
      "Qasr",
      "Taima",
      "Naseem",
      "Saad Al-Abdullah",
      "Mutlaa Residential City",
      "Kabad",
    ],
    specialtiesAr: "تجهيز وتشطيب قسائم المطلاع الجديدة بالكامل، أبواب مداخل ليزر، وشترات كهربائية بمحركات سومفي العالمية.",
    specialtiesEn: "Full turnkey aluminum fit-out for new Mutlaa villas, laser-cut entrance gates, and Somfy motorized shutters.",
  },
];

export default function KuwaitServiceAreas() {
  const { isRTL } = useLanguage();
  const [selectedGov, setSelectedGov] = useState<string>("farwaniya");

  const activeGov = GOVERNORATES.find((g) => g.id === selectedGov) || GOVERNORATES[0];

  return (
    <section className="py-20 border-b border-charcoal-800 bg-[#0B0F14] relative overflow-hidden" id="service-areas">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-900 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{isRTL ? "تغطية ميدانية شاملة في دولة الكويت" : "Statewide Kuwait Coverage"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
            {isRTL ? (
              <>
                مناطق ومحافظات الخدمة في <span className="gold-gradient-text">الكويت</span> • استجابة فورية 24 ساعة
              </>
            ) : (
              <>
                Service Areas Across <span className="gold-gradient-text">All 6 Kuwait Governorates</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isRTL
              ? "سيارات خدمة ميدانية متنقلة مجهزة بأحدث معدات صيانة وتفصيل وتركيب الألمنيوم والشتر تصل إلى باب منزلك في جميع المحافظات."
              : "Dedicated mobile workshop units equipped with diagnostic and fabrication tools, dispatching direct to your villa or site across Kuwait."}
          </p>
        </div>

        {/* Governorate Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {GOVERNORATES.map((gov) => {
            const isSelected = selectedGov === gov.id;
            return (
              <button
                key={gov.id}
                type="button"
                onClick={() => setSelectedGov(gov.id)}
                className={`p-3.5 rounded-xl text-center transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-gold-400 text-charcoal-950 font-bold border-gold-400 shadow-lg shadow-gold-500/20 scale-[1.02]"
                    : "bg-charcoal-900/80 hover:bg-charcoal-800 text-slate-300 font-medium border-charcoal-800 hover:border-charcoal-700"
                }`}
              >
                <span className="text-xs sm:text-sm block leading-snug">
                  {isRTL ? gov.nameAr.split(" (")[0] : gov.nameEn.split(" (")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Governorate Details Card */}
        <div className="charcoal-gradient-card rounded-2xl p-6 sm:p-10 border border-gold-400/30 gold-glow relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Governorate Info & Badges */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-charcoal-950 border border-gold-400/40 text-gold-400 text-xs font-semibold">
                  <Navigation className="w-3.5 h-3.5 shrink-0" />
                  <span>{isRTL ? activeGov.hubAr : activeGov.hubEn}</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  {isRTL ? activeGov.nameAr : activeGov.nameEn}
                </h3>
              </div>

              {/* Service Capabilities */}
              <div className="p-4 rounded-xl bg-charcoal-950/80 border border-charcoal-800 space-y-2">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{isRTL ? "أبرز الخدمات في هذه المحافظة" : "Regional Service Specialties"}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isRTL ? activeGov.specialtiesAr : activeGov.specialtiesEn}
                </p>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-charcoal-900/90 border border-charcoal-800 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isRTL
                    ? "سرعة استجابة ميدانية: خلال ٦٠ دقيقة لطوارئ الشترات في نطاق المحافظة"
                    : "Rapid on-site dispatch: 60 minutes for emergency shutter jam or motor failure"}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/96594462328?text=${encodeURIComponent(
                    isRTL
                      ? `مرحباً المعلم أبو أحمد، أحتاج خدمة ألمنيوم / شتر في ${activeGov.nameAr.split(" (")[0]} وأود حجز معاينة.`
                      : `Hello Abu Ahmed Gulf Frames, I require aluminum or shutter services in ${activeGov.nameEn.split(" (")[0]}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold px-5 py-2.5 rounded-xl shadow-md text-xs sm:text-sm flex items-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-charcoal-950 shrink-0" />
                  <span>{isRTL ? "طلب فني للمحافظة عبر واتساب" : "Request Technician on WhatsApp"}</span>
                </a>
                <a
                  href="tel:+96594462328"
                  className="bg-charcoal-800 hover:bg-charcoal-700 text-white font-medium px-4 py-2.5 rounded-xl border border-charcoal-700 text-xs sm:text-sm flex items-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-gold-400 shrink-0" />
                  <span dir="ltr">+965 9446 2328</span>
                </a>
              </div>
            </div>

            {/* Right Column: Complete Areas Directory (Keyword dense for Google bot!) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-charcoal-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {isRTL
                    ? `المناطق والأحياء المشمولة (${activeGov.areasAr.length} منطقة)`
                    : `Covered Districts & Neighborhoods (${activeGov.areasEn.length} Areas)`}
                </span>
                <span className="text-xs text-gold-400 font-medium">
                  {isRTL ? "معاينة مجانية للموقع" : "Free Site Survey"}
                </span>
              </div>

              {/* Areas Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {(isRTL ? activeGov.areasAr : activeGov.areasEn).map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-charcoal-950/70 border border-charcoal-800/80 hover:border-gold-400/40 hover:bg-charcoal-900 transition-all flex items-center gap-2 group"
                  >
                    <MapPin className="w-3.5 h-3.5 text-gold-400/80 group-hover:text-gold-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 group-hover:text-white font-medium truncate">
                      {area}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Assurance Note */}
              <p className="text-[11px] text-slate-400 pt-2 leading-relaxed">
                {isRTL
                  ? "• هل منطقتك غير مدرجة بالقائمة؟ تغطيتنا تشمل كامل حدود دولة الكويت بما فيها الشاليهات والمزارع والمشاريع الإنشائية الجديدة. تواصل معنا مباشرة."
                  : "• Don't see your specific locality? We cover all territories across Kuwait including chalets, private farms, and newly zoned construction plots."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
