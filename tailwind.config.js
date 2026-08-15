/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: { DEFAULT: '#07070D', soft: '#0D0D17', panel: '#11121C' },
        frost: '#EDEEF7',
        mist: '#9396AC',
        electric: { DEFAULT: '#4F7DFF', dim: '#3A5FCC' },
        violet: { DEFAULT: '#A855F7', dim: '#8B3FE0' },
        signal: '#43E6B5',
        cloud: { DEFAULT: '#F6F7FB', panel: '#FFFFFF' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4F7DFF 0%, #A855F7 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(79,125,255,0.15) 0%, rgba(168,85,247,0.15) 100%)',
        'brand-gradient-r': 'linear-gradient(135deg, #A855F7 0%, #4F7DFF 100%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 30px rgba(0,0,0,0.35)',
        'glow-electric': '0 0 40px rgba(79,125,255,0.3)',
        'glow-violet': '0 0 40px rgba(168,85,247,0.3)',
      },
      keyframes: {
        blink: { '0%,49%': { opacity: 1 }, '50%,100%': { opacity: 0 } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(67,230,181,0.5)' },
          '70%': { boxShadow: '0 0 0 8px rgba(67,230,181,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(67,230,181,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        blink: 'blink 1.05s steps(1) infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        pulseRing: 'pulseRing 2.2s ease-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
