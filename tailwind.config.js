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
          bg: '#FFF8E7', // Warm cream
          primary: '#FF3366', // Hot pink/red
          secondary: '#00D4AA', // Electric teal
          accent: '#FFE500', // Bright yellow
          purple: '#9D4EDD', // Vibrant purple
          orange: '#FF6B35', // Punchy orange
          blue: '#00B4D8', // Cyan blue
          dark: '#0A0A0A', // Deep black
          lime: '#C7F464', // Lime green
        },
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #0A0A0A',
        'neo-hover': '2px 2px 0px 0px #0A0A0A',
        'neo-lg': '8px 8px 0px 0px #0A0A0A',
        'neo-xl': '12px 12px 0px 0px #0A0A0A',
        'neo-colored': '4px 4px 0px 0px #FF3366',
        'neo-purple': '4px 4px 0px 0px #9D4EDD',
        'neo-teal': '4px 4px 0px 0px #00D4AA',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'pulse-border': 'pulseBorder 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseBorder: {
          '0%, 100%': { boxShadow: '4px 4px 0px 0px #0A0A0A' },
          '50%': { boxShadow: '6px 6px 0px 0px #FF3366' },
        },
      },
    },
  },
  plugins: [],
};
