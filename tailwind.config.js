/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      smd: '600px',
      md: '825px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightGray: "#f5f5f5",
        darkGray: "#3D3C3B",
        primaryLight: "#4A90E2",
        primaryDeep: "#002D62",
        positive: "#2ECC71",
        negative: "#E74C3C",
        dark: "#333333",
        neutral: "#FAF3E0",
        light: "#fffcf6"
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
        'lato': ["Lato", "sans-serif"],
      }
    },
  },
  plugins: [],
}
