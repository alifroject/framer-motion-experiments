/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Body / general text fonts (modern, readable)
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],

        // Headings / display fonts (formal, stylish)
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],

        // Serif fonts (formal, classic feel)
        merriweather: ['Merriweather', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        crimson: ['Crimson Pro', 'serif'],

        // Fun / accent fonts
        curly: ['Pacifico', 'cursive'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],       // 12px / 16px
        sm: ['0.875rem', { lineHeight: '1.25rem' }],   // 14px / 20px
        base: ['1rem', { lineHeight: '1.5rem' }],      // 16px / 24px
        lg: ['1.125rem', { lineHeight: '1.75rem' }],   // 18px / 28px
        xl: ['1.25rem', { lineHeight: '1.75rem' }],    // 20px / 28px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],     // 24px / 32px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],// 30px / 36px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // 36px / 40px
        '5xl': ['3rem', { lineHeight: '1.1' }],        // 48px / ~53px
        '6xl': ['3.75rem', { lineHeight: '1.1' }],     // 60px / ~66px
        '7xl': ['4.5rem', { lineHeight: '1.05' }],     // 72px / ~76px
        '8xl': ['6rem', { lineHeight: '1.05' }],       // 96px / ~100px
        '9xl': ['7rem', { lineHeight: '1.05' }],       // 112px / ~118px
        '10xl': ['8rem', { lineHeight: '1.05' }],      // 128px / ~134px
        '11xl': ['9rem', { lineHeight: '1.05' }],      // 144px / ~151px
        '12xl': ['10rem', { lineHeight: '1.05' }],     // 160px / ~168px
        '13xl': ['11rem', { lineHeight: '1.05' }],     // 176px / ~184px
        '14xl': ['12rem', { lineHeight: '1.05' }],     // 192px / ~202px
        '15xl': ['13rem', { lineHeight: '1.05' }],     // 208px / ~218px
      },

      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          light: '#a5b4fc',
          DEFAULT: '#6366F1',
          dark: '#4F46E5',
        },
        secondary: {
          light: '#F9A8D4',
          DEFAULT: '#F472B6',
          dark: '#EC4899',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        background: {
          light: '#F9FAFB',
          dark: '#111827',
        },
      },


      //spacing
      spacing: {
        'section': '6rem',
        'gutter': '2rem',
        'card': '1.5rem',
      },
      maxWidth: {
        'container': '1200px',
      },


      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.1)',
        strong: '0 4px 20px rgba(0, 0, 0, 0.15)',
        glow: '0 0 20px rgba(99, 102, 241, 0.6)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '300ms',
        slow: '600ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        full: '9999px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [

  ],
}
