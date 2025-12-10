/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#012F4A',
        'primary-orange': '#FF4B24',
        'primary-cyan': '#00CFFF',
        'primary-light': '#ECEFF3',
        'primary-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
