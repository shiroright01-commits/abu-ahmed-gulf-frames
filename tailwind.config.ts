import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#0B0F14",
          900: "#111827",
          800: "#1A222D",
          700: "#242F3D",
          600: "#334155",
        },
        gold: {
          50: "#FAF7EE",
          100: "#F3E8CE",
          200: "#E5CD99",
          300: "#D7B264",
          400: "#C5A059", // Primary Champagne Gold
          500: "#B88E3E",
          600: "#9A7129",
          700: "#75521B",
        },
        platinum: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0", // Metallic Platinum Highlight
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
