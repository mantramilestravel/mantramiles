import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // 🌿 Brand Palette (aligned with your logo)
        brand: {
          primary: "#006D5B", // Deep Teal
          secondary: "#4CAF50", // Leaf Green
          accent: "#89C9B8", // Soft Aqua
          background: "#F9FAFB", // Light neutral
          surface: "#FFFFFF", // White card background
          text: "#1F2937", // Charcoal gray for readability
        },

        // ✅ You can still use semantic names
        border: "#E5E7EB",
        input: "#D1D5DB",
        ring: "#006D5B",
        background: "#F9FAFB",
        foreground: "#1F2937",

        primary: {
          DEFAULT: "#006D5B", // teal
          foreground: "#FFFFFF",
          light: "#89C9B8",   // lighter teal
          dark: "#004C40",    // deep teal
        },
        secondary: {
          DEFAULT: "#4CAF50", // green
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#89C9B8",
          foreground: "#1F2937",
          light: "#B6E2D3",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1F2937",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
      },

      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #006D5B 0%, #4CAF50 100%)",
        glass: "rgba(255, 255, 255, 0.2)",
      },

      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.05)",
        hero: "0 8px 20px rgba(0, 0, 0, 0.15)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
