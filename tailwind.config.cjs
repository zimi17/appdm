/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'oxford-blue': '#002147',
        'brand-black': '#1E1E1E',
        'brand-gold': '#D4AF37',
        'sky-blue': '#A9D6E5',
        'slate-grey': '#8996A0',
        'light-grey': '#F5F5F5',
        primary: '#002147', // Using Oxford Blue as primary
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',   // 8px
        'sm': '1rem',     // 16px
        'md': '1.5rem',   // 24px
        'lg': '2rem',     // 32px
        'xl': '3rem',     // 48px
        '2xl': '4rem',    // 64px
        '3xl': '6rem',    // 96px
      },
    },
  },
  plugins: [],
};
