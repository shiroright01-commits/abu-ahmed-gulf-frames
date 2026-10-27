export const siteConfig = {
  name: "Abu Ahmed Gulf Frames",
  tagline: "Master Architectural Aluminum Craftsman (20+ Years)",
  phoneDisplay: "+965 9446 2328",
  phoneRaw: "+96594462328",
  whatsappNumber: "96594462328",
  whatsappBaseUrl: "https://wa.me/96594462328",
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
