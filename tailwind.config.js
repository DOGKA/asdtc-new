/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aura Financial inspired dark theme
        dark: {
          DEFAULT: '#030508',
          50: '#0a0f14',
          100: '#0d1117',
          200: '#141b22',
          300: '#1c242d',
          400: '#252f3a',
        },
        // ASDTC Blue accent colors
        accent: {
          DEFAULT: '#005aaf',
          light: '#0077cc',
          dark: '#004488',
          glow: 'rgba(0, 90, 175, 0.4)',
        },
        // ASDTC Yellow
        asdtc: {
          DEFAULT: '#f5c518',
          light: '#fcd34d',
          dark: '#d4a00a',
        },
        // Light colors
        light: {
          DEFAULT: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        },
        // Glass effect
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
          hover: 'rgba(255, 255, 255, 0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': `linear-gradient(rgba(0, 90, 175, 0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 90, 175, 0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 90, 175, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 90, 175, 0.6)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0, 90, 175, 0.3)',
        'glow-lg': '0 0 60px rgba(0, 90, 175, 0.4)',
        'inner-glow': 'inset 0 0 30px rgba(0, 90, 175, 0.1)',
      },
    },
  },
  plugins: [],
}
