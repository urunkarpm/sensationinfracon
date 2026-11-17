import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#13284A',
        brass: '#B38B2E',
        paper: '#F5F6F2',
        mist: '#DCE2DE',
        text: '#1E2A36',
      },
      fontFamily: {
        heading: ['var(--font-granjon)', '"Granjon LT"', 'Georgia', 'serif'],
        serif: ['var(--font-granjon)', '"Granjon LT"', 'Georgia', 'serif'],
        body: ['var(--font-brandon)', '"Brandon Grotesque Light"', '"Brandon Grotesque"', 'sans-serif'],
        sans: ['var(--font-brandon)', '"Brandon Grotesque Light"', '"Brandon Grotesque"', 'sans-serif'],
        brandon: ['var(--font-brandon)', '"Brandon Grotesque"', 'sans-serif'],
        granjon: ['var(--font-granjon)', '"Granjon LT"', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
