/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      colors: {
          primary: {
              lightest: '#C2D6D1',
              lighter: '#9EBDB5',
              light: '#6D9C8F',
              DEFAULT: '#324943',
              dark: '#21312C',
              darker: '#192421',
              darkest: '#111816',
          },
          secondary: {
              lightest: '#f9c8ce',
              lighter: '#f07f8c',
              light: '#EA485B',
              DEFAULT: '#5E0B15',
              dark: '#490910',
              darker: '#37060c',
              darkest: '#250408',
          },
          neutral: {
              lightest: '#f8f5f1',
              lighter: '#f1ece4',
              light: '#eae2d6',
              DEFAULT: '#D9CAB3',
              dark: '#c1a985',
              darker: '#a38252',
              darkest: '#6d5737',
          },
          accent: {
              lightest: '#d3a15f',
              lighter: '#cf974f',
              light: '#ca8e3f',
              DEFAULT: '#BC8034',
              dark: '#b07930',
              darker: '#a06e2c',
              darkest: '#906327',
          },
      },
  },
  plugins: [],
}
