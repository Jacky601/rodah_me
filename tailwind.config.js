/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        hackerRed: "#8b0000",
        hackerRedBright: "#b30000",
      },
      fontFamily: {
        pixel: ['var(--font-press-start)', 'monospace'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        display: ['var(--font-syne)', 'sans-serif'],
        space: ['var(--font-space)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
