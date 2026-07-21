import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base dark palette — deeper than before, more editorial
        ink: {
          950: "#04070C",  // deepest bg
          900: "#0A0F17",  // main bg
          850: "#0F1620",  // secondary bg
          800: "#141C28",  // surface
          700: "#1B2530",  // hover surface
          600: "#26313E",  // borders subtle
        },
        // Accent — celeste of dariotana.it
        celeste: {
          50: "#EAF9FE",
          100: "#C6EFFC",
          200: "#9DE3F9",
          300: "#79DDF7",
          400: "#4CD1F5",
          500: "#31C6F2",   // MAIN
          600: "#1DA9D2",
          700: "#0B91BC",
          800: "#0A7597",
        },
        // Content
        paper: {
          50: "#FBFCFD",   // pure white slightly warm
          100: "#F4F7FA",
          200: "#E5EAF0",
          300: "#C9D2DC",
          400: "#A8B5C2",
          500: "#7F8B99",
          600: "#5B6773",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        // Editorial-scale display type — big, tight
        "hero": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.035em", fontWeight: "500" }],
        "display-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "500" }],
        "display-lg": ["clamp(2rem, 4.5vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "500" }],
        "display-md": ["clamp(1.625rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.015em", fontWeight: "500" }],
      },
      spacing: {
        section: "clamp(4rem, 8vw, 7rem)",
        "section-lg": "clamp(6rem, 12vw, 10rem)",
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
      },
      boxShadow: {
        "soft": "0 2px 20px rgba(0, 0, 0, 0.4)",
        "lift": "0 12px 40px rgba(0, 0, 0, 0.5)",
        "celeste": "0 8px 40px rgba(49, 198, 242, 0.15)",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "signature": "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
