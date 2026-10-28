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
  metadataBase: new URL("https://abu-ahmed-gulf-frames.com"),
  title: "Abu Ahmed Gulf Frames | Master Aluminum Technician Kuwait (20+ Years)",
  description:
    "Master Aluminum Craftsman with 20+ years experience in Kuwait. Bespoke architectural aluminum windows, luxury modular kitchens, heavy-duty entrance doors, and automated shutter mechanisms across all Kuwait governorates.",
  keywords: [
    "Abu Ahmed Gulf Frames",
    "فني المنيوم الكويت",
    "شترات الكويت",
    "مطابخ المنيوم الكويت",
    "ابواب المنيوم الكويت",
    "شبابيك المنيوم الكويت",
    "تصليح شتر الكويت",
    "معلم المنيوم الفروانية",
    "فني المنيوم حولي",
    "Aluminum Technician Kuwait",
    "Architectural Aluminum Kuwait",
    "Kuwait Motorized Shutters",
    "Bespoke Glazing Services Kuwait",
    "Custom Aluminum Framing Kuwait",
  ],
  authors: [{ name: "Abu Ahmed Gulf Frames" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "wUm5GyH7qI9-IfQAx67YcB3D8KPv4l9oo34OWtH9xIg",
  },
  openGraph: {
    title: "Abu Ahmed Gulf Frames | Master Aluminum Architectural Portfolio",
    description: "Turnkey architectural aluminum engineering services. Bespoke entrance doors, thermal-break glazing, luxury modular kitchens, and automated shutters.",
    url: "https://abu-ahmed-gulf-frames.com",
    siteName: "Abu Ahmed Gulf Frames",
    images: [
      {
        url: "/real_projects/05_luxury_woodgrain_entrance_door.jpg",
        width: 1200,
        height: 1600,
        alt: "Abu Ahmed Gulf Frames Master Craftsmanship Entrance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Ahmed Gulf Frames | Architectural Aluminum Services",
    description: "Master Aluminum Craftsman with 20 years experience. 100% turnkey bespoke architectural services.",
    images: ["/real_projects/05_luxury_woodgrain_entrance_door.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Abu Ahmed Gulf Frames",
    "image": "https://abu-ahmed-gulf-frames.com/real_projects/05_luxury_woodgrain_entrance_door.jpg",
    "description": "Master Aluminum Craftsman with 20+ years experience specializing in bespoke architectural glazing, luxury aluminum kitchens, and motorized security shutters.",
    "telephone": "+96594462328",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
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
    "areaServed": {
      "@type": "Country",
      "name": "Kuwait"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <meta
          name="google-site-verification"
          content="wUm5GyH7qI9-IfQAx67YcB3D8KPv4l9oo34OWtH9xIg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
