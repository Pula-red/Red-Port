/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F5F5F5',
        ink: '#262626',
        muted: '#737373',
        line: '#E5E5E5',
        accent: '#404040',
        'accent-hover': '#262626',
        'accent-soft': '#FFFFFF',
        'muted-bg': '#FFFFFF',
        'dark-bg': '#262626',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
