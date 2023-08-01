/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dev': {
          'primary': '#3ADBC8',
          'secondary': '#1E82BA',
        },
        'pro': {
          'primary': '#FBB361',
          'secondary': '#CB861E',
        },
        'surface-primary': {
          dark: '#191B21',
          light: '#EFF2F8',
        },
        'surface-secondary': {
          dark: '#1F2025',
          light: '#DCE3F1',
        },
        'on-primary': {
          dark: '#D9E0EE',
          light: '#161320',
        },
        'on-secondary': {
          dark: '#A09EB2',
          light: '#575268',
        },
        'on-neutral': {
          dark: '#202036',
          light: '#EFF2F8',
        },
        'moss': {
          dark: '#3B6670',
          light: '#C3BAC6',
        },
        'metal': {
          dark: '#3F3F46',
          light: '#D4D4D8',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'display': ['var(--font-space-grotesk)', 'Helvetica', 'Arial', 'Open Sans'],
        'body': ['var(--font-dm-sans)', 'Helvetica', 'Arial', 'Open Sans'],
      },
    },
  },
  plugins: [],
}
