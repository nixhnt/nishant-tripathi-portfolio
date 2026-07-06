import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces
        base: {
          950: "#070B14",
          900: "#0B1220",
          800: "#111A2E",
          700: "#182645",
          600: "#22335A",
        },
        // Light mode surfaces
        paper: {
          50: "#F7F9FC",
          100: "#EEF2F9",
          200: "#DCE4F0",
        },
        // Signal accent (network / uplink)
        signal: {
          300: "#7EEBFF",
          400: "#38D9F0",
          500: "#14B8CE",
          600: "#0E93A8",
        },
        // Secondary accent (status amber, like a NOC alert light)
        amber: {
          400: "#FBBF54",
          500: "#F5A623",
        },
        // Uptime green
        uptime: {
          400: "#4ADE9C",
          500: "#2FBE80",
        },
        ink: {
          900: "#0A0F1C",
          700: "#324066",
          500: "#5B6B8C",
          300: "#93A2C2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(126,235,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(126,235,255,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(56,217,240,0.15), transparent 60%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(56,217,240,0.45)",
        "glow-sm": "0 0 20px -6px rgba(56,217,240,0.4)",
        card: "0 8px 30px -12px rgba(2,8,23,0.5)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
