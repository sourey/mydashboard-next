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
          bg: 'var(--neo-bg)',
          primary: 'var(--neo-primary)',
          secondary: 'var(--neo-secondary)',
          accent: 'var(--neo-accent)',
          purple: 'var(--neo-purple)',
          orange: 'var(--neo-orange)',
          blue: 'var(--neo-blue)',
          dark: 'var(--neo-dark)',
          lime: 'var(--neo-lime)',
          border: 'var(--border-color)',
        },
        card: {
          bg: 'var(--card-bg)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px var(--border-color)',
        'neo-hover': '2px 2px 0px 0px var(--border-color)',
        'neo-sm': '2px 2px 0px 0px var(--border-color)',
        'neo-lg': '8px 8px 0px 0px var(--border-color)',
        'neo-xl': '12px 12px 0px 0px var(--border-color)',
        'neo-colored': '4px 4px 0px 0px var(--neo-primary)',
        'neo-purple': '4px 4px 0px 0px var(--neo-purple)',
        'neo-teal': '4px 4px 0px 0px var(--neo-secondary)',
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
