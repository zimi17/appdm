
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1rem',
        sm: '1.5rem', 
        md: '2rem',
        lg: '2.5rem',
        xl: '3rem',
        '2xl': '3.5rem',
        '3xl': '4rem',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px', 
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
        '3xl': '1800px',
      },
    },
    screens: {
      xs: '480px',    // Small phones, foldables
      sm: '640px',    // Large phones
      md: '768px',    // Tablet portrait  
      lg: '1024px',   // Desktop
      xl: '1280px',   // Large desktop
      '2xl': '1536px', // Extra large
      '3xl': '1920px', // Ultra-wide monitors
    },
    extend: {
      fontFamily: {
        body: ['"Work Sans"', 'sans-serif'],
        headline: ['"Work Sans"', 'sans-serif'],
        article: ['"Source Serif Pro"', 'serif'], // Fixed name
        mono: ['"Roboto Mono"', 'monospace'],     // Added mono
      },
      colors: {
        // STIE Dwimulya Brand Colors
        'brand-primary': '#002147',    // Oxford Blue
        'brand-accent': '#D4A017',     // Goldenrod  
        'brand-gray-50': '#F8F9FA',
        'brand-gray-100': '#E9ECEF',
        'brand-gray-200': '#DEE2E6', 
        'brand-gray-300': '#CED4DA',
        'brand-gray-400': '#ADB5BD',
        'brand-gray-500': '#6C757D',
        'brand-gray-600': '#495057',
        'brand-gray-700': '#343A40',
        'brand-gray-800': '#212529',
        'brand-gray-900': '#1A1E21',
        // ShadCN Colors (keep existing)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        '18': '4.5rem',   // 72px - missing in default
        '88': '22rem',    // 352px - large sections  
        '100': '25rem',   // 400px - hero sections
        '128': '32rem',   // 512px - extra large
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))', 
        '16': 'repeat(16, minmax(0, 1fr))', // 16-column grid untuk desktop
      },
      boxShadow: {
        'brand': '0 4px 6px -1px rgba(0, 33, 71, 0.1), 0 2px 4px -1px rgba(0, 33, 71, 0.06)',
        'brand-lg': '0 10px 15px -3px rgba(0, 33, 71, 0.1), 0 4px 6px -2px rgba(0, 33, 71, 0.05)',
        'brand-xl': '0 20px 25px -5px rgba(0, 33, 71, 0.1), 0 10px 10px -5px rgba(0, 33, 71, 0.04)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionTimingFunction: {
        'menu': 'cubic-bezier(0.65, 0, 0.35, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',          // smooth interactions
        'bounce-subtle': 'cubic-bezier(0.34, 1.56, 0.64, 1)', // subtle bounce
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
        "swipe": {
          "0%": { transform: 'translateX(0)' },
          "50%": { transform: 'translateX(120%)', opacity: '0' },
          "51%": { transform: 'translateX(-120%)', opacity: '0' },
          "100%": { transform: 'translateX(0)', opacity: '1' },
        },
        "rollDown": {
            "0%": { transform: 'translateY(0)' },
            "50%": { transform: 'translateY(120%)', opacity: '0' },
            "51%": { transform: 'translateY(-120%)', opacity: '0' },
            "100%": { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shimmer": "shimmer 1.5s infinite",
        "swipe": "swipe 0.5s ease-in-out",
        "roll-down": "rollDown 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
