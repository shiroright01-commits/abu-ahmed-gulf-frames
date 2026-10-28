export const siteConfig = {
  name: "Abu Ahmed Gulf Frames",
  tagline: "Master Architectural Aluminum Craftsman (20+ Years)",
  phoneDisplay: "+965 9446 2328",
  phoneRaw: "+96594462328",
  whatsappNumber: "96594462328",
  whatsappBaseUrl: "https://wa.me/96594462328",
  location: "Farwaniya, Kuwait",
  locationAr: "الفروانية، الكويت",
  locationDetailsEn: "Industrial Area, Farwaniya Governorate, Kuwait",
  locationDetailsAr: "المنطقة الصناعية، محافظة الفروانية، الكويت",
  googleMapsUrl: "https://maps.app.goo.gl/vq9N7PmYdmJ1Tz2B6",
  serviceCoverageEn: "State of Kuwait (All Governorates & Residential Areas)",
  serviceCoverageAr: "دولة الكويت (جميع المحافظات والمناطق السكنية والتجارية)",
  governoratesEn: [
    "Capital Governorate (Kuwait City, Abdullah Al-Salem, Shamiya)",
    "Hawalli Governorate (Mishref, Bayan, Salwa, South Surra)",
    "Farwaniya Governorate (Farwaniya, Khaitan, Al-Andalus, Al-Rai)",
    "Al Ahmadi Governorate (Sabah Al-Ahmad, Fintas, Mangaf, Egaila)",
    "Al Jahra Governorate (Al-Jahra, Mutlaa City)",
    "Mubarak Al-Kabeer Governorate (Sabah Al-Salem, Al-Qusour)",
  ],
  governoratesAr: [
    "محافظة العاصمة (مدينة الكويت، ضاحية عبد الله السالم، الشامية)",
    "محافظة حولي (مشرف، بيان، سلوى، جنوب السرة)",
    "محافظة الفروانية (الفروانية، خيطان، الأندلس، الري)",
    "محافظة الأحمدي (مدينة صباح الأحمد، الفنطاس، المنقف، العقيلة)",
    "محافظة الجهراء (الجهراء، مدينة المطلاع)",
    "محافظة مبارك الكبير (صباح السالم، القصور)",
  ],
  bioAr:
    "فني المنيوم خبره ٢٠ سنه ، شبابيك المنيوم + مطابخ + ابواب المنيوم + ابواب شتر و مكائن شتر اوتوماتيك و يدوي + جميع اعمال الالمنيوم",
  bioEn:
    "Master Aluminum Craftsman with 20 Years Experience: Architectural Aluminum Windows + Modern Kitchens + Heavy-Duty Aluminum Doors + Shutter Systems (Automatic & Manual Motors) + All Custom Aluminum Works",
  specialtiesAr: [
    { title: "شبابيك المنيوم", desc: "نوافذ وواجهات معمارية عازلة للصوت والحرارة بزجاج مزدوج" },
    { title: "مطابخ المنيوم", desc: "مطابخ ألمنيوم مودرن مقاومة للماء والحرارة بنسبة ١٠٠٪" },
    { title: "ابواب المنيوم", desc: "أبواب مداخل رئيسية محورية وسحابة ثقيلة مقاومة للطقس" },
    { title: "ابواب شتر ومكائن شتر", desc: "شترات رول كهربائية بمحركات صامتة مع نظام طوارئ يدوي" },
    { title: "جميع اعمال الالمنيوم", desc: "تكسيات لوفرات، قواطع مكتبية، وتفصيل معماري مخصص بالكامل" },
  ],
  specialtiesEn: [
    { title: "Architectural Windows", desc: "Double-glazed thermal-break & acoustic architectural window systems" },
    { title: "Bespoke Kitchens", desc: "100% waterproof, termite-proof & fire-resistant modular aluminum cabinetry" },
    { title: "Heavy-Duty Doors", desc: "Pivot, sliding & security entrance doors built with 6063-T6 alloys" },
    { title: "Motorized Shutters", desc: "Automated rolling shutters with European motors and manual crank overrides" },
    { title: "All Aluminum Works", desc: "Architectural louvers, facade cladding, and turnkey custom metal engineering" },
  ],
  socials: {
    youtube: "https://www.youtube.com/channel/UCaSv8E_iisEGGA3zMwtf_aA",
    facebook: "https://www.facebook.com/profile.php?id=61595536146259",
    tiktok: "https://www.tiktok.com/",
    instagram: "https://www.instagram.com/?hl=en",
  },
};

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/96594462328?text=${encodeURIComponent(message)}`;
};
