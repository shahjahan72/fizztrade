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
        // FizzTrade Color Palette
        primary: {
          DEFAULT: "#007BFF",
          light: "#0056b3",
          dark: "#004085",
        },
        secondary: {
          DEFAULT: "#28A745",
          light: "#218838",
          dark: "#1e7e34",
        },
        dark: "#1A1A1A",
        light: "#F8F9FA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundColor: {
        primary: "#007BFF",
        secondary: "#28A745",
      },
      textColor: {\n        primary: "#007BFF",
        secondary: "#28A745",
      },
      borderColor: {
        primary: "#007BFF",
        secondary: "#28A745",
      },
      boxShadow: {\n        "sm-primary": "0 1px 2px 0 rgba(0, 123, 255, 0.05)",
        "md-primary": "0 4px 6px -1px rgba(0, 123, 255, 0.1)",
        "lg-primary": "0 10px 15px -3px rgba(0, 123, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;