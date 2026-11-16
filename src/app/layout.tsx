import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abu-ahmed-gulf-frames.vercel.app"),
  title: "فني المنيوم وشتر الكويت 24 ساعة 📞 94462328 | Abu Ahmed Gulf Frames",
  description:
    "فني المنيوم الكويت والمعلم أبو أحمد خبرة 20 عاماً في تصليح وتركيب الشترات، تفصيل مطابخ المنيوم صب، شبابيك دبل جلاس عازلة للصوت والحرارة، وأبواب المنيوم مودرن لجميع مناطق الكويت 24 ساعة. اتصل الآن: 94462328.",
  keywords: [
    "فني المنيوم الكويت",
    "فني المنيوم وشتر",
    "تصليح شتر الكويت",
    "تصليح شترات 24 ساعة",
    "تبديل مكاين شتر ايطالي",
    "تركيب شترات المنيوم",
    "شتر شبابيك الكويت",
    "مطابخ المنيوم الكويت",
    "تفصيل مطابخ صب",
    "ابواب المنيوم مودرن",
    "شبابيك المنيوم دبل جلاس",
    "شبابيك سرايا الكويت",
    "فني المنيوم الفروانية",
    "فني المنيوم حولي",
    "فني المنيوم العاصمة",
    "فني المنيوم الاحمدي",
    "فني المنيوم مبارك الكبير",
    "فني المنيوم الجهراء",
    "تصليح شتر صباح السالم",
    "معلم المنيوم خيطان",
    "Abu Ahmed Gulf Frames",
    "Kuwait Aluminum Technician",
    "Kuwait Motorized Shutter Repair",
    "Bespoke Architectural Glazing Kuwait",
    "Thermal Break Windows Kuwait",
  ],
  authors: [{ name: "Abu Ahmed Gulf Frames" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://abu-ahmed-gulf-frames.vercel.app",
    languages: {
      "ar-KW": "https://abu-ahmed-gulf-frames.vercel.app?lang=ar",
      "en-KW": "https://abu-ahmed-gulf-frames.vercel.app?lang=en",
      "x-default": "https://abu-ahmed-gulf-frames.vercel.app",
    },
  },
  verification: {
    google: [
      "JZt68VMlODaItqIeXlpKXhop_Gf1b3KH6orQ8vuELK8",
      "wUm5GyH7qI9-IfQAx67YcB3D8KPv4l9oo34OWtH9xIg",
    ],
  },
  openGraph: {
    title: "فني المنيوم وشتر الكويت 24 ساعة | Abu Ahmed Gulf Frames",
    description:
      "المعلم أبو أحمد خبرة 20 عاماً في أعمال الألمنيوم والشتر والمطابخ والشبابيك والأبواب بجميع محافظات الكويت. خدمة سريعة ومعاينة مجانية 94462328.",
    url: "https://abu-ahmed-gulf-frames.vercel.app",
    siteName: "Abu Ahmed Gulf Frames - فني المنيوم الكويت",
    images: [
      {
        url: "/social_banner.jpg",
        width: 1200,
        height: 630,
        alt: "Abu Ahmed Gulf Frames Master Aluminum Technician Kuwait",
      },
    ],
    locale: "ar_KW",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "فني المنيوم وشتر الكويت | Abu Ahmed Gulf Frames",
    description:
      "Master Aluminum Craftsman with 20+ years experience in Kuwait. 24/7 emergency shutter repair, bespoke kitchens, double glazing.",
    images: ["/social_banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://abu-ahmed-gulf-frames.vercel.app/#business",
        "name": "Abu Ahmed Gulf Frames | فني المنيوم وشتر الكويت",
        "alternateName": [
          "أبو أحمد لإطارات الخليج",
          "فني المنيوم الكويت",
          "تصليح شتر الكويت 24 ساعة",
          "معلم المنيوم الفروانية",
          "ورشة المنيوم الكويت"
        ],
        "url": "https://abu-ahmed-gulf-frames.vercel.app",
        "logo": "https://abu-ahmed-gulf-frames.vercel.app/logo.png",
        "image": "https://abu-ahmed-gulf-frames.vercel.app/social_banner.jpg",
        "description": "فني المنيوم الكويت خبرة 20 عاماً في تركيب وتصليح الشترات الأوتوماتيكية، تفصيل مطابخ ألمنيوم صب، شبابيك دبل جلاس عازلة، وأبواب مداخل رئيسية ثقيلة في جميع محافظات الكويت.",
        "telephone": "+96594462328",
        "priceRange": "$$",
        "currenciesAccepted": "KWD",
        "paymentAccepted": "Cash, K-Net",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Habib Munawer Street, Industrial Sector",
          "addressLocality": "Farwaniya",
          "addressRegion": "Farwaniya Governorate",
          "addressCountry": "KW"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "29.2814",
          "longitude": "47.9603"
        },
        "hasMap": "https://maps.app.goo.gl/vq9N7PmYdmJ1Tz2B6",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Al Farwaniyah Governorate" },
          { "@type": "AdministrativeArea", "name": "Hawalli Governorate" },
          { "@type": "AdministrativeArea", "name": "Al Asimah Governorate" },
          { "@type": "AdministrativeArea", "name": "Al Ahmadi Governorate" },
          { "@type": "AdministrativeArea", "name": "Mubarak Al-Kabeer Governorate" },
          { "@type": "AdministrativeArea", "name": "Al Jahra Governorate" },
          { "@type": "Country", "name": "Kuwait" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "148",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://abu-ahmed-gulf-frames.vercel.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "كم تكلفة وسعر متر الشتر والألمنيوم في الكويت؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تختلف التكلفة بناء على سماكة قطاع الألمنيوم (سرايا أو دبل)، نوع الزجاج (دبل جلاس عازل أو مفرد)، ونوع محرك الشتر (محرك إيطالي أو فرنسي Somfy أو يدوي). نوفر دائماً معاينة هندسية مجانية لرفع المقاسات بدقة وتقديم مقايسة سعرية شفافة مباشرة من المعلم بدون وسيط."
            }
          },
          {
            "@type": "Question",
            "name": "هل تقدمون خدمة تصليح شتر فوري وتبديل مكائن في نفس اليوم؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، نوفر خدمة طوارئ سريعة على مدار 24 ساعة لصيانة وتصليح جميع أعطال الشترات، تبديل المكائن الإيطالية والفرنسية التالفة، إصلاح الشتر العالق أو الساقط، وتبديل الوايرات والأقفال في جميع مناطق الكويت خلال ساعات قليلة من الاتصال."
            }
          },
          {
            "@type": "Question",
            "name": "ما هي مميزات مطابخ الألمنيوم الصب مقارنة بالمطابخ الخشبية في مناخ الكويت؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "مطابخ الألمنيوم الصب مقاومة للماء والرطوبة بنسبة 100%، غير قابلة للاشتعال، وتمنع تماماً تواجد حشرات الخشب وحشرة الرمة (الأرضة). كما أنها لا تنتفخ ولا تتفكك مع درجات حرارة الصيف الشديدة وتدوم لأكثر من 20 عاماً مع مفصلات هيدروليكية أصلية."
            }
          },
          {
            "@type": "Question",
            "name": "ما هي المحافظات والمناطق التي يغطيها المعلم أبو أحمد في الكويت؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نغطي جميع محافظات الكويت الست: العاصمة، حولي، الفروانية، الأحمدي، مبارك الكبير، والجهراء، مع ورشة عمل متخصصة في الفروانية وسيارات خدمة ميدانية متنقلة تصل إلى موقعك ومقر قسيمتك أو فيلتك فوراً."
            }
          },
          {
            "@type": "Question",
            "name": "كيف تضمن شبابيك الألمنيوم دبل جلاس عزل الصوت والحرارة والغبار؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نستخدم قطاعات ألمنيوم معزولة بتقنية الكسر الحراري (Thermal Break) مع زجاج مزدوج (دبل جلاس) محقون بغاز الآرجون ومفرغ تماماً، مع ربلات EPDM ثلاثية مقاومة لعوامل الجو لصد عواصف الغبار الصيفية وخفض فاتورة تكييف الهواء بنسبة تصل إلى 40%."
            }
          },
          {
            "@type": "Question",
            "name": "ما هي مدة الضمان والكفالة على أعمال الألمنيوم والشتر والمطابخ؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نقدم كفالة معتمدة تمتد حتى 10 سنوات على الهياكل والقطاعات، وضماناً يصل إلى 5 سنوات على مكائن الشتر والمحركات الكهربائية، مع توفير عقود صيانة دورية وقطع غيار أصلية مباشرة من الورشة."
            }
          },
          {
            "@type": "Question",
            "name": "هل المعاينة ورفع المقاسات مجانية في موقع العميل؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، المعاينة الميدانية ورفع المقاسات الهندسية وتقديم الاستشارة الفنية وعينات القطاعات والألوان مجانية تماماً في أي منطقة داخل الكويت بدون أي التزام مسبق."
            }
          },
          {
            "@type": "Question",
            "name": "ما الفرق بين الشتر المخفي المدمج والشتر الظاهر الخارجي؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "الشتر المخفي يتم تأسيسه أثناء مرحلة البناء والتشطيب حيث يختفي الصندوق تماماً داخل الجدار الخرساني لمظهر معماري انسيابي، بينما الشتر الظاهر يتم تركيبه فوق النوافذ القائمة في المباني والفلل المسكونة دون الحاجة لأي تكسير أو تعديل إنشائي."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": "https://abu-ahmed-gulf-frames.vercel.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "خدمات الألمنيوم والشتر",
            "item": "https://abu-ahmed-gulf-frames.vercel.app/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "معرض المشاريع والأعمال",
            "item": "https://abu-ahmed-gulf-frames.vercel.app/projects"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "عن المعلم أبو أحمد",
            "item": "https://abu-ahmed-gulf-frames.vercel.app/about"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "طلب معاينة واتصال",
            "item": "https://abu-ahmed-gulf-frames.vercel.app/contact"
          }
        ]
      }
    ]
  };

  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <meta name="geo.region" content="KW" />
        <meta name="geo.placename" content="Farwaniya, Kuwait City, Kuwait" />
        <meta name="geo.position" content="29.2814;47.9603" />
        <meta name="ICBM" content="29.2814, 47.9603" />
        <meta
          name="google-site-verification"
          content="JZt68VMlODaItqIeXlpKXhop_Gf1b3KH6orQ8vuELK8"
        />
        <meta
          name="google-site-verification"
          content="wUm5GyH7qI9-IfQAx67YcB3D8KPv4l9oo34OWtH9xIg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="bg-[#0B0F14] text-slate-100 font-sans min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
