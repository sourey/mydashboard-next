/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#fdfbe8', // Creamy background
          primary: '#FF6B6B', // Red/Pink
          secondary: '#4ECDC4', // Teal/Green
          accent: '#FFE66D', // Yellow
          dark: '#1A1A1A', // Almost black
        },
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(26, 26, 26, 1)',
        'neo-hover': '2px 2px 0px 0px rgba(26, 26, 26, 1)',
        'neo-lg': '8px 8px 0px 0px rgba(26, 26, 26, 1)',
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
