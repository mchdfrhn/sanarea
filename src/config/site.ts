export const siteConfig = {
  brand: {
    name: import.meta.env.VITE_BRAND_NAME || "Sanaréa",
  },
  contact: {
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "6288971084208", // Clean number for API links
    whatsappDisplay:
      import.meta.env.VITE_WHATSAPP_DISPLAY || "+62 889 7108 4208", // Display format
    email: import.meta.env.VITE_EMAIL_ADDRESS || "hello@sanarea.com",
    address: import.meta.env.VITE_ADDRESS || "Jakarta, Indonesia",
    instagram:
      import.meta.env.VITE_INSTAGRAM_URL ||
      "https://www.instagram.com/sanarea.id",
    instagramUsername: import.meta.env.VITE_INSTAGRAM_USERNAME || "@sanarea.id",
  },
};
