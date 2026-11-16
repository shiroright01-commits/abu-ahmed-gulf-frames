"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle, PhoneCall, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FAQItem {
  id: string;
  qAr: string;
  qEn: string;
  aAr: string;
  aEn: string;
  categoryAr: string;
  categoryEn: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    categoryAr: "الأسعار والمقايسة",
    categoryEn: "Pricing & Quotes",
    qAr: "كم تكلفة وسعر متر الشتر والألمنيوم في الكويت؟",
    qEn: "What is the cost per meter for shutters and aluminum in Kuwait?",
    aAr: "تختلف التكلفة بناء على سماكة قطاع الألمنيوم (سرايا أو دبل)، نوع الزجاج (دبل جلاس عازل أو مفرد)، ونوع محرك الشتر (محرك إيطالي أو فرنسي Somfy أو يدوي). نوفر دائماً معاينة هندسية مجانية لرفع المقاسات بدقة وتقديم مقايسة سعرية شفافة مباشرة من المعلم بدون وسيط.",
    aEn: "Pricing depends on the profile thickness (heavy-duty Saraya vs standard), glass specification (argon-filled acoustic double glazing vs single), and shutter drive unit (Italian or Somfy motor vs manual spring). We provide complimentary on-site engineering surveys to provide direct, transparent quotes with zero intermediary markups.",
  },
  {
    id: "faq-2",
    categoryAr: "خدمات الصيانة السريعة",
    categoryEn: "Emergency Repair",
    qAr: "هل تقدمون خدمة تصليح شتر فوري وتبديل مكائن في نفس اليوم؟",
    qEn: "Do you offer same-day shutter repair and motor replacement?",
    aAr: "نعم، نوفر خدمة طوارئ سريعة على مدار 24 ساعة لصيانة وتصليح جميع أعطال الشترات، تبديل المكائن الإيطالية والفرنسية التالفة، إصلاح الشتر العالق أو الساقط، وتبديل الوايرات والأقفال في جميع مناطق الكويت خلال ساعات قليلة من الاتصال.",
    aEn: "Yes, we provide 24/7 same-day rapid repair across all Kuwait governorates for jammed shutters, broken springs, damaged slats, and faulty motors using genuine Italian and Somfy replacement drives within hours of your call.",
  },
  {
    id: "faq-3",
    categoryAr: "المطابخ والأثاث",
    categoryEn: "Kitchens & Furniture",
    qAr: "ما هي مميزات مطابخ الألمنيوم الصب مقارنة بالمطابخ الخشبية في مناخ الكويت؟",
    qEn: "What are the advantages of cast aluminum kitchens over wood in Kuwait?",
    aAr: "مطابخ الألمنيوم الصب مقاومة للماء والرطوبة بنسبة 100%، غير قابلة للاشتعال، وتمنع تماماً تواجد حشرات الخشب وحشرة الرمة (الأرضة). كما أنها لا تنتفخ ولا تتفكك مع درجات حرارة الصيف الشديدة وتدوم لأكثر من 20 عاماً مع مفصلات هيدروليكية أصلية.",
    aEn: "Cast aluminum kitchens are 100% moisture-proof, fire-retardant, and completely immune to termites, mold, and wood borers. Unlike MDF or timber, aluminum carcasses never swell, warp, or peel in extreme Kuwait summer heat, lasting over 20 years with heavy-duty soft-close hardware.",
  },
  {
    id: "faq-4",
    categoryAr: "مناطق التغطية",
    categoryEn: "Service Coverage",
    qAr: "ما هي المحافظات والمناطق التي يغطيها المعلم أبو أحمد في الكويت؟",
    qEn: "Which governorates and areas do you cover in Kuwait?",
    aAr: "نغطي جميع محافظات الكويت الست: العاصمة، حولي، الفروانية، الأحمدي، مبارك الكبير، والجهراء، مع ورشة عمل متخصصة في الفروانية وسيارات خدمة ميدانية متنقلة تصل إلى موقعك ومقر قسيمتك أو فيلتك فوراً.",
    aEn: "We service all 6 Kuwait Governorates: Capital, Hawalli, Farwaniya, Ahmadi, Mubarak Al-Kabeer, and Jahra, supported by our central Farwaniya fabrication studio and mobile service vans equipped for rapid on-site installation and maintenance.",
  },
  {
    id: "faq-5",
    categoryAr: "العزل الحراري والصوتي",
    categoryEn: "Insulation & Glazing",
    qAr: "كيف تضمن شبابيك الألمنيوم دبل جلاس عزل الصوت والحرارة والغبار؟",
    qEn: "How do double-glazed aluminum windows insulate against heat, sound, and dust?",
    aAr: "نستخدم قطاعات ألمنيوم معزولة بتقنية الكسر الحراري (Thermal Break) مع زجاج مزدوج (دبل جلاس) محقون بغاز الآرجون ومفرغ تماماً، مع ربلات EPDM ثلاثية مقاومة لعوامل الجو لصد عواصف الغبار الصيفية وخفض فاتورة تكييف الهواء بنسبة تصل إلى 40%.",
    aEn: "We fabricate thermal-break aluminum sections paired with argon gas-insulated double glazing and triple EPDM perimeter gaskets, filtering out airborne dust storms, reducing ambient street noise by up to 45dB, and reducing AC electricity consumption by up to 40%.",
  },
  {
    id: "faq-6",
    categoryAr: "الضمان والكفالة",
    categoryEn: "Warranty & Guarantee",
    qAr: "ما هي مدة الضمان والكفالة على أعمال الألمنيوم والشتر والمطابخ؟",
    qEn: "What is the warranty period on aluminum works, shutters, and kitchens?",
    aAr: "نقدم كفالة معتمدة تمتد حتى 10 سنوات على الهياكل والقطاعات، وضماناً يصل إلى 5 سنوات على مكائن الشتر والمحركات الكهربائية، مع توفير عقود صيانة دورية وقطع غيار أصلية مباشرة من الورشة.",
    aEn: "We provide an official warranty of up to 10 years on aluminum framing and powder-coated finishes, plus up to 5 years guarantee on electric shutter motors, supported by certified after-sales service and genuine replacement components.",
  },
  {
    id: "faq-7",
    categoryAr: "المعاينة والاستشارة",
    categoryEn: "Site Survey & Consultation",
    qAr: "هل المعاينة ورفع المقاسات مجانية في موقع العميل؟",
    qEn: "Is on-site measurement and consultation free of charge?",
    aAr: "نعم، المعاينة الميدانية ورفع المقاسات الهندسية وتقديم الاستشارة الفنية وعينات القطاعات والألوان مجانية تماماً في أي منطقة داخل الكويت بدون أي التزام مسبق.",
    aEn: "Yes, on-site engineering assessments, laser dimension taking, technical advice, and sample presentations are 100% complimentary across all residential villas, chalets, and commercial premises across Kuwait.",
  },
  {
    id: "faq-8",
    categoryAr: "أنظمة الشتر",
    categoryEn: "Shutter Mechanics",
    qAr: "ما الفرق بين الشتر المخفي المدمج والشتر الظاهر الخارجي؟",
    qEn: "What is the difference between built-in concealed shutters and external box shutters?",
    aAr: "الشتر المخفي يتم تأسيسه أثناء مرحلة البناء والتشطيب حيث يختفي الصندوق تماماً داخل الجدار الخرساني لمظهر معماري انسيابي، بينما الشتر الظاهر يتم تركيبه فوق النوافذ القائمة في المباني والفلل المسكونة دون الحاجة لأي تكسير أو تعديل إنشائي.",
    aEn: "Concealed built-in shutters are integrated into the wall lintels during structural construction for a flush architectural look, while surface-mounted external box shutters retrofit easily onto completed villa windows without any wall chipping or structural modification.",
  },
];

