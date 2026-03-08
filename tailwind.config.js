/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#101010', // Deep Charcoal (Dark Theme Base)
          light: '#2D2D2D',   // Engineering Grey (Light Theme Text)
          surface: '#F5F5F7', // Crisp Studio White (Light Theme Base)
        },
        accent: {
          green: '#00E696',   // Logo Eco Green
          yellow: '#FFCE00',  // Logo Energy Yellow
        },
        slate: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // Fluid Typography Engine: clamp(min, preferred, max)
        'xs': 'clamp(0.7rem, 0.5vw + 0.5rem, 0.75rem)',
        'sm': 'clamp(0.8rem, 0.8vw + 0.5rem, 0.875rem)',
        'base': 'clamp(0.9rem, 1vw + 0.5rem, 1rem)',
        'lg': 'clamp(1rem, 1.5vw + 0.5rem, 1.125rem)',
        'xl': 'clamp(1.125rem, 2vw + 0.5rem, 1.25rem)',
        '2xl': 'clamp(1.25rem, 2.5vw + 0.5rem, 1.5rem)',
        '3xl': 'clamp(1.5rem, 3vw + 0.5rem, 1.875rem)',
        '4xl': 'clamp(1.875rem, 4vw + 0.5rem, 2.25rem)',
        '5xl': 'clamp(2.25rem, 5vw + 0.5rem, 3rem)',
        '6xl': 'clamp(2.75rem, 6vw + 0.5rem, 3.75rem)',
        '7xl': 'clamp(3.25rem, 7vw + 0.5rem, 4.5rem)',
        '8xl': 'clamp(3.75rem, 8vw + 1rem, 6rem)',
        '9xl': 'clamp(4.5rem, 10vw + 1rem, 8rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 12s linear infinite',
        'mesh': 'mesh 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        mesh: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
