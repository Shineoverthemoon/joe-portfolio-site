/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#0a0b0d',
          900: '#0e1014',
          800: '#14171c',
          700: '#1c2128',
          600: '#262c36',
          500: '#3a4150',
        },
        bone: {
          50: '#f6f5f0',
          100: '#ebe9e0',
          200: '#d4d0c2',
          300: '#9a958a',
        },
        signal: {
          green: '#7cf3a0',
          amber: '#f5c451',
          red: '#ff6b6b',
          blue: '#6cb6ff',
        },
      },
      animation: {
        'blink': 'blink 1.1s steps(2, start) infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        scan: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
      },
    },
  },
  plugins: [],
}
