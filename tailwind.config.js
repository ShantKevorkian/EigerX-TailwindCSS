/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sf-pro-display': ["SF Pro Display", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        brand: {
          'primary': "rgb(var(--brand-primary) / <alpha-value>)",
          'secondary': "rgb(var(--brand-secondary) / <alpha-value>)",
          'black': "rgb(var(--brand-black) / <alpha-value>)",
          'general-black': "rgb(var(--brand-general-black) / <alpha-value>)",
          'general-border': "rgb(var(--brand-general-border) / <alpha-value>)",
          'general-body-primary': "rgb(var(--brand-general-body-primary) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
}

