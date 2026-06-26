import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens from COMPANY_INFO.md — single source of truth.
        bg: '#030B17',
        card: '#081523',
        border: '#173A5A',
        primary: {
          DEFAULT: '#06D4FF',
          glow: '#00E5FF',
        },
        ink: '#FFFFFF',
        muted: '#94A3B8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '80rem', // 1280px content rail
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(6,212,255,0.20), 0 0 24px -4px rgba(0,229,255,0.35)',
        'glow-lg': '0 0 0 1px rgba(6,212,255,0.25), 0 0 60px -10px rgba(0,229,255,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(23,58,90,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,58,90,0.35) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(60% 60% at 50% 0%, rgba(0,229,255,0.18) 0%, rgba(6,212,255,0.06) 35%, transparent 70%)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.7' },
          '100%': { transform: 'translateY(1000%)', opacity: '0' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.82)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        scan: 'scan 4.5s linear infinite',
        'pulse-dot': 'pulse-dot 1.6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
