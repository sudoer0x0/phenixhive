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
        background: "#070B14",
        surface: {
          DEFAULT: "#0B1220",
          elevated: "#101B2E",
          hover: "#15233D",
        },
        border: {
          subtle: "#172338",
          DEFAULT: "#1E293B",
          bright: "#334155",
        },
        hive: {
          crimson: "#EF4444",
          crimsonDark: "#DC2626",
          navy: "#0E1A2F",
          deepNavy: "#070B14",
          cyan: "#38BDF8",
          blue: "#2563EB",
          steel: "#64748B",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
