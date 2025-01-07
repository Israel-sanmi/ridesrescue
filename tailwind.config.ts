import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "gradient-start": "rgba(51, 62, 70, 0.6)",
        "gradient-end": "rgba(21, 26, 30, 0.6)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
