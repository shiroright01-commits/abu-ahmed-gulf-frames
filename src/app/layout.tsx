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
  title: "Abu Ahmed Gulf Frames | Architectural Aluminum Engineering & Portfolio",
  description:
    "Master Aluminum Craftsman with 20 years experience. Bespoke architectural aluminum framing, custom structural glazing, luxury kitchen fabrication, and automated shutter installation services.",
  keywords: [
    "Abu Ahmed Gulf Frames",
    "Architectural Aluminum Services",
    "Custom Aluminum Framing",
    "Bespoke Glazing Services",
    "Commercial Shutter Installation",
    "Aluminum Kitchen Fit-Out Services",
    "Automatic Shutter Maintenance",
    "Master Aluminum Technician",
  ],
  authors: [{ name: "Abu Ahmed Gulf Frames" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    "telephone": "+923001234567",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.5204",
      "longitude": "74.3587"
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
