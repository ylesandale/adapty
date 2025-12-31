import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS configuration for Next.js - Vercel Style
 */
const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        gradient: {
          pink: 'hsl(var(--gradient-pink))',
          orange: 'hsl(var(--gradient-orange))',
          blue: 'hsl(var(--gradient-blue))',
          cyan: 'hsl(var(--gradient-cyan))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        'vercel': '0 0 0 1px rgba(0, 0, 0, .03), 0 2px 4px rgba(0, 0, 0, .05), 0 12px 24px rgba(0, 0, 0, .05)',
        'vercel-lg': '0 0 0 1px rgba(0, 0, 0, .03), 0 5px 12px rgba(0, 0, 0, .08), 0 20px 40px rgba(0, 0, 0, .08)',
      },
    },
  },
  plugins: [],
};

export default config;

