import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F7F3",
        navy: "#1F3A5F",
        slate: "#5F6E7B",
        teal: "#3E7E81",
        sage: "#8AA58C",
        cream: "#FFFDF7",
        coral: "#D77A61",
        amber: "#D9A95B"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      },
      boxShadow: {
        soft: "0 10px 30px -18px rgba(30,58,95,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
