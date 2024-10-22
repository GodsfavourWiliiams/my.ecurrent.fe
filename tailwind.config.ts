import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: '#12305B', // Deep navy blue
        },
        coral: '#FC5959', // Bright coral
        secondary: {
          DEFAULT: '#FBF9F2', // Off-white
        },
        olive: '#4D533C', // Dark olive green
        'sky-blue': '#8FE2FF', // Light sky blue
        'navy-dark': '#213842', // Dark navy
        emerald: '#27AE60', // Emerald green
        sunflower: '#FFD723', // Bright yellow
      },
      screens: {
        nano: '420px',
        xs: '480px',
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1636px',
        // => @media (min-width: 1636px) { ... }
        '4xl': '1736px',
        // => @media (min-width: 1736px) { ... }
      },
    },
  },
  plugins: [],
};

export default config;
