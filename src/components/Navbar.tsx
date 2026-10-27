"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Compass,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Bespoke Process", href: "/#process" },
    { label: "Book Site Survey", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar: Contact & Authority */}
      <div className="bg-[#0B0F14]/90 border-b border-charcoal-800 text-xs text-slate-400 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-gold-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              20+ Years Master Aluminum Craftsman
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <Compass className="w-3.5 h-3.5 text-gold-400/80" />
              Bespoke Architectural Aluminum Services & Portfolio Studio
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+923001234567"
              className="hover:text-gold-400 transition-colors flex items-center gap-1.5 text-slate-300 font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
              <span>Direct Hotline: +92 300 1234567</span>
            </a>
            <a
              href="https://wa.me/923001234567?text=Hello%20Abu%20Ahmed%20Gulf%20Frames,%20I%20would%20like%20to%20book%20a%20site%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-lg hover:bg-emerald-600/30 transition-colors flex items-center gap-1 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Master Craftsman</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0F14]/90 border-b border-charcoal-700/60 shadow-lg shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative h-12 w-14 flex items-center justify-center rounded-xl overflow-hidden p-0.5 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Abu Ahmed Gulf Frames Official Logo"
                width={56}
                height={48}
                style={{ maxWidth: "56px", maxHeight: "48px", objectFit: "contain" }}
                className="h-full w-full object-contain filter drop-shadow-[0_0_8px_rgba(197,160,89,0.4)]"
              />
            </div>
            <div>
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white block group-hover:text-gold-300 transition-colors">
                Abu Ahmed <span className="text-gold-400">Gulf Frames</span>
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 block font-medium">
                Architectural Aluminum & Glazing Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-150 relative py-1 hover:text-gold-400 ${
                    isActive ? "text-gold-400 font-semibold" : "text-slate-300"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="gold-gradient-bg text-charcoal-950 font-bold px-4 py-2.5 rounded-xl hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 text-sm"
            >
              <span>Book Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-charcoal-800 border border-charcoal-700 text-slate-300 hover:text-white hover:border-gold-400/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0F14] border-b border-charcoal-700 px-4 py-6 space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-charcoal-800 text-gold-400 border border-gold-400/30"
                        : "text-slate-300 hover:bg-charcoal-800/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-charcoal-800 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="gold-gradient-bg text-charcoal-950 font-bold px-4 py-3 rounded-xl text-center text-sm flex items-center justify-center gap-2"
              >
                <span>Book Site Survey & Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+923001234567"
                className="bg-charcoal-800 border border-charcoal-700 text-white font-medium px-4 py-2.5 rounded-xl text-center text-xs flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-gold-400" />
                <span>Call Hotline: +92 300 1234567</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
