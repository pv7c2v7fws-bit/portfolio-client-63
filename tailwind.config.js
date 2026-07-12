/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        academic: {
          background: '#FCF9F8',
          ivory: '#FFFFFF',
          blush: '#FFD8EA',
          fixed: '#CDE5FF',
          pastel: '#FFAEDA',
          rose: '#8A486F',
          'deep-rose': '#006194',
          ink: '#1B1C1C',
          muted: '#404850',
          border: '#1B1C1C',
          card: '#FFFFFF',
          sidebar: '#006194',
          'sidebar-border': '#93CCFF',
          navy: '#001D31',
          'hero-blue': '#006194',
          blue: '#006194',
          cyan: '#93CCFF',
          'blue-light': '#007BBA',
          warning: '#B45309',
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Be Vietnam Pro"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 12px 28px rgba(0, 29, 49, 0.1)',
        sticker: '5px 5px 0 #1B1C1C',
        polaroid: '0 16px 34px rgba(0, 29, 49, 0.12)',
      },
    },
  },
  plugins: [],
};
