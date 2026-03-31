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
        brand: {
          charcoal: '#2b3436',
          dark: '#292d32',
          beige: '#cfcbc2',
          'beige-light': '#d9d6ce',
          cream: '#faf9f5',
          'warm-gray': '#a1988d',
          sage: '#8a9a8e',
          gold: '#c5a87e',
        },
      },
      fontFamily: {
        serif: ['"FiftyFifty"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"CircleBook"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
    },
  },
  plugins: [],
};
export default config;
