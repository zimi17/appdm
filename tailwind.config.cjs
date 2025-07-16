const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        'dwimulya-dark-blue': '#0A2342',
        'dwimulya-gold': '#C09E6E',
        'brand-primary': '#0A2342',
        'brand-secondary': '#C09E6E',
        'brand-accent': '#E53935',
      },
      fontFamily: {
        sans: ['Graphik', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};