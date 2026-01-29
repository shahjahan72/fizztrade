import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        secondary: "#28A745",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "sm-primary": "0 1px 2px 0 rgba(0, 123, 255, 0.05)",
        "md-primary": "0 4px 6px -1px rgba(0, 123, 255, 0.1)",
        "lg-primary": "0 10px 15px -3px rgba(0, 123, 255, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;