export default function KuwaitFAQSection() {
  const { isRTL } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 border-b border-charcoal-800 bg-[#0B0F14]/70 relative overflow-hidden" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-charcoal-900 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{isRTL ? "دليل إجابات الاستفسارات الشائعة" : "Comprehensive Knowledge Base"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
            {isRTL ? (
              <>
                الأسئلة الشائعة حول خدمات <span className="gold-gradient-text">الألمنيوم والشتر</span> في الكويت
              </>
            ) : (
              <>
                Frequently Asked Questions About <span className="gold-gradient-text">Kuwait Aluminum & Shutters</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isRTL
              ? "إجابات هندسية معتمدة من المعلم أبو أحمد تغطي الأسعار، الضمانات، تصليح الشترات، وتفصيل المطابخ والشبابيك في جميع مناطق الكويت."
              : "Direct engineering answers from Master Craftsman Abu Ahmed covering pricing, warranties, emergency shutter maintenance, and bespoke fabrication."}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            const question = isRTL ? item.qAr : item.qEn;
            const answer = isRTL ? item.aAr : item.aEn;
            const category = isRTL ? item.categoryAr : item.categoryEn;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-charcoal-900/90 border-gold-400/50 shadow-lg shadow-gold-500/5"
                    : "bg-charcoal-950/60 border-charcoal-800 hover:border-charcoal-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-start p-5 sm:p-6 flex items-center justify-between gap-4 select-none cursor-pointer"
                >
                  <div className="space-y-1.5 flex-1">
                    <span className="text-[11px] font-semibold tracking-wider text-gold-400 uppercase block">
                      {category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {question}
                    </h3>
                  </div>
                  <div
                    className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-gold-400 text-charcoal-950 rotate-180"
                        : "bg-charcoal-800 text-slate-300"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-charcoal-800/60 mt-1">
                    <p>{answer}</p>
                    <div className="mt-4 pt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400 border-t border-charcoal-800/40">
                      <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{isRTL ? "إجابة معتمدة ميدانياً" : "Verified Field Standard"}</span>
                      </span>
                      <span>•</span>
                      <span>
                        {isRTL
                          ? "هل تحتاج لتسعير مخصص؟ تواصل مباشرة عبر واتساب"
                          : "Need a custom quotation? Chat directly on WhatsApp"}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Consultation CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-charcoal-900 border border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-start">
            <h4 className="text-base font-bold text-white">
              {isRTL ? "هل لديك سؤال آخر أو طلب مقايسة خاصة؟" : "Have a specific architectural inquiry or blueprint?"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              {isRTL
                ? "تحدث مع المعلم أبو أحمد مباشرة عبر واتساب لرفع المقاسات وتقديم الاستشارة الفورية."
                : "Speak with Master Craftsman Abu Ahmed on WhatsApp for prompt guidance and scheduling."}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/96594462328?text=${encodeURIComponent(
                isRTL
                  ? "مرحباً المعلم أبو أحمد، لدي استفسار إضافي حول أعمال الألمنيوم وأود حجز استشارة."
                  : "Hello Abu Ahmed Gulf Frames, I have a question regarding aluminum and shutter services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold px-5 py-2.5 rounded-xl shadow-md text-xs sm:text-sm flex items-center gap-1.5 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-charcoal-950 shrink-0" />
              <span>{isRTL ? "محادثة واتساب" : "WhatsApp"}</span>
            </a>
            <a
              href="tel:+96594462328"
              className="bg-charcoal-800 hover:bg-charcoal-700 text-white font-medium px-4 py-2.5 rounded-xl border border-charcoal-700 text-xs sm:text-sm flex items-center gap-1.5 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{isRTL ? "اتصال مباشر" : "Call"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
