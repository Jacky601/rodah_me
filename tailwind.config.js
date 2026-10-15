/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Space Grotesk', 'sans-serif'],
        secondary: ['Manrope', 'sans-serif'],
        label: ['"Space Grotesk"', 'sans-serif'],
        logo: ['Michroma', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        background: v('bg'),
        foreground: v('fg'),
        primary: { DEFAULT: v('primary'), foreground: '#FFFFFF' },
        muted: v('muted'),
        border: v('border'),
      },
      borderRadius: {
        card: '28px',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
