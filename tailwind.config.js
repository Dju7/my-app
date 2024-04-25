/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
        primary: '#374785',
        secondary: '#ECECEC',
        tertiary: '#FFFF00',
        fourth: '#F76C6C',
        fifth: '#A8D0E6',
        sixth: '#5da2d5',
        blanc: '#FFFF'
      },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms")
  ],
};
