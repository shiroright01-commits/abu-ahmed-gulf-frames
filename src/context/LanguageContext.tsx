"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationKey } from "@/data/translations";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: TranslationKey | string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  isRTL: false,
  t: (key: string, fallback?: string) => fallback || key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Check URL param ?lang=ar or ?lang=en
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang === "ar" || urlLang === "en") {
      setLanguageState(urlLang);
      localStorage.setItem("preferred_language", urlLang);
    } else {
      // 2. Check localStorage
      const savedLang = localStorage.getItem("preferred_language") as Language | null;
      if (savedLang === "ar" || savedLang === "en") {
        setLanguageState(savedLang);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const isArabic = language === "ar";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = language;
    localStorage.setItem("preferred_language", language);
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_language", lang);
      // Update URL query param cleanly without full reload
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const isRTL = language === "ar";

  const t = (key: TranslationKey | string, fallback?: string): string => {
    const activeDict = (translations as any)[language];
    if (activeDict && activeDict[key]) {
      return activeDict[key];
    }
    const fallbackDict = (translations as any)["en"];
    if (fallbackDict && fallbackDict[key]) {
      return fallbackDict[key];
    }
    return fallback || String(key);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isRTL,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
