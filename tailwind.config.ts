import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'max-320': {'max': '320px'},
        'max-375': {'max': '376px'},
        'max-425': {'max': '426px'},
        'desktop': {'min': '1024px'},
      },
    },
  },
  plugins: [],
} satisfies Config;
