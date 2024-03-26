/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#013C38",
        secondary:'#94a3b8',
        tertiary:'#15803d',
      },
      backgroundImage:{
        'hero-pattern': "url('/mth.jpg')",
        'hero-section': "url('/healtcare.jpg')"
      }
    },
  },
  plugins: [],
};